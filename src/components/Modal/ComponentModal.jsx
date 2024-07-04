import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";

const ComponentModal = ({ isOpen, onClose, children }) => {
  if (isOpen === true) {
    return (
      <div className="ModalBackground" onClick={onClose}>
        <div className="ModalConteudoContainer" onClick={(e) => e.stopPropagation()}>
          <div className="ModalBotoes">
            <button className="ModalBotao ModalBotaoCancelar" onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div className="ModalConteudo">{children}</div>
        </div>
      </div>
    );
  }
  return null;
};

export default ComponentModal;
