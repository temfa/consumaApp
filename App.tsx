import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/Onboarding/WelcomeScreen';
import SignupScreen from './src/screens/Onboarding/SignupScreen';
import VerifyOtpScreen from './src/screens/Onboarding/VerifyOtpScreen';
import UserInterestScreen from './src/screens/Onboarding/UserInterestScreen';
import UserProfilling from './src/screens/Onboarding/UserProfilling';
import {ButtonTab} from './src/utils/navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={ButtonTab} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
        <Stack.Screen name="UserInterest" component={UserInterestScreen} />
        <Stack.Screen name="UserProfilling" component={UserProfilling} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
