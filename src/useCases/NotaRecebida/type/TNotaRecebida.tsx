export type TNotaRecebida = {
    fkFornecedor: number,
    data: Date | string
    emissao: Date | string
    numNota: number
    modelo: string
    tProdutos: number
    vFrete: number
    vSeguro: number
    despAcessorias: number
    encargos: number
    acrescimo: number
    desconto: number
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
    total: number
}

export type TItems = {
    id: number
    tipo: string
    item: number
    descric: string | number
    quantidade: number
    unitario: number
    total: number
}

export type TTrib = {
    vIpi: number
    bcIcmsSt: number
    icmsSubst: number
    pisSubst: number
    cofinsSubst: number
    icmsSobreIpi: number
}