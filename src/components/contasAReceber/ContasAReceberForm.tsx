import { HandleFinanceiro } from "../utils/financeiro/HandleFinanceiro";
import { TContaAreceber, TValsRecebidos } from "../../useCases/contasAReceber/type/TContasAReceber"
import { currencyFormat } from '../utils/currentFormat/CurrentFormat';
import { checkAdminPrivilege } from "../utils/checksUserLogged/ChecksUserLogged";
import { NavBar } from "../navbar/Navbar";

import './ContasAReceber.css'

type Props = {
    contasAReceber: TContaAreceber[]
    valoresRecebidos: TValsRecebidos[]
    receberValor: any
    handleChangeValor: React.ChangeEventHandler<HTMLInputElement>
    handleChangeDesconto: React.ChangeEventHandler<HTMLInputElement>
    msg: string
    submitContasAReceberRegister: any
    submitInserirValor: any
    submitfluxoDeCaixa: any
    saldo: number
    printValorRecebido: any
    token: string
}

export function ContasAreceberForm({
    contasAReceber,
    receberValor,
    handleChangeValor,
    handleChangeDesconto,
    valoresRecebidos,
    msg,
    submitContasAReceberRegister,
    submitInserirValor,
    submitfluxoDeCaixa,
    saldo,
    printValorRecebido,
    token
}: Props) {

    const handleContasAReceber = new HandleFinanceiro()

    const headerContasReceber =
        <div id="header-contas-receber" className="container">
            Contas a receber - Títulos em aberto.
        </div>

    const sumbit = <div className="mb-1">
        <div>{token}</div>
        <button style={{ marginLeft: "0px", borderRadius: '0px' }}
            className="btn btn-primary"
            onClick={submitContasAReceberRegister}
        >Emitir título</button>
        <button style={{ marginLeft: "1px", borderRadius: '0px' }}
            className="btn btn-primary"
            onClick={submitInserirValor}
        >Inserir valor</button>
        <button style={{ marginLeft: "1px", borderRadius: '0px' }}
            className="btn btn-primary"
            onClick={submitfluxoDeCaixa}
        >Fluxo de caixa</button>
        <div style={{ marginLeft: "12px", borderRadius: '0px' }}
        ><b>Saldo = </b>{currencyFormat(saldo)}</div>
    </div>

    const inputReceberValor = <div>
        <input
            min={0}
            max={999}
            type="number"
            id="input-valor"
            placeholder="Informe o Valor a receber"
            onChange={handleChangeValor}
        />
        <input
            min={0}
            max={999}
            type="number"
            id="input-valor"
            placeholder="Desconto"
            onChange={handleChangeDesconto}
        />
    </div>

    const listaContasReceber = <table className='table bg-light mt-1'>
        <thead>
            <tr>
                <th id="center">ID</th>
                <td>Tipo</td>
                <td id="center">Pagador</td>
                <td id="center">Origem</td>
                <td>Emissão</td>
                <td>Valor</td>
                <td>Vencimento</td>
                <td>Juros</td>
                <td>Multa</td>
                <td>Desconto</td>
                <td>Saldo</td>
                <td>Pagamento</td>
                <td>Recebimento</td>
                <td>Observação</td>
                <td>Receber</td>
            </tr>
        </thead>
        <tbody>
            {contasAReceber.map((conta: TContaAreceber) => (
                <tr key={conta.id_conta}>
                    <th id="center">{conta.id_conta}</th>
                    <td>{conta.tipo}</td>
                    <td id="center">{conta.fk_pagador}</td>
                    <td id="center">{conta.fk_venda}</td>
                    <td>{handleContasAReceber.formatDate(conta.emissao)}</td>
                    <td>{parseFloat(conta.valor).toFixed(3)}</td>
                    <td>{handleContasAReceber.formatDate(conta.vencimento)}</td>
                    <td>{parseFloat(conta.juros).toFixed(3)}</td>
                    <td>{parseFloat(conta.multa).toFixed(3)}</td>
                    <td>{parseFloat(conta.desconto).toFixed(3)}</td>
                    <td>{parseFloat(conta.saldo).toFixed(2)}</td>
                    <td>{conta.pagamento !== null ? handleContasAReceber.formatDate(conta.pagamento) : null}</td>
                    <td>{parseFloat(conta.recebimento).toFixed(2)}</td>
                    <td>{conta.observacao}</td>
                    <td>{checkAdminPrivilege() === "2" ? <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => receberValor(conta)}
                    >Receber</button> : null}</td>
                </tr>
            ))}
        </tbody>
    </table>

    const listaValoresRecebidos =
        <table className='table bg-light mt-1'>
            <thead>
                <tr>
                    <th id="center">ID</th>
                    <td id="center">Conta</td>
                    <td id="center">Venda</td>
                    <td id="center">User</td>
                    <td>Recebido</td>
                    <td>Pagamento</td>
                    <td>Descrição</td>
                    <td>Recibo</td>
                </tr>
            </thead>
            <tbody>{valoresRecebidos.map((valRec: TValsRecebidos) => (
                <tr key={valRec.id_val}>
                    <th id="center">{valRec.id_val}</th>
                    <td id="center">{valRec.fk_conta}</td>
                    <td id="center">{valRec.fk_venda}</td>
                    <td id="center">{valRec.fk_user}</td>
                    <td>{valRec.valor}</td>
                    <td>{handleContasAReceber.formatDate(valRec.data_recebimento)}</td>
                    <td>{valRec.descricao}</td>
                    <td><button className="btn btn-primary" onClick={() => printValorRecebido(valRec)}>Recibo</button></td>
                </tr>
            ))}</tbody>
        </table>
    return (
        <div className="container">
            <NavBar />
            {checkAdminPrivilege() === '2' ? sumbit : null}
            {headerContasReceber}
            {<div>{msg}</div>}
            {checkAdminPrivilege() === '2' ? inputReceberValor : <div>Contas em aberto do Cliente</div>}
            { contasAReceber.length > 0  ? listaContasReceber: <h1>Cliente sem Título para Pagar !</h1> }
            { valoresRecebidos.length > 0 ? listaValoresRecebidos: null }
        </div>
    )
}