import './Contato.css'
import mapa from '../assets/local.png'

function Contato() {
  return (
    <main>
      <div className="aviso">
        <h1>!!!AREA EM CONSTRUÇÃO!!!</h1>
        <p>O conteudo desta página está em desenvolvimento e estara diferente quando estiver pronta.</p>
      </div>

      <div className="grid">
        <div className="contato1">
          <h1 className='h1Red'>Contatos</h1>
          <p>Entre em contato conosco para <p>mais informações e venha nos</p>fazer uma visita!</p>
        </div>
        <div className="contato2">
          <h3>R. Edson Luiz Rigonatto, 1295 - Jd. Sta. Clara - Campinas/SP</h3>
          <h3>vendas.n1@gruponikkei.com.br</h3>
          <h3>Segunda a Sexta das 7h30 às 17h30
            Sábado das 7h30 às 12h
            Domingos: Fechado</h3>
        </div>
      </div>
      <div className="extraText">
        <a className='link' href="https://www.google.com/maps/place/Grupo+Nikkei+Nissei+1+-+Materiais+para+Constru%C3%A7%C3%A3o/@-22.9515018,-47.1905298,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8b76cdaaa527f:0x803cf5b0a10ba87!8m2!3d-22.9515068!4d-47.1879495!16s%2Fg%2F1q62h_1h0?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Venha construir, reformar e decorar com a Nissei 1 !</a>
      </div>
      <div className="grid2">
        <div>
          <h2>Para orçamentos envie-nos a sua lista e dados de contato preenchendo o formulário.</h2>
        </div>
        <div className="email">
          <h3>Que itens você precisa orçar?</h3>
          <input type="text" name="" id="" placeholder="Nome"/>
          <input type="text" name="" id="" placeholder="Telefone"/>
          <input type="text" name="" id="" placeholder="E-mail"/>
          <textarea name="" id="" cols="30" rows="5" placeholder="Mensagem"></textarea>
          <button>Enviar</button>
        </div>
      </div>
    </main>
  )
}

export default Contato
