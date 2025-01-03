/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ProductHeader from './ProductHeader';
import SingleRestaurants from './SingleRestaurants';
import {restaurantsData} from '../utils/data';
import {useNavigation} from '@react-navigation/native';

const Restaurants = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ProductHeader title="Restaurants" link={'Restaurant' as never} />
      <FlatList
        data={restaurantsData}
        horizontal
        keyExtractor={item => item.id}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={{marginHorizontal: 16}} />}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <SingleRestaurants
            action={() => navigation.navigate('RestaurantSingle' as never)}
            name={item.name}
            rating={item.rating}
            image={item.image}
            page={false}
          />
        )}
      />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    gap: 24,
    marginTop: 24,
  },
});
