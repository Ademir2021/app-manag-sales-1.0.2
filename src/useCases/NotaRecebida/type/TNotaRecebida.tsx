export type TNotaRecebida = {
    fkFornecedor: number,
    data: Date | string
    emissao: Date | string
    numNota: number
    modelo: string
    vFrete: number | any
    vSeguro: number | any
    despAcessorias: number | any
    encargos: number | any
    acrescimo: number | any
    desconto: number | any
    tProdutos: number | any
    total: number
    items: TItems[]
    contaAPagar:TContaAPagar[]
    valsPago: TValsPago[]
}

export type TItem = {
    id: number
    tipo: string
    item: number | any
    descric: string | number
    quantidade: number | any
    unitario: number | any
    total: number | any
}

export type TItems = {
    id: number
    tipo: string
    item: number
    descric: string | number
    quantidade: number
    unitario: number
    total: number | any
}

export type TTrib = {
    vIpi: number
    bcIcmsSt: number
    icmsSubst: number
    pisSubst: number
    cofinsSubst: number
    icmsSobreIpi: number
}

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
    fk_beneficiario:number
    fk_despesa:number
}

export type TValsPago = {
    id_val: number
    fk_conta: number
    fk_compra: number
    fk_user: number
    valor: number
    data_pagamento: Date | any | null
    descricao:string
    fk_person:number
}