import { currencyFormat } from '../utils/currentFormat/CurrentFormat';
import { NavBar } from '../navbar/Navbar';
import { Globais } from '../globais/Globais';
import { TPerson } from '../../useCases/persons/type/TPerson';

import './css/styles.css'

type Props = {
  children: string | number | readonly string[] | undefined | any
  handleChange: any
  handleSubmitCard: any
  handleSubmit: any
  handleSubmitCred: any
  loadItens?: any
  alert: string
  message: string
  backHomeInvoice: any;
  token: string
  installments: any
  idPerson: any | number
  persons: TPerson[]
}

export function InvoiceSalesForm({
  handleChange,
  handleSubmitCard,
  handleSubmit,
  handleSubmitCred,
  children,
  loadItens,
  message,
  token,
  installments,
  idPerson,
  persons
}: Props) {

  return (
    <div>
      <NavBar />
      <hr></hr>
      <div id="container-invoice" >
          <div id='form-invoice'>
            {message && <label>{message}</label>}
            <label><b>Cliente</b></label>
            <select onChange={e => idPerson(parseInt(e.target.value))} id='persons'>
              <option>Selecione o Cliente</option>
              {persons.map((pers: TPerson) => (
                <option key={pers.id_person}>{pers.id_person}-{pers.name_pers}</option>
              ))}
            </select>
            <label><b>Parcelar Crédito\Cartão</b></label>
            <select onChange={e => installments(e.target.value)} id='installments'>
              <option>Credito a vista</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <input
              type='number'
              name="disc_sale"
              value={currencyFormat(children.disc_sale) || ''}
              placeholder='Valor do desconto'
              required
              onChange={handleChange}
            />
            <input
              type='number'
              name="dinheiro"
              value={children.dinheiro || ''}
              placeholder='Valor em dinheiro'
              required
              onChange={handleChange}
            />
            <input
              type='text'
              name="paySale"
              value={currencyFormat(children.tNote)}
              placeholder="pagamento"
              required
              disabled
              onChange={handleChange}
            />
            <button className='btn btn-primary m-1' onClick={handleSubmitCard}>Pagar com Cartão</button>
            <button className='btn btn-primary m-1'  onClick={handleSubmit}>Pagar com PIX ou BOLETO</button>
            <button className='btn btn-primary m-1'  onClick={handleSubmitCred}>Pagar com Crediário Loja</button>
            <div className='text-center m-3'>
            <a href='/person_update'>Atualizar cadastro</a><br/>
            <a href='invoice_sales'>{token}</a>
            </div>
            <span className='load-list-itens' >{loadItens}</span>
            {children.tNote > 0 && <div id='val-invoice'>
              <label>S-Total: {currencyFormat(children.tItens)}</label>
              <label>Desc: {currencyFormat(children.disc_sale)}</label>
              <label>T-Nota: {currencyFormat(children.tNote)}</label>
              <label>Val-Pagar: {currencyFormat(children.paySale - children.disc_sale)}</label>
            </div>}
            {children.person.cpf_pers && <div id='data-invoice'>
              <hr></hr>
              <h1>Dados para entrega</h1>
            <span>Telefone: {children.person.phone_pers}</span>
            <span>CPF: {children.person.cpf_pers}</span>
            <span>Endereço: {children.person.address.address_pers}</span>
            <span>Número: {children.person.address.num_address}</span>
            <span>Bairro: {children.person.address.bairro_pers}</span>
            <span>Cidade: {children.person.address.name_city}</span>
            <span>Estado: {children.person.address.uf}</span>
            <span>CEP: {children.person.address.num_cep}</span>
            {/* <span>Filial: {Globais.company + ' - ' + Globais.CNPJ}</span> */}
            </div>}
          </div>
        </div>
      </div>
  )
}