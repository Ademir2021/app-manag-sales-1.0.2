type Props = {
    name:string;
    username: number;
    handleLogout: any;
}

export function HeaderDashboard(props: Props) {
    return (
            <div className=" p-3 container" style={{background:'white', color:'black', borderRadius:'12px'}}>
                <hr></hr>
                <strong>Sua Conta de acesso</strong>
                <dd>Gerencie suas compras em nosso E-commerce !</dd>
                <b>Usuário logado</b>
                <dd><b>Olá, </b>{(props.name)}</dd>
                <><b>Usuário, </b>{props.username}</>
            <div className=" mt-3">
                <button
                onClick={() => { window.location.replace("sale") }}
                className="btn btn-primary">Checkout</button>
            </div>
            <button
             onClick={props.handleLogout}
             className=' mt-2 btn btn-danger'
             >Sair</button>
            </div>
    )
}