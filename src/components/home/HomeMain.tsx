import React, { useState } from 'react';
import { HomeCards } from './HomeCards'
import { HomeContact, PropsHomeContact } from './HomeContact'
import * as Icon from 'phosphor-react';
import { HomeIcons } from './HomeIcons';

import './css/styles.css'

const HomeMain = ({ children, handleChange, handleSubmit, msg, msgFields }: PropsHomeContact) => {

    const [vText, setVText] = useState(false)
    const [vTec, setVTec] = useState(false)

    const cards = [
        { id: 1, item: "Emissor NFe", descric: "Modelo 55 e 65", content: 'Emissão e controle da NFe' },
        { id: 2, item: "Emissor NFCe", descric: 'EvoFácil emissor NFECe', content: "Emite a NFCe para o pequeno varejo" },
        { id: 3, item: "Checkout de Vendas", descric: "Integração com Cartão, PIX e Boleto", content: 'Permite a integração de seus  sistemas e a realização de  vendas on-line, e que o cliente possa efetuar seus pagamentos de forma segura.' },
        { id: 4, item: "API REST e Micro Serviço", descric: "Integração de seu sistema com outras tecnologias", content: 'Permite o sistema do cliente possa se integrar a outros sistemas ou a micros-serviços para troca de dados' },
        { id: 5, item: "AC-Sor Sistema de Gestão", descric: "Sistema Integrado de Vendas", content: 'Permite ao cliente a automação dos processos na empresa  Vendas, Financeiro, Fluxo de caixa, estoque, emissão de notas e muito mais.' }
    ]

    const btnSol = <button id='btn-list' onClick={() => !vText ? setVText(true) : setVText(false)}>
        <b>Soluções</b>
        <div id='icon-seta'>
            {!vText &&
                <HomeIcons title='UP' icon={<Icon.CaretUp size={28} />} />
            }
            {vText &&
                <HomeIcons title='Down' icon={<Icon.CaretDown size={28} />} />
            }
        </div>
    </button>

    const btnTec = <button id='btn-list' onClick={() => !vTec ? setVTec(true) : setVTec(false)}>
        <b>Tecnologias</b>
        <div id='icon-seta'>
            {!vTec &&
                <HomeIcons title='UP' icon={<Icon.CaretUp size={28} />} />
            }
            {vTec &&
                <HomeIcons title='Down' icon={<Icon.CaretDown size={28} />} />
            }
        </div>
    </button>

    const textSol = <div id='v-text'>
        <p>Transformando suas idéias em realidade! Solicite agora mesmo um orçamento personalizado para o seu projeto de software.</p>
        <p>Junte-se a uma empresa líder que prioriza qualidade e satisfação do cliente. Com um histórico comprovado de clientes em todo o Brasil, < br /> temos soluções para:</p>
        <ul>
            <li>Integrar NFe com o seu sistema de gestão.</li>
            <li>Integrar NFCe para simples emissão no pequeno varejo.</li>
            <li>Checkout cartão, PIX e boleto.</li>
            <li>Sistema integrado para gestão ERP.</li>
            <li>Desenvolvimento de sistemas SAAS e sites para Web.</li>
            <li>API REST, json/XML.</li>
            <li>Implementação de Middleware e web-token.</li>
        </ul>
    </div>

const textTec = <div id='v-text'>
<p>Trabalhamos com as melhores tecnologias do mercado</p>
<p>Integração continua e Qualidade no Desenvolviemento</p>
<ul>
    <li>Projetos com React e React-native</li>
    <li>Orquestração de projetos com Docker</li>
    <li>Versionamento de projeto com Git-Hub</li>
    <li>Modelagem de banco de dados com Postgres</li>
    <li>Sistemas seguro com criptografia e tokerização</li>
    <li>APIs com Typescript e Express</li>
    <li>Componentes para integrar NF-e</li>
</ul>
</div>

    return (
        <>
            <div id='container-home'>
                <header id='header' className='text-center'>
                    <a href='#cards'><button id='btn-header' className='btn btn-primary'
                    >Desenvolvendo o seu Software</button></a>
                </header>
                <main id="main-home">
                    <div>
                        <h1>Faça a sua escolha para o seu <b>Projeto de Software</b> !</h1>
                        {btnSol}
                        {vText && textSol}
                        {btnTec}
                        {vTec && textTec}
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
                    <a href='#cards-in'><button className='btn btn-primary p-2 mb-3'><b>+ </b>Soluções para sua empresa</button></a>
                    <h1 id='cards-in'>A solução que você precisa !!</h1>
                    <h2>O cliente encontra aqui o <b>Produtos de Software</b> com à medida necessária.<br />
                        Utilizamos métodologias ágeis de desenvolvovimento, com isto garantimos entregas rápidas e continua.</h2>
                    <hr></hr>
                    <dd>Escolha o card que melhor te atenda...</dd>
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
                </div>
                {/* Fim dos cards **/}

                <div id='container-dev' >
                    <button
                        className='btn btn-primary'
                        id='mt18'
                        onClick={() => (window.location.assign("https://github.com/Ademir2021"))}
                    >{'#'} Descarregar demo dos módulos [.git, .zip]</button>
                    <p id='mt18'>Descarregue demos no gitHub do desenvolvedor. <br />Utilize o git clone ou zip ! em caso de  dúvidas entre em contato através de nossos canais de atendimento.</p>
                    <img src='img/code_node.png' id='img' alt='Exemplo de código node'></img>
                    <p id='font-bold'>Codificação limpa e com padrões de mercado.</p>

                    <button className='btn btn-primary' id='mt18'
                        onClick={() => (window.location.assign("/store"))}
                    >@ Sistema SAS Loja On-line</button>
                    <p id='mt18'>Nosso APP-Manage-Sale é o melhor Sistema SAS para Gestão de sua loja, Completo e Seguro.</p>
                    <p>Sistema APP-Manage-Sale, Vesão Web e para Android.</p>
                    <img src='img/site-store.png' id='img' alt='Site de compras'></img>
                    <div id='font-bold'>Sistema SAS para Gestão e Vendas On-line.</div>
                </div>
            </div>

        </>
    )
}

export { HomeMain }