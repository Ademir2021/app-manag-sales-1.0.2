import { HomeCards } from './HomeCards'
import { HomeContact, PropsHomeContact } from './HomeContact'
import './HomeMain.css'


export function HomeMain({ children, handleChange, handleSubmit, msg, msgFields }: PropsHomeContact) {

    const cards = [
        { id: 1, item: "NFe", descric: "Emissão de NFe modelo 55 e 65", content: 'Permite ao cliente efetuar o controle e a emissão de documentos fiscais' },
        { id: 2, item: "NFCe", descric: "Emissor de Nota fiscal consumidor eletrônica (NFCe)", content: 'Permite ao cliente de forma simples a emissão e a manutenção da NFCe das vendas' },
        { id: 3, item: "CHECKOUT DE VENDAS", descric: "Integração com Cartão, PIX e Boleto", content: 'Permite a integração de seus  sistemas e a realização de  vendas on-line, e que o cliente possa efetuar seus pagamentos de forma segura.' },
        { id: 4, item: "API REST", descric: "Integração de seu sistema com outras tecnologias", content: 'Permite o sistema do cliente possa se integrar a outros sistemas ou a micros-serviços para troca de dados' },
        { id: 5, item: "ERP", descric: "Sistema Integrado de Vendas", content: 'Permite ao cliente a automação de seus processo na empresa como: Vendas/Financeiros/Caixa/Estoque/Notas e muito mais...' }
    ]

    return (
        <>
            <div id='home-main-container'>
                <header id='home-header' className='text-center'>
                  <a href='#cards'><button id='home-header-btn' className='btn btn-primary'>Desenvolvendo o seu Software</button></a>
                </header>
                <main id="home-main">
                    <div id='home-div1'>
                        <h1>Faça a sua escolha para o seu <b>Projeto de Software</b> !</h1>
                        <p><b>- </b>Transformando suas idéias em realidade! Solicite agora mesmo um orçamento personalizado para o seu projeto de software.</p>
                        <p><b>- </b>Junte-se a uma empresa líder que prioriza qualidade e satisfação do cliente. Com um histórico comprovado de clientes em todo o Brasil, oferecemos :</p>
                        <div>
                            <dd><b>+ </b>Integração NFe com o seu sistema.</dd>
                            <dd><b>+ </b>Emissor de NFCe das vendas de varejo.</dd>
                            <dd><b>+ </b>Checkout Cartão\Pix e Boleto.</dd>
                            <dd><b>+ </b>Sistema de Gestão Integrada ERP.</dd>
                            <dd><b>+ </b>Desenvolvimento Web.</dd>
                            <dd><b>+ </b>API Rest.</dd>
                            <dd><b>+ </b>Soluções para Authenticação e WebToken.</dd>
                        </div>
                    </div>
                    <HomeContact
                        children={children}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        msg={msg}
                        msgFields={msgFields}
                    />

                    <a id='cards'></a>

                </main>
                    <div id='home-cards'>
                    <a href='#cards-in'><button className='btn btn-primary p-2'><b>+ </b>Soluções para sua empresa</button></a>
                    <div id='home-cards-title'
                    >Aqui temos a solução que você precisa !</div>
                    <div id='home-cards-content'
                    >Aqui o cliente encontra produtos de Software na medida de suas necessidades. Utilizamos métodologias ágeis de desenvolvovimento, com isto garantimos entregas rápidas e continua.</div>
                    <a id='cards-in'></a>
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
                    <div id='home-div2'>
                        <hr></hr>
                        
                            <div id='demo-repo-main'>
                                <div>
                                    <button
                                        className='btn btn-primary'
                                        id='home-repo-btn'
                                        onClick={() => (window.location.assign("https://github.com/Ademir2021"))}
                                    ><b>{'#'} </b>Descarregar demo dos módulos [.git, .zip]</button>
                                    <p
                                        id='home-repo-btn-content'
                                    >Descarregue demo de nossos módulos no gitHub do desenvolvedor,  utilize o git clone ou zip ! em caso de  dúvidas entre em contato através de nossos canais de atendimento.</p>
                                </div>
                                <div>
                                    <img
                                        src='img/code_NFe.png'
                                        id='home-repo-img'
                                        alt='Exemplo de código node'
                                    ></img>
                                    <p
                                        id='home-repo-img-content'
                                    >Saiba mais sobre nosso padrão de qualidade em codificação !</p>
                                </div>
                            </div>

                            <hr></hr>

                            <div id='home-store-main'>
                                <div>
                                    <button
                                        className='btn btn-primary'
                                        id='home-store-btn'
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
                                            id='home-store-img'
                                            alt='Site de compras'
                                        ></img>
                                        <p
                                            id='home-store-img-content'
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