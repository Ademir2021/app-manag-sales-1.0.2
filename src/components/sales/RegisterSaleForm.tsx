import { currencyFormat } from '../utils/currentFormat/CurrentFormat';
import { TProduct } from '../../useCases/products/type/TProducts';

import '../../index.css'

type Props = {
  children: string | number | readonly string[] | undefined | any;
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleSubmit: any;
  handleDelete: any;
  handleSaveUpdate: any;
  handleSearchItem: any;
  products: TProduct[];
  item: string | number;
  statusBtnSaveUpdate: "Salvar Item" | "Atualizar Item";
  statusBtnSaleSubmit: "Iniciar Pedido" | "Faturar Pedido";
  loadItens: string | any;
  totalItens: number | string;
  item_img: string;
  alert: string;
  message: string
}

export function RegisterSaleForm({
  handleChange,
  handleSubmit,
  children,
  handleDelete,
  handleSaveUpdate,
  handleSearchItem,
  products,
  item,
  statusBtnSaveUpdate,
  statusBtnSaleSubmit,
  loadItens,
  totalItens,
  item_img,
  alert,
  message
}: Props) {

  return (
    <>
      <div id="container">
          <div id='main' >
            <p id='m-2'>PDV - Checkout de Compras</p>
            {alert && <label>{alert}</label>}
            {message &&<label>{message}</label>}
            { item_img && <img src={item_img} alt='Aguardando Item'></img>}
            <p>{item}</p>
            <span>Valor Unitário</span>
            <div>
              {currencyFormat(parseFloat(children.valor))}
            </div>
            <datalist id="data-itens">
              <select>{products.map((product:TProduct) => (
                <option key={product.id_product}>
                  {product.descric_product}</option>))}
              </select>
            </datalist>
                <label>Barras/Produto</label>
            <input
            id='main-input'
              type="search"
              list="data-itens"
              name="descric"
              value={children.descric}
              placeholder='Código de barras/Produto'
              required
              onChange={handleChange}
            />
            <label>Quantidade</label>
            <input
            id='main-input-number'
              type="number"
              name="amount"
              min='1'
              max='99'
              value={children.amount}
              placeholder='Quantidade'
              onChange={handleChange}
              required
            />
            {totalItens && <div>SubTotal {totalItens}</div>}
            <button className='btn btn-primary' id='m-2' onClick={handleSaveUpdate}>{statusBtnSaveUpdate}</button>
            <button className='btn btn-primary' id='m-2' onClick={handleSubmit}>{statusBtnSaleSubmit}</button>
            <button className='btn btn-danger' id='m-2' onClick={handleDelete}>Deletar Item</button>
            <button className='btn btn-primary' id='m-2' onClick={handleSearchItem}>Buscar Item / Importar Carrinho</button>
          </div>
        </div>
      <div className='text-center p-1'>{loadItens}</div>
    </>
  );
}