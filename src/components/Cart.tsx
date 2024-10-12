/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';
import OrderHeader from './OrderHeader';
import {RadioButton} from 'react-native-paper';
import Icon, {Icons} from './Icons';
import {CartContext} from '../context/cartContext';
import {formatter} from '../utils/formatter';

const Cart = ({page}: {page: string}) => {
  const [active, setActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const {totalPrice} = useContext(CartContext);
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <OrderHeader active="Cart" />
        <View style={styles.deliverContainer}>
          <View style={styles.deliverCont}>
            <View style={styles.deliverWrapper}>
              <Icon
                type={Icons.FontAwesome6}
                name="location-dot"
                color="#2EC66B"
                size={15}
              />
              <View style={styles.deliverText}>
                <Text style={styles.deliverText1}>Deliver to</Text>
                <Text style={styles.deliverText2}>
                  Ajah Lekki Estate Phase 1
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => setActive(!active)}>
              <Icon
                type={Icons.SimpleLineIcons}
                name={active ? 'arrow-up' : 'arrow-down'}
                color={colors.primaryGreen}
                size={15}
              />
            </TouchableOpacity>
          </View>
          {active && (
            <View style={styles.radioGroup}>
              <View style={styles.radioButton}>
                <Text
                  style={[
                    {...styles.radioLabel},
                    {
                      color:
                        selectedValue === 'option1'
                          ? colors.primaryGreen
                          : '#252525',
                    },
                  ]}>
                  Block 234, admiral road, Bourdilion bus-stop, lekki
                </Text>
                <RadioButton.Android
                  value="option1"
                  status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedValue('option1')}
                  color={colors.primaryGreen}
                />
              </View>
              <View style={styles.radioButton}>
                <Text
                  style={[
                    {...styles.radioLabel},
                    {
                      color:
                        selectedValue === 'option2'
                          ? colors.primaryGreen
                          : '#252525',
                    },
                  ]}>
                  Ajah Lekki Estate Phase 1
                </Text>
                <RadioButton.Android
                  value="option2"
                  status={selectedValue === 'option2' ? 'checked' : 'unchecked'}
                  onPress={() => setSelectedValue('option2')}
                  color={colors.primaryGreen}
                />
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.cartSummary}>
        <Text style={styles.title}>Cart Summary</Text>
        {page === 'Confirm' ? null : (
          <>
            <View style={styles.singleSummary}>
              <Text style={styles.title}>Sub-Total</Text>
              <Text style={styles.amount}>{formatter.format(totalPrice)}</Text>
            </View>
            <View style={styles.singleSummary}>
              <Text style={styles.title}>Delivery Fee</Text>
              <Text style={styles.amount}>{formatter.format(10000)}</Text>
            </View>
          </>
        )}
        <View style={styles.singleSummary}>
          <Text style={styles.amount}>Total</Text>
          <Text style={styles.amount}>
            {formatter.format(totalPrice + 10000)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  containerWrapper: {
    gap: 16,
  },
  deliverContainer: {
    paddingVertical: 16,
    paddingLeft: 12,
    paddingRight: 16,
    marginHorizontal: 16,
    backgroundColor: '#F3FCF7',
    elevation: 0.5,
    borderRadius: 16,
  },
  deliverCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deliverWrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  deliverText: {
    flexDirection: 'row',
    gap: 4,
  },
  deliverText1: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#252525',
  },
  deliverText2: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
    color: colors.primaryGreen,
  },
  cartSummary: {
    gap: 16,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#FBFEFC',
    elevation: 0.5,
  },
  title: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#555555',
  },
  singleSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontSize: 14,
    lineHeight: 16.8,
    color: '#252525',
    fontFamily: fonts.SemiBold,
  },
  radioGroup: {
    marginTop: 24,
    padding: 8,
    gap: 12,
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radioLabel: {
    width: 162,
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
  },
});
