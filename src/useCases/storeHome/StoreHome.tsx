import { useState, useEffect, SetStateAction } from 'react';
import { NavBar } from "../../components/navbar/Navbar";
import { TProductRegister, TItem, TItens, TBrand, TSector, TUnMed } from '../products/type/TypeProducts';
import api from '../../services/api/api'
import { ListItens } from '../../components/storeHome/ListItens';
import { Header } from '../../components/storeHome/Header';
import { FooterHomePage } from './FooterHome';
import { SearchItens } from '../../components/storeHome/SearchItens';
import { currencyFormat } from '../../components/utils/currentFormat/CurrentFormat';
import ControlledCarousel from '../../components/carousel/ControlledCarousel';

export function StoreHome() {
    const [id, setId] = useState<number>(1);
    let [amount, setAmount] = useState<number>(1)
    const [counter, setCounter] = useState<number>(0)
    const [subtotal, setsubtotal] = useState<number>(0)
    const [itemImg,] = useState<string>('./img/img_itens/sale_avatar.png');
    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [listProd, setlistProd] = useState<TProductRegister[]>([]);
    const [itens, setItens] = useState<TItens[]>([]);
    const [item, setItem] = useState<TItem>({ descric: '' });
    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);
    const [uniMeds, setUniMeds] = useState<TUnMed[]>([])
    const [selectSector, setSelectSector] = useState<string>("Todos")
    const [flgItens, setFlgItens] = useState<boolean>(false)
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setItem(values => ({ ...values, [name]: value }))
    };

    useEffect(() => {
        function idSector(nameSector: string) {
            for (let i = 0; i < sectors.length; i++) {
                if (sectors[i].name_sector === nameSector) {
                    return sectors[i]
                }
            }
        }

        async function getProducts() {
            try {
                await api.post<TProductRegister[]>('products_list')
                    .then(response => {
                        const resultProducts: TProductRegister[] = []
                        const items: TProductRegister[] = response.data
                        if (flgItens === false) {
                            setlistProd(items)
                            setFlgItens(true)
                        }
                        for (let item of items) {
                            if (item.fk_sector === idSector(selectSector)?.id_sector) resultProducts.push(item);
                            selectSector !== "Todos" ? setProducts(resultProducts) : setProducts(items);
                        }
                    })
            } catch (err) { console.log("error occurred !" + err) }
        }
        getProducts()

    }, [flgItens, selectSector, sectors])

    useEffect(() => {
        function getItensStorage() {
            const res_itens: any | undefined = localStorage.getItem('p')
            if (res_itens)
                setItens(JSON.parse(res_itens))
            const res_counter: any | undefined = localStorage.getItem('c')
            if (res_counter)
                setCounter(JSON.parse(res_counter))
            const res_sub_total: any | undefined = localStorage.getItem('t')
            if (res_sub_total)
                setsubtotal(JSON.parse(res_sub_total))
        }

        getItensStorage()
    }, [item, itens])

    function sumItens() {
        let sum = 0
        for (let item of itens) {
            sum += (item.amount * item.valor)
        }
        setsubtotal(sum)
        localStorage.setItem("t", JSON.stringify(sum));
        return sum
    }

    function verifItem(element: TItens) {
        for (let item of itens)
            if (element.item === item.item) {
                item.amount = item.amount + element.amount;
                return item.tItem = item.amount * item.valor;
            }

        setCounter(counter + 1)
        localStorage.setItem("c", JSON.stringify(counter + 1));
        setId(id + 1);
        return itens.push(element);
    }

    function handleItem(item: TProductRegister) {
        const getItem: TItens = {
            id: 0, item: 0, descric: '', amount: 0, valor: 0, tItem: 0
        }
        getItem.id = id;
        getItem.item = item.id_product;
        getItem.descric = item.descric_product;
        getItem.amount = amount
        setAmount(amount)
        amount = 1
        setAmount(amount)
        getItem.valor = item.val_max_product;
        getItem.tItem = getItem.valor * getItem.amount;
        verifItem(getItem);
        setItens(itens);
        for (let item_ of itens) { // Add amount item
            if (item_.item === item.id_product) {
                item.amount = item_.amount
            }
        }
        setsubtotal(sumItens)
        localStorage.setItem("p", JSON.stringify(itens));
        localStorage.setItem("id", JSON.stringify(id));
    }

    function handleProducts() {
        if (item.descric !== '') {
            const resp: TProductRegister[] = []
            for (let i = 0; products.length > 0; i++) {
                if (item.descric === products[i].descric_product) {
                    resp.push(products[i])
                    setlistProd(resp)
                    item.descric = ""
                }
            }
        }
        setlistProd(products)
    }

    function handleSubmit(e: Event) {
        e.preventDefault()
        handleProducts()
    }

    async function getBrands() {
        try {
            await api.get<TBrand[]>('/brands')
                .then(response => {
                    setBrand(response.data);
                });
        } catch (err) {
            console.log("err" + err);
        }
    };
    useEffect(() => {
        getBrands()
    }, [])

    useEffect(() => {
        async function getSectors() {
            try {
                await api.get<TSector[]>('/sectors')
                    .then(response => {
                        setSector(response.data);
                    });
            } catch (err) {
                console.log("err" + err);
            }
        };
        getSectors()
    }, [sectors])

    useEffect(() => {
        async function getUniMeds() {
            try {
                await api.get<TUnMed[]>('/un_meds')
                    .then(response => {
                        setUniMeds(response.data);
                    });
            } catch (err) {
                console.log("err" + err);
            }
        };
        getUniMeds()
    }, [uniMeds])

    function nameBrands(idBrand: number) {
        for (let brand of brands) {
            if (brand.id_brand === idBrand)
                return brand.name_brand
        }
    }

    function nameSector(idSector: number) {
        for (let sector of sectors) {
            if (sector.id_sector === idSector)
                return sector.name_sector
        }
    }

    function nameUniMeds(idUniMeds: number) {
        for (let uniMed of uniMeds) {
            if (uniMed.id_un === idUniMeds)
                return uniMed.un_med
        }
    }

    return (
        <>
            <Header
                counter={counter !== 0 ? counter : 0}
                subtotal={subtotal === 0 ? '' : currencyFormat(subtotal)}
            />
            <NavBar />
            <SearchItens
                selectSector={(e: { target: { value: SetStateAction<string> } }) => setSelectSector(e.target.value)}
                sectors={sectors}
                messageItems={""}
                products={products}
                descric={item.descric}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {selectSector === "Todos" ? <ControlledCarousel /> : null}
            {(listProd.map((item: TProductRegister) => (
                <ListItens
                    key={item.id_product}
                    item_img={item.image !== null ? `./img/img_itens/${item.image}` : itemImg}
                    id={item.id_product}
                    brand={nameBrands(item.fk_brand)}
                    sector={nameSector(item.fk_sector)}
                    descric={item.descric_product}
                    amount={item.amount ? item.amount : "0"}
                    valor={item.val_max_product}
                    selectAmount={e => e.target.value !== "Quant: 1" ? setAmount(parseInt(e.target.value)) : setAmount(1)}
                    handleItem={handleItem}
                    itemParameter={item}
                    unMed={nameUniMeds(item.fk_un_med)}
                />
            )))}
            <FooterHomePage />
        </>
    )
} 