import { HandleContasAReceber } from "../../useCases/contasAReceber/HandleContasAReceber"
import { TContaAreceber, TValsRecebidos } from "../../useCases/contasAReceber/type/TContasAReceber"
import { FormatDate } from '../utils/formatDate/index';

type TProps={
    duplicatas:TContaAreceber []
    handleSubmit:any
    toGoBackInvoiceSale:any
}


export function PagCredLojaForm({handleSubmit, duplicatas, toGoBackInvoiceSale}:TProps){

    const handleContasAReceber = new  HandleContasAReceber()

    const listDuplicatas = 
    <>
     <table className='table bg-light mt-1'>
     <thead>
                    <tr>
                        <th id="center">ID</th>
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
                            <td id="center">{dup.emissao.toString() }</td>
                            <td id="center">{dup.valor}</td>
                            <td id="center">{dup.parcela}</td>
                            <td id="center">{dup.vencimento.toString()}</td>
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
            >Modificar forma de pagamneto</button>
            <dd className="p-3 mb-3">Forma de pagamento</dd>
            {listDuplicatas}
        </div>
        </>
    )
}