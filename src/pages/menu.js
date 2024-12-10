import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/custom.css';
import ModalHandler from './components/Modal';
import SliderHandler from './components/SliderHandler';
import Header from './components/Header';

const sabores = ['Chocolate', 'Vanilla', 'Morango', 'Limão', 'Coco'];
const tipos = ['Casquinha', 'Copinho', 'Taça'];
const imagens = [
  'sorvete.png',
  'sorvete1.png',
  'sorvete2.png',
  'sorvete3.png',
  'sorvete4.png'
];

const precos = {
  Chocolate: 5,
  Vanilla: 4.5,
  Morango: 5.5,
  Limão: 4,
  Coco: 5,
  Casquinha: 1,
  Copinho: 1.2,
  Taça: 1.5
};

export default function Menu() {
  const [sabor, setSabor] = useState('');
  const [tipo, setTipo] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [showTutorial, setShowTutorial] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showCarrinho, setShowCarrinho] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setShowTutorial(true);
  }, []);

  const adicionarNoCarrinho = () => {
    if (sabor && tipo) {
      const valorItem = precos[sabor] + precos[tipo];
      setCarrinho((prevCarrinho) => [
        ...prevCarrinho,
        { id: Date.now(), sabor, tipo, valor: valorItem }
      ]);
      setSabor('');
      setTipo('');
      setShowCarrinho(true); // Mostrar o modal do carrinho
    } else {
      alert('Escolha um sabor e um tipo de sorvete!');
    }
  };

  const removerDoCarrinho = (id) => {
    setCarrinho(carrinho.filter((item) => item.id !== id));
  };

  const gerarComprovante = () => {
    const total = carrinho.reduce((acc, item) => acc + item.valor, 0).toFixed(2);
    const pagamento = metodoPagamento === 'cartao' ? 'Cartão' : 'Dinheiro';
    alert(`
      Comprovante de Compra:
      Itens no Carrinho: ${carrinho.length}
      Total: R$${total}
      Método de Pagamento: ${pagamento}
    `);
  };

  return (
    <div
      style={{
        backgroundColor: 'pink',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px'
      }}
    >
      {isClient && (
        <ModalHandler showTutorial={showTutorial} setShowTutorial={setShowTutorial} />
      )}

      <div className="container mt-5 bg-light rounded p-4 shadow-lg">
        <Header />

        {/* Carrossel de Sabores */}
        <div className="my-4">
          <h2 className="text-success">Escolha o sabor:</h2>
          {isClient && (
            <SliderHandler
              items={sabores}
              prop={sabor}
              imagens={imagens}
              setState={setSabor}
            />
          )}
        </div>

        {/* Carrossel de Tipos */}
        <div className="my-4">
          <h2 style={{ color: '#a36049' }}>Escolha o tipo:</h2>
          {isClient && (
            <SliderHandler
              items={tipos}
              prop={tipo}
              imagens={imagens}
              setState={setTipo}
            />
          )}
        </div>

        {/* Ações do Carrinho */}
        <div className="d-flex justify-content-center my-4 flex-wrap">
          <button className="btn btn-success btn-lg" onClick={adicionarNoCarrinho}>
            <i className="fas fa-cart-plus"></i> Adicionar ao Carrinho
          </button>
        </div>

        {/* Modal do Carrinho */}
        {showCarrinho && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Carrinho</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowCarrinho(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <ul className="list-group">
                    {carrinho.map((item) => (
                      <li
                        key={item.id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <span>
                          <strong>{item.sabor}</strong> - {item.tipo}
                        </span>
                        <span>R${item.valor.toFixed(2)}</span>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removerDoCarrinho(item.id)}
                        >
                          Remover
                        </button>
                      </li>
                    ))}
                  </ul>
                  <h4 className="mt-3 text-right">
                    Total: R$
                    {carrinho.reduce((acc, item) => acc + item.valor, 0).toFixed(2)}
                  </h4>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      gerarComprovante();
                      setShowCarrinho(false);
                    }}
                  >
                    Gerar Comprovante
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setShowCarrinho(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
