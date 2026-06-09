import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
/*import Servicos from './pages/login(idea)'*/
import Produtos from './pages/Produtos'
import logoNikkei from './assets/logotipo-1.png'
import logofooter from './assets/logotipo-rodape.png'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div id="logo">
      <img src={logoNikkei} alt="Logo Nikkei" />
    </div>
      <nav id='menu'>
        <Link className='butt' to="/">Home</Link>
        <Link className='butt' to="/sobre">Sobre</Link>
        <Link className='butt' to="/contato">Contato</Link>
        <Link className='butt' to="/Produtos">Produtos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/Produtos" element={<Produtos />} />
      </Routes>
      <footer className="footer-nissei">
        <div id="footer-content">
           <img src={logofooter} alt="Logo" className="footer-logo" />
           <div className="footer-info">
              <p>(19) 3261-1271</p>
              <p>Campinas - SP</p>
              <p className="copyright">© 2026 Nikkei. Todos os direitos reservados.</p>
           </div>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App
