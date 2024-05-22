import { Dashboard } from "./Dashboard"
import { FooterHome } from "../../components/home/FooterHome"

export function DashboardDefault(){
    return(
        <>
        <Dashboard/>
             <h2 className='text-center p-2'>Minha conta</h2>
            <div className="text-center">
                <button className="btn btn-primary">
                    <a href="\sale" 
                        style={{color:'white'}}>
                            ACESSO A TELA DE COMPRAS</a></button></div>
            <FooterHome/>
        </>
    )
}