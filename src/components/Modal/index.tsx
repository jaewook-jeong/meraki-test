import { MouseEvent, ReactNode } from 'react';
import * as Styled from './styled';
import { createPortal } from 'react-dom';

type Props = { onClose: () => void; visible: boolean; children: ReactNode };

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const el = document.getElementById('modal-root') as HTMLElement;

  return createPortal(children, el);
};

const Modal = ({ onClose, visible, children }: Props) => {
  const onMaskClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalPortal>
      <Styled.ModalOverlay $visible={visible} />
      <Styled.ModalWrapper onClick={onMaskClick} tabIndex={-1} $visible={visible}>
        <Styled.ModalInner tabIndex={0}>{children}</Styled.ModalInner>
      </Styled.ModalWrapper>
    </ModalPortal>
  );
};

export default Modal;
