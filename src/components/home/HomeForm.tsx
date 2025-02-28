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
            <hr></hr>
            <div id='container'>
                <div id='main-form'>
                        <h1 className="text-center">Formulário de adesão</h1>
                    <form id="prospecting-form">
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
                            placeholder='CNPJ'
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
                            placeholder='Telefone'
                            required
                            type='text'
                            name='phone'
                            value={children.phone || ''}
                            onChange={handleChange}
                        />
                        <label>Email</label>
                        <input
                            placeholder='Email'
                            required
                            type='email'
                            name='email'
                            value={children.email || ''}
                            onChange={handleChange}
                        />
                        <label>Endereço</label>
                        <input
                            placeholder='Endereço'
                            required
                            type='text'
                            name='endereco'
                            value={children.endereco || ''}
                            onChange={handleChange}
                        />
                        <label>Número</label>
                        <input
                            id='form-main-input-number'
                            placeholder='Número'
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
                            placeholder='CEP'
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
                            className='btn btn-primary p-2'
                            type='submit'
                            onClick={handleSubmit}
                        >Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
};