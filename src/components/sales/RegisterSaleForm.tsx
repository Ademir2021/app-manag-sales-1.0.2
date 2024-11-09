import { currencyFormat } from '../utils/currentFormat/CurrentFormat';

import '../global-module.css'
import './SaleForm.css'
import { TProduct } from '../../useCases/products/type/TProducts';

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
      <div className="container-sale">
        <div className="main-sale">
          <div className='main-sale-register' >
            <div id='pdv-title'>PDV/Store</div>
            <label>{alert}</label>
            <label>{message}</label>
            <img src={item_img} alt={children.descric}></img>
            <p id='descric-item'>{item}</p>
            <label>Valor Unitário</label>
            <div id='val-item'>
              {currencyFormat(parseFloat(children.valor))}
            </div>

            <datalist id="data-itens">
              <select>{products.map((product:TProduct) => (
                <option key={product.id_product}>
                  {product.descric_product}</option>))}
              </select>
            </datalist>
                <label>Código de Barras/Produto</label>
            <input
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
              type="number"
              name="amount"
              min='1'
              max='99'
              value={children.amount}
              placeholder='Quantidade'
              onChange={handleChange}
              required
            />
            <div id='sub-total' >{totalItens}</div>
            <button className='btn btn-primary' onClick={handleSaveUpdate}>{statusBtnSaveUpdate}</button>
            <button className='btn btn-primary' onClick={handleSubmit}>{statusBtnSaleSubmit}</button>
            <button className='btn btn-danger' onClick={handleDelete}>Deletar Item</button>
            <button className='btn btn-primary' onClick={handleSearchItem}>Buscar Item / Importar Carrinho</button>
            <div className='p-1'></div>
          </div>
        </div>
      </div>
      <div className='text-center p-1'>{loadItens}</div>
    </>
  );
}