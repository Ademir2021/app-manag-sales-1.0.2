import { useState, useContext } from "react";
import { HandleNFeForm } from "../../components/nfe/HandleNFeForm";
import { AuthContext } from '../../context/auth'
import { postAuthHandle } from "../../services/handleService";
import { TSaleList } from "../sales/type/TSale";

function HandleNFe() {

    const { user: isLogged }: any = useContext(AuthContext);
    const [sales, setSales] = useState<TSaleList[]>([]);
    const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")

    const getSales = async () => {
        postAuthHandle('sale_user', setTokenMessage, setSales, isLogged)
    };

    if (sales.length === 0) {
        getSales()
    };

    return (
        <HandleNFeForm
            sales={sales}
        />
    )
}

export { HandleNFe }

