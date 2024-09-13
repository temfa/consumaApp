import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {fonts} from '../constants/fonts';

const InfoText = ({text}: {text: string}) => {
  return (
    <View style={styles.info}>
      <Feather name="info" size={24} color="#3A70E2" />
      <Text style={styles.infoText}>{text}</Text>
    </View>
  );
};

export default InfoText;

const styles = StyleSheet.create({
  info: {
    backgroundColor: '#E4F2FF',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: '100%',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 12,
    lineHeight: 14.4,
    color: '#3A70E2',
    fontFamily: fonts.SemiBold,
  },
});
