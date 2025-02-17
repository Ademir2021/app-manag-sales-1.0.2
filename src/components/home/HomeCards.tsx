import './css/styles.css'

type Props = {
    id:number;
    item: String
    descric: string
    content:String
    onClick:any
}

export function HomeCards(props: Props) {
    return (
            <div id='container-cards'>
                <div id='main-cards'>
                        <b>{props.item}</b>
                        <p>{props.descric}</p>
                        <p>{props.content}</p>
                        <button
                        className="btn btn-primary mb-3"
                        onClick={props.onClick}
                        >+ Informações.</button>
                </div>
            </div>
    )
}