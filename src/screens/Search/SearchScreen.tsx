/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import Icon, {Icons} from '../../components/Icons';
import {productData} from '../../utils/data';
import FoodProduct from '../../components/FoodProduct';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [submit, setSubmit] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.icon} onPress={() => setSubmit(true)}>
            <Icon
              type={Icons.Feather}
              name="search"
              size={22}
              color={colors.primaryGreen}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for foods, grocery, restaurant"
            placeholderTextColor="#6E6E6E"
            onChangeText={e => {
              setSearch(e);
              if (e.length === 0) setSubmit(false);
            }}
            onKeyPress={e => {
              if (e.nativeEvent.key === 'Enter') setSubmit(true);
            }}
          />
          <View style={styles.icon}>
            <Icon
              type={Icons.FontAwesome5}
              name="sliders-h"
              size={22}
              color={colors.primaryGreen}
            />
          </View>
        </View>
        {submit && (
          <>
            <Text>Result 8 for “{search}"</Text>
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
              ItemSeparatorComponent={() => (
                <View style={{marginVertical: 24}} />
              )}
              columnWrapperStyle={{justifyContent: 'space-between'}}
              showsVerticalScrollIndicator={false}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    gap: 16,
  },
  header: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
    color: '#0D0D0D',
  },
  searchWrapper: {
    gap: 24,
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 25,
    padding: 8,
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  searchInput: {
    flex: 1,
    paddingLeft: 8,
    fontSize: 14,
    fontFamily: fonts.Medium,
    lineHeight: 16.8,
    color: '#6E6E6E',
  },
});
