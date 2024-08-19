type Props = {
    children: any
    handleChange: any
    handleSubmit: any
}

export function NotaRecebidaForm({
    children,
    handleChange,
    handleSubmit,
}: Props) {
    return (
        <div className="container-global">
            <div className="main-global">
            {/* <p>Lançamento de nota de entrada</p> */}
                <div className="main-global-form">
                    <b>Dados da Nota</b>
                    <dd>ID do Fornecedor</dd>
                    <input
                        type='number'
                        name="fkFornecedor"
                        value={children.fkFornecedor || ''}
                        onChange={handleChange}
                        placeholder="ID do Fornecedor"
                    />
                    <dd>Emissão</dd>
                    <input
                        type='date'
                        name="emissao"
                        value={children.emissao || new Date().toISOString()}
                        onChange={handleChange}
                    />
                    <dd>Número da Nota</dd>
                       <input
                        type='text'
                        name="numNota"
                        value={children.numNota || ''}
                        onChange={handleChange}
                        placeholder="Número da Nota"
                    />
                      {/* <dd>Modelo da Nota</dd> */}
                       <input
                        type='text'
                        name="modelo"
                        value={children.modelo || ''}
                        onChange={handleChange}
                        placeholder="Modelo da Nota"
                        hidden
                    />
                      <dd>Valor do Frete</dd>
                       <input
                        type='number'
                        name="vFrete"
                        value={children.vFrete || ''}
                        onChange={handleChange}
                        placeholder="Valor do Frete"
                        // hidden
                    />
                      {/* <dd>Valor do Seguro</dd> */}
                       <input
                        type='number'
                        name="vSeguro"
                        value={children.vSeguro || ''}
                        onChange={handleChange}
                        placeholder="Valor do Seguro"
                        hidden
                    />
                      {/* <dd>Despesas Acessorias</dd> */}
                       <input
                        type='number'
                        name="despAcessorias"
                        value={children.despAcessorias || ''}
                        onChange={handleChange}
                        placeholder="Despesas Acessorias"
                        hidden
                    />
                      {/* <dd>Encargos</dd> */}
                       <input
                        type='number'
                        name="encargos"
                        value={children.encargos || ''}
                        onChange={handleChange}
                        placeholder="Encargos"
                        hidden
                    />
                      {/* <dd>Acréscimo</dd> */}
                       <input
                        type='number'
                        name="acrescimo"
                        value={children.acrescimo || ''}
                        onChange={handleChange}
                        placeholder="Acréscimo"
                        hidden
                    />
                      {/* <dd>Desconto</dd> */}
                       <input
                        type='number'
                        name="desconto"
                        value={children.desconto || ""}
                        onChange={handleChange}
                        placeholder="Desconto"
                        hidden
                    />
                      <dd>Total dos Produtos</dd>
                       <input
                        type='number'
                        name='tProdutos'
                        value={children.tProdutos || ''}
                        onChange={handleChange}
                        placeholder='Total dos Produtos'
                        disabled
                    />
                      <dd>Total Nota</dd>
                       <input
                        type='number'
                        name="total"
                        value={children.total || ''}
                        onChange={handleChange}
                        placeholder="Total Nota"
                        disabled
                    />
                    <button
                        className='btn btn-primary'
                        onClick={handleSubmit}
                    >Inserir Dados</button>
                </div>
            </div>
        </div>
    )
}