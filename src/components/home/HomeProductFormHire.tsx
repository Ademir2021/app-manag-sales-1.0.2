import { Logo } from '../logo/Logo'
import './HomeProductFormHire.css'

export function HomeProductFormHire() {
    return (
        <>
            <div id='home-pfh-container'>
                <div id='home-pfh-logo'>  <Logo /></div>
                <div id='home-pfh-main'>
                    <div id='home-pfh-content'>
                        <p><b>Centro Informática </b> - CNPJ 18 069 383 0001 10</p>
                        <hr></hr>
                       <p><b>Inclua os dados de sua empresa  e envie o Formulário para que fique registrado !</b></p>
                       <p>Para que vc conclua a solicitação é muito importante que seja preenchido todos os campos com devidos dados solicitados :</p>
                       <p>Dados da Empresa.</p>                       
                       <p>Dados de Endereço da Empresa.</p>
                       <p>Regime tributário.</p>
                       <p>Contato do responsável.</p>
                       <p>Caso a empresa emita NFe deve possui o cerificado digital !</p>
                       <hr></hr>
                    </div>                          

                    <div id='home-pfh-form'>
                        <form>
                            <h1>Formulário de adesão</h1>
                            <div id='home-pfh-label'>
                                <div id='home-pfh-input'>
                                    <label>Empresa</label>
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