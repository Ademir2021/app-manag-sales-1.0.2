import { HandleContasAPagar } from "../../useCases/contasAPagar/handleContasAPagar"
import { TContaAPagar, TValsPagos } from "../../useCases/contasAPagar/type/TContasAPagar"
import { NavBar } from "../navbar/Navbar"

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
}: TProps) {

    const handleContasAPagar = new HandleContasAPagar()

    const headerContasPagar =
        <div id="header-contas-receber" className="container">
            Contas a Pagar - Em aberto.
        </div>

    const sumbit =
        <div className="mb-1">
            <button
            style={{marginLeft:"0px", borderRadius:'0px'}}
                className="btn btn-primary"
                onClick={submitContasAPagarRegister}
            >Emitir título</button>
            <button
              style={{marginLeft:"1px", borderRadius:'0px'}}
                className="btn btn-primary"
                onClick={submitInserirValor}
            >Pagar</button>
            <button
             style={{marginLeft:"1px", borderRadius:'0px'}}
                className="btn btn-primary"
                onClick={submitfluxoDeCaixa}
            >Fluxo de caixa</button>
            <span
            style={{marginLeft:"12px", borderRadius:'0px'}}
            ><b>Saldo a pagar - </b>R$ {parseFloat(saldo.toFixed(2))}</span>
        </div>

    const inputPagarValor =
    <div>
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

    const listaContasPagar =
        <table className='table bg-light mt-1'>
            <thead>
                <tr>
                    <th id="center">ID</th>
                    <th id="center">Tipo</th>
                    <th id="center">Pagador</th>
                    <th id="center">Compra</th>
                    <th id="center">Despesa</th>
                    <th id="center">Emissão</th>
                    <th id="center">Valor</th>
                    <th id="center">Vencimento</th>
                    <th id="center">Juros</th>
                    <th id="center">Multa</th>
                    <th id="center">Desconto</th>
                    <th id="center">Saldo</th>
                    <th id="center">Pagamento</th>
                    <th id="center">Recebimento</th>
                    <th id="center">Observação</th>
                    <th id="center">Receber</th>
                </tr>
            </thead>
            <tbody>
                {contasAPagar.map((conta: TContaAPagar) => (
                    <tr key={conta.id_conta}>
                        <th id="center">{conta.id_conta}</th>
                        <td id="center">{conta.tipo}</td>
                        <td id="center">{conta.fk_pagador}</td>
                        <td id="center">{conta.fk_compra}</td>
                        <td id="center">{conta.fk_despesa}</td>
                        <td id="center">{handleContasAPagar.formatDate(conta.emissao)}</td>
                        <td id="center">{parseFloat(conta.valor).toFixed(3)}</td>
                        <td id="center">{handleContasAPagar.formatDate(conta.vencimento)}</td>
                        <td id="center">{parseFloat(conta.juros).toFixed(3)}</td>
                        <td id="center">{parseFloat(conta.multa).toFixed(3)}</td>
                        <td id="center">{parseFloat(conta.desconto).toFixed(3)}</td>
                        <td id="center">{parseFloat(conta.saldo).toFixed(2)}</td>
                        <td id="center">{conta.pagamento !== null ? handleContasAPagar.formatDate(conta.pagamento) : null}</td>
                        <td id="center">{parseFloat(conta.recebimento).toFixed(2)}</td>
                        <td id="center">{conta.observacao}</td>
                        <td id="center"><button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => pagarValor(conta)}
                        >Pagar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>


    const listaValoresPago =
        <table className='table bg-light mt-1'>
            <thead>
                <tr>
                    <th id="center">Id</th>
                    <th id="center">Conta</th>
                    <th id="center">Compra</th>
                    <th id="center">User</th>
                    <th id="center">Valor</th>
                    <th id="center">Data Recebimento</th>
                </tr>
            </thead>
            <tbody>{valoresPagos.map((valPago: TValsPagos) => (
                <tr key={valPago.id_val}>
                    <th id="center">{valPago.id_val}</th>
                    <td id="center">{valPago.fk_conta}</td>
                    <td id="center">{valPago.fk_compra}</td>
                    <td id="center">{valPago.fk_user}</td>
                    <td id="center">{valPago.valor}</td>
                    <td id="center">{handleContasAPagar.formatDate(valPago.data_recebimento)}</td>

                </tr>
            ))}</tbody>
        </table>

    return (
        <>
            <div className="container">
                <NavBar />
                {sumbit}
                {headerContasPagar}
                {<div>{msg}</div>}
                {inputPagarValor}
                {listaContasPagar}
                {listaValoresPago}
            </div>
        </>
    )
}

export { ContasAPagarForm }