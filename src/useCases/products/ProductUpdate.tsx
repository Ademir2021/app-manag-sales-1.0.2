import { useState, useEffect, useRef, useContext } from "react"
import { FormatDate } from "../../components/utils/formatDate";
import { TProductRegister, TBrand, TSector, TUnMed, TClasseProd, TGrupoFiscal, TTipoProd } from "./type/TypeProducts";
import { postRegister, putUpdate } from "../../services/handleService";
import { ProductFormUpdate } from "../../components/products/ProductFormUpdate";
import { ProductList } from "../../components/products/ProductList";
import { HandleEnsureAuth } from "../../services/HandleEnsureAuth";
import api from '../../services/api/api';
import { AuthContext } from '../../context/auth'
import { currencyFormat } from '../../components/utils/currentFormat/CurrentFormat';

import "../../App.css"
import { Dashboard } from "../dashboard/Dashboard";
import { HandleProducts } from "./HandleProduct";

export function ProductUpdate() {
    const [brands, setBrand] = useState<TBrand[]>([]);
    const [sectors, setSector] = useState<TSector[]>([]);
    const [unMeds, setUnMeds] = useState<TUnMed[]>([]);
    const [classesProds, setClassesProds] = useState<TClasseProd[]>([]);
    const [gruposFiscais, setGruposFiscais] = useState<TGrupoFiscal[]>([])
    const [tiposProds, setTiposProds] = useState<TTipoProd[]>([])
    const { user: isLogged }: any = useContext(AuthContext);
    const [selectedIdBrand, setSelectedIdBrand] = useState<any>(1);
    const [selectedIdSector, setSelectedIdSector] = useState<any>(1);
    const [products, setProducts] = useState<TProductRegister[]>([])
    const [product, setProduct] = useState<TProductRegister>({
        id_product: 0, descric_product: '',
        val_max_product: 0.00, val_min_product: 0.00,
        fk_brand: 1, fk_sector: 1, fk_un_med: 1,
        bar_code: '', image: '', fk_classe: 1,
        fk_grupo_fiscal: 1, fk_tipo_prod: 1, ncm: ''
    });
    const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")

    /** Atualiza a marca somente se selecionar */
    if (selectedIdBrand !== 1) {
        product.fk_brand = parseInt(selectedIdBrand);
    }
    if (selectedIdSector !== 1) {
        product.fk_sector = parseInt(selectedIdSector);
    }

    const isLoggedParams: number = isLogged[0].id

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
    }

    const [dropdown, setDropdown] = useState<string>("");
    const modalRef = useRef<any>(null);

    function listUpdate(product_: TProductRegister) {
        product.id_product = product_.id_product
        product.descric_product = product_.descric_product
        product.val_max_product = product_.val_max_product
        product.val_min_product = product_.val_min_product
        product.fk_brand = product_.fk_brand
        product.fk_sector = product_.fk_sector
        product.bar_code = product_.bar_code
        product.image = product_.image
        product.ncm = product_.ncm
        toggleDropdown()
    }

    useEffect(() => {
        async function getProducts() {
            const res: any | undefined = localStorage.getItem('token')
            const token = JSON.parse(res)
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
                await api.post<TProductRegister[]>('products_list', { headers })
                    .then(response => {
                        setTokenMessage("Token Válido !")
                        setProducts(response.data)
                    })

            } catch (err) {
                // console.log("error occurred !!" + err)
                setTokenMessage(" Erro: 401 - Token Expirado ! ")
                await HandleEnsureAuth()
            }
        }
        getProducts();
    }, [products, isLoggedParams]);

    useEffect(() => {
        async function getBrands() {
            try {
                await api.get<TBrand[]>('/brands')
                    .then(response => { setBrand(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        }
        getBrands();
    }, [brands]);

    useEffect(() => {
        async function getSectors() {
            try {
                await api.get<TSector[]>('/sectors')
                    .then(response => { setSector(response.data) });
            } catch (err) { alert("error occurred !!" + err) }
        }
        getSectors();
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

    function toggleDropdown(): void {
        setDropdown("modal-show");
    };

    function closeDropdown(e: Event) {
        e.stopPropagation();
        const contain = modalRef.current.contains(e.target);
        if (contain) {
            setDropdown("");
            document.body.removeEventListener("click", closeDropdown);
        }
    };

    function ProductValFields() {
        let content = "Campo obrigatório: "
        let msg = ""
        if (product.descric_product === "") { msg += content + "descrição do produto, " };
        if (product.val_max_product === 0) { msg += content + "valor max, " };
        if (product.val_min_product === 0) { msg += content + "valor min, " };
        if (product.bar_code === "") { msg += content + "código de barras, " };
        if (msg !== "") {
            alert(msg)
            return false;
        };
        return true;
    };

    async function handleSubmit(e: any) {
        e.preventDefault();
        if (ProductValFields()) {
            postRegister(product, 'product');
        }
    };
    async function handleUpdate(e: Event) {
        e.preventDefault();
        if (ProductValFields()) {
            putUpdate(product, 'product_update')
        }
    };
    async function handleDelete(e: Event) {
        e.preventDefault();
        setProduct({
            id_product: 0, descric_product: '',
            val_max_product: 0.00, val_min_product: 0.00,
            fk_brand: 1, fk_sector: 1, fk_un_med: 1,
            bar_code: '', image: '', fk_classe: 1,
            fk_grupo_fiscal: 1, fk_tipo_prod: 1, ncm: ''
        })
        alert("Digite um novo produto !!")
    };

    const handleProducts: HandleProducts = new HandleProducts()

    return (
        <>
            <Dashboard />
            <div className="text-center"><a href="product_update">{tokenMessage}</a></div>
            < ProductFormUpdate
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                modalRef={modalRef}
                className={dropdown}
                close={closeDropdown}
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
            </ProductFormUpdate>
            {products.length === 0 ? <p>Carregando ...</p> : (
                products.map((product: TProductRegister) => (
                    <ProductList
                        key={product.id_product}
                        id={product.id_product}
                        created_at={FormatDate(product.created_at)}
                        updated_at={product.updated_at === null ?
                            "Não houve atualização"
                            : FormatDate(product.updated_at)}
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
                        update={<button onClick={() =>
                            listUpdate(product)}>Atualizar</button>}
                    />
                )))}
        </>
    )
}