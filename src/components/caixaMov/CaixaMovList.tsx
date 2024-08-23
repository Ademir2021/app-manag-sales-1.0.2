import { TCaixaMov } from "../../useCases/CaixaMov/type/TCaixaMov"
import { HandleContasAReceber } from "../../useCases/contasAReceber/HandleContasAReceber"
type Props = {
    caixaMov: TCaixaMov[]
    findNameMovCaixaDebito:any // (id:number)
    findNameMovCaixaCredito:any // (id:number)
}
export function CaixaMovListComp({
    caixaMov,
    findNameMovCaixaDebito,
    findNameMovCaixaCredito
}: Props) {
    const handleContasAReceber = new HandleContasAReceber()
    const caixaMovList =
        <table className='table bg-light mt-1'>
            <thead>
                <tr>
                    <th id="center">ID</th>
                    <td id="center">Recebimento</td>
                    <td id="center">MovId</td>
                    <td id="center">Mov</td>
                    <td id="center">D/C</td>
                    <td id="center">Valor</td>
                    <td id="center">saldo</td>
                </tr>
            </thead>
            <tbody>
                {caixaMov.map((caixa: TCaixaMov) => (
                    <tr key={caixa.id_caixa}>
                        <th id="center">{caixa.id_caixa}</th>
                        <td id="center">{handleContasAReceber.formatDate(caixa.data_recebimento)}</td>
                        <td id="center">{caixa.fk_val}</td>
                        <td id="center">{caixa.debito !== null ? findNameMovCaixaDebito(caixa.fk_val) : findNameMovCaixaCredito(caixa.fk_val)}</td>
                        <td id="center">{caixa.credito === null ? "D" : "C"}</td>
                        <td id="center">{caixa.credito === null ? caixa.debito : caixa.credito}</td>
                        <td id="center">{caixa.saldo}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    return (
        <>
            <div className="container">
                <div className="text-center p-1">Movimento do Caixa</div>
                {caixaMovList}
            </div>
        </>
    )
}