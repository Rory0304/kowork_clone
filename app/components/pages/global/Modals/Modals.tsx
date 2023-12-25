import React from 'react';

import useModals from 'app/hooks/useModals';

import ConfirmModal from './ConfirmModal';

export const MODAL_TYPES = {
  confirm: ConfirmModal,
};

const Modals: React.FC = () => {
  const { modals } = useModals();

  return (
    <>
      {modals.map(({ ModalComponent, props }, index) => (
        <ModalComponent key={`modal-${index}`} {...props} />
      ))}
    </>
  );
};

export default Modals;
