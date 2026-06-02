import './Produtos.css'
import React, { useState, useEffect } from 'react';
import img1 from '../assets/image.png';
import img2 from '../assets/image2.png';

export default function App() {
  // Estado para a lista de produtos
  const [produtos, setProdutos] = useState([]);
  
  // Estados para o formulário
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagemPreview, setImagemPreview] = useState(null);

  // Função para processar a imagem local
  const handleImageChange = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagemPreview(reader.result);
      };
      reader.readAsDataURL(arquivo);
    }
  };

  // Adicionar produto à lista
  const adicionarProduto = (e) => {
    e.preventDefault();
    const novo = {
      id: Date.now(),
      nome,
      descricao,
      imagem: imagemPreview || 'https://via.placeholder.com/150'
    };
    setProdutos([...produtos, novo]);
    
    // Resetar formulário
    setNome('');
    setDescricao('');
    setImagemPreview(null);
  };

  return (
    <main>
      <div className="conteudo-centralizado">
        <section className="hero-grid">
          <img src={img1} alt="Prateleiras" className="img-arredondada" />
          <img src={img2} alt="Atendimento" className="img-arredondada" />
        </section>

        <section className="admin-cadastro">
          <h3>Cadastrar Novo Produto</h3>
          <form onSubmit={adicionarProduto} className="form-cadastro">
            <input 
              type="text" 
              placeholder="Nome do produto" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
              required 
            />
            <input 
              type="text" 
              placeholder="Descrição curta" 
              value={descricao} 
              onChange={(e) => setDescricao(e.target.value)} 
            />
            <label className="btn-upload">
              {imagemPreview ? "✓ Foto Carregada" : "Selecionar Imagem"}
              <input type="file" accept="image/*" onChange={handleImageChange} hidden />
            </label>
            <button type="submit" className="btn-salvar">Adicionar à Lista</button>
          </form>
        </section>

        <section className="produtos-secao">
          <div className="produtos-header">
            <h1>Produtos</h1>
            <div className="filtros">
              <button>Ordenar por Tipo: <strong>Mostrar mais ▾</strong></button>
              <button>Filtrar produto <span>⊶</span></button>
            </div>
          </div>

          <div className="product-grid">
            {produtos.length === 0 ? (
              [1, 2, 3, 4].map(i => <div key={i} className="card-vazio"></div>)
            ) : (
              produtos.map(p => (
                <div key={p.id} className="card-produto-real">
                  <img src={p.imagem} alt={p.nome} />
                  <div className="card-info">
                    <h4>{p.nome}</h4>
                    <p>{p.descricao}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="pagination-area">
            <p>Você viu {produtos.length} de 100 produtos</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${produtos.length}%` }}></div>
            </div>
            <button className="btn-ver-mais">Ver Mais</button>
          </div>
        </section>
      </div>
    </main>
  );
}
