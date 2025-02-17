import InputMask from "react-input-mask";
import { HomeNav } from './HomeNav'
import './css/styles.css'

type Props = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleSubmit: any
    sendMsg: String;
}

export function HomeForm({
    children,
    handleChange,
    handleSubmit,
    sendMsg }: Props) {
    return (
        <>
            <HomeNav />
            <div id='container'>
                <div id='main'>
                    <div>
                        <h1>Formulário de cadastro.</h1>
                        <p><b>Centro Informática </b> - CNPJ 18 069 383 0001 10</p>
                    </div>
                    <form id="prospecting-form">
                        <h4>Preencha o formulário.</h4>
                        <label>Nome fantasia</label>
                        <input
                            placeholder='Nome fantasia'
                            required
                            type='text'
                            name='fantasia'
                            value={children.fantasia || ''}
                            onChange={handleChange}
                        />
                        <label>Razão social</label>
                        <input
                            placeholder='Razão social'
                            required
                            type='text'
                            name='rsocial'
                            value={children.rsocial || ''}
                            onChange={handleChange}
                        />
                        <label>CNPJ</label>
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
                        <label>Inscrição estadual</label>
                        <input
                            placeholder='Inscrição estadual'
                            required
                            type='text'
                            name='iestadual'
                            value={children.iestadual || ''}
                            onChange={handleChange}
                        />
                        <label>Telefone</label>
                        <input
                            placeholder='Telefone da empresa'
                            required
                            type='text'
                            name='phone'
                            value={children.phone || ''}
                            onChange={handleChange}
                        />
                        <label>Email</label>
                        <input
                            placeholder='Email da empresa'
                            required
                            type='email'
                            name='email'
                            value={children.email || ''}
                            onChange={handleChange}
                        />
                        <label>Endereço</label>
                        <input
                            placeholder='Endereço da empresa'
                            required
                            type='text'
                            name='endereco'
                            value={children.endereco || ''}
                            onChange={handleChange}
                        />
                        <label>Número</label>
                        <input
                            placeholder='Número do endereço da empresa'
                            required
                            type='text'
                            name='numero'
                            value={children.numero || ''}
                            onChange={handleChange}
                        />
                        <label>Cidade</label>
                        <input
                            placeholder='Cidade da empresa'
                            required
                            type='text'
                            name='cidade'
                            value={children.cidade || ''}
                            onChange={handleChange}
                        />
                        <label>Estado</label>
                        <input
                            placeholder='UF de sua empresa'
                            required
                            type='text'
                            name='uf'
                            value={children.uf || ''}
                            onChange={handleChange}
                        />
                        <label>CEP</label>
                        <input
                            placeholder='CEP da cidade de sua empresa'
                            required
                            type='text'
                            name='cep'
                            value={children.cep || ''}
                            onChange={handleChange}
                        />
                        <div id='msg'>
                        <dd id='mt12'>{sendMsg}</dd>
                        </div>
                        <button
                            className='btn btn-primary'
                            type='submit'
                            onClick={handleSubmit}
                        >Enviar dados</button>
                    </form>
                </div>
            </div>

            <footer>Centro Informática - <b>Phone:</b> +55 (44) 98852-1033</footer>
        </>
    )
};