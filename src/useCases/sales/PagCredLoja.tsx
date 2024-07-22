import { useState, useEffect } from "react";
import moment from 'moment-timezone';
import sale_JSON from "./sale.json"
import { TContaAreceber, TValsRecebidos } from "../contasAReceber/type/TContasAReceber"
// import { HandleContasAReceber } from "../contasAReceber/HandleContasAReceber"
import { PagCredLojaForm } from "../../components/sales/PagCredLojaForm"
import { NavBar } from "../../components/navbar/Navbar";

import api from "../../services/api/api";
import { RegisterSale } from "./RegisterSale";

export function PagCredLoja() {
    // const [flagSale, setFlagSale] = useState<boolean>(false)
    const [sendSale, setSendSale] = useState<boolean>(false)
    const [sale, setSale] = useState(sale_JSON);

    useEffect(() => {
        const getSale = () => {
            const sale_store_res = localStorage.getItem('sl');
            if (sale_store_res) {
                const sales = JSON.parse(sale_store_res)
               
                    setSale(sales)
                handleInstallments(sales)
            
            }
        };
        getSale()
    }, [])

    const setPrazo = (i: number) => {
        let days = 0
        if (i === 1)
            days = 4
        else if (i === 2)
            days = 30
        else if (i === 3)
            days = 60
        else if (i === 4)
            days = 90
        let prazo = moment(
            new Date()
        ).add(
            'days', days
        )
        return prazo
    }

    function handleInstallments(sales: any) {
        const installments = parseInt(sales.installments)
        let pay = parseFloat(sales.paySale)
        let valParc = pay / installments
        for (let i = 1; installments >= i; i++) {
            let contaReceber: TContaAreceber = {
                id_conta: 0,
                fk_filial: 0,
                tipo: "",
                fk_venda: 0,
                fk_user: 0,
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
            contaReceber.id_conta = i
            contaReceber.fk_filial = sales.filial
            contaReceber.tipo = 'cred'
            contaReceber.fk_venda = 0
            contaReceber.fk_user = sales.user.user_id
            contaReceber.parcela = i + '/' + installments
            contaReceber.valor = parseFloat(valParc.toFixed(3))
            contaReceber.multa = 0
            contaReceber.juros = 0
            contaReceber.desconto = 0
            contaReceber.emissao = new Date()
            contaReceber.vencimento = setPrazo(i)
            contaReceber.saldo = 0
            contaReceber.pagamento = null
            contaReceber.recebimento = 0
            sales.duplicatas.push(contaReceber)
        }
    }
    async function registerSale() {
        await api.post('sale_register', sale)
            .then(response => {
                const res = response.data
                console.log(res)
            })
            .catch(error => console.log(error));
    };

    const handleSubmit = () => {
            registerSale()
    }

    return (
        <>
        {/* <p>{JSON.stringify(sale)}</p> */}
            <NavBar />
            <PagCredLojaForm
                handleSubmit={handleSubmit}
                duplicatas={sale.duplicatas}
                toGoBackInvoiceSale={() => { window.location.replace('invoice_sales') }}
            />
        </>
    )
}
