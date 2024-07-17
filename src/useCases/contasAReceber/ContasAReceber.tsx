import { useEffect, useState } from "react"
import { ContasAreceberForm } from "../../components/contasAReceber/ContasAReceberForm"
import { TContaAreceber } from "./type/TContasAReceber"
import { HandleContasAReceber } from "./HandleContasAReceber"
import JSONContasAReceber from './ContasAReceber.json'

type TValsRecebidos = {
    id_val: number
    id_conta: number
    id_venda: number
    valor: number
    data_recebimento: Date | string
}

function ContasAReceber() {
    // const [flagPay, setFlagPay] = useState<boolean>(false)
    const [msg, setMsg] = useState('')
    const [valor, setValor] = useState(0)
    const handleContasAReceber = new HandleContasAReceber()
    const [JSONContasAReceber_] = useState<any>(JSONContasAReceber)
    const [contasAReceber, setContasAReceber] = useState<TContaAreceber[]>([])
    const [valsRecebidos, setValsRecebidos] = useState<TValsRecebidos[]>([])

    const handleChange = (e: any) => {
        setValor(parseFloat(e.target.value))
    };

    useEffect(() => {
        setTimeout(() => {
            setMsg('')
        }, 2000);
    }, [msg])

    useEffect(() => {
        async function getContasAReceber() {
            const resp = await JSONContasAReceber_.contasAReceber
            setContasAReceber(resp)
        };
        getContasAReceber()
    }, [JSONContasAReceber_])

    useEffect(() => {
        function calcContasAReceber() {
            for (let i = 0; contasAReceber.length > i; i++) {
                const venc_original = new Date(contasAReceber[i].vencimento);
                const diaPagamento = new Date().getTime()
                const difference = handleContasAReceber.dateDifference(venc_original, diaPagamento);
                const diasCalcJuros: number | any = (difference.diffInDays - 1).toFixed(0)
                const juros: number = contasAReceber[i].valor !== 0.00 ? contasAReceber[i].valor * diasCalcJuros * (3 / 100) : 0.00
                contasAReceber[i].juros = juros
                const multa: number = diasCalcJuros > 5 ? contasAReceber[i].valor * (3 / 100) : 0.00
                contasAReceber[i].multa = multa
                contasAReceber[i].saldo = contasAReceber[i].valor + contasAReceber[i].juros + contasAReceber[i].multa
            }
            setContasAReceber(contasAReceber)
        }
        calcContasAReceber();
    }, [contasAReceber, valor])

    function valsPagos(conta: TContaAreceber) {
        let valRecebido: any = {}
        valRecebido.id_val = 1
        valRecebido.id_conta = conta.id_conta
        valRecebido.id_venda = conta.venda
        valRecebido.data_recebimento = new Date()
        valRecebido.valor = valor
        valsRecebidos.push(valRecebido)
    }

    function verificaQuitacaoTitulo(conta: TContaAreceber) {
        let total: number = 0
        for (let i = 0; valsRecebidos.length > i; i++) {
            if (valsRecebidos[i].id_conta === conta.id_conta) {
                total += valsRecebidos[i].valor
            }
        }
        return total
    }

    function receberValor(conta: TContaAreceber) {
        setMsg('')
        valsPagos(conta)
        const verificaquitacao = verificaQuitacaoTitulo(conta)
        for (let i = 0; contasAReceber.length > i; i++) {
            if (contasAReceber[i].id_conta === conta.id_conta) {
                const saldo: number = contasAReceber[i].valor + contasAReceber[i].juros + contasAReceber[i].multa
                if (saldo >= verificaquitacao) {
                    contasAReceber[i].saldo = saldo - verificaquitacao
                } else {
                    setMsg('Titulo quitado: ' + contasAReceber[i].id_conta)
                    valsRecebidos.pop()
                    contasAReceber[i].saldo = 0
                }
            }
        }
        setValor(0)
    }

    return (
        <>
            <p>{JSON.stringify(valsRecebidos)}</p>
            <span>{msg}</span>
            <ContasAreceberForm
                contasAReceber={contasAReceber}
                receberValor={valor > 0 ? receberValor : () => { setMsg('Informe um novo valor') }}
                handleChange={handleChange}

            />
        </>
    )
}

export { ContasAReceber }