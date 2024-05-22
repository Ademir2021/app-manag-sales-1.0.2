import { LogoIn } from "../utils/logoIn/LogoIn";
import { UserHome } from "./UserHome";

type PropsUserFormRegister = {
    children: string | number | readonly string[] | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: any
    message:string;
    alert:string;
}

export function UserFormRegister({
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
                <span>Cadastre_se</span>
                <label>{alert}</label>
                <label>{message}</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Usuário'
                        value={children.name || ""}
                        onChange={handleChange}
                        />
                    < input
                        type="email"
                        name="username"
                        placeholder='Email'
                        value={children.username || ""}
                        onChange={handleChange}
                        />
                    <input
                        type="password"
                        name="password"
                        placeholder='Senha'
                        value={children.password || ""}
                        onChange={handleChange}
                        />
            
                    <input
                        type="password"
                        name="psw_repeat"
                        placeholder='Repita senha'
                        value={children.psw_repeat || ""}
                        onChange={handleChange}
                        />
                    <button onClick={handleSubmit}>Registrar</button>
                    <a href='/login'>{'Logar_se'}</a>
                    <UserHome/>
                </form>
            </fieldset>
        </div>
    )
}