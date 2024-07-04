export type TPersonRegister = {
    id_person?: number | any
    created_at?: Date | any
    updated_at?: Date | any
    name_pers: string | any
    cpf_pers: string
    phone_pers: string
    address_pers: string
    num_address:string
    bairro_pers: string
    fk_cep: number | undefined | any
    num_cep: string | undefined | any
    name_city: string | undefined | any
    uf: string | undefined
    fk_name_filial: number
    fk_id_user: number
}
export type TCeps = {
    id_cep: number
    num_cep: string
    code_city: number
}
export type TCities = {
    id_city: number
    name_city: string
    uf: string
}

export class setNumCeps {
    setNumCeps(person: TPersonRegister, ceps:TCeps[]) {}
}

