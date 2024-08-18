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
    return (
        <div className="container-global">
            <div className="main-global">
            <p>Lançamento de nota de entrada</p>
                <div className="main-global-form">
                    <b>Dados da Nota</b>
                    <dd>ID do Fornecedor</dd>
                    <input
                        type='number'
                        name="fkFornecedor"
                        value={children.fkFornecedor || ''}
                        onChange={handeChange}
                        placeholder="ID do Fornecedor"
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
                    <dd>Número da Nota</dd>
                       <input
                        type='text'
                        name="numNota"
                        value={children.numNota || ''}
                        onChange={handeChange}
                        placeholder="Número da Nota"
                    />
                      <dd>Modelo da Nota</dd>
                       <input
                        type='text'
                        name="modelo"
                        value={children.modelo || ''}
                        onChange={handeChange}
                        placeholder="Modelo da Nota"
                    />
                      <dd>Valor do Frete</dd>
                       <input
                        type='number'
                        name="vFrete"
                        value={children.vFrete || ''}
                        onChange={handeChange}
                        placeholder="Valor do Frete"
                    />
                      <dd>Valor do Seguro</dd>
                       <input
                        type='number'
                        name="vSeguro"
                        value={children.vSeguro || ''}
                        onChange={handeChange}
                        placeholder="Valor do Seguro"
                    />
                      <dd>Despesas Acessorias</dd>
                       <input
                        type='number'
                        name="despAcessorias"
                        value={children.despAcessorias || ''}
                        onChange={handeChange}
                        placeholder="Despesas Acessorias"
                    />
                      <dd>Encargos</dd>
                       <input
                        type='number'
                        name="encargos"
                        value={children.encargos || ''}
                        onChange={handeChange}
                        placeholder="Encargos"
                    />
                      <dd>Acréscimo</dd>
                       <input
                        type='number'
                        name="acrescimo"
                        value={children.acrescimo || ''}
                        onChange={handeChange}
                        placeholder="Acréscimo"
                    />
                      <dd>Desconto</dd>
                       <input
                        type='number'
                        name="desconto"
                        value={children.desconto || ""}
                        onChange={handeChange}
                        placeholder="Desconto"
                    />
                      <dd>Total dos Produtos</dd>
                       <input
                        type='number'
                        name='tProdutos'
                        value={children.tProdutos || ''}
                        onChange={handeChange}
                        placeholder='Total dos Produtos'
                        disabled
                    />
                      <dd>Total Nota</dd>
                       <input
                        type='number'
                        name="total"
                        value={children.total || ''}
                        onChange={handeChange}
                        placeholder="Total Nota"
                        disabled
                    />
                    <button
                        className='btn btn-primary'
                        onClick={handleSubmit}
                    >Gravar Nota</button>
                </div>
            </div>
        </div>
    )
}