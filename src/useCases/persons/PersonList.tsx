import { useState, useEffect, useContext } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { PersonList } from "../../components/persons/PersonList";
import { Dashboard } from "../dashboard/Dashboard";
import { TPersonRegister, TCeps, TCities } from './type/TypePerson'
import { HandleEnsureAuth } from "../../services/HandleEnsureAuth";
import { AuthContext } from '../../context/auth'
import api from "../../services/api/api";

export function PersonsList() {

    const { user: isLogged }: any = useContext(AuthContext);
    const [persons, setPersons] = useState<TPersonRegister[]>([])
    const [ceps, setCeps] = useState<TCeps[]>([])
    const [cities, setCities] = useState<TCities[]>([])

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
                await api.post<TPersonRegister[]>('persons_user', isLogged, { headers })
                    .then(response => {
                        setTokenMessage("Token Válido !")
                        const res: TPersonRegister[] = response.data
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
                await api.get<TCeps[]>(`/ceps`)
                    .then(response => { setCeps(response.data) })
            } catch (err) { alert("error occurred !!" + err) }
        };
        getCeps()
    }, [ceps])

    useEffect(() => {
        async function getCities() {
            try {
                await api.get<TCities[]>(`/cities`)
                    .then(response => { setCities(response.data) })
            } catch (err) { alert("error occurred !!" + err) }
        };
        getCities()
    }, [cities])

    function setCep(idCep: number) {
        for (let i = 0; i < ceps.length; i++) {
            if (ceps[i].id_cep === idCep) {
                return ceps[i];
            }
        }
    }

    function setCity(idCep: number) {
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].id_city === idCep) {
                return cities[i]
            }
        }
    }

    return (
        <>
                <Dashboard />
            <div className="text-center"><a href="person_list">{tokenMessage}</a></div>
            {persons.length === 0 ? <p>Carregando...</p> : (
                persons.map((person: TPersonRegister) => (
                    <PersonList
                        key={person.id_person}
                        id_person={person.id_person}
                        created_at={FormatDate(person.created_at)}
                        updated_at={(person.updated_at === null ?
                            "não houve atualização" : FormatDate(person.updated_at))}
                        name={person.name_pers}
                        phone={person.phone_pers}
                        address={person.address_pers}
                        num_address={person.num_address}
                        bairro={person.bairro_pers}
                        num_cep={person.num_cep = setCep(person.fk_cep)?.num_cep}
                        name_city={setCity(person.fk_cep)?.name_city}
                        uf={setCity(person.fk_cep)?.uf}
                        cpf={person.cpf_pers}
                        id_user={person.fk_id_user}
                        filial={person.fk_name_filial}
                        update={null}
                    />
                )))}
        </>
    )
}