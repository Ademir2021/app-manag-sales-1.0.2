import { HandleContasAReceber } from "../../useCases/contasAReceber/HandleContasAReceber"
import { TContaAreceber, TValsRecebidos } from "../../useCases/contasAReceber/type/TContasAReceber"
import { FormatDate } from '../utils/formatDate/index';
type TProps={
    duplicatas: TContaAreceber[]
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
                    {duplicatas.map((conta: TContaAreceber) => (
                        <tr key={conta.id_conta}>
                            <th id="center">{conta.id_conta}</th>
                            <td id="center">{conta.venda}</td>
                            {/* <td id="center">{handleContasAReceber.formatDate(conta.emissao)}</td> */}
                            {/* <td id="center">{conta.valor.toFixed(3)}</td> */}
                            {/* <td id="center">{handleContasAReceber.formatDate((conta.vencimento))}</td> */}
                            <td id="center">{conta.juros.toFixed(3)}</td>
                            <td id="center">{conta.multa.toFixed(3)}</td>
                            <td id="center">{conta.desconto.toFixed(3)}</td>
                            <td id="center">{conta.saldo.toFixed(3)}</td>
                            <td id="center">{conta.pagamento}</td>
                            <td id="center">{conta.recebimento}</td>
                        </tr>
                    ))}
                </tbody>
     </table>
    </>
    return(
        <>
        <h1>Finalize sua compra</h1>
        {/* <>{JSON.stringify(duplicatas)}</> */}
        <button className="btn btn-primary m-3"
                onClick={handleSubmit}
            >Finalizar compra</button>
            {listDuplicatas}
        </>
    )
}