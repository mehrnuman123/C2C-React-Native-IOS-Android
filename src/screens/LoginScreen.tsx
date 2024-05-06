/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LoginImage from '../assets/images/login_screen.png';
import BUTTONRIGHTARROW from '../assets/icons/button_right_arrow.png';
import BACK_BUTTON from '../assets/icons/back_button_white.png';
import HORIZONTAL_LINE from '../assets/icons/horizontal_line.png';

const LoginScreen = (props: any) => {
  return (
    <ImageBackground source={LoginImage} style={{flex: 1}}>
      <LinearGradient
        colors={['transparent', 'transparent', 'black', 'black']}
        style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            zIndex: 1,
          }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('AuthScreen');
            }}>
            <Image source={BACK_BUTTON} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            minHeight: '100%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.25)',
              width: '80%',
              alignSelf: 'center',
              borderRadius: 50,
              marginVertical: 20,
            }}>
            <TextInput
              placeholder="E-Post"
              placeholderTextColor={'#FFFFFF'}
              style={{
                fontSize: 19,
                fontWeight: 'normal',
                fontFamily: 'Open Sans',
                textAlign: 'center',
                color: '#FFFFFF',
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.25)',
              width: '80%',
              alignSelf: 'center',
              borderRadius: 50,
              marginBottom: 20,
            }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#FFFFFF'}
              style={{
                fontSize: 19,
                fontWeight: 'normal',
                fontFamily: 'Open Sans',
                textAlign: 'center',
                color: '#FFFFFF',
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => {}}
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
          <TouchableOpacity
            style={{
              width: '80%',
              height: 47,
              backgroundColor: '#FFFFFF',
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
                color: '#6080A0',
                textAlign: 'center',
                marginRight: '15%',
                textTransform: 'uppercase',
              }}>
              Registrer deg
            </Text>
            <Image
              source={BUTTONRIGHTARROW}
              style={{marginRight: 15, tintColor: '#6080A0'}}
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
