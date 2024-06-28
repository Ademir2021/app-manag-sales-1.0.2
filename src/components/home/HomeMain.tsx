import { HomeCards } from './HomeCards'
import { HomeContact, PropsHomeContact } from './HomeContact'
import './HomeMain.css'

export function HomeMain({ children, handleChange, handleSubmit, msg, msgFields }: PropsHomeContact) {

    const cards = [
        { id: 1, item: "NFe", descric: "Emissão de NFe modelo 55 e 65", content: 'Permite ao cliente efetuar o controle e a emissão de documentos fiscais', link: 'acesse no gitHub', contrack: 'utilize o formulário' },
        { id: 2, item: "CHECKOUT DE VENDAS", descric: "Integração com Cartão, PIX e Boleto", content: 'Permite a integração de seus  sistemas e a realização de  vendas on-line, e que o cliente possa efetuar seus pagamentos de forma segura.', link: 'acesse no gitHub', contrack: 'utilize o formulário' },
        { id: 3, item: "API REST", descric: "Integração de seu sistema com outras tecnologias", content: 'Permite o sistema do cliente possa se integrar a outros sistemas ou a micros-serviços para troca de dados', link: 'acesse no gitHub', contrack: 'utilize o formulário' },
        { id: 4, item: "NFCe", descric: "Emissor de Nota fiscal consumidor eletrônica (NFCe)", content: 'Permite ao cliente de forma simples a emissão e a manutenção da NFCe das vendas', link: 'acesse no gitHub', contrack: 'utilize o formulário' },
        { id: 5, item: "ERP", descric: "Sistema Integrado de Vendas", content: 'Permite ao cliente a automação de seus processo na empresa como: Vendas/Financeiros/Caixa/Estoque/Notas e muito mais...', link: 'acesse no gitHub', contrack: 'utilize o formulário' }
    ]

    function contrack() {
        return alert("Por favor para contratar este Módulo por favor entre em contato: \nFone: (44) 98852-1033\nEmail: centroserra@gmail.com\nFormulário: Preencha o Formulário.")
    }

    return (
        <>
            <div id='home-main_'>
                <header id='home-header' className='text-center'>
                    <button className='btn btn-primary mb-4 p-3' >{'< Desenvolvendo o seu Software />'}</button>
                    <h1><b><a href='/'>{'CENTRO INFORMÁTICA'}</a></b></h1>
                    <h2>Projetos e programação de sistemas computacionais</h2>

                   <p>Transformando suas idéias em realidade! Solicite agora mesmo um orçamento personalizado para o seu projeto de software</p>
                </header>
                <main id="home-main">
                    <div id='home-div1'>
                        <>Faça a escolha inteligente para o seu projeto de software!</>
                        <div>Junte-se a uma empresa líder que prioriza qualidade e satisfação do cliente. Com um histórico comprovado de clientes em todo o Brasil, oferecemos !</div><br />
                        <ul>
                            <li>Integração NFe com a receita do estado de sua Federação</li>
                            <li>Emissor de NFCe das vendas de seu estabelecimento</li>
                            <li>Checkout de pagamentos para Cartão\PIX e Boleto</li>
                            <li>Sistema de Gestão Integrada ERP</li>
                            <li>Desenvolvimento WEB</li>
                            <li>API REST</li>
                            <li>Integração com soluções para autenticação e WebToken</li>
                        </ul>
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
                    <div><button className='btn btn-primary'>{'< Nossos Produtos />'}</button></div>
                    <div id='home-cards-title'
                    >Aqui temos a solução que você precisa !</div>
                    <div id='home-cards-content'
                    >Aqui o cliente encontra produtos de Software na medida de suas necessidades. Utilizamos métodologias ágeis de desenvolvovimento, com isto garantimos entregas rápidas e continua.</div>
                    {(cards.map((card: any) => (
                        <HomeCards
                            key={card.id}
                            item={card.item}
                            descric={card.descric}
                            content={card.content}
                            link={card.link}
                            contract={card.contrack}
                            onClick={contrack}
                        />
                    )))}
                    <div id='home-div2'>
                        <hr></hr>
                        <ul>
                            <li>
                                <h1>Repositório no gitHub</h1>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => (window.location.replace("https://github.com/Ademir2021"))}
                                >Baixar projetos com o GitHub</button>
                            </li>
                            <br />
                            <li>
                                <h1>Caso de Uso</h1>
                                <button
                                    className='btn btn-primary'
                                    onClick={() => (window.location.replace("/store"))}
                                >loja on-line</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}