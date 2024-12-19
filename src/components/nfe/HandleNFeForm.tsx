import { TSaleList } from "../../useCases/sales/type/TSale"
import { currencyFormat } from "../utils/currentFormat/CurrentFormat"
import { FormatDate } from "../utils/formatDate"
import { Waiting } from "../utils/waiting/Waiting"

type Props = {
    sales: TSaleList[]
}

function HandleNFeForm({ sales }: Props) {

    // const NFeStatus = <img src="img/NFe/status/autorizada.ico" alt="img NFe autorizada"></img>

    const thead = <thead>
        <tr>
            <th className='text-center'>Nota</th>
            <th className="text-center">NF</th>
            <th className="text-center">Filial</th>
            <th>Cliente</th>
            <th>Nome</th>
            <th>Data</th>
            <th>Doc</th>
            <th>Emissão</th>
            <th>Total</th>
            <th>Email</th>
            <th>Situação</th>
            <th>Chave</th>
            <th>Protocolo</th>
        </tr>
    </thead>

    return (
        <table className='table bg-light mt-1 container'>
            {sales.length === 0 ? <Waiting waiting="Aguardando Notas" /> : thead}
            <tbody>
                {sales.map((sale: TSaleList) => (
                    <tr key={sale.id_sale}>
                        <th className='text-center'>{sale.id_sale}</th>
                        <th className="text-center">{sale.id_sale}</th>
                        <th className="text-center">{sale.fk_name_filial}</th>
                        <td>{sale.fk_name_pers}</td>
                        <td>{sale.fk_name_pers}</td>
                        <td>{FormatDate(sale.created_at)}</td>
                        <td>{'doc'}</td>
                        <td>{currencyFormat(sale.created_at)}</td>
                        <td>{currencyFormat(sale.total_sale)}</td>
                        <td>{'email'}</td>
                        <td>{'sit'}</td>
                        <td>{'ch'}</td>
                        <td>{'protocolo'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export { HandleNFeForm }