type Props = {
    children: any
    handlechange: any
    handleSubmit: any
    listPersons: any
    msg:string
}

export function PagarValorForm({
    children,
    handlechange,
    handleSubmit,
    listPersons,
    msg
}: Props) {
    const pagarValor = <div className="container-global">
        <div className="main-global">
            <p>Pagar Valores</p>
            <div className="main-global-form">
                <input
                    type="number"
                    name='valor'
                    value={children.valor || ''}
                    placeholder="Digite o valor"
                    onChange={handlechange}
                />
                   <input
                    type="text"
                    name='descricao'
                    value={children.descricao || ''}
                    placeholder="Descrição do valor"
                    onChange={handlechange}
                />
                <button className="btn btn-primary"
                    onClick={handleSubmit}
                >Registrar Valor</button>
                <dd>{msg}</dd>
                <hr></hr>
                <span>{listPersons}</span>
            </div>
        </div>
    </div>
    return (
        <>
            {pagarValor}
        </>
    )
}