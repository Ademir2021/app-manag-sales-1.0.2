import { useEffect, useState, useContext } from "react"

import { ContasAreceberForm } from "../../components/contasAReceber/ContasAReceberForm"
import { TContaAreceber, TValsRecebidos } from "./type/TContasAReceber"
import { HandleContasAReceber } from "./HandleContasAReceber"
import { AuthContext } from '../../context/auth'
import { NavBar } from "../../components/navbar/Navbar"
import api from "../../services/api/api"

function ContasAReceber() {

    const [msg, setMsg] = useState('')
    const [valor, setValor] = useState(0)
    const handleContasAReceber = new HandleContasAReceber()
    let [contasAReceber, setContasAReceber] = useState<TContaAreceber[]>([])
    const [valsRecebidos, setValsRecebidos] = useState<TValsRecebidos[]>([])

    const { user: isLogged }: any = useContext(AuthContext);

    useEffect(() => {
        setTimeout(() => {
            setMsg('')
        }, 9000);
    }, [msg])

    useEffect(() => {
        async function getContasAReceber() {
            try {
                await api.get<TContaAreceber[]>('contas_receber')
                    .then(response => {
                        const resp: TContaAreceber[] = response.data
                        setContasAReceber(resp)
                    })
            } catch (err) { console.log("err: " + err) }
        };
        // if(contasAReceber.length === 0){
        getContasAReceber()
        // }
    }, [])

    useEffect(() => {
        function calcContasAReceber() {
            for (let i = 0; contasAReceber.length > i; i++) {
                const venc_original = new Date(contasAReceber[i].vencimento).getTime();
                const diaPagamento = new Date().getTime()
                if (venc_original < diaPagamento) {
                    const difference = handleContasAReceber.dateDifference(venc_original, diaPagamento);
                    const diasCalcJuros: number | any = (difference.diffInDays - 1).toFixed(0)
                    contasAReceber[i].juros = contasAReceber[i].valor !== 0.00 ? contasAReceber[i].valor * diasCalcJuros * (3 / 100) : 0.00
                    contasAReceber[i].multa = diasCalcJuros > 5 ? contasAReceber[i].valor * (3 / 100) : 0.00
                    contasAReceber[i].saldo = contasAReceber[i].valor + contasAReceber[i].juros + contasAReceber[i].multa
                }
            }
            setContasAReceber(contasAReceber)
        }
        calcContasAReceber();
    }, [])

    function valsPagos(conta: TContaAreceber) {
        let id = 1
        let valRecebido: TValsRecebidos = {
            id_val: 0,
            id_conta: 0,
            id_venda: 0,
            id_user: 0,
            valor: 0,
            data_recebimento: ""
        }
        valRecebido.id_val = id++
        valRecebido.id_conta = conta.id_conta
        valRecebido.id_venda = conta.fk_venda
        valRecebido.id_user = isLogged[0].id
        valRecebido.data_recebimento = new Date()
        valRecebido.valor = valor
        valsRecebidos.push(valRecebido)
        // alert(JSON.stringify(valRecebido))
    }

    function verificaQuitacaoTitulo(conta: TContaAreceber) {
        let total = 0
        for (let i = 0; valsRecebidos.length > i; i++) {
            if (valsRecebidos[i].id_conta === conta.id_conta) {
                total += parseFloat(valsRecebidos[i].valor.toFixed(3))
            }
        }
        return total
    }

    async function receberValor(conta: TContaAreceber) {
        setMsg('')
        valsPagos(conta)
        for (let i = 0; contasAReceber.length > i; i++) {
            // if(contasAReceber[i].saldo >=-1)
            if (contasAReceber[i].id_conta === conta.id_conta) {
                contasAReceber[i].recebimento =  verificaQuitacaoTitulo(conta).toFixed(2)
                contasAReceber[i].saldo = contasAReceber[i].valor
                - contasAReceber[i].recebimento
                + parseFloat(contasAReceber[i].juros)
                + parseFloat(contasAReceber[i].multa).toFixed(2)

                contasAReceber[i].pagamento = handleContasAReceber.newData()
            }
        }
        setValor(0)
    }

    function handleSubmit(conta: TContaAreceber) {
        receberValor(conta)

    }

    return (
        <>
            {JSON.stringify(valsRecebidos)}
            <NavBar />
            <div className="text-center">{msg}</div>
            <ContasAreceberForm
                contasAReceber={contasAReceber}
                valoresRecebidos={valsRecebidos}
                receberValor={valor > 0 ? handleSubmit : () => { setMsg('Informe um novo valor') }}
                handleChange={(e: any) => {
                    setValor(parseFloat(e.target.value))
                }}
            />
        </>
    )
}

export { ContasAReceber }