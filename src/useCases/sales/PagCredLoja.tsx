import { useState, useEffect } from "react";
import moment from 'moment-timezone';
import sale_JSON from "./sale.json"
import { HandleContasAReceber } from "../contasAReceber/HandleContasAReceber"
import { PagCredLojaForm } from "../../components/sales/PagCredLojaForm"

type TDuplicata = {
    id_conta: number
    filial: number
    tipo: string
    venda: number
    parcela: number | string
    valor: number | any
    multa: number
    juros: number
    desconto: number
    emissao: Date | null
    vencimento: Date | any | null
    saldo: number
    pagamento: Date | null
    recebimento: number | null
}

export function PagCredLoja() {

    const handleContasAReceber = new HandleContasAReceber()

    const [sale, setSale] = useState<any>(sale_JSON);

    const getSale = () => {
        const sale_store_res = localStorage.getItem('sl');
        if (sale_store_res !== null) {
            const sales = JSON.parse(sale_store_res)
            setSale(sales)
            handleInstallments(sales)
        }
    };

    const setPrazo = (i: number) => {
        let days = 0
        if (i === 1)
            days = 30
        else if (i === 2)
            days = 60
        else if (i === 3)
            days = 90
        let prazo = moment(
            new Date()
        ).add(
            'days', days
        );
        return prazo
    }

    function handleInstallments(sales: any) {
        const installments = parseInt(sales.installments)
        let pay = parseFloat(sales.paySale)
        let valParc = pay / installments
        for (let i = 1; installments >= i; i++) {
            let contaReceber: TDuplicata = {
                id_conta: 0,
                filial: 0,
                tipo: "",
                venda: 0,
                parcela: "",
                valor: 0,
                multa: 0,
                juros: 0,
                desconto: 0,
                emissao: null,
                vencimento: null,
                saldo: 0,
                pagamento: null,
                recebimento: null
            };
            contaReceber.id_conta = 1
            contaReceber.filial = sales.filial
            contaReceber.tipo = 'cred'
            contaReceber.venda = 0
            contaReceber.parcela = i + '-' + installments
            contaReceber.valor = valParc.toFixed(3)
            contaReceber.multa = 0
            contaReceber.juros = 0
            contaReceber.desconto = 0
            contaReceber.emissao = new Date()
            contaReceber.vencimento = setPrazo(i)
            // if (i === 1) {
            //     contaReceber.vencimento = setPrazo(i)
            // }
            // if (i === 2) {
            //     contaReceber.vencimento = setPrazo(i)
            // }
            // if (i === 3) {
            //     contaReceber.vencimento = setPrazo(i)
            // }
            contaReceber.saldo = 0
            contaReceber.pagamento = null
            contaReceber.recebimento = 0
            sales.duplicatas.push(contaReceber)
        }
    }

    const handleSubmit = () => {
        getSale()
    }

    return (
        <>
            <p>{JSON.stringify(sale.duplicatas)}</p>
            <button className="btn btn-primary m-3"
                onClick={handleSubmit}
            >Finalizar venda</button>
            {/* <PagCredLojaForm /> */}
        </>
    )
}


