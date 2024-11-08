import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [nome, setNome] = useState('');
  const [showSobre, setShowSobre] = useState(false);
  const [showContatos, setShowContatos] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome) {
      router.push('/menu');
    } else {
      alert('Por favor, digite seu nome!');
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center w-100 h-100" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/bg.jpg)',  // A imagem de fundo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 text-center bg-light p-4 rounded shadow-lg">
        <h1 className="text-primary mb-4">
          <i className="fas fa-ice-cream"></i> Bem-vindo à Sorveteria!
        </h1>
        <form onSubmit={handleSubmit} className="text-center">
          <div className="form-group">
            <label htmlFor="nome" className="text-dark">
              <i className="fas fa-user"></i> Qual é o seu nome?
            </label>
            <input
              type="text"
              className="form-control"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              required
              aria-label="Nome do usuário"
            />
          </div>
          <button type="submit" className="btn btn-success mt-3 w-100">
            <i className="fas fa-sign-in-alt"></i> Entrar
          </button>
        </form>
        <button 
          onClick={() => setShowSobre(true)} 
          className="btn btn-primary mt-3 w-100" 
          aria-label="Sobre Mim"
        >
          Sobre Mim
        </button>
        <button 
          onClick={() => setShowContatos(true)} 
          className="btn btn-secondary mt-2 w-100" 
          aria-label="Contatos"
        >
          Contatos
        </button>
      </div>

      {/* Modal Sobre Mim */}
      {showSobre && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1050 }}
          onClick={() => setShowSobre(false)}
        >
          <div className="bg-light p-4 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-center text-primary">Sobre Mim</h2>
            <p className="text-center">Sou apaixonado por sorvetes e desenvolvedor de sites deliciosos!</p>

            {/* Adicionando o conteúdo do portfólio dentro do modal */}
            <div 
              className="position-relative d-flex align-items-center justify-content-start"
              style={{
                height: '50vh',  // Tamanho da tela para o vídeo
                overflow: 'hidden',  // Evita que o conteúdo se estenda além da área visível
                backgroundColor: '#000',  // Cor de fundo preta
                color: '#fff',  // Texto branco
                padding: '0 20px'  // Espaçamento nas laterais
              }}
            >
              {/* Background Video */}
              <iframe
                id="background-video"
                src="https://www.youtube.com/embed/8Qbax_1szSs?autoplay=1&mute=1&loop=1&playlist=8Qbax_1szSs"
                title="Background Video"
                frameBorder="0"
                allow="autoplay; loop; encrypted-media"
                allowFullScreen
                style={{
                  position: 'fixed',  // Fixar o vídeo como fundo
                  top: 0,  // Iniciar no topo da tela
                  left: 0,  // Iniciar na esquerda
                  width: '100vw',  // Cobrir toda a largura da tela
                  height: '100vh',  // Cobrir toda a altura da tela
                  zIndex: -1  // Colocar atrás de outros elementos
                }}
              ></iframe>

              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h1 className="display-4">Bem-vindo ao meu Portfólio!</h1>
                    <p className="lead mt-4">
                      Eu sou um apaixonado por tecnologia e desenvolvedor web.
                      Neste portfólio, você verá meus projetos e habilidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              className="btn btn-danger w-100 mt-3" 
              onClick={() => setShowSobre(false)}
              aria-label="Fechar Sobre Mim"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Modal Contatos */}
      {showContatos && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 1050 }}
          onClick={() => setShowContatos(false)}
        >
          <div className="bg-light p-4 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-center text-secondary">Contatos</h2>
            <p className="text-center">Email: contato@sorveteria.com.br</p>
            <p className="text-center">Telefone: (11) 1234-5678</p>
            <button 
              className="btn btn-danger w-100 mt-3" 
              onClick={() => setShowContatos(false)}
              aria-label="Fechar Contatos"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
