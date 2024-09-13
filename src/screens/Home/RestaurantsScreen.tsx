/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {fonts} from '../../constants/fonts';
import {restaurantsData} from '../../utils/data';
import SingleRestaurants from '../../components/SingleRestaurants';
import {colors} from '../../constants/colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Notification from '../../components/Notification';
import InfoText from '../../components/InfoText';

const RestaurantsScreen = () => {
  return (
    <View style={styles.container}>
      <InfoText text="Vendors are displayed based on your nearest  location" />
      <View style={styles.screenWrapper}>
        <TouchableOpacity style={styles.filter}>
          <Text style={styles.filterText}>Available</Text>
          <SimpleLineIcons name="arrow-down" size={22} color={'#2EC66B'} />
        </TouchableOpacity>
        <FlatList
          data={restaurantsData}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{
                marginVertical: 16,
                borderBottomWidth: 1,
                borderColor: '#EAF9F0',
              }}
            />
          )}
          renderItem={({item}) => (
            <SingleRestaurants
              name={item.name}
              rating={item.rating}
              image={item.image}
              page={true}
            />
          )}
        />
      </View>
      <Notification />
    </View>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
    backgroundColor: colors.white,
    flex: 1,
  },
  screenWrapper: {
    gap: 16,
  },
  filter: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    backgroundColor: '#EAF9F0',
    borderRadius: 6,
    width: 116,
    gap: 8,
    alignItems: 'center',
    paddingVertical: 12,
  },
  filterText: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
    color: '#2EC66B',
  },
});
