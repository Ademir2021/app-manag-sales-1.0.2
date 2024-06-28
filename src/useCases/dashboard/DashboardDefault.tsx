import { Dashboard } from "./Dashboard"
import { FooterHome } from "../../components/storeHome/FooterHome"
import { useContext } from 'react';
import { AuthContext } from "../../context/auth";
import { HeaderDashboard } from '../../components/dashboard/HeaderDashboard';
import { Globais } from "../../components/globais/Globais";

export function DashboardDefault() {

    const {user, logout }: any = useContext(AuthContext);
    
    const handleLogout = async () => {
        await logout()
        window.location.replace("/");
    }

    return (
        <>
        <div className="container">
            <Dashboard />
            <h2>Minha conta</h2>
            <>{Globais.calendar}</>
            <HeaderDashboard
                name={user[0].name}
                username={user[0].username}
                handleLogout={handleLogout}
            />
            <div className=" text-center p-2">
                <button
                onClick={() => { window.location.replace("sale") }}
                className="btn btn-primary">Checkout</button>
            </div>
            <FooterHome />
        </div>
        </>
    )
}