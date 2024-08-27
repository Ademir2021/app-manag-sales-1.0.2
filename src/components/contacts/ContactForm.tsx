import { Globais } from '../globais/Globais';
import '../global-module.css'
import InputMask from "react-input-mask";

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
            <div className='container'>
                <h1 className="p-1 text-center">Formulário para contato</h1>
                <form method="" className="form-control input-contact bg-secondarys">

                    <div className="mb-3">
                        <div className="form-label">Nome</div>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Seu nome" required
                            value={children.name || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="form-label">Email </div>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Seu email" required
                            value={children.email || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <div className="form-label">Telefone</div>
                        <InputMask
                            mask="(99)99999-9999"
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Seu telefone" required
                            value={children.phone || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div style={{ color: 'red' }}><p>{msg}</p></div>
                    <div className="mb-3">
                        <div className="form-label">Seu texto</div>
                        <textarea
                            className="form-control"
                            name="comments"
                            placeholder="Deixe aqui seus comentários..." required
                            value={children.comments || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="btn btn-primary  btn-block"
                        >Registrar</button>
                    </div>
                </form>
                <br></br>
                <><b>Telefone:</b> {Globais.phone}</>
                <hr></hr>
            </div>
        </>
    )
}