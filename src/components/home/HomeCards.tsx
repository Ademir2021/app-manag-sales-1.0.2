import "./HomeCards.css"

type PropsHomeCards = {
    item: String
    descric: string
    content:String
    link:String;
    contract:any
    onClick:any
}

export function HomeCards(props: PropsHomeCards) {
    return (
        <>
            <div id='home-container-cards'>
                <div id='home-main-cards'>
                    <>
                        <h2>{props.item}</h2>
                        <b>{props.descric}</b>
                        <p>{props.content}</p>
                        <p>Baixar: {props.link}</p>
                        <p>Contratar: {props.contract}</p>
                        <button
                        className="btn btn-danger"
                        id="home-cards-btn"
                        onClick={props.onClick}
                        >{'< Contratar />'}</button>
                    </>
                </div>
            </div>
        </>
    )
}