import { useEffect, useState } from "react"
import { ContasAreceberForm } from "../../components/contasAReceber/ContasAReceberForm"
import { TContaAreceber } from "./type/TContasAReceber"
import { HandleContasAReceber } from "./HandleContasAReceber"
import JSONContasAReceber from './ContasAReceber.json'

function ContasAReceber() {
    const [valor, setValor] = useState<number>(0)
    const handleContasAReceber = new HandleContasAReceber()
    const [JSONContasAReceber_] = useState<any>(JSONContasAReceber)
    const [contasAReceber, setContasAReceber] = useState<TContaAreceber[]>([])
    const [contaAReceber, setContaAreceber] = useState<TContaAreceber>({
        id_conta: 1, filial: 1, legado: 1, tipo: 'cred', venda: 1, fatura: 1,
        fat_legada: 1, recebimento: 1, ordem_servico: 1, parcela: 1, valor: 110,
        venc_original: '2024-07-10', cod_anterior: 1, dias_multa: 5,
        dias_protesto: 5, multa: 0, juros: 0, desconto: 0, data_desconto: '2024-07-16',
        comissao_vendedor: 0, comissao_representante: 0, portador: 1,
        emissao: '2024-07-10', vencimento: '2024-07-10', pagamento: '2024-07-01',
        saldo: 0, descontos: 0
    })

    const venc_original = new Date(contaAReceber.vencimento);
    const diaPagamento = new Date().getTime()
    const difference = handleContasAReceber.dateDifference(venc_original, diaPagamento);
    const diasCalcJuros: number | any = (difference.diffInDays - 1).toFixed(0)
    const juros: number = contaAReceber.valor !== 0.00 ? contaAReceber.valor * diasCalcJuros * (3 / 100) : 0.00
    contaAReceber.juros = juros
    const multa: number = diasCalcJuros > 5 ? contaAReceber.valor * (3 / 100) : 0.00
    contaAReceber.multa = multa

    useEffect(() => {
        async function getContasAReceber() {
            // if(contasAReceber.length === 0){
            const resp = await JSONContasAReceber_.contasAReceber
            setContasAReceber(resp)
            // }
        };
        getContasAReceber()
    }, [JSONContasAReceber_])


    function handleReceberValor( conta: TContaAreceber) {
        for (let i = 0; contasAReceber.length > i; i++) {
            if (contasAReceber[i].id_conta === conta.id_conta)
                contasAReceber[i].valor = contasAReceber[i].valor - valor
        }
        setValor(0)
    }


    return (
        <>
            {/* <p>{valor}</p> */}
            <ContasAreceberForm
                contasAReceber={contasAReceber}
                receberValor={handleReceberValor}
                handleChange={(e:any)=>{setValor(e.target.value)}}
    
            />
        </>
    )
}

export { ContasAReceber }