/* eslint-disable react-native/no-inline-styles */
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {fonts} from '../constants/fonts';

type Props = {
  image: ImageSourcePropType;
  title: string;
  size: string;
  price: string;
  page?: boolean;
};

const FoodProduct: FC<Props> = ({image, title, size, price, page}) => {
  return (
    <View style={{...styles.container, width: page ? '48%' : 160}}>
      <Image
        source={image}
        width={160}
        height={128}
        style={{width: page ? '100%' : 160, borderRadius: 8}}
      />
      <View style={styles.details}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.detailsText}>
          {title}
        </Text>
        <Text style={{...styles.detailsText, flex: 0}}>| {size}</Text>
      </View>
      <View style={styles.priceList}>
        <Text style={styles.price}>₦{price}</Text>
        <Image source={require('../assets/plus.png')} />
      </View>
    </View>
  );
};

export default FoodProduct;

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  details: {
    flexDirection: 'row',
    gap: 4,
    width: '100%',
  },
  detailsText: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#3D3D3D',
    flex: 1,
  },
  priceList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    color: '#0D0D0D',
    lineHeight: 14.4,
    fontSize: 12,
    fontFamily: fonts.SemiBold,
  },
});
