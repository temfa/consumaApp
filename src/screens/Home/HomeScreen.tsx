import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import BestDeals from '../../components/BestDeals';
import Products from '../../components/Products';
import Restaurants from '../../components/Restaurants';
import Notification from '../../components/Notification';

const HomeScreen = () => {
  const product = [
    {
      id: '1',
      image: require('../../assets/oil.png'),
      title: 'Devon’s King’s Oil',
      size: '3L',
      price: '5,000',
    },
    {
      id: '2',
      image: require('../../assets/ricebag.png'),
      title: 'East End Basmati Rice',
      size: '1kg',
      price: '60,000',
    },
    {
      id: '3',
      image: require('../../assets/oil.png'),
      title: 'Devon’s King’s Oil',
      size: '3L',
      price: '5,000',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeHeader}>
            <View style={styles.welcomeText}>
              <Text style={styles.welcomeText1}>Welcome, Felicia</Text>
              <Text style={styles.welcomeText2}>Top of the Morning!</Text>
            </View>
            <SimpleLineIcons name="bell" color="#292D32" size={20} />
          </View>
          <View style={styles.deliverContainer}>
            <View style={styles.deliverWrapper}>
              <FontAwesome6 name="location-dot" color="#2EC66B" size={15} />
              <View style={styles.deliverText}>
                <Text style={styles.deliverText1}>Deliver to</Text>
                <Text style={styles.deliverText2}>
                  Ajah Lekki Estate Phase 1
                </Text>
              </View>
            </View>
            <SimpleLineIcons
              name="arrow-down"
              color={colors.primaryGreen}
              size={15}
            />
          </View>
        </View>
        <BestDeals />
        <Products
          title="Food Store"
          data={product}
          link={'Food Store' as never}
        />
        <Products
          title="Recommended For You"
          data={product}
          link={'Recommended For You' as never}
        />
        <Restaurants />
      </ScrollView>
      <Notification />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: colors.white,
    paddingBottom: 37,
  },
  welcomeContainer: {
    backgroundColor: '#EAF9F0',
    borderRadius: 16,
    elevation: 3,
  },
  welcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FBF9F9',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    padding: 12,
  },
  welcomeText: {
    gap: 4,
  },

  welcomeText1: {
    fontSize: 14,
    fontFamily: fonts.SemiBold,
    lineHeight: 16.8,
    color: '#252525',
  },

  welcomeText2: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#555555',
  },
  deliverContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 12,
    paddingRight: 16,
  },
  deliverWrapper: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  deliverText: {
    flexDirection: 'row',
    gap: 4,
  },
  deliverText1: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#252525',
  },
  deliverText2: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
    color: colors.primaryGreen,
  },
});
