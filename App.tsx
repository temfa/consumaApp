/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/Onboarding/WelcomeScreen';
import SignupScreen from './src/screens/Onboarding/SignupScreen';
import VerifyOtpScreen from './src/screens/Onboarding/VerifyOtpScreen';
import UserInterestScreen from './src/screens/Onboarding/UserInterestScreen';
import UserProfilling from './src/screens/Onboarding/UserProfilling';
import {ButtonTab} from './src/utils/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
            <Stack.Screen name="UserInterest" component={UserInterestScreen} />
            <Stack.Screen name="UserProfilling" component={UserProfilling} />
            <Stack.Screen name="HomeScreen" component={ButtonTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
