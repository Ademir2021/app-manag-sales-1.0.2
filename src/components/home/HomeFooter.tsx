import { Globais } from '../globais/Globais'
import './HomeFooter.css'
import './cookies.css'

export function HomeFooter() {
    return (
        <>
            <footer className='text-center' id='home-footer'>
                <p id="cookies"></p>
                <p>
                    <div><dd>SIGA-NOS</dd></div>
                    <a target="_blank" href="##"><img className="social-icons" src="img/social/facebook.ico" alt='Icon Facebook'></img></a>
                    <a target="_blank" ><img className="social-icons" src="img//social//instagram.ico" alt='Icon Intagram'></img></a>
                    {/* <a target="_blank" href="https://linkedin.com/in/ademir-dev"><img className="social-icons" src="img//social//linkedin.png"></img></a> */}
                    <a target="_blank" href="https://github.com/Ademir2021"><img className="social-icons" src="img//social//github.ico" alt='Icon Github'></img></a>
                    {/* <a target="_blank" href="https://twitter.com/AdemirDeveloper"><img className="social-icons" src="img//social//twitter.png"></img></a> */}
                </p>
                <p>Engenharia de Software</p>
                {/* <p><a href="#"><img src="img/btn-top.png" className="btn-top" alt="Topo"></img></a></p> */}
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
                    <p> <a href='##'>
                        <img className="site-ssl" src='img/ssl_cert.png' alt="Certificado SSL"></img></a></p>
                </div>
            </footer>
        </>
    )
}