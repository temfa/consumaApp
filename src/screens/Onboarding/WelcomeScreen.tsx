import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {sizing} from '../../constants/spacing';

const WelcomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.headerContainer}
        source={require('../../assets/background.png')}
        resizeMode="stretch">
        <Image source={require('../../assets/welcome.png')} />
      </ImageBackground>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyTexts}>
          <View style={styles.bodyHead}>
            <Text style={styles.heading}>Welcome to </Text>
            <Text style={styles.heading}>Consuma</Text>
          </View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Morbi sit tempus tortor
            bibendum imperdiet. Tortor nunc posuere consequat quam. Nibh semper
            malesuada quis varius malesuada vitae. Arcu
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 330,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    paddingHorizontal: 16,
    paddingTop: 13,
  },
  bodyTexts: {
    gap: 29,
    alignItems: 'center',
  },
  bodyHead: {
    alignItems: 'center',
  },
  heading: {
    color: '#0D0D0D',
    fontFamily: fonts.SemiBold,
    fontSize: 36,
  },
  text: {
    color: '#555555',
    fontSize: 14,
    fontFamily: fonts.Regular,
    textAlign: 'center',
    lineHeight: 16.8,
  },
  buttons: {
    width: '100%',
    paddingVertical: 16,
    backgroundColor: colors.primaryGreen,
    alignItems: 'center',
    marginTop: 52,
    borderRadius: 6,
  },
  buttonText: {
    color: colors.white,
    fontSize: sizing.buttonDefault,
    fontFamily: fonts.Bold,
    lineHeight: 19.2,
  },
});
