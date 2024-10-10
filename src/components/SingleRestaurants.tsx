/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fonts} from '../constants/fonts';

type Props = {
  image: ImageSourcePropType;
  name: string;
  rating: string;
  page: boolean;
  action: () => void;
};

const SingleRestaurants: FC<Props> = ({name, rating, image, page, action}) => {
  return (
    <TouchableOpacity style={styles.restaurantContainer} onPress={action}>
      <Image
        source={image}
        style={{
          ...styles.restaurantImage,
          width: page ? '100%' : 190,
          height: page ? 132 : 96,
        }}
      />
      <View style={styles.restaurantDetails}>
        <Text style={styles.restaurantTitle}>{name}</Text>
        <View style={styles.rating}>
          <Text style={styles.rate}>{rating}</Text>
          <AntDesign name="staro" color={'#FF6600'} size={18} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SingleRestaurants;

const styles = StyleSheet.create({
  restaurantContainer: {
    gap: 8,
  },
  restaurantImage: {
    borderRadius: 8,
  },
  restaurantDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
});
