import { useContext } from 'react';
import { AuthContext } from "../../context/auth";
import { NavBar } from '../../components/navbar/Navbar';
import { HeaderDashboard } from '../../components/dashboard/HeaderDashboard';

import '../../App.css'

export function Dashboard() {

    const { logout }: any = useContext(AuthContext);
    const res: string | number | any = localStorage.getItem('u')
    const user = JSON.parse(res)
    const handleLogout = async () => {
        await logout()
        window.location.replace("/");
    };

    return (
        <>  <HeaderDashboard
            user={user[0].id}
            username={user[0].username}
            handleLogout={handleLogout}

        />
            <NavBar />
        </>
    )
}