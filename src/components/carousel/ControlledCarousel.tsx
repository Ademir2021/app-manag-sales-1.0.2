import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div id='carousel-div'>
        <Carousel
          prevIcon=''
          nextIcon=''
          variant='dark'
          activeIndex={index}
          onSelect={handleSelect}>
          <Carousel.Item interval={800}>
            <a href='form_person'>
            <div id="carousel-item1">
              <h2>Realize suas compras aqui</h2>
              <dd>Produtos com até 10% de desconto</dd><br></br>
              <button className='btn btn-primary' onClick={() => { window.location.replace('form_person') }}>Cadastre-se</button>
            </div>
            </a>
          </Carousel.Item>

          <Carousel.Item interval={800}>
      <a href='contact'>
            <div id="carousel-item2">
              <h5>Como prefere receber a sua COMPRA</h5>
              <dd>Retire na loja ou despachamos até sua localidade</dd><br></br>
              <button className='btn btn-primary' onClick={() => { window.location.replace('contact') }}>Fale conosco</button>
              </div>
           </a> 
          </Carousel.Item>

          <Carousel.Item interval={800}>
            <a href='register'>
            <div id='carousel-item3'>
              <h2><>Acesso rápido e seguro</></h2>
              <dd>Web -Token + confiança para suas compras</dd><br></br>
              <button className='btn btn-primary' onClick={() => { window.location.replace('register') }}>Criar conta</button>
            </div>
            </a>
        
          </Carousel.Item>
          {/* <Carousel.Caption>
          </Carousel.Caption> */}
        </Carousel>
      </div>
    </>
  )
}

export default ControlledCarousel;