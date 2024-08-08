import { useState, useEffect, useRef, useContext } from "react"
import { FormatDate } from "../../components/utils/formatDate"
import { PersonFormUpdate } from "../../components/persons/PersonFormUpdate"
import { PersonList } from "../../components/persons/PersonList"
import { Dashboard } from "../dashboard/Dashboard"
import { TPersonRegister, TCeps, TCities } from './type/TypePerson'
import { PersonsValFields } from "../../components/utils/crypt/Crypt"
import { HandleEnsureAuth } from "../../services/HandleEnsureAuth"
import { AuthContext } from '../../context/auth'
import api from "../../services/api/api"

import "../../App.css"

export function PersonUpdate() {
    const { user: isLogged }: any = useContext(AuthContext)
    const [persons, setPersons] = useState<TPersonRegister[]>([])
    const [ceps, setCeps] = useState<TCeps[]>([])
    const [cities, setCities] = useState<TCities[]>([])
    const [person, setPerson] = useState<TPersonRegister>({
        created_at: '', updated_at: '', name_pers: '',
        num_address: "", cpf_pers: "", phone_pers: "", address_pers: "",
        bairro_pers: "", fk_cep: 0, name_city: "", uf: "",
        num_cep: "", fk_name_filial: 1, fk_id_user: 0
    })
    const isLoggedParams: number = isLogged[0].id
    const [dropdown, setDropdown] = useState<string>("");
    const modalRef = useRef<any>(null);
    const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")

    function listUpdate(_person: TPersonRegister) {
        person.id_person = _person.id_person
        person.name_pers = _person.name_pers
        person.cpf_pers = _person.cpf_pers
        person.phone_pers = _person.phone_pers
        person.address_pers = _person.address_pers
        person.num_address = _person.num_address
        person.bairro_pers = _person.bairro_pers
        person.num_cep = _person.num_cep
        person.fk_cep = setNumCep(person.num_cep);
        person.name_city = _person.name_city
        person.uf = _person.uf
        getPersons()
        toggleDropdown()
    };

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson(values => ({ ...values, [name]: value }))
    };

    async function getPersons() {
        const res: any | undefined = localStorage.getItem('token')
        const token = JSON.parse(res)
        try {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            await api.post<TPersonRegister[]>('persons_user', isLogged, { headers })
                .then(response => {
                    setTokenMessage("Token Válido !")
                    const resp: TPersonRegister[] = response.data
                    setPersons(resp)
                    for (let res of resp) {
                        if (person.id_person === res.id_person)
                            person.name_pers = res.name_pers
                            person.cpf_pers = res.cpf_pers
                            person.phone_pers = res.phone_pers
                            person.address_pers = res.address_pers
                            person.num_address = res.num_address
                            person.bairro_pers = res.bairro_pers
                            person.fk_name_filial = res.fk_name_filial
                            person.fk_id_user = res.fk_id_user
                    }
                })

        } catch (err) {
            // console.log("error occurred !!" + err)
            setTokenMessage("Erro: 401 - Token Expirado!")
            await HandleEnsureAuth()
        }
    };

    if (person.fk_id_user === 0) { /** Busca Person somente 1 vez ! */
        getPersons()
        person.fk_id_user = isLoggedParams
    }

    useEffect(() => {
    }, [person.id_person])

    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (PersonsValFields(person)) {
            listUpdate(person); //Atualiza o CEP do Cliente
            person.cpf_pers = person.cpf_pers.replace(/[..-]/g, '')
            person.phone_pers = person.phone_pers.replace(/[()-]/g, '')
            if (person.fk_cep === undefined) {
                alert('Digite um Cep válido')
            } else {
                await api.post<any[]>('person', person)
                    .then(response => {
                        const res = response.data
                        const msg = JSON.stringify(res)
                        alert(msg)
                    })
                    .catch(error => alert(error));
            }
        } else { alert("Digite um novo usuário") }
    }

    async function handleUpdate(e: Event) {
        e.preventDefault();
        if (PersonsValFields(person)) {
            listUpdate(person); //Atualiza o CEP do Cliente
            person.cpf_pers = person.cpf_pers.replace(/[..-]/g, '')
            person.phone_pers = person.phone_pers.replace(/[()-]/g, '')
            if (person.fk_cep === undefined) {
                alert('Digite um Cep válido')
            } else {
                await api.put<any[]>('person_update', person)
                    .then(response => {
                        alert(response.data)
                    })
                    .catch(error => alert(error));
            }
            getPersons()
        }
    }

    async function handleDelete(e: Event) {
        e.preventDefault();
        setPerson({
            id_person: 0, created_at: '', name_pers: '', cpf_pers: "",
            phone_pers: "", address_pers: "", num_address: '', bairro_pers: "", fk_cep: 0,
            name_city: "", uf: "", num_cep: "", fk_name_filial: 1, fk_id_user: 0
        })
        person.fk_id_user = isLogged[0].id
        alert("Digite um novo usuário !!")
    }

    function toggleDropdown(): void {
        setDropdown("modal-show");
    };

    function closeDropdown(e: Event) {
        e.stopPropagation();
        const contain = modalRef.current.contains(e.target);
        if (contain) {
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
        if (person.name_pers !== null) {
            window.location.replace("/invoice_sales");
        }
    };

    useEffect(() => {
        async function getCeps() {
            try {
                await api.get(`/ceps`)
                    .then(response => { setCeps(response.data) })
            } catch (err) { alert("error occurred !!" + err) }
        }
        getCeps()
    }, [ceps])

    useEffect(() => {
        async function getCities() {
            try {
                await api.get(`/cities`)
                    .then(response => { setCities(response.data) })
            } catch (err) { alert("error occurred !!" + err) }
        }
        getCities()
    }, [cities])

    function setCep(idCep: number) {
        for (let cep of ceps) {
            if (cep.id_cep === idCep)
                return cep
        }
    }

    function setCity(idCep: number) {
        for (let city of cities) {
            if (city.id_city === idCep)
                return city
        }
    }

    const setNumCep = (numCep: string) => {
        for (let cep of ceps) {
            if (cep.num_cep === numCep)
                return cep.id_cep;
        }
        for (let cep of ceps) {
            if (cep.num_cep !== numCep)
                return undefined;
        }
    }

    return (
        <>
            <PersonFormUpdate
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                handleChange={handleChange}
                close={closeDropdown}
                className={dropdown}
                modalRef={modalRef}
                alert=""
                message=""
            >
                {person}
            </PersonFormUpdate>
            <Dashboard />
            <div className="text-center"><a href="person_update">{tokenMessage}</a></div>
            {persons.length === 0 ? <p>Carregando...</p> : (
                persons.map((person: TPersonRegister) => (
                    <PersonList
                        key={person.id_person}
                        id_person={person.id_person}
                        created_at={FormatDate(person.created_at)}
                        updated_at={person.updated_at === null ?
                            "não houve atualização" : (FormatDate(person.updated_at))}
                        name={person.name_pers}
                        phone={person.phone_pers}
                        address={person.address_pers}
                        num_address={person.num_address}
                        bairro={person.bairro_pers}
                        num_cep={person.num_cep = setCep(person.fk_cep)?.num_cep}
                        name_city={person.name_city = setCity(person.fk_cep)?.name_city}
                        uf={person.uf = setCity(person.fk_cep)?.uf}
                        cpf={person.cpf_pers}
                        id_user={person.fk_id_user}
                        filial={person.fk_name_filial}
                        update={<button onClick={() =>
                            listUpdate(person)}>Atualizar</button>}
                    />
                )))}
        </>
    )
}

