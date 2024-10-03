import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import Button from '../../components/Button';
import Cart from '../../components/Cart';

const CheckoutScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <Cart page="Checkout" />
      <Button
        action={() => navigation.navigate('Payment')}
        buttonText="Proceed to payment"
      />
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 16,
    gap: 24,
  },
});
