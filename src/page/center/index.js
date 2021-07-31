/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../utils/stylesKits';

export default class Center extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* 个人信息背景 */}
        <ImageBackground
          style={{
            height: pxToDp(200),
            backgroundColor: 'gray',
            justifyContent: 'center',
            borderRadius: pxToDp(30),
            opacity: 0.5,
          }}
          //放入背景图片位置
          //source={require('../../components/images/1.jpg')}
          source={require('../../images/bg.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: pxToDp(-150),
            marginBottom: pxToDp(50),
          }}>
          <Image
            style={{
              width: pxToDp(65),
              height: pxToDp(65),
              borderRadius: pxToDp(65),
              backgroundColor: '#fff',
              margin: pxToDp(15),
            }}
            source={require('../../images/head2.jpg')}
          />
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontSize: pxToDp(25), color: '#000' }}>胡先生</Text>
            <Text style={{ fontSize: pxToDp(14), color: '#000' }}>
              己所不欲 勿施于人
            </Text>
          </View>
          <View
            style={{
              width: pxToDp(165),
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              style={{ marginRight: pxToDp(15) }}
              onPress={() => this.context.navigate('RevisePage')}>
              <Ionicons name="settings" size={pxToDp(30)} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        {/* 订单、关注、收藏盒子 */}
        <View style={s.order}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: pxToDp(40),
              marginRight: pxToDp(40),
              marginTop: pxToDp(18),
            }}>
            <View style={{ borderRightWidth: pxToDp(1) }}>
              <TouchableOpacity onPress={() => this.context.navigate('OrderList')}>
                <Text style={{ fontSize: pxToDp(25), marginRight: pxToDp(30) }}>
                  203
                </Text>
                <Text style={{ fontSize: pxToDp(15), marginRight: pxToDp(30) }}>
                  订单
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={{ fontSize: pxToDp(25) }}>268</Text>
              <Text style={{ fontSize: pxToDp(15) }}>关注</Text>
            </View>
            <View style={{ borderLeftWidth: pxToDp(1) }}>
              <Text style={{ fontSize: pxToDp(25), marginLeft: pxToDp(30) }}>
                354
              </Text>
              <Text style={{ fontSize: pxToDp(15), marginLeft: pxToDp(30) }}>
                收藏
              </Text>
            </View>
          </View>
        </View>
        {/* 下部分盒子 */}
        <View style={s.other}>
          {/* 参与活动 */}
          <View style={s.activity}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {/* 小旗子组件 */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: pxToDp(15),
                }}>
                <AntDesign name="flag" size={pxToDp(18)} color="#000" />
                <Text style={{ fontSize: pxToDp(16), margin: pxToDp(12) }}>
                  参与活动
                </Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ alignSelf: 'center', marginRight: 15 }}>
                  <AntDesign name="right" size={pxToDp(12)} color="#000" />
                </View>
              </View>
            </View>
            <View style={s.scrollBox}>
              {/* 侧滑 */}
              <ScrollView
                horizontal={true} // 横向
                showsHorizontalScrollIndicator={false}>
                {/* 纵向三行 */}
                {/* <TouchableOpacity onPress={()=>{navigation.navigate('PoetIndex')}}> */}
                {/* <TouchableOpacity onPress={()=>{this.GetPoet}}> */}
                {/* <TouchableOpacity onPress={this.GetPoet}> */}
                <TouchableOpacity onPress={() => this.context.navigate('ActivityKid')} style={s.TouchStyle}>
                  <Image
                    style={{
                      width: pxToDp(150),
                      height: pxToDp(80),
                      borderRadius: pxToDp(10),
                      backgroundColor: 'gray',
                    }}
                    //放入图片位置
                    /* source={require('../../components/images/1.jpg')} */
                    source={require('../../images/kid1.jpg')}
                  />
                  <Text>茶艺培训课</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.TouchStyle}>
                  <Image
                    style={{
                      width: pxToDp(150),
                      height: pxToDp(80),
                      borderRadius: pxToDp(10),
                      backgroundColor: 'gray',
                    }}
                    //放入图片位置
                    /* source={require('../../components/images/1.jpg')} */
                    source={require('../../images/kid2.jpg')}
                  />
                  <Text>品茶弹人生</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.TouchStyle}>
                  <Image
                    style={{
                      width: pxToDp(150),
                      height: pxToDp(80),
                      borderRadius: pxToDp(10),
                      backgroundColor: 'gray',
                    }}
                    //放入图片位置
                    /* source={require('../../components/images/1.jpg')} */
                    source={require('../../images/kid3.jpg')}
                  />
                  <Text>一起来喝茶</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.TouchStyle}>
                  <Image
                    style={{
                      width: pxToDp(150),
                      height: pxToDp(80),
                      borderRadius: pxToDp(10),
                      backgroundColor: 'gray',
                    }}
                    //放入图片位置
                    /* source={require('../../components/images/1.jpg')} */
                    source={require('../../images/kid4.jpg')}
                  />
                  <Text>悠悠茶香浓</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.TouchStyle}>
                  <Image
                    style={{
                      width: pxToDp(150),
                      height: pxToDp(80),
                      borderRadius: pxToDp(10),
                      backgroundColor: 'gray',
                    }}
                    //放入图片位置
                    /* source={require('../../components/images/1.jpg')} */
                    source={require('../../images/kid5.jpg')}
                  />
                  <Text>细品茶文化</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.TouchStyle}>
                  <Image
                    style={{
                      width: pxToDp(150),
                      height: pxToDp(80),
                      borderRadius: pxToDp(10),
                      backgroundColor: 'gray',
                    }}
                    //放入图片位置
                    /* source={require('../../components/images/1.jpg')} */
                    source={require('../../images/kid6.jpg')}
                  />
                  <Text>茶叶的追溯</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.TouchStyle}>
                  <Image
                    style={{
                      width: pxToDp(150),
                      height: pxToDp(80),
                      borderRadius: pxToDp(10),
                      backgroundColor: 'gray',
                    }}
                    //放入图片位置
                    /* source={require('../../components/images/1.jpg')} */
                    source={require('../../images/kid7.jpg')}
                  />
                  <Text>以茶来会友</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.context.navigate('AddressList')}>
            <View style={s.Sbox}>
              <View style={s.textBbox}>
                <Ionicons
                  name="location-outline"
                  size={pxToDp(18)}
                  color="#000"
                />
                <Text style={{ fontSize: pxToDp(16), margin: pxToDp(12) }}>
                  收获地址
                </Text>
              </View>
              <View style={s.left}>
                <View style={s.right}>
                  <AntDesign name="right" size={pxToDp(12)} color="#000" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={s.Sbox}>
            <View style={s.textBbox}>
              <AntDesign name="bells" size={pxToDp(18)} color="#000" />
              <Text style={{ fontSize: pxToDp(16), margin: pxToDp(12) }}>
                消息中心
              </Text>
            </View>
            <View style={s.left}>
              <View style={s.right}>
                <AntDesign name="right" size={pxToDp(12)} color="#000" />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={()=>this.context.navigate("Help")}>
            <View style={s.Sbox}>
              <View style={s.textBbox}>
                <FontAwesome name="envelope-o" size={pxToDp(18)} color="#000" />
                <Text style={{ fontSize: pxToDp(16), margin: pxToDp(12) }}>
                  帮助与反馈
                </Text>
              </View>
              <View style={s.left}>
                <View style={s.right}>
                  <AntDesign name="right" size={pxToDp(12)} color="#000" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={s.Sbox}>
            <View style={s.textBbox}>
              <Ionicons
                name="md-settings-outline"
                size={pxToDp(18)}
                color="#000"
              />
              <Text style={{ fontSize: pxToDp(16), margin: pxToDp(12) }}>
                设置
              </Text>
            </View>
            <View style={s.left}>
              <View style={s.right}>
                <AntDesign name="right" size={pxToDp(12)} color="#000" />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  order: {
    width: pxToDp(345),
    height: pxToDp(100),
    backgroundColor: '#ddd',
    marginLeft: pxToDp(16),
    borderRadius: pxToDp(10),
    marginTop: pxToDp(-50),
  },
  other: {
    flex: 1,
  },
  scrollBox: {
    width: pxToDp(420),
    height: pxToDp(100),
  },
  activity: {
    height: pxToDp(150),
  },
  Sbox: {
    height: pxToDp(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TouchStyle: {
    marginLeft: pxToDp(20),
    width: pxToDp(150),
    height: pxToDp(100),
  },
  textBbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: pxToDp(15),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  right: {
    alignSelf: 'center',
    marginRight: pxToDp(15),
  },
});
