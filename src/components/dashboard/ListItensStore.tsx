import { currencyFormat } from "../utils/currentFormat/CurrentFormat";
import { TItens } from "../../useCases/products/type/TProducts";

import '../../index'
import './css/styles.css'

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
            <label><b>Item: </b>{item.item}</label>
            <p><b>Descrição: </b>{item.descric}</p>
            <div id="itensStoreCarButton">
                <button
                    className="btn btn-primary"
                    id='m-2'
                    onClick={() => decrementItemListStore(item)}>-</button>
                {item.amount}
                <button
                    className="btn btn-primary"
                    id='m-2'
                    onClick={() => incrementItemListStore(item)}>+</button>
                <button
                    className="btn btn-danger"
                    id='m-2'
                    onClick={() => { deleteListStore(item) }} >X</button>
            </div>
            <label><b> Unitário: </b>{currencyFormat(item.valor)}</label>
            <p><b>Total: </b>{currencyFormat(item.tItem)}</p>
            <hr></hr>
        </div>
    ))

    return (
        <>
            <hr></hr>
            <div
                id='itens-store-car'>
                <div id="main">
                    <form id='main'>
                        <label>Quantidade de items</label>
                        <input
                            id="main-input-number"
                            placeholder="Quantidade"
                            value={counter_}
                            disabled
                        />
                        <label>Total dos items</label>
                        <input
                            id="main-input-number"
                            placeholder="Total dos Items"
                            value={currencyFormat(subtotal)}
                            disabled
                        />
                        {itens.length !== 0 && <label id='msg-red'>{messages}</label>}
                    </form>
                    {itens.length > 0 && <button
                        className="btn btn-primary"
                        onClick={() => window.location.replace("/sale")}
                    >Finalizar carrinho
                    </button>}
                </div>

                <div id='m-2'>
                    {itens.length === 0 ? "O seu carrinho de compras está vazio" : null}
                </div>
            </div>
            {itens.length === 0 && <div id='container'><button
                className='btn btn-primary'
                id='m-2'
                onClick={() => { window.location.replace("/store") }}>Voltar as Compras</button></div>}
            <div id="container">
                <div id="main">
                    <div>
                        {list}
                    </div>
                </div>
            </div>
        </>
    )
}