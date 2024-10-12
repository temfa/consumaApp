/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import Swiper from 'react-native-swiper';

const BestDeals = () => {
  const [active, setActive] = useState(0);
  const data = [
    {
      id: '1',
      title: 'Get 20% discount on your first foods order',
      image: require('../assets/bestdeals.png'),
      width: 140,
      height: 84,
      bac: colors.primaryGreen,
    },
    {
      id: '2',
      title: 'Get 10% discount on your first junks order ',
      image: require('../assets/pop.png'),
      width: 116,
      height: 95,
      bac: '#252525',
    },
    {
      id: '3',
      title: 'Get 15% discount on your fresh foods order ',
      image: require('../assets/fresh.png'),
      width: 145,
      height: 93,
      bac: '#B2008A',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Get the best deals 😊</Text>
      {/* <View style={styles.bestDealsContainer}> */}
      <Swiper
        autoplay={true}
        height={128}
        autoplayTimeout={3}
        showsPagination={false}
        onIndexChanged={index => setActive(index)}>
        {data?.map(item => {
          return (
            <View
              style={[{...styles.bestDeals, backgroundColor: item.bac}]}
              key={item.id}>
              <View style={styles.bestDealsText}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity style={styles.cta}>
                  <Text style={styles.ctaText}>Order Now </Text>
                </TouchableOpacity>
              </View>
              <Image
                source={item.image}
                style={{width: item.width, height: item.height}}
              />
            </View>
          );
        })}
      </Swiper>
      {/* <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          snapToAlignment="start"
          numColumns={1}
          keyExtractor={item => item.id}
          snapToInterval={screenWidth}
          decelerationRate={'fast'}
          onViewableItemsChanged={onViewRef.current}
          renderItem={() => (
            <View style={styles.bestDeals}>
              <View style={styles.bestDealsText}>
                <Text style={styles.title}>
                  Get 20% discount on your first foods order{' '}
                </Text>
                <TouchableOpacity style={styles.cta}>
                  <Text style={styles.ctaText}>Order Now</Text>
                </TouchableOpacity>
              </View>
              <Image source={require('../assets/bestdeals.png')} />
            </View>
          )}
        /> */}
      <View style={styles.pagination}>
        {data?.map((_, index) => {
          return (
            <View
              style={[
                styles.dot,
                index === active && {
                  width: 17,
                  borderRadius: 30,
                },
                {
                  backgroundColor: index === active ? '#43CC7A' : '#96E3B5',
                },
              ]}
              key={index}
            />
          );
        })}
      </View>
    </View>
    // </View>
  );
};

export default BestDeals;

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginTop: 24,
  },
  header: {
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    lineHeight: 16.2,
    color: '#252525',
  },

  bestDeals: {
    paddingVertical: 16,
    paddingLeft: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  bestDealsText: {
    width: 200,
    height: '100%',
    gap: 12,
  },
  title: {
    fontFamily: fonts.SemiBold,
    color: '#FCFCFC',
    lineHeight: 19.2,
    fontSize: 16,
  },

  cta: {
    width: 95,
    backgroundColor: '#FFC450',
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
  },

  ctaText: {
    color: '#0D0D0D',
    lineHeight: 14.4,
    fontSize: 12,
    fontFamily: fonts.Bold,
  },
  bestDealsImage: {
    width: 140,
    height: 84,
  },

  pagination: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#96E3B5',
  },
});
