import { useState, useEffect, useContext } from "react";
import { InvoiceSalesForm } from '../../components/sales/InvoiceSalesForm';
import { BackHome } from "../../components/utils/backHome/BackHome";
import { TCeps, TCities, TPersonRegister } from "../persons/type/TypePerson";
import { currencyFormat } from "../../components/utils/currentFormat/CurrentFormat";
import { HandleEnsureAuth } from "../../services/HandleEnsureAuth";
import saleJSON from "./sale.json"
import { TItens } from "../products/type/TypeProducts";
import api from "../../services/api/api";
import { AuthContext } from '../../context/auth'

export function InvoiceSales() {

    const { user: isLogged }: any = useContext(AuthContext);

    const [ceps, setCeps] = useState<TCeps[]>([])
    const [cities, setCities] = useState<TCities[]>([])
    const [msg, setMsg] = useState<string>('')
    const [sum, setSum] = useState<number>(0)
    const [itens, setItens] = useState<TItens[]>([]);
    const [persons, setPersons] = useState<TPersonRegister[]>([])
    const [sale, setSale] = useState<any>(saleJSON);
    const [userLoggedId, setUserLoggedId] = useState(0)
    const [userLoggedUsername, setUserLoggedUsername] = useState("")
    const [tokenMessage, setTokenMessage] = useState<string>("Usuário Autenticado !")
    const [typePay, setTypePay] = useState("")

    const [installments, setInstallments] = useState<number | string>('Credito a vista')

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setSale((values: any) => ({ ...values, [name]: value }))
    };

    useEffect(() => {
        async function getPerson() {
            const res_: any | undefined = localStorage.getItem('u')
            const user = JSON.parse(res_)
            setUserLoggedId(user[0].id)
            setUserLoggedUsername(user[0].username)

            const res: any | undefined = localStorage.getItem('token')
            const token: string = JSON.parse(res)
            try {
                const headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }

                await api.post<TPersonRegister[]>('persons_user', isLogged, { headers })
                    .then(response => {
                        setPersons(response.data)
                    })

            } catch (err) {
                // console.log("error occurred !!" + err)
                setTokenMessage(" Erro: 401 - Token Expirado ! ")
                await HandleEnsureAuth()
            }
        }
        getPerson()
    }, [persons])

    useEffect(() => {
        function getSale() {
            for (let i = 0; persons.length > i; i++) {
                if (persons[i].fk_id_user === userLoggedId) {
                    sale.filial = persons[i].fk_name_filial;
                    sale.user.user_id = userLoggedId;
                    sale.user.user_name = userLoggedUsername;
                    sale.person.fk_name_pers = persons[i].id_person;
                    sale.person.name_pers = persons[i].name_pers;
                    sale.person.cpf_pers = persons[i].cpf_pers;
                    sale.person.phone_pers = persons[i].phone_pers;
                    sale.person.address.address_pers = persons[i].address_pers;
                    sale.person.address.num_address = persons[i].num_address;
                    sale.person.address.bairro_pers = persons[i].bairro_pers;
                    sale.person.address.fk_cep = persons[i].fk_cep;
                    const resSum: any | undefined = localStorage.getItem('s');
                    if (resSum) {
                        const sum: number = JSON.parse(resSum);
                        sale.tItens = sum;
                        setSum(sum);
                    };

                    sale.tNote = sale.tItens - sale.disc_sale;
                    calcInstallments()

                    const resItens: any | undefined = localStorage.getItem('i');
                    if (resItens) {
                        const itens: TItens[] = JSON.parse(resItens);
                        setItens(itens);
                    }
                    setInstallments(installments)
                    installments !== 'Credito a vista' ? sale.installments = installments :
                        setInstallments('1')

                        sale.duplicatas = []
                }
            }
            setTimeout(() => {
                if (sale.person.fk_name_pers === 0) {
                    window.location.replace(typePay);
                }
            }, 6000)
        }
        getSale()
    }, [persons, userLoggedUsername, userLoggedId, sale, tokenMessage, typePay]);

    function calcInstallments() {
        if (installments === 'Credito a vista')
            sale.paySale = sale.tNote
        else if (installments == 2)
            sale.paySale = sale.tNote + sale.tNote * 3 / 100
        else if (installments == 3)
            sale.paySale = sale.tNote + sale.tNote * 6 / 100
        else if (installments == 4)
            sale.paySale = sale.tNote + sale.tNote * 9 / 100
    }

    useEffect(() => {
        async function getCeps() {
            try {
                await api.get(`/ceps`)
                    .then(response => { setCeps(response.data) })
            } catch (err) { alert("error occurred !!" + err) }
        };
        getCeps()
    }, [ceps])

    useEffect(() => {
        async function getCities() {
            try {
                await api.get(`/cities`)
                    .then(response => { setCities(response.data) })
            } catch (err) { alert("error occurred !!" + err) }
        };
        getCities()
    }, [cities])

    useEffect(() => {
        function setCep() {
            for (let i = 0; i < ceps.length; i++) {
                if (ceps[i].id_cep === sale.person.address.fk_cep) {
                    sale.person.address.num_cep = ceps[i].num_cep
                }
            }
        };
        setCep()
    }, [ceps, sale])

    useEffect(() => {
        async function setCity() {
            for (let i = 0; i < cities.length; i++) {
                if (cities[i].id_city === sale.person.address.fk_cep) {
                    sale.person.address.name_city = cities[i].name_city
                    sale.person.address.uf = cities[i].uf
                }
            }
        };
        setCity()
    }, [cities, sale])

    function payment() {
        if (sale) {
            let payment = sale.paySale
            let totalNote = 0
            const limitDesc = (sale.disc_sale > sum * 0.10)
            totalNote += sum
            totalNote -= sale.disc_sale;
            if (limitDesc) {
                setMsg("Desconto não autorizado !")
            } else {
                if (totalNote === 0) {
                    setMsg("Nenhum item no momento !")
                } else {
                    if (payment >= sale.tNote) {
                        setMsg("Valor á pagar " + currencyFormat(payment))
                        prepareSales();
                        setTimeout(() => {
                            window.location.replace(typePay)
                        }, 2000);
                    } else {
                        setMsg("Valor diferente do total da nota ! "
                            + sale.paySale)
                    }
                }
            }
        } else {
            setMsg("Pedido já foi enviado ! ")
        }

    };

    function prepareSales() {
        if (sale.itens.length === 0) {
            for (let i = 0; itens.length > i; i++) {
                sale.itens.push(itens[i])
            }
            localStorage.setItem("sl", JSON.stringify(sale))
        }
        else {
            setMsg("Pedido já foi enviado ! ")
        }
    };

    useEffect(() => {
        if (typePay !== "")
            payment()
    },)

    function handleSubmit() {
        setTypePay('pagseguro')
        payment()
    }

    function handleSubmitCard() {
        setTypePay('pagsegurocard')
        payment()
    }

    function handleSubmitCred() {
        setTypePay('pagcredloja')
    }

    return (
        <>
            <InvoiceSalesForm
                token={tokenMessage}
                backHomeInvoice={<BackHome />}
                handleChange={handleChange}
                handleSubmitCard={handleSubmitCard}
                handleSubmitCred={handleSubmitCred}
                handleSubmit={installments === "1" ? handleSubmit :
                    () => (setMsg('Pagar parcelado somente com cartão de crédito!!'))}
                alert=""
                message={msg}
                installments={setInstallments}
            >
                {sale}
            </InvoiceSalesForm>
        </>
    )
}