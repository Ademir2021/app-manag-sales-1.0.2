import { FloatingWhatsApp } from 'react-floating-whatsapp'

export function Whats() {
  // const avatar: any = <img ref="ssl_cert"/>
  return (
    <>
      <FloatingWhatsApp
      phoneNumber={'+55988521033'}
      accountName={'+55 (44) 98852-1033'}
      statusMessage={'Em breve retornamos sua mensagem, obrigado.'}
      chatMessage={'Olá! 🤝 \nComo podemos ajudar?'}
      placeholder={'Digite aqui sua mensagem ...'}
      // avatar={avatar}
      />
    </>
  )
}