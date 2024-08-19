
type Props = {
    children:any
    handleChange__:any
    handleSubmit:any
}

export function NotaRecebidaValsPagoForm({
children,
handleChange__,
handleSubmit
}:Props){

    return(
        <div className="container-global">
            <div className="main-global">
                <form className="main-global-form">
                    <dd>Inserir valor em dinheiro</dd>
                    <input
                    type="number"
                    name="valor"
                    onChange={handleChange__}
                    value={children.valor || ''}
                    placeholder="Valor em dinheiro"
                    />
                    <dd>Descrição</dd>
                    <input
                    type="text"
                    name='descricao'
                    onChange={handleChange__}
                    value={children.descricao}
                    placeholder="Descrição do valor"
                    />
                    <button
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    >Inserir Valor
                    </button>
                </form>
            </div>
        </div>
    )
}