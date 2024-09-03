import { useState, useEffect } from "react";
import { CaixaMovListComp } from "../../components/caixaMov/CaixaMovList";
import { TCaixaMov } from "./type/TCaixaMov";
import api from "../../services/api/api";
import { TDespesa, TValPago } from "../contasAPagar/type/TContasAPagar";
import { TValsRecebidos } from "../contasAReceber/type/TContasAReceber";

export function CaixaMovList() {
    const [caixaMov, setCaixaMov] = useState<TCaixaMov[]>([])
    const [despesas, setDespesas] = useState<TDespesa[]>([])
    const [valsPagos, setValsPagos] = useState<TValPago[]>([])
    const [valsRecebidos, setValsRecebidos] = useState<TValsRecebidos[]>([])

    useEffect(() => {
        async function getCaixaMov() {
            try {
                await api.post<TCaixaMov[]>('caixa_movs')
                    .then(response => {
                        setCaixaMov(response.data)
                    })
            } catch (err) { console.log("err: " + err) }
        };
        getCaixaMov();
    }, [caixaMov]);

    useEffect(() => {
        const getDespesas = async () => {
            try {
                await api.get<TDespesa[]>('despesas')
                    .then(response => {
                        setDespesas(response.data)
                    })
            } catch (err) { console.log("err: " + err) }
        };
        getDespesas()
    }, [despesas])

    useEffect(() => {
        async function getValsPagos() {
            try {
                await api.get<TValPago[]>('vals_pagos')
                    .then(response => {
                        const resp: TValPago[] = response.data
                        setValsPagos(resp)
                    })
            } catch (err) { console.log("err: " + err) }

        };
        getValsPagos()
    }, [valsPagos])

    useEffect(() => {
        async function getValsRecebidos() {
            try {
                await api.get<TValsRecebidos[]>('vals_recebidos')
                    .then(response => {
                        setValsRecebidos(response.data)
                    })
            } catch (err) { console.log("err: " + err) }

        };
        getValsRecebidos()
    }, [valsRecebidos])

    function findNameMovCaixaDebito(id: number) {
        for (let val of valsPagos)
            if (val.id_val === id)
                for (let despesa of despesas)
                    if (val.fk_despesa === despesa.id)
                        if(despesa.name)
                        return despesa.name
    }

    function findNameMovCaixaCredito(id: number) {
        for (let valRecebido of valsRecebidos)
            if (valRecebido.id_val === id)
                if(valRecebido.descricao)
                return valRecebido.descricao
    }

    function findVendaMovCaixaCredito(id: number) {
        for (let caixa of caixaMov)
            if (caixa.fk_val === id)
                for (let val of valsRecebidos)
                    if (val.id_val === caixa.fk_val)
                        if (val.fk_venda)
                            return val.fk_venda
    }

    return (
        <>
            <CaixaMovListComp
                caixaMov={caixaMov}
                findNameMovCaixaDebito={findNameMovCaixaDebito}
                findNameMovCaixaCredito={findNameMovCaixaCredito}
                findVendaMovCaixaCredito={findVendaMovCaixaCredito}
            />
        </>
    )
}