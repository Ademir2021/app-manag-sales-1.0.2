import { useState, useEffect } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { ProductList } from "../../components/products/ProductList";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import { Dashboard } from "../dashboard/Dashboard";
import { TProductRegister } from "./type/TypeProducts";
import { HandleProducts } from "./HandleProduct";
import api from "../../services/api/api";

export function ProductsList() {
    const handleProducts:HandleProducts = new HandleProducts();
    const [products, setproducts] = useState<TProductRegister[]>([]);

    useEffect(()=>{
        async function getProducts() {
            try {
                await api.post<TProductRegister[]>('products_list')
                    .then(response => { setproducts(response.data)})
            } catch (err) { console.log("error occurred !!" + err) }
        };
        getProducts();
    },[products]);

    useEffect(() => {
        handleProducts.getAttributes()
    })
    
    return (
        <>
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
                        brand={handleProducts.nameBrands(product.fk_brand)}
                        sector={handleProducts.nameSector(product.fk_sector)}
                        un_med={handleProducts.nameUnMeds(product.fk_un_med)}
                        bar_code={product.bar_code}
                        image={product.image}
                        classe={handleProducts.nameClasseProd(product.fk_classe)}
                        grupo_fiscal={handleProducts.nameGruposFiscais(product.fk_grupo_fiscal)}
                        tipo_prod={handleProducts.nameTiposProds(product.fk_tipo_prod)}
                        ncm={product.ncm}
                        update={null}
                    />
                )))}
        </>
    )
}