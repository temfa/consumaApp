/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {profileLinks} from '../../utils/data';
import Icon, {Icons} from '../../components/Icons';
import ProfileDetails from '../../components/ProfileDetails';
import ManageAddress from '../../components/ManageAddress';

const ProfileScreen = ({navigation}: {navigation: any}) => {
  const [profilePop, setProfilePop] = useState(false);
  const [address, setAddress] = useState(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerheader}>
          <Text style={styles.header}>Profile</Text>
          <ImageBackground
            style={styles.headerBackground}
            source={require('../../assets/profile-background.png')}
            resizeMode="contain">
            <Image source={require('../../assets/user.png')} />
          </ImageBackground>
          <Text style={styles.name}>Felicia Joker</Text>
          <Text style={styles.email}>feliciajoker@gmail.com</Text>
          <Text style={styles.email}>08148985948</Text>
        </View>
        <View style={styles.containerMiddle}>
          <View style={styles.points}>
            <View style={styles.pointsText}>
              <Text style={styles.pointsNumber}>
                100{' '}
                <Text
                  style={[
                    styles.pointsNumber,
                    {color: '#252525', fontSize: 14, lineHeight: 16.8},
                  ]}>
                  points
                </Text>
              </Text>
              <Text style={styles.pointsAddress}>Joker_123, Lagos</Text>
            </View>
            <Image source={require('../../assets/points.png')} />
          </View>
          <TouchableOpacity
            style={styles.position}
            onPress={() => navigation.navigate('Leaderboard')}>
            <View style={styles.positionTexts}>
              <Text style={styles.pointsNumber}># 3</Text>
              <View style={styles.positionSecond}>
                <Text style={styles.positionTitle}>Position</Text>
                <Text style={styles.positionText}>Tap to check the board</Text>
              </View>
            </View>
            <Image source={require('../../assets/position.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.account}>
          <Text style={styles.accountTitle}>Account Overview</Text>
          <View style={styles.accountBody}>
            {profileLinks?.map((items, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (items.modal === false) navigation.navigate(items.link);
                    else {
                      if (items.title === 'My Profile') setProfilePop(true);
                      else if (items.title === 'Manage Address')
                        setAddress(true);
                    }
                  }}
                  style={styles.accountSingle}
                  key={index}>
                  <View style={styles.accountFirst}>
                    <View style={styles.accountPicture}>
                      <Image source={items.image} />
                    </View>
                    <Text style={styles.accountName}>{items.title}</Text>
                  </View>
                  <Icon
                    type={Icons.SimpleLineIcons}
                    name="arrow-right"
                    size={22}
                    color="#43CC7A"
                  />
                </TouchableOpacity>
              );
            })}
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={[styles.accountSingle, {backgroundColor: '#FEF2F2'}]}>
              <View style={styles.accountFirst}>
                <View
                  style={[styles.accountPicture, {backgroundColor: '#FFEBEE'}]}>
                  <Image source={require('../../assets/logout.png')} />
                </View>
                <Text style={styles.accountName}>Log Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ProfileDetails
        visible={profilePop}
        action={() => setProfilePop(false)}
      />
      <ManageAddress action={() => setAddress(false)} visible={address} />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    gap: 32,
  },
  containerheader: {
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#0D0D0D',
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
  },
  headerBackground: {
    height: 152,
    width: 163,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    lineHeight: 19.2,
    fontFamily: fonts.Bold,
    color: '#252525',
    marginTop: -30,
    marginBottom: 12,
  },
  email: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#3D3D3D',
  },
  containerMiddle: {
    flexDirection: 'row',
    gap: 16,
  },
  points: {
    width: '55%',
    backgroundColor: '#FFFAF0',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
    alignItems: 'flex-end',
    paddingLeft: 16,
  },
  pointsText: {
    paddingBottom: 12,
    gap: 8,
  },
  pointsNumber: {
    fontFamily: fonts.Bold,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#0D0D0D',
  },
  pointsAddress: {
    color: '#3D3D3D',
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
  },
  position: {
    width: '40%',
    backgroundColor: '#FFFAF0',
    borderRadius: 8,
    flexDirection: 'row',
    height: 64,
    flexWrap: 'nowrap',
    alignItems: 'flex-end',
    paddingLeft: 16,
  },
  positionTexts: {
    gap: 8,
    paddingBottom: 5,
  },
  positionSecond: {
    gap: 4,
  },
  positionTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#3D3D3D',
  },
  positionText: {
    color: '#000000',
    fontSize: 8,
    lineHeight: 9.6,
    fontFamily: fonts.SemiBold,
  },
  account: {
    gap: 24,
  },
  accountTitle: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#000000',
  },
  accountBody: {
    gap: 16,
  },
  accountSingle: {
    backgroundColor: '#F3FCF7',
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    flexDirection: 'row',
  },
  accountFirst: {
    flexDirection: 'row',
    gap: 24,
    alignItems: 'center',
  },
  accountPicture: {
    width: 40,
    height: 40,
    backgroundColor: '#EAF9F0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountName: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    lineHeight: 16.8,
    color: '#3D3D3D',
  },
});
