import { useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Carrinho() {
  const [cpf, setCpf] = useState('');
  const [formaPagamento, setFormaPagamento] = useState('');
  const [troco, setTroco] = useState(null);
  const router = useRouter();

  const calcularTroco = (valorPago) => {
    const valorTotal = 15;
    if (valorPago >= valorTotal) {
      setTroco(valorPago - valorTotal);
    } else {
      alert('Valor insuficiente!');
    }
  };

  const finalizarCompra = () => {
    if (!cpf || !formaPagamento) {
      alert('Preencha todos os campos!');
    } else {
      router.push('/extrato');
    }
  };

  return (
    <div className="container-fluid mt-5 bg-light rounded p-4 shadow-lg">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <h1 className="text-center text-primary">Carrinho</h1>
          <p>Total: <strong>R$15,00</strong></p>

          <div className="form-group">
            <label>CPF (opcional para nota):</label>
            <input
              type="text"
              className="form-control"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <h2 className="mt-3">Forma de pagamento:</h2>
          <div className="btn-group btn-group-toggle d-flex justify-content-around" role="group" aria-label="Forma de pagamento">
            <button
              className={`btn ${formaPagamento === 'cartao' ? 'btn-primary' : 'btn-outline-primary'} mx-2 w-100`}
              onClick={() => setFormaPagamento('cartao')}
            >
              <i className="fas fa-credit-card"></i> Cartão
            </button>
            <button
              className={`btn ${formaPagamento === 'dinheiro' ? 'btn-secondary' : 'btn-outline-secondary'} mx-2 w-100`}
              onClick={() => setFormaPagamento('dinheiro')}
            >
              <i className="fas fa-money-bill-wave"></i> Dinheiro
            </button>
          </div>

          {formaPagamento === 'dinheiro' && (
            <div className="form-group mt-3">
              <label>Valor Pago:</label>
              <input
                type="number"
                className="form-control"
                onChange={(e) => calcularTroco(Number(e.target.value))}
                placeholder="Digite o valor pago"
              />
              {troco !== null && (
                <p className="mt-2 text-success">
                  Troco: <strong>R${troco.toFixed(2)}</strong>
                </p>
              )}
            </div>
          )}

          <button className="btn btn-success mt-4 w-100" onClick={finalizarCompra}>
            Finalizar Compra
          </button>
        </div>
      </div>

      {/* Exibição dos sabores de sorvete com imagens responsivas */}
      <div className="row mt-4">
        <h3 className="text-center w-100">Sabores de Sorvete</h3>
        <div className="d-flex flex-wrap justify-content-center">
          {/* Exemplo de 4 sabores de sorvete */}
          <div className="col-6 col-md-4 mb-3">
            <img src="/img/sorvetes/sorvete1.png" alt="Sorvete 1" className="img-fluid" />
          </div>
          <div className="col-6 col-md-4 mb-3">
            <img src="/img/sorvetes/sorvete2.png" alt="Sorvete 2" className="img-fluid" />
          </div>
          <div className="col-6 col-md-4 mb-3">
            <img src="/img/sorvetes/sorvete3.png" alt="Sorvete 3" className="img-fluid" />
          </div>
          <div className="col-6 col-md-4 mb-3">
            <img src="/img/sorvetes/sorvete4.png" alt="Sorvete 4" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
