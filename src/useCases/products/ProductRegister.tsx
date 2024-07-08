import { useState, useEffect } from "react";
import { ProductForm } from '../../components/products/ProductForm';
import { Dashboard } from "../dashboard/Dashboard";
import { postRegister } from "../../services/handleService";
import { TProductRegister, TBrand, TSector, TUnMed, TClasseProd, TGrupoFiscal, TTipoProd, TNcm } from "./type/TypeProducts"
import ncmJSON from './Tabela_NCM_Vigente_20240707.json'
import api from "../../services/api/api";

export function FormProduct() {

    const [alert_, setAlert_] = useState<string>("")
    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);
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
        async function getUnMeds() {
            const unMeds: TUnMed[] = [
                { id_un: 1, un_med: 'UN' },
                { id_un: 2, un_med: 'PC' },
                { id_un: 3, un_med: 'PCT' },
                { id_un: 4, un_med: 'KIT' }
            ];
            setUnMeds(unMeds)
        };
        getUnMeds()
    }, [unMeds]);

    useEffect(() => {
        async function getClassesProds() {
            const classesProds: TClasseProd[] = [
                { id_classe: 1, name_classe: 'Sem Classe' },
                { id_classe: 2, name_classe: 'Informatica' },
                { id_classe: 3, name_classe: 'Celulares' },
                { id_classe: 4, name_classe: 'Telecom' }
            ];
            setClassesProds(classesProds)
        };
        getClassesProds()
    }, [classesProds]);

    useEffect(() => {
        async function getGruposFiscais() {
            const gruposFiscais: TGrupoFiscal[] = [
                { id_grupo_fiscal: 1, name_grupo_fiscal: 'Mercadorias Tributadas normalmente', fk_tabela_trib: 1 },
                { id_grupo_fiscal: 2, name_grupo_fiscal: 'Mercadorias Trib. por Substituicoo Tributaria', fk_tabela_trib: 2 },
                { id_grupo_fiscal: 3, name_grupo_fiscal: 'Servicos Tributado pelo ISS', fk_tabela_trib: 3 }
            ];
            setGruposFiscais(gruposFiscais)
        };
        getGruposFiscais()
    }, [gruposFiscais]);

    useEffect(() => {
        async function getTiposProds() {
            const tiposProds: TTipoProd[] = [
                { id_tipo: 1, name_tipo: '00 - Mercadoria para Revenda' },
                { id_tipo: 2, name_tipo: '01 - Materia Prima' },
                { id_tipo: 3, name_tipo: '02 - Embalagem' },
                { id_tipo: 4, name_tipo: '03 - Produto em Processo' },
                { id_tipo: 5, name_tipo: '04 - Produto Acabado' },
                { id_tipo: 6, name_tipo: '05 - SubProduto' },
                { id_tipo: 7, name_tipo: '06 - Produto Intermediario' },
                { id_tipo: 8, name_tipo: '07 - Material de Uso e Consumo' },
                { id_tipo: 9, name_tipo: '08 - Ativo Imobilizado' },
                { id_tipo: 10, name_tipo: '09 - Servicos' },
                { id_tipo: 11, name_tipo: '10 - Outros Insumos' },
                { id_tipo: 12, name_tipo: '99 - Outras' }
            ];
            setTiposProds(tiposProds)
        };
        getTiposProds()
    }, [tiposProds])

    useEffect(() => {
        async function getNcms() {
            const resp = await ncms_.Nomenclaturas;
            setNcms(resp)
        };
        getNcms()
    },[ncms])

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
                            {ncm.Descricao.replace(/[()-<i>]/g, '')}
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