import { useState, useEffect } from 'react';
import { NavBar } from '../../components/navbar/Navbar';
import { ListItensStore } from '../../components/dashboard/ListItensStore';
import { TItens } from '../products/type/TypeProducts';

export function ItenStore() {

    const [itens, setItens] = useState<TItens[]>([]);
    const [messages, setMessages] = useState<string>('');
    const [subtotal, setsubtotal] = useState<number>(0);
    const [counter_, setCounter] = useState<number>(0)

    useEffect(() => {
        function getItensStorage() {
            const itens_store_res = localStorage.getItem('p');
            if (itens_store_res !== null)
                setItens(JSON.parse(itens_store_res));
            const counter_res = localStorage.getItem('c');
            if (counter_res !== null)
                setCounter(JSON.parse(counter_res));
            const subTotal_res = localStorage.getItem('t');
            if (subTotal_res !== null)
                setsubtotal(JSON.parse(subTotal_res));
        };
        getItensStorage()
    }, [itens]);

    function sumItens() {
        let sum = 0
        for (let i = 0; i < itens.length; i++) {
            sum += (itens[i].amount * itens[i].valor)
        }
        localStorage.setItem("t", JSON.stringify(sum));
        return sum
    }

    function deleteListStore(item: TItens) {
        if (window.confirm('Deseja remover, ' + item.descric + ' ?')) {
            for (let i = 0; itens.length > 0; i++) {
                if (itens[i].id === item.id) {
                    itens.splice(i, 1);
                    localStorage.setItem("p", JSON.stringify(itens));
                    setMessages(item.descric + ', foi removido com sucesso !');
                    let res_counter = localStorage.getItem('c');
                    if (res_counter !== null) {
                        const counter = JSON.parse(res_counter)
                        localStorage.setItem("c", JSON.stringify(counter - 1));
                        res_counter = localStorage.getItem('c');
                        setCounter(counter_);
                    }
                    sumItens()
                    setTimeout(() => {
                        setMessages('');
                    }, 5000);
                }
            }
        }
    }

    function incrementItemListStore(item: TItens) {
        for (let i = 0; itens.length > 0; i++) {
            if (itens[i].id === item.id) {
                itens[i].amount += 1
                itens[i].tItem = itens[i].amount * itens[i].valor
                localStorage.setItem("p", JSON.stringify(itens));
                sumItens()
            }
        }
    };

    function decrementItemListStore(item: TItens) {
        for (let i = 0; itens.length > 0; i++) {
            if (itens[i].id === item.id) {
                itens[i].amount -= 1
                if (itens[i].amount > 0) {
                    itens[i].tItem = itens[i].amount * itens[i].valor
                    localStorage.setItem("p", JSON.stringify(itens));
                    sumItens()
                }
            }
        }
    };

    return (
        <>
            <NavBar />
            <ListItensStore
                itens={itens}
                incrementItemListStore={incrementItemListStore}
                decrementItemListStore={decrementItemListStore}
                deleteListStore={deleteListStore}
                messages={messages}
                counter_={counter_}
                subtotal={subtotal}
            />
        </>
    )
}