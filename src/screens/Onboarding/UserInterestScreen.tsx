/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import {fonts} from '../../constants/fonts';
import {productPreference} from '../../utils/data';
import {colors} from '../../constants/colors';

const UserInterestScreen = ({navigation}: {navigation: any}) => {
  const [choices, setChoices] = useState<string[]>([]);
  return (
    <View style={styles.cont}>
      <View style={styles.container}>
        <Text style={styles.header}>Choose 3 or more foods that you like?</Text>
        <FlatList
          data={productPreference}
          numColumns={2}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                ...styles.product,
                width: item.width as unknown as number,
                borderWidth: choices.includes(item.id) ? 1.2 : 0,
                borderColor: '#43CC7A',
              }}
              onPress={
                choices.includes(item.id)
                  ? () => {
                      setChoices(
                        choices.filter(items => {
                          return items !== item.id;
                        }),
                      );
                    }
                  : () => setChoices([...choices, item.id])
              }>
              <Text style={styles.productTitle}>{item.name}</Text>
              <Image source={item.image} />
            </TouchableOpacity>
          )}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
        <PrimaryButton
          title={
            choices.length > 2
              ? 'Done, I have selected'
              : 'You have not selected'
          }
          action={() => navigation.navigate('UserProfilling')}
          active={choices.length > 2 ? true : false}
        />
      </View>
    </View>
  );
};

export default UserInterestScreen;

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    // height: '100%',
    gap: 32,
    padding: 16,
  },
  header: {
    fontSize: 24,
    lineHeight: 28.8,
    fontFamily: fonts.SemiBold,
    color: '#252525',
  },
  product: {
    backgroundColor: '#EAF9F0',
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 8,
    gap: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 8,
  },
  productTitle: {
    width: '100%',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    lineHeight: 16.2,
    color: '#252525',
  },
});
