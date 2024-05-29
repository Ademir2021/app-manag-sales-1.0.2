type PropsHeaderDashboard = {
    name:string;
    username: number;
    handleLogout: any;
}

export function HeaderDashboard(props: PropsHeaderDashboard) {
    return (
            <div className="text-center">
                <span><b>Olá, </b></span><span>{(props.name).toUpperCase().substring(0, 12)}</span>
                <dd>{props.username} </dd>
               <button
                onClick={props.handleLogout}
                className='btn btn-danger'
                >Finalizar sessão</button>
            </div>
    )
}