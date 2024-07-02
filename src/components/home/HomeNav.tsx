import React from "react";
import { checksUserLogged, checkAdminPrivilege } from "../utils/checksUserLogged/ChecksUserLogged";
import { Globais } from "../globais/Globais";
import { Logo } from "../logo/Logo";

import "../assets/dist/css/bootstrap.min.css"
import "./HomeNav.css"
import { Button } from '../Button/Button';

export function HomeNav() {

    const privilAdmin = Globais.privilAdmin;
    const privilegeShopping = Globais.checksUserLogged;

    const isHome = true
    function HomeLogin(){
        localStorage.setItem("hl", JSON.stringify(isHome));
        window.location.assign('/login')
    };
    function HomeRegister(){
        localStorage.setItem("hl", JSON.stringify(isHome));
        window.location.assign('/register')
    };

    return (
        <>
            <nav
                className="navbar navbar-expand-lg "
                id='nav-nav'
                aria-label="Offcanvas navbar large">
                <div className="container-fluid" >
                    <a
                        className="navbar-brand"
                        href="/">{<Logo />}
                    </a>
                    <button
                        className="navbar-toggler"
                        id="button-1"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar2"
                        aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div
                        className="offcanvas offcanvas-end bg-secondary-old"
                        id="offcanvasNavbar2"
                        aria-labelledby="offcanvasNavbar2Label">
                        <div
                            className="offcanvas-header">
                            <p
                                className="offcanvas-title"
                                id="offcanvasNavbar2Label" >
                                <a href={'contact'}>Fale conosco</a>
                            </p>
                            <button
                                type="button"
                                className="btn-close btn-close-dark"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close">
                            </button>
                        </div>
                        <div
                            className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ?
                                        <a className="nav-link"
                                            aria-current="page"
                                            href="contact">
                                            <b>Suporte</b></a> :
                                        <a
                                            className="nav-link"
                                            aria-current="page"
                                            href="contact"><b>Suporte</b>
                                        </a>}
                                </li>
                                
                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ?
                                        <a className="nav-link"
                                            aria-current="page"
                                            >
                                                <button
                                                className="btn"
                                                type='submit'
                                                onClick={HomeRegister}
                                                >
                                            <b>Inscreva-se</b></button></a> :
                                        <a
                                            className="nav-link"
                                            aria-current="page"
                                            href="user_update"><b>Sua conta</b>
                                        </a>}
                                </li>

                                <li className="nav-item">
                                    {checksUserLogged() === privilegeShopping ?
                                        <a className="nav-link"
                                            aria-current="page"
                                            href="##">
                                            <button
                                            className="btn btn-primary"
                                            id="nav-btn-login"
                                            type="submit"
                                            onClick={HomeLogin}
                                            ><b>Entrar</b></button></a> :
                                        <a
                                            className="nav-link"
                                            aria-current="page"
                                            href="logout"><b>Sair</b>
                                        </a>}
                                </li>

                                <li className="nav-item dropdown">
                                    <ul className="dropdown-menu">
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"><b>Produtos</b></a>
                                    <ul className="dropdown-menu" id="nav-">
                                        <li><a className="dropdown-item nav-link"
                                            href="/hire">Contratar</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}