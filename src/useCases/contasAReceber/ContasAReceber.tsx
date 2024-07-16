import { useEffect, useState } from "react"
import { ContasAreceberForm } from "../../components/contasAReceber/ContasAReceberForm"
import { TContaAreceber } from "./type/TContasAReceber"
import { HandleContasAReceber } from "./HandleContasAReceber"

function ContasAReceber() {
    const handleContasAReceber = new HandleContasAReceber()
    const [contasAReceber, setContasAReceber] = useState<TContaAreceber[]>([])
    const [contaAReceber, setContasAreceber] = useState<TContaAreceber>({
        id_conta: 1, filial: 1, legado: 1, tipo: 'cred', venda: 1, fatura: 1,
        fat_legada: 1, recebimento: 1, ordem_servico: 1,
        parcela: 1, valor: 135.00, juros: 0.00, multa: 0.00,
        venc_original: '2024-07-10',
        conta_bancaria: {
            id_banco: 1
        }
    })

    const venc_original = new Date(contaAReceber.venc_original);
    const diaPagamento = new Date().getTime()
    const difference = handleContasAReceber.dateDifference(venc_original, diaPagamento);
    const diasCalcJuros: number | any = (difference.diffInDays - 1).toFixed(0)
    const juros: number = contaAReceber.valor !== 0.00 ? contaAReceber.valor * diasCalcJuros * (3 / 100) : 0.00
    contaAReceber.juros = juros
    const multa: number = diasCalcJuros > 5 ? contaAReceber.valor * (3 / 100) : 0.00
    contaAReceber.multa = multa

    contasAReceber.push(contaAReceber)

    useEffect(() => {
        console.log(contaAReceber)
    }, [contaAReceber])

    return (
        <>
            <ContasAreceberForm />
            <p>{JSON.stringify('Juros: ' + contasAReceber[0].juros)}</p>
            <p>{JSON.stringify('Multa: ' + contasAReceber[0].multa)}</p>
        </>
    )
}

export { ContasAReceber }