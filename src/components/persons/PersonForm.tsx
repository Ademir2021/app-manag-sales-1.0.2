// import React from "react";
import InputMask from "react-input-mask";
import '../../components/global-module.css'

type Props = {
    children: string | number | readonly string[] | undefined | any
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    handleSubmit: any
    message: string
    alert: string
}
export function PersonForm({
    children,
    handleChange,
    handleSubmit,
    message,
    alert,
}: Props) {
    return (
        <div className='container-global'>
            <fieldset className='main-global'>
                <form className='main-global-form'>
                    <strong>Cadastro de Clientes<a href="ceps">Seu CEP</a></strong>
                    <label>{alert}</label>
                    <label>{message}</label>
                    <dd>Nome</dd>
                    <input className=""
                        type="text"
                        name="name_pers"
                        placeholder='Seu nome'
                        value={children.name_pers || ""}
                        onChange={handleChange}
                    />
                    <dd>CPF</dd>
                    <InputMask className=""
                        type="text"
                        name="cpf_pers"
                        placeholder="Seu CPF"
                        mask="999.999.999-99"
                        mask-selectonfocus="true"
                        maxLength={14}
                        autoComplete="off"
                        maskChar={null}
                        value={children.cpf_pers || ""}
                        onChange={handleChange}
                    />
                    <dd>Telefone</dd>
                    <InputMask className=""
                        type="text"
                        name="phone_pers"
                        placeholder="Seu telefone"
                        mask="(99)99999-9999"
                        mask-selectonfocus="true"
                        maxLength={14}
                        autoComplete="off"
                        maskChar={null}
                        value={children.phone_pers || ""}
                        onChange={handleChange}
                    />
                    <dd>Endereço</dd>
                    <input className=""
                        type="text"
                        name="address_pers"
                        placeholder={'Seu endereço'}
                        value={children.address_pers || ""}
                        onChange={handleChange}
                    />
                    <dd>Número</dd>
                    <input className=""
                    type="text"
                    name="num_address"
                    placeholder="Número do endereço"
                    value={children.num_address || ''}
                    onChange={handleChange}
                    />
                    <dd>Bairro</dd>
                    <input className=""
                        type="text"
                        name="bairro_pers"
                        placeholder={'Seu Bairro'}
                        value={children.bairro_pers || ""}
                        onChange={handleChange}
                    />
                    <dd>CEP</dd>
                    <InputMask
                        mask={"99.999-999"}
                        type="text"
                        name="num_cep"
                        value={children.num_cep || ""}
                        placeholder="CEP de sua cidade"
                        onChange={handleChange}
                    />
                    <input className=""
                        type="hidden"
                        name="fk_name_filial"
                        placeholder='Filial do cliente'
                        disabled
                        value={children.fk_name_filial || ""}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Registrar</button><br />
                    <a href='/invoice_sales'>Faturamento <b>clique aqui</b></a>< br />
                    <a href='###'>{'Mantenha seu cadastro atualizado'}</a>
                </form>
            </fieldset>
        </div>
    )
}