import { LogoIn } from "../utils/logoIn/LogoIn";
import { UserHome } from "./UserHome";

type PropsUserFormRegister = {
    children: string | number | readonly string[] | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: any
    message:string;
    alert:string;
}

export function UserFormRecoverPass({
    children,
    handleChange,
    handleSubmit,
    message,
    alert
     }: PropsUserFormRegister) {

    return (
        <div className='container-user-login' >
            <fieldset className='main-user'>
                <form className='main-user-login'>
                    <LogoIn/>
                <strong>Problemas para entrar?</strong>
                <div className="text-center">Insira seu email, e enviaremos um link para
                    você voltar a acessar a sua conta.
                </div>
                <label>{alert}</label>
                <label>{message}</label>
                    < input
                        type="email"
                        name="username"
                        placeholder='Email'
                        value={children.username || ""}
                        onChange={handleChange}
                        />
                    <button onClick={handleSubmit}>Enviar link para Login</button>
                    <a href='/login'>{'Logar_se'}</a>
                    <UserHome/>
                </form>
            </fieldset>
        </div>
    )
}