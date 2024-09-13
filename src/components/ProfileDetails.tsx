/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Modals from './Modals';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';

const ProfileDetails = ({
  visible,
  action,
}: {
  visible: boolean;
  action: () => void;
}) => {
  return (
    <Modals visible={visible} action={action}>
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <View style={styles.profileForm}>
          <View style={styles.profileDouble}>
            <View style={[styles.profileSingle, {width: '48%'}]}>
              <Text style={styles.label}>FirstName</Text>
              <TextInput
                placeholderTextColor="#9E9E9E"
                style={styles.input}
                placeholder="e.g., David"
                keyboardType="default"
              />
            </View>
            <View style={[styles.profileSingle, {width: '48%'}]}>
              <Text style={styles.label}>LastName </Text>
              <TextInput
                placeholderTextColor="#9E9E9E"
                style={styles.input}
                placeholder="e.g., King"
                keyboardType="default"
              />
            </View>
          </View>
          <View style={styles.profileSingle}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholderTextColor="#9E9E9E"
              style={styles.input}
              placeholder="e.g., davidadewale21@gmail.com"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.profileSingle}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholderTextColor="#9E9E9E"
              style={styles.input}
              placeholder="0807 6578 456"
              keyboardType="phone-pad"
            />
          </View>
          <View style={styles.profileDouble}>
            <View style={[styles.profileSingle, {width: '48%'}]}>
              <Text style={styles.label}>D . O . B (Date Of Birth)</Text>
              <TextInput
                placeholderTextColor="#9E9E9E"
                style={styles.input}
                placeholder="DD / MM / YY"
                keyboardType="default"
              />
            </View>
            <View style={[styles.profileSingle, {width: '48%'}]}>
              <Text style={styles.label}>Username </Text>
              <TextInput
                placeholderTextColor="#9E9E9E"
                style={styles.input}
                placeholder="e.g., COnsuma1"
                keyboardType="default"
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={action}>
          <Text style={styles.buttonText}>Apply Changes</Text>
        </TouchableOpacity>
      </View>
    </Modals>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  header: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    lineHeight: 19.2,
    color: '#0D0D0D',
  },
  profileForm: {
    gap: 16,
  },
  profileDouble: {
    flexDirection: 'row',
    gap: 16,
  },
  profileSingle: {
    width: '100%',
    gap: 8,
  },
  label: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#555555',
  },
  input: {
    backgroundColor: '#EEEEEE',
    borderRadius: 6,
    height: 43,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#252525',
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
  button: {
    backgroundColor: colors.primaryGreen,
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 16,
    lineHeight: 19.2,
    fontFamily: fonts.Bold,
  },
});
