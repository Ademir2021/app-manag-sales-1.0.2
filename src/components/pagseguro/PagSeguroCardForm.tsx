import React from "react";
import { currencyFormat } from "../utils/currentFormat/CurrentFormat";
import { Globais } from "../globais/Globais";
import { NavBar } from "../navbar/Navbar";

import '../../index'

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
            <div id="container">
                <form id="main-card">
                    <input
                        type="hidden"
                        name="public_key"
                        onChange={handleChange}
                        value={children.public_key || ""}
                        disabled
                    />
                    {/* {children.holder && <label>{children.holder}</label>} */}
                    <input
                        id='main-input'
                        type="text"
                        name="holder"
                        onChange={handleChange}
                        value={children.holder || ""}
                        placeholder="Nome no cartão"
                        required
                    />
                    {/* {children.number && <label>{children.number}</label>} */}
                    <input
                        id='main-input'
                        type="text"
                        name="number"
                        onChange={handleChange}
                        value={children.number || ""}
                        placeholder="Número no cartão"
                        required
                    />

                    <div id="main-inputs-row" >
                        <input
                            id='main-input-number'
                            type="text"
                            name="ex_month"
                            onChange={handleChange}
                            value={children.ex_month || ""}
                            placeholder="Dia da valídade"
                            required
                        />
                        <input
                            id='main-input-number'
                            type="text"
                            name="ex_year"
                            onChange={handleChange}
                            value={children.ex_year || ""}
                            placeholder="Ano da valídade"
                            required
                        />
                        <input
                            id='main-input-number'
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
                    {paidSucess || paid ? <label id='msg-red'>{paidSucess} {paid}</label> : null}
                    {err != '!' && <label id="msg-red">{err}</label>}
                    <span>{!URLNoteSubmit ? currencyFormat(paySale) : null}</span>
                    {!URLNoteSubmit ? <button className="btn btn-primary" id='m-2' onClick={handleSubmit}>Pagar</button> : null}
                    {URLNoteSubmit ? <button className="btn btn-primary" id='m-2' onClick={() => { window.location.replace(Globais.URL_NOTE + '/' + URLNoteSubmit) }}>Emitir Nota</button> : null}
                    {URLNoteSubmit ? <button className="btn btn-primary" id='m-2' onClick={() => { window.location.replace('dashboardefault') }}>Sair</button> : null}
                    <div>
                        <h1 id='text-center'>Cartões aceitos </h1>
                        <img src="img/card_pag_bank.png" alt="Cartões aceitos"></img>
                    </div>
                </form>
            </div>
        </>
    )
}