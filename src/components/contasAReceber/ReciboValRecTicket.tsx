import { TReciboValRec } from "../../useCases/contasAReceber/type/TContasAReceber"
import { Globais } from "../globais/Globais";
import { LogoIn } from "../utils/logoIn/LogoIn";

type Props = {
    recibo?: TReciboValRec
}

export function ReciboValRecticket({ recibo }: Props) {

    let valor:any = recibo?.valor
    valor = parseFloat(valor).toFixed(2)

    return (
        <div className="container-global">
            <div className="main-global">
                <div className="main-global-form">
                    <LogoIn/>
                    <div className="text-center">Comprovante de pagamento</div>
                    <dd className="text-center">{recibo?.data_rec}</dd>
                    <hr></hr>
                    <div>Valor do pagamento</div>
                    <b>R$ {valor}</b>
                    <hr></hr>
                    <b>Favorecido</b>
                    <p>{Globais.company}</p>
                    <p>CNPJ  {Globais.CNPJ}</p>
                    <hr></hr>
                    <b>Referencias</b>
                    <div>ID {recibo?.id}</div>
                    <div>Título {recibo?.conta}</div>
                    <div>Venda {recibo?.venda}</div>
                    <div>User {recibo?.user}</div>
                    {/* <div>Data Recebimento {recibo?.data_rec}</div> */}
                    <div>Descrição {recibo?.descricao}</div>
                    <hr></hr>
                    <b>Pagador</b>
                    <div>ID Cliente {recibo?.id_cliente}</div>
                    <div>Cliente {recibo?.nome_cliente}</div>
                    <div>Cpf {recibo?.cpf}</div>
                    <hr></hr>
                    <dd>
                        {"Comprovante emitido por " + Globais.company + 
                        ' no ato do recebimento pelo Cliente/Pagador em Caso de dúvidas '
                        + 'entre em contato pelo Tel: (44) 98852-1033.' }
                    </dd>
                    <br />
                </div>
            </div>
        </div>
    )
}