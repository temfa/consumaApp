/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import FoodProduct from './FoodProduct';
import {colors} from '../constants/colors';
import Notification from './Notification';
import {productData} from '../utils/data';

const ProductPage = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productData}
        renderItem={({item}) => (
          <FoodProduct
            image={item.image}
            title={item.title}
            size={item.size}
            price={item.price}
            page={true}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        // eslint-disable-next-line react/no-unstable-nested-components
        ItemSeparatorComponent={() => <View style={{marginVertical: 24}} />}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
      />
      <Notification />
    </View>
  );
};

export default ProductPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
