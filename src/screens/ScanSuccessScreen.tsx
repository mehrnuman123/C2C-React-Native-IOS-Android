/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BACK_BUTTON from '../assets/icons/back_button_white.png';
import ADDIDAS from '../assets/icons/addidas_logo.png';

import COMPLETED from '../assets/icons/completed_icon.png';
import DOLLAR from '../assets/icons/dollar_icon.png';
import BARCODE from '../assets/images/barcode_sample.png';
import BINARY from '../assets/icons/binary_icon.png';
import LOCATION from '../assets/icons/location_icon.png';
import CALENDAR from '../assets/icons/calendar_icon.png';
import LinearGradient from 'react-native-linear-gradient';
import BUTTONRIGHTARROW from '../assets/icons/button_right_arrow.png';
import {useStores} from '../store/Store';

const ScanSuccessScreen = (props: any) => {
  const authStore = useStores();
  const [price, setPrice] = useState('');
  const [company, setCompany] = useState('');
  const [now, setDate] = useState(new Date());
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#F2F5F8'} />
      <View
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 1,
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('HomeScreen');
          }}>
          <Image source={BACK_BUTTON} />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <Image source={COMPLETED} style={{marginTop: 50}} />
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 18,
              fontWeight: '500',
              color: '#3F3D56',
            }}>
            Takk for handelen!
          </Text>
        </View>
        <View style={{width: 204}}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 16,
              fontWeight: 'normal',
              color: '#6080A0',
              textAlign: 'center',
            }}>
            “DIG” å gjør en god handel! for mer info sjekk DIG-Wallet
          </Text>
        </View>
        <View
          style={{
            width: '80%',
            height: 416,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#D8E1E8',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <LinearGradient
            colors={['#00B4E4', '#30C9AA']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 90,
              height: 90,
              borderRadius: 45,
              backgroundColor: '#FFFFFF',
              padding: 10,
              marginTop: 20,
            }}>
            <View
              style={{
                backgroundColor: '#ffffff',
                width: 86,
                height: 86,
                borderRadius: 44,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={ADDIDAS} style={{width: 80, height: 80}} />
            </View>
          </LinearGradient>
          <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
            <Image
              source={DOLLAR}
              style={{width: 27, height: 27, marginTop: 5}}
            />
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 23,
                fontWeight: 'bold',
                color: '#6080A0',
                marginLeft: 10,
              }}>
              {price === '' ? 300 : price} KR
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 16,
              fontWeight: 'normal',
              color: '#6080A0',
            }}>
            {' '}
            Du har spart 100 KR
          </Text>
          <Image
            source={BARCODE}
            style={{width: 155, height: 74, marginTop: 20}}
          />
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 12,
              fontWeight: 'normal',
              color: '#6080A0',
            }}>
            {props.route.params?.code ? props.route.params.code : ''}
          </Text>
          {/* <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Image source={BINARY} />
            </View>
          </View> */}
          <View
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              marginTop: 10,
              marginLeft: 105,
            }}>
            {/* <View style={{display: 'flex', flexDirection: 'column'}}>
              <Image source={LOCATION} />
            </View> */}
            {/* <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <Text>Pin: 6925</Text>
            </View> */}
          </View>
          {/* <View
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              marginTop: 5,
              marginLeft: 110,
            }}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Image source={CALENDAR} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              <Text>Utløpsdato:</Text>
              <Text style={{marginLeft: 10}}>
                {
                  new Date(now.getFullYear(), now.getMonth() + 1, 1)
                    .toISOString()
                    .split('T')[0]
                }
              </Text>
            </View>
          </View> */}
          <View
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'column',
              marginLeft: 30,
            }}>
            <View
              style={{
                backgroundColor: '#E6ECF2',
                width: '80%',
                height: 30,
                alignSelf: 'center',
                borderRadius: 50,
                marginVertical: 10,
              }}>
              <TextInput
                value={company}
                placeholder="Selskap"
                onChangeText={(text: any) => {
                  console.log('====================================');
                  console.log('company ==>', text);
                  console.log('====================================');
                  setCompany(text);
                }}
                placeholderTextColor={'#6080A0'}
                style={{
                  fontSize: 10,
                  fontWeight: 'normal',
                  fontFamily: 'Open Sans',
                  textAlign: 'center',
                  color: '#6080A0',
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: '#E6ECF2',
                width: '80%',
                height: 30,
                alignSelf: 'center',
                borderRadius: 50,
              }}>
              <TextInput
                value={price}
                placeholder="Pris"
                onChangeText={(text: any) => {
                  console.log('====================================');
                  console.log('price ==>', text);
                  console.log('====================================');
                  setPrice(text);
                }}
                placeholderTextColor={'#6080A0'}
                style={{
                  fontSize: 10,
                  fontWeight: 'normal',
                  fontFamily: 'Open Sans',
                  textAlign: 'center',
                  color: '#6080A0',
                }}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            var myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            myHeaders.append('Authorization', `Bearer ${authStore.authToken}`);

            var raw = JSON.stringify({
              serialNumber: props.route.params.code.substring(2, 8),
              manufacturar: company,
              balance: price,
              type: 'gift-card',
              category: '',
              expiry: '',
              isListed: false,
              isActive: true,
            });

            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow',
            };

            fetch(
              'http://20.172.135.207/api/api/v1/card/add-wallet',
              requestOptions,
            )
              .then(response => response.json())
              .then(result => {
                if (result.response.CODE === 200) {
                  console.log('card add ==>', result);
                  props.navigation.navigate('WalletTab');
                } else {
                  ToastAndroid.show(
                    result.response.DESCRIPTION,
                    ToastAndroid.SHORT,
                  );
                  props.navigation.navigate('HomeScreen');
                }
              })
              .catch(error => console.log('error', error));
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
            DIG-Wallet
          </Text>
          <Image
            source={BUTTONRIGHTARROW}
            style={{marginRight: 15, tintColor: 'white'}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ScanSuccessScreen;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F8FA',
    alignItems: 'center',
  },
});
