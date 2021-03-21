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
    <div className="modal__overlay">
      <article className="modal">
        <h3 className={'modal__title'}>
          <span>{modal.title}</span>
          <button className="modal__close" onClick={onCloseButtonClick}>
            &#10005;
          </button>
        </h3>
        <section className={'modal__content'}>{modal.content}</section>
      </article>
    </div>
  );
};

export default connector(Modal);
