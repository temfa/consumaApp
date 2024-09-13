/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import FoodProduct from '../../components/FoodProduct';
import {productData} from '../../utils/data';

const WishlistScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productData?.slice(0, 4)}
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
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
