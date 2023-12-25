import React from "react";
import { useRecoilState } from "recoil";
import snackbarsAtom, { CustomSnackbarProps } from "app/recoil/snackbars/atoms";

const useSnackbars = () => {
  const [snackbars, setSnackbars] = useRecoilState(snackbarsAtom);

  const enqueueSnackbar = React.useCallback(
    (props: CustomSnackbarProps) => {
      setSnackbars((snackbars) => [...snackbars, { props }]);
    },
    [setSnackbars]
  );

  return {
    snackbars,
    enqueueSnackbar,
  };
};

export default useSnackbars;
