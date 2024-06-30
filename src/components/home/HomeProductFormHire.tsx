import { HomeNav } from './HomeNav'
import './HomeProductFormHire.css'

export function HomeProductFormHire() {
    return (
        <>
            <HomeNav />
            <div id='home-pfh-container'>
                <div id='home-pfh-main'>
                    <div id='home-pfh-content'>
                        <h1>Formulário de adesão</h1>
                        <p><b>Centro Informática </b> - CNPJ 18 069 383 0001 10</p>
                        <hr></hr>
                        <p><b>Informe os dados da sua empresa !</b></p>
                    </div>

                    <div id='home-pfh-form'>
                        <form>
                            <div id='home-pfh-label'>
                                <div id='home-pfh-input'>
                                    <label>Nome fantasia</label>
                                    <input></input>
                                    <label>Razão social</label>
                                    <input></input>
                                    <label>CNPJ</label>
                                    <input></input>
                                    <label>Inscrição estadual</label>
                                    <input></input>
                                    <label>Telefone</label>
                                    <input></input>
                                    <label>Endereço - Logradouro</label>
                                    <input></input>
                                    <label>Número</label>
                                    <input></input>
                                    <label>Cidade</label>
                                    <input></input>
                                    <label>Estado</label>
                                    <input></input>
                                    <label>CEP</label>
                                    <input></input>
                                    <button
                                        id='home-pfh-button'
                                        className='btn btn-primary'
                                        type='submit'
                                    >Enviar dados</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <footer>Centro Informática - <b>Phone:</b> +55 (44) 98852-1033</footer>
        </>
    )
};