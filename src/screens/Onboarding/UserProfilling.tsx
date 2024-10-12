/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {setItem} from '../../utils/asyncStorage';

const UserProfilling = ({navigation}: {navigation: any}) => {
  const [state, setState] = useState(false);
  return (
    <View style={styles.container}>
      <Image
        style={{width: '100%'}}
        source={
          state
            ? require('../../assets/profilling2.png')
            : require('../../assets/profilling1.png')
        }
      />
      <View style={styles.containerText}>
        {state ? (
          <Text style={styles.containerQuestion}>
            Do <Text style={{color: '#43CC7A'}}>You</Text> forget to Eat?
          </Text>
        ) : (
          <Text style={styles.containerQuestion}>
            Are <Text style={{color: '#43CC7A'}}>You</Text> a foodie?
          </Text>
        )}
        <View style={styles.containerResponse}>
          <TouchableOpacity
            style={styles.firstAnswer}
            onPress={() => {
              if (state) {
                navigation.navigate('HomeScreen');
              } else {
                setState(true);
              }
            }}>
            <Text style={{...styles.firstAnswerText, color: '#3D3D3D'}}>
              {state ? 'No, I don’t' : 'No, I am not'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.secondAnswer}
            onPress={async () => {
              if (state) {
                await setItem('onboarded', true);
                navigation.navigate('HomeScreen');
              } else {
                setState(true);
              }
            }}>
            <Text style={{...styles.firstAnswerText, color: '#F2F2F2'}}>
              {state ? 'Yes I do' : 'Yes I am 😌'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserProfilling;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 36,
    gap: 32,
  },
  containerText: {
    gap: 24,
  },
  containerQuestion: {
    fontFamily: fonts.SemiBold,
    color: '#252525',
    lineHeight: 28.8,
    fontSize: 24,
  },
  containerResponse: {
    flexDirection: 'row',
    gap: 25,
  },
  firstAnswer: {
    width: '45%',
    borderWidth: 0.8,
    borderColor: '#9E9E9E',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondAnswer: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    width: '45%',
  },
  firstAnswerText: {
    fontSize: 14,
    fontFamily: fonts.Bold,
    lineHeight: 16.8,
  },
});
