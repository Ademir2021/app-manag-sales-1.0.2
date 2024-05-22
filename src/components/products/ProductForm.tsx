
import '../global-module.css'

type IProdctForm = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit: any
    alert: string;
    message: string
    listBrand: any;
    listSector:any;
}

export function ProductForm({
    children,
    handleChange,
    handleSubmit,
    alert,
    message,
    listBrand,
    listSector
}: IProdctForm) {
    return (
        <div className="container-global">
            <fieldset className="main-global">
                <form className="main-global-form">
                    <strong>Cadastro de Produtos</strong>
                    <label>{alert}</label>
                    <label>{message}</label>
                    <input
                        type="text"
                        name="descric_product"
                        placeholder='descrição do produto'
                        value={children.descric_product || ""}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="val_max_product"
                        placeholder='valor máximo'
                        value={children.val_max_product || ""}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="val_min_product"
                        placeholder='valor minimo'
                        value={children.val_min_product || ""}
                        onChange={handleChange}
                    />

                    <label>
                        <strong>Selecione uma Marca </strong>
                        {listBrand}
                    </label>

                    <label>
                        <strong>Selecione um Setor</strong>
                        {listSector}
                    </label>

                    <input
                        type="text"
                        name="bar_code"
                        placeholder='código de Barras'
                        value={children.bar_code || ""}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder='Imagem'
                        value={children.image || ""}
                        onChange={handleChange}
                    />
                    <button onClick={handleSubmit}>Registrar</button>
                    <a href='###'>{'Mantenha seu cadastro atualizado'}</a>
                </form>
            </fieldset>
        </div>
    )
}