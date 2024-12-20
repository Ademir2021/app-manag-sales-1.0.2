import { useState, useContext, useEffect } from "react";
import { HandleNFeForm } from "../../components/nfe/HandleNFeForm";
import { AuthContext } from '../../context/auth'
import { postAuthHandle } from "../../services/handleService";
import { TSaleList } from "../sales/type/TSale";
import { TPerson } from "../persons/type/TPerson";

type INFeStatus = {
    nfe_autorizada: string
    nfe_impressa: string
    nfe_em_aberto: string
    nfe_cancelada: string
    nfe_inutilizada: string
    nfe_denegada: string
    nfe_com_problema: string
    nfe_enviada: string
}

function HandleNFe() {

    const { user: isLogged }: any = useContext(AuthContext);
    const [sales, setSales] = useState<TSaleList[]>([]);
    const [persons, setPersons] = useState<TPerson[]>([])
    const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")

    const [sales_autorizada, setSaleAutorizada] = useState<TSaleList[]>([])

    const [nfeStatus, setNFeStatus] = useState<INFeStatus>({
        nfe_autorizada: '',
        nfe_impressa: '',
        nfe_em_aberto: '',
        nfe_cancelada: '',
        nfe_com_problema: '',
        nfe_denegada: '',
        nfe_enviada: '',
        nfe_inutilizada: ''
    })

    function clearNfeStatus(){
        const nfeStatus_: INFeStatus = {
            nfe_autorizada: '',
            nfe_impressa: '',
            nfe_em_aberto: '',
            nfe_cancelada: '',
            nfe_com_problema: '',
            nfe_denegada: '',
            nfe_enviada: '',
            nfe_inutilizada: ''
        }
        setNFeStatus(nfeStatus_)
    }

    const handleChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setNFeStatus(values => ({ ...values, [name]: value }))
    }

    const getSales = async () => {
        await postAuthHandle('sale_user', setTokenMessage, setSales, isLogged)
        if (sales_autorizada.length == 0) {
            for (let sale of sales)
                if (nfeStatus.nfe_autorizada === 'on') {
                    if (sale.fk_name_pers === 1) {
                        sales_autorizada.push(sale)
                    }
                };
            for (let sale of sales)
                if (nfeStatus.nfe_cancelada === 'on') {
                    if (sale.fk_name_pers === 2) {
                        sales_autorizada.push(sale)
                    };
                };
            for (let sale of sales)
                if (nfeStatus.nfe_em_aberto === 'on') {
                    if (sale.fk_name_pers) {
                        sales_autorizada.push(sale)
                    };
                };
        }
        else if (sales_autorizada.length !== 0) {
            const sales_: TSaleList[] = []
            setSales(sales_)
        }
        clearNfeStatus()
    };

    const getPersons = async () => {
        await postAuthHandle('persons_user', setTokenMessage, setPersons, isLogged)
    };
    useEffect(() => {
        getPersons()
    }, [persons])

    function findPerson(id: number) {
        for (let person of persons)
            if (person.id_person === id)
                return person.name_pers
    }

    function handleSubmit(e: Event) {
        e.preventDefault()
        getSales()
    }

    function hanndleClear(e:Event){
        e.preventDefault()
        const sales_: TSaleList[] = []
        clearNfeStatus()
        setSaleAutorizada(sales_)
    }

    return (
        <>
            {/* <p>{JSON.stringify(nfeStatus)}</p> */}
            <HandleNFeForm
                sales={sales_autorizada}
                findPerson={findPerson}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleClear={hanndleClear}
            >
                {nfeStatus}
            </HandleNFeForm>
        </>
    )
}

export { HandleNFe }

