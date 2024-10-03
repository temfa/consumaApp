import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';

const Button = ({
  action,
  buttonText,
}: {
  action: () => void;
  buttonText: string;
}) => {
  return (
    <TouchableOpacity style={styles.proceed} onPress={action}>
      <Text style={styles.proceedText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  proceed: {
    marginHorizontal: 16,
    backgroundColor: colors.primaryGreen,
    paddingVertical: 16,
    alignItems: 'center',
    borderRadius: 6,
  },
  proceedText: {
    color: colors.white,
    lineHeight: 19.2,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
  },
});
