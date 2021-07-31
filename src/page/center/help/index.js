/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Otherbanner from '../../../components/Otherbanner/index';
import {NavigationContext} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {pxToDp} from '../../../utils/stylesKits';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class index extends Component {
  static contextType = NavigationContext;
  render() {
    return (
      <View style={{flex: 1}}>
        <Otherbanner title="反馈与帮助" back="arrow-back" />
        <ScrollView>
          <View style={{height: pxToDp(800), paddingBottom: pxToDp(50)}}>
            <View style={s.top}>
              <View>
                <Text style={{fontSize: pxToDp(20), color: '#fff', marginLeft: pxToDp(20)}}>
                  问题分类
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: pxToDp(12),
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: pxToDp(18), color: '#666'}}>更多</Text>
                <AntDesign name="right" size={pxToDp(18)} color="#666" />
              </View>
            </View>
            <View style={s.bottom}>
              <View style={s.faq}>
                <View style={s.left}>
                  <AntDesign name="questioncircleo" size={pxToDp(25)} color="#fff" />
                  <Text style={s.lefttext}>常见问题</Text>
                </View>
                <View style={s.right}>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>茶余审核规则</Text>
                  </View>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>如何关闭XXX？</Text>
                  </View>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>如何上传1-15分钟的长视频</Text>
                  </View>
                </View>
              </View>
              <View style={s.account}>
                <View style={s.left}>
                  <MaterialCommunityIcons
                    name="account-question"
                    size={pxToDp(25)}
                    color="#fff"
                  />
                  <Text style={s.lefttext}>账号问题</Text>
                </View>
                <View style={s.right}>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>
                      手机号不用了，怎么找回原账号
                    </Text>
                  </View>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>
                      新买的手机号登录发现已被注册怎么办
                    </Text>
                  </View>
                </View>
              </View>
              <View style={s.video}>
                <View style={s.left}>
                  <AntDesign name="play" size={pxToDp(25)} color="#fff" />
                  <Text style={s.lefttext}>视频问题</Text>
                </View>
                <View style={s.right}>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>视频一直显示审核中</Text>
                  </View>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>视频不适宜公开</Text>
                  </View>
                </View>
              </View>
              <View style={s.purse}>
                <View style={s.left}>
                  <Ionicons name="wallet" size={pxToDp(25)} color="#fff" />
                  <Text style={s.lefttext}>钱包问题</Text>
                </View>
                <View style={s.right}>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>
                      为什么收入提现成功了但是未到账？
                    </Text>
                  </View>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>
                      如何/在哪解绑提现的绑定支付宝？
                    </Text>
                  </View>
                </View>
              </View>
              <View style={s.live}>
                <View style={s.left}>
                  <MaterialIcons name="live-tv" size={pxToDp(25)} color="#fff" />
                  <Text style={s.lefttext}>直播问题</Text>
                </View>
                <View style={s.right}>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>如何举报某个主播</Text>
                  </View>
                  <View style={s.rightkidbox}>
                    <Text style={s.righttext}>我的直播被封禁了怎么办</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#50935E',
            width: '100%',
            height: pxToDp(50),
          }}>
          <TouchableOpacity
            style={{width: '100%', height: '100%'}}
            onPress={() => this.context.navigate('FeedBack')}>
            <Text
              style={{
                alignSelf: 'center',
                top: pxToDp(15),
                fontSize: pxToDp(18),
                color: '#fcfcfc',
              }}>
              意见反馈
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  top: {
    height: pxToDp(60),
    backgroundColor: '#0f1523',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#0f1523',
  },
  faq: {
    flex: 3,
    flexDirection: 'row',
  },
  account: {
    flex: 2,
    flexDirection: 'row',
  },
  video: {
    flex: 2,
    flexDirection: 'row',
  },
  purse: {
    flex: 2,
    flexDirection: 'row',
  },
  live: {
    flex: 2,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#666',
  },
  right: {
    flex: 3,
    borderWidth: 0.5,
    borderColor: '#666',
  },
  lefttext: {
    fontSize: 18,
    color: '#fff',
  },
  rightkidbox: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderColor: '#666',
    justifyContent: 'center',
  },
  righttext: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 15,
  },
});
