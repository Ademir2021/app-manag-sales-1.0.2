export type TProductRegister = {
    id_product: number;
    created_at?: Date | any;
    updated_at?: Date | any | null;
    descric_product: string | number
    amount?: number | undefined | any;
    val_max_product: number;
    val_min_product: number;
    fk_brand: number | any;
    fk_sector: number | any;
    fk_un_med?:number | any;
    bar_code: string;
    image?: | string;
    fk_classe?:number;
    fk_grupo_fiscal?:number
};

export type TItem = {
    descric: string;
};

export type TItens = {
    id: number;
    item: number;
    descric: string | number;
    amount: number;
    valor: number;
    tItem: number;
    image?: string;

};

export type TBrand = {
    id_brand: number;
    name_brand: string;
};

export type TSector = {
    id_sector: number;
    name_sector: string;
};

export type TUnMed = {
    id: number;
    un_med: string;
};

export type TClasse ={
    id:number;
    nome_classe:string;
};

export type TGrupoFiscal ={
    id:number;
    name_grupo_fiscal:string;
    tabela:number;
}