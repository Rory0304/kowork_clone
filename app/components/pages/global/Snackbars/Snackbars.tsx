import React from "react";
import { Text } from "react-native";
import {
  Snackbar as PaperSnackbar,
  Portal,
  SnackbarProps as PaperSnackbarProps,
} from "react-native-paper";
import useSnackbars from "app/hooks/useSnackbars";
import { SnackbarProps } from "app/recoil/snackbars/atoms";

interface CustomSnackbarProps
  extends SnackbarProps,
    Omit<PaperSnackbarProps, "children" | "onDismiss" | "visible"> {}

const Snackbar: React.FC<CustomSnackbarProps> = (props) => {
  const [visible, setVisible] = React.useState(true);

  return (
    <PaperSnackbar visible={visible} onDismiss={() => setVisible(false)}>
      <Text>{props.message}</Text>
    </PaperSnackbar>
  );
};

const Snackbars: React.FC = () => {
  const { snackbars } = useSnackbars();

  return (
    <>
      {snackbars.map(({ props }, index) => (
        <Portal>
          <Snackbar key={`snackbar-${index}`} {...props} />
        </Portal>
      ))}
    </>
  );
};

export default Snackbars;
