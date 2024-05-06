import {StatusBar} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/SplashScreen';
import IntroScreen from '../screens/IntroScreen';
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import MapScreen from '../screens/MapScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CartScreen from '../screens/CartScreen';
import MenuScreen from '../screens/MenuScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import Camera from '../screens/Camera';
import ScanSuccessScreen from '../screens/ScanSuccessScreen';
import CardDetailScreen from '../screens/CardDetailScreen';

const Stack = createNativeStackNavigator();
const NavigationContainer = () => {
  return (
    <>
      <StatusBar backgroundColor="#30C9AA" barStyle="light-content" />
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CameraScreen"
          component={Camera}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ScanSuccessScreen"
          component={ScanSuccessScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CardDetailScreen"
          component={CardDetailScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
};

export default NavigationContainer;
