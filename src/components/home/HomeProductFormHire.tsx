import InputMask from "react-input-mask";
import { HomeNav } from './HomeNav'
import './HomeProductFormHire.css'

type Props ={
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleSubmit: any
    sendMsg:String;
}

export function HomeProductFormHire({
    children,
    handleChange,
    handleSubmit,
    sendMsg}:Props) {
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
                                    <label><b>* </b>Nome fantasia</label>
                                    <input
                                    placeholder='Nome fantasia'
                                    required
                                    type='text'
                                    name='fantasia'
                                    value={children.fantasia || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>Razão social</label>
                                    <input
                                    placeholder='Razão social'
                                    required
                                    type='text'
                                    name='rsocial'
                                    value={children.rsocial || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>CNPJ</label>
                                    <InputMask
                                     mask="99.999.999.9999-99"
                                     mask-selectonfocus="true"
                                     maxLength={18}
                                     autoComplete="off"
                                     maskChar={null}
                                    placeholder='CNPJ da empresa'
                                    required
                                    type='text'
                                    name='cnpj'
                                    value={children.cnpj || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>Inscrição estadual</label>
                                    <input
                                    placeholder='Inscrição estadual'
                                    required
                                    type='text'
                                    name='iestadual'
                                    value={children.iestadual || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>Telefone</label>
                                    <input
                                    placeholder='Telefone da empresa'
                                    required
                                    type='text'
                                    name='phone'
                                    value={children.phone || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>Email</label>
                                    <input
                                    placeholder='Email da empresa'
                                    required
                                    type='email'
                                    name='email'
                                    value={children.email || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>Endereço</label>
                                    <input
                                    placeholder='Endereço da empresa'
                                    required
                                    type='text'
                                    name='endereco'
                                    value={children.endereco || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>Número</label>
                                    <input
                                    placeholder='Número do endereço da empresa'
                                    required
                                    type='text'
                                    name='numero'
                                    value={children.numero || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>Cidade</label>
                                    <input
                                    placeholder='Cidade da empresa'
                                    required
                                    type='text'
                                    name='cidade'
                                    value={children.cidade || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>Estado</label>
                                    <input
                                    placeholder='UF de sua empresa'
                                    required
                                    type='text'
                                    name='uf'
                                    value={children.uf || ''}
                                    onChange={handleChange}
                                    />
                                    <label><b>* </b>CEP</label>
                                    <input
                                    placeholder='CEP da cidade de sua empresa'
                                    required
                                    type='text'
                                    name='cep'
                                    value={children.cep || ''}
                                    onChange={handleChange}
                                    />
                                    <dd id='home-pfh-send-msg'>{sendMsg}</dd>
                                    <button
                                        id='home-pfh-button'
                                        className='btn btn-primary'
                                        type='submit'
                                        onClick={handleSubmit}
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