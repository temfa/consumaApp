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
      <Ionicons name="bag" color={colors.white} size={20} style={styles.icon} />
      <Text style={styles.notificationText}>4</Text>
    </TouchableOpacity>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notificationWrapper: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#43CC7A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 57,
    right: 16,
  },
  icon: {
    width: 20,
    height: 20,
  },
  notificationText: {
    fontSize: 16,
    fontFamily: fonts.Bold,
    color: '#F5F5F5',
    lineHeight: 28,
    marginTop: -20,
  },
});
