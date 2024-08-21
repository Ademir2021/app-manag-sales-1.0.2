import { useEffect, useState, useContext } from "react"
import { TContaAPagar, TValsPagos } from "./type/TContasAPagar";
import { HandleEnsureAuth } from "../../services/HandleEnsureAuth";
import { AuthContext } from '../../context/auth'
import api from "../../services/api/api"
import { TPersonRegister } from "../persons/type/TypePerson";
import { postRegister } from "../../services/handleService";
import { ContasAPagarRegisterForm } from "../../components/contasAPagar/ContasAPagarRegisterForm";

export function ContasAPagarRegister() {
    const [IdPerson, setIdPerson] = useState<number>(0)
    const [sendConta, setSendConta] = useState<boolean>(false)
    const [msg, setMsg] = useState<string>('Aguardando titulo')
    const [persons, setPersons] = useState<TPersonRegister[]>([])
    const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")
    const { user: isLogged }: any = useContext(AuthContext);
    const [contaAPagar, setContaAPagar] = useState<TContaAPagar>({
        id_conta: 0,
        fk_filial: 0,
        tipo: "leg",
        fk_compra: 0,
        fk_user: isLogged[0].id,
        parcela: '1/1',
        valor: 0,
        multa: 0,
        juros: 0,
        desconto: 0,
        emissao: new Date().toISOString(),
        vencimento: '',
        saldo: 0,
        pagamento: null,
        recebimento: 0,
        observacao: "",
        fk_pagador: 0

    });

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setContaAPagar(values => ({ ...values, [name]: value }))
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

    function getContaAPagar() {
        contaAPagar.vencimento = new Date(contaAPagar.vencimento).toISOString()
        contaAPagar.valor = parseFloat(contaAPagar.valor).toFixed(3)
        if (persons.length > 0)
            contaAPagar.fk_pagador = IdPerson
        contaAPagar.fk_filial = persons[0].fk_name_filial
    }

    function clerFields(){
        contaAPagar.valor = 0
        contaAPagar.vencimento = ''
        contaAPagar.observacao = ''
    }

    function handleSubmit() {
        getContaAPagar()
        if (sendConta === false) {
            postRegister(contaAPagar, 'contas_pagar')
            setMsg('Titulo gravado com sucesso')
            clerFields()
            setSendConta(true)
        } else { setMsg('Titulo já foi enviado') }
    }

    return (
        <>
            <p className="text-center p-3">{tokenMessage}</p>
            <ContasAPagarRegisterForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                msg={msg}
                listPersons={<select
                    onChange={e => setIdPerson(parseInt(e.target.value))}
                >
                    <option>Selecione um pagador</option>
                    {persons.map((person: TPersonRegister) => (
                    <option
                        key={person.id_person}
                        value={person.id_person}
                    >
                        { person.name_pers }
                        {" - " + person.cpf_pers }
                    </option>
                ))}</select>}
            >
                {contaAPagar}
            </ContasAPagarRegisterForm>
        </>
    )
}

