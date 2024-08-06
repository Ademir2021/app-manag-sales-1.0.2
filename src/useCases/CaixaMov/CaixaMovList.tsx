import { useState, useEffect } from "react";
import { CaixaMovListComp } from "../../components/caixaMov/CaixaMovList";
import { TCaixaMov } from "./type/TCaixaMov";
import api from "../../services/api/api";

export function CaixaMovList() {
    const [caixaMov, setCaixaMov] = useState<TCaixaMov[]>([])
    useEffect(() => {
        async function getProducts() {
            try {
                await api.post<TCaixaMov[]>('caixa_movs')
                    .then(response => {
                        setCaixaMov(response.data)
                    })
            } catch (err) { console.log("error occurred !!" + err) }
        };
        getProducts();
    }, [caixaMov]);

    return (
        <>
            <CaixaMovListComp
                caixaMov={caixaMov}
            />
        </>
    )
}