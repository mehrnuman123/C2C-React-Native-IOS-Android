/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import WOMEN_HAIRCUT from '../assets/images/woman_hair_cut.png';
import MAN_HAIRCUT from '../assets/images/man_hair_cut.png';
import DESIGN from '../assets/images/design.png';
import SAS_TEXT from '../assets/images/SAS_text.png';

import PEOPLE from '../assets/images/people_sitting.png';

import SEARCH_ICON from '../assets/icons/search_icon.png';
import FILTER_ICON from '../assets/icons/filters_icon.png';
import ADDIDAS from '../assets/icons/addidas_logo.png';
import BERGANS from '../assets/icons/bergans_logo.png';
import HIFI_KLUBBEN from '../assets/icons/hifi_klubben_logo.png';
import UNISPORT from '../assets/icons/unisport_logo.png';
import ADDIDAS_BIG from '../assets/icons/addidas_big.png';
import ONLINE from '../assets/icons/online_icon.png';
import RECTANGLE from '../assets/icons/rectangle_image.png';
import LOCATION from '../assets/icons/location_icon.png';
import DISCOUNT from '../assets/icons/discount_icon.png';
import {useStores} from '../store/Store';

function HomeTab() {
  const [allCards, setAllCards] = useState([]);
  const authStore = useStores();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${authStore.authToken}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'http://20.172.135.207/api/api/v1/card/listed/selling',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('result  ===>', result.data);
        setAllCards(result.data);
      })
      .catch(error => console.log('error', error));
  }, []);

  return (
    <View style={styles.main}>
      <ScrollView horizontal={false}>
        <View style={{display: 'flex', flex: 1}}>
          <Text style={styles.mainHeading}>Utforsk de beste rabattene</Text>
          <View style={styles.searchContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}>
              <Image source={SEARCH_ICON} />
              <TextInput
                placeholder="Search..."
                style={{color: '#95AEC7', fontSize: 18, fontWeight: '400'}}
              />
            </View>
            <Image source={FILTER_ICON} style={{marginRight: 15}} />
          </View>
        </View>
        <ScrollView
          horizontal={true}
          style={{
            display: 'flex',
            marginTop: 20,
            minHeight: 100,
          }}>
          <View style={styles.horizontalListItem}>
            <LinearGradient
              colors={['#00B4E4', '#30C9AA']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 70,
                borderRadius: 33,
                backgroundColor: '#FFFFFF',
                padding: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  width: 68,
                  height: 68,
                  borderRadius: 34,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={ADDIDAS} style={{width: 60, height: 60}} />
              </View>
            </LinearGradient>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 12,
                fontWeight: '500',
                color: '#3F3D56',
              }}>
              Addidas
            </Text>
          </View>
          <View style={styles.horizontalListItem}>
            <LinearGradient
              colors={['#00B4E4', '#30C9AA']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 70,
                borderRadius: 33,
                backgroundColor: '#FFFFFF',
                padding: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  width: 68,
                  height: 68,
                  borderRadius: 34,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={BERGANS} style={{width: 60, height: 60}} />
              </View>
            </LinearGradient>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 12,
                fontWeight: '500',
                color: '#3F3D56',
              }}>
              Bergans
            </Text>
          </View>
          <View style={styles.horizontalListItem}>
            <LinearGradient
              colors={['#00B4E4', '#30C9AA']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 70,
                borderRadius: 33,
                backgroundColor: '#FFFFFF',
                padding: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  width: 68,
                  height: 68,
                  borderRadius: 34,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={HIFI_KLUBBEN} style={{width: 60, height: 60}} />
              </View>
            </LinearGradient>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 12,
                fontWeight: '500',
                color: '#3F3D56',
              }}>
              Hifi Klubbens
            </Text>
          </View>
          <View style={styles.horizontalListItem}>
            <LinearGradient
              colors={['#00B4E4', '#30C9AA']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 70,
                borderRadius: 33,
                backgroundColor: '#FFFFFF',
                padding: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  width: 68,
                  height: 68,
                  borderRadius: 34,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={UNISPORT} style={{width: 60, height: 60}} />
              </View>
            </LinearGradient>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 12,
                fontWeight: '500',
                color: '#3F3D56',
              }}>
              Unisport
            </Text>
          </View>
          <View style={styles.horizontalListItem}>
            <LinearGradient
              colors={['#00B4E4', '#30C9AA']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: 70,
                height: 70,
                borderRadius: 33,
                backgroundColor: '#FFFFFF',
                padding: 10,
              }}>
              <View
                style={{
                  backgroundColor: '#ffffff',
                  width: 68,
                  height: 68,
                  borderRadius: 34,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={ADDIDAS} style={{width: 60, height: 60}} />
              </View>
            </LinearGradient>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 12,
                fontWeight: '500',
                color: '#3F3D56',
              }}>
              Addidas
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            display: 'flex',
            flex: 2,
            backgroundColor: '#FFFFFF',
            width: '100%',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            marginTop: 20,
          }}>
          <ScrollView
            horizontal={true}
            style={{
              display: 'flex',
              width: '100%',
            }}>
            {allCards.map((item: any) => {
              return (
                <View
                  style={{
                    width: 360,
                    height: 280,
                    ...styles.horizontalListItem,
                    marginTop: 10,
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
                      width: 330,
                      height: 240,
                      borderRadius: 34,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      marginTop: 15,
                    }}>
                    <Image source={ADDIDAS_BIG} />
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: 30,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      paddingLeft: 25,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Open Sans',
                        fontSize: 18,
                        fontWeight: '500',
                        color: '#3F3D56',
                      }}>
                      Addidas
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      width: '100%',
                      height: 40,
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: 20,
                    }}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Image source={ONLINE} />
                      <Text
                        style={{
                          fontFamily: 'Open Sans',
                          fontSize: 17,
                          fontWeight: '500',
                          color: '#3F3D56',
                          marginLeft: 5,
                        }}>
                        Online
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Image
                        source={LOCATION}
                        style={{width: 20, height: 20}}
                      />
                      <Text
                        style={{
                          fontFamily: 'Open Sans',
                          fontSize: 17,
                          fontWeight: '500',
                          color: '#3F3D56',
                          marginLeft: 5,
                        }}>
                        I butikk
                      </Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <Image source={DISCOUNT} />
                      <Text
                        style={{
                          fontFamily: 'Open Sans',
                          fontSize: 17,
                          fontWeight: '500',
                          color: '#3F3D56',
                          marginLeft: 5,
                        }}>
                        %40
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}

            {/* <View
              style={{
                width: 300,
                height: 280,
                ...styles.horizontalListItem,
                marginTop: 10,
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
                  width: 330,
                  height: 240,
                  borderRadius: 34,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 15,
                }}>
                <Image source={ADDIDAS_BIG} />
              </View>
              <View
                style={{
                  display: 'flex',
                  width: '100%',
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingLeft: 25,
                }}>
                <Text
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 18,
                    fontWeight: '500',
                    color: '#3F3D56',
                  }}>
                  Addidas
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: '100%',
                  height: 40,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 20,
                }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image source={ONLINE} />
                  <Text
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 17,
                      fontWeight: '500',
                      color: '#3F3D56',
                      marginLeft: 5,
                    }}>
                    Online
                  </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image source={LOCATION} style={{width: 20, height: 20}} />
                  <Text
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 17,
                      fontWeight: '500',
                      color: '#3F3D56',
                      marginLeft: 5,
                    }}>
                    I butikk
                  </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image source={DISCOUNT} />
                  <Text
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 17,
                      fontWeight: '500',
                      color: '#3F3D56',
                      marginLeft: 5,
                    }}>
                    %40
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 360,
                height: 280,
                ...styles.horizontalListItem,
                marginTop: 10,
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
                  width: 330,
                  height: 240,
                  borderRadius: 34,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 15,
                }}>
                <Image source={ADDIDAS_BIG} />
              </View>
              <View
                style={{
                  display: 'flex',
                  width: '100%',
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingLeft: 25,
                }}>
                <Text
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 18,
                    fontWeight: '500',
                    color: '#3F3D56',
                  }}>
                  Addidas
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  width: '100%',
                  height: 40,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 20,
                }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image source={ONLINE} />
                  <Text
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 17,
                      fontWeight: '500',
                      color: '#3F3D56',
                      marginLeft: 5,
                    }}>
                    Online
                  </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image source={LOCATION} style={{width: 20, height: 20}} />
                  <Text
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 17,
                      fontWeight: '500',
                      color: '#3F3D56',
                      marginLeft: 5,
                    }}>
                    I butikk
                  </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Image source={DISCOUNT} />
                  <Text
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 17,
                      fontWeight: '500',
                      color: '#3F3D56',
                      marginLeft: 5,
                    }}>
                    %40
                  </Text>
                </View>
              </View>
            </View> */}
          </ScrollView>
          <View
            style={{
              width: '100%',
              height: 1,
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: '#DFE6EC',
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 40,
              paddingHorizontal: 35,
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Tilbud
            </Text>
            <View
              style={{
                width: 78,
                height: 28,
                backgroundColor: '#EAEFF3',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                SEE ALL
              </Text>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            style={{
              display: 'flex',
              width: '100%',
              height: 205,
            }}>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={WOMEN_HAIRCUT} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={MAN_HAIRCUT} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={DESIGN} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={WOMEN_HAIRCUT} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              width: '100%',
              height: 369,
              borderRadius: 32,
              backgroundColor: '#30C9AA',
              display: 'flex',
              flexDirection: 'column',
              padding: 20,
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View
                style={{
                  width: 72,
                  height: 52,
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 10,
                }}>
                <Image source={SAS_TEXT} />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginTop: 5,
                  marginLeft: 5,
                }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 17,
                      fontWeight: '400',
                      color: '#FFFFFF',
                    }}>
                    Drømmer du om å reise?
                  </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Open Sans',
                      fontSize: 17,
                      fontWeight: '400',
                      color: '#FFFFFF',
                    }}>
                    109 solgt - 30 dager
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
              <ImageBackground
                source={PEOPLE}
                style={{width: 310, height: 243}}
                resizeMode={'cover'}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 40,
              paddingHorizontal: 35,
              marginTop: 25,
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Sport & trending
            </Text>
            <View
              style={{
                width: 78,
                height: 28,
                backgroundColor: '#EAEFF3',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                SEE ALL
              </Text>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            style={{
              display: 'flex',
              width: '100%',
              height: 205,
              marginTop: 40,
            }}>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={WOMEN_HAIRCUT} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={MAN_HAIRCUT} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={DESIGN} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={WOMEN_HAIRCUT} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 40,
              paddingHorizontal: 35,
              marginTop: 25,
            }}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Hobby
            </Text>
            <View
              style={{
                width: 78,
                height: 28,
                backgroundColor: '#EAEFF3',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 16,
                  fontWeight: '500',
                }}>
                SEE ALL
              </Text>
            </View>
          </View>
          <ScrollView
            horizontal={true}
            style={{
              display: 'flex',
              width: '100%',
              height: 205,
              marginTop: 40,
            }}>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={WOMEN_HAIRCUT} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={MAN_HAIRCUT} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={DESIGN} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
            <View
              style={{
                width: 132,
                height: 205,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 25,
              }}>
              <Image source={WOMEN_HAIRCUT} style={{width: 132, height: 126}} />
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#6080A0',
                }}>
                Blivakker.no
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 17,
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}>
                Opp til 55%
              </Text>
              <Text
                style={{
                  fontFamily: 'Open Sans',
                  fontSize: 12,
                  fontWeight: 'normal',
                  color: '#3F3D56',
                }}>
                109 solgt - 30 dager
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeTab;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#F2F5F8',
  },
  mainHeading: {
    width: 170,
    fontFamily: 'Open Sans',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'left',
    marginLeft: 30,
  },
  searchContainer: {
    display: 'flex',
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#CFD8E2',
    marginTop: 20,
  },
  horizontalListItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 25,
  },
  statusCircle: {},
});
