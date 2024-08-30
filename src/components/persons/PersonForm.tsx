import { useState } from "react";
import InputMask from "react-input-mask";
import { checkAdminPrivilege } from "../utils/checksUserLogged/ChecksUserLogged";

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

    const [tpPerson, setTpPerson] = useState('Pessoa-Fisica')

    const naturalPerson = <>
        <dd>CPF</dd>
        <InputMask
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
        <dd>RG</dd>
        <InputMask
            type="text"
            name="rg"
            placeholder="Seu RG"
            mask="999.999.999-9"
            mask-selectonfocus="true"
            maxLength={14}
            autoComplete="off"
            maskChar={null}
            value={children.rg || ""}
            onChange={handleChange}
        />
    </>

    const legalPerson = <>
        <dd>Nome Fantasia</dd>
        <input
            type="text"
            name="fantasia"
            placeholder="Nome fantasia"
            value={children.fantasia || ""}
            onChange={handleChange}
        />
        <dd>CNPJ</dd>
        <InputMask
            type="text"
            name="cnpj"
            placeholder="CNPJ da empresa"
            mask="99.999.999/9999-99"
            mask-selectonfocus="true"
            maxLength={18}
            autoComplete="off"
            maskChar={null}
            value={children.cnpj || ""}
            onChange={handleChange}
        />
        <dd>Inscrição estadual</dd>
        <InputMask
            type="text"
            name="inscricao"
            placeholder="Inscrição estadual"
            mask=""
            mask-selectonfocus="true"
            maxLength={9}
            autoComplete="off"
            maskChar={null}
            value={children.inscricao || ""}
            onChange={handleChange}
        />
    </>

    const limiteCredito = <>
        <dd>Limite de crédito</dd>
        <InputMask
            type="number"
            name="limit_cred"
            placeholder='Informe o limite para crédito'
            mask=""
            max-selectfucus='true'
            maxLength={9}
            autoComplete="off"
            maskChar={null}
            value={children.limit_cred || ""}
            onChange={handleChange}
        />
    </>

    const grupo = <>
    <dd>Informe o grupo</dd>
     <label>{"1-Cliente 2-Fornecedor 3-Transportadora 4-Geral"}</label>
        <input className=""
            type="number"
            name="fk_grupo"
            placeholder='Informe número do grupo'
            value={children.fk_grupo || ''}
            onChange={handleChange}
            
        />
    </>

    return (
        <div className='container-global'>
            <fieldset className='main-global'>
                <form className='main-global-form'>
                    <strong>Cadastro de Clientes<a href="ceps">Seu CEP</a></strong>
                    <select className="mb-2 mt-2" onChange={(e) => setTpPerson(e.target.value)}>
                        <option>{'Pessoa-Fisica'}</option>
                        <option>{'Pessoa-Juridica'}</option>
                    </select>
                    <label>{alert}</label>
                    <label>{message}</label>
                    <dd>Nome</dd>
                    <input className=""
                        type="text"
                        name="name_pers"
                        placeholder='Nome'
                        value={children.name_pers || ""}
                        onChange={handleChange}
                    />
                    {tpPerson === 'Pessoa-Fisica' ? naturalPerson : legalPerson}
                    <dd>Telefone</dd>
                    <InputMask className=""
                        type="text"
                        name="phone_pers"
                        placeholder="Telefone"
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
                        placeholder={'Endereço'}
                        value={children.address_pers || ""}
                        onChange={handleChange}
                    />
                    <dd>Número</dd>
                    <input className=""
                        type="text"
                        name="num_address"
                        placeholder="Número"
                        value={children.num_address || ''}
                        onChange={handleChange}
                    />
                    <dd>Bairro</dd>
                    <input className=""
                        type="text"
                        name="bairro_pers"
                        placeholder={'Bairro'}
                        value={children.bairro_pers || ""}
                        onChange={handleChange}
                    />
                    <dd>CEP</dd>
                    <InputMask
                        mask={"99.999-999"}
                        type="text"
                        name="num_cep"
                        value={children.num_cep || ""}
                        placeholder="CEP"
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
                    {checkAdminPrivilege() === "2" ? limiteCredito: null}
                    {checkAdminPrivilege() === "2" ? grupo: null}
                    <button onClick={handleSubmit}>Registrar</button><br />
                    <a href='/invoice_sales'>Faturamento <b>clique aqui</b></a>< br />
                </form>
            </fieldset>
        </div>
    )
}