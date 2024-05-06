/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BACK_BUTTON from '../assets/icons/back_button_white.png';
import LOCK from '../assets/icons/lock_icon.png';
import BUTTONRIGHTARROW from '../assets/icons/button_right_arrow.png';

const NewPasswordScreen = (props: {
  navigation: {navigate: (arg0: any) => void};
}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F5F8" />
      <View style={styles.container}>
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
        <View style={styles.page}>
          <View style={styles.whiteCircle}>
            <View style={styles.innerCircle}>
              <Image source={LOCK} />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              height: 30,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#6080A0',
              }}>
              Nytt passord
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              height: 40,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
              paddingHorizontal: 25,
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 19,
                fontWeight: '300',
                textAlign: 'center',
                color: '#6080A0',
                letterSpacing: 0.6,
              }}>
              Skriv inn ditt nye passord
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingHorizontal: 25,
            }}>
            <TextInput
              placeholder="Nytt passord"
              style={{
                width: '90%',
                height: 50,
                borderRadius: 24,
                fontSize: 19,
                backgroundColor: '#CFD9E2',
                textAlign: 'center',
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
              paddingHorizontal: 25,
            }}>
            <TextInput
              placeholder="Bekreft passord"
              style={{
                width: '90%',
                height: 50,
                borderRadius: 24,
                fontSize: 19,
                backgroundColor: '#CFD9E2',
                textAlign: 'center',
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 25,
              paddingHorizontal: 25,
            }}>
            <TouchableOpacity
              style={{
                width: '90%',
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
                  marginRight: '18%',
                  textTransform: 'uppercase',
                }}>
                lagre passord
              </Text>
              <Image
                source={BUTTONRIGHTARROW}
                style={{marginRight: 15, tintColor: 'white'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default NewPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F8',
    justifyContent: 'center',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteCircle: {
    width: 128,
    height: 128,
    borderRadius: 64,
    overflow: 'visible',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  innerCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: '#F2F5F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    position: 'absolute',
    top: 90,
    right: -2,
  },
});
