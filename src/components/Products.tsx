/* eslint-disable react-native/no-inline-styles */
import {FlatList, ImageSourcePropType, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import FoodProduct from './FoodProduct';
import ProductHeader from './ProductHeader';

type Props = {
  title: string;
  link: never;
  data: {
    id: string;
    image: ImageSourcePropType;
    title: string;
    size: string;
    price: number;
  }[];
};

const Products: FC<Props> = ({title, data, link}) => {
  return (
    <View style={styles.productContainer}>
      <ProductHeader title={title} link={link} />
      <FlatList
        data={data}
        horizontal={true}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={{marginHorizontal: 16}} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <FoodProduct
            image={item.image}
            title={item.title}
            size={item.size}
            price={item.price}
          />
        )}
      />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  productContainer: {
    gap: 24,
  },
});
