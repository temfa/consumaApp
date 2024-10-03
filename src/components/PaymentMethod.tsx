/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {colors} from '../constants/colors';
import {paymentMethod} from '../utils/data';
import {fonts} from '../constants/fonts';

const PaymentMethod = () => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Method</Text>
      <View style={styles.radioGroup}>
        {paymentMethod?.map((item, index) => {
          return (
            <View style={styles.radioSingle} key={index}>
              <View style={styles.radioLeft}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.bank}>{item.bank}</Text>
                  <Text style={[{...styles.bank, color: '#555555'}]}>
                    {item.account}
                  </Text>
                </View>
              </View>
              <RadioButton.Android
                value={item.id}
                status={selectedValue === item.id ? 'checked' : 'unchecked'}
                onPress={() => setSelectedValue(item.id)}
                color={colors.primaryGreen}
              />
            </View>
          );
        })}
        <View style={styles.radioSingle}>
          <View style={styles.radioLeft}>
            <Image
              source={require('../assets/plus2.png')}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={[{...styles.bank, color: '#43CC7A'}]}>
                Add New Card
              </Text>
              <Text style={[{...styles.bank, color: '#555555'}]}>
                Pay & credit via card
              </Text>
            </View>
          </View>
          <RadioButton.Android
            value="new"
            status={selectedValue === 'new' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedValue('new')}
            color={colors.primaryGreen}
          />
        </View>
        <Text style={styles.other}>Other Options</Text>
        <View style={styles.radioSingle}>
          <View style={styles.radioLeft}>
            <Image
              source={require('../assets/send.png')}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={styles.bank}>Direct Bank Transfer</Text>
              <Text style={[{...styles.bank, color: '#555555'}]}>
                Transfer to pay
              </Text>
            </View>
          </View>
          <RadioButton.Android
            value="send"
            status={selectedValue === 'send' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedValue('send')}
            color={colors.primaryGreen}
          />
        </View>
        <View style={styles.radioSingle}>
          <View style={styles.radioLeft}>
            <Image
              source={require('../assets/cash.png')}
              style={styles.image}
            />
            <View style={styles.details}>
              <Text style={styles.bank}>Cash On Delivery</Text>
              <Text style={[{...styles.bank, color: '#555555'}]}>
                Make payment on delivery
              </Text>
            </View>
          </View>
          <RadioButton.Android
            value="cash"
            status={selectedValue === 'cash' ? 'checked' : 'unchecked'}
            onPress={() => setSelectedValue('cash')}
            color={colors.primaryGreen}
          />
        </View>
      </View>
    </View>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginTop: 16,
    marginBottom: 24,
    gap: 32,
  },
  title: {
    fontSize: 12,
    fontFamily: fonts.Medium,
    lineHeight: 14.4,
    color: '#555555',
  },
  radioGroup: {
    gap: 16,
  },
  radioSingle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  radioLeft: {
    flexDirection: 'row',
    gap: 24,
    // alignItems: 'stretch',
  },
  image: {
    width: 48,
    height: 40,
  },
  details: {
    justifyContent: 'space-between',
    // gap: 14,
  },
  bank: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#252525',
  },
  other: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#555555',
  },
});
