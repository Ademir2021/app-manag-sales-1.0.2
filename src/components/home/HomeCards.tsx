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
                        <span><b>{props.item}</b></span>
                        <p><b>{props.descric}</b></p>
                        <p>{props.content}</p>
                        <button
                        className="btn btn-primary p-2"
                        id="home-cards-btn"
                        onClick={props.onClick}
                        >Contratar</button>
                </div>
            </div>
    )
}