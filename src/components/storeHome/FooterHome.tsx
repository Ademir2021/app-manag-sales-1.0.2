import { NewsLetter } from '../../useCases/contacts/newsLetter'
import { Globais } from '../globais/Globais'

import './FooterHome.css'
import './cookies.css'

export function FooterHome() {
    return (
        <>
            <hr></hr>
            <footer className='text-center'>
                <p id="cookies"></p>
                <p>
                    <div><dd>SIGA-NOS</dd></div>
                    <a target="_blank" href="https://www.facebook.com/centroinfostore"><img className="social-icons" src="img/social/facebook.ico" alt='Icon Facebook'></img></a>
                    <a target="_blank" ><img className="social-icons" src="img//social//instagram.ico" alt='Icon Intagram'></img></a>
                    {/* <a target="_blank" href="https://linkedin.com/in/ademir-dev"><img className="social-icons" src="img//social//linkedin.png"></img></a> */}
                    <a target="_blank" href="https://github.com/Ademir2021"><img className="social-icons" src="img//social//github.ico" alt='Icon Github'></img></a>
                    {/* <a target="_blank" href="https://twitter.com/AdemirDeveloper"><img className="social-icons" src="img//social//twitter.png"></img></a> */}
                </p>
        
                <p>Loja on-line | Fácil de comprar - Rapidez e segurança em suas compras</p>

                <dd>CANAIS DE ACESSO</dd>
                <a href='contact'>Garantia dos produtos - </a>
                <a href='invoice_sales'>Checkout de compras - </a>
                <a href='pagsegurocard'>Pague com Cartão PIX ou Boleto - </a>
                <a href='pe'>Carrinho de compras - </a>
                <a href='form_person'>Cadastro de Clientes - </a>
                <a href='sale'>Conferir Checkout - </a>
                <a href={"contact"}>Fale conosco - </a>
                <a href='contacts_list'>Postagens</a>

                <p><a href="#"><img src="img/btn-top.png" className="btn-top" alt="Topo"></img></a></p>
                <a href='contact'>Consulte nossas formas de entrega</a>
                <NewsLetter />
                {/* Google Maps */}
                <div className="maps">
                    <p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8920.78111493576!2d-52.01010715806461!3d-24.032808720407672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0eeb219df7154b0!2sCENTRO%20INFORMATICA!5e0!3m2!1sen!2sbr!4v1631551065418!5m2!1sen!2sbr" className="maps" loading="lazy"></iframe><br />
                        {/* fim */}
                    </p>
                </div>
                {/**Text Footer */}
                <div className='text-footer'>
                    <div>{Globais.rights_reserved}</div>
                    <div>{Globais.address}</div>
                    <div>Powered by <a href={Globais.URL} title="Powered By." target="_self">{Globais.title}</a> Contato {Globais.phone}</div>
                    <br />
                    <p>
                        <span>Política de cookies: </span>
                        Os <b>cookies... </b>
                        <a href={'cookies'} title="Politica de cookies">cookies</a>
                    </p>
                    <p className='text-center'><span>CENTRO INFORMÁTICA | <b>CNPJ: </b>{Globais.CNPJ}</span></p>

                    <p> <a href={'invoice_sales'}>
                        <img src='/img/band_cartao_creditos.png' className='footer-payment'></img>
                    </a></p>
                    <p> <a href='##'>
                        <img className="site-ssl" src='img/ssl_cert.png' alt="Certificado SSL"></img></a></p>

                </div>
            </footer>
        </>
    )
}