import { currencyFormat } from '../utils/currentFormat/CurrentFormat';
import { LogoIn } from '../utils/logoIn/LogoIn';
import { Globais } from '../globais/Globais';

import '../global-module.css'

type TInvoiceSalesForm = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: any;
  handleSubmitCard: any;
  handleSubmit: any;
  loadItens?: any;
  alert: string
  message: string;
  backHomeInvoice: any;
  token: string
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
    <>
      <div className="container-global" >
        <div className="main-global">
          <div className='main-global-form'>
            <LogoIn />
            <hr></hr>
            <span><b>Finalizar compra</b></span>
            <dd><b>SubTotal</b> {currencyFormat(children.tItens)}</dd>
            <dd><b>Valor do desconto</b> {currencyFormat(children.disc_sale)}</dd>
            <dd><b>Total da nota</b> {currencyFormat(children.tNote)}</dd>
            <p><b>Valor a pagar</b> {currencyFormat(children.paySale)}</p>
            <dd>{message}</dd>
            <input
              type='number'
              name="disc_sale"
              value={currencyFormat(children.disc_sale) || ''}
              placeholder='Valor do desconto'
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
            <a href='/person_update'>{"[ Atualização de Cadastro ]"}</a><a href='invoice_sales'>{token}</a>
            <span className='load-list-itens' >{loadItens}</span>
          </div>
        </div>
      </div>

      <div className="container-global" >
        <div className="main-global">
          <div className='main-global-form'>
             {/* <label>{alert}</label> */}
            <span><b>Confira seus dados</b></span>
            <dd><b>Nome</b> {children.person.name_pers}</dd>
            <dd><b>Telefone</b> {children.person.phone_pers}</dd>
            <dd><b>CPF</b> {children.person.cpf_pers}</dd>
            <dd><b>Endereço</b> {children.person.address.address_pers}</dd>
            <dd><b>Bairro</b> {children.person.address.bairro_pers}</dd>
            <dd><b>Cidade</b> {children.person.address.name_city}</dd>
            <dd><b>Estado</b> {children.person.address.uf}</dd>
            <dd><b>Cep</b> {children.person.address.num_cep}</dd>
            <br></br>
            <dd><b>Dados da Filial</b></dd>
            <dd>{Globais.company + ': ' + Globais.CNPJ}</dd>
            
          </div>
        </div>
      </div>
      <br></ br>
    </>
  )
}