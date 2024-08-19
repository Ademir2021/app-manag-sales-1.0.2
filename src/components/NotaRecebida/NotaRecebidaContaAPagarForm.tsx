import { TContaAPagar } from "../../useCases/NotaRecebida/type/TNotaRecebida"

type Props = {
    children: any
    handleChange: any
    handleSubmit: any
    contasApagar: TContaAPagar[]
}

export function NotaRecebidaContaAPagarForm({
    children,
    handleChange,
    handleSubmit,
    contasApagar
}: Props) {
    return (
        <>
            <hr></hr>
            <div className="container-global">
                <div className="main-global">
                    <dd>Duplicatas</dd>
                    <form className="main-global-form">
                        <dd>Valor do título</dd>
                        <input
                            type="number"
                            name="valor"
                            value={children.valor || ''}
                            onChange={handleChange}
                            placeholder="Digite o valor do titulo"
                        />
                        <dd>Vencimento</dd>
                        <input
                            type='date'
                            name="vencimento"
                            value={(children.vencimento || new Date())}
                            onChange={handleChange}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={handleSubmit}
                        >Inserir Titulos</button>
                    </form>
                </div>
            </div>

            <table className='table bg-light mt-1'>
                <thead>
                    <tr>
                        <th id="center">ID</th>
                        <td id="center">Tipo\Origem</td>
                        <td id='center'>Parcela</td>
                        <td id="center">Emissão</td>
                        <td id="center">Vencimento</td>
                        <td id="center">Valor</td>
                        <td id="center">Observação</td>
                    </tr>
                </thead>
                <tbody>
                    {contasApagar.map((contaAPagar: TContaAPagar) => (
                        <tr key={contaAPagar.id_conta}>
                            <th id="center">{contaAPagar.id_conta}</th>
                            <td id="center">{contaAPagar.tipo}</td>
                            <td id="center">{contaAPagar.parcela}</td>
                            <td id="center">{contaAPagar.emissao}</td>
                            <td id="center">{contaAPagar.vencimento}</td>
                            <td id="center">{contaAPagar.valor}</td>
                            <td id="center">{contaAPagar.observacao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}