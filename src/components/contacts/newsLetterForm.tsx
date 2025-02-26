import './Contact.css'
import * as Icon from 'phosphor-react';

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
            <span id='ico-email'>
                <Icon.ArrowElbowRight size={36} />
                <>Informe-se</>
            </span>
            <input
                id='input-newsLetter'
                type="email"
                name="email"
                value={children.email || ''}
                placeholder="Registre aqui seu e-mail ..."
                required
                onChange={handleChange}
            />
            <button
                id='button-newsLetter'
                className='btn btn-primary mb-2'
                type="submit"
                onClick={handleSubmit}
            >Registrar</button>
        </form>
        </>
    )
}