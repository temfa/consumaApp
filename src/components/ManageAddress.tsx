/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Modals from './Modals';
import {fonts} from '../constants/fonts';
import {RadioButton} from 'react-native-paper';
import {colors} from '../constants/colors';
import PrimaryButton from './PrimaryButton';
import {getItem, setItem} from '../utils/asyncStorage';

const ManageAddress = ({
  visible,
  action,
}: {
  visible: boolean;
  action: () => void;
}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [address, setAddress] = useState<string[]>([]);
  const [newAddress, setNewAddress] = useState(false);
  const [input, setInput] = useState('');

  const getAddress = async () => {
    const data = await getItem('address');
    if (data) setAddress(data as string[]);
  };
  const getSingleAddress = async () => {
    const data = await getItem('singleAddress');
    if (data) setSelectedValue(data as string);
  };
  useEffect(() => {
    getAddress();
    getSingleAddress();
  }, []);

  return (
    <Modals visible={visible} setFalse={action} points={['50']}>
      <View style={styles.container}>
        <Text style={styles.header}>Manage Address</Text>
        <View style={styles.addressCont}>
          {address?.map((item, index) => {
            return (
              <View key={index} style={styles.addressSingle}>
                <Text
                  style={[
                    {
                      ...styles.address,
                      color:
                        selectedValue === item
                          ? colors.primaryGreen
                          : '#252525',
                    },
                  ]}>
                  {item}
                </Text>
                <RadioButton.Android
                  value="new"
                  status={selectedValue === item ? 'checked' : 'unchecked'}
                  onPress={async () => {
                    setSelectedValue(item);
                    await setItem('singleAddress', item);
                  }}
                  color={colors.primaryGreen}
                />
              </View>
            );
          })}
          {newAddress ? (
            <>
              <View style={styles.newAddress}>
                <Text style={styles.newAddressText}>New Address</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={e => setInput(e)}
                />
              </View>
              <TouchableOpacity
                style={styles.addNew}
                onPress={async () => {
                  address.push(input);
                  await setItem('address', address);
                  setNewAddress(false);
                }}>
                <Text style={styles.addNewText}>Save address</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.addNew}
              onPress={() => {
                setNewAddress(true);
                setSelectedValue('');
              }}>
              <Text style={styles.addNewText}>Add new address</Text>
            </TouchableOpacity>
          )}
        </View>
        <PrimaryButton
          title="Apply Changes"
          action={action}
          active={selectedValue !== '' ? true : false}
        />
      </View>
    </Modals>
  );
};

export default ManageAddress;

const styles = StyleSheet.create({
  container: {
    gap: 24,
    width: '90%',
    marginHorizontal: 'auto',
    paddingVertical: 16,
  },
  header: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#0D0D0D',
  },
  addressCont: {
    gap: 12,
    alignItems: 'flex-start',
  },
  addressSingle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  address: {
    width: 162,
    fontSize: 12,
    lineHeight: 14.4,
    fontFamily: fonts.SemiBold,
  },
  addNew: {
    backgroundColor: '#EAF9F0',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  addNewText: {
    fontFamily: fonts.SemiBold,
    color: '#43CC7A',
    fontSize: 12,
    lineHeight: 14.4,
  },
  newAddress: {
    gap: 8,
    width: '100%',
  },
  newAddressText: {
    fontSize: 12,
    lineHeight: 14.4,
    fontFamily: fonts.SemiBold,
    color: '#555555',
  },
  input: {
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#EEEEEE',
    color: '#252525',
    fontSize: 16,
    fontFamily: fonts.Medium,
    lineHeight: 19.2,
  },
});
