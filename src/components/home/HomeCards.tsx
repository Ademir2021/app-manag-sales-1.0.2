import "./HomeCards.css"

type Props = {
    id:number;
    item: String
    descric: string
    content:String
    onClick:any
}

export function HomeCards(props: Props) {
    return (
            <div id='home-container-cards'>
                <div id='home-main-cards'>
                        <h1><b>{props.id} - {props.item}</b></h1>
                        <p><b>- {props.descric}</b></p>
                        <p><b>- </b>{props.content}</p>
                        <button
                        className="btn btn-danger p-2"
                        id="home-cards-btn"
                        onClick={props.onClick}
                        >Contratar</button>
                </div>
            </div>
    )
}