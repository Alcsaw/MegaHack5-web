import React, { useState, useEffect } from 'react';
import { shade } from 'polished';

import ReactModal from 'react-modal';

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}

      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'var(--white)',
          width: '450px',

          borderRadius: '0',
          padding: '0'
        },
        overlay: {
          //backgroundColor: '#545454',
          //background: 'rgba(255, 255, 255, 0.4)',
          background: 'shade(FFF)',
        },
      }}
    >
      { children}
    </ReactModal >
  );
};

export default Modal;