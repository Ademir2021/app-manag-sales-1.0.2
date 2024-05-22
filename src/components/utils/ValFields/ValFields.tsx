import { TProductRegister } from "../../../useCases/products/type/TypeProducts" 

export  function ProductValFields(product: TProductRegister) {
    let msg = ''
    if (product.descric_product === "") { msg += "Digite um produto !\n" };
    if (product.val_max_product === 0) { msg += "Informe um valor MAX !\n" };
    if (product.val_min_product === 0) { msg += "Informe um valor MIN !\n" };
    if (product.fk_brand === 0) { msg += "Informe a Marca !\n" };
    if (product.fk_sector === 0) { msg += "Informe o Setor !\n" };
    if (product.bar_code === "") { msg += "Informe o código de Barras !\n" };
    if (msg !== "") {
        alert(msg)
        return false;
    };
    return true;
};