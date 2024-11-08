import { useState } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';

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
  'Chocolate': 5,
  'Vanilla': 4.5,
  'Morango': 5.5,
  'Limão': 4,
  'Coco': 5,
  'Casquinha': 1,
  'Copinho': 1.2,
  'Taça': 1.5
};

export default function Menu() {
  const [sabor, setSabor] = useState('');
  const [tipo, setTipo] = useState('');
  const [carrinho, setCarrinho] = useState([]);
  const [metodoPagamento, setMetodoPagamento] = useState('');
  const router = useRouter();

  // Função para adicionar no carrinho
  const adicionarNoCarrinho = () => {
    if (sabor && tipo) {
      const valorItem = precos[sabor] + precos[tipo];
      setCarrinho(prevCarrinho => [
        ...prevCarrinho,
        { sabor, tipo, valor: valorItem }
      ]);
      setSabor('');
      setTipo('');
    } else {
      alert('Escolha um sabor e um tipo de sorvete!');
    }
  };

  const irParaCarrinho = () => {
    router.push('/carrinho');
  };

  // Função para gerar o comprovante
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

  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
      <div className="container mt-5 bg-light rounded p-4 shadow-lg">
        <h1 className="text-center text-primary mb-4">
          <i className="fas fa-ice-cream"></i> Cardápio Sorveteria
        </h1>

        {/* Carrossel de Sabores */}
        <div className="my-4">
          <h2 className="text-success">Escolha o sabor:</h2>
          <Slider {...settings}>
            {sabores.map((s, index) => (
              <div key={s} className="text-center">
                <button
                  className={`btn ${sabor === s ? 'btn-warning' : 'btn-outline-warning'} btn-lg m-2`}
                  onClick={() => setSabor(s)}
                >
                  <img 
                    src={`/img/sorvetes/${imagens[index]}`} 
                    alt={s} 
                    style={{ 
                      width: '100%', 
                      maxWidth: 150, 
                      marginRight: 10,
                      backgroundColor: 'transparent'
                    }} 
                  />
                  {s}
                </button>
              </div>
            ))}
          </Slider>
        </div>

        {/* Carrossel de Tipos */}
        <div className="my-4">
          <h2 className="text-info">Escolha o tipo:</h2>
          <Slider {...settings}>
            {tipos.map((t) => (
              <div key={t} className="text-center">
                <button
                  className={`btn ${tipo === t ? 'btn-danger' : 'btn-outline-danger'} btn-lg m-2`}
                  onClick={() => setTipo(t)}
                >
                  <i className="fas fa-cone"></i> {t}
                </button>
              </div>
            ))}
          </Slider>
        </div>

        {/* Ações do Carrinho */}
        <div className="d-flex justify-content-between my-4 flex-wrap">
          <button className="btn btn-success btn-lg" onClick={adicionarNoCarrinho}>
            <i className="fas fa-cart-plus"></i> Adicionar ao Carrinho
          </button>
          <button 
            className="btn btn-info btn-lg ml-2" 
            onClick={irParaCarrinho}
            style={{ margin: '5px' }}
          >
            <i className="fas fa-shopping-cart"></i> Ir para o Carrinho
          </button>
        </div>

        {/* Exibição do Carrinho */}
        <h3 className="mt-4">Carrinho</h3>
        <ul className="list-group">
          {carrinho.map((item, index) => (
            <li key={index} className="list-group-item">
              <strong>{item.sabor}</strong> - {item.tipo} 
              <span className="float-right">R${item.valor.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h4 className="mt-3 text-right">Total: R${carrinho.reduce((acc, item) => acc + item.valor, 0).toFixed(2)}</h4>

        {/* Opção de Método de Pagamento */}
        <div className="my-4">
          <h2 className="text-primary">Escolha o método de pagamento:</h2>
          <div className="d-flex justify-content-between">
            <button
              className={`btn ${metodoPagamento === 'cartao' ? 'btn-success' : 'btn-outline-success'} btn-lg m-2`}
              onClick={() => setMetodoPagamento('cartao')}
            >
              Cartão
            </button>
            <button
              className={`btn ${metodoPagamento === 'dinheiro' ? 'btn-warning' : 'btn-outline-warning'} btn-lg m-2`}
              onClick={() => setMetodoPagamento('dinheiro')}
            >
              Dinheiro
            </button>
          </div>
        </div>

        {/* Botão para Gerar Comprovante */}
        <div className="d-flex justify-content-end">
          <button className="btn btn-primary btn-lg" onClick={gerarComprovante}>
            Gerar Comprovante
          </button>
        </div>
      </div>
    </div>
  );
}
