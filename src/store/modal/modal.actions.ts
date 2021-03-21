import { IModalProps } from '../../components/@core/modal/modal.interfaces';

export enum ModalActionTypesEnum {
  SHOW_MODAL,
  HIDE_MODAL,
}

export interface ModalAction {
  type: ModalActionTypesEnum;
  payload?: IModalProps;
}

export const showModal = (payload: IModalProps): ModalAction => ({
  type: ModalActionTypesEnum.SHOW_MODAL,
  payload,
});

export const hideModal = (): ModalAction => ({
  type: ModalActionTypesEnum.HIDE_MODAL,
});
