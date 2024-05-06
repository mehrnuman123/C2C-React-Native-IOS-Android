/* eslint-disable react-native/no-inline-styles */
import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import LOGO from '../assets/icons/logo.png';
import LOCATION_ICON from '../assets/icons/location_icon.png';
import NOTIFICATION_ICON from '../assets/icons/notification_icon.png';
import CART_ICON from '../assets/icons/cart_icon.png';
import HAMBURGER_ICON from '../assets/icons/hamburger_icon.png';
import PROFILE from '../assets/icons/profile.png';
import BACK from '../assets/icons/back_button_white.png';

const TopBar = (props: any) => {
  const route = useRoute();
  return (
    <View
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 80,
        marginTop: 20,
        // backgroundColor: 'black',
      }}>
      {props.backEnable ? (
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HomeScreen')}>
          <Image source={BACK} style={{width: 70, height: 70}} />
        </TouchableOpacity>
      ) : (
        <Image source={LOGO} style={{height: 90, width: 90}} />
      )}
      <TouchableOpacity>
        {/* onPress={() => props.navigation.navigate('MapScreen')} */}
        <Image
          source={LOCATION_ICON}
          style={{tintColor: route.name === 'MapScreen' ? '#6080A0' : ''}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('NotificationScreen')}>
        <Image
          source={NOTIFICATION_ICON}
          style={{
            tintColor: route.name === 'NotificationScreen' ? '#6080A0' : '',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        {/* onPress={() => props.navigation.navigate('CartScreen')} */}
        <Image
          source={CART_ICON}
          style={{
            tintColor: route.name === 'CartScreen' ? '#6080A0' : '',
          }}
        />
      </TouchableOpacity>
      <Image source={HAMBURGER_ICON} />
      <Image source={PROFILE} />
    </View>
  );
};

export default TopBar;
