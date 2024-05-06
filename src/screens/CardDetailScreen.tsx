/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BACK_BUTTON from '../assets/icons/back_button_white.png';
import ADDIDAS_BIG from '../assets/images/addidas_header.png';
import CARD_DETAIL_PROFILE from '../assets/images/card_detail_profile.png';
import BUTTONRIGHTARROW from '../assets/icons/button_right_arrow.png';
import CALENDAR from '../assets/icons/calendar_big.png';
import {useStores} from '../store/Store';

const CardDetailScreen = (props: any) => {
  const authStore = useStores();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <StatusBar backgroundColor="transparent" translucent={true} />
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
      <Image
        source={ADDIDAS_BIG}
        style={{
          width: '100%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          position: 'absolute',
          top: 170,
        }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={CARD_DETAIL_PROFILE} />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          marginTop: 60,
        }}>
        <Text
          style={{
            fontFamily: 'Open Sans',
            fontSize: 24,
            fontWeight: '500',
            color: '#3F3D56',
          }}>
          Info om verdikort
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: '80%',
          height: 47,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: '#6080A0',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 22,
          marginTop: 10,
        }}>
        <View style={{width: 5}} />
        <Text
          style={{
            fontSize: 19,
            fontFamily: 'Open Sans',
            color: '#6080A0',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
          Innløsing
        </Text>
        <Image
          source={BUTTONRIGHTARROW}
          style={{marginRight: 15, tintColor: '#6080A0'}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          width: '80%',
          height: 47,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: '#6080A0',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 22,
          marginTop: 10,
        }}>
        <View style={{width: 5}} />
        <Text
          style={{
            fontSize: 19,
            fontFamily: 'Open Sans',
            color: '#6080A0',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
          hvor kan innløses
        </Text>
        <Image
          source={BUTTONRIGHTARROW}
          style={{marginRight: 15, tintColor: '#6080A0'}}
        />
      </TouchableOpacity>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={{
          width: '80%',
          height: 180,
          alignSelf: 'center',
          marginTop: 15,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Open Sans',
            color: '#9BAFC3',
            textAlign: 'justify',
          }}>
          Adidas er merket med de ikoniske tre stripene. Fra stadion til gatene.
          Fra banene til catwalken. adidas streber alltid etter å være best, og
          kan vise til en imponerende historie av høy ytelse og lidenskap for
          sport. Gjennom samarbeid med toppatleter og trendsettende kunstnere
          kombinerer merket innovativ teknologi med iøynefallende design. Adidas
          ble grunnlagt av Adi Dassler, som håndlagde sportsytelsessko, og har
          vokst til å bli en verdensspiller. Historiske modeller og silhuetter
          blir vekket til live av adidas Originals. Hvert år utvikles, testes og
          lanseres nye teknologier for å hjelpe idrettsutøvere å yte sitt beste.
          Med tusenvis av produkter i butikken og online viser Adidas sports- og
          streetwear. Adidas Originals Født i sport, brakt til gatene. adidas
          Originals gir deg ekte klassikere og moderne utgivelser, fra
          arkivmodeller til helt nye design. Samarbeid med kunstnere og
          designere som Kanye West, Pharrell Williams, Rita Ora og NIGO gir en
          ekstra dimensjon til merkets mest kjente modeller. Adidas Sports
          Performance Med en ekte lidenskap for ytelse, strever adidas for å
          være det beste sportsmerket i verden. Nye produkter blir laget med og
          for våre toppidrettsutøvere, og tilbyr den nyeste teknologien,
          sterkeste tekstiler og topp moderne design. adidas-produkter er laget
          for å hjelpe deg med å få mest mulig ut av ytelsen din.
        </Text>
      </ScrollView>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#DFE6EC',
          marginTop: 30,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <View
          style={{
            width: 212,
            height: 50,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginHorizontal: 10,
            }}>
            <Image source={CALENDAR} />
          </View>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Open Sans',
                color: '#6080A0',
                textAlign: 'justify',
              }}>
              Husk å bruk det innen
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'Open Sans',
                color: '#6080A0',
                textAlign: 'justify',
              }}>
              17/07-2023
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          var myHeaders = new Headers();
          myHeaders.append('Authorization', `Bearer ${authStore.authToken}`);

          var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            redirect: 'follow',
          };

          fetch(
            `http://20.172.135.207/api/api/v1/card/listing/${props.route.params.card.id}`,
            requestOptions,
          )
            .then(response => response.json())
            .then(result => {
              console.log('result =>', result);
              if (result.response.CODE === 200) {
                ToastAndroid.show(
                  result.response.DESCRIPTION,
                  ToastAndroid.SHORT,
                );
              } else {
                ToastAndroid.show(
                  result.response.DESCRIPTION,
                  ToastAndroid.SHORT,
                );
              }
              props.navigation.navigate('HomeTab');
            })
            .catch(error => console.log('error', error));
        }}
        style={{
          width: '80%',
          height: 47,
          backgroundColor: '#30C9AA',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'center',
          borderRadius: 22,
          marginTop: 10,
        }}>
        <View style={{width: 5}} />
        <Text
          style={{
            fontSize: 19,
            fontFamily: 'Open Sans',
            color: '#FFFFFF',
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
          Legg ut for salg
        </Text>
        <Image
          source={BUTTONRIGHTARROW}
          style={{marginRight: 15, tintColor: '#FFFFFF'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CardDetailScreen;

const styles = StyleSheet.create({});
