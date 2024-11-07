export default function Extrato() {
  return (
    <div className="container mt-5 bg-light rounded p-4 shadow">
      <h1 className="text-center text-success">Extrato da Compra</h1>
      <p>Pedido realizado com sucesso!</p>
      <p>Detalhes do pedido:</p>
      <ul className="list-group">
        <li className="list-group-item">Sabor: Chocolate - Tipo: Casquinha</li>
        <li className="list-group-item">Valor: R$15,00</li>
        <li className="list-group-item">Forma de Pagamento: Cartão</li>
      </ul>
    </div>
  );
}
