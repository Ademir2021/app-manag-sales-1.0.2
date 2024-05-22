import { useState, useEffect } from "react";
import { ProductForm } from '../../components/products/ProductForm';
import { ProductValFields } from "../../components/utils/ValFields/ValFields";
import { Dashboard } from "../dashboard/Dashboard";
import { postRegister } from "../../services/handleService";
import { TProductRegister, TBrand, TSector } from "./type/TypeProducts"
import api from "../../services/api/api";

export function FormProduct() {

    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);
    const [selectedIdBrand, setSelectedIdBrand] = useState<any>(1);
    const [selectedIdSector, setSelectedIdSector] = useState<any>(1);

    const [product, setProduct] = useState<TProductRegister>({
        id_product: 0, descric_product: '',
        val_max_product: 0, val_min_product: 0,
        fk_brand: 1, fk_sector: 1,
        bar_code: '', image: ''
    });

    product.fk_brand = parseInt(selectedIdBrand);
    product.fk_sector = parseInt(selectedIdSector);

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    };

    async function handleSubmit(e: Event) {
        e.preventDefault();
        console.log(product)
        if (ProductValFields(product)) {
            postRegister(product, 'products')
        }
    };

    useEffect(() => {
        async function getBrands() {
            try {
                await api.get<TBrand[]>('/brands')
                    .then(response => { setBrand(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        }
        getBrands()
    }, [brands])

    useEffect(() => {

        async function getSectors() {
            try {
                await api.get<TSector[]>('/sectors')
                    .then(response => { setSector(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        }
        getSectors()
    }, [sectors])

    return (
        <>
            <Dashboard />
            <ProductForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                alert=""
                message=""
                listBrand={<select
                    onChange={e => setSelectedIdBrand(e.target.value)}
                >
                    {brands.map((brand) => (
                        <option
                            key={brand.id_brand}
                            value={brand.id_brand}
                        >
                            {brand.name_brand}
                        </option>))}</select>}

                listSector={<select
                    onChange={e => setSelectedIdSector(e.target.value)}
                >
                    {sectors.map((sector) => (
                        <option
                            key={sector.id_sector}
                            value={sector.id_sector}
                        >
                            {sector.name_sector}
                        </option>))}</select>}
            >
                {product}
            </ProductForm>
        </>
    )
}