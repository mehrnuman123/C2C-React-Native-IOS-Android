/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import SCREEN_ONE_PROGRESS from '../assets/images/screen_1_progress.png';
import SCREEN_TWO_PROGRESS from '../assets/images/screen_2_progress.png';
import SCREEN_THREE_PROGRESS from '../assets/images/screen_3_progress.png';
import SCREEN_FOUR_PROGRESS from '../assets/images/screen_4_progress.png';
import IMAGE_ONE_SCREEN from '../assets/images/image_1_screen.png';
import IMAGE_TWO_SCREEN from '../assets/images/image_2_screen.png';
import IMAGE_THREE_SCREEN from '../assets/images/image_3_screen.png';
import IMAGE_FOUR_SCREEN from '../assets/images/image_4_screen.png';
import NEXT_BUTTON from '../assets/icons/next_button.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Slider} from '../types/index';

const IntroScreen = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  let sliderRef = useRef<any>();

  const slides: Slider[] = [
    {
      key: 1,
      title: ' DU vil aldri betale full pris når du bruker DIG!',
      text: 'Med DIG kan du både lagre, kjøpe og selge verdikort, et kjapt søk vil la deg finn de rabattene!',
      imageProgress: SCREEN_ONE_PROGRESS,
      image: IMAGE_ONE_SCREEN,
    },
    {
      key: 2,
      title: 'DU vil aldri betale full pris når du bruker DIG!',
      text: 'Other cool stuffRabatterte gavekort og tilgodelapper til å spare på alt i hverdagen!',
      imageProgress: SCREEN_TWO_PROGRESS,
      image: IMAGE_TWO_SCREEN,
    },
    {
      key: 3,
      title: 'DU vil aldri betale full pris når du bruker DIG!',
      text: 'På 1,2,3 så har du spart penger, alltid "DIG" å gjør en god handel!',
      imageProgress: SCREEN_THREE_PROGRESS,
      image: IMAGE_THREE_SCREEN,
    },
    {
      key: 4,
      title: 'DU vil aldri betale full pris når du bruker DIG!',
      text: 'Handle på nett skal alltid være trygt, derfor bruker vi BankID',
      imageProgress: SCREEN_FOUR_PROGRESS,
      image: IMAGE_FOUR_SCREEN,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < 3) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      sliderRef?.goToSlide(nextIndex);
    } else {
      AsyncStorage.setItem('sliderVisited', 'true');
      props.navigation.navigate('AuthScreen');
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <View style={styles.topContainer}>
        <View
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image source={item.imageProgress} />
        </View>
        <View style={{padding: 30, alignSelf: 'center'}}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 20,
              fontWeight: '500',
              textAlign: 'center',
              color: '#FFFFFF',
            }}>
            {item.title}
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Image source={item.image} />
        </View>
        <View style={{padding: 30, alignSelf: 'center'}}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 20,
              fontWeight: '500',
              textAlign: 'center',
              color: '#6080A0',
            }}>
            {item.text}
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{marginLeft: 60}}
            onPress={() => {
              handleNext();
            }}>
            <Image source={NEXT_BUTTON} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 53,
              height: 53,
              borderRadius: 53,
              borderColor: '#6080A0',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 20,
              marginTop: 5,
            }}
            onPress={() => {
              props.navigation.navigate('AuthScreen');
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 15,
                color: '#6080A0',
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const keyExtractor = (item: {key: any}) => item.key;

  const handleSlideChange = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const renderPagination = () => null;

  return (
    <View style={styles.container}>
      <AppIntroSlider
        ref={ref => (sliderRef = ref)}
        data={slides}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showPrevButton
        showNextButton
        showDoneButton
        onSlideChange={handleSlideChange}
        renderPagination={renderPagination}
        onDone={() => console.log('Intro screens complete!')}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30C9AA',
  },
  slide: {
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#30C9AA',
  },
  topContainer: {
    width: '100%',
    height: '30%',
    overflow: 'visible',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#30C9AA',
  },
  bottomContainer: {
    width: '100%',
    height: '70%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  image: {
    width: '80%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 32,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#bbb',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});
