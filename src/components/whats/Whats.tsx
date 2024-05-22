import { FloatingWhatsApp } from 'react-floating-whatsapp'

export function Whats() {

  // const avatar: any = <img></img>

  return (
      <FloatingWhatsApp
      phoneNumber={'+5544984623082'}
      accountName={'+5544984623082'}
      statusMessage={'Normalmente responde dentro de 1 hora'}
      chatMessage={'Olá! 🤝 \nComo podemos ajudar?'}
      placeholder={'Digite uma mensagem..'}
      // avatar={avatar}
      />
  )
}