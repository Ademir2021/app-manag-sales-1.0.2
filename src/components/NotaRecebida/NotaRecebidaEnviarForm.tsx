type Props = {
    handleSubmit: any
}

export function NotaRecebidaEnviarForm({
    handleSubmit
}: Props) {

    return (
        <div className="container-global">
            <div className="main-global">
                <dd>Enviar a Nota de Entrada</dd>
                <form className="main-global-form">
                    <button
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >Gravar nota</button>
                </form>
            </div>
        </div>
    )
}