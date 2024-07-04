import { useState, useEffect } from "react"
import { PagSeguroCardForm } from "../../components/pagseguro/PagSeguroCardForm";
import pagSeguroCard_JSON from "./pagSeguroCard.json";
import cardRequest_JSON from "./cardRequest.json"
import saleJSON from "./sale.json"
import api from './../../services/api/api';

export function PagSeguroCard() {
    
    const [card, setCard] = useState({
        public_key: "??", holder: "", number: "",
        ex_month: "", ex_year: "", secure_code: "", encrypted: "??"
    });
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setCard(values => ({ ...values, [name]: value }))
    };
    const [publicKey, setPublicKey] = useState({ public_key: "", created_at: "" })
    const [flagSales, setFlagSales] = useState<Boolean>(false);
    const [err, setErr] = useState<string>("!")
    const [encrypted, setEncripted] = useState("!")
    const [pagSeguroCard, setPagSeguroCard] = useState(pagSeguroCard_JSON);
    const [, setCardRequest] = useState(cardRequest_JSON)
    const [paidSucess, setPaidSucess] = useState<string | number>("")
    const [paid, setPaid] = useState(0)
    const [sale, setSale_] = useState<any>(saleJSON);
    const [numNote, setNumNote] = useState(0)
    // const [error, setError] = useState("")
    const paySale:number = sale.paySale

    useEffect(() => {
        const getSale = () => {
            const sale_store_res = localStorage.getItem('sl');
            if (sale_store_res !== null) {
                const sales = JSON.parse(sale_store_res)
                setSale_(sales)
            }
        };
        getSale()
    }, [sale]);

    function arrayItems(obj: Object | any) {
        for (let i = 0; sale.itens.length > i; i++) {
            const items = { reference_id: "", name: '', quantity: 0, unit_amount: 0 }
            items.reference_id = sale.itens[i].item
            items.name = sale.itens[i].descric
            items.quantity = sale.itens[i].amount
            items.unit_amount = sale.itens[i].valor.replace(/[.]/g, '')
            obj.items.push(items)
        }
    };

    function getPargSeguroCard(obj: Object | any) {
        obj.reference_id = sale.user.user_id
        obj.description = "pagamento da nota"
        obj.customer.name = sale.person.name_pers
        obj.customer.email = sale.user.user_name
        obj.customer.tax_id = sale.person.cpf_pers
        obj.customer.phones[0].number = sale.person.phone_pers.substring(2)
        obj.customer.phones[0].country = '55'
        obj.customer.phones[0].area = sale.person.phone_pers.slice(0, -9);
        obj.customer.phones[0].type = "MOBILE"
        obj.shipping.address.street = sale.person.address.address_pers
        obj.shipping.address.number = 1241
        obj.shipping.address.complement = null
        obj.shipping.address.locality = sale.person.address.bairro_pers
        obj.shipping.address.city = sale.person.address.name_city
        obj.shipping.address.region_code = sale.person.address.uf
        obj.shipping.address.country = 'BRA'
        obj.shipping.address.postal_code = sale.person.address.num_cep.replace(/[..-]/g, '')
        obj.charges[0].reference_id = sale.user.user_id
        obj.charges[0].description = "Compras Online"
        obj.charges[0].payment_method.installments = parseInt(sale.installments)
        obj.charges[0].payment_method.holder.tax_id = sale.person.cpf_pers
        obj.charges[0].amount.value = sale.paySale.toFixed(2).replace(/[.]/g, '')
        obj.charges[0].payment_method.card.encrypted = encrypted
        arrayItems(pagSeguroCard)
        setPagSeguroCard(pagSeguroCard)
    };

    useEffect(() => {
        async function publicKeyPagSeguro() {
            try {
                await api.get("publickey")
                    .then(response => {
                        setPublicKey(response.data)
                        card.public_key = response.data.public_key
                    })
            } catch (err) {
                setErr("error occurred !!" + err)
            }
        };
        publicKeyPagSeguro() // Gera chave
    }, [publicKey, card])

    useEffect(() => {
       
        const encrypted_: any | undefined = localStorage.getItem('encrypted')
        if (encrypted_ !== null) {
            setEncripted(JSON.parse(encrypted_))
            getPargSeguroCard(pagSeguroCard)
        }
    
    },[encrypted])

    useEffect(() => {
        async function registerPagSeguroCard() {
            if (encrypted !== "!") {
                await api.post("card", pagSeguroCard)
                    .then(response => {
                        setCardRequest(response.data)
                        setPaid(response.data.charges[0].amount.summary.paid)
                    }).catch(error => setErr(JSON.stringify(error)))
            };
        }
        if (paid === 0) {
            registerPagSeguroCard() // Registra o o pagamento
        }
        if (paid !== 0) {
            clearFieldCard()
        }
        if (paid !== 0 && flagSales === false) {
            registerSale()
            setFlagSales(true)
        }
    }, [pagSeguroCard, encrypted, paid])

    async function registerSale() {
        await api.post('sale_register', sale)
            .then(response => {
                const res = response.data
                setNumNote(res)
            })
            .catch(error => setErr((JSON.stringify(error))));
    };

    function clearFieldCard() {
        localStorage.removeItem('encrypted')
        localStorage.removeItem('card')
        setPaidSucess("Valor pago com sucesso")
        card.public_key = ""
        card.holder = ""
        card.number = ""
        card.ex_year = ""
        card.ex_month = ""
        card.secure_code = ""
        card.encrypted = ""
    }

    function handleSubmitCard(e: any) {
        e.preventDefault();
        if (paySale !== 0) {
            if (paid === 0) {
                if (card.public_key !== "??") {
                    localStorage.setItem('card', JSON.stringify(card))
                    window.location.replace("/pagsegurocard")
                }
            }
        } else {
            setErr('Sem compras para pagar !')
        }
    }

    useEffect(() => {
        function clearSaleStorage() {
            if (paid !== 0 && flagSales === true ) {
                setTimeout(() => {
                    localStorage.removeItem('sl');
                    localStorage.removeItem('i');
                    localStorage.removeItem('p');
                    localStorage.removeItem('c');
                    localStorage.removeItem('t');
                    localStorage.removeItem('s');
                    localStorage.removeItem('id');
                }, 2000);
            }
        };
        clearSaleStorage()
    }, [paid, flagSales])

    return (
        <>
            <PagSeguroCardForm
                handleSubmit={handleSubmitCard}
                handleChange={handleChange}
                paidSucess={paidSucess}
                err={err}
                paid={paid !== 0 ? paid : null}
                paySale={paySale}
                URLNoteSubmit={numNote}
            >
                {card}
            </PagSeguroCardForm>
        </>
    )
}