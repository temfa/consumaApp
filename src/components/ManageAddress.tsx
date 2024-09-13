import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modals from './Modals';

const ManageAddress = ({
  visible,
  action,
}: {
  visible: boolean;
  action: () => void;
}) => {
  return (
    <Modals visible={visible} action={action}>
      <View style={styles.container}>
        <Text>ManageAddress</Text>
      </View>
    </Modals>
  );
};

export default ManageAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
