import { HomeCards } from './HomeCards'
import { HomeContact, PropsHomeContact } from './HomeContact'

import './css/styles.css'

export function HomeMain({ children, handleChange, handleSubmit, msg, msgFields }: PropsHomeContact) {

    const cards = [
        { id: 1, item: "Emissor NFe", descric: " Emissor modelo 55 e 65", content: 'Permite ao cliente efetuar o controle e a emissão de documentos fiscais' },
        { id: 2, item: "Emissor NFCe", descric: "Emissor de Nota fiscal (NFCe)", content: 'Permite ao cliente de forma simples a emissão e a manutenção da NFCe' },
        { id: 3, item: "Checkout de Vendas", descric: "Integração com Cartão, PIX e Boleto", content: 'Permite a integração de seus  sistemas e a realização de  vendas on-line, e que o cliente possa efetuar seus pagamentos de forma segura.' },
        { id: 4, item: "API Rest, Micro serviços", descric: "Integração de seu sistema com outras tecnologias", content: 'Permite o sistema do cliente possa se integrar a outros sistemas ou a micros-serviços para troca de dados' },
        { id: 5, item: "ERP - Sistema de Gestão", descric: "Sistema Integrado de Vendas", content: 'Permite ao cliente a automação de seus processos na empresa como: Vendas/Financeiro/Caixa/Estoque/Notas e muito mais ...' }
    ]

    return (
        <>
            <div id='container'>
                <header id='' className='text-center'>
                    <a href='#cards'><button id='' className='btn btn-primary'
                    >Desenvolvendo o seu Software</button></a>
                </header>
                <main id="main">
                    {/* Div1 */}
                    <div>
                        <h1>Faça a sua escolha para o seu <b>Projeto de Software</b> !</h1>
                        <p>Transformando suas idéias em realidade! Solicite agora mesmo um orçamento personalizado para o seu projeto de software.</p>
                        <p>Junte-se a uma empresa líder que prioriza qualidade e satisfação do cliente. Com um histórico comprovado de clientes em todo o Brasil, oferecemos :</p>
                        <div>
                            <dd>Integração NFe com o seu sistema.</dd>
                            <dd>Emissor de NFCe das vendas de varejo.</dd>
                            <dd>Checkout Cartão\Pix e Boleto.</dd>
                            <dd>Sistema de Gestão Integrada ERP.</dd>
                            <dd>Desenvolvimento Web.</dd>
                            <dd>API Rest.</dd>
                            <dd>Soluções para Authenticação e WebToken.</dd>
                        </div>
                    </div>
                    {/* Div2 */}
                    <div>
                        <HomeContact
                            children={children}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            msg={msg}
                            msgFields={msgFields}
                        />
                    </div>
                </main>

                <div id=''>
                    <a href='#cards-in'><button className='btn btn-primary p-2'><b>+ </b>Soluções para sua empresa</button></a>
                    <div id=''
                    >Aqui temos a solução que você precisa !</div>
                    <div id=''
                    >Aqui o cliente encontra produtos de Software na medida de suas necessidades. Utilizamos métodologias ágeis de desenvolvovimento, com isto garantimos entregas rápidas e continua.</div>
                    <div id=''></div>
                    {(cards.map((card: any) => (
                        <HomeCards
                            key={card.id}
                            id={card.id}
                            item={card.item}
                            descric={card.descric}
                            content={card.content}
                            onClick={() => (window.location.assign("/hire"))}
                        />
                    )))}
                    <div id=''>

                        <div id=''>
                            <div>
                                <button
                                    className='btn btn-primary'
                                    id=''
                                    onClick={() => (window.location.assign("https://github.com/Ademir2021"))}
                                ><b>{'#'} </b>Descarregar demo dos módulos [.git, .zip]</button>
                                <p
                                    id=''
                                >Descarregue demo de nossos módulos no gitHub do desenvolvedor,  utilize o git clone ou zip ! em caso de  dúvidas entre em contato através de nossos canais de atendimento.</p>
                            </div>
                            <div>
                                <img
                                    src='img/code_NFe.png'
                                    id=''
                                    alt='Exemplo de código node'
                                ></img>
                                <p
                                    id=''
                                >Saiba mais sobre nosso padrão de qualidade em codificação !</p>
                            </div>
                        </div>

                        <hr></hr>

                        <div id=''>
                            <div>
                                <button
                                    className='btn btn-primary'
                                    id=''
                                    onClick={() => (window.location.assign("/store"))}
                                >@ Acessar nossa loja on-line</button>
                                <p
                                    id='home-store-btn-content'
                                >Faça suas compras em nossa loja on-line, tudo que é comprado em uma loja fisica vc adquire aqui com uma nova experiência, tudo de forma segura e garantida.</p>
                            </div>
                            <div>
                                <div>
                                    <img
                                        src='img/site-store.png'
                                        id=''
                                        alt='Site de compras'
                                    ></img>
                                    <p
                                        id=''
                                    >Site oficial, sua loja fisica em um formato on-line.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}