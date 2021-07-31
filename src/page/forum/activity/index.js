/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
import Kidbanner from '../../../components/KidBanner/index';
import { pxToDp } from '../../../utils/stylesKits';
import {NavigationContext} from '@react-navigation/native';
import MyNav from '../../../components/MyNav/index';
export default class Activity extends Component {
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        {/* 标题栏吸顶 */}
        <ScrollView stickyHeaderIndices={[0]}>
          <MyNav title='系列活动' />
          {/* <View  style={{flex: 1, backgroundColor: '#fff'}}>
            <Kidbanner  back="arrow-back" title="活动" />
          </View> */}
          {/* 子版块 */}
          {/* 页面跳转 */}
          {/* <TouchableOpacity onPress={() => this.context.navigate('ActivityKid')}> */}
          <View style={s.container}>
            <View>
              <Image
                style={s.Picture}
                source={require('../../../images/tea1.jpg')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: pxToDp(8),
              }}>
              <View style={s.text}>
                <Text style={{fontSize: pxToDp(16), color: '#111'}}>
                  茶花会——茶艺培训
                </Text>
                <Text style={{fontSize: pxToDp(12), color: '#b3b3b3'}}>04月26日</Text>
              </View>
              <View style={s.tp}>
                <Image
                  style={s.picture}
                  source={require('../../../images/tx1.png')}
                />
                <Image
                  style={s.picture}
                  source={require('../../../images/tx2.png')}
                />
                <ImageBackground
                  style={{
                    width: pxToDp(35),
                    height: pxToDp(35),
                    borderRadius: pxToDp(35),
                    backgroundColor: '#50935E',
                    justifyContent:'center',
                  }}
                ><Text style={{fontSize:pxToDp(16),color:'#fff',alignSelf:'center'}}>+2</Text>
                </ImageBackground>
              </View>
            </View>
          </View>
          {/* </TouchableOpacity> */}
          <TouchableOpacity onPress={() => this.context.navigate('ActivityKid')}>
          <View style={s.container}>
            <View>
              <Image
                style={s.Picture}
                source={require('../../../images/tea3.jpg')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: pxToDp(8),
              }}>
              <View style={s.text}>
                <Text style={{fontSize: pxToDp(16), color: '#111'}}>
                  茶,不是附庸风雅
                </Text>
                <Text style={{fontSize: pxToDp(12), color: '#b3b3b3'}}>04月12日</Text>
              </View>
              <View style={s.tp}>
                <Image
                  style={s.picture}
                  source={require('../../../images/tx4.jpg')}
                />
                <Image
                  style={s.picture}
                  //放入背景图片位置
                  /* source={require('../../components/images/1.jpg')} */
                  source={require('../../../images/tx5.jpg')}
                />
                <ImageBackground
                  style={{
                    width: pxToDp(35),
                    height: pxToDp(35),
                    borderRadius: pxToDp(35),
                    backgroundColor: '#50935E',
                    justifyContent:'center',
                  }}
                ><Text style={{fontSize:pxToDp(16),color:'#fff',alignSelf:'center'}}>+10</Text>
                </ImageBackground>
              </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* 页面跳转 */}
          {/* <TouchableOpacity onPress={() => this.context.navigate('ActivityKid')}> */}
          <View style={s.container}>
            <View>
              <Image
                style={s.Picture}
                source={require('../../../images/tea2.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: pxToDp(8),
              }}>
              <View style={s.text}>
                <Text style={{fontSize: pxToDp(16), color: '#111'}}>一起来采茶</Text>
                <Text style={{fontSize: pxToDp(12), color: '#b3b3b3'}}>04月08日</Text>
              </View>
              <View style={s.tp}>
                <Image
                  style={s.picture}
                  source={require('../../../images/tx1.png')}
                />
                <Image
                  style={s.picture}
                  source={require('../../../images/tx2.png')}
                />
                <ImageBackground
                  style={{
                    width: pxToDp(35),
                    height: pxToDp(35),
                    borderRadius: pxToDp(35),
                    backgroundColor: '#50935E',
                    justifyContent:'center',
                  }}
                ><Text style={{fontSize:pxToDp(16),color:'#fff',alignSelf:'center'}}>+4</Text>
                </ImageBackground>
              </View>
            </View>
          </View>
          {/* </TouchableOpacity> */}
          {/* 页面跳转 */}
          {/* <TouchableOpacity onPress={() => this.context.navigate('ActivityKid')}> */}
          <View style={s.container}>
            <View>
              <Image
                style={s.Picture}
                source={require('../../../images/tea3.jpg')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: pxToDp(8),
              }}>
              <View style={s.text}>
                <Text style={{fontSize: pxToDp(16), color: '#111'}}>一起来采茶</Text>
                <Text style={{fontSize: pxToDp(12), color: '#b3b3b3'}}>04月08日</Text>
              </View>
              <View style={s.tp}>
                <Image
                  style={s.picture}
                  source={require('../../../images/tx4.jpg')}
                />
                <Image
                  style={s.picture}
                  source={require('../../../images/tx5.jpg')}
                />
                <ImageBackground
                  style={{
                    width: pxToDp(35),
                    height: pxToDp(35),
                    borderRadius: pxToDp(35),
                    backgroundColor: '#50935E',
                    justifyContent:'center',
                  }}
                ><Text style={{fontSize:pxToDp(16),color:'#fff',alignSelf:'center'}}>+8</Text>
                </ImageBackground>
              </View>
            </View>
          </View>
        {/* </TouchableOpacity> */}
        </ScrollView>
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    width: pxToDp(360),
    height: pxToDp(170),
    alignSelf: 'center',
    margin: pxToDp(15),
    borderRadius: pxToDp(20),
  },
  text: {
    marginLeft: pxToDp(15),
    marginTop: pxToDp(5),
  },
  tp: {
    width: pxToDp(120),
    height: pxToDp(45),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Picture: {
    width: pxToDp(360),
    height: pxToDp(125),
    backgroundColor: 'gray',
    borderRadius: pxToDp(20),
  },
  picture: {
    width: pxToDp(35),
    height: pxToDp(35),
    borderRadius: pxToDp(35),
    backgroundColor: 'gray',
  },
});
