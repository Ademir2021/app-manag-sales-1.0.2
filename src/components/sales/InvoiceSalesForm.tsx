import { currencyFormat } from '../utils/currentFormat/CurrentFormat';
import { NavBar } from '../navbar/Navbar';
import { Globais } from '../globais/Globais';
import { TPerson } from '../../useCases/persons/type/TPerson';

import '../global-module.css'
import './InvoiceSalesForm.css'

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
      <div className="container-global" >
        <div className="main-global">
          <div className='main-global-form'>
            <label>{message}</label>
            <dd><b>Cliente</b></dd>
            <select onChange={e => idPerson(parseInt(e.target.value))} id='persons'>
              <option>Selecione o Cliente</option>
              {persons.map((pers: TPerson) => (
                <option key={pers.id_person}>{pers.id_person}-{pers.name_pers}</option>
              ))}
            </select>
            <dd><b>Parcelar Crédito\Cartão</b></dd>
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
            <button onClick={handleSubmitCard}>Pagar com Cartão</button>
            <button onClick={handleSubmit}>Pagar com PIX ou BOLETO</button>
            <button onClick={handleSubmitCred}>Pagar com Crediário Loja</button>
            <a href='/person_update'>Atualizar de Cadastro</a><a href='invoice_sales'>{token}</a>
            <span className='load-list-itens' >{loadItens}</span>
            <div id='invoice-header'>
              <dd>Sub-total = {currencyFormat(children.tItens)}</dd>
              <dd>Desconto = {currencyFormat(children.disc_sale)}</dd>
              <dd> Total da nota = {currencyFormat(children.tNote)}</dd>
              <dd>Valor a pagar = {currencyFormat(children.paySale - children.disc_sale)}</dd>
            </div>
            <dd>Telefone = {children.person.phone_pers}</dd>
            <dd>CPF = {children.person.cpf_pers}</dd>
            <dd>Endereço = {children.person.address.address_pers}</dd>
            <dd>Número = {children.person.address.num_address}</dd>
            <dd>Bairro = {children.person.address.bairro_pers}</dd>
            <dd>Cidade = {children.person.address.name_city}</dd>
            <dd>Estado = {children.person.address.uf}</dd>
            <dd>CEP = {children.person.address.num_cep}</dd>
            <dd>Filial = {Globais.company + ' - ' + Globais.CNPJ}</dd>
          </div>
        </div>
      </div>
    </div>
  )
}