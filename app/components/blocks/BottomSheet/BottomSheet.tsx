import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import XMarkIcon from 'react-native-heroicons/solid/XMarkIcon';

import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetDefaultBackdropProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import { gray } from 'tailwindcss/colors';

import { MAX_WIDTH } from 'app/constants/styles/Global';

interface BottomSheetProps {
  snapPoints: string[];
  headerTitle?: string;
  HeaderComponent?: React.ReactNode;
  closeBtn?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
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

    const renderBackdrop = (props: BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.5}
        pressBehavior="close"
      />
    );

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enableHandlePanningGesture={false}
        handleIndicatorStyle={{ backgroundColor: gray[200], width: '25%' }}
        style={{
          maxWidth: MAX_WIDTH,
          marginHorizontal: 'auto',
        }}
      >
        <NativeViewGestureHandler disallowInterruption={true}>
          <View style={{ flex: 1 }}>
            {BottomSheetHeader}
            {children}
          </View>
        </NativeViewGestureHandler>
      </BottomSheetModal>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
