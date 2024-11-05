import './FilterItens.css'

type Props = {
    onSubmit: any
    handleChange: any
}

export function FilterItens({
    onSubmit,
    handleChange
}: Props) {
    return (
        <>
            <div className="containerxx">
                <div id='filter-main'>
                    <b>Filtrar por nome</b>
                    <hr></hr>
                    <form >
                        <input
                            id='filter-input'
                            placeholder="Pesquisar"
                            onChange={handleChange}
                        />
                        <button
                            id='filter-button'
                            onClick={onSubmit}
                        >Buscar</button>
                    </form>
                </div>
            </div>
        </>
    )
}