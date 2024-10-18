/* eslint-disable curly */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import BestDeals from '../../components/BestDeals';
import Products from '../../components/Products';
import Restaurants from '../../components/Restaurants';
import Notification from '../../components/Notification';
import Modals from '../../components/Modals';
import Icon, {Icons} from '../../components/Icons';
import {TouchableOpacity} from 'react-native';
import {getItem} from '../../utils/asyncStorage';
import {truncateText} from '../../utils/helper';

const HomeScreen = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const getSingleAddress = async () => {
    const data = await getItem('singleAddress');
    if (data) setAddress(data as string);
  };
  useEffect(() => {
    getSingleAddress();
    getTimeOfDay();
  }, []);
  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setTime('Top of the Morning!');
    } else if (currentHour >= 12 && currentHour < 16) {
      setTime('Top of the Afternoon!');
    } else if (currentHour >= 16 && currentHour < 19) {
      setTime('Top of the Evening!');
    } else {
      setTime('Top of the Night!');
    }
  };
  const product = [
    {
      id: '1',
      image: require('../../assets/oil.png'),
      title: 'Devon’s King’s Oil',
      size: '3L',
      price: 5000,
    },
    {
      id: '2',
      image: require('../../assets/ricebag.png'),
      title: 'East End Basmati Rice',
      size: '1kg',
      price: 60000,
    },
    {
      id: '3',
      image: require('../../assets/oil.png'),
      title: 'Devon’s King’s Oil',
      size: '3L',
      price: 5000,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeHeader}>
            <View style={styles.welcomeText}>
              <Text style={styles.welcomeText1}>Welcome, Felicia</Text>
              <Text style={styles.welcomeText2}>{time}</Text>
            </View>
            <SimpleLineIcons name="bell" color="#292D32" size={20} />
          </View>
          <View style={styles.deliverContainer}>
            <View style={styles.deliverWrapper}>
              <FontAwesome6 name="location-dot" color="#2EC66B" size={15} />
              <View style={styles.deliverText}>
                <Text style={styles.deliverText1}>Deliver to</Text>
                <Text style={styles.deliverText2}>
                  {truncateText(address, 25)}
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
      <Modals
        visible={visible}
        points={['25%', '50%']}
        setFalse={() => {
          setVisible(false);
        }}>
        <View style={styles.contentContainer}>
          <TouchableOpacity style={styles.close}>
            <TouchableOpacity
              onPress={() => {
                setVisible(false);
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
          <Image source={require('../../assets/welcomeHome.png')} />
          <Text style={styles.welcomeModalText1}>
            Welcome to{' '}
            <Text style={{color: colors.primaryGreen}}> Consuma!</Text>
          </Text>
          <Text style={styles.welcomeModalText2}>
            Never forget to eat. We'll ensure you're always reminded to eat your
            meals on time.
          </Text>
        </View>
      </Modals>
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
    paddingBottom: 24,
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
