type PropsNewsLetterForm = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleSubmit: React.FormEventHandler<HTMLButtonElement> | undefined | any
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
}

export function NewsLetterForm(
    { children, handleSubmit, handleChange }: PropsNewsLetterForm) {

    return (
        <form style={{ backgroundColor: "", padding: '12px', borderRadius: '6px', border: '0px solid gray' }}>
            <strong>Receba boletins de notícias !</strong><br />
            <input style={{ fontSize: '16px', width: '80%', height: '46px', borderRadius: '12px 0px 0px 12px' }}
                type="email"
                name="email"
                value={children.email || ''}
                placeholder="Digite o seu melhor E-mail !"
                required
                onChange={handleChange}
            />
            <button style={{ width: '20%', height: '48px', borderRadius: '0px 12px 12px 0px' }}
                type="submit"
                onClick={handleSubmit}
            >Enviar</button>
        </form>
    )
}