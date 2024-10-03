/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants/colors';
import Cart from '../../components/Cart';
import {RadioButton} from 'react-native-paper';
import {fonts} from '../../constants/fonts';
import Button from '../../components/Button';
import Icon, {Icons} from '../../components/Icons';
import Modals from '../../components/Modals';

const ConfirmOrderScreen = ({navigation}: {navigation: any}) => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Cart page="Confirm" />
      <View style={styles.payContainer}>
        <Text style={styles.title}>Payment Method</Text>
        <View style={styles.radioGroup}>
          <View style={styles.radioSingle}>
            <View style={styles.radioLeft}>
              <Image
                source={require('../../assets/master.png')}
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
              status={'checked'}
              //   onPress={() => setSelectedValue('send')}
              color={colors.primaryGreen}
            />
          </View>
        </View>
      </View>
      <Button buttonText="Confirm Order" action={() => setVisible(true)} />
      <Modals
        visible={visible}
        points={['25%', '50%']}
        setFalse={() => setVisible(false)}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.close}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
                navigation.navigate('Home');
              }}>
              <Icon
                type={Icons.Ionicons}
                name="close-circle-outline"
                size={24}
                color="#555555"
                style={styles.closeIcon}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <Image source={require('../../assets/shopping-bag.png')} />
          <Text style={styles.welcomeModalText1}>Congrats on your Order!</Text>
          <Text style={styles.welcomeModalText2}>
            We'll ensure you're always reminded to eat your meals on time. You
            have just received 2 Points
          </Text>
        </View>
      </Modals>
    </View>
  );
};

export default ConfirmOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 16,
    paddingBottom: 32,
  },
  payContainer: {
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
  contentContainer: {alignItems: 'center', gap: 16, width: '100%'},
  close: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  closeIcon: {
    width: 24,
  },
  welcomeModalText1: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    lineHeight: 19.2,
    textAlign: 'center',
    color: '#252525',
  },
  welcomeModalText2: {
    width: 268,
    textAlign: 'center',
    color: '#3D3D3D',
    fontSize: 12,
    fontFamily: fonts.Regular,
    lineHeight: 14.4,
  },
});
