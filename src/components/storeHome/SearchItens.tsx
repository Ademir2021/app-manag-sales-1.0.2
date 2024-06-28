import './SearchItens.css'

type SearchItens = {
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: React.FormEvent<HTMLFormElement> | undefined | any ;
    descric: string;
    messageItems: string;
    selectSector: React.ChangeEventHandler<HTMLSelectElement> | undefined;
    sectors: Array<object>;
    products: Array<object>
}

export function SearchItens(props: SearchItens) {

    return (
            <section className="search-item-main">
                <form onSubmit={props.handleSubmit} className="d-flex mt-1 mt-lg-0" role="search">
                    <datalist id='data-itens' ><select>{props.products.map((product: any) => (
                        <option key={product.id_product}>
                            {product.descric_product}</option>))}
                    </select></datalist>
                    <select className='search-select' onChange={props.selectSector} >
                        <option>Todos</option>
                        {props.sectors.map((sector: any) => (
                            <option key={sector.id_sector}>
                                {sector.name_sector}</option>))}
                    </select>
                    <input className="search-item-input" type="search"
                        placeholder="Do que você precisa ?" aria-label="Search"
                        list='data-itens' name='descric' value={props.descric}
                        style={{ backgroundColor: 'white' }}
                        onChange={props.handleChange}/>
                    <button className="btn-search" type="submit">
                        <img src='img/icons8-pesquisar.png'
                            className='search-items-img'></img></button>
                </form>
                <strong className='search-items-message'>{props.messageItems}</strong>
            </section>
    )
}