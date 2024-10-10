/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants/colors';
import OrderHeader from '../../components/OrderHeader';
import Icon, {Icons} from '../../components/Icons';
import {fonts} from '../../constants/fonts';
import {orders} from '../../utils/data';
import {truncateText} from '../../utils/helper';

const OrderHistoryScreen = () => {
  const [active, setActive] = useState(-200);
  return (
    <View style={styles.container}>
      <OrderHeader active="History" />
      <View style={styles.historyWrapper}>
        <View style={styles.recent}>
          <Text style={styles.recentText}>Recent</Text>
          <Icon
            type={Icons.SimpleLineIcons}
            name="arrow-down"
            size={16}
            color={colors.primaryGreen}
          />
        </View>
        <ScrollView style={styles.orders} showsVerticalScrollIndicator={false}>
          {orders?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.orderSingle}
                onPress={() => {
                  if (active === index) setActive(-200);
                  else setActive(index);
                }}>
                <View style={styles.orderFirst}>
                  <Image
                    source={item.image}
                    width={65}
                    height={52}
                    style={{width: 65, height: 52}}
                  />
                  <View style={styles.orderDetails}>
                    <View style={styles.head}>
                      <View style={styles.status}>
                        <View
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: 50,
                            backgroundColor:
                              item.status === 'On-going'
                                ? '#FE9B0E'
                                : item.status === 'Delivered'
                                ? '#0C9D61'
                                : '#F64C4C',
                          }}
                        />
                        <Text style={styles.statusText}>{item.status}</Text>
                      </View>
                      <Text style={styles.orderid}>
                        Order #: <Text style={{color: '#252525'}}>556792</Text>
                      </Text>
                    </View>
                    <Text style={[{...styles.orderid, color: '#3D3D3D'}]}>
                      {truncateText(item.title, 15)}
                    </Text>
                    {active === index ? (
                      <>
                        <View style={styles.address}>
                          <Icon
                            type={Icons.FontAwesome6}
                            name="location-dot"
                            size={20}
                            color={colors.primaryGreen}
                          />
                          <Text
                            style={[{...styles.statusText, color: '#252525'}]}>
                            {item.address}
                          </Text>
                        </View>
                        <Text
                          style={[{...styles.statusText, color: '#555555'}]}>
                          Quantity:{' '}
                          <Text style={{color: '#000000'}}>
                            {item.quantity}
                          </Text>
                        </Text>
                        <Text
                          style={[{...styles.statusText, color: '#555555'}]}>
                          Amount each:{' '}
                          <Text style={{color: '#000000'}}>{item.price}</Text>
                        </Text>
                      </>
                    ) : null}
                    {item.status === 'On-going' ? null : (
                      <Text style={styles.date}>{item.date}</Text>
                    )}
                  </View>
                </View>
                <Icon
                  type={Icons.SimpleLineIcons}
                  name={active === index ? 'arrow-up' : 'arrow-down'}
                  size={16}
                  color="#292D32"
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 16,
    gap: 16,
  },
  historyWrapper: {
    paddingHorizontal: 16,
    gap: 24,
  },
  recent: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#EAF9F0',
    width: 102,
    borderRadius: 6,
  },
  recentText: {
    fontSize: 14,
    lineHeight: 16.8,
    fontFamily: fonts.SemiBold,
    color: colors.primaryGreen,
  },
  orders: {
    height: 550,
  },
  orderSingle: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  orderFirst: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  orderDetails: {
    width: 139,
    gap: 12,
  },
  head: {
    gap: 6,
  },
  status: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    fontFamily: fonts.SemiBold,
    lineHeight: 14.4,
    color: '#555555',
  },
  orderid: {
    fontSize: 14,
    lineHeight: 16.8,
    fontFamily: fonts.SemiBold,
    color: '#555555',
  },
  address: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  date: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#555555',
  },
});
