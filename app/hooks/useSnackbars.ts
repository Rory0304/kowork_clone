import React from 'react';

import { useRecoilState } from 'recoil';

import snackbarsAtom, { SnackbarProps } from 'app/recoil/snackbars/atoms';

const useSnackbars = () => {
  const [snackbars, setSnackbars] = useRecoilState(snackbarsAtom);

  const enqueueSnackbar = React.useCallback(
    (props: SnackbarProps) => {
      setSnackbars(snackbars => [...snackbars, { props }]);
    },
    [setSnackbars]
  );

  return {
    snackbars,
    enqueueSnackbar,
  };
};

export default useSnackbars;
