// import '../global-module.css'

import '../../index'

export type Props = {
    id_person: number
    created_at: Date | any
    updated_at: Date | any
    name: string
    cpf: string
    rg: string
    cnpj: string
    inscricao: string
    phone: string
    address: string
    num_address: string | undefined;
    bairro: string
    num_cep: string | undefined
    name_city: string | undefined
    uf: string | undefined
    filial: number
    id_user: number
    fk_grupo: number
    update: any
}

export const PersonList = (props: Props) => {
    return (
        <div id="container" >
                <ul id="main">
                    <li><b>ID</b> {props.id_person}</li>
                    <li><b>Cadastro</b> {props.created_at}</li>
                    <li><b>Alterado</b> {props.updated_at}</li>
                    <li><b>Nome</b> {props.name}</li>
                    {props.cpf != '0' ? props.cpf != '' ? <li><b>CPF</b> {props.cpf}</li> : null : null}
                    {props.rg != '0' ? props.rg != '' ? <li><b>RG</b> {props.rg}</li> : null : null}
                    {props.cnpj != '0' ? props.cnpj != '' ? <li><b>CNPJ</b> {props.cnpj}</li> : null : null}
                    {props.inscricao != '0' ? props.inscricao != '' ? <li><b>I.EST</b> {props.inscricao}</li> : null : null}
                    <li><b>Telefone</b> {props.phone}</li>
                    <li><b>Endereço</b> {props.address}</li>
                    <li><b>Número</b> {props.num_address}</li>
                    <li><b>Bairro</b> {props.bairro}</li>
                    <li><b>CEP</b> {props.num_cep}</li>
                    <li><b>Cidade</b> {props.name_city}</li>
                    <li><b>Estado</b> {props.uf}</li>
                    <li><b>Filial</b> {props.filial}</li>
                    <li><b>Usuário</b> {props.id_user}</li>
                    <li><b>Grupo</b> {props.fk_grupo}</li>
                    <>{props.update}</>
                </ul>
            </div>
    )
}