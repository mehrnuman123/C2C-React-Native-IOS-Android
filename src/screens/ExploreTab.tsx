/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import SEARCH_ICON from '../assets/icons/search_icon.png';
import FILTER_ICON from '../assets/icons/filters_icon.png';
import BERGANS_SQUARE from '../assets/images/bergans_square.png';
import WOMEN_HAIRCUT from '../assets/images/woman_hair_cut.png';
import MAN_HAIRCUT from '../assets/images/man_hair_cut.png';
import DESIGN from '../assets/images/design.png';

const ExploreTab = () => {
  return (
    <View style={styles.main}>
      <ScrollView horizontal={false}>
        <View style={{display: 'flex', flex: 1}}>
          <Text style={styles.mainHeading}>
            Utforsk butikker eller verdikort
          </Text>
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
            Siste søk
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
            height: 70,
            marginTop: 10,
            paddingLeft: 30,
          }}>
          <View style={styles.smallListItem}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Image
                source={BERGANS_SQUARE}
                resizeMode={'contain'}
                style={{width: 50, height: 50}}
              />
            </View>
            <View
              style={{display: 'flex', flexDirection: 'column', marginLeft: 8}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 18,
                    fontWeight: '300',
                    color: '#3F3D56',
                  }}>
                  Bergans
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 16,
                    fontWeight: '300',
                    color: '#6080A0',
                  }}>
                  900KR
                </Text>
              </View>
            </View>
          </View>
          <View style={{...styles.smallListItem, marginLeft: 20}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Image
                source={BERGANS_SQUARE}
                resizeMode={'contain'}
                style={{width: 50, height: 50}}
              />
            </View>
            <View
              style={{display: 'flex', flexDirection: 'column', marginLeft: 8}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 18,
                    fontWeight: '300',
                    color: '#3F3D56',
                  }}>
                  Bergans
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 16,
                    fontWeight: '300',
                    color: '#6080A0',
                  }}>
                  900KR
                </Text>
              </View>
            </View>
          </View>
          <View style={{...styles.smallListItem, marginLeft: 20}}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Image
                source={BERGANS_SQUARE}
                resizeMode={'contain'}
                style={{width: 50, height: 50}}
              />
            </View>
            <View
              style={{display: 'flex', flexDirection: 'column', marginLeft: 8}}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 18,
                    fontWeight: '300',
                    color: '#3F3D56',
                  }}>
                  Bergans
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Open Sans',
                    fontSize: 16,
                    fontWeight: '300',
                    color: '#6080A0',
                  }}>
                  900KR
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 40,
            paddingHorizontal: 35,
            marginTop: 30,
          }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Sports & Trending
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
            marginTop: 20,
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
            marginTop: 30,
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
            marginTop: 20,
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
            marginTop: 30,
          }}>
          <Text
            style={{
              fontFamily: 'Open Sans',
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Sports & Trending
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
            marginTop: 20,
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
      </ScrollView>
    </View>
  );
};

export default ExploreTab;

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
  smallListItem: {
    width: 146,
    height: 68,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
