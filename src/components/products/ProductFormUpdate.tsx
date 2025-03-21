import { useState } from 'react';

import '../../index'

type Props = {
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
    flagRegister: boolean
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
}: Props) {
    const [menu, setMenu] = useState("geral")
    const nav = <>
        <div>
            <button
                className='btn btn-primary'
                id='m-2'
                onClick={() => (setMenu('geral'))}
            >Produto</button>
            <button
                className='btn btn-primary'
                id='m-2'
                onClick={() => (setMenu('fiscal'))}
            >Situação fiscal</button>
        </div>
    </>

    const geral = <>
        <input
            id='main-input'
            type="hidden"
            name="id_person"
            value={children.id_product || ''}
            placeholder='ID produto'
            disabled
            onChange={handleChange}
        />
        <input
            id='main-input'
            type="text"
            name="descric_product"
            value={children.descric_product || ""}
            placeholder='descrição do produto'
            onChange={handleChange}
        />
        <input
            id='main-input-number'
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
            id='main-input-number'
            type="text"
            name="val_min_product"
            mask-selectonfocus="true"
            maxLength={14}
            autoComplete="off"
            value={children.val_min_product || ""}
            onChange={handleChange}
            placeholder="valor mínimo"
        />

        <div>
            {listBrand}
            {listSector}
            {listUn}
        </div>
        <input
            id='main-input'
            type="text"
            name="bar_code"
            value={children.bar_code || ''}
            onChange={handleChange}
            placeholder='código de barras'
        />
        <input
            id='main-input'
            type="text"
            name="image"
            value={children.image || ''}
            onChange={handleChange}
            placeholder='Imagem'
        />
        {alert && <div id='msg-red'>{alert}</div>}
        {alert && <div id='msg-red'>{message}</div>}
        {flagRegister === false ? <button className='btn btn-primary' id='m-2' onClick={handleUpdate}>Atualizar</button> : null}
        {flagRegister !== false ? <button className='btn btn-primary' id='m-2' onClick={handleSubmit}>Registrar</button> : null}
        {flagRegister === false ? <button className='btn btn-primary' id='m-2' onClick={handleDelete}>Novo</button> : null}
        <button className='btn btn-primary' id='m-2' onClick={close}>Sair</button>

    </>

    const fiscal = <div>
        <div>Classe {listClasse}</div>
        <div>Grupo Fiscal {listGrupoFiscal}</div>
        <div>Tipo de Produto {listTipoProd}</div>
        <div>Pesquise o NCM do Produto {listNcm}</div>
        <span id='m-2'>{msgNcm}</span>
    </div>

    return (
        <>
            <div ref={modalRef} className={`${className} modal`}>
    
                <div id='container'>
                    <div id='m-2'>
                    {nav}
                    </div>
                </div>
                <div id="container">

                    <form id='main'>
                        {menu === 'geral' ? <span className='m-3'>Atualizar Produto</span> : null}
                        {menu === 'fiscal' ? <><span className='m-3'>Situação fiscal do Produto</span><br /></> : null}
                        {menu === 'fiscal' ? fiscal : null}
                        {menu === "geral" ? geral : null}
                    </form>
                </div>
            </div>
        </>
    )
}