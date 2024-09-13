import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import React from 'react';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';
import {useNavigation} from '@react-navigation/native';

const ProductHeader = ({title, link}: {title: string; link: never}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.productHeader}>
      <Text style={styles.productTitle}>{title}</Text>
      <TouchableOpacity
        style={styles.seeMore}
        onPress={() => navigation.navigate(link)}>
        <Text style={styles.seeMoreText}>See More</Text>
        <SimpleLineIcons
          name="arrow-right"
          size={16}
          color={colors.primaryGreen}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductHeader;

const styles = StyleSheet.create({
  productHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
  },
  productTitle: {
    color: '#252525',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    lineHeight: 19.2,
  },
  seeMore: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  seeMoreText: {
    color: colors.primaryGreen,
    fontSize: 12,
    fontFamily: fonts.SemiBold,
    lineHeight: 14.4,
  },
});
