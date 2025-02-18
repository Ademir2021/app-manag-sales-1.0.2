import { HomeCards } from './HomeCards'
import { HomeContact, PropsHomeContact } from './HomeContact'

import './css/styles.css'

export function HomeMain({ children, handleChange, handleSubmit, msg, msgFields }: PropsHomeContact) {

    const cards = [
        { id: 1, item: "Emissor NFe", descric: " Emissor modelo 55 e 65", content: 'Permite ao cliente efetuar o controle e a emissão de documentos fiscais' },
        { id: 2, item: "Emissor NFCe", descric: "Emissor de Nota fiscal (NFCe)", content: 'Permite ao cliente de forma simples a emissão e a manutenção da NFCe' },
        { id: 3, item: "Checkout de Vendas", descric: "Integração com Cartão, PIX e Boleto", content: 'Permite a integração de seus  sistemas e a realização de  vendas on-line, e que o cliente possa efetuar seus pagamentos de forma segura.' },
        { id: 4, item: "API Rest, Micro serviços", descric: "Integração de seu sistema com outras tecnologias", content: 'Permite o sistema do cliente possa se integrar a outros sistemas ou a micros-serviços para troca de dados' },
        { id: 5, item: "ERP Sistema de Gestão", descric: "Sistema Integrado de Vendas", content: 'Permite ao cliente a automação dos processos na empresa  Vendas, Financeiro, Fluxo de caixa, estoque, emissão de notas e muito mais.' }
    ]

    return (
        <>
            <div id='container'>
                <header id='header' className='text-center'>
                    <a href='#cards'><button id='' className='btn btn-primary'
                    >Desenvolvendo o seu Software</button></a>
                </header>
                <main id="main">
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

            
                <div id='cards'>
                    <a href='#cards-in'><button className='btn btn-primary p-2'><b>+ </b>Soluções para sua empresa</button></a>
                    <div id='cards-in'>Aqui temos a solução que você precisa.</div>
                    <div>O cliente encontra produtos de Software na medida de suas necessidades. Utilizamos métodologias ágeis de desenvolvovimento, com isto garantimos entregas rápidas e continua.</div>
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
                    <div>
                        <button
                            className='btn btn-primary'
                            id='mt12'
                            onClick={() => (window.location.assign("https://github.com/Ademir2021"))}
                        ><b>{'#'} </b>Descarregar demo dos módulos [.git, .zip]</button>
                        <p id='mt12'>Descarregue demo de nossos módulos no gitHub do desenvolvedor,  utilize o git clone ou zip ! em caso de  dúvidas entre em contato através de nossos canais de atendimento.</p>
                    </div>
                    <div>
                        <img
                            src='img/code_node.png'
                            id='img'
                            alt='Exemplo de código node'
                        ></img>
                        <p id='font-bold'>Codificação limpa e com padrões de mercado.</p>
                    </div>
                </div>
                <button
                    className='btn btn-primary'
                    id='mt12'
                    onClick={() => (window.location.assign("/store"))}
                >@ Sistema SAS Loja On-line</button>
                <p id='mt12'>Nosso APP-Manage-Sale é o melhor Sistema SAS para Gestão de sua loja, Completo e Seguro.</p>
                <p>Sistema APP-Manage-Sale, Vesão Web e para Android.</p>
                <img src='img/site-store.png'
                    id='img'
                    alt='Site de compras'
                ></img>
                <div id='font-bold'>Sistema SAS para Gestão e Vendas On-line.</div>
            </div>

        </>
    )
}