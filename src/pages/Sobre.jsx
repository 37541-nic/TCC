import nisseiloja from '../assets/img-loja.png'
import antes from '../assets/antes.jpg'
import depois from '../assets/depois.jpg'
import fundadora from '../assets/fundadora.jpeg'
import { useEffect, useState } from "react";
import './Sobre.css'

function Sobre() {
  useEffect(() => {

  const elementos = document.querySelectorAll(`
    #img-loja,
    #texto-loja,
    .titulo h1,
    #risco,
    .texto-historia,
    #img-antes,
    #img-depois,
    .caixa3 h1,
    #fundadora-foto,
    .historia-ceo,
    #h3-b
  `);

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){
        entry.target.classList.add("mostrar");
      }

    });

  }, {
    threshold: 0.2
  });

  elementos.forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();

}, []);
  return (
    <main>
      <div className='caixa1'>
        <div id='img-loja'>
          <img id='loja' src={nisseiloja} alt="" />
        </div>
        <div id='texto-loja'>
          <h1>NISSEI 1</h1>
          <p className='digitando'>
            Estamos em constante renovação para proporcionar experiências
            cada vez melhores a quem confia em nosso trabalho. Cada detalhe
            desta transformação é pensado com dedicação, cuidado e compromisso,
            para oferecer mais conforto, qualidade e excelência aos clientes que
            nos prestigiam. Evoluir faz parte da nossa essência, porque acreditamos 
            que sempre é possível entregar mais do que o esperado e tornar cada experiência
            ainda mais especial.
          </p>
        </div>
      </div>
      
      <div className='caixa2'>
        <div className='titulo'>
          <h1>Conheça nossa História</h1>
            <div id='risco'></div>
        </div>  
        <div className='texto-historia'>
          <li>Nossa trajetória começa com o sonho de empreender e construir algo sólido, baseado em trabalho, dedicação e valores familiares. Inspirados pela experiência no ramo de materiais de construção e movidos pelo desejo de recomeçar no Brasil, iniciamos nossas atividades em um pequeno espaço alugado no ano de 1995.</li>
          <li>Com esforço constante e o apoio dos clientes que acreditaram em nosso trabalho, a empresa foi crescendo e conquistando seu espaço. Pouco tempo depois, conseguimos adquirir nosso próprio terreno, onde consolidamos nossa loja e seguimos evoluindo junto com o bairro, que também se desenvolveu rapidamente ao longo dos anos.</li>
          <li>Acreditamos que crescer significa se adaptar. Por isso, passamos por constantes melhorias e modernizações, desde a estrutura física da loja até a forma de atender nossos clientes, sempre buscando mais praticidade, organização e qualidade no atendimento.</li>
          <li>Nossa história também é marcada pela força da família. Ao longo dos anos, construímos um modelo de gestão baseado na sucessão familiar, onde experiência e inovação caminham lado a lado. Essa união entre gerações nos permite manter nossos valores originais, ao mesmo tempo em que incorporamos novas ideias e tecnologias, como o atendimento digital e soluções mais ágeis para nossos clientes.</li>
          <li>Hoje, seguimos firmes com o mesmo propósito que deu início a tudo: oferecer um atendimento de confiança, próximo e de qualidade, construindo não apenas uma empresa, mas uma história sólida baseada em respeito, evolução e parceria com cada cliente que faz parte da nossa caminhada.</li>
        </div>
        <div className='antesxdepois'>
            <div id='img-antes'>
              <img src={antes} alt="" />
            </div>
                <div id='img-depois'>
                  <img src={depois} alt="" />
                </div>
        </div>
      </div>

      <div className='caixa3'>
        <h1> Paolla Sakuma / CEO </h1>
          <div id='fundadora-foto'>
            <img src={fundadora} alt="" />
          </div>
          <div className='historia-ceo'>
            <h3>“Cresci vendo meus pais transformarem trabalho em propósito. Cada cliente atendido, cada entrega realizada e cada conquista construída ao longo dos anos fizeram da nossa história muito mais do que um negócio: fizeram nascer um legado familiar baseado em confiança, dedicação e respeito pelas pessoas.
              Hoje, ter a oportunidade de continuar essa trajetória ao lado da minha família é motivo de muito orgulho e também de responsabilidade. Meu desejo é preservar os valores que construíram nossa empresa desde o início, mas sempre olhando para o futuro, buscando inovação, evolução e novas formas de atender cada vez melhor nossos clientes.
              Acredito que uma empresa familiar carrega algo especial: ela transmite verdade, proximidade e compromisso. E é exatamente isso que queremos continuar oferecendo todos os dias um atendimento humano, produtos de qualidade e a certeza de que cada cliente faz parte da nossa caminhada.
              Seguiremos crescendo sem esquecer nossas raízes, honrando tudo o que foi construído até aqui e preparando o caminho para as próximas gerações.”
            </h3>
            <h3 id='h3-b'>
              Após 32 anos de história, o que mais prezamos é oferecer um atendimento próximo e produtos de qualidade para cada cliente. Acreditamos que confiança se constrói nos detalhes, no cuidado e no compromisso diário. Porque, para nós, isso é ser Nissei.
            </h3>
          </div>
      </div>
    </main>
  )
}

export default Sobre
