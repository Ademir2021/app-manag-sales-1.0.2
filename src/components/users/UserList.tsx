import '../global-module.css'

export type PropsUsers = {
    id: number;
    created_at:Date | any;
    updated_at:Date | any;
    name: string;
    username: string;
    password?: string;
    update?: Date | any;
};

export const ListUSers = (props: PropsUsers) => {
    return (
            <div className="container-global">
                <div className="main-global">
                    <ul className='main-global-form'>
                    <li><b>ID</b> {props.id}</li>
                    <li><b>Criado</b> {props.created_at}</li>
                    <li><b>Alterado</b> {props.updated_at}</li>
                    <li><b>Nome</b> {props.name}</li>
                    <li><b>Email</b> {props.username}</li>
                    <></>
                    </ul>
                </div>
            </div>
    )
}