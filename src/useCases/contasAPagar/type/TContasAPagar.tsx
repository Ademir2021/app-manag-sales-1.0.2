export type TContaAPagar = {
    id_conta: number 
    fk_filial: number
    tipo: string
    fk_compra: number 
    fk_user:number
    parcela: number | string
    valor: number | any
    multa: number | any
    juros: number | any
    desconto:number | any
    emissao:Date |  string | any 
    vencimento:Date | string | any
    saldo:number | any 
    pagamento:Date | any | null
    recebimento: number | any
    observacao:string | null
    fk_pagador:number
}

export type TValsPagos = {
    id_val: number
    fk_conta: number
    fk_venda: number
    fk_user: number
    valor: number
    data_recebimento: Date | any | null
    descricao:string
    fk_person:number
}
