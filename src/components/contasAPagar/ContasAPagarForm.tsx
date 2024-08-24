import { HandleContasAPagar } from "../../useCases/contasAPagar/handleContasAPagar"
import { TContaAPagar, TValsPagos } from "../../useCases/contasAPagar/type/TContasAPagar"
import { currencyFormat } from '../utils/currentFormat/CurrentFormat';
import { Logo } from "../logo/Logo";

import './ContasAPagar.css'

type TProps = {
    contasAPagar: TContaAPagar[]
    valoresPagos: TValsPagos[]
    pagarValor: any
    handleChangeValor: React.ChangeEventHandler<HTMLInputElement>
    handleChangeDesconto: React.ChangeEventHandler<HTMLInputElement>
    msg: string
    submitContasAPagarRegister: any
    submitInserirValor: any
    submitfluxoDeCaixa: any
    saldo:number
    findNameDespesa:any // (id: number)
}

function ContasAPagarForm({
    contasAPagar,
    pagarValor,
    handleChangeValor,
    handleChangeDesconto,
    valoresPagos,
    msg,
    submitContasAPagarRegister,
    submitInserirValor,
    submitfluxoDeCaixa,
    saldo,
    findNameDespesa
}: TProps) {

    const handleContasAPagar = new HandleContasAPagar()

    const headerContasPagar =
        <div id="header-contas-receber" className="container">
            Contas a Pagar - Em aberto.
        </div>

    const sumbit =
        <div className="mb-1">
            <button style={{marginLeft:"0px", borderRadius:'0px'}}
                className="btn btn-primary"
                onClick={submitContasAPagarRegister}
            >Emitir título</button>
            <button style={{marginLeft:"1px", borderRadius:'0px'}}
                className="btn btn-primary"
                onClick={submitInserirValor}
            >Pagar</button>
            <button style={{marginLeft:"1px", borderRadius:'0px'}}
                className="btn btn-primary"
                onClick={submitfluxoDeCaixa}
            >Fluxo de caixa</button>
            <div style={{marginLeft:"12px", borderRadius:'0px'}}
            ><b>Saldo a pagar = </b>{currencyFormat(saldo)}</div>
        </div>

    const inputPagarValor = <div>
        <input
            min={0}
            max={999}
            type="number"
            id="input-valor"
            placeholder="Informe o valor pago"
            onChange={handleChangeValor}
        />
        <input
        min={0}
        max={999}
        type="number"
        id="input-valor"
        placeholder="desconto"
        onChange={ handleChangeDesconto}
    />
    </div>

    const listaContasPagar = <table className='table bg-light mt-1'>
            <thead>
                <tr>
                    <th id="center">ID</th>
                    <td>Tipo</td>
                    <td id="center">BenefID</td>
                    <td id="center">Compra</td>
                    <td id="center">DespID</td>
                    <td>Despesa</td>
                    <td>Emissão</td>
                    <td>Valor</td>
                    <td>Vencimento</td>
                    <td>Juros</td>
                    <td>Multa</td>
                    <td>Desconto</td>
                    <td>Saldo</td>
                    <td>Recebimento</td>
                    <td>Pagamento</td>
                    <td>Observação</td>
                    <td>Receber</td>
                </tr>
            </thead>
            <tbody>
                {contasAPagar.map((conta: TContaAPagar) => (
                    <tr key={conta.id_conta}>
                        <th id="center">{conta.id_conta}</th>
                        <td>{conta.tipo}</td>
                        <td id="center">{conta.fk_beneficiario}</td>
                        <td id="center">{conta.fk_compra}</td>
                        <td id="center">{conta.fk_despesa}</td>
                        <td>{findNameDespesa(conta.fk_despesa)}</td>
                        <td>{handleContasAPagar.formatDate(conta.emissao)}</td>
                        <td>{parseFloat(conta.valor).toFixed(3)}</td>
                        <td>{handleContasAPagar.formatDate(conta.vencimento)}</td>
                        <td>{parseFloat(conta.juros).toFixed(3)}</td>
                        <td>{parseFloat(conta.multa).toFixed(3)}</td>
                        <td>{parseFloat(conta.desconto).toFixed(3)}</td>
                        <td>{parseFloat(conta.saldo).toFixed(2)}</td>
                        <td>{parseFloat(conta.recebimento).toFixed(2)}</td>
                        <td>{conta.pagamento !== null ? handleContasAPagar.formatDate(conta.pagamento) : null}</td>
                        <td>{conta.observacao}</td>
                        <td><button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => pagarValor(conta)}
                        >Pagar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>

    const listaValoresPago = <table className='table bg-light mt-1'>
            <thead>
                <tr>
                    <th id="center">ID</th>
                    <td id="center">Conta</td>
                    <td id="center">Compra</td>
                    <td id="center">User</td>
                    <td>Recebido</td>
                    <td>Pagamento</td>
                    <td>Descrição</td>
                </tr>
            </thead>
            <tbody>{valoresPagos.map((valPago: TValsPagos) => (
                <tr key={valPago.id_val}>
                    <th id="center">{valPago.id_val}</th>
                    <td id="center">{valPago.fk_conta}</td>
                    <td id="center">{valPago.fk_compra}</td>
                    <td id="center">{valPago.fk_user}</td>
                    <td>{valPago.valor}</td>
                    <td>{handleContasAPagar.formatDate(valPago.data_recebimento)}</td>
                    <td>{valPago.descricao}</td>
                </tr>
            ))}</tbody>
        </table>

    return (
            <div className="container">
                  <div className="mt-2"><Logo/></div>
                  <hr></hr>
                {sumbit}
                {headerContasPagar}
                {<div>{msg}</div>}
                {inputPagarValor}
                {listaContasPagar}
                {listaValoresPago}
            </div>
    )
}

export { ContasAPagarForm }