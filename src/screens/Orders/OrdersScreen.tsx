/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import InfoText from '../../components/InfoText';

const OrdersScreen = () => {
  const [active, setActive] = useState('Cart');
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Orders</Text>
      <View style={styles.heading}>
        <Text
          style={[
            styles.headingText,
            {
              color: active === 'Cart' ? colors.primaryGreen : '#555555',
              borderBottomWidth: active === 'Cart' ? 2 : 0,
              borderBottomColor: '#58D189',
            },
          ]}
          onPress={() => setActive('Cart')}>
          Cart
        </Text>
        <Text
          style={[
            styles.headingText,
            {
              color: active === 'History' ? colors.primaryGreen : '#555555',
              borderBottomWidth: active === 'History' ? 2 : 0,
              borderBottomColor: '#58D189',
            },
          ]}
          onPress={() => setActive('History')}>
          History
        </Text>
      </View>
      <View style={styles.totalItems}>
        <Text style={styles.totalItemsText}>
          Total Items <Text style={{fontFamily: fonts.Bold}}>(3)</Text>
        </Text>
        <TouchableOpacity style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Empty Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.summary}>
        <Text style={styles.cartSummary}>Cart Summary</Text>
        <View style={styles.subTotal}>
          <Text style={styles.cartSummary}>Sub-Total</Text>
          <Text style={styles.total}>₦220,000</Text>
        </View>
      </View>
      <InfoText text="This does not include delivery fee. Delivery fee will be determined once location is confirmed" />
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 16,
  },
  header: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
    color: '#0D0D0D',
    textAlign: 'center',
  },
  heading: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 8,
  },
  headingText: {
    width: '50%',
    textAlign: 'center',
    paddingVertical: 16,
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
  },
  totalItems: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginTop: 24,
    alignItems: 'center',
  },
  totalItemsText: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    lineHeight: 16.8,
    color: '#000000',
  },
  emptyCart: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#FEF2F2',
  },
  emptyCartText: {
    color: '#F64C4C',
    lineHeight: 14.4,
    fontFamily: fonts.SemiBold,
    fontSize: 12,
  },
  summary: {
    padding: 16,
    gap: 16,
    backgroundColor: '#FBFEFC',
    borderRadius: 8,
    elevation: 0.5,
    margin: 16,
  },
  cartSummary: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    lineHeight: 14.4,
    color: '#555555',
  },
  subTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    color: '#252525',
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
  },
});
