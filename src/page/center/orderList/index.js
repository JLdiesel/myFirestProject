/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Fourbanner from '../../../components/FourBanner/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {pxToDp} from '../../../utils/stylesKits';
import {NavigationContext} from '@react-navigation/native';

export default class order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      more: '更多',
      shop: '联想旗舰店',
      results: '完成',
      detail: '联想（Lenovo）16GB DDR4 2666笔记本内存条啊啊啊',
      number: '共1件',
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={s.all}>
        <Fourbanner back="arrow-back" message="message1" />
        <View style={s.center}>
          <ScrollView>
            <View style={s.kid}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', margin: pxToDp(10)}}>
                  <Text
                    style={{
                      fontSize: pxToDp(16),
                      fontWeight: 'bold',
                      marginTop: pxToDp(-2),
                    }}>
                    {this.state.shop}
                  </Text>
                  <AntDesign name="right" size={pxToDp(17)} color="#000" />
                </View>
                <Text style={{fontSize: pxToDp(15), margin: pxToDp(10)}}>
                  {this.state.results}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{marginLeft: pxToDp(10)}}>
                  <Image
                    style={{
                      width: pxToDp(80),
                      height: pxToDp(80),
                      borderRadius: pxToDp(15),
                    }}
                    source={require('../../../images/kid1.jpg')}
                  />
                </View>
                <View>
                  <Text
                    numberOfLines={2}
                    style={{
                      width: pxToDp(180),
                      height: pxToDp(50),
                      fontSize: pxToDp(16),
                    }}>
                    {this.state.detail}
                  </Text>
                </View>

                <View style={{marginRight: pxToDp(10)}}>
                  <Text style={{fontSize: pxToDp(20)}}>￥489.00</Text>
                  <Text style={{fontSize: pxToDp(12), alignSelf: 'flex-end'}}>
                    {this.state.number}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  height: pxToDp(50),
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: pxToDp(10),
                }}>
                <Text
                  style={{
                    fontSize: pxToDp(15),
                    marginLeft: pxToDp(10),
                    width: pxToDp(100),
                  }}>
                  {this.state.more}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}>
                  <View style={s.kidtextbox}>
                    <Text>换退/售后</Text>
                  </View>
                  <View style={s.othertextbox}>
                    <Text style={{color: '#ff8d38'}}>再次购买</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={s.kid}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', margin: pxToDp(10)}}>
                <Text
                  style={{
                    fontSize: pxToDp(16),
                    fontWeight: 'bold',
                    marginTop: pxToDp(-2),
                  }}>
                  {this.state.shop}
                </Text>
                <AntDesign name="right" size={pxToDp(17)} color="#000" />
              </View>
              <Text style={{fontSize: pxToDp(15), margin: pxToDp(10)}}>
                {this.state.results}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{marginLeft: pxToDp(10)}}>
                <Image
                  style={{
                    width: pxToDp(80),
                    height: pxToDp(80),
                    borderRadius: pxToDp(15),
                  }}
                  source={require('../../../images/kid6.jpg')}
                />
              </View>
              <View>
                <Text
                  numberOfLines={2}
                  style={{
                    width: pxToDp(180),
                    height: pxToDp(50),
                    fontSize: pxToDp(16),
                  }}>
                  {this.state.detail}
                </Text>
              </View>

              <View style={{marginRight: pxToDp(10)}}>
                <Text style={{fontSize: pxToDp(20)}}>￥489.00</Text>
                <Text style={{fontSize: pxToDp(12), alignSelf: 'flex-end'}}>
                  {this.state.number}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: pxToDp(50),
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: pxToDp(10),
              }}>
              <Text
                style={{
                  fontSize: pxToDp(15),
                  marginLeft: pxToDp(10),
                  width: pxToDp(100),
                }}>
                {this.state.more}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'flex-end',
                }}>
                <View style={s.kidtextbox}>
                  <Text>换退/售后</Text>
                </View>
                <View style={s.othertextbox}>
                  <Text style={{color: '#ff8d38'}}>再次购买</Text>
                </View>
              </View>
            </View>
            </View>
            <View style={s.kid}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', margin: pxToDp(10)}}>
                <Text
                  style={{
                    fontSize: pxToDp(16),
                    fontWeight: 'bold',
                    marginTop: pxToDp(-2),
                  }}>
                  {this.state.shop}
                </Text>
                <AntDesign name="right" size={pxToDp(17)} color="#000" />
              </View>
              <Text style={{fontSize: pxToDp(15), margin: pxToDp(10)}}>
                {this.state.results}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{marginLeft: pxToDp(10)}}>
                <Image
                  style={{
                    width: pxToDp(80),
                    height: pxToDp(80),
                    borderRadius: pxToDp(15),
                  }}
                  source={require('../../../images/kid2.jpg')}
                />
              </View>
              <View>
                <Text
                  numberOfLines={2}
                  style={{
                    width: pxToDp(180),
                    height: pxToDp(50),
                    fontSize: pxToDp(16),
                  }}>
                  {this.state.detail}
                </Text>
              </View>

              <View style={{marginRight: pxToDp(10)}}>
                <Text style={{fontSize: pxToDp(20)}}>￥489.00</Text>
                <Text style={{fontSize: pxToDp(12), alignSelf: 'flex-end'}}>
                  {this.state.number}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: pxToDp(50),
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: pxToDp(10),
              }}>
              <Text
                style={{
                  fontSize: pxToDp(15),
                  marginLeft: pxToDp(10),
                  width: pxToDp(100),
                }}>
                {this.state.more}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'flex-end',
                }}>
                <View style={s.kidtextbox}>
                  <Text>换退/售后</Text>
                </View>
                <View style={s.othertextbox}>
                  <Text style={{color: '#ff8d38'}}>再次购买</Text>
                </View>
              </View>
            </View>
            </View>
            <View style={s.kid}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', margin: pxToDp(10)}}>
                <Text
                  style={{
                    fontSize: pxToDp(16),
                    fontWeight: 'bold',
                    marginTop: pxToDp(-2),
                  }}>
                  {this.state.shop}
                </Text>
                <AntDesign name="right" size={pxToDp(17)} color="#000" />
              </View>
              <Text style={{fontSize: pxToDp(15), margin: pxToDp(10)}}>
                {this.state.results}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{marginLeft: pxToDp(10)}}>
                <Image
                  style={{
                    width: pxToDp(80),
                    height: pxToDp(80),
                    borderRadius: pxToDp(15),
                  }}
                  source={require('../../../images/kid3.jpg')}
                />
              </View>
              <View>
                <Text
                  numberOfLines={2}
                  style={{
                    width: pxToDp(180),
                    height: pxToDp(50),
                    fontSize: pxToDp(16),
                  }}>
                  {this.state.detail}
                </Text>
              </View>

              <View style={{marginRight: pxToDp(10)}}>
                <Text style={{fontSize: pxToDp(20)}}>￥489.00</Text>
                <Text style={{fontSize: pxToDp(12), alignSelf: 'flex-end'}}>
                  {this.state.number}
                </Text>
              </View>
            </View>
            <View
              style={{
                height: pxToDp(50),
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: pxToDp(10),
              }}>
              <Text
                style={{
                  fontSize: pxToDp(15),
                  marginLeft: pxToDp(10),
                  width: pxToDp(100),
                }}>
                {this.state.more}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'flex-end',
                }}>
                <View style={s.kidtextbox}>
                  <Text>换退/售后</Text>
                </View>
                <View style={s.othertextbox}>
                  <Text style={{color: '#ff8d38'}}>再次购买</Text>
                </View>
              </View>
            </View>
          </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const s = StyleSheet.create({
  all: {
    flex: 1,
  },
  center: {
    flex: 1,
  },
  kid: {
    height: pxToDp(180),
    marginTop: pxToDp(20),
    backgroundColor: '#eee',
  },
  kidtextbox: {
    width: pxToDp(70),
    height: pxToDp(32),
    borderWidth: pxToDp(1),
    backgroundColor: '#fff',
    borderRadius: pxToDp(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: pxToDp(30),
  },
  othertextbox: {
    width: pxToDp(70),
    height: pxToDp(32),
    borderWidth: pxToDp(1),
    borderColor: '#ff8d38',
    backgroundColor: '#fff',
    borderRadius: pxToDp(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: pxToDp(15),
  },
});
