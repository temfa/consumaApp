/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Modals from './Modals';
import {ModalProps} from './ProfileDetails';
import {fonts} from '../constants/fonts';
import Icon, {Icons} from './Icons';
import Toast from 'react-native-toast-message';

const Bank: FC<ModalProps> = ({visible, action}) => {
  return (
    <Modals visible={visible} setFalse={action} points={['25']}>
      <View style={styles.container}>
        <Text style={styles.title}>Direct Bank Transfer</Text>
        <View style={styles.wrapper}>
          <Image
            source={require('../assets/bank.png')}
            style={{borderRadius: 4}}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              Account Name:{' '}
              <Text style={{color: '#252525'}}>Consuma corporations</Text>
            </Text>
            <Text style={styles.text}>
              Account Number: <Text style={{color: '#252525'}}>0041202902</Text>
            </Text>
            <Text style={styles.text}>
              Bank: <Text style={{color: '#252525'}}>Guaranty Trust Bank</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.copyCont}
            onPress={() => {
              Toast.show({
                type: 'success',
                text1: 'Copied Successfully',
              });
              action();
            }}>
            <Icon name="copy-outline" type={Icons.Ionicons} size={20} />
            <Text>Copy Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modals>
  );
};

export default Bank;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    lineHeight: 19.2,
    color: '#0D0D0D',
  },
  wrapper: {
    alignItems: 'center',
    gap: 16,
  },
  textWrapper: {
    gap: 12,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
    color: '#6E6E6E',
  },
  copyCont: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
});
