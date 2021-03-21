import { connect, ConnectedProps } from 'react-redux';

import './modal.styles.scss';
import { hideModal } from '../../../store/modal/modal.actions';
import { RootState } from '../../../store/reducers';

const mapStateToProps = (state: RootState) => ({ modal: state.modal.modal });
const mapDispatchToProps = {
  dispatchHideModal: hideModal,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type ModalProps = ConnectedProps<typeof connector>;

const Modal = ({ dispatchHideModal, modal }: ModalProps) => {
  if (!modal) {
    return null;
  }

  const onCloseButtonClick = () => dispatchHideModal();

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005;
        </span>
        <h3>{modal.title}</h3>
        <div>{modal.content}</div>
      </div>
    </div>
  );
};

export default connector(Modal);
