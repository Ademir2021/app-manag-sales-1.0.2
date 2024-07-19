import { useState, useEffect } from "react";
import sale_JSON from "./sale.json"
import { PagCredLojaForm } from "../../components/sales/PagCredLojaForm";
import { TContaAreceber, TValsRecebidos } from "../contasAReceber/type/TContasAReceber"
import { setOriginalNode } from "typescript";
import { ButtonOnClick } from '../../components/utils/btnOnClick/BtnOnClick';

export function PagCredLoja() {

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

    function handleInstallments() {
        let contaReceber: any = {}
        const installments = parseInt(sale.installments)
        let pay = parseFloat(sale.paySale)
        let valPay = pay / installments
        let count = 1
            contaReceber.id_conta = 1
            contaReceber.filial = sale.filial
            contaReceber.tipo = 'cred'
            contaReceber.venda = 0
            contaReceber.parcela = count
            contaReceber.valor = valPay.toFixed(3)
            contaReceber.multa = 0
            contaReceber.juros = 0
            contaReceber.descontos = 0
            contaReceber.emissao = null
            contaReceber.vencimento = new Date()
            contaReceber.saldo = 0
            contaReceber.descontos = 0
            contaReceber.pagamento = new Date()
            contaReceber.recebimento = 0

            while (installments >= count) {
                contasAReceber.push(contaReceber)
                count++
            }
    }


    return (
        <>
            <p>{JSON.stringify(contasAReceber)}</p>
            <button className="btn btn-primary m-3"
                onClick={() => { handleInstallments() }}
            >Finalizar venda</button>
            {/* <PagCredLojaForm /> */}
        </>
    )
}

