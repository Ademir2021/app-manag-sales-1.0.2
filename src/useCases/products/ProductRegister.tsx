import { useState, useEffect } from "react";
import { ProductForm } from '../../components/products/ProductForm';
import { Dashboard } from "../dashboard/Dashboard";
import { postRegister } from "../../services/handleService";
import { TProductRegister, TBrand, TSector, TUnMed } from "./type/TypeProducts"
import api from "../../services/api/api";

export function FormProduct() {

    const [alert_, setAlert_] = useState<string>("")

    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);
    const [unMed, setUnMed] = useState<TUnMed[]>([])

    const [selectedIdBrand, setSelectedIdBrand] = useState<any>(1);
    const [selectedIdSector, setSelectedIdSector] = useState<any>(1);
    const [selectedIdUnMed, setSelectedIdUn] = useState<any>(1);

    const [product, setProduct] = useState<TProductRegister>({
        id_product: 0, descric_product: '',
        val_max_product: 0, val_min_product: 0,
        fk_brand: 1, fk_sector: 1, fk_un_med: 1,
        bar_code: '', image: '', classe: 'Sem classe'
    });

    product.fk_brand = parseInt(selectedIdBrand);
    product.fk_sector = parseInt(selectedIdSector);
    product.fk_un_med = parseInt(selectedIdUnMed)

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
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

    useEffect(() => {
     async function getUnMed() {
            const unMed: TUnMed[] = [
                { id: 1, un_med: 'UN' },
                { id: 2, un_med: 'PC' },
                { id: 3, un_med: 'PCT' }
            ];
            setUnMed(unMed)
        }
        getUnMed()
    }, [unMed]);

    function ProductValFields() {
        let content = "Campo obrigatório: "
        let msg = ""
        if (product.descric_product === "") { msg += content + "produto, " };
        if (product.val_max_product === 0) { msg += content + "valor max, " };
        if (product.val_min_product === 0) { msg += content + "valor min, " };
        if (product.bar_code === "") { msg += content + "código de barras, " };
        if (msg !== "") {
            setAlert_(msg)
            return false;
        };
        return true;
    };

    async function handleSubmit(e: Event) {
        e.preventDefault();
        if (ProductValFields()) {
            // postRegister(product, 'product')
            if(alert_ !== "")
            setAlert_('')
        }
    };

    return (
        <>
            <p>{JSON.stringify(product)}</p>
            <Dashboard />
            <ProductForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                alert={alert_}
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

                listUn={<select
                    onChange={e => setSelectedIdUn(e.target.value)}
                >
                    {unMed.map((un: TUnMed) => (
                        <option
                            key={un.id}
                            value={un.id}
                        >
                            {un.un_med}
                        </option>))}</select>}
            >
                {product}
            </ProductForm>
        </>
    )
}