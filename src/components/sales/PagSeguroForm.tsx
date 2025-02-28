import { Globais } from '../globais/Globais';
import { NavBar } from '../navbar/Navbar';
import { currencyFormat } from '../utils/currentFormat/CurrentFormat';


import './css/styles.css'

type Props = {
    children?: any
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
}: Props) {
    return (
        <>
            <NavBar />
            <hr></hr>
            <div id='container-invoice'>
                {<form id='form-invoice' >
                    <h1 className='text-center p-3'>Pague com PIX ou Boleto</h1>
                    <p>{currencyFormat(paySale)}</p>
                    <button className='btn btn-primary' onClick={handleBoleto}>Emitir BOLETO</button>
                    <label>Informe o melhor vencimento para o boleto</label>
                    <input type="date" value={datavenc} onChange={(e) => setInt(e.target.value)} />
                    {barCodeBoleto !== "" ? <div className='text-center' ><label>Código de Barras gerado com sucesso !</label>
                        <hr></hr>
                        <label>{"< CÓDIGO DE BARRAS SEM FORMATAÇÃO />"}</label>
                        <strong style={{ fontSize: '10px' }}>{barCodeBoleto}</strong>
                        <label>{"< CÓDIGO DE BARRAS FORMATADO />"}</label>
                        <strong style={{ fontSize: '10px' }}>{barCodeBoletoFormated}</strong></div> :
                        <label>Aguardando código de barras</label>}
                    <hr></hr>
                    <button className='btn btn-primary' onClick={handleQrCode}>Gerar QR-CODE</button>
                    {qrcode_img ? <img className='payment-sale-img-qrcode' src={qrcode_img}></img> : null}
                    <label><b>PIX</b> {payPix}</label>
                    <label>{error}</label>
                    <>{<label>{qrCodeGeneratedSuccessfully}</label>}</>
                    <hr></hr>
                    <>{URLNoteSubmit ? <a href={Globais.URL_NOTE + '/' + URLNoteSubmit}>Emitir Nota</a> : null}</>
                    <>{URLNoteSubmit ? <a href='/dashboardefault'>Sair</a> : null}</>
                </form >}
            </div>
        </>
    )
}
