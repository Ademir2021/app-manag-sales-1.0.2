import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { ProductList } from "../../components/products/ProductList";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import { Dashboard } from "../dashboard/Dashboard";
import { TBrand, TProductRegister, TSector, TUnMed, TClasseProd, TGrupoFiscal, TTipoProd } from "./type/TypeProducts";
import api from "../../services/api/api";

export function ProductsList() {

    const [products, setProducts] = useState<TProductRegister[]>([]);
    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);
    const [unMeds, setUnMeds] = useState<TUnMed[]>([]);
    const [classesProds, setClassesProds] = useState<TClasseProd[]>([]);
    const [gruposFiscais, setGruposFiscais] = useState<TGrupoFiscal[]>([])
    const [tiposProds,setTiposProds] = useState<TTipoProd[]>([])

    async function getProducts() {
        try {
            await api.post<TProductRegister[]>('products_list')
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
    }, [classesProds]);

    useEffect(() => {
        async function getTiposProds() {
            try {
                await api.get<TTipoProd[]>('/tipos_prods')
                    .then(response => { setTiposProds(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getTiposProds()
    }, [tiposProds]);

    function nameBrands(idBrand: number) {
        for (let i = 0; i < brands.length; i++) {
            if (brands[i].id_brand === idBrand) {
                const brand: string = brands[i].name_brand;
                return brand;
            }
        }
    };

    function nameSector(idSector: number) {
        for (let i = 0; i < sectors.length; i++) {
            if (sectors[i].id_sector === idSector) {
                const sector: string = sectors[i].name_sector;
                return sector;
            }
        }
    };

    function nameUnMeds(idUnMed: number) {
        for (let i = 0; i < unMeds.length; i++) {
            if (unMeds[i].id_un === idUnMed) {
                const unMed: string = unMeds[i].un_med;
                return unMed;
            }
        }
    };

    function nameClasseProd(idClasseProd: number) {
        for (let i = 0; i < classesProds.length; i++) {
            if (classesProds[i].id_classe === idClasseProd) {
                const nameClasse: string = classesProds[i].name_classe;
                return nameClasse;
            }
        }
    };

    function nameGruposFiscais(idGrupoFiscal: number) {
        for (let i = 0; i < gruposFiscais.length; i++) {
            if (gruposFiscais[i].id_grupo_fiscal === idGrupoFiscal) {
                const nameGrupoFiscal: string = gruposFiscais[i].name_grupo_fiscal;
                return nameGrupoFiscal;
            }
        }
    };

    function nameTiposProds(idTipoProd: number) {
        for (let i = 0; i < tiposProds.length; i++) {
            if (tiposProds[i].id_tipo === idTipoProd) {
                const nameTipoProd: string = tiposProds[i].name_tipo;
                return nameTipoProd;
            }
        }
    };

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
                        brand={nameBrands(product.fk_brand)}
                        sector={nameSector(product.fk_sector)}
                        un_med={nameUnMeds(product.fk_un_med)}
                        bar_code={product.bar_code}
                        image={product.image}
                        classe={nameClasseProd(product.fk_classe)}
                        grupo_fiscal={nameGruposFiscais(product.fk_grupo_fiscal)}
                        tipo_prod={nameTiposProds(product.fk_tipo_prod)}
                        ncm={product.ncm}
                        update={null}
                    />
                )))}
        </>
    )
}