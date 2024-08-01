
type PropsContaAReceber = {
    children: any
    handleSubmit: any
    handleChange: any
    pagador: string
    msg:string
    listPersons:any
}


export function ContasAReceberRegisterForm({ children, handleSubmit, handleChange, pagador, msg, listPersons }: PropsContaAReceber) {
    return (
        <>
            <div className="container-global">
                <div className="main-global">
                    <p>Emitir título de conta a receber</p>
                    <div className="main-global-form">
                        <input
                            type="number"
                            name="valor"
                            value={children.valor || ""}
                            onChange={handleChange}
                            placeholder="Digite o valor"
                        />
                        <input
                            type="date"
                            name="vencimento"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="observacao"
                            value={children.observacao}
                            onChange={handleChange}
                            placeholder="Observação"
                        />
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >Salvar conta</button>
                        <dd className="text-center">{msg}</dd>
                        <hr></hr>
                        <span>Selecione o Pagador</span>
                        <span>{listPersons}</span>
                    </div>
                </div>
            </div>
        </>
    )
}