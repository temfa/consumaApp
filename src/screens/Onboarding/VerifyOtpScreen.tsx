/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {RefObject, useRef, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import PrimaryButton from '../../components/PrimaryButton';

const VerifyOtpScreen = ({navigation}: {navigation: any}) => {
  const data = [1, 2, 3, 4, 5];
  const [active, setActive] = useState(0);
  const [codes, setCodes] = useState<string[] | undefined>(Array(5).fill(''));
  const refs: RefObject<TextInput>[] = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];

  const onChangeCode = (text: string, index: number) => {
    if (text.length > 1) {
      const newCodes = text.split('');
      setCodes(newCodes);
      refs[5]!.current?.focus();
      return;
    }
    const newCodes = [...codes!];
    newCodes[index] = text;
    setCodes(newCodes);
    if (text !== '' && index < 5) {
      refs[index + 1]!.current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backContainer}>
        <MaterialIcons name="arrow-back" size={20} color={'#3D3D3D'} />
      </TouchableOpacity>
      <View style={styles.verifyForm}>
        <View style={styles.verifyText}>
          <Text style={styles.verifyHeader}>Verify Phone Number</Text>
          <Text style={styles.subText}>
            Enter the one time password (OTP) sent to 08148****** to verify
            account
          </Text>
        </View>
        <View style={styles.inputContainer}>
          {data?.map((_, index) => {
            return (
              <TextInput
                key={index}
                style={{
                  ...styles.inputTexts,
                  borderWidth: active === index ? 0.8 : 0,
                  borderColor: active === index ? '#43CC7A' : '',
                }}
                textAlign="center"
                autoComplete="one-time-code"
                ref={refs[index]}
                maxLength={1}
                keyboardType="number-pad"
                focusable={true}
                onChangeText={text => onChangeCode(text, index)}
                onFocus={() => setActive(index)}
                onKeyPress={({nativeEvent: {key}}) => {
                  if (key === 'Backspace' && index > 0) {
                    onChangeCode('', index - 1);
                    refs[index - 1]!.current!.focus();
                  }
                }}
              />
            );
          })}
        </View>
        <PrimaryButton
          title="Confirm Password"
          active={active === data.length - 1 ? true : false}
          action={() => navigation.navigate('UserInterest')}
        />
      </View>
      <View style={styles.resendCode}>
        <Text style={styles.resendText}>
          Didn’t Receive Code?{' '}
          <Text
            style={{
              fontFamily: fonts.SemiBold,
              color: '#252525',
            }}>
            Resend Code
          </Text>
        </Text>
        <Text style={styles.resendText}>
          Resend code in{' '}
          <Text
            style={{
              fontFamily: fonts.SemiBold,
              color: '#252525',
            }}>
            00:59
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default VerifyOtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
  },
  backContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E7E7E7',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  verifyForm: {
    gap: 32,
    marginTop: 28,
  },
  verifyText: {
    gap: 12,
  },
  verifyHeader: {
    fontSize: 24,
    fontFamily: fonts.SemiBold,
    color: '#252525',
  },
  subText: {
    width: '60%',
    fontFamily: fonts.Regular,
    fontSize: 12,
    color: '#6E6E6E',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 11,
  },
  inputTexts: {
    width: '17.5%',
    height: 65,
    borderRadius: 6,
    backgroundColor: '#EEEEEE',
    fontSize: 32,
    color: 'black',
  },
  resendCode: {
    marginTop: 140,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  resendText: {
    color: '#6E6E6E',
    fontSize: 14,
    fontFamily: fonts.Regular,
  },
});
