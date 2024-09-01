import { currencyFormat } from '../utils/currentFormat/CurrentFormat';
import { LogoIn } from '../utils/logoIn/LogoIn';
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
    <>
      <div className="container-global" >
        <div className="main-global">
          <div className='main-global-form'>
            <LogoIn />
            <div className='container p-3'>
            <strong>Faturar pedido</strong>
            <dd><b>SubTotal</b> {currencyFormat(children.tItens)}</dd>
            <dd><b>Desconto</b> {currencyFormat(children.disc_sale)}</dd>
            <dd><b>Total da nota</b> {currencyFormat(children.tNote)}</dd>
            <dd><b>Valor a pagar</b> {currencyFormat(children.paySale)}</dd>
            </div>
            <dd>{message}</dd>
            <dd>Parcelar Crédito\Cartão</dd>
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
              placeholder='Dinheiro'
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
            <select onChange={e => idPerson(parseInt(e.target.value))} id='persons'>
              <option>Selecione o Cliente</option>
              {persons.map((pers: TPerson) => (
                <option key={pers.id_person}>{pers.id_person}-{pers.name_pers}</option>
              ))}
            </select>
            <dd><b>Nome</b> {children.person.name_pers}</dd>
            <dd><b>Telefone</b> {children.person.phone_pers}</dd>
            <dd><b>CPF</b> {children.person.cpf_pers}</dd>
            <dd><b>Endereço</b> {children.person.address.address_pers}</dd>
            <dd><b>Número</b> {children.person.address.num_address}</dd>
            <dd><b>Bairro</b> {children.person.address.bairro_pers}</dd>
            <dd><b>Cidade</b> {children.person.address.name_city}</dd>
            <dd><b>Estado</b> {children.person.address.uf}</dd>
            <dd><b>CEP</b> {children.person.address.num_cep}</dd>
            <br></br>
            <dd><b>Dados da Filial</b></dd>
            <dd>{Globais.company + ': ' + Globais.CNPJ}</dd>
          </div>
        </div>
      </div>
    </>
  )
}