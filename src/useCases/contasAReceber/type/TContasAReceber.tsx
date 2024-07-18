export type TContaAreceber = {
    id_conta: number
    filial: number
    tipo: string
    venda: number
    parcela: number
    valor: number //numeric 13 ,3
    multa: number //numeric 8, 4
    juros: number //numeric 8, 4
    desconto: number //numeric 13, 3
    emissao:Date |  string | any
    vencimento:Date | string | any
    saldo:number //numeric 13,3
    descontos:number //numeric 13, 3
    pagamento:Date | string  | any
    recebimento: number
}

export type TValsRecebidos = {
    id_val: number
    id_conta: number
    id_venda: number
    id_user: number
    valor: number
    data_recebimento: Date | string
}

type TContaBancaria = {
    id_banco?:number
    carteira?:number 
    aceite?: string //char
    banco?:number
    agencia?:string
    conta_corrente?: string 
    cheque?:number
    documento?: string
    emitente?: number
    filial_emitente?: number

}

type TCartao = {
    id_cartao?:1
    lote?:1
    convenio?:1
    observacao?:string
    data__?: Date // TimeStamp
    prev_recebimento?: Date
    nome_portador?: string
    nome_banco?:string
    nome_emitente?: string
    nome_cartao?:string
    nf?:number
    caixa_origem?:string //char
    sinal?:string //char
    conciliado?:string //char
    a_vista?:string //char
}

type TTitulo = {
    id_titulo?:number
    multas?: number //numeric 13, 3
    situacao?:string //char
    cancelada?:string //char
    estorno?:string //char
    parceiro?:string //char
    filial_parceiro?: number
    nome_parceiro?:string
    nome_operador?:string
    tipos_descontos_antecipacao?:number
    dias_para_juros?: number
    titulos_descontados?:string //char
    titulos_protestados?:string //char
    titulos_registrados?:string //char
    data_inc?: Date //TimeStamp
    camara?:number
    cheque_devolvido?:string //char
    forma_reg_inadiplencia?:string //char
}

type TOthers = {
    legado: number
    fatura: number
    fat_legada: number
   
    ordem_servico: number
    venc_original: Date | string
    cod_anterior: number 
    dias_multa: number
    dias_protesto: number
    data_desconto: Date | string
    comissao_vendedor:number //numeric 13, 3
    comissao_representante: number //numeric 13, 3
    portador: number
}