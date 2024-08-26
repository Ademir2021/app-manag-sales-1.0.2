type Props = {
    waiting: string;
}

export function Waiting(props: Props) {
    return (
        <h5><b style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>{props.waiting}</b></h5>
    )
}