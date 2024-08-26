import { currencyFormat } from "../currentFormat/CurrentFormat";

type Props = {
    messages:string;
    subtotal:number;
    counter_:number;

}

export function MessagesCar(props:Props) {
    return (
            <>
                <dd className="text-center">{props.messages}</dd>
                <dd className="text-center"><b>{props.counter_}</b> Items comprados</dd>
                <dd className="text-center">{currencyFormat(props.subtotal)}</dd>
            </>
    )
}