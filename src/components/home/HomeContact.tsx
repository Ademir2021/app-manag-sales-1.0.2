import './HomeContact.css'

export type PropsHomeContact = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleSubmit: any
    msg:String
    msgFields:String

}

export function HomeContact({
    children,
    handleChange,
    handleSubmit,
    msg,
    msgFields}:PropsHomeContact) {

    return (
        <>
            <form id="home-form">
                <div id='home-form-input'>
                    <div id='home-form-label'>
                        <b>{msg}</b>
                        <dd>{msgFields}</dd>
                        <label>*Nome</label>
                        <input
                            type='text'
                            name='name'
                            value={children.name}
                            onChange={handleChange}
                            placeholder='Seu nome'
                        ></input>
                        <label>*Email</label>
                        <input
                            type='email'
                            name='email'
                            value={children.email}
                            onChange={handleChange}
                            placeholder='Seu endereço de Email'
                        ></input>
                        <label>*Telefone</label>
                        <input
                            type='text'
                            name='phone'
                            value={children.phone}
                            onChange={handleChange}
                            placeholder='Seu Telefone'
                        ></input>
                        <button
                            id='home-form-button'
                            className='btn btn-primary'
                            type="submit"
                            onClick={handleSubmit}
                        >Enviar contato</button>
                        {/* <div>Em breve estaremos em contato</div> */}
                    </div>
                </div>
            </form>
        </>
    )
}