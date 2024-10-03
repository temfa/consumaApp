/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import Icon, {Icons} from './Icons';
import {fonts} from '../constants/fonts';

type Props = {
  img: ImageSourcePropType;
  name: string;
  size: string;
  price: string;
  add: () => void;
  minus: () => void;
  number: number;
};

const SingleCart: FC<Props> = ({
  img,
  name,
  size,
  price,
  add,
  minus,
  number,
}) => {
  return (
    <View style={styles.singleCartContainer}>
      <Image source={img} width={105} height={14} style={{height: 84}} />
      <View style={styles.singleCartDetails}>
        <View style={styles.singleCartTitle}>
          <View style={styles.singleCartName}>
            <Text numberOfLines={2} ellipsizeMode="clip" style={styles.name}>
              {name}
            </Text>
            <Text style={[styles.name, {color: '#555555'}]}>{size}</Text>
          </View>
          <Icon
            type={Icons.FontAwesome}
            name="trash-o"
            color="#F64C4C"
            size={20}
          />
        </View>
        <View style={styles.singleCartPrice}>
          <Text style={styles.name}>{price}</Text>
          <View style={styles.singleAction}>
            <TouchableOpacity onPress={add}>
              <Icon
                type={Icons.Ionicons}
                name="add-circle-outline"
                color="#58D189"
                size={32}
              />
            </TouchableOpacity>
            <Text>{number}</Text>
            <TouchableOpacity onPress={minus}>
              <Icon
                type={Icons.MaterialCommunityIcons}
                name="minus-circle-outline"
                color="#58D189"
                size={32}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingleCart;

const styles = StyleSheet.create({
  singleCartContainer: {
    flexDirection: 'row',
    paddingVertical: 16,
    gap: 16,
  },
  singleCartDetails: {
    flex: 1,
    gap: 10,
    justifyContent: 'space-between',
  },
  singleCartTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  singleCartName: {
    gap: 8,
  },
  name: {
    color: '#3D3D3D',
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
  },
  singleCartPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  singleAction: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
});
