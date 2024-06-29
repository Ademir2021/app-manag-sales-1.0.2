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

    function contrack() {
        return alert("Por favor para contratar este Módulo por favor entre em contato: \nFone: (44) 98852-1033\nEmail: centroserra@gmail.com\nFormulário: Preencha o Formulário.")
    }

    return (
        <>
            <div id='home-main_'>
                <header id='home-header' className='text-center'>
                    <button id='home-header-btn' className='btn btn-primary'>Desenvolvendo o seu Software</button>
                </header>
                <main id="home-main">
                    <div id='home-div1'>
                        <h1>Faça a sua escolha para o seu <b>Projeto de Software</b> !</h1>
                        <p><b>- </b>Transformando suas idéias em realidade! Solicite agora mesmo um orçamento personalizado para o seu projeto de software</p>
                        <p><b>- </b>Junte-se a uma empresa líder que prioriza qualidade e satisfação do cliente. Com um histórico comprovado de clientes em todo o Brasil, oferecemos :</p>
                        <div>
                            <dd><b>+ </b>Integração NFe com o seu sistema.</dd>
                            <dd><b>+ </b>Emissor de NFCe das vendas.</dd>
                            <dd><b>+ </b>Checkout de pagamentos para cartão\PIX e boleto.</dd>
                            <dd><b>+ </b>Sistema de Gestão Integrada ERP.</dd>
                            <dd><b>+ </b>Desenvolvimento WEB</dd>
                            <dd><b>+ </b>API REST.</dd>
                            <dd><b>+ </b>Integração com soluções para auth e web-token.</dd>
                        </div>
                    </div>
                    <HomeContact
                        children={children}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        msg={msg}
                        msgFields={msgFields}
                    />
                </main>
                <div id='home-cards'>
                    <button className='btn btn-primary p-2'><b>+ </b>Soluções para sua empresa</button>
                    <div id='home-cards-title'
                    >Aqui temos a solução que você precisa !</div>
                    <div id='home-cards-content'
                    >Aqui o cliente encontra produtos de Software na medida de suas necessidades. Utilizamos métodologias ágeis de desenvolvovimento, com isto garantimos entregas rápidas e continua.</div>
                    {(cards.map((card: any) => (
                        <HomeCards
                            key={card.id}
                            id={card.id}
                            item={card.item}
                            descric={card.descric}
                            content={card.content}
                            onClick={contrack}
                        />
                    )))}
                    <div id='home-div2'>
                        <hr></hr>
                        <div>
                            <div>
                                <h1>Repositório no GitHub</h1>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => (window.location.assign("https://github.com/Ademir2021"))}
                                >Baixar projetos com o GitHub</button>
                            </div>
                            <br />
                            <div>
                                <h1>Caso de uso</h1>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => (window.location.assign("/store"))}
                                >loja on-line</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}