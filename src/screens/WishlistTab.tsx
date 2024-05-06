/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ADDIDAS from '../assets/images/addidas_wishlist.png';
import BERGANS from '../assets/images/bergans_wishlist.png';
import HIFI_KLUBBEN from '../assets/images/hifi_klubben_wishlist.png';
import UNISPORT from '../assets/images/unisport_wishlist.png';

const WishlistTab = () => {
  const images = [ADDIDAS, BERGANS, HIFI_KLUBBEN, UNISPORT];

  const Item = (item: any, onPress: any) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Image source={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.main}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Alle</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: '#30C9AA',
            borderWidth: 0,
            elevation: 5,
          }}>
          <Text style={{...styles.buttonText, color: '#FFFFFF'}}>Butikker</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Produkter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {images.map(item => (
          <TouchableOpacity
            onPress={() => {
              console.log('clicked');
            }}
            style={styles.item}>
            <Image source={item} />
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: '10%',
          marginBottom: 30,
        }}>
        <TouchableOpacity style={styles.buttonMain}>
          <Text style={styles.buttonMainText}>Send ønskeliste</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WishlistTab;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F8FA',
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    marginTop: 20,
  },
  buttonRow: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2,
    backgroundColor: '#F6F8FA',
    borderColor: '#6080A0',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginHorizontal: 5,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#6080A0',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
  },
  item: {
    width: 160,
    height: 90,
    borderRadius: 24,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 32,
  },
  buttonMain: {
    width: '100%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#30C9AA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMainText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'normal',
    textAlign: 'center',
  },
});
