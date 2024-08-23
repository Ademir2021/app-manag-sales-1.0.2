export type TCaixaMov = {
    id_caixa:number 
    fk_val:number
    name?:string
    data_recebimento: Date | string | any
    debito:number 
    credito:number 
    saldo:number
}