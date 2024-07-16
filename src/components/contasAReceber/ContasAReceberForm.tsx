import { TContaAreceber } from "../../useCases/contasAReceber/type/TContasAReceber"

import './ContasAReceber.css'

type TProps = {
    contasAReceber: TContaAreceber[]
    receberValor: any
    handleChange: React.ChangeEventHandler<HTMLInputElement>
    handleClick?:any
}
function ContasAreceberForm({ contasAReceber, receberValor, handleChange , handleClick}: TProps) {

    const list = contasAReceber.map((conta: TContaAreceber) => (
        <tr key={conta.id_conta}>
            <th id="center">{conta.id_conta}</th>
            <td id="center">{conta.emissao}</td>
            <td id="center">{conta.valor}</td>
            <td id="center">{conta.vencimento}</td>
            <td id="center">{conta.juros}</td>
            <td id="center">{conta.multa}</td>
            <td id="center">{conta.desconto}</td>
            <td id="center">{conta.saldo}</td>
            <td id="center">{conta.pagamento}</td>
            <td id="center"><button
                className="btn btn-primary"
                onClick={() => receberValor(conta)}
            >Receber</button></td>
        </tr>
    ))
    return (
        <>
            <div>
                <dd>Infomre o Valor a Pagar</dd>
                <input
                    type="text"
                    name="valor"
                    placeholder="Informe o valor recebido"
                    onChange={handleChange}
                />
                {/* <button onClick={handleClick}>Confirma</button> */}
            </div>
            <table className='table bg-light mt-1'>
                <thead>
                    <tr>
                        <th id="center">IdConta</th>
                        <th id="center">Emissão</th>
                        <th id="center">Valor</th>
                        <th id="center">Vencimento</th>
                        <th id="center">Juros</th>
                        <th id="center">Multa</th>
                        <th id="center">Desconto</th>
                        <th id="center">Saldo</th>
                        <th id="center">Pagamento</th>
                        <th id="center">Pagar</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </>
    )
}

export { ContasAreceberForm }