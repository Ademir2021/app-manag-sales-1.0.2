import { useState, useRef, useContext } from 'react';
import { UserFormUpdate } from "../../components/users/UserFormUpdate";
import { crypt } from '../../components/utils/crypt/Crypt'
import { AuthContext } from '../../context/auth'
import { ButtonOnClick } from '../../components/utils/btnOnClick/BtnOnClick';
import { HandleEnsureAuth } from '../../services/HandleEnsureAuth';
import api from '../../services/api/api'

import '../../App.css'
import { Dashboard } from '../dashboard/Dashboard';

type TUpdateUser = {
    id: number;
    created_at?: Date | any;
    name: string;
    username: string;
    password: string;
    psw_repeat: string;
}

export function UserUpdate() {

    const [msg, setAlert] = useState<string>("")
    const [message, setMessage] = useState<any>("")
    const [dropdown, setDropdown] = useState<string>("");
    const { user: isLogged }: any = useContext(AuthContext);
    const isLoggedParams:number = isLogged[0].id
    const modalRef = useRef<any>(null);
    const [, setUsers] = useState<TUpdateUser[]>([])
    const [user, setUser] = useState<TUpdateUser>({
        id: 0, name: "", username: "", password: "", psw_repeat: ""
    })
    const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(values => ({ ...values, [name]: value }))
    }

    async function registerUser(): Promise<void> {
        await api.post<TUpdateUser[]>('/user', user)
            .then(response => {
                const res:any = response.data
                setMessage(res[0].msg)
            }).catch(error => console.log(error))
    }

    async function updateUser() {
        await api.put<TUpdateUser>('user_update', user)
            .then(response => {
                const res:any = response.data
                alert(JSON.stringify(res[0].msg))
                setAlert(res[0].msg)
            })
            .catch(error => alert(error))
    }
    async function getUsers() {
        const res: any | undefined = localStorage.getItem('token')
        const token = JSON.parse(res)
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
           await api.post('users_list', isLogged, { headers })
                .then(response => {
                    setTokenMessage("Token Válido !")
                    const res: TUpdateUser[] = response.data
                    for (let i = 0; res.length > i; i++) {
                        if (res[i].id === isLoggedParams) {
                            user.id = res[i].id
                            user.name = res[i].name
                            user.username = res[i].username
                            setUsers(res)
                        }
                    }
                })
        } catch (err) {
            // console.log("error occurred !!" + err)
            setTokenMessage(" Erro: 401 - Token Expirado ! ")
            await HandleEnsureAuth()
        }
    };

    function UsersValFields(user: any) {
        let msg = ""
        if (user.name === "") { msg += "Digite o seu nome completo !\n" };
        if (user.username === "") { msg += "Digite um email válido !\n" };
        if (user.password === "") { msg += "Digite sua senha !\n" };
        if (user.psw_repeat !== user.password) { msg += "Senha digitada está errada !\n" };
        if (msg !== "") {
            setAlert(msg)
            return false;
        };
        return true;
    };

    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (UsersValFields(user)) {
            user.password = crypt(user.password)
            registerUser()
        } else {
            setMessage("Digite um novo usuário")
            setTimeout(() => {
                setMessage('')
                setAlert('')
            }, 2000);
        }
    }

    async function handleUpdate(e: Event) {
        e.preventDefault();
        if (UsersValFields(user)) {
            user.password = crypt(user.password)
            updateUser()
            user.password = ''
            user.psw_repeat = ''
        }
        setTimeout(() => {
            setAlert('')
        }, 2000);
    }

    async function handleDelete(e: Event) {
        e.preventDefault();
        setUser({
            id: 0, name: "", username: "",
            password: "", psw_repeat: ""
        })
        setAlert("Digite um novo usuário !")
        setTimeout(() => {
            setAlert('')
        }, 2000);
    }

    function toggleDropdown(): void {
        getUsers()
        setDropdown("modal-show");
    }

    function closeDropdown(e: Event) {
        e.stopPropagation();
        const contain = modalRef.current.contains(e.target);
        if (contain) {
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    }

    return (
        <>
        <Dashboard />
         <div className="text-center"><a href="user_update">{tokenMessage}</a></div>
            <ButtonOnClick
                onClickHandle={toggleDropdown}
                text={"Sua conta - Criar/Atualizar/Alterar senha."} />
            <UserFormUpdate
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleChange={handleChange}
                close={closeDropdown}
                className={dropdown}
                modalRef={modalRef}
                message={message}
                alert={msg}
            >
                {user}
            </UserFormUpdate>
        </>
    )
}
