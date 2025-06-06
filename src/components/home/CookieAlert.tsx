import { useEffect, useState } from "react";

import './css/cookies.css'

export function CookieAlert() {

    const [cookieOk, setCookieOk] = useState<boolean>(false);

    function setCookie() {
        const res = localStorage.getItem("cookie_ok");
        if (res !== null) {
            setCookieOk(true);
        }
    }

    useEffect(() => {
        setCookie()
    }, [cookieOk])

    function handleSubmit() {
        localStorage.setItem("cookie_ok", JSON.stringify(true))
        setCookie()
    }

    let cookie_notice = "cookie-alert";
    let cookie_close = "cookie-close"

    return (
        <div className={cookieOk === false ? cookie_notice : cookie_close} >
            <p className="cookie-text">
                Usamos cookies para melhorar sua experiência.
                Ao continuar a visitar este site,
                você concorda com o uso de cookies. <a href="cookies">Saiba mais ...</a>
            </p>
            <button
                className="cookie-button"
                onClick={handleSubmit}>Aceitar</button>
        </div>
    );
}