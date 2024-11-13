import './Contact.css'

type Props = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleSubmit: React.FormEventHandler<HTMLButtonElement> | undefined | any
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
}

export function NewsLetterForm({
    children,
    handleSubmit,
    handleChange }: Props) {

    return (
        <>
        <form id='form-newsLetter' >
            <label>Receba boletins de notícias !</label>
            <input
                id='input-newsLetter'
                type="email"
                name="email"
                value={children.email || ''}
                placeholder="Digite o seu melhor E-mail !"
                required
                onChange={handleChange}
            />
            <button
                id='button-newsLetter'
                type="submit"
                onClick={handleSubmit}
            >Enviar</button>
        </form>
        </>
    )
}