import { ReactNode } from 'react';
import classes from './Modal.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
