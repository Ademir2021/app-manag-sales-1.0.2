import React from "react";
import { currencyFormat } from "../utils/currentFormat/CurrentFormat";
import { Globais } from "../globais/Globais";

import './css/styles.css'
import { NavBar } from "../navbar/Navbar";

type PropsPagSeguroCardForm = {
    children: any | string | number | readonly string[] | undefined
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: any;
    paidSucess: string | number
    paid: number | null
    paySale: number
    URLNoteSubmit: number
    err: string
}

export function PagSeguroCardForm({
    children,
    handleChange,
    handleSubmit,
    paidSucess,
    paid,
    paySale,
    URLNoteSubmit,
    err
}: PropsPagSeguroCardForm) {

    return (
        <>
            <NavBar />
            <hr></hr>
            <div className="container">
                <form className="main">
                    <input
                        type="hidden"
                        name="public_key"
                        onChange={handleChange}
                        value={children.public_key || ""}
                        disabled
                    />
                    {/* {children.holder && <label>{children.holder}</label>} */}
                    <input
                        type="text"
                        name="holder"
                        onChange={handleChange}
                        value={children.holder || ""}
                        placeholder="Nome no cartão"
                        required
                    />
                      {/* {children.number && <label>{children.number}</label>} */}
                    <input
                        type="text"
                        name="number"
                        onChange={handleChange}
                        value={children.number || ""}
                        placeholder="Número no cartão"
                        required
                    />

                    <div className="input-row" >
                        <input
                            type="text"
                            name="ex_month"
                            onChange={handleChange}
                            value={children.ex_month || ""}
                            placeholder="Dia da valídade"
                            required
                        />
                        <input
                            type="text"
                            name="ex_year"
                            onChange={handleChange}
                            value={children.ex_year || ""}
                            placeholder="Ano da valídade"
                            required
                        />
                        <input
                            type="text"
                            name="secure_code"
                            onChange={handleChange}
                            value={children.secure_code || ""}
                            placeholder="Código CVV"
                            required
                        />
                        <input
                            type="hidden"
                            name="encrypted"
                            onChange={handleChange}
                            value={children.encrypted || ""}
                            disabled
                        />
                    </div>
                    <label>{paidSucess} {paid}</label>
                    <label>{err !== '!' ? err : null}</label>
                    <span>{!URLNoteSubmit ? currencyFormat(paySale) : null}</span>
                    <>{!URLNoteSubmit ? <button className="btn btn-primary" onClick={handleSubmit}>Pagar</button> : null}</>
                    <>{URLNoteSubmit ? <button onClick={() => { window.location.replace(Globais.URL_NOTE + '/' + URLNoteSubmit) }}>Emitir Nota</button> : null}</>
                    <>{URLNoteSubmit ? <button onClick={() => { window.location.replace('dashboardefault') }}>Sair</button> : null}</>
                    <div className="cards-accepted">
                        <h1>Cartões aceitos </h1>
                        <img src="img/card_pag_bank.png" alt="Cartões aceitos"></img>
                    </div>
                </form>
            </div>
        </>
    )
}