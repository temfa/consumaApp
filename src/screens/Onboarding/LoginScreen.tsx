import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
// import CheckBox from '@react-native-community/checkbox';
import PrimaryButton from '../../components/PrimaryButton';

const LoginScreen = ({navigation}: {navigation: any}) => {
  // const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.containerText}>
          <Text style={styles.header}>Welcome back!</Text>
          <Text style={styles.headerText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            iaculis amet, est interdum.
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formInput}>
            <Text style={styles.label}>Phone Number( Active )</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., 08148985948"
              keyboardType="phone-pad"
              placeholderTextColor="#CFCFCF"
            />
          </View>
          {/* <View style={styles.checkbox}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              tintColor={colors.primaryGreen}
              tintColors={{true: colors.primaryGreen}}
              boxType="square"
              onCheckColor={colors.primaryGreen}
            />
            <Text style={styles.checkboxText}>
              By continuing I read agree to{' '}
              <Text
                style={{
                  ...styles.checkboxText,
                  color: '#252525',
                  fontWeight: '600',
                  fontFamily: fonts.SemiBold,
                }}>
                Privacy Policy. Terms and Condition
              </Text>
            </Text>
          </View> */}
          <PrimaryButton
            title="Create Account"
            action={() => navigation.navigate('HomeScreen')}
            active={true}
          />
        </View>
      </View>
      <View style={styles.loginOr}>
        <Text style={styles.loginWith}>Don't have an account?</Text>
        <View style={styles.loginAs}>
          <Image source={require('../../assets/profile-circle1.png')} />
          <Text style={styles.loginText}>Signup</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    paddingTop: 85,
  },
  containerHeader: {
    gap: 32,
  },
  containerText: {
    gap: 16,
  },
  header: {
    fontSize: 24,
    fontFamily: fonts.Bold,
    color: '#252525',
  },
  headerText: {
    width: '70%',
    fontFamily: fonts.Regular,
    color: '#6E6E6E',
    fontSize: 12,
  },
  form: {
    gap: 24,
  },
  formInput: {
    gap: 8,
  },
  label: {
    fontSize: 12,
    fontFamily: fonts.SemiBold,
  },
  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: 'black',
  },
  checkbox: {
    flexDirection: 'row',
    gap: 14,
    alignItems: 'center',
    width: '100%',
    // overflow: 'hidden',
  },
  checkboxText: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    color: '#9E9E9E',
  },
  loginOr: {
    marginTop: 97,
    gap: 32,
    alignItems: 'center',
  },
  loginWith: {
    color: '#6E6E6E',
    fontSize: 14,
  },
  loginAs: {
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
    gap: 16,
  },
  loginText: {
    color: '#6E6E6E',
    fontSize: 14,
    fontFamily: fonts.Medium,
  },
});
