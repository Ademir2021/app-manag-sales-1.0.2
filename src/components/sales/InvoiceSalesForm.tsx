import { currencyFormat } from '../utils/currentFormat/CurrentFormat';

import '../global-module.css'
import { LogoIn } from '../utils/logoIn/LogoIn';

type TInvoiceSalesForm = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: any;
  handleSubmitCard: any;
  handleSubmit:any;
  loadItens?: any;
  alert: string
  message: string;
  backHomeInvoice:any;
  token:string
}

export function InvoiceSalesForm({
  handleChange,
  handleSubmitCard,
  handleSubmit,
  children,
  loadItens,
  alert,
  message,
  backHomeInvoice,
  token
}: TInvoiceSalesForm) {

  return (
    <div className="container-global" >
      <div className="main-global">
        <div className='main-global-form'>
          <LogoIn/>
           {/* <label>{alert}</label> */}
          {/* <>{backHomeInvoice}</> */}
          <a href='invoice_sales'>{token}</a>
          <hr></hr>
          <b>Faturar Pedido</b>
          <a href='/person_update'>{"[ Atualização de Cadastro ]"}</a>
          <dd><b>Nome</b> {children.person.name_pers}</dd>
          <dd><b>Telefone</b> {children.person.phone_pers}</dd>
          <dd><b>CPF</b> {children.person.cpf_pers}</dd>
          <dd><b>Endereço</b> {children.person.address.address_pers}</dd>
          <dd><b>Bairro</b> {children.person.address.bairro_pers}</dd>
          <dd><b>Cidade</b> {children.person.address.name_city}</dd>
          <dd><b>Estado</b> {children.person.address.uf}</dd>
          <dd><b>Cep</b> {children.person.address.num_cep}</dd>
          <dd><b>Subtotal</b> {currencyFormat(children.tItens)}</dd>
          <dd><b>Cupom de desconto</b> {currencyFormat(children.disc_sale)}</dd>
          <dd><b>Total da nota</b> {currencyFormat(children.tNote)}</dd>
          <dd><b>Valor a pagar</b> {currencyFormat(children.paySale)}</dd>
          <hr></hr>
          <dd>{message}</dd>
          <input
            type='number'
            name="disc_sale"
            value={currencyFormat(children.disc_sale) || ''}
            placeholder='cupom de Desconto'
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
          <button className='btn btn-primary' onClick={handleSubmitCard}>Pagar com Cartão</button>
          <button className='btn btn-primary' onClick={handleSubmit}>Pagar com PIX ou BOLETO</button>
          <a href='###'>{'Mantenha seu cadastro atualizado'}</a>
          <span className='load-list-itens' >{loadItens}</span>
        </div>
      </div>
    </div>
  )
}