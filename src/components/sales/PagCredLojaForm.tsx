import { TContaAreceber } from "../../useCases/contasAReceber/type/TContasAReceber"
import { HandleContasAReceber } from "../../useCases/contasAReceber/HandleContasAReceber"
import { Globais } from "../globais/Globais"

type TProps={
    duplicatas:TContaAreceber []
    handleSubmit:any
    toGoBackInvoiceSale:any
    URLNoteSubmit:any
}

export function PagCredLojaForm({handleSubmit, duplicatas, toGoBackInvoiceSale,URLNoteSubmit}:TProps){
   
    const handleContasAReceber = new HandleContasAReceber()

    const listDuplicatas = 
    <>
     <table className='table bg-light mt-1'>
     <thead>
                    <tr>
                        <th id="center">ID</th>
                        <th id='center'>Pagador</th>
                        <th id="center">Emissão</th>
                        <th id="center">Valor</th>
                        <th id="center">Parcela</th>
                        <th id="center">Vencimento</th>
                    </tr>
                </thead>
                <tbody>
                    {duplicatas.map((dup:TContaAreceber) => (
                        <tr key={dup.id_conta}>
                            <th id="center">{dup.id_conta}</th>
                            <th id="center">{dup.fk_pagador}</th>
                            <td id="center">{handleContasAReceber.formatDate(dup.emissao)}</td>
                            <td id="center">{dup.valor}</td>
                            <td id="center">{dup.parcela}</td>
                            <td id="center">{handleContasAReceber.formatDate(dup.vencimento)}</td>
                        </tr>
                    ))}
                </tbody>
     </table>
    </>
    return(
        <>
        <div className="container">
        <h1 className="text-center">Finalizar compra</h1>
        <button className="btn btn-primary m-3"
                onClick={handleSubmit}
            >Finalizar compra</button>
             <button className="btn btn-primary m-3"
                onClick={toGoBackInvoiceSale}
            >Modificar forma de pagamento</button>
            <dd className="p-3 mb-3">Forma de pagamento</dd>
            {listDuplicatas}
            <>{URLNoteSubmit ? <button
            className="btn btn-primary"
            onClick={() => { window.location.replace(Globais.URL_NOTE + '/' + URLNoteSubmit) }}>Imprimir</button> : null}</>
        </div>
        </>
    )
}