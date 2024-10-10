/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import Icon, {Icons} from '../../components/Icons';
import {fonts} from '../../constants/fonts';
import {menuList} from '../../utils/data';
import FoodProduct from '../../components/FoodProduct';

const RestaurantSingleScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          source={require('../../assets/chicken-republic.png')}
          style={styles.image}
        />
        <View style={styles.restaurantDetails}>
          <Text style={styles.restaurantTitle}>Chicken Republic, Ibadan</Text>
          <View style={styles.rating}>
            <Text style={styles.rate}>4.9/5.0</Text>
            <Icon
              type={Icons.AntDesign}
              name="staro"
              color={'#FF6600'}
              size={18}
            />
          </View>
        </View>
      </View>
      <View style={styles.containerHeader}>
        <Text style={styles.menu}>Menu List</Text>
        <View style={{height: 350}}>
          <FlatList
            numColumns={2}
            data={menuList}
            renderItem={({item}) => (
              <FoodProduct
                page={true}
                image={item.image}
                price={item.price}
                size={item.size}
                title={item.title}
              />
            )}
            keyExtractor={item => item.id}
            // eslint-disable-next-line react/no-unstable-nested-components
            ItemSeparatorComponent={() => <View style={{marginVertical: 16}} />}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
          />
        </View>
      </View>
    </View>
  );
};

export default RestaurantSingleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    gap: 16,
  },
  containerHeader: {
    gap: 16,
  },
  image: {
    width: '100%',
    height: 184,
    borderRadius: 8,
  },
  restaurantDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EAF9F0',
  },
  restaurantTitle: {
    color: '#0D0D0D',
    fontSize: 12,
    fontFamily: fonts.SemiBold,
    lineHeight: 14.4,
  },
  rating: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  rate: {
    fontSize: 12,
    fontFamily: fonts.SemiBold,
    lineHeight: 14.4,
  },
  menu: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.SemiBold,
    lineHeight: 16.8,
    color: colors.primaryGreen,
  },
});
