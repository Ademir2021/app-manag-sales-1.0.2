import './css/styles.css'

export type PropsHomeContact = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleSubmit: any
    msg: string
    msgFields: string
}

export function HomeContact({
    children,
    handleChange,
    handleSubmit,
    msg,
    msgFields }: PropsHomeContact) {

    return (
        <form id='form'>
            <h4>Envie seu contato</h4>
            <dd>{msg}</dd>
            <div id='msg'>{msgFields}</div>
            <label>Nome</label>
            <input
                type='text'
                name='name'
                value={children.name}
                onChange={handleChange}
                placeholder='Seu nome'
            ></input>
            <label>Email</label>
            <input
                type='email'
                name='email'
                value={children.email}
                onChange={handleChange}
                placeholder='Seu endereço de Email'
            ></input>
            <label>Telefone</label>
            <input
                type='text'
                name='phone'
                value={children.phone}
                onChange={handleChange}
                placeholder='Seu Telefone'
            ></input>
            <button
                className='btn btn-primary mt-2'
                type="submit"
                onClick={handleSubmit}
            >Enviar</button>
        </form>
    )
}