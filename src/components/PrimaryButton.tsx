/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';

type Props = {
  title: string;
  active: boolean;
  action: () => void;
};

const PrimaryButton: FC<Props> = ({title, action, active}) => {
  return (
    <TouchableOpacity
      disabled={!active}
      onPress={action}
      style={{
        ...styles.createAccount,
        opacity: active ? 1 : 0.5,
      }}>
      <Text style={styles.createAccountText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  createAccount: {
    alignItems: 'center',
    backgroundColor: colors.primaryGreen,
    paddingVertical: 16,
    borderRadius: 8,
  },
  createAccountText: {
    fontFamily: fonts.Bold,
    fontSize: 16,
    color: '#F2F2F2',
    lineHeight: 19.2,
  },
});
