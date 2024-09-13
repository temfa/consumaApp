/* eslint-disable react-native/no-inline-styles */
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {leaderboards} from '../../utils/data';
import {fonts} from '../../constants/fonts';

const LeaderboardScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={leaderboards}
        renderItem={({item}) => (
          <View style={styles.leaderboardSingle}>
            <View style={styles.leaderboardSingleText}>
              <Text style={styles.number}>{item.id}</Text>
              <View style={styles.imageText}>
                <Image source={item.picture} style={styles.image} />
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </View>
            <Text style={[styles.text, {color: '#0D0D0D'}]}>{item.points}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View style={styles.leaderboardHeader}>
            <Text style={styles.leaderBoardHeaderText}>Usernames</Text>
            <Text style={styles.leaderBoardHeaderText}>Points</Text>
          </View>
        }
      />
    </View>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  leaderboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 0.4,
    borderBottomColor: '#D5F4E1',
  },
  leaderBoardHeaderText: {
    fontFamily: fonts.SemiBold,
    fontSize: 12,
    lineHeight: 14.4,
    color: '#0D0D0D',
  },
  leaderboardSingle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 0.4,
    borderBottomColor: '#D5F4E1',
  },
  leaderboardSingleText: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
  },
  number: {
    width: 24,
    fontSize: 14,
    lineHeight: 16.8,
    fontFamily: fonts.SemiBold,
    color: '#000000',
  },
  imageText: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  text: {
    fontFamily: fonts.SemiBold,
    fontSize: 14,
    lineHeight: 16.8,
    color: '#3D3D3D',
  },
});
