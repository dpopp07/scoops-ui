import { ReactNode } from 'react';
import { MdClose } from 'react-icons/md';
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
        <MdClose className={classes.close} onClick={onClose} />
        {children}
      </dialog>
    </>
  );
}

export default Modal;
