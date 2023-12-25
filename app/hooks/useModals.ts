import React from 'react';

import { useRecoilState } from 'recoil';

import modalsAtom from 'app/recoil/modals/atoms';

const useModals = () => {
  const [modals, setModals] = useRecoilState(modalsAtom);

  const openModal = React.useCallback(
    <T extends React.FC<any>>(Component: T, props: React.ComponentProps<T>) => {
      setModals(modals => [...modals, { ModalComponent: Component, props }]);
    },
    [setModals]
  );

  const closeModal = React.useCallback(
    <T extends React.FC<any>>(Component: T) => {
      setModals(modals =>
        modals.filter(modal => modal.ModalComponent !== Component)
      );
    },
    [setModals]
  );

  return {
    modals,
    openModal,
    closeModal,
  };
};

export default useModals;
