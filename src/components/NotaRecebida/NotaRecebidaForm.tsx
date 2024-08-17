import { TItems } from "../../useCases/NotaRecebida/type/TNotaRecebida"

type Props = {
    children: any
    handeChange: any
    handleSubmit: any
}

export function NotaRecebidaForm({
    children,
    handeChange,
    handleSubmit,

}: Props) {

    const contasReceber =
        <div className="container-global">
            <div className="main-global">
                <div className="main-global-form">
                    <b>Dados da Nota</b>
                    <dd>Código do Fornecedor</dd>
                    <input
                        type='number'
                        name="fkFornecedor"
                        value={children.fkFornecedor || ''}
                        onChange={handeChange}
                        placeholder="Código do Fornecedor"
                    />
                    <dd>Data</dd>
                    <input
                        type='date'
                        name="data"
                        value={children.data}
                        onChange={handeChange}
                    />
                    <dd>Emissão</dd>
                    <input
                        type='date'
                        name="emissao"
                        value={children.emissao}
                        onChange={handeChange}
                    />

                    <button
                        className='btn btn-primary'
                        onClick={handleSubmit}
                    >Gravar Nota</button>
                </div>
            </div>
        </div>

   

   
    return (
        <>
            <p className="text-center p-3">Nota Recebida</p>
            {contasReceber}
        </>
    )
}