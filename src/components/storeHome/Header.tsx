import { Globais } from '../globais/Globais';

import './css/header.css'

type Props = {
    counter: number | string;
    subtotal: number | string;
}

export function Header(props: Props) {
    return (
        <div className='header-home'>
            <a href='pe' > <strong className='header-home-carrinho' >
                {props.counter}
                <img alt='Carrinho'
                    src="img/carrinho_counter.png">
                </img></strong></a>
            <a className='header-home-sub-total'>
                {props.subtotal}</a>
            {<a href={"/contact"} className='header-contact'>Fale Conosco {Globais.phone}</a>}
            <div id='header-frete'>Frete grátis!</div>
        </div>
    )
}