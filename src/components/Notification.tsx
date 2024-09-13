import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.notificationWrapper}
      onPress={() => navigation.navigate('Notifications' as never)}>
      <Ionicons name="bag" color={colors.white} size={32} style={styles.icon} />
      <Text style={styles.notificationText}>4</Text>
    </TouchableOpacity>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notificationWrapper: {
    width: 70,
    height: 56,
    borderRadius: 100,
    backgroundColor: '#43CC7A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 157,
    right: 16,
  },
  icon: {
    width: 32,
    height: 32,
  },
  notificationText: {
    fontSize: 20,
    fontFamily: fonts.Bold,
    color: '#F5F5F5',
    lineHeight: 28,
  },
});
