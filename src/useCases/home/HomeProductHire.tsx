import { useState } from "react";
import { HomeProductFormHire } from "../../components/home/HomeProductFormHire";
import { postRegister } from "../../services/handleService";

interface TContact {
    created_at?: Date | any;
    id?: number;
    name: string;
    email: string;
    phone?: string;
    comments: string | object
}

export function HomeProductHire() {

    const [sendHire, setSendHire] = useState<boolean>(false)
    const [sendMsg, setSendMsg] = useState<String>("Aguardando o envio dos dados da empresa !!")

    const [hire, setHire] = useState({
        fantasia: '',
        rsocial: '',
        cnpj: '',
        iestadual: '',
        phone: '',
        email: '',
        endereco: '',
        numero: '',
        cidade: '',
        uf: '',
        cep: ''
    })

    const [contacts, setContacts] = useState<TContact>({
        name: '',
        email: "",
        phone: "",
        comments: ""
    });

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setHire(values => ({ ...values, [name]: value }))
    };

    function handleSubmit(e: Event) {
        e.preventDefault()
        if (hire)
            contacts.name = JSON.stringify(hire.fantasia)
        contacts.email = JSON.stringify(hire.email)
        contacts.phone = JSON.stringify(hire.phone)
        contacts.comments = JSON.stringify(
            hire.rsocial + ' , '
            + hire.cnpj.replace(/[..-]/g, '') + ' , '
            + hire.iestadual + ' , '
            + hire.endereco + ' , '
            + hire.numero + ' , '
            + hire.cidade + ' , '
            + hire.uf + ' , '
            + hire.cep + ' , '
        );
        if (hire.cnpj !== '') {
            if (sendHire === false) {
                postRegister(contacts, "contact")
                setSendHire(true)
                setSendMsg("Dados da empresa enviado com sucesso !!")
            } else {
                setSendMsg("Os dados da empresa já foram enviados !!")
            }
        } else {
            setSendMsg('Por favor, Informe o CNPJ da sua empresa !!')
        }
    }

    return (
        <>
            <HomeProductFormHire
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                sendMsg={sendMsg}
            >
                {hire}
            </HomeProductFormHire>
        </>
    )
}