import { useState, useEffect, useContext } from "react"
import { ListUSers, PropsUsers } from "../../components/users/UserList"
import { FormatDate } from "../../components/utils/formatDate";
import { Dashboard } from "../dashboard/Dashboard";
import { HandleEnsureAuth } from "../../services/HandleEnsureAuth";
import { AuthContext } from '../../context/auth'
import api from '../../services/api/api'

export function UsersList() {
  
  const { user: isLogged }: any = useContext(AuthContext);
  const [users, setUsers] = useState<PropsUsers[]>([])
  const isLoggedParams:number = isLogged[0].id
  const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")

  useEffect(() => {
    const getUSers = async () => {
      await HandleEnsureAuth()
      const res: any | undefined = localStorage.getItem('token')
      const token = JSON.parse(res)
      try {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
        await api.post<PropsUsers[]>('users_list', isLogged, { headers })
          .then(response => {
            setTokenMessage("Token Válido !")
            setUsers(response.data)
          })
      } catch (err) {
        console.log("error occurred !!" + err)
        setTokenMessage(" Erro: 401 - Token Expirado ! ")
                await HandleEnsureAuth()
      }
    }
    getUSers()
  }, [users, isLoggedParams]);

  return (
    <>
     <Dashboard />
        <div className="text-center"><a href="users_list">{tokenMessage}</a></div>
      {users.length === 0 ? <p>Carregando...</p> : (
        users.map((user) => (
          <ListUSers
            key={user.id}
            id={user.id}
            created_at={FormatDate(user.created_at)}
            updated_at={user.updated_at === null ?
              "não houve atualização" : FormatDate(user.updated_at)}
            name={user.name}
            username={user.username}
          />
        )))}
    </>
  )
}
