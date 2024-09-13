/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {notificationData} from '../../utils/data';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';

const NotificationScreen = () => {
  const [active, setActive] = useState(-200);
  return (
    <View style={styles.container}>
      {notificationData?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.notificationContainer}
            onPress={() => {
              if (active === index) setActive(-200);
              else setActive(index);
            }}>
            <View style={styles.notificationWrapper}>
              <View
                style={[
                  styles.notificationImage,
                  {
                    backgroundColor:
                      item.title === 'Your Order has been picked up'
                        ? '#FEF2F2'
                        : '#EAF9F0',
                  },
                ]}>
                <Image source={item.image} />
              </View>
              <View style={styles.notificationTextBody}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text
                  style={styles.notificationText}
                  numberOfLines={active === index ? 10 : 2}
                  ellipsizeMode="tail">
                  Your deliverable Order ID:{' '}
                  <Text style={styles.bold}>{item.orderId}</Text> ,{' '}
                  <Text style={styles.bold}>{item.productName},</Text> Address:
                  <Text style={styles.bold}>{item.address}</Text> Quantity:
                  <Text style={styles.bold}>{item.quantity}</Text> , Amount
                  each:
                  <Text style={styles.bold}>{item.amount}</Text>
                </Text>
              </View>
            </View>
            <Text style={styles.time}>{item.time}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  notificationContainer: {
    flexDirection: 'row',
    gap: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 16,
    borderBottomWidth: 2,
    borderColor: '#EEEEEE',
    // borderRadius: 50,
    width: '100%',
  },
  notificationWrapper: {
    flexDirection: 'row',
    gap: 21,
    alignItems: 'center',
  },

  notificationImage: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notificationTextBody: {
    width: 221,
    gap: 8,
  },

  notificationTitle: {
    fontSize: 12,
    fontFamily: fonts.SemiBold,
    color: '#252525',
    lineHeight: 14.4,
  },
  notificationText: {
    fontFamily: fonts.Regular,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#6E6E6E',
  },
  bold: {
    fontFamily: fonts.Medium,
    color: '#3D3D3D',
  },
  time: {
    color: '#252525',
    fontSize: 12,
    fontFamily: fonts.Medium,
    lineHeight: 14.4,
  },
});
