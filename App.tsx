/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/Onboarding/WelcomeScreen';
import SignupScreen from './src/screens/Onboarding/SignupScreen';
import VerifyOtpScreen from './src/screens/Onboarding/VerifyOtpScreen';
import UserInterestScreen from './src/screens/Onboarding/UserInterestScreen';
import UserProfilling from './src/screens/Onboarding/UserProfilling';
import {ButtonTab} from './src/utils/navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import LoginScreen from './src/screens/Onboarding/LoginScreen';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme,
    backgroundColor: '#fff',
  },
};

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <BottomSheetModalProvider>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
            <Stack.Screen name="UserInterest" component={UserInterestScreen} />
            <Stack.Screen name="UserProfilling" component={UserProfilling} />
            <Stack.Screen name="HomeScreen" component={ButtonTab} />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
      <Toast />
    </GestureHandlerRootView>
  );
};

export default App;
