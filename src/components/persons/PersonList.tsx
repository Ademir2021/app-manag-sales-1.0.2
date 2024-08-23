import '../global-module.css'

export type Props = {
    id_person: number
    created_at: Date | any
    updated_at: Date | any
    name: string
    cpf: string
    phone: string
    address: string
    num_address:string | undefined ;
    bairro: string
    num_cep: string | undefined
    name_city: string | undefined
    uf: string | undefined
    filial: number
    id_user: number
    update: any
}

export const PersonList = (props: Props) => {
    return (
        <div className="container-global" >
            <div className="main-global">
                <ul className="main-global-form">
                    <li><b>ID</b> {props.id_person}</li>
                    <li><b>Cadastro</b> {props.created_at}</li>
                    <li><b>Alterado</b> {props.updated_at}</li>
                    <li><b>Nome</b> {props.name}</li>
                    <li><b>CPF</b> {props.cpf}</li>
                    <li><b>Telefone</b> {props.phone}</li>
                    <li><b>Endereço</b> {props.address}</li>
                    <li><b>Número</b> {props.num_address}</li>
                    <li><b>Bairro</b> {props.bairro}</li>
                    <li><b>CEP</b> {props.num_cep}</li>
                    <li><b>Cidade</b> {props.name_city}</li>
                    <li><b>Estado</b> {props.uf}</li>
                    <li><b>Filial</b> {props.filial}</li>
                    <li><b>Usuário</b> {props.id_user}</li>
                    <>{props.update}</>
                </ul>
            </div>
        </div>
    )
}