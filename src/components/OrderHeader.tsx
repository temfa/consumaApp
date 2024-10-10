/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const OrderHeader = ({active}: {active: string}) => {
  const navigation = useNavigation();
  return (
    <>
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
          onPress={() => navigation.navigate('OrderPage' as never)}>
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
          onPress={() => navigation.navigate('History' as never)}>
          History
        </Text>
      </View>
    </>
  );
};

export default OrderHeader;

const styles = StyleSheet.create({
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
});
