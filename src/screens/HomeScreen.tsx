/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Image, StatusBar, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from './HomeTab';
import ExploreTab from './ExploreTab';
import AddTab from './AddTab';
import WalletTab from './WalletTab';
import WishlistTab from './WishlistTab';
import ADD_BOTTOM_ICON from '../assets/icons/add_bottom_icon.png';
import HEART_ICON from '../assets/icons/heart_icon.png';
import EXPLORE_ICON from '../assets/icons/explore_icon.png';
import HOME_ICON from '../assets/icons/home_icon.png';
import WALLET_ICON from '../assets/icons/wallet_icon.png';
import TopBar from '../components/topBar';

const Tab = createBottomTabNavigator();

const HomeScreen = (props: any) => {
  return (
    <>
      <StatusBar backgroundColor="#F2F5F8" barStyle="dark-content" />
      <TopBar navigation={props.navigation} />
      <Tab.Navigator
        initialRouteName="CardDetailScreen"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 70,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
          },
          tabBarLabel: ({focused}) => {
            let name = '';
            if (route.name === 'HomeTab') {
              name = 'Home';
            } else if (route.name === 'ExploreTab') {
              name = 'Explore';
            } else if (route.name === 'AddTab') {
              name = '';
            } else if (route.name === 'WalletTab') {
              name = 'Wallet';
            } else if (route.name === 'WishlistTab') {
              name = 'Wishlist';
            }
            return (
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#6080A0' : '#AEBFCF',
                  fontWeight: focused ? 'bold' : 'normal',
                  marginBottom: 5,
                }}>
                {name}
              </Text>
            );
          },
          tabBarIcon: ({focused}) => {
            if (route.name === 'HomeTab') {
              return (
                <Image
                  source={HOME_ICON}
                  style={{tintColor: focused ? '#6080A0' : '#AEBFCF'}}
                />
              );
            } else if (route.name === 'ExploreTab') {
              return (
                <Image
                  source={EXPLORE_ICON}
                  style={{tintColor: focused ? '#6080A0' : '#AEBFCF'}}
                />
              );
            } else if (route.name === 'AddTab') {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('CameraScreen');
                  }}>
                  <Image
                    source={ADD_BOTTOM_ICON}
                    style={{
                      marginTop: 20,
                    }}
                  />
                </TouchableOpacity>
              );
            } else if (route.name === 'WalletTab') {
              return (
                <Image
                  source={WALLET_ICON}
                  style={{tintColor: focused ? '#6080A0' : '#AEBFCF'}}
                />
              );
            } else if (route.name === 'WishlistTab') {
              return (
                <Image
                  source={HEART_ICON}
                  style={{tintColor: focused ? '#6080A0' : '#AEBFCF'}}
                />
              );
            }
          },
        })}>
        <Tab.Screen name="HomeTab" component={HomeTab} />
        <Tab.Screen name="ExploreTab" component={ExploreTab} />
        <Tab.Screen name="AddTab" component={AddTab} />
        <Tab.Screen name="WalletTab" component={WalletTab} />
        <Tab.Screen name="WishlistTab" component={WishlistTab} />
      </Tab.Navigator>
    </>
  );
};

export default HomeScreen;
