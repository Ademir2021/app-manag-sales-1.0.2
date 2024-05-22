type PropsHeaderDashboard = {
    user: number;
    username: number;
    handleLogout: any;
}

export function HeaderDashboard(props: PropsHeaderDashboard) {
    return (
            <div style={{fontSize:'14px'}} >
               <strong><b> ID </b></strong><span>{props.user}</span>
                <strong><b> User logado </b></strong><span>{props.username}</span>
               <button
                onClick={props.handleLogout}
                className='btn btn-second p-1'
                >| <strong><b style={{color:'rgb(34, 34, 147)',fontSize:'12px'}}>FINALIZAR SESSÃO</b></strong></button>
            </div>
    )
}