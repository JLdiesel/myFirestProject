/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Otherbanner from '../../../components/Otherbanner/index';
import { pxToDp } from '../../../utils/stylesKits';
import {NavigationContext} from '@react-navigation/native';
import {Input} from 'react-native-elements';
export default class Nickname extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      signature: '己所不欲 勿施于人',
    };
  }
  render() {
    console.log('input', this.state.nickname);
    return (
      <View>
        <Otherbanner
          back="arrow-back"
          title="昵称"
          share="确定"
          rightCallback={() => this.context.navigate('RevisePage', this.state)}
        />
        <View
          style={{
            marginLeft: pxToDp(15),
            marginRight: pxToDp(15),
          }}>
          <Input
            style={{height: pxToDp(60), fontSize: pxToDp(20)}}
            placeholder="请填写您的昵称"
            placeholderTextColor="gray"
            onChangeText={nickname => this.getNickName(nickname)}>
            胡先生
          </Input>
        </View>
      </View>
    );
  }
  getNickName(nickname) {
    this.setState({
      nickname: nickname,
    });
  }
}
