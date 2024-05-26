import React from "react";
import { LogoIn } from "../utils/logoIn/LogoIn";
import { currencyFormat } from "../utils/currentFormat/CurrentFormat";
import { Globais } from "../globais/Globais";

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
            <div className="container-global">
                <div className="main-global">
                    <LogoIn />
                    <form className="main-global-form">
                        <hr></hr>
                        <input
                            type="hidden"
                            name="public_key"
                            onChange={handleChange}
                            value={children.public_key || ""}
                            disabled
                        />
                        <dd>{children.holder}</dd>
                        <input
                            type="text"
                            name="holder"
                            onChange={handleChange}
                            value={children.holder || ""}
                            placeholder="Nome no cartão"
                            required
                        />
                        <input
                            type="text"
                            name="number"
                            onChange={handleChange}
                            value={children.number || ""}
                            placeholder="Número no cartão"
                            required
                        />
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
                            placeholder="Código de segurança (CVV)"
                            required
                        />
                        <input
                            type="hidden"
                            name="encrypted"
                            onChange={handleChange}
                            value={children.encrypted || ""}
                            disabled
                        />
                        <label>{paidSucess} {paid}</label>
                        <label>{err !== '!' ? err : null}</label>
                        <dd>{!URLNoteSubmit ? currencyFormat(paySale) : null}</dd>
                        <>{!URLNoteSubmit ? <button className="btn btn-primary" onClick={handleSubmit}>Pagar</button> : null}</>
                        <>{URLNoteSubmit ? <button onClick={() => { window.location.replace(Globais.URL_NOTE + '/' + URLNoteSubmit) }}>Emitir Nota</button> : null}</>
                        <>{URLNoteSubmit ? <button onClick={() => { window.location.replace('dashboardefault') }}>Sair</button> : null}</>
                    </form>
                </div>
            </div>
            <div className="container-global">
                <span>Cartões aceitos</span>
                <img src="img/card_pag_bank.png" alt="Cartões aceitos"></img>
            </div>
            <br></br>
        </>
    )
}