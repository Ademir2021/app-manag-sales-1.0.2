import { useState } from "react";
import { ContactForm } from "../../components/contacts/ContactForm"
import { postRegister } from "../../services/handleService";
import { NavBar } from "../../components/navbar/Navbar";

export interface TContact {
    created_at?: Date | any;
    id?: number;
    name: string;
    email: string;
    phone?: string;
    comments: string
}

export function Contacts() {

    const [contacts, setContacts] = useState<TContact>({
        name: "",
        email: "",
        phone: "",
        comments: ""
    });

    const [msg, setMsg] = useState<string>('');

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setContacts(values => ({ ...values, [name]: value }))
    };

    function contactValFields(contact: TContact) {
        let msg = ""
        if (contact.name === "") { msg += "Digite o nome completo |\n" };
        if (contact.email === "") { msg += "Digite seu email | \n" };
        if (contact.phone === "") { msg += "Digite seu telefone |\n" };
        if (contact.comments === "") { msg += "Digite seu assunto\n" };
        if (msg !== "") {
            setMsg(msg)
            return false;
        };
        return true;
    };

    function contactClearFields() {
        contacts.name = ""
        contacts.email = ""
        contacts.phone = ""
        contacts.comments = ""
    }

    function handleSubmit(e: Event) {
        e.preventDefault();
        if (contactValFields(contacts)) {
            postRegister(contacts, "contact")
            contactClearFields();
        }
    }

    return (
        <>
           <div className="container"><NavBar /></div>
            <ContactForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                msg={msg}
            >
                {contacts}
            </ContactForm>
        </>
    )
}