/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Modal,
  Image,
  View,
  ToastAndroid,
  Text,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RECTANGLE from '../assets/icons/rectangle_image.png';
import BUTTONRIGHTARROW from '../assets/icons/button_right_arrow.png';
import SCANNERICON from '../assets/images/scanner_icon.png';
import SCAN_AREA from '../assets/icons/camera_scan_area.png';
import TORCH from '../assets/icons/torch_icon.png';

const BottomModal = ({visible, setShowModal, onClose}) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 16,
            height: '75%',
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          }}>
          <View
            style={{
              display: 'flex',
              width: '100%',
              height: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 15,
            }}>
            <Image source={RECTANGLE} />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Image
              source={SCANNERICON}
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
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 18,
                fontWeight: '500',
              }}>
              Start skanningen
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              width: '90%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 16,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Skann en kupong, gavekort eller QR-kode for detaljert informasjon
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowModal(false);
              AsyncStorage.setItem('hasVisitedMyScreen', 'true');
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
                marginRight: '15%',
              }}>
              START SKANNING
            </Text>
            <Image
              source={BUTTONRIGHTARROW}
              style={{marginRight: 15, tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const CameraScreen = (props: any) => {
  const [showModal, setShowModal] = useState(true);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.on);
  const [barcodeValue, setBarcodeValue] = useState('');
  // const callback = (error, sound) => {
  //   if (error) {
  //     // Alert.alert('error', error.message);
  //     // setTestState(testInfo, component, 'fail');
  //     // return;
  //     console.log('====================================');
  //     console.log('error --------->', error.message);
  //     console.log('====================================');
  //   }

  //   sound.play(() => {
  //     // Success counts as getting to the end
  //     // setTestState(testInfo, component, 'win');
  //     // Release when it's done so we're not using up resources
  //     sound.release();
  //   });
  // };

  //   const sound = new Sound(BEEP, error => callback(error, sound));

  useEffect(() => {
    AsyncStorage.getItem('hasVisitedMyScreen').then(value => {
      console.log('hasVisitedMyScreen --->', value);
      if (value === null) {
        // User has not visited the screen before, show the modal
        setShowModal(true);
        AsyncStorage.setItem('hasVisitedMyScreen', 'true');
      }
    });
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     ToastAndroid.show('Scanned Successfully!', ToastAndroid.SHORT);
  //     props.navigation.navigate('ScanSuccessScreen', {
  //       code: '57118240329734700000000003853208',
  //     });
  //   }, 3000);
  // }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={flashMode}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        captureAudio={false}
        onBarCodeRead={async (event: any) => {
          console.log('barcode 1 ---->', event.data);
          if (!barcodeValue) {
            setBarcodeValue(event.data);
            ToastAndroid.show('Scanned Successfully!', ToastAndroid.SHORT);
            setTimeout(() => {
              props.navigation.navigate('ScanSuccessScreen', {
                code: event.data,
              });
            }, 2000);
          }
        }}
        onGoogleVisionBarcodesDetected={({barcodes}) => {
          console.log('barcode 1 ---->', barcodes[0]?.data);
        }}>
        <View style={styles.overlayContainer}>
          <Image
            source={SCAN_AREA}
            style={{marginBottom: 30, backgroundColor: 'transparent'}}
          />
          <TouchableOpacity
            onPress={() => {
              if (flashMode === RNCamera.Constants.FlashMode.on) {
                setFlashMode(RNCamera.Constants.FlashMode.off);
              } else {
                setFlashMode(RNCamera.Constants.FlashMode.on);
              }
            }}>
            <Image source={TORCH} />
          </TouchableOpacity>
        </View>
      </RNCamera>
      <BottomModal
        visible={showModal}
        setShowModal={setShowModal}
        onClose={closeModal}
      />
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
