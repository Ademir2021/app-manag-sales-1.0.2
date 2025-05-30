import React, { useState } from 'react';
import { HomeCards } from './HomeCards'
import { HomeContact, PropsHomeContact } from './HomeContact'
import * as Icon from 'phosphor-react';
import { HomeIcons } from './HomeIcons';

import './css/styles.css'
import { InvoiceSalesForm } from '../sales/InvoiceSalesForm';

const HomeMain = ({ children, handleChange, handleSubmit, msg, msgFields }: PropsHomeContact) => {

    const [vText, setVText] = useState(false)
    const [vTec, setVTec] = useState(false)

    const cards = [
        { id: 1, item: "Emissor NFe", descric: "Modelo 55 e 65", content: 'Emissão e controle da NFe', img:'img/logo_acsor.png', },
        { id: 2, item: "Emissor NFCe", descric: 'EvoFácil emissor NFECe', content: "Emite a NFCe empresa do simples",img:'img/logo_evofacil.png', },
        { id: 3, item: "Checkout de Vendas", descric: "Cartão, PIX e Boleto", content: 'Integração de sistemas para  vendas on-line',img:'img/logo_reactjs.png', },
        { id: 4, item: "API REST e Micro Serviço", descric: "Comunicação entre sistemas", content: 'Micro - Serviços com estruturas json/XML',img:'img/logo_reactjs.png', },
        { id: 5, item: "AC-Sor Sistema de Gestão", descric: "Sistema Integrado de Vendas", content: 'Automação dos processos na empresa com,  Vendas, Financeiro, Fluxo de caixa, estoque, emissão de notas e muito mais.',img:'img/logo_acsor.png', }
    ]

    const btnSol = <button id='btn-list' onClick={() => !vText ? setVText(true) : setVText(false)}>
        <label>Soluções</label>
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
        <label>Tecnologias</label>
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
        <p>Junte-se a uma empresa líder que prioriza qualidade e satisfação do cliente. Com um histórico comprovado de clientes em todo o Brasil.</p>
        <ul>
            <li>AC-Sor Sistemas integrado de gestão.</li>
            <li>EvoFácil Sistema emissor de NFCe.</li>
            <li>API REST para comunicação das vendas on-line.</li>
            <li>Módulo integrador com NFEs.</li>
            <li>ManageSales Sistema SAAS para gestão das vendas on-line.</li>
            <li>APP ManageSales para Android e IOS.</li>
            <li>MiddleWare controle de acesso e segurança.</li>
        </ul>
    </div>

    const textTec = <div id='v-text'>
        <p>Trabalhamos com as melhores tecnologias do mercado.</p>
        <p>Integração continua e qualidade no desenvolviemento.</p>
        <ul>
            <li>Biblioteca ReactJs, Sistemas SAAS.</li>
            <li>Framework ReactJs-native, APP Android e IOS.</li>
            <li>Docker, container e orquestração</li>
            <li>GitHub, versionamento e compartilhamento.</li>
            <li>PostgreSQL, banco de dados relacional</li>
            <li>TypeScript, interface e tipagem.</li>
            <li>JAVA, desktops e APIs.</li>
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
                        <div id='v-img-logo'>
                            <img
                            id='img-logo'
                            src='img/logo_acsor.png'
                            alt='AC-Sor'
                            />
                            <img
                             id='img-logo'
                            src='img/logo_evofacil.png'
                            alt='EvoFácil'
                            />
                            <img
                             id='img-logo'
                            src='img/logo_reactjs.png'
                            alt='Loja Online'
                            style={{borderRadius:'16px'}}
                            />
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
                    <hr></hr>
                    <a href='#cards-in'><button className='btn btn-primary p-2 mb-3'>Soluções para sua empresa</button></a>
                    {/* <p id='cards-in'>A solução que você precisa!</p> */}
                    <dd>Aqui o cliente encontra o <b>Produtos de Software</b> com à medida necessária.
                        Utilizamos métodologias ágeis de desenvolvovimento, com isto garantimos entregas rápidas e continua.</dd>

                    {(cards.map((card: any) => (
                        <HomeCards
                            key={card.id}
                            id={card.id}
                            img={card.img}
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
                    >Downloads</button>
                    <p id='font-bold'>Baixe aqui uma copia de nossas aplicações</p>
                    <img src='img/code_NFe.png' id='img' alt='Exemplo de código node'></img>
                    <p id='font-bold'>Codificação limpa e com padrões de mercado.</p>

                    <button className='btn btn-primary' id='mt18'
                        onClick={() => (window.location.assign("/store"))}
                    >Sistema SAAS Loja On-line</button>
                    <p id='mt18'>APP-Manage-Sale, o melhor Sistema SAAS para Gestão de loja online.</p>
                    <p>Sistema APP-Manage-Sale, Versão Web e para Android.</p>
                    <img src='img/site-store.png' id='img' alt='Site de compras'></img>
                    <div id='font-bold'>Sistema SAS para Gestão e Vendas On-line.</div>
                </div>
            </div>

        </>
    )
}

export { HomeMain }