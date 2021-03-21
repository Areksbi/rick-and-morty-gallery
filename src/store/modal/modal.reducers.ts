import { ModalAction, ModalActionTypesEnum } from './modal.actions';
import { IModalProps } from '../../components/@core/modal/modal.interfaces';

interface IModalState {
  modal: IModalProps | null | undefined;
}

const initialState: IModalState = {
  modal: null,
};

const modalReducer = (state: IModalState = initialState, action: ModalAction): IModalState => {
  switch (action.type) {
    case ModalActionTypesEnum.SHOW_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case ModalActionTypesEnum.HIDE_MODAL:
      return {
        ...state,
        modal: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
