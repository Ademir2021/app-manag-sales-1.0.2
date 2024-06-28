import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import  { useContext } from 'react'
import { Home } from "./useCases/home/Home";
import { StoreHome } from "./useCases/storeHome/StoreHome";
import { UserLogin } from './useCases/users/UserLogin';
import { DashboardDefault } from "./useCases/dashboard/DashboardDefault";
import { ItenStore } from "./useCases/dashboard/iItenStore";
import { UserRegister } from './useCases/users/UserRegister';
import { Contacts } from "./useCases/contacts/Contacts";
import { UsersList } from './useCases/users/UsersList';
import { UserUpdate } from "./useCases/users/UserUpdate";
import { RegisterSale } from "./useCases/sales/RegisterSale";
import { InvoiceSales } from './useCases/sales/InvoiceSales';
import { PagSeguro } from "./useCases/sales/PagSeguro";
import { PagSeguroCard } from "./useCases/sales/PagSeguroCard";
import { ListSales } from './useCases/sales/ListSale';
import { FormProduct } from "./useCases/products/ProductRegister";
import { ProductsList } from './useCases/products/ProductList';
import { ProductUpdate } from "./useCases/products/ProductUpdate";
import { FormPerson } from "./useCases/persons/PersonRegister";
import { PersonUpdate } from "./useCases/persons/PersonUpdate";
import { PersonsList } from './useCases/persons/PersonList';
import { AuthProvider, AuthContext } from "./context/auth";
import { Logout } from "./components/utils/logout/Logout";
import { BackHome } from './components/utils/backHome/BackHome';
import { Ceps } from "./useCases/ceps/Ceps";
import { ContactsList } from "./useCases/contacts/ContactsList";
import { CookieWarnings } from "./useCases/storeHome/CookieWarnings";


export function AppRoutes() {

    const Private = ({ children }: any) => {
        const { authenticated, loading }: any = useContext(AuthContext)
        if (loading) {
            return <div className="loading">Carregando...</div>
        }
        if (!authenticated) {
            let res_uri = window.location.pathname;
            let parts = res_uri.split('/');
            let urlParts = parts.pop() || parts.pop();
            localStorage.setItem("uri", JSON.stringify(urlParts));
            return <Navigate to="/login" />
        }
        return children
    }
    
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/store" Component={StoreHome} />
                    <Route path="/login" Component={UserLogin} />
                    <Route path="/logout" Component={Logout} />
                    <Route path="/register" Component={UserRegister} />
                    <Route path="/contact" Component={Contacts} />
                    <Route path="/cookies" Component={CookieWarnings} />
                    <Route path="/dashboardefault" element={<Private><DashboardDefault /></Private>} />
                    <Route path="/pe" element={<Private><ItenStore /></Private>} />
                    <Route path="/users_list" element={<Private><UsersList /></Private>} />
                    <Route path="/user_update" element={<Private><UserUpdate /></Private>} />
                    <Route path="/invoice_sales" element={<Private><InvoiceSales /></Private>} />
                    <Route path="/pagseguro" element={<Private><PagSeguro /></Private>} />
                    <Route path="/pagsegurocard" element={<Private><PagSeguroCard /></Private>} />
                    <Route path="/sale" element={<Private><RegisterSale /></Private>} />
                    <Route path="/list_sale" element={<Private><ListSales /></Private>} />
                    <Route path="/form_product" element={<Private><FormProduct /></Private>} />
                    <Route path="/product_list" element={<Private><ProductsList /></Private>} />
                    <Route path="product_update" element={<Private><ProductUpdate /></Private>} />
                    <Route path="/form_person" element={<Private><FormPerson /></Private>} />
                    <Route path="/person_list" element={<Private><PersonsList /></Private>} />
                    <Route path="/person_update" element={<Private><PersonUpdate /></Private>} />
                    <Route path="/ceps" element={<Private><Ceps /></Private>} />
                    <Route path="/contacts_list" element={<Private><ContactsList /></Private>} />
                    <Route path="*" element={<><BackHome /><strong>Error 404: <label>Endereço URL inválido</label></strong><br /></>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}