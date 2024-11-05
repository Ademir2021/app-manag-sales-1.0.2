import './FilterItens.css'

type Props = {
    onSubmit: any
    handleChange: any
    listProd:any
}

export function FilterItens({
    onSubmit,
    handleChange,
    listProd
}: Props) {

    const subject = "Com base em sua pesquisa item não localizado. Tente novamente!"
    return (
        <>
            <div className="containerxx">
                <div id='filter-main'>
                    <b>Filtrar por nome</b>
                    {listProd.length === 0 ? <dd>{subject}</dd>:null}
                    <form >
                        <input
                            id='filter-input'
                            placeholder="Pesquisar produto"
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