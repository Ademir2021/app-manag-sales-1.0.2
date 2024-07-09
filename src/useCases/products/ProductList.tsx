import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { ProductList } from "../../components/products/ProductList";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import { Dashboard } from "../dashboard/Dashboard";
import { TBrand, TProductRegister, TSector, TUnMed, TClasseProd, TGrupoFiscal, TTipoProd } from "./type/TypeProducts";

import { HandleProducts } from "./HandleProduct";

import api from "../../services/api/api";

export function ProductsList() {

    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);
    const [unMeds, setUnMeds] = useState<TUnMed[]>([]);
    const [classesProds, setClassesProds] = useState<TClasseProd[]>([]);
    const [gruposFiscais, setGruposFiscais] = useState<TGrupoFiscal[]>([])
    const [tiposProds,setTiposProds] = useState<TTipoProd[]>([])

    useEffect(()=>{
        async function getProducts() {
            try {
                await api.post<TProductRegister[]>('products_list')
                    .then(response => { setProducts(response.data)})
            } catch (err) { console.log("error occurred !!" + err) }
        };
        getProducts();
    },[products]);

    useEffect(() => {
        async function getBrands() {
            try {
                await api.get<TBrand[]>('/brands')
                    .then(response => { setBrand(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getBrands()
    }, [brands]);

    useEffect(() => {
        async function getSectors() {
            try {
                await api.get<TSector[]>('/sectors')
                    .then(response => { setSector(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getSectors()
    }, [sectors]);

    useEffect(() => {
        async function getUnMeds() {
            try {
                await api.get<TUnMed[]>('/un_med')
                    .then(response => { setUnMeds(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getUnMeds()
    }, [unMeds]);

    useEffect(() => {
        async function getClasssesProds() {
            try {
                await api.get<TClasseProd[]>('/classes_prods')
                    .then(response => { setClassesProds(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getClasssesProds()
    }, [classesProds]);

    useEffect(() => {
        async function getGruposFiscais() {
            try {
                await api.get<TGrupoFiscal[]>('/grupos_fiscais')
                    .then(response => { setGruposFiscais(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getGruposFiscais()
    }, [gruposFiscais]);

    useEffect(() => {
        async function getTiposProds() {
            try {
                await api.get<TTipoProd[]>('/tipos_prods')
                    .then(response => { setTiposProds(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getTiposProds()
    }, [tiposProds]);

    const handleProducts:HandleProducts = new HandleProducts()

    return (
        <>
            {/* <p>{JSON.stringify(tiposProds)}</p> */}
            <Dashboard />
            <h1 className="text-center">Lista de Produtos</h1>
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
                        brand={handleProducts.nameBrands(product.fk_brand, brands)}
                        sector={handleProducts.nameSector(product.fk_sector, sectors)}
                        un_med={handleProducts.nameUnMeds(product.fk_un_med, unMeds)}
                        bar_code={product.bar_code}
                        image={product.image}
                        classe={handleProducts.nameClasseProd(product.fk_classe, classesProds)}
                        grupo_fiscal={handleProducts.nameGruposFiscais(product.fk_grupo_fiscal, gruposFiscais)}
                        tipo_prod={handleProducts.nameTiposProds(product.fk_tipo_prod, tiposProds)}
                        ncm={product.ncm}
                        update={null}
                    />
                )))}
        </>
    )
}