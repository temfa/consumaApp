/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import Modals from './Modals';
import {ModalProps} from './ProfileDetails';
import {TextInput} from 'react-native';
import {fonts} from '../constants/fonts';
import PrimaryButton from './PrimaryButton';

const AddBank: FC<ModalProps> = ({visible, action}) => {
  const [active, setActive] = useState(false);
  const [expiryDate, setExpiryDate] = useState('');
  const handleInputChange = (value: string) => {
    // Remove any non-digit characters
    const cleanedValue = value.replace(/[^0-9]/g, '');

    // Format the input to MM/YYYY
    if (cleanedValue.length <= 2) {
      if (Number(cleanedValue) <= 12 && Number(cleanedValue) > 0)
        setExpiryDate(cleanedValue); // Set as MM
    } else if (cleanedValue.length <= 4) {
      setExpiryDate(`${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2)}`); // MM/YYYY
    } else {
      setExpiryDate(`${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2, 6)}`); // Max MM/YYYY
    }
  };

  return (
    <Modals visible={visible} setFalse={action} points={['25']}>
      <View style={styles.container}>
        <Text style={styles.title}>Add New Card</Text>
        <View style={styles.formContainer}>
          <View style={styles.profileSingle}>
            <Text style={styles.label}>Card Number</Text>
            <TextInput
              placeholderTextColor="#9E9E9E"
              style={styles.input}
              placeholder="0000 0000 0000 000"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.profileDouble}>
            <View style={[styles.profileSingle, {width: '48%'}]}>
              <Text style={styles.label}>Expiry Date</Text>
              <TextInput
                placeholderTextColor="#9E9E9E"
                style={styles.input}
                placeholder="MM / YY"
                keyboardType="numeric"
                value={expiryDate}
                onChangeText={handleInputChange}
                maxLength={5}
              />
            </View>
            <View style={[styles.profileSingle, {width: '48%'}]}>
              <Text style={styles.label}>CVV / CVC </Text>
              <TextInput
                placeholderTextColor="#9E9E9E"
                style={styles.input}
                placeholder=". . ."
                keyboardType="numeric"
                maxLength={3}
                onChangeText={e => {
                  if (e.length === 3) setActive(true);
                }}
              />
            </View>
          </View>
        </View>
        <PrimaryButton title="Add card" action={action} active={active} />
      </View>
    </Modals>
  );
};

export default AddBank;

const styles = StyleSheet.create({
  container: {
    gap: 24,
    padding: 16,
  },
  title: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#0D0D0D',
  },
  formContainer: {
    gap: 16,
  },
  profileDouble: {
    flexDirection: 'row',
    gap: 16,
  },
  profileSingle: {
    width: '100%',
    gap: 8,
  },
  label: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#555555',
  },
  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 6,
    height: 43,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#252525',
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
});
