/* eslint-disable curly */
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {BottomSheetModal, BottomSheetView} from '@gorhom/bottom-sheet';

const Modals = ({
  children,
  visible,
  points,
  setFalse,
}: {
  children: any;
  visible: boolean;
  points?: string[] | number[];
  setFalse: () => void;
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [number, setNumber] = useState(1);

  // variables
  const snapPoints = useMemo(() => points, [points]);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback(
    (index: number) => {
      console.log('handleSheetChanges', index);
      if (index < 1) {
        setNumber(1);
        bottomSheetModalRef.current?.close();
        setFalse();
      }
    },
    [setFalse],
  );

  useEffect(() => {
    if (visible) handlePresentModalPress();
    else bottomSheetModalRef.current?.close();
  }, [visible, handlePresentModalPress]);

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={number}
      snapPoints={snapPoints}
      // enableDynamicSizing={true}
      onChange={handleSheetChanges}>
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheetModal>
  );
};

export default Modals;
