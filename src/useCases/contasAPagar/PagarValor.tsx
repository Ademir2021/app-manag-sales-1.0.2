import { useEffect, useState, useContext } from "react"
import { TValsPagos } from "./type/TContasAPagar";
import { PagarValorForm } from "../../components/contasAPagar/PagarValorForm";
import { HandleEnsureAuth } from "../../services/HandleEnsureAuth";
import { TPersonRegister } from "../persons/type/TypePerson";
import { postRegister } from "../../services/handleService";
import { AuthContext } from '../../context/auth'
import api from "../../services/api/api"

export function PagarValor() {
    const [IdPerson, setIdPerson] = useState<number>(0)
    const [sendValor, setSendValor] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>('Aguardando valor')
    const [persons, setPersons] = useState<TPersonRegister[]>([])
    const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")
    const { user: isLogged }: any = useContext(AuthContext);
    const [pagarValor, setReceberValor] = useState<TValsPagos>({
        id_val: 0,
        fk_conta: 0,
        fk_compra: 0,
        fk_user: isLogged[0].id,
        valor: 0,
        data_recebimento: new Date().toISOString(),
        descricao: '',
        fk_person: 0,
        fk_despesa:0
    })

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setReceberValor(values => ({ ...values, [name]: value }))
    };

    useEffect(() => {
        async function getPerson() {
            const res: any | undefined = localStorage.getItem('token')
            const token: string = JSON.parse(res)
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                await api.post<TPersonRegister[]>('persons_user', isLogged, { headers })
                    .then(response => {
                        setTokenMessage("Token Válido !")
                        const persons: TPersonRegister[] = response.data
                        setPersons(persons)
                    })
            }
            catch (err) {
                await HandleEnsureAuth()
                // console.log("error occurred !!" + err)
                setTokenMessage(" Erro: 401 - Token Expirado ! ")
            }
        };
        getPerson()
    }, [persons])

    function clearFields() {
        pagarValor.valor = 0
        pagarValor.descricao = ''
    }

    function handleSubmit() {
        if (persons.length > 0)
            pagarValor.fk_person = IdPerson
        if (sendValor === false) {
            postRegister(pagarValor, 'val_pago')
            setSendValor(true)
            clearFields()
            setMsg('Valor registrado com sucesso')
        } else {
            setMsg('Valor já foi registrado')
        }
    }

    return (
        <>
        <p className="text-center p-3">{tokenMessage}</p>
            <PagarValorForm
                handlechange={handleChange}
                handleSubmit={handleSubmit}
                listPersons={<select
                    onChange={e => setIdPerson(parseInt(e.target.value))}
                >
                    <option>Selecione um pagador</option>
                    {persons.map((person: TPersonRegister) => (
                        <option
                            key={person.id_person}
                            value={person.id_person}
                        >
                            {person.name_pers}
                            {" - " + person.cpf_pers}
                        </option>
                    ))}</select>}
                msg={msg}
            >
                {pagarValor}
            </PagarValorForm>
        </>
    )
}