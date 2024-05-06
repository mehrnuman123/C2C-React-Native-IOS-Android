/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {Text, View, ImageBackground} from 'react-native';
import React, {useContext, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import firebase from '@react-native-firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SPLASH from '../assets/images/splash.png';

import {useStores} from '../store/Store';
import {observer} from 'mobx-react';

const Splash = (props: any) => {
  const authStore = useStores();
  const initFirebase = async () => {
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: 'AIzaSyDpB_U75yr5ZL9-USnSbIsrUXh3aa1OZ9w',
      projectId: 'digstore-4afed',
      databaseURL: '',
      messagingSenderId: '',
      storageBucket: 'digstore-4afed.appspot.com',
      appId: '1:338371456087:android:cd4ff36b3af125ed9c4712',
    };
    if (firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }
  };

  useEffect(() => {
    initFirebase().then(async () => {
      const slider =
        JSON.parse((await AsyncStorage.getItem('sliderVisited')) || 'false') ||
        undefined;
      console.log('====================================');
      console.log('slider --->', slider);
      console.log('====================================');
      const user = authStore.user;
      const token = authStore.authToken;
      var navigate = '';
      console.log('====================================');
      console.log('user splash --->', user);
      console.log('====================================');
      console.log('====================================');
      console.log('token ----->', token);
      console.log('====================================');
      if (!slider) {
        navigate = 'IntroScreen';
      }
      if (user) {
        navigate = 'HomeScreen';
      }
      if (slider) {
        navigate = 'AuthScreen';
      }
      SplashScreen.hide();
      props.navigation.navigate(navigate);
    });
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#30c9aa',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground source={SPLASH} style={{height: 200, width: 300}} />
    </View>
  );
};

export default observer(Splash);

// const styles = StyleSheet.create({});
