import { HandleContasAReceber } from "../../useCases/contasAReceber/HandleContasAReceber"
import { TContaAreceber, TValsRecebidos } from "../../useCases/contasAReceber/type/TContasAReceber"

import './ContasAReceber.css'

type TProps = {
    contasAReceber: TContaAreceber[]
    valoresRecebidos:TValsRecebidos[]
    receberValor: any
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

function ContasAreceberForm({ contasAReceber, receberValor, handleChange, valoresRecebidos }: TProps) {

   const handleContasAReceber = new  HandleContasAReceber()

    const headerContasReceber =
        <div id="header-contas-receber">
            Receber valores dos Titulos
        </div>

    const inputReceberValor =
        <input
            min={0}
            max={999}
            type="number"
            id="input-valor"
            placeholder="Informe o valor recebido"
            onChange={handleChange}
        />

    const listaContasReceber =
        <>
            <table className='table bg-light mt-1'>
                <thead>
                    <tr>
                        <th id="center">ID</th>
                        <th id="center">Origem</th>
                        <th id="center">Emissão</th>
                        <th id="center">Valor</th>
                        <th id="center">Vencimento</th>
                        <th id="center">Juros</th>
                        <th id="center">Multa</th>
                        <th id="center">Desconto</th>
                        <th id="center">Saldo</th>
                        <th id="center">Pagamento</th>
                        <th id="center">Recebimento</th>
                        <th id="center">Receber</th>
                    </tr>
                </thead>
                <tbody>
                    {contasAReceber.map((conta: TContaAreceber) => (
                        <tr key={conta.id_conta}>
                            <th id="center">{conta.id_conta}</th>
                            <td id="center">{conta.fk_venda}</td>
                            <td id="center">{handleContasAReceber.formatDate(conta.emissao)}</td>
                            <td id="center">{conta.valor}</td>
                            <td id="center">{handleContasAReceber.formatDate((conta.vencimento))}</td>
                            <td id="center">{conta.juros}</td>
                            <td id="center">{conta.multa}</td>
                            <td id="center">{conta.desconto}</td>
                            <td id="center">{parseFloat(conta.saldo)}</td>
                            <td id="center">{conta.pagamento}</td>
                            <td id="center">{conta.recebimento}</td>
                            <td id="center"><button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => receberValor(conta)}
                            >Receber</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

        const listaValoresRecebidos = 
        <>
        <table className='table bg-light mt-1'>
            <thead>
                <tr>
                    <th id="center">Id</th>
                    <th id="center">Conta</th>
                    <th id="center">Venda</th>
                    <th id="center">User</th>
                    <th id="center">Valor</th>
                    <th id="center">Data Recebimento</th>
                </tr>
            </thead>
                    <tbody>{valoresRecebidos.map((valRec:TValsRecebidos)=>(
                        <tr key={valRec.id_val}>
                            <th id="center">{valRec.id_val}</th>
                            <th id="center">{valRec.id_conta}</th>
                            <th id="center">{valRec.id_venda}</th>
                            <th id="center">{valRec.id_user}</th>
                            <th id="center">{valRec.valor}</th>
                            <th id="center">{valRec.data_recebimento.toLocaleString()}</th>

                        </tr>
                    ))}</tbody>
        </table>
        </>

    return (
        <div
            id="contas-receber">
            {headerContasReceber}
            {inputReceberValor}
            {listaContasReceber}
            {listaValoresRecebidos}
        </div>
    )
}

export { ContasAreceberForm }