import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { ProductList } from "../../components/products/ProductList";
import { TBrand, TProductRegister, TSector } from "./type/TypeProducts";
import { BackHome } from "../../components/utils/backHome/BackHome"
import api from "../../services/api/api";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";

export function ProductsList() {

    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);

    async function getProducts() {

        try {

            await api.get<TProductRegister[]>('products_home')
                .then(response => {
                    setProducts(response.data)
                })

        } catch (err) { console.log("error occurred !!" + err) }

    };
    if (products.length === 0) { getProducts() }

    useEffect(() => {

        async function getBrands() {
            try {
                await api.get<TBrand[]>('/brands')
                    .then(response => { setBrand(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getBrands()
    }, [brands])

    useEffect(() => {
        
        async function getSectors() {
            try {
                await api.get<TSector[]>('/sectors')
                    .then(response => { setSector(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getSectors()
    }, [sectors])

    function nameBrands(idBrand: number) {
        for (let i = 0; i < brands.length; i++) {
            if (brands[i].id_brand === idBrand) {
                const brand: string = brands[i].name_brand;
                return brand;
            }
        }
    }

    function nameSector(idSector: number) {
        for (let i = 0; i < sectors.length; i++) {
            if (sectors[i].id_sector === idSector) {
                const sector: string = sectors[i].name_sector;
                return sector;
            }
        }
    }

    return (
        <>
            <BackHome />
            {products.length === 0 ? <p>Carregando...</p> : (
                products.map((product: TProductRegister) => (
                    <ProductList
                        key={product.id_product}
                        id={product.id_product}
                        created_at={FormatDate(product.created_at)}
                        updated_at={product.updated_at === null ?
                            "não houve atualização" : FormatDate(product.updated_at)}
                        name={product.descric_product}
                        val_max={currencyFormat(product.val_max_product)}
                        val_min={currencyFormat(product.val_min_product)}
                        brand={nameBrands(product.fk_brand)}
                        sector={nameSector(product.fk_sector)}
                        bar_code={product.bar_code}
                        image={product.image}
                        update={null}
                    />
                )))}
        </>
    )
}