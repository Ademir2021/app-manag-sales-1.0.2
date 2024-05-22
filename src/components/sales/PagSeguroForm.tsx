import { Globais } from '../globais/Globais';
import '../global-module.css'
import { currencyFormat } from '../utils/currentFormat/CurrentFormat';
import { LogoIn } from '../utils/logoIn/LogoIn';

type TPaymentSaleForm = {
    children?:any
    handleBoleto: any
    handleQrCode: any
    qrcode_img: string
    payPix: number | string;
    datavenc: Date | string | any
    setInt: any
    qrCodeGeneratedSuccessfully?: any
    barCodeBoleto: string
    barCodeBoletoFormated: string
    paySale: number
    URLNoteSubmit: number
    error: string
}
export function PagSeguroForm({
    handleBoleto,
    handleQrCode,
    qrcode_img,
    payPix,
    datavenc,
    setInt,
    qrCodeGeneratedSuccessfully,
    barCodeBoleto,
    barCodeBoletoFormated,
    paySale,
    URLNoteSubmit,
    error
}: TPaymentSaleForm) {
    return (
        <>
            <div className='container-global'>
                <div className='main-global'>
                    <LogoIn />
                    <p>Pague com BOLETO ou PIX</p>
                    <p>{currencyFormat(paySale)}</p>
                    {<form className='main-global-form' >
                        <button className='btn btn-primary' onClick={handleBoleto}>Emitir BOLETO</button>
                        <dd>Informe o melhor vencimento para o boleto</dd>
                        <input type="date" value={datavenc} onChange={(e) => setInt(e.target.value)} />
                        {barCodeBoleto !== "" ? <div className='text-center' ><dd>Código de Barras gerado com sucesso !</dd>
                            <hr></hr>
                            <dd>{"< CÓDIGO DE BARRAS SEM FORMATAÇÃO />"}</dd>
                            <strong style={{ fontSize: '10px' }}>{barCodeBoleto}</strong>
                            <dd>{"< CÓDIGO DE BARRAS FORMATADO />"}</dd>
                            <strong style={{ fontSize: '10px' }}>{barCodeBoletoFormated}</strong></div> :
                            <dd>Aguardando código de barras</dd>}
                        <hr></hr>
                        <button className='btn btn-primary' onClick={handleQrCode}>Gerar QR-CODE</button>
                        {qrcode_img ? <img className='payment-sale-img-qrcode' src={qrcode_img}></img> : null}
                        <dd><b>PIX</b> {payPix}</dd>
                        <label>{error}</label>
                        <>{<label>{qrCodeGeneratedSuccessfully}</label>}</>
                        <hr></hr>
                        <>{URLNoteSubmit ? <a href={Globais.URL_NOTE + '/' + URLNoteSubmit}>Emitir Nota</a> : null}</>
                        <>{URLNoteSubmit ? <a href='/dashboardefault'>Sair</a> : null}</>
                    </form >}
                </div>
            </div>
        </>
    )
}
