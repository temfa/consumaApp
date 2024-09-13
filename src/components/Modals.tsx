import {StyleSheet, View, Modal} from 'react-native';
import React from 'react';

const Modals = ({
  children,
  visible,
  action,
}: {
  children: any;
  visible: boolean;
  action: () => void;
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={action}>
      <View style={styles.modalContainer}>
        <View style={styles.bottomSheet}>{children}</View>
      </View>
    </Modal>
  );
};

export default Modals;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheet: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    height: 478,
    paddingVertical: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
