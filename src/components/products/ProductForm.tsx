import { useState } from 'react';
import '../global-module.css'

import './ProductForm.css'

type Props = {
    children: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
    handleChange: React.ChangeEventHandler<HTMLInputElement> | any;
    handleSubmit: any;
    alert: string;
    message: string;
    listBrand: any;
    listSector: any;
    listUn:any;
    listClasse:any;
    listGrupoFiscal:any;
    listTipoProd:any
    listNcm:any;
    msgNcm:string |undefined;
}

export function ProductForm({
    children,
    handleChange,
    handleSubmit,
    alert,
    message,
    listBrand,
    listSector,
    listUn,
    listClasse,
    listGrupoFiscal,
    listTipoProd,
    listNcm,
    msgNcm
}: Props) {

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
            <li className='m-1'>Unidade medida {listUn}</li>
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
        <button onClick={handleSubmit}>Registrar</button>
    </>

    const fiscal = <div>
         <li className='' id='fiscal-classe-select'>Classe {listClasse}</li>
         <li className='' id='fiscal-classe-select'>Grupo Fiscal {listGrupoFiscal}</li>
         <li className='' id='fiscal-classe-select'>Tipo de Produto {listTipoProd}</li>
         <li className='' id='fiscal-classe-select'>Pesquise o NCM do Produto {listNcm}</li>
         <span className='m-5'>{msgNcm}</span>
    </div>

    return (
        <>
            {nav}
            <div className="container-global">
                <fieldset className="main-global">
                    <form className="main-global-form">
                        {menu === 'geral' ? <span className='m-3'>Cadastrar Produto</span> : null}
                        {menu === 'fiscal' ? <><span className='m-3'>Situação fiscal do Produto</span><br /></> : null}
                        <label>{alert}</label>
                        <label>{message}</label>
                        {menu === 'fiscal' ? fiscal : null}
                        {menu === "geral" ? geral : null}
                    </form>
                </fieldset>
            </div>
        </>
    )
}