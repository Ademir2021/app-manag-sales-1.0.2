import InputMask from 'react-input-mask';

import '../global-module.css'

interface Props {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    handleSubmit: any
    alertCep: string
    message: string
    listUf: React.ChangeEvent<HTMLSelectElement> | EventTarget & HTMLSelectElement | any
    listCity: object[]
    setSelectedIdCity: React.ChangeEvent<HTMLSelectElement> | EventTarget & HTMLSelectElement | any
}

export function CepsForm({
    children,
    handleChange,
    handleSubmit,
    alertCep,
    message,
    listUf,
    listCity,
    setSelectedIdCity
}: Props) {

    return (
        <>
            <div className="container-global">
                <fieldset className="main-global">
                    <form className="main-global-form">
                        <strong>Cadastro de Ceps<a href="form_person">Cadastro de clientes</a></strong>
                        <label>{alertCep}</label><br />
                        <dd>Cep</dd>
                        <InputMask
                            mask={"99.999-999"}
                            type="text"
                            name="num_cep"
                            placeholder='CEP de sua cidade - Confirmar/Registrar'
                            value={children.num_cep || ""}
                            onChange={handleChange}
                        />
                        <dd>Endereço</dd>
                        <input
                            type="text"
                            name="public_place"
                            placeholder='Logradouro'
                            value={children.public_place || ""}
                            onChange={handleChange}
                        />
                        <dd>Tipo de Cep</dd>
                        <input
                            type="text"
                            name="type_cep"
                            placeholder='Tipo de CEP'
                            value={children.type_cep || ""}
                            onChange={handleChange}
                        />
                        <dd>Número inicial</dd>
                        <input
                            type="number"
                            name="num_initial"
                            placeholder='número inicial'
                            value={children.num_initial || ""}
                            onChange={handleChange}
                        />
                        <dd>Número Final</dd>
                        <input
                            type="number"
                            name="num_final"
                            placeholder='número final'
                            value={children.num_final || ""}
                            onChange={handleChange}
                        />
                        <dd>Complemento</dd>
                        <input
                            type="text"
                            name="complement"
                            placeholder='Complemento'
                            value={children.complement || ""}
                            onChange={handleChange}
                        />
                        <label>{message}</label>
                        <label>
                            <strong>Selecione um Estado </strong>
                            <select onChange={e => listUf(e.target.value)}>
                                <option>{"Selecione um Estado"}</option>
                                <option>{"AC"}</option>
                                <option>{"AL"}</option>
                                <option>{"AP"}</option>
                                <option>{"AM"}</option>
                                <option>{"BA"}</option>
                                <option>{"CE"}</option>
                                <option>{"DF"}</option>
                                <option>{"ES"}</option>
                                <option>{"GO"}</option>
                                <option>{"MA"}</option>
                                <option>{"MT"}</option>
                                <option>{"MS"}</option>
                                <option>{"MG"}</option>
                                <option>{"PA"}</option>
                                <option>{"PB"}</option>
                                <option>{"PR"}</option>
                                <option>{"PE"}</option>
                                <option>{"PI"}</option>
                                <option>{"RJ"}</option>
                                <option>{"RN"}</option>
                                <option>{"RS"}</option>
                                <option>{"RO"}</option>
                                <option>{"RR"}</option>
                                <option>{"SC"}</option>
                                <option>{"SP"}</option>
                                <option>{"SE"}</option>
                                <option>{"TO"}</option>
                            </select>
                        </label>
                        <label>
                            <strong>Selecione um Município</strong>
                            <select onChange={e => setSelectedIdCity(e.target.value)}>
                                <option>Escolha um Municipio</option>
                                {listCity.map((city: any) => (
                                    <option
                                        key={city.id_city}
                                        value={city.id_city}
                                    >
                                        {city.name_city}
                                    </option>))}</select>
                        </label>

                        {/* <input
                            type="text"
                            name="city"
                            placeholder="Município"
                            value={children.city || ""}
                            onChange={handleChange}
                            disabled
                        /> */}
                        {/* <button type="reset">Reset</button> */}
                        <button onClick={handleSubmit}>Registrar</button>
                        <a href='###'>{''}</a>
                    </form>
                </fieldset>
            </div>
        </>
    )
}