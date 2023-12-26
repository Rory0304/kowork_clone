import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import XMarkIcon from 'react-native-heroicons/solid/XMarkIcon';

import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { gray } from 'tailwindcss/colors';

interface BottomSheetProps {
  snapPoints: string[];
  headerTitle?: string;
  HeaderComponent?: React.ReactNode;
  closeBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export const BottomSheetCloseBtn = ({ onClose }: { onClose: () => void }) => {
  return (
    <TouchableOpacity onPress={onClose}>
      <XMarkIcon width={24} height={24} color="gray" />
    </TouchableOpacity>
  );
};

const BottomSheet = React.forwardRef<BottomSheetModal, BottomSheetProps>(
  (
    { snapPoints, headerTitle, HeaderComponent, closeBtn, onClose, children },
    ref
  ) => {
    const bottomSheetSnapPoints = React.useMemo(() => snapPoints, [snapPoints]);

    const BottomSheetHeader = (
      <View className="flex flex-row items-center justify-between px-4 py-2 bg-white border-b border-neutral-100">
        {HeaderComponent ? (
          HeaderComponent
        ) : (
          <>
            {!!headerTitle ? (
              <Text className="text-base font-bold">{headerTitle}</Text>
            ) : null}
            {closeBtn && typeof onClose === 'function' ? (
              <BottomSheetCloseBtn onClose={onClose} />
            ) : null}
          </>
        )}
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
          pressBehavior={'close'}
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
        handleIndicatorStyle={{ backgroundColor: gray[200], width: '25%' }}
      >
        {BottomSheetHeader}
        {children}
      </BottomSheetModal>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
