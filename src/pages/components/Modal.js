import { Modal, Button } from 'react-bootstrap';

export default function ModalHandler({ showTutorial, setShowTutorial }) {
  return (
    <>
      <Modal show={showTutorial} onHide={() => setShowTutorial(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Tutorial</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bem-vindo! Selecione um sabor e tipo de sorvete, adicione ao carrinho e escolha o método de pagamento para gerar seu comprovante.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowTutorial(false)}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
