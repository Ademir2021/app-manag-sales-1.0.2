import { TBrand, TSector, TUnMed, TClasseProd, TGrupoFiscal, TTipoProd } from "./type/TypeProducts";
import api from "../../services/api/api";

type TResp = {
    req: string;
    res: []
}
const resp: TResp[] = [
    { req: 'sectors', res: [] },
    { req: 'brands', res: [] },
    { req: 'un_med', res: [] },
    { req: 'classes_prods', res: [] },
    { req: 'grupos_fiscais', res: [] },
    { req: 'tipos_prods', res: [] }
]

class HandleProducts {
    private static sectors: TSector[] = []
    private static brands: TBrand[] = []
    private static unMeds: TUnMed[] = []
    private static classesProds: TClasseProd[] = []
    private static gruposFiscais: TGrupoFiscal[] = []
    private static tiposProds: TTipoProd[] = []

    public async getAttributes() {
        for (let i = 0; resp.length > i; i++) {
            try {
                await api.get<[]>(resp[i].req)
                    .then(response => { resp[i].res = response.data })
            } catch (err) { console.log("error occurred !!" + err) }
            HandleProducts.sectors = resp[0].res
            HandleProducts.brands = resp[1].res
            HandleProducts.unMeds = resp[2].res
            HandleProducts.classesProds = resp[3].res
            HandleProducts.gruposFiscais = resp[4].res
            HandleProducts.tiposProds = resp[5].res
        }
    };

    public nameSector(idSector: number,) {
        for (let i = 0; i < HandleProducts.sectors.length; i++) {
            if (HandleProducts.sectors[i].id_sector === idSector) {
                const sector: string = HandleProducts.sectors[i].name_sector;
                return sector;
            }
        }
    };
    nameBrands(idBrand: number) {
        for (let i = 0; i < HandleProducts.brands.length; i++) {
            if (HandleProducts.brands[i].id_brand === idBrand) {
                const brand: string = HandleProducts.brands[i].name_brand;
                return brand;
            }
        }
    };
    nameUnMeds(idUnMed: number) {
        for (let i = 0; i < HandleProducts.unMeds.length; i++) {
            if (HandleProducts.unMeds[i].id_un === idUnMed) {
                const unMed: string = HandleProducts.unMeds[i].un_med;
                return unMed;
            }
        }
    };
    nameClasseProd(idClasseProd: number) {
        for (let i = 0; i < HandleProducts.classesProds.length; i++) {
            if (HandleProducts.classesProds[i].id_classe === idClasseProd) {
                const nameClasse: string = HandleProducts.classesProds[i].name_classe;
                return nameClasse;
            }
        }
    };
    nameGruposFiscais(idGrupoFiscal: number) {
        for (let i = 0; i < HandleProducts.gruposFiscais.length; i++) {
            if (HandleProducts.gruposFiscais[i].id_grupo_fiscal === idGrupoFiscal) {
                const nameGrupoFiscal: string = HandleProducts.gruposFiscais[i].name_grupo_fiscal;
                return nameGrupoFiscal;
            }
        }
    };
    nameTiposProds(idTipoProd: number) {
        for (let i = 0; i < HandleProducts.tiposProds.length; i++) {
            if (HandleProducts.tiposProds[i].id_tipo === idTipoProd) {
                const nameTipoProd: string = HandleProducts.tiposProds[i].name_tipo;
                return nameTipoProd;
            }
        }
    };
};

export { HandleProducts }