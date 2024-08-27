type Props = {
    id: number;
    create: Date | any;
    name: string | number;
    total_prod: string | number;
    disc_sale: string | number;
    total_note: string | number;
    issueNote: any;
}

export function SalesList(props: Props) {

    const NFeStatus = <img src="img/NFe/status/autorizada.ico" alt="img NFe autorizada"></img>

    return (
        <table className='table bg-light mt-1 container'>
        <thead>
            <tr>
                <th className='text-center'>NOTA</th>
                <th className="text-center">NFe</th>
                <th className="text-center">STATUS</th>
                <th className='text-center'>EMISSÃO</th>
                <th className='text-center'>CLIENTE</th>
                <th className='text-center'>T.PROD</th>
                <th className='text-center'>DESC.</th>
                <th className="text-center">T.NOTA</th>
                <th className="text-center">IMPRIMIR</th>
            </tr>
        </thead>
        <tbody>
            <tr key={props.id}>
                <th className='text-center'>{props.id}</th>
                <th className="text-center">{props.id}</th>
                <th className="text-center">{NFeStatus}</th>
                <td className='text-center'>{props.create}</td>
                <td className='text-center'>{props.name}</td>
                <td className='text-center'>{props.total_prod}</td>
                <td className='text-center'>{props.disc_sale}</td>
                <td className='text-center'>{props.total_note}</td>
                <td className='text-center'>{props.issueNote}</td>
            </tr>
        </tbody>
    </table>
    )
}
