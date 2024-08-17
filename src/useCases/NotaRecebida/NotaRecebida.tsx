import { useEffect, useState } from "react";
import { NotaRecebidaForm } from "../../components/NotaRecebida/NotaRecebidaForm";
import { TNotaRecebida, TItem } from "./type/TNotaRecebida";
import api from "../../services/api/api";
import { TProductRegister } from "../products/type/TypeProducts";
import { NotaRecebidaItemForm } from "../../components/NotaRecebida/NotaRecebidaItemForm";

export function NotaRecebida() {
    const [notaRecebida, setNotaRecebida] = useState<TNotaRecebida>({
        fkFornecedor: 0,
        data: '',
        emissao: '',
        numNota: 0,
        modelo: '',
        tProdutos: 0,
        vFrete: 0,
        vSeguro: 0,
        despAcessorias: 0,
        encargos: 0,
        acrescimo: 0,
        desconto: 0,
        total: 0,
        items: [],

    });
    
        const [products, setProducts] = useState<TProductRegister[]>([])

    // trib: {
    //     vIpi: 0,
    //     bcIcmsSt: 0,
    //     icmsSubst: 0,
    //     pisSubst: 0,
    //     cofinsSubst: 0,
    //     icmsSobreIpi: 0
    // }
    
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setNotaRecebida(values => ({ ...values, [name]: value }))
    };
    
    const handleChange_ = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setItem(values => ({ ...values, [name]: value }))
    };

    useEffect(() => {
        async function getProducts() {
            try {
                await api.post<TProductRegister[]>('products_list')
                    .then(response => {
                        setProducts(response.data)
                    })
            } catch (err) { console.log("error occurred !" + err) }
        }
        getProducts()
    }, [products]);

    function handleSubmit() {
        notaRecebida.data = new Date(notaRecebida.data).toISOString()
        notaRecebida.emissao = new Date(notaRecebida.emissao).toISOString()
        // setNotaRecebida(notaRecebida)
        // console.log(notaRecebida)
    }

    const [item, setItem] = useState<TItem>(
        {
            id: 0,
            tipo: "",
            item: 0,
            descric: "",
            quantidade: 0,
            unitario: 0,
            total: 0
        }
    );


    const clearFields = () => {
        setItem({
            id: 0,
            tipo: "",
            item: 0,
            descric: "",
            quantidade: 0,
            unitario: 0,
            total: 0
        })
    }

    function handleItems() {
        for (let product of products) {
            if (item.descric == product.descric_product) {
                item.descric = product.descric_product
                item.tipo = 'sem'
                item.quantidade = item.quantidade
                item.unitario = item.total / item.quantidade
                item.unitario = parseFloat(item.unitario.toFixed(2))
                item.total = item.total
                notaRecebida.items.push(item)
            }
        }
        clearFields()
    }

    async function handleSubmitItem(e: Event) {
        e.preventDefault()
        handleItems()

    }

    return (
        <>
            <p>{JSON.stringify(notaRecebida)}</p>
            <NotaRecebidaForm
                handeChange={handleChange}
                handleSubmit={handleSubmit}
            >
                {notaRecebida}
            </NotaRecebidaForm>

            <NotaRecebidaItemForm
                handleChange={handleChange_}
                handleSubmit={handleSubmitItem}
                products={products}
                items={notaRecebida.items}
            >
                {item}
            </NotaRecebidaItemForm>
        </>
    )
}

