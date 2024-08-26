import { TProductRegister } from "../type/TypeProducts"

export function ProductValFields(product:TProductRegister, setAlert_:any) {
    let content = "Campo obrigatório: "
    let msg = ""
    if (product.descric_product === "") { msg += content + "descrição do produto, " };
    if (product.val_max_product === 0) { msg += content + "valor max, " };
    if (product.val_min_product === 0) { msg += content + "valor min, " };
    if (product.bar_code === "") { msg += content + "código de barras, " };
    if (msg !== "") {
        setAlert_(msg)
        return false;
    };
    return true;
};