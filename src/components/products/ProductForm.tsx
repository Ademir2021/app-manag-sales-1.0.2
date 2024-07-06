
import { useState } from 'react';
import '../global-module.css'

import './ProductForm.css'

type IProdctForm = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | any
    handleSubmit: any
    alert: string;
    message: string
    listBrand: any;
    listSector: any;
    listUn:any
}

export function ProductForm({
    children,
    handleChange,
    handleSubmit,
    alert,
    message,
    listBrand,
    listSector,
    listUn
}: IProdctForm) {

    const [menu, setMenu] = useState("geral")

    const nav = <>
        <div className='container mb-3 text-center'>
            <button className='btn btn-primary m-1'
                onClick={() => (setMenu('geral'))}
            >Geral</button>
            <button className='btn btn-primary m1'
                onClick={() => (setMenu('fiscal'))}
            >Fiscal</button>
        </div>
    </>

    const geral = <>
        <input
            type="text"
            name="descric_product"
            placeholder='Descrição do produto'
            value={children.descric_product || ""}
            onChange={handleChange}
        />
        <input
            type="number"
            name="val_max_product"
            placeholder='Valor máximo'
            value={children.val_max_product || ""}
            onChange={handleChange}
        />
        <input
            type="number"
            name="val_min_product"
            placeholder='Valor minimo'
            value={children.val_min_product || ""}
            onChange={handleChange}
        />
        <ul>
            <li className='m-1'>Marca {listBrand}</li>
            <li className='m-1'>Setor {listSector}</li>
            <li className='m-1'>Unidade de medida {listUn}</li>
        </ul>

        <input
            type="text"
            name="bar_code"
            placeholder='Código de Barras'
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
    </>

    const fiscal = <p> <select
        id='fiscal-classe-select'
        name='classe'
        value={children.classe || ''}
        onChange={handleChange}
    >
        <option>Sem classe</option>
        <option>Combustivel</option>
        <option>Informatica</option>
        <option>Celular</option>
    </select>

        <input
            type="text"
            name="ncm"
            placeholder='NCM'
            value={children.ncm || ""}
            onChange={handleChange}
        />

        <input
            type="text"
            name="teste"
            placeholder='TESTE'
            value={children.teste || ""}
            onChange={handleChange}
        />
    </p>

    return (
        <>
            {nav}
            <div className="container-global">
                <fieldset className="main-global">
                    <form className="main-global-form">
                        {menu === 'geral' ? <span className='m-3'>Cadastrar produtos</span> : null}
                        {menu === 'fiscal' ? <><span className='m-3'>Situação fiscal do produto</span><br /></> : null}
                        <label>{alert}</label>
                        <label>{message}</label>
                        {menu === 'fiscal' ? fiscal : null}
                        {menu === "geral" ? geral : null}
                        {menu === 'geral' ? <button onClick={handleSubmit}>Registrar</button> : null}
                    </form>
                </fieldset>
            </div>
        </>
    )
}