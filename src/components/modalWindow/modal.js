import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalWindow({ show, handleClose, bodyText }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Поздравляем!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {bodyText}
          <div>Новые упражнения уже в разработке</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;
