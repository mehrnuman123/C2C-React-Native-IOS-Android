/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LoginImage from '../assets/images/login_screen.png';
import BUTTONRIGHTARROW from '../assets/icons/button_right_arrow.png';
import GOOGLE_ICON from '../assets/icons/google_icon.png';
import HORIZONTAL_LINE from '../assets/icons/horizontal_line.png';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useStores} from '../store/Store';

const AuthScreen = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();
  const authStore = useStores();

  // Handle user state changes
  function onAuthStateChanged(userReceived: any) {
    setUser(userReceived);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    if (user) {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        name: user.displayName,
        email: user.email,
        role: 'user',
        profile: 'www.s3.bucket./cartogo.png',
        uid: user?.providerData.length ? user?.providerData[0]?.uid : '',
        auth_provider: 'google',
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      console.log('req ===> ', requestOptions);

      fetch(
        'http://20.172.135.207/api/api/v1/auth/register/google-user',
        requestOptions,
      )
        .then(response => response.json())
        .then((result: any) => {
          console.log(typeof result, 'dynamic');
          console.log('response ===>', JSON.stringify(result));
          console.log('jwt ===>', result.jwtToken);
          console.log('data ===>', result.data);
          authStore.update('user', result.data);
          authStore.update('authToken', result.jwtToken);
          props.navigation.navigate('HomeScreen');
        })
        .catch(error => console.log('error', error));
      // axios
      //   .request(config)
      //   .then(response => {
      //     console.log('response ===>', JSON.stringify(response.data));
      //     console.log('jwt ===>', response.data.jwt);
      //     console.log('data ===>', response.data.data);
      //     authStore.update('user', response.data.data);
      //     authStore.update('authToken', response.data.jwt);
      //     props.navigation.navigate('HomeScreen');
      //   })
      //   .catch(error => {
      //     console.log('error =>', error);
      //   });
    }
  }, [user]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '338371456087-fm6vj3phhn4ha70e4gfjrk6aemrbumo2.apps.googleusercontent.com',
    });
  }, []);
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <ImageBackground source={LoginImage} style={{flex: 1}}>
      <LinearGradient
        colors={['transparent', 'transparent', 'black', 'black']}
        style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 290,
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('LoginScreen');
            }}
            style={{
              width: '80%',
              height: 47,
              backgroundColor: '#30C9AA',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              borderRadius: 22,
            }}>
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'Open Sans',
                color: 'white',
                textAlign: 'center',
                marginRight: '30%',
              }}>
              LOGG INN
            </Text>
            <Image
              source={BUTTONRIGHTARROW}
              style={{marginRight: 15, tintColor: 'white'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('RegisterScreen')}
            style={{
              width: '80%',
              height: 47,
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              borderRadius: 22,
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'Open Sans',
                color: '#6080A0',
                textAlign: 'center',
                marginRight: '20%',
              }}>
              REGISTER DEGG
            </Text>
            <Image
              source={BUTTONRIGHTARROW}
              style={{marginRight: 15, tintColor: '#6080A0'}}
            />
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <Image
              source={HORIZONTAL_LINE}
              style={{marginRight: 10, marginTop: 15}}
            />
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'Open Sans',
                fontWeight: '100',
                color: '#FFFFFF',
              }}>
              ELLER
            </Text>
            <Image
              source={HORIZONTAL_LINE}
              style={{marginLeft: 10, marginTop: 15}}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              onGoogleButtonPress();
            }}
            style={{
              width: '80%',
              height: 47,
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              borderRadius: 22,
              marginVertical: 20,
            }}>
            <Image
              source={GOOGLE_ICON}
              style={{width: 24, height: 24, marginLeft: 10}}
            />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Open Sans',
                color: '#6080A0',
                textAlign: 'center',
                textTransform: 'uppercase',
              }}>
              Registrer deg hos google
            </Text>
            <Image
              source={BUTTONRIGHTARROW}
              style={{marginRight: 5, tintColor: '#6080A0'}}
            />
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <Image
              source={HORIZONTAL_LINE}
              style={{marginRight: 10, marginTop: 10}}
            />
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'Open Sans',
                fontWeight: '100',
                color: '#FFFFFF',
              }}>
              ELLER
            </Text>
            <Image
              source={HORIZONTAL_LINE}
              style={{marginLeft: 10, marginTop: 10}}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: '80%',
            height: 47,
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignSelf: 'center',
            borderColor: '#FFFFFF',
            borderWidth: 1,
            borderRadius: 22,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 19,
              fontFamily: 'Open Sans',
              color: 'white',
              textAlign: 'center',
              marginRight: '15%',
              textTransform: 'uppercase',
            }}>
            sjekk ut dig først
          </Text>
          <Image
            source={BUTTONRIGHTARROW}
            style={{marginRight: 15, tintColor: 'white'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('ForgotPasswordScreen');
          }}
          style={{
            width: '80%',
            height: 47,
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Open Sans',
              color: '#30C9AA',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
            Glemt passord?
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

export default AuthScreen;

// const styles = StyleSheet.create({});
