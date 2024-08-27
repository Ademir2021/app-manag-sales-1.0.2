import { currencyFormat } from "../utils/currentFormat/CurrentFormat";
import { TItens } from "../../useCases/products/type/TypeProducts";

import './itensStore.css'

type Props = {
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
}: Props) {

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
            <div id='itensStoreCar'>
                <a
                    href='sale'><img
                        id='itensStoreCarImg'
                        src="img/car_sale.png"
                        alt="Carrinho de Compras" />
                </a>
                <div className="text-center">
                    {itens.length !== 0 ? messages : null}
                </div>
                <div className="text-center">
                    {itens.length !== 0 ? "Quantidade = " + counter_ : null}
                </div>
                <div className="text-center">
                    {itens.length !== 0 ? "TItems = " + currencyFormat(subtotal) : null}
                </div>
                <div>
                    {itens.length === 0 ? "O seu Carrinho de compras está vazio" : null}
                </div>
            </div>
            {itens.length === 0 ? <div id='itensStoreCartogoback'><button
                className='btn btn-primary'
                onClick={() => { window.location.replace("/store") }}>Voltar as Compras</button></div> : null}
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