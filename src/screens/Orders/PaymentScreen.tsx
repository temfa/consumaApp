import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import Cart from '../../components/Cart';
import PaymentMethod from '../../components/PaymentMethod';
import Button from '../../components/Button';

const PaymentScreen = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView style={styles.container}>
      <Cart page="Payment" />
      <PaymentMethod />
      <Button
        buttonText="Proceed to confirm order"
        action={() => navigation.navigate('Confirm')}
      />
    </ScrollView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 16,
    paddingBottom: 32,
  },
});
