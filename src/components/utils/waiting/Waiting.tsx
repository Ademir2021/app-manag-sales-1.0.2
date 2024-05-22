type PropsWaiting = {
    waiting: string;
}

export function Waiting(props: PropsWaiting) {
    return (
        <h5><b style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>{props.waiting}</b></h5>
    )
}