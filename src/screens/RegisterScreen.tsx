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
import ADD_BUTTON from '../assets/icons/green_add.png';
import USER from '../assets/icons/users.png';
import BANK_ID from '../assets/icons/bank_id_image.png';
import RIGHT_BUTTON from '../assets/icons/right_icon.png';
import BUTTONRIGHTARROW from '../assets/icons/button_right_arrow.png';

const RegisterScreen = (props: {
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
              <Image source={USER} />
            </View>
            <TouchableOpacity style={styles.addButton}>
              <Image source={ADD_BUTTON} />
            </TouchableOpacity>
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
              Registrer deg
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              height: 96,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              paddingHorizontal: 55,
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 19,
                fontWeight: '300',
                textAlign: 'center',
                color: '#6080A0',
              }}>
              For at vi skal kunne opprettholde sikkerheten for deg og andre,
              trenger vi at du registrer deg med BankID
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
              paddingHorizontal: 25,
            }}>
            <View
              style={{
                width: 308,
                height: 94,
                backgroundColor: '#FFFFFF',
                borderRadius: 16,
                display: 'flex',
                flexDirection: 'row',
                borderColor: '#D8E1E8',
                borderWidth: 1,
              }}>
              <View
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <View
                  style={{
                    width: 73,
                    height: 73,
                    borderRadius: 14,
                    backgroundColor: '#F2F5F8',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={BANK_ID} />
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flex: 2,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}>
                <TextInput
                  placeholder="Bank"
                  placeholderTextColor={'#8CA4BB'}
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 16,
                    color: '#8CA4BB',
                  }}
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  marginRight: 10,
                }}>
                <Image source={RIGHT_BUTTON} />
              </View>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 25,
              paddingHorizontal: 25,
            }}>
            <TextInput
              placeholder="E-Post:"
              style={{
                width: '90%',
                height: 50,
                borderRadius: 24,
                fontSize: 19,
                backgroundColor: '#CFD9E2',
                paddingLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
              paddingHorizontal: 25,
            }}>
            <TextInput
              placeholder="Passord:"
              style={{
                width: '90%',
                height: 50,
                borderRadius: 24,
                fontSize: 19,
                backgroundColor: '#CFD9E2',
                paddingLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
              paddingHorizontal: 25,
            }}>
            <TextInput
              placeholder="Bekreft passord:"
              style={{
                width: '90%',
                height: 50,
                borderRadius: 24,
                fontSize: 19,
                backgroundColor: '#CFD9E2',
                paddingLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
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
                  marginRight: '20%',
                }}>
                REGISTRER DEG
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

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F8',
  },
  page: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
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
