import { useState, useEffect, useContext } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { PersonList } from "../../components/persons/PersonList";
import { Dashboard } from "../dashboard/Dashboard";
import { TPerson } from './type/TPerson'
import { ICeps, ICities } from "../ceps/type/TCeps";
import { HandleEnsureAuth } from "../../services/HandleEnsureAuth";

import { AuthContext } from '../../context/auth'
import api from "../../services/api/api";

export function PersonsList() {
    const { user: isLogged }: any = useContext(AuthContext);
    const [persons, setPersons] = useState<TPerson[]>([])
    const [ceps, setCeps] = useState<ICeps[]>([])
    const [cities, setCities] = useState<ICities[]>([])
    const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")

    useEffect(() => {
        async function getPerson() {
            const res: any | undefined = localStorage.getItem('token')
            const token: string = JSON.parse(res)
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                await api.post<TPerson[]>('persons_user', isLogged, { headers })
                    .then(response => {
                        setTokenMessage("Token Válido!")
                        const res: TPerson[] = response.data
                        setPersons(res)
                    })
            }
            catch (err) {
                // console.log("error occurred !!" + err)
                setTokenMessage(" Erro: 401 - Token Expirado ! ")
                await HandleEnsureAuth()
            }
        };
        getPerson()
    }, [persons])

    useEffect(() => {
        async function getCeps() {
            try {
                await api.get<ICeps[]>(`/ceps`)
                    .then(response => { setCeps(response.data) })
            } catch (err) { alert("err " + err) }
        };
        getCeps()
    }, [ceps])

    useEffect(() => {
        async function getCities() {
            try {
                await api.get<ICities[]>(`/cities`)
                    .then(response => { setCities(response.data) })
            } catch (err) { alert("err " + err) }
        };
        getCities()
    }, [cities])

    function setCep(idCep: number) {
        for (let cep of ceps) {
            if (cep.id_cep === idCep)
                return cep;
        }
    }

    function setCity(idCep: number) {
        for (let city of cities) {
            if (city.id_city === idCep)
                return city
        }
    }

    return (
        <>
            <Dashboard />
            <div className="text-center"><a href="person_list">{tokenMessage}</a></div>
            {persons.length === 0 ? <p>Carregando...</p> : (
                persons.map((per: TPerson) => (
                    <PersonList
                        key={per.id_person}
                        id_person={per.id_person}
                        created_at={FormatDate(per.created_at)}
                        updated_at={(per.updated_at === null ?
                            "não houve atualização" : FormatDate(per.updated_at))}
                        name={per.name_pers}
                        phone={per.phone_pers}
                        address={per.address_pers}
                        num_address={per.num_address}
                        bairro={per.bairro_pers}
                        num_cep={per.num_cep = setCep(per.fk_cep)?.num_cep}
                        name_city={setCity(per.fk_cep)?.name_city}
                        uf={setCity(per.fk_cep)?.uf}
                        cpf={per.cpf_pers}
                        rg={per.rg}
                        cnpj={per.cnpj}
                        inscricao={per.inscricao}
                        id_user={per.fk_id_user}
                        filial={per.fk_name_filial}
                        fk_grupo={per.fk_grupo}
                        update={null}
                    />
                )))}
        </>
    )
}