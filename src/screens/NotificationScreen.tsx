/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import TopBar from '../components/topBar';
import NotificationScreenIcon from '../assets/images/notification_screen.png';
import ToggleSwitch from 'toggle-switch-react-native';
import BUTTONRIGHTARROW from '../assets/icons/button_right_arrow.png';

const NotificationScreen = (props: any) => {
  const [notification, setNotification] = useState(false);
  return (
    <>
      <TopBar navigation={props.navigation} backEnable={true} />
      <View style={styles.page}>
        <View style={styles.container}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 60,
            }}>
            <Image
              source={NotificationScreenIcon}
              style={{width: 248, height: 239}}
              resizeMode={'contain'}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Gå ikke glipp av gode tilbud!
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              width: 274,
              height: 48,
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 16,
                fontWeight: '400',
                textAlign: 'center',
              }}>
              Få varsel på tilbud i nærheten av deg og salg!
            </Text>
          </View>
          <View style={styles.notificationContainer}>
            <View style={{marginLeft: 15}}>
              <ToggleSwitch
                isOn={notification}
                onColor="#30C9AA"
                offColor="#B7C7D7"
                label=""
                size="medium"
                onToggle={isOn => setNotification(isOn)}
              />
            </View>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 18,
                fontWeight: '400',
                color: '#6080A0',
                marginLeft: 15,
              }}>
              Aktiver push-varsel
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 47,
              backgroundColor: '#30C9AA',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 22,
              marginTop: 20,
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
            style={{
              width: '80%',
              height: 47,
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 22,
              marginTop: 15,
              borderWidth: 1,
              borderColor: '#6080A0',
            }}>
            <Text
              style={{
                fontSize: 19,
                fontFamily: 'Open Sans',
                color: '#6080A0',
                textAlign: 'center',
                marginRight: '37%',
              }}>
              SKIP
            </Text>
            <Image
              source={BUTTONRIGHTARROW}
              style={{marginRight: 15, tintColor: '#6080A0'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F2F5F8',
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    marginTop: 50,
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
  },
  notificationContainer: {
    width: 302,
    height: 66,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#6080A0',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
  },
});
