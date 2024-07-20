import { HandleContasAReceber } from "../../useCases/contasAReceber/HandleContasAReceber"
import { TContaAreceber, TValsRecebidos } from "../../useCases/contasAReceber/type/TContasAReceber"
import { FormatDate } from '../utils/formatDate/index';

type TProps={
    duplicatas:TContaAreceber []
    handleSubmit:any
}


export function PagCredLojaForm({handleSubmit, duplicatas}:TProps){

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
        <h1>Finalize sua compra</h1>
        <button className="btn btn-primary m-3"
                onClick={handleSubmit}
            >Finalizar compra</button>
            <dd className="p-3">Forma de pagamento</dd>
            {listDuplicatas}
        </>
    )
}