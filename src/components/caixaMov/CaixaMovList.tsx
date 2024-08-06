import { TCaixaMov } from "../../useCases/CaixaMov/type/TCaixaMov"
import { HandleContasAReceber } from "../../useCases/contasAReceber/HandleContasAReceber"

type Props = {
    caixaMov: TCaixaMov[]
}

export function CaixaMovListComp({
    caixaMov,
}: Props) {

    const handleContasAReceber = new HandleContasAReceber()

    const caixaMovList =
        <table className='table bg-light mt-1'>
            <thead>
                <tr>
                    <th id="center">Id_caixa</th>
                    <th id="center">fk_val</th>
                    <th id="center">data_recebimento</th>
                    <th id="center">debito</th>
                    <th id="center">credito</th>
                    <th id="center">saldo</th>
                </tr>
            </thead>
            <tbody>
                {caixaMov.map((caixa: TCaixaMov) => (
                    <tr key={caixa.id_caixa}>
                        <th id="center">{caixa.id_caixa}</th>
                        <td id="center">{caixa.fk_val}</td>
                        <td id="center">{handleContasAReceber.formatDate(caixa.data_recebimento)}</td>
                        <td id="center">{caixa.debito === null ? 0 : caixa.debito}</td>
                        <td id="center">{caixa.credito === null ? 0 : caixa.credito}</td>
                        <td id="center">{caixa.saldo}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    return (
        <>
            <div className="container">
                <div>Movimento de Caixa</div>
                {caixaMovList}
            </div>
        </>
    )
}