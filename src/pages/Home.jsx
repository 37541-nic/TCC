import ex1 from '../assets/ex1.webp'
import ex2 from '../assets/ex2.webp'
import ex3 from '../assets/ex3.webp'
import hidraulica from '../assets/hidraulica.webp'
import iluminacao from '../assets/iluminação.webp'
import acabamento from '../assets/acabamentos.webp'
import Atual from '../assets/AT.png'
import pintura from '../assets/P&P.png'
import ferramentas from '../assets/Fet.png'
import ferragens from '../assets/feg.png'
import infop from '../assets/ferramenta.png'
import './Home.css'

function Home() {
  return (
    <main>
      <section id="presentation" className="hero-full-bg">
        <div className="hero-overlay">
          <div className="hero-text-container">
            <h1>
              <span className="destaque-red">Reformar,</span>
              <br /> construir e curtir.
            </h1>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="service-header">
          <p className="subtitle-red">Tudo num só lugar!</p>
          <h2>O atendimento personalizado é o seu melhor aliado na hora da compra!</h2>
        </div>
        <div id="service-options">
          <div className="service-coluna">
            <div className="icon-circle">
              <img src={Atual} alt="" />
            </div>
            <h3>Atualização</h3>
            <p>equipe sempre atualizada com os melhores e mais recentes produtos para lhe indicar e explicar.</p>
          </div>
          <div className="service-coluna">
             <div className="icon-circle">
              <img src={pintura} alt="" />
             </div>
             <h3>Pintura & Proteção</h3>
             <p>A tinta certa para cada caso, impermeabilizantes e vernizantes.Conte com as dicas do nosso time!</p>
          </div>
          <div className="service-coluna">
             <div className="icon-circle">
              <img src={ferramentas} alt="" />
             </div>
             <h3>Ferramentas</h3>
             <p>Comprar online é otimo mas comprar ao vivo é bem melhor e a garantia da escolha certa!</p>
          </div>
          <div className="service-coluna">
             <div className="icon-circle">
              <img src={ferragens} alt="" />
             </div>
             <h3>Ferragens</h3>
             <p>Confira conosco milhares de opções de ferragens para aplicações em todo tipo de material.</p>
          </div>
        </div>
      </section>
      <div id="slider" className="galeria-fotos">
        <img src={ex1} alt="Exemplo 1" />
        <img src={ex2} alt="Exemplo 2" />
        <img src={ex3} alt="Exemplo 3" />
      </div>
      <div className='h1s'>
        <h1 id='h1-1'>Para todas as fases! </h1>
          <h1 id='h1-2'>Do alicerce ao telhado.</h1>
            <h1 id='h1-3'>Você encontra tudo aqui!</h1>
      </div>
      <div className='info'>
        <img src={infop} alt="" />
        <div className="aaa">
          <div className='info1'>
            <h1>+ 30</h1>
          <p>anos de experiência</p>
          </div>
          <div className='info2'>
            <h1>+100000</h1>
          <p>clientes satisfeitos</p>
          </div>
          <div className='info3'>
            <h1>+150</h1>
          <p>entregas ao mês</p>
          </div>
          <div className='infoimg'></div>
          <div className='info4'>
            <h1>12</h1>
          <p>Toneladas entregues mensalmente</p>
          </div>
        </div>
      </div>
      <div id='imgs'> 
        <div className="services">
          <img  src={hidraulica} alt="hidraulica" className='img-hidraulica'/>
          <h1 className='h1-hidraulica'>Elétrica/Hidráulica</h1>
        </div>
        <div className="services">
          <img src={acabamento} alt="acabamento" className='img-acabamento'/>
          <h1 className='h1-acabamento'>Acabamentos</h1>
        </div>
        <div className="services">
          <img src={iluminacao} alt="iluminacao" className='img-iluminacao' />
          <h1 className='h1-iluminacao'>Decoração</h1>
        </div> 
      </div>
    </main>
  )
}

export default Home
