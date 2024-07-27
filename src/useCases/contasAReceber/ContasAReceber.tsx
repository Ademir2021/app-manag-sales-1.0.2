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
    const [contasAReceber, setContasAReceber] = useState<TContaAreceber[]>([])
    const [valsRecebidos_, setValsRecebidos_] = useState<TValsRecebidos[]>([])
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
        getContasAReceber()
    }, [])

    useEffect(() => {
        async function getValsRecebidos() {
            try {
                await api.get<TValsRecebidos[]>('vals_recebidos')
                    .then(response => {
                        const resp: TValsRecebidos[] = response.data
                        setValsRecebidos_(resp)
                    })
            } catch (err) { console.log("err: " + err) }

        };
        getValsRecebidos()
    }, [valsRecebidos_])

    const updateContaReceber = async (conta: TContaAreceber) => {
        await api.put<TContaAreceber>('contas_receber', conta)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        function calcContasAReceber() {
            for (let i = 0; contasAReceber.length > i; i++) {
                const venc_original = new Date(contasAReceber[i].vencimento).getTime();
                const diaPagamento = new Date().getTime()
                if (venc_original < diaPagamento) { // se vencer calcular juros e multa
                    const difference = handleContasAReceber.dateDifference(venc_original, diaPagamento);
                    const diasCalcJuros: number | any = (difference.diffInDays - 1).toFixed(0)
                    contasAReceber[i].juros = contasAReceber[i].valor !== 0.00 ? contasAReceber[i].valor * diasCalcJuros * (3 / 100) : 0.00
                    contasAReceber[i].multa = diasCalcJuros > 5 ? contasAReceber[i].valor * (3 / 100) : 0.00
                }
                const saldo = contasAReceber[i].valor - contasAReceber[i].recebimento + contasAReceber[i].juros + contasAReceber[i].multa
                contasAReceber[i].saldo = saldo
            }
        }
        calcContasAReceber();
    }, [contasAReceber])

    async function registerValRecebido(valRecebido: TValsRecebidos) {
        await api.post<TValsRecebidos>('val_recebido', valRecebido)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log((error)))
    }

    async function valsPagos(conta: TContaAreceber) {
        let id = 1
        let valRecebido: TValsRecebidos = {
            id_val: 0,
            fk_conta: 0,
            fk_venda: 0,
            fk_user: 0,
            valor: 0,
            data_recebimento: ""
        }
        valRecebido.id_val = id++
        valRecebido.fk_conta = conta.id_conta
        valRecebido.fk_venda = conta.fk_venda
        valRecebido.fk_user = isLogged[0].id
        valRecebido.data_recebimento = new Date()
        valRecebido.valor = valor
        valsRecebidos.push(valRecebido)
        await registerValRecebido(valRecebido)
        console.log(valRecebido)
    }

    const verificaQuitacaoTitulo = async (conta: TContaAreceber) => {
        let valRec = 0
        setValsRecebidos(valsRecebidos)
        for (let i = 0; valsRecebidos.length > i; i++) {
            if (valsRecebidos[i].fk_conta === conta.id_conta) {
                valRec += valsRecebidos[i].valor
            }
        }
        return valRec
    }

    const receberValores = async (conta: TContaAreceber) => {
        for (let i = 0; contasAReceber.length > i; i++) {
            if (contasAReceber[i].id_conta === conta.id_conta) {
                const recebimento = await verificaQuitacaoTitulo(conta)
                contasAReceber[i].recebimento = recebimento
                const saldo = contasAReceber[i].valor - contasAReceber[i].recebimento + contasAReceber[i].juros + contasAReceber[i].multa
                contasAReceber[i].saldo = parseFloat(saldo).toFixed(2)
                contasAReceber[i].juros = parseFloat(contasAReceber[i].juros).toFixed(2)
                contasAReceber[i].multa = parseFloat(contasAReceber[i].multa).toFixed(2)
                contasAReceber[i].pagamento = handleContasAReceber.newData()
                await updateContaReceber(contasAReceber[i])
            }
        }
    }

    function handleSumbit(conta: TContaAreceber) {
        setMsg('')
        valsPagos(conta)
        receberValores(conta)
        setValor(0)
    }


    return (
        <>
            <NavBar />
            <div className="text-center">{msg}</div>
            <ContasAreceberForm
                contasAReceber={contasAReceber}
                valoresRecebidos={valsRecebidos_}
                receberValor={valor > 0 ? handleSumbit : () => { setMsg('Informe um novo valor') }}
                handleChange={(e: any) => {
                    setValor(parseFloat(e.target.value))
                }}
            />
        </>
    )
}

export { ContasAReceber }