import { useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [nome, setNome] = useState('');
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
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', background: 'url(/path/to/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
            />
          </div>
          <button type="submit" className="btn btn-success mt-3 w-100">
            <i className="fas fa-sign-in-alt"></i> Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
