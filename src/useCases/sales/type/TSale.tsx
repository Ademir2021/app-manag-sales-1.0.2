export type TSale = {
    "filial": number
    "user": {
        "user_id": number
        "user_name": string
    }
    "person": {
        "fk_name_pers": number
        "name_pers": string
        "cpf_pers": string
        "phone_pers": string
        "address": {
            "address_pers": string
            "bairro_pers": string
            "fk_cep": number
            "name_city": string
            "uf": string
            "num_cep": string
        }
    }
    "disc_sale": number
    "tItens": number
    "tNote": number
    "paySale": number
    "dinheiro":number
    "itens": []
}

export type TSaleList = {
    id_sale: number;
    created_at: Date | any;
    fk_name_pers: number;
    val_rec: number;
    disc_sale: number;
    total_sale: number
  };