import { currencyFormat } from "../utils/currentFormat/CurrentFormat";
import { TItens } from "../../useCases/products/type/TypeProducts";
import { Waiting } from "../utils/waiting/Waiting";
import { MessagesCar } from "../utils/messages/MessagesCar";

import './itensStore.css'

type TProps = {
    itens: TItens[]
    decrementItemListStore: any
    incrementItemListStore: any
    deleteListStore: any
    messages: string
    counter_: number
    subtotal: number

}

export function ListItensStore({
    itens,
    decrementItemListStore,
    incrementItemListStore,
    deleteListStore,
    messages,
    counter_,
    subtotal,
}: TProps) {

    const list = itens.map((item: TItens) => (
        <div key={item.id}>
            <span><b>Item: </b>{item.item}</span>
            <p><b>Descrição: </b>{item.descric}</p>
            <div id="itensStoreCarButton">
                <button className="btn btn-primary"
                    onClick={() => decrementItemListStore(item)}>-</button>
                {item.amount}
                <button className="btn btn-primary"
                    onClick={() => incrementItemListStore(item)}>+</button>
                <button
                    className="btn btn-danger"
                    onClick={() => { deleteListStore(item) }} >X</button>
            </div>
            <span><b> Unitário: </b>{currencyFormat(item.valor)}</span>
            <p><b>Total: </b>{currencyFormat(item.tItem)}</p>
            <hr></hr>
        </div>
    ))

    return (
        <>
            <hr></hr>
            <div id='itensStoreCar'>
                <a
                    href='sale'><img
                        id='itensStoreCarImg'
                        src="img/car_sale.png"
                        alt="Carrinho de Compras" />
                </a>
            </div>
            {itens.length !== 0 ? <MessagesCar
                messages={messages}
                counter_={counter_}
                subtotal={subtotal} /> : null}
            {itens.length === 0 ?
                <Waiting waiting={"O seu Carrinho de compras está vazio"} /> : null}
            {itens.length === 0 ? <div id='itensStoreCartogoback'><button
                className='btn btn-primary'
                onClick={() => { window.location.replace("/") }}>Voltar as Compras</button></div> : null}
            <div className="container-global">
                <div className="main-global">
                    <div style={{ fontSize: '14px' }}>
                        {list}
                    </div>
                </div >
            </div >
        </>
    )
}