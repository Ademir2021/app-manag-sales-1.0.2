import { useState, useEffect } from "react";
import { CepsForm } from "../../components/ceps/CepsForm";
import { NavBar } from "../../components/navbar/Navbar";
import api from "../../services/api/api";
import { postRegister } from "../../services/handleService";

interface ICountries {
    id_country: number;
    name_country: string;
    acronym: number; //abreviação
    ddi: number;
    code_country: number //float code do País
    code_revenue: number;
    created_at?: Date;
};
interface ICities {
    id_city: number;
    name_city: string | undefined | any;
    uf: string;
    code_ibge: string;
    code_state_revenue: number;
    code_country: ICountries;
    created_at: Date;
    code_federal_revenue: number //float 
};
interface ICeps {
    id_cep?: number;
    num_cep: string;
    code_city: number;
    type_cep: string;
    public_place: string; //logradouro
    num_initial: Number
    num_final: number
    complement: string
    created_at?: Date
    city: string | undefined | any;
    uf: string;
};

export function Ceps() {

    const [selectedUf, setSelectedUf] = useState<string>("Selecione um Estado");
    const [selectedIdCity, setSelectedIdCity] = useState<any>(null);
    const [selectedNameCity, setSelectedNameCity] = useState<string | undefined>(undefined);
    const [cities, setCities] = useState<ICities[]>([])
    const [ceps, setCeps] = useState<ICeps[]>([])
    const [message, setMessage] = useState<string>("")
    const [alertCep, setAlertCep] = useState<string>("")
    const [cep, setCep] = useState<ICeps>({
        id_cep: 0, num_cep: "", code_city: 0, type_cep: "",
        public_place: "", num_initial: 0, num_final: 0,
        complement: "", city: "", uf: ""
    })

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setCep(values => ({ ...values, [name]: value }))
    };

    useEffect(() => {

        const getOneCity = async () => {

            try {
                await api.get<ICities>(`on_city/${selectedIdCity}`)
                    .then(response => {
                        setSelectedNameCity(response.data.name_city)
                    })
            } catch (err) {
                alert("err: " + err);
            }
        }

        async function getCities() {

            try {
                await api.get<ICities[]>(`/cities`)
                    .then(response => {
                        const _cities: ICities[] = []
                        const res: ICities[] = response.data
                        for (let i = 0; res.length > i; i++) {
                            if (res[i].uf === selectedUf) {
                                setSelectedUf(selectedUf)
                                _cities.push(res[i])
                                setCities(_cities)
                            }
                        }
                    })
            } catch (err) { alert("err " + err) }
        };
        getOneCity()
        getCities()
    }, [selectedUf, selectedIdCity])

    useEffect(() => {
        async function getCeps() {
            try {
                await api.get<ICeps[]>(`ceps`)
                    .then(response => { setCeps(response.data) })
            } catch (err) { alert("err " + err) }
        };
        getCeps()
    }, [ceps])

    function checkCepExist() {
        for (let cep_ of ceps) {
            if (cep_.num_cep === cep.num_cep)
                return true
        }
        return false
    }

    function cepValFields(cep: ICeps) {
        let msg = ""
        if (cep.num_cep === "") { msg += "Digite um CEP válido ! _\n" };
        if (cep.public_place === "") { msg += "Digite seu Logradouro ! _ \n" };
        if (cep.type_cep === "") { msg += "Digite tipo de Cep ! _\n" };
        if (cep.num_initial === 0) { msg += "Digite num inicial ! _\n" };
        if (cep.num_final === 0) { msg += "Digite num final ! _\n" };
        if (cep.complement === "") { msg += "Digite um complemento ! _\n" };
        if (checkCepExist() === true) { msg += "Cep já existe ! _\n" };
        if (selectedUf === "Selecione um Estado") { msg += "Selecione um Estado ! _\n" };
        if (selectedNameCity === undefined) { msg += "Selecione uma Cidade\n" };
        if (msg !== "") {
            setMessage(msg)
            return false;
        };
        return true;
    };

    function handleSubmit(e: Event) {
        e.preventDefault()
        if (checkCepExist() === false) {
            setAlertCep("")
            if (cepValFields(cep)) {
                cep.uf = selectedUf
                cep.code_city = selectedIdCity
                cep.city = selectedNameCity
                postRegister(cep, 'ceps')
            }
        } else { setAlertCep("CEP já existente na base") }
    }

    return (
        <>
            <NavBar />
            <CepsForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                listUf={setSelectedUf}
                listCity={cities}
                setSelectedIdCity={setSelectedIdCity}
                alertCep={alertCep}
                message={message}
            >
                {cep}
            </CepsForm>
        </>
    )
}