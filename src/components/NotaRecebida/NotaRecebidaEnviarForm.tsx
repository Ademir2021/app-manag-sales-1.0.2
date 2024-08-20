type Props = {
    handleSubmit: any
    msgSendNota:string
}
export function NotaRecebidaEnviarForm({
    handleSubmit,
    msgSendNota
}: Props) {
    return (
        <div className="container-global">
            <div className="main-global">
                <form className="main-global-form">
                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >Gravar nota</button>
                <label>{msgSendNota}</label>
                </form>
            </div>
        </div>
    )
}