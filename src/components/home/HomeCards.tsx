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
                        <span><b>{props.item}</b></span>
                        <p><b>{props.descric}</b></p>
                        <p>{props.content}</p>
                        <button
                        className="btn btn-primary p-2"
                        onClick={props.onClick}
                        >+ Informações.</button>
                </div>
            </div>
    )
}