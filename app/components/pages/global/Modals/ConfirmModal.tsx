import React from "react";
import { View } from "react-native";
import { Modal, Portal, Text } from "react-native-paper";

interface ConfirmModalProps {
  title: string;
  description: string;
  ActionComponent: React.FunctionComponent;
  open?: boolean;
  closeModal: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  description,
  ActionComponent,
  open = false,
  closeModal,
}) => {
  return (
    <Portal>
      <Modal
        visible={open}
        onDismiss={closeModal}
        contentContainerStyle={{
          backgroundColor: "white",
          padding: 16,
          borderRadius: 16,
          margin: "auto",
        }}
      >
        <View>
          <Text className="mb-2 font-bold text-center text-lg text-black">
            {title}
          </Text>
          <Text className="mb-4 text-secondary font-semibold text-center">
            {description}
          </Text>
          <ActionComponent />
        </View>
      </Modal>
    </Portal>
  );
};

export default ConfirmModal;
