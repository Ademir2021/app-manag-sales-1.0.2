import { useState, useEffect } from "react";
import { ProductForm } from '../../components/products/ProductForm';
import { Dashboard } from "../dashboard/Dashboard";
import { postRegister } from "../../services/handleService";
import { TProductRegister, TBrand, TSector, TUnMed, TClasseProd, TGrupoFiscal, TTipoProd, TNcm } from "./type/TypeProducts"
import ncmJSON from './NCM.json'
import api from "../../services/api/api";

export function FormProduct() {
    const [alert_, setAlert_] = useState<string>("")
    const [brands, setBrands] = useState<TBrand[]>([]);
    const [sectors, setSectors] = useState<TSector[]>([]);
    const [unMeds, setUnMeds] = useState<TUnMed[]>([])
    const [classesProds, setClassesProds] = useState<TClasseProd[]>([])
    const [gruposFiscais, setGruposFiscais] = useState<TGrupoFiscal[]>([])
    const [tiposProds, setTiposProds] = useState<TTipoProd[]>([])
    const [ncms_] = useState<any>(ncmJSON)
    const [ncms, setNcms] = useState<TNcm[]>([])
    const [selectedIdBrand, setSelectedIdBrand] = useState<any>(1);
    const [selectedIdSector, setSelectedIdSector] = useState<any>(1);
    const [selectedIdUnMed, setSelectedIdUn] = useState<any>(1);
    const [selectedIdClasseProd, setSelectedIdClasseProd] = useState<any>(1);
    const [selectedIdGrupoFiscal, setSelectedIdGrupoFiscal] = useState<any>(1)
    const [selectedIdTipoProd, setSelectdIdTipoProd] = useState<any>(1)
    const [selectedIdNcm, setSelectdIdNcm] = useState<any>('0000.0')
    const [product, setProduct] = useState<TProductRegister>({
        id_product: 0, descric_product: '',
        val_max_product: 0.00, val_min_product: 0.00,
        fk_brand: 1, fk_sector: 1, fk_un_med: 1,
        bar_code: '', image: '', fk_classe: 1,
        fk_grupo_fiscal: 1, fk_tipo_prod: 1, ncm: ''
    });

    product.fk_brand = parseInt(selectedIdBrand);
    product.fk_sector = parseInt(selectedIdSector);
    product.fk_un_med = parseInt(selectedIdUnMed)
    product.fk_classe = parseInt(selectedIdClasseProd)
    product.fk_grupo_fiscal = parseInt(selectedIdGrupoFiscal)
    product.fk_tipo_prod = parseInt(selectedIdTipoProd)
    product.ncm = selectedIdNcm.replace(/[().]/g, '')

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    };

    useEffect(() => {
        async function getBrands() {
            try {
                await api.get<TBrand[]>('/brands')
                    .then(response => { setBrands(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getBrands();
    }, [brands]);

    useEffect(() => {
        async function getSectors() {
            try {
                await api.get<TSector[]>('/sectors')
                    .then(response => { setSectors(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getSectors();
    }, [sectors]);

    useEffect(() => {
        async function getUnMeds() {
            try {
                await api.get<TUnMed[]>('/un_med')
                    .then(response => { setUnMeds(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getUnMeds();
    }, [unMeds]);

    useEffect(() => {
        async function getClasssesProds() {
            try {
                await api.get<TClasseProd[]>('/classes_prods')
                    .then(response => { setClassesProds(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getClasssesProds()
    }, [classesProds])

    useEffect(() => {
        async function getGruposFiscais() {
            try {
                await api.get<TGrupoFiscal[]>('/grupos_fiscais')
                    .then(response => { setGruposFiscais(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getGruposFiscais();
    }, [gruposFiscais]);

    useEffect(() => {
        async function getTiposProds() {
            try {
                await api.get<TTipoProd[]>('/tipos_prods')
                    .then(response => { setTiposProds(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        };
        getTiposProds();
    }, [tiposProds]);

    useEffect(() => {
        async function getNcms() {
            const ncms = await ncms_.Nomenclaturas;
            setNcms(ncms)
        };
        getNcms();
    }, [ncms]);

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
            postRegister(product, 'product')
            if (alert_ !== "")
                setAlert_('')
        }
    };

    return (
        <>
            {/* <label>{JSON.stringify(product)}</label> */}
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
                    {sectors.map((sector: TSector) => (
                        <option
                            key={sector.id_sector}
                            value={sector.id_sector}
                        >
                            {sector.name_sector}
                        </option>))}</select>}

                listUn={<select
                    onChange={e => setSelectedIdUn(e.target.value)}
                >
                    {unMeds.map((un: TUnMed) => (
                        <option
                            key={un.id_un}
                            value={un.id_un}
                        >
                            {un.un_med}
                        </option>))}</select>}

                listClasse={<select
                    onChange={e => setSelectedIdClasseProd(e.target.value)}
                >{classesProds.map((classe: TClasseProd) => (
                    <option
                        key={classe.id_classe}
                        value={classe.id_classe}
                    >
                        {classe.name_classe}
                    </option>))}</select>}

                listGrupoFiscal={<select
                    onChange={e => setSelectedIdGrupoFiscal(e.target.value)}
                >{gruposFiscais.map((grupoFiscal: TGrupoFiscal) => (
                    <option
                        key={grupoFiscal.id_grupo_fiscal}
                        value={grupoFiscal.id_grupo_fiscal}
                    >
                        {grupoFiscal.name_grupo_fiscal}
                    </option>))}</select>}

                listTipoProd={<select
                    onChange={e => setSelectdIdTipoProd(e.target.value)}
                >{tiposProds.map((tipoProd: TTipoProd) => (
                    <option
                        key={tipoProd.id_tipo}
                        value={tipoProd.id_tipo}
                    >
                        {tipoProd.name_tipo}
                    </option>
                ))}</select>}

                listNcm={<><datalist
                    id="data-itens"><select
                    >{ncms.map((ncm: TNcm) => (
                        <option
                            key={ncm.Codigo}
                            value={ncm.Codigo}
                        >
                            {ncm.Descricao}
                        </option>
                    ))};
                    </select></datalist>
                    <input
                        placeholder="Pequisar o NCM do produto"
                        type="search"
                        list="data-itens"
                        onChange={e => setSelectdIdNcm(e.target.value)}
                    />
                </>}
                msgNcm={product.ncm === "00000" ? product.ncm : "NCM Localizado: " + product.ncm}
            >
                {product}
            </ProductForm>
        </>
    )
}