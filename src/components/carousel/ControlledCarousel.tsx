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
          <Carousel.Item interval={200}>
            <div id="carousel-item1">
              <img src='img\carousel\Banner1.png' className='carousel-img-banner' alt='' />
              <div id='carousel-item1-div'>
                <h2>Realize suas compras aqui</h2>
                <dd>Produtos com até 10% de desconto</dd>
                <button className='btn btn-primary' onClick={() => { window.location.replace('form_person') }}>Cadastre-se</button>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={400}>
            <div id="carousel-item2">
              <img src='img\carousel\banner2.png' className='carousel-img-banner' alt='' />
              <div id='carousel-item2-div'>
                <h5>Como prefere receber a sua COMPRA</h5>
                <dd>Retire na loja ou despachamos até sua localidade</dd>
                <button className='btn btn-primary' onClick={() => { window.location.replace('contact') }}>Fale conosco</button>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={400}>
            <div id='carousel-item3'>
              <img src='img\carousel\banner3.png' className='carousel-img-banner' alt='' />
              <div id='carousel-item3-div'>
                <h2><>Acesso rápido e seguro</></h2>
                <dd>WEB-Token + confiança para suas compras</dd>
                <button className='btn btn-primary' onClick={() => { window.location.replace('register') }}>Criar conta</button>
              </div>
            </div>
          </Carousel.Item>
          {/* <Carousel.Caption>
          </Carousel.Caption> */}
        </Carousel>
      </div>
    </>
  )
}

export default ControlledCarousel;