import { useEffect } from "react";
import { TProductRegister, TBrand, TSector, TUnMed, TClasseProd, TGrupoFiscal, TTipoProd } from "./type/TypeProducts";

import api from "../../services/api/api";


class HandleProducts {

    public static products: TProductRegister[]  = []
    public static sectors: TSector[] = []
    public static brands: TBrand[] = []
    public static unMeds: TUnMed[] = []
    public static classesProds: TClasseProd[] = []
    public static gruposFiscais: TGrupoFiscal[] = []
    public static tiposProds: TTipoProd[] = []

    async getProducts() {
        try {
            await api.post<TProductRegister[]>('products_list')
                .then(response => { HandleProducts.products = response.data })
        } catch (err) { console.log("error occurred !!" + err) }
    };

    async getSectors() {
        try {
            await api.get<TSector[]>('/sectors')
                .then(response => { HandleProducts.sectors = response.data });
        } catch (err) { alert("error occurred !!" + err) }
    };
    nameSector(idSector: number,) {
        if (HandleProducts.sectors[0] === undefined)
         this.getSectors()
        for (let i = 0; i < HandleProducts.sectors.length; i++) {
            if (HandleProducts.sectors[i].id_sector === idSector) {
                const sector: string =  HandleProducts.sectors[i].name_sector;
                return sector;
            }
        }
    };

    async getBrands() {
        try {
            await api.get<TBrand[]>('/brands')
                .then(response => { HandleProducts.brands = response.data });
        } catch (err) { alert("error occurred !!" + err) }
    };
    nameBrands(idBrand: number) {
        if (HandleProducts.brands[0] === undefined)
            this.getBrands()
        for (let i = 0; i < HandleProducts.brands.length; i++) {
            if (HandleProducts.brands[i].id_brand === idBrand) {
                const brand: string = HandleProducts.brands[i].name_brand;
                return brand;
            }
        }
    };

    async getUnMeds() {
        try {
            await api.get<TUnMed[]>('/un_med')
                .then(response => { HandleProducts.unMeds = response.data });
        } catch (err) { alert("error occurred !!" + err) }
    };
    nameUnMeds(idUnMed: number) {
        if (HandleProducts.unMeds[0] === undefined)
            this.getUnMeds()
        for (let i = 0; i < HandleProducts.unMeds.length; i++) {
            if (HandleProducts.unMeds[i].id_un === idUnMed) {
                const unMed: string = HandleProducts.unMeds[i].un_med;
                return unMed;
            }
        }
    };

    async getClasssesProds() {
        try {
            await api.get<TClasseProd[]>('/classes_prods')
                .then(response => { HandleProducts.classesProds = response.data });
        } catch (err) { alert("error occurred !!" + err) }
    };
    nameClasseProd(idClasseProd: number) {
        if (HandleProducts.classesProds[0] === undefined)
            this.getClasssesProds()
        for (let i = 0; i < HandleProducts.classesProds.length; i++) {
            if (HandleProducts.classesProds[i].id_classe === idClasseProd) {
                const nameClasse: string = HandleProducts.classesProds[i].name_classe;
                return nameClasse;
            }
        }
    };

    async getGruposFiscais() {
        try {
            await api.get<TGrupoFiscal[]>('/grupos_fiscais')
                .then(response => { HandleProducts.gruposFiscais = response.data });
        } catch (err) { alert("error occurred !!" + err) }
    };
    nameGruposFiscais(idGrupoFiscal: number) {
        if (HandleProducts.gruposFiscais[0] === undefined)
            this.getGruposFiscais()
        for (let i = 0; i < HandleProducts.gruposFiscais.length; i++) {
            if (HandleProducts.gruposFiscais[i].id_grupo_fiscal === idGrupoFiscal) {
                const nameGrupoFiscal: string = HandleProducts.gruposFiscais[i].name_grupo_fiscal;
                return nameGrupoFiscal;
            }
        }
    };

    async getTiposProds() {
        try {
            await api.get<TTipoProd[]>('/tipos_prods')
                .then(response => { HandleProducts.tiposProds = response.data });
        } catch (err) { alert("error occurred !!" + err) }
    };
    nameTiposProds(idTipoProd: number) {
        if(HandleProducts.tiposProds[0] === undefined)
            this.getTiposProds()
        for (let i = 0; i < HandleProducts.tiposProds.length; i++) {
            if (HandleProducts.tiposProds[i].id_tipo === idTipoProd) {
                const nameTipoProd: string = HandleProducts.tiposProds[i].name_tipo;
                return nameTipoProd;
            }
        }
    };
};

export { HandleProducts }