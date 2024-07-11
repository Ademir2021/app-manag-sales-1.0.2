import { useState } from 'react';

import './ProductForm.css'
import '../global-module.css'

type PropsProductFormUpdate = {
    children?: string | number | readonly string[] | undefined | any;
    handleChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    handleSubmit?: any;
    handleUpdate?: any;
    handleDelete?: any;
    modalRef?: any;
    className?: string;
    close?: any;
    alert: string;
    message: string;
    listBrand: any;
    listSector: any;
    listUn: any;
    listClasse: any;
    listGrupoFiscal: any;
    listTipoProd: any
    listNcm: any;
    msgNcm: string | undefined;
    flagRegister:boolean
}

export function ProductFormUpdate({
    handleChange,
    handleSubmit,
    children,
    handleUpdate,
    handleDelete,
    modalRef,
    className,
    close,
    alert,
    message,
    listBrand,
    listSector,
    listUn,
    listClasse,
    listGrupoFiscal,
    listTipoProd,
    listNcm,
    msgNcm,
    flagRegister,
}: PropsProductFormUpdate) {
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
            type="hidden"
            name="id_person"
            value={children.id_product || ''}
            placeholder='ID produto'
            disabled
            onChange={handleChange}
        />
        <input
            type="text"
            name="descric_product"
            value={children.descric_product || ""}
            placeholder='descrição do produto'
            onChange={handleChange}
        />
        <input
            type="text"
            name="val_max_product"
            mask-selectonfocus="true"
            maxLength={14}
            autoComplete="off"
            value={children.val_max_product || ""}
            placeholder="valor maxímo"
            onChange={handleChange}
        />
        <input
            type="text"
            name="val_min_product"
            mask-selectonfocus="true"
            maxLength={14}
            autoComplete="off"
            value={children.val_min_product || ""}
            onChange={handleChange}
            placeholder="valor mínimo"
        />

        <ul>
            <li className='m-1'>Marca {listBrand}</li>
            <li className='m-1'>Setor {listSector}</li>
            <li className='m-1'>Unidade medida {listUn}</li>
        </ul>
        <input
            type="text"
            name="bar_code"
            value={children.bar_code || ''}
            onChange={handleChange}
            placeholder='código de barras'
        />
        <input
            type="text"
            name="image"
            value={children.image || ''}
            onChange={handleChange}
            placeholder='Imagem'
        />
        {flagRegister === false ? <button onClick={handleUpdate}>Atualizar</button> : null}
        {flagRegister !== false ? <button onClick={handleSubmit}>Registrar</button> : null}
        {flagRegister === false ? <button onClick={handleDelete}>Novo</button> : null}
        <button onClick={close}>Sair</button>

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
        <div ref={modalRef} className={`${className} modal`}>
            <div className="container-global">
                <div className="main-global" id='fiscal-main'>
    {nav}
                    <form className='main-global-form'>
                    {menu === 'geral' ? <span className='m-3'>Atualizar produtos</span> : null}
                        {menu === 'fiscal' ? <><span className='m-3'>Situação fiscal do produto</span><br /></> : null}
                        <label>{alert}</label>
                        <label>{message}</label>
                        {menu === 'fiscal' ? fiscal : null}
                        {menu === "geral" ? geral : null}
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}