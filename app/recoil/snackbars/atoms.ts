import { atom } from 'recoil';

export type SnackbarVariantType = 'error' | 'success' | 'warn';

export interface SnackbarProps {
  message: string;
  variant: SnackbarVariantType;
  duration?: number;
}

const snackbarsAtom = atom<
  Array<{
    props: SnackbarProps;
  }>
>({
  key: 'snackbarsAtom',
  default: [],
});

export default snackbarsAtom;
