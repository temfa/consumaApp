/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from '@react-navigation/native';
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
import {ActivityIndicator, useColorScheme, View} from 'react-native';
import {getItem} from './src/utils/asyncStorage';
import {CartProvider} from './src/context/cartContext';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [showOnboarded, setShowOnboarded] = useState<string | null>(null);
  const colorScheme = useColorScheme();
  const MyTheme = {
    ...DefaultTheme,
    color: {
      ...DefaultTheme,
      backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
    },
  };
  // Appearance.setColorScheme('dark');

  useEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  const checkIfAlreadyOnboarded = async () => {
    const onboarded = await getItem('onboarded');
    if (onboarded === undefined || onboarded === null) {
      // successfully onboarded, don't show onboarding screen once again
      setShowOnboarded('first');
    } else if (onboarded) {
      // didn't onboard, show onboarding screen
      setShowOnboarded('false');
    } else {
      setShowOnboarded('true');
    }
  };
  if (showOnboarded === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={'#000'} />
      </View>
    );
  }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : MyTheme}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <NavigationContainer theme={MyTheme}>
            <CartProvider>
              <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName={
                  showOnboarded === 'first'
                    ? 'Welcome'
                    : showOnboarded === 'true'
                    ? 'LoginScreen'
                    : 'HomeScreen'
                }>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
                <Stack.Screen
                  name="UserInterest"
                  component={UserInterestScreen}
                />
                <Stack.Screen
                  name="UserProfilling"
                  component={UserProfilling}
                />
                <Stack.Screen name="HomeScreen" component={ButtonTab} />
              </Stack.Navigator>
            </CartProvider>
          </NavigationContainer>
        </BottomSheetModalProvider>
        <Toast />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
};

export default App;
