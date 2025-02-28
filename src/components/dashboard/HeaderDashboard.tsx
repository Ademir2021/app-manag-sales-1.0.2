import './css/styles.css'

type Props = {
    privilege: number
    name: string;
    username: number;
    handleLogout: any;
}

export function HeaderDashboard(props: Props) {
    return (
        <>
            <hr></hr>
            <div id='container-dashboard'>
                <div id='form-dashboard'>
                    <strong>Dashboard / Painel de controle</strong>
                    <h1>Sua Conta de acesso</h1>
                    <p>Gerenciar suas compras nunca foi tão fácil.</p>
                    <label>{props.privilege == 2 ? 'Nome adminstrador' : 'Nome comprador'}</label>
                    <dd><b>Olá </b>{props.name}</dd>
                    <label>{props.privilege == 2 ? 'Email admistrador' : 'Email comprador'}</label>
                    <>{props.username}</>
                    <button
                        onClick={() => { window.location.replace("sale") }}
                        className="btn btn-primary mt-5"
                    >Checkout de compras</button>
                    <button
                        onClick={props.handleLogout}
                        className='btn btn-primary'
                    >Sair</button>
                </div>
            </div>
        </>
    )
}