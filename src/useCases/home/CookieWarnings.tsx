import { CookiesWarnings } from "../../components/home/CookieWarning";
import { NavBar } from "../../components/navbar/Navbar";
import { FooterHomePage } from "./FooterHome"

export function CookieWarnings(){
    return(
        <>
        <NavBar/>
        <CookiesWarnings/>
        <FooterHomePage/>
        </>
    )
}