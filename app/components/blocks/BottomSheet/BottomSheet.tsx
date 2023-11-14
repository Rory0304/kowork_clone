import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";
import { gray } from "tailwindcss/colors";
import XMarkIcon from "react-native-heroicons/solid/XMarkIcon";

interface BottomSheetProps {
  snapPoints: string[];
  headerTitle?: string;
  closeBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const BottomSheet = React.forwardRef<BottomSheetModal, BottomSheetProps>(
  ({ snapPoints, headerTitle, closeBtn, onClose, children }, ref) => {
    const bottomSheetSnapPoints = React.useMemo(() => snapPoints, [snapPoints]);

    const BottomSheetHeader = (
      <View className="flex flex-row items-center justify-between px-4 py-2 bg-white border-b border-neutral-100">
        {!!headerTitle ? (
          <Text className="text-base font-bold">{headerTitle}</Text>
        ) : null}
        {closeBtn && typeof onClose === "function" ? (
          <TouchableOpacity onPress={() => onClose()}>
            <XMarkIcon width={24} height={24} color="gray" />
          </TouchableOpacity>
        ) : null}
      </View>
    );

    const renderBackdrop = React.useCallback(
      (
        props: React.JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps
      ) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={1}
          appearsOnIndex={2}
          pressBehavior={"close"}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={bottomSheetSnapPoints}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={{ backgroundColor: gray[200], width: "25%" }}
      >
        {BottomSheetHeader}
        {children}
      </BottomSheetModal>
    );
  }
);

BottomSheet.displayName = "BottomSheet";

export default BottomSheet;
