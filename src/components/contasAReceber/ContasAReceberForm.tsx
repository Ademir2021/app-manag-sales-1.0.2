import { HandleContasAReceber } from "../../useCases/contasAReceber/HandleContasAReceber"
import { TContaAreceber, TValsRecebidos } from "../../useCases/contasAReceber/type/TContasAReceber"
import { NavBar } from "../navbar/Navbar"

import './ContasAReceber.css'

type TProps = {
    contasAReceber: TContaAreceber[]
    valoresRecebidos: TValsRecebidos[]
    receberValor: any
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    msg: string
}

function ContasAreceberForm({
    contasAReceber,
    receberValor,
    handleChange,
    valoresRecebidos,
    msg
}: TProps) {

    const handleContasAReceber = new HandleContasAReceber()

    const headerContasReceber =
        <div id="header-contas-receber" className="container">
            Contas a receber - Títulos em aberto.
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
            <table className='table bg-light mt-1'>
                <thead>
                    <tr>
                        <th id="center">ID</th>
                        <th id="center">Tipo</th>
                        <th id="center">Pagador</th>
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
                        <th id="center">Observação</th>
                        <th id="center">Receber</th>
                    </tr>
                </thead>
                <tbody>
                    {contasAReceber.map((conta: TContaAreceber) => (
                        <tr key={conta.id_conta}>
                            <th id="center">{conta.id_conta}</th>
                            <th id="center">{conta.tipo}</th>
                            <td id="center">{conta.fk_pagador}</td>
                            <td id="center">{conta.fk_venda}</td>
                            <td id="center">{handleContasAReceber.formatDate(conta.emissao)}</td>
                            <td id="center">{parseFloat(conta.valor).toFixed(3)}</td>
                            <td id="center">{handleContasAReceber.formatDate(conta.vencimento)}</td>
                            <td id="center">{parseFloat(conta.juros).toFixed(3)}</td>
                            <td id="center">{parseFloat(conta.multa).toFixed(3)}</td>
                            <td id="center">{parseFloat(conta.desconto).toFixed(3)}</td>
                            <td id="center">{parseFloat(conta.saldo).toFixed(2)}</td>
                            <td id="center">{conta.pagamento !== null ? handleContasAReceber.formatDate(conta.pagamento) : null}</td>
                            <td id="center">{parseFloat(conta.recebimento).toFixed(2)}</td>
                            <td id="center">{conta.observacao}</td>
                            <td id="center"><button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => receberValor(conta)}
                            >Receber</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        

    const listaValoresRecebidos =
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
                <tbody>{valoresRecebidos.map((valRec: TValsRecebidos) => (
                    <tr key={valRec.id_val}>
                        <th id="center">{valRec.id_val}</th>
                        <th id="center">{valRec.fk_conta}</th>
                        <th id="center">{valRec.fk_venda}</th>
                        <th id="center">{valRec.fk_user}</th>
                        <th id="center">{valRec.valor}</th>
                        <th id="center">{handleContasAReceber.formatDate(valRec.data_recebimento)}</th>

                    </tr>
                ))}</tbody>
            </table> 

    return (
        <>
            <div className="container">
                <NavBar/>
                {headerContasReceber}
                {<div>{msg}</div>}
                {inputReceberValor}
                {listaContasReceber}
                {listaValoresRecebidos}
            </div>
        </>
    )
}

export { ContasAreceberForm }