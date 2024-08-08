import { useState, useEffect } from "react";
import { PersonForm } from '../../components/persons/PersonForm';
import { PersonsValFields } from '../../components/utils/crypt/Crypt';
import { Dashboard } from "../dashboard/Dashboard";
import { TPersonRegister, TCeps } from "./type/PersonCeps";
import api from "../../services/api/api";

export function FormPerson() {
    const [person, setPerson] = useState<TPersonRegister>({
        name_pers: "", cpf_pers: "", phone_pers: "", address_pers: "",
        num_address: "", bairro_pers: "", fk_cep: 0, name_city: "", uf: "",
        num_cep: "", fk_name_filial: 1, fk_id_user: 0
    })

    const [ceps, setCeps] = useState<TCeps[]>([])
    const res: any = localStorage.getItem('u')
    const [userIdLogged] = useState(JSON.parse(res))
    person.fk_id_user = userIdLogged[0].id

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson(values => ({ ...values, [name]: value }))
    }

    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (PersonsValFields(person)) {
            person.cpf_pers = person.cpf_pers.replace(/[..-]/g, '')
            person.phone_pers = person.phone_pers.replace(/[()-]/g, '')
            new setNumCeps().setNumCep()
            if (person.fk_cep === undefined) {
                alert("Digite um CEP válido")
            } else {
                await api.post<any[]>('person', person)
                    .then(response => {
                        const res = response.data
                        const msg = JSON.stringify(res)
                        alert(msg)
                    })
                    .catch(error => alert(error));
            }
        }
    }

    useEffect(() => {
        async function getCeps() {
            try {
                await api.get<TCeps[]>(`/ceps`)
                    .then(response => {
                        setCeps(response.data)
                    })
            } catch (err) {
                alert("error occurred !" + err)
            }
        };
        getCeps()
    }, [ceps])

    class setNumCeps {
        setNumCep() {
            for (let cep of ceps) {
                if (cep.num_cep !== person.num_cep)
                    person.fk_cep = undefined
                setPerson(person)
            }
            for (let cep of ceps) {
                if (cep.num_cep === person.num_cep)
                    person.fk_cep = cep.id_cep;
                setPerson(person)
            }
        }
    }

    return (
        <>
            <Dashboard />
            <PersonForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                alert="."
                message="."
            >
                {person}
            </PersonForm>
        </>
    )
}
