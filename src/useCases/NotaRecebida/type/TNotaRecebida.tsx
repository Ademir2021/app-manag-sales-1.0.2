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
}

export type TItem = {
    id: number
    tipo: string
    item: number | any
    descric: string | number
    quantidade: number
    unitario: number
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