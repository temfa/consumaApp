import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {formatter} from '../../utils/formatter';
import Icon, {Icons} from '../../components/Icons';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/navigation';
import {CartContext} from '../../context/cartContext';
import {generate} from '../../utils/helper';

const ProductSingleScreen = () => {
  const {addToCartItem} = useContext(CartContext);
  const items = useRoute<RouteProp<RootStackParamList, 'Products'>>().params;
  const [number, setNumber] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={items.image} style={styles.productImage} />
      </View>
      <View style={styles.body}>
        <View style={styles.restaurantDetails}>
          <View style={styles.row}>
            <Text style={styles.restaurantTitle}>{items.title}</Text>
            <Text style={styles.restaurantTitle}>{items.size}</Text>
          </View>
          <Text style={styles.restaurantTitle}>
            {formatter.format(items.price)}
          </Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.singleAction}>
            <TouchableOpacity
              onPress={() => {
                setNumber(number - 1);
              }}>
              <Icon
                type={Icons.MaterialCommunityIcons}
                name="minus-circle-outline"
                color="#58D189"
                size={32}
              />
            </TouchableOpacity>
            <Text style={styles.number}>{number}</Text>
            <TouchableOpacity onPress={() => setNumber(number + 1)}>
              <Icon
                type={Icons.Ionicons}
                name="add-circle-outline"
                color="#58D189"
                size={32}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.add}
            onPress={() => {
              const item = {
                id: generate(6),
                image: items.image,
                title: items.title,
                size: items.size,
                price: items.price,
                number: number,
              };
              addToCartItem(item);
            }}>
            <Text style={styles.addText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wish}>
            <Icon type={Icons.AntDesign} name="hearto" size={24} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buyNow}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Product information</Text>
          <Text style={styles.description}>
            2.4G Air Mouse with Touchpad Keyboard i8 Arabic French Spanish
            Russian Backlit Mini Wireless Keyboard for PC Android TV Box
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductSingleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    gap: 24,
  },
  imageContainer: {
    width: '100%',
    height: 350,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    resizeMode: 'contain',
    width: 300,
    height: 184,
  },
  body: {
    paddingHorizontal: 16,
    gap: 16,
  },
  restaurantDetails: {
    flexDirection: 'column',
    // alignItems: 'center',
    gap: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EAF9F0',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantTitle: {
    color: '#0D0D0D',
    fontSize: 15,
    fontFamily: fonts.SemiBold,
    lineHeight: 14.4,
  },
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  singleAction: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  number: {
    color: '#252525',
    fontFamily: fonts.SemiBold,
    fontSize: 16,
    lineHeight: 19.2,
  },
  add: {
    width: 150,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: '#000',
    elevation: 2,
  },
  addText: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    lineHeight: 21,
    color: colors.white,
    textAlign: 'center',
  },
  wish: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.white,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyNow: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 12,
    borderRadius: 6,
  },
  buyNowText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    lineHeight: 16.8,
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    lineHeight: 27,
    color: '#010E0D',
  },
  description: {
    fontFamily: fonts.Regular,
    fontSize: 12,
    lineHeight: 18,
    color: '#858585',
  },
});
