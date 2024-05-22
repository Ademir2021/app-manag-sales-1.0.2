import '../global-module.css'

type Props = {
    id: number;
    create: Date | any;
    name: string | number;
    total_prod: string | number;
    disc_sale: string | number;
    total_note: string | number;
    issueNote: HTMLAnchorElement | string | undefined | HTMLLabelElement | any;
}

export function SalesList(props: Props) {
    return (
        <div className='container-global'>
            <div className='main-global'>
                <ul className='main-global-form'>
                    <li><b>Venda</b> {props.id}</li>
                    <li><b>Emissão</b> {props.create}</li>
                    <li><b>Cliente</b> {props.name}</li>
                    <li><b>Total produtos </b>{props.total_prod}</li>
                    <li><b>Desconto</b> {props.disc_sale}</li>
                    <li><b>Total nota</b> {props.total_note}</li>
                    <li>{props.issueNote}</li>
                </ul>
            </div>
        </div>
    )
}
