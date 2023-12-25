import { atom } from 'recoil';

const modalsAtom = atom<
  Array<{
    ModalComponent: React.FunctionComponent;
    props: React.ComponentProps<React.FunctionComponent<any>>;
  }>
>({
  key: 'modalsAtom',
  default: [],
});

export default modalsAtom;
