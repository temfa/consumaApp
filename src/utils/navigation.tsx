/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useRef} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home/HomeScreen';
import FoodStoreScreen from '../screens/Home/FoodStoreScreen';
import ReconmendScreen from '../screens/Home/ReconmendScreen';
import RestaurantsScreen from '../screens/Home/RestaurantsScreen';
import NotificationScreen from '../screens/Home/NotificationScreen';
import {colors} from '../constants/colors';
import Icon, {Icons} from '../components/Icons';
import SearchScreen from '../screens/Search/SearchScreen';
import OrdersScreen from '../screens/Orders/OrdersScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {fonts} from '../constants/fonts';
import * as Animatable from 'react-native-animatable';
import LeaderboardScreen from '../screens/Profile/LeaderboardScreen';
import WishlistScreen from '../screens/Profile/WishlistScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="HomePage"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Food Store" component={FoodStoreScreen} />
      <Stack.Screen name="Recommended For You" component={ReconmendScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantsScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="ProfilePage"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
      <Stack.Screen name="Wishlist" component={WishlistScreen} />
    </Stack.Navigator>
  );
};

const buttonTabData = [
  {
    name: 'Home',
    component: HomeStack,
    type: Icons.Octicons,
    iconName: 'home',
  },
  {
    name: 'Search',
    component: SearchScreen,
    type: Icons.Feather,
    iconName: 'search',
  },
  {
    name: 'Orders',
    component: OrdersScreen,
    type: Icons.Ionicons,
    iconName: 'bag',
  },
  {
    name: 'Profile',
    component: ProfileStack,
    type: Icons.FontAwesome,
    iconName: 'user-circle-o',
  },
];

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);

  useEffect(() => {
    if (viewRef.current) {
      if (focused) {
        viewRef.current.animate({
          0: {rotate: '0deg'},
          1: {rotate: '360deg'},
        });
      } else {
        viewRef.current.animate({
          0: {rotate: '360deg'},
          1: {rotate: '0deg'},
        });
      }
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        style={styles.navContainer}
        ref={viewRef}
        duration={1000}>
        <Icon
          type={item.type}
          name={item.iconName}
          color={focused ? colors.primaryGreen : '#6E6E6E'}
        />
        {focused ? <Text style={styles.navTitle}>{item.name}</Text> : null}
      </Animatable.View>
    </TouchableOpacity>
  );
};

export const ButtonTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primaryGreen,
        tabBarStyle: {
          height: 80,
          elevation: 7,
        },
      }}>
      {buttonTabData?.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
  },
  navContainer: {
    alignItems: 'center',
    gap: 4,
  },

  navTitle: {
    fontFamily: fonts.Medium,
    fontSize: 12,
    color: colors.primaryGreen,
    lineHeight: 14.4,
  },
});
