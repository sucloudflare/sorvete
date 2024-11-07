export default function handler(req, res) {
    if (req.method === 'POST') {
      const { nome, cpf, formaPagamento } = req.body;
      
      // Simulando o processo de pagamento
      if (!nome || !formaPagamento) {
        return res.status(400).json({ message: 'Nome e forma de pagamento são obrigatórios.' });
      }
      
      res.status(200).json({ message: 'Compra realizada com sucesso!', nome, cpf, formaPagamento });
    } else {
      res.status(405).json({ message: 'Método não permitido.' });
    }
  }
  