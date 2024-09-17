import { useState, useContext } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { SalesList } from "../../components/sales/SaleList";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import { Dashboard } from "../dashboard/Dashboard";
import { InputSearch } from "../../components/inputSearch/InputSearch";
import { Waiting } from "../../components/utils/waiting/Waiting";
import { Globais } from "../../components/globais/Globais";
import { AuthContext } from '../../context/auth'
import { postAuthHandle } from "../../services/handleService";
import { TSaleList } from "./type/TSale";

export function ListSales() {
  const { user: isLogged }: any = useContext(AuthContext);
  const [sales, setSales] = useState<TSaleList[]>([]);
  const [sales_, setSales_] = useState<TSaleList[]>([]);
  const [created_int, setInt] = useState<Date | any>('')
  const [created_end, setEnd] = useState<Date | any>('')
  const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")

  function searchSales(e: Event) {
    e.preventDefault()
    if (created_int.length &&
      created_end.length !== '') {
      getSales()
    } else {
      alert("Preencha os 2 campos das Datas !")
    }
  };

  const getSales = async () => {
    postAuthHandle('sale_user', setTokenMessage, setSales, isLogged)
    let sale_: TSaleList[] = []
    for (let sale of sales) {
      if (sale.created_at >= created_int
        && sale.created_at <= created_end)
        sale_.push(sale)
    }
    setSales_(sale_)
    if (!sales[0].id_sale)
      alert("Cliente sem Nota")
  };

  return (
    <>
      <Dashboard />
      <div className="text-center"><a href="list_sale">{tokenMessage}</a></div>
      <InputSearch
        int={created_int}
        end={created_end}
        setInt={setInt}
        setEnd={setEnd}
        searchHandle={searchSales}
      />
      {sales_.length === 0 ? <Waiting waiting="Aguardando Notas" /> : (
        sales_.map((sale: TSaleList) => (
          <SalesList
            key={sale.id_sale}
            id={sale.id_sale}
            create={FormatDate(sale.created_at)}
            name={sale.fk_name_pers}
            total_prod={currencyFormat(sale.val_rec)}
            disc_sale={currencyFormat(sale.disc_sale)}
            total_note={currencyFormat(sale.total_sale)}
            issueNote={<a href={Globais.URL_NOTE + '/' + sale.id_sale}>Imprimir</a>}
          />
        )))}
    </>
  )
}