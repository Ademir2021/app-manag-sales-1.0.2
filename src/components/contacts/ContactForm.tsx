import { Globais } from '../globais/Globais';
import InputMask from "react-input-mask";

import './css/styles.css'

type Props = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleSubmit: any
    msg: string;
}

export function ContactForm({
    children,
    handleChange,
    handleSubmit,
    msg
}: Props) {
    return (
        <>
            <hr></hr>
            <div id='container-contact'>
                <form id='form-contact'>
                    <div className="p-1 text-center">
                        <h1>Fale conosco</h1>
                        <dd><b>Telefone</b> {Globais.phone}</dd>
                        <label>Suporte, Garantia, Frete, Dúvidas ?</label>
                    </div>
                    <label>Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Seu nome"
                        required
                        value={children.name || ""}
                        onChange={handleChange}
                    />
                    <label>Email </label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Seu email"
                        required
                        value={children.email || ""}
                        onChange={handleChange}
                    />
                    <label>Telefone</label>
                    <InputMask
                        mask="(99)99999-9999"
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Seu telefone"
                        required
                        value={children.phone || ""}
                        onChange={handleChange}
                    />
                    <div className="mb-3">
                        <label>Digite aqui ...</label>
                        <textarea
                            name="comments"
                            placeholder="Deixe aqui seus comentários ..."
                            required
                            value={children.comments || ""}
                            onChange={handleChange}
                            />
                    </div>
                    {msg && <div id='msg-contact'>{msg}</div>}
                    <button
                    id='btn-contact'
                    onClick={handleSubmit}
                    type="submit"
                    className="btn btn-primary"
                    >Enviar</button>
                </form>
            </div>
        </>
    )
}