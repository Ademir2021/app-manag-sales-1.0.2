import InputMask from "react-input-mask";

import '../global-module.css'
import { checkAdminPrivilege } from "../utils/checksUserLogged/ChecksUserLogged";

type Props = {
    children: string | number | readonly string[] | undefined | any
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
    handleSubmit: any
    handleUpdate: any
    handleDelete: any
    modalRef?: any
    className?: string
    close?: any
    alert: string
    message: string
}

export function PersonFormUpdate({
    handleChange,
    handleSubmit,
    children,
    handleUpdate,
    handleDelete,
    modalRef,
    className,
    close,
    alert,
    message
}: Props) {

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
    maxLength={10}
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
        <div ref={modalRef} className={`${className} modal`}>
            <div className="container-global">
                <div className="main-global">
                    <form className="main-global-form">
                        <strong>Atualizaçao de Clientes</strong>
                        <label>{alert}</label>
                        <label>{message}</label>
                        <input
                            type="hidden"
                            name="id_person"
                            value={children.id_person || ""}
                            placeholder="ID do cliente"
                            disabled
                            onChange={handleChange}
                        />
                        <dd>Nome</dd>
                        <input
                            type="text"
                            name="name_pers"
                            value={children.name_pers || ""}
                            placeholder="Seu nome"
                            onChange={handleChange}
                        />
                    {children.cpf_pers === '0' ? legalPerson : naturalPerson}
                        <dd>Telefone</dd>
                        <InputMask
                            type="text"
                            name="phone_pers"
                            placeholder="Seu telefone"
                            mask="(99)99999-9999"
                            mask-selectonfocus="true"
                            maxLength={14}
                            autoComplete="off"
                            maskChar={null}
                            value={children.phone_pers || ''}
                            onChange={handleChange}
                        />
                        <dd>Endereço</dd>
                        <input
                            type="text"
                            name="address_pers"
                            value={children.address_pers || ''}
                            placeholder="Seu endereço"
                            onChange={handleChange}
                        />
                        <dd>Número</dd>
                        <input className=""
                        type="text"
                        name="num_address"
                        value={children.num_address || ''}
                        placeholder="Número do endereço"
                        onChange={handleChange}
                        />
                        <dd>Bairro</dd>
                        <input
                            type="text"
                            name="bairro_pers"
                            value={children.bairro_pers || ''}
                            placeholder="Seu bairro"
                            onChange={handleChange}
                        />
                        <dd>CEP</dd>
                        <InputMask
                            mask={"99.999-999"}
                            type="text"
                            name="num_cep"
                            value={children.num_cep || ''}
                            placeholder="CEP de sua cidade"
                            onChange={handleChange}
                        />
                        <dd>Cidade</dd>
                        <input
                            type="text"
                            name="name_city"
                            value={children.name_city || ''}
                            placeholder="Cidade"
                            disabled
                            onChange={handleChange}
                        />
                        <dd>Estado</dd>
                        <input
                            type="text"
                            name="uf"
                            value={children.uf || ''}
                            placeholder="Estado"
                            disabled
                            onChange={handleChange}
                        />
                        <input
                            type="hidden"
                            name="fk_name_filial"
                            value={children.fk_name_filial || ''}
                            placeholder="Filial do cliente"
                            disabled
                            onChange={handleChange}
                        />
                        <input
                            type="hidden"
                            name="fk_id_user"
                            value={children.fk_id_user || ''}
                            placeholder="Usuário do cliente"
                            disabled
                            onChange={handleChange}
                        />
                          {checkAdminPrivilege() === "2" ? limiteCredito: null}
                          {checkAdminPrivilege() === "2" ? grupo: null}
                        <button onClick={handleUpdate} >Atualizar</button>
                        <button onClick={close}>Sair</button>
                        <button onClick={handleDelete}>Novo</button>
                        <button onClick={handleSubmit}>Registrar</button>
                    </form>

                </div>
            </div>
        </div>
    )
}