import { useState, useContext } from "react";
import { FormatDate } from "../../components/utils/formatDate";
import { SalesList } from "../../components/sales/SaleList";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import { Dashboard } from "../dashboard/Dashboard";
import { InputSearch } from "../../components/inputSearch/InputSearch";
import { Waiting } from "../../components/utils/waiting/Waiting";
import { Globais } from "../../components/globais/Globais";
import { AuthContext } from '../../context/auth'
import { HandleEnsureAuth } from "../../services/HandleEnsureAuth";
import api from '../../services/api/api'

type TSaleList = {
  id_sale: number;
  created_at: Date | any;
  fk_name_pers: number;
  val_rec: number;
  disc_sale: number;
  total_sale: number
};

export function ListSales() {

  const { user: isLogged }: any = useContext(AuthContext);
  const isLoggedParams: number = isLogged[0].id
  const [sales, setSales] = useState<TSaleList[]>([]);
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

    const res: any | undefined = localStorage.getItem('token')
    const token = JSON.parse(res)
    try {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      await api.post<TSaleList[]>('sale_user',isLogged, { headers })
        .then(response => {
          setTokenMessage("Token Válido !")
          const res: TSaleList[] = response.data
          let data_sale: TSaleList[] = []
          for (let i = 0; res.length > i; i++) {
            if (res[i].created_at >= created_int
              && res[i].created_at <= created_end) {
              data_sale.push((res[i]))
            }
          }
          setSales(data_sale)
          if (!res[0].id_sale)
          alert("Cliente sem Nota")
        })
    } catch (err) {
      // console.log("error occurred !!" + err)
      setTokenMessage(" Erro: 401 - Token Expirado ! ")
      await HandleEnsureAuth()
    }
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
      {sales.length === 0 ? <Waiting waiting={'Aguardando busca !'} /> : (
        sales.map((sale: TSaleList) => (
          <SalesList
            key={sale.id_sale}
            id={sale.id_sale}
            create={FormatDate(sale.created_at)}
            name={sale.fk_name_pers}
            total_prod={currencyFormat(sale.val_rec)}
            disc_sale={currencyFormat(sale.disc_sale)}
            total_note={currencyFormat(sale.total_sale)}
            issueNote={<a href={Globais.URL_NOTE + '/' + sale.id_sale}>Emitir a nota</a>}
          />
        )))}
    </>
  )
}