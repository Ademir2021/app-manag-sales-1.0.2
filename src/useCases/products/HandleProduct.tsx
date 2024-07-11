import { TBrand, TSector, TUnMed, TClasseProd, TGrupoFiscal, TTipoProd } from "./type/TypeProducts";

class HandleProducts {
    public nameSector(idSector: number, sectors:TSector[]) {
        for (let i = 0; i < sectors.length; i++) {
            if (sectors[i].id_sector === idSector) {
                const sector: string = sectors[i].name_sector;
                return sector;
            }
        }
    };
    nameBrands(idBrand: number, brands:TBrand[]) {
        for (let i = 0; i < brands.length; i++) {
            if (brands[i].id_brand === idBrand) {
                const brand: string = brands[i].name_brand;
                return brand;
            }
        }
    };
    nameUnMeds(idUnMed: number, unMeds:TUnMed[]) {
        for (let i = 0; i < unMeds.length; i++) {
            if (unMeds[i].id_un === idUnMed) {
                const unMed: string = unMeds[i].un_med;
                return unMed;
            }
        }
    };
    nameClasseProd(idClasseProd: number, classesProds:TClasseProd[] ) {
        for (let i = 0; i < classesProds.length; i++) {
            if (classesProds[i].id_classe === idClasseProd) {
                const nameClasse: string = classesProds[i].name_classe;
                return nameClasse;
            }
        }
    };
    nameGruposFiscais(idGrupoFiscal: number, gruposFiscais:TGrupoFiscal[]) {
        for (let i = 0; i < gruposFiscais.length; i++) {
            if (gruposFiscais[i].id_grupo_fiscal === idGrupoFiscal) {
                const nameGrupoFiscal: string = gruposFiscais[i].name_grupo_fiscal;
                return nameGrupoFiscal;
            }
        }
    };
    nameTiposProds(idTipoProd: number, tiposProds:TTipoProd[]) {
        for (let i = 0; i < tiposProds.length; i++) {
            if (tiposProds[i].id_tipo === idTipoProd) {
                const nameTipoProd: string = tiposProds[i].name_tipo;
                return nameTipoProd;
            }
        }
    };
};

export { HandleProducts }