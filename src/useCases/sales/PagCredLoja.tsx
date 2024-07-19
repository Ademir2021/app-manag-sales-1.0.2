import { useState, useEffect } from "react";
import sale_JSON from "./sale.json"
import { PagCredLojaForm } from "../../components/sales/PagCredLojaForm";
import { TContaAreceber, TValsRecebidos } from "../contasAReceber/type/TContasAReceber"
import { setOriginalNode } from "typescript";

export function PagCredLoja (){

    const [sale, setSale] = useState<any>(sale_JSON);
    const [contasAReceber, setContasAReceber] = useState<TContaAreceber[]>([])

    useEffect(() => {
        const getSale = () => {
            const sale_store_res = localStorage.getItem('sl');
            if (sale_store_res !== null) {
                const sales = JSON.parse(sale_store_res)
                setSale(sales)
            }
        };
        getSale()
    }, [sale]);

    useEffect(()=>{
        function handleInstallments(){
            let contaReceber:any = {}
            const installments = parseInt(sale.installments)
            let pay = parseFloat(sale.paySale)
            let valPay = pay / installments
            for(let i = 0; installments > i; i++){
                let day = 30
                contaReceber.id_conta = 1
                contaReceber.filial = sale.filial
                contaReceber.tipo = 'cred'
                contaReceber.venda = 0
                contaReceber.parcela = i
                contaReceber.valor = valPay
                contaReceber.multa = 0
                contaReceber.juros = 0
                contaReceber.descontos = 0
                contaReceber.emissao = new Date()
                contaReceber.vencimento = new Date()+day
                contaReceber.saldo = 0
                contaReceber.descontos = 0
                contaReceber.pagamento = new Date()
                contaReceber.recebimento = 0
                contasAReceber.push(contaReceber)
            }
        }
        handleInstallments()

    },[contasAReceber])
    
    return(
        <>
        <p>{JSON.stringify(contasAReceber)}</p>
        {/* <PagCredLojaForm /> */}
        </>
    )
}

