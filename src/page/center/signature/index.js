/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Otherbanner from '../../../components/Otherbanner';
import { Input } from 'react-native-elements';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/stylesKits';
export default class Signature extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      signature: '',
    };
  }
  render() {
    console.log('input', this.state.signature);
    return (
      <View>
        <Otherbanner
          back="arrow-back"
          title="个性签名"
          share="确定"
          rightCallback={() => this.context.navigate('RevisePage', this.state)}
        />
        <View>
          <Input
            style={{
              height: pxToDp(100),
              width: pxToDp(412),
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              borderColor: '#666',
              textAlign: 'left',
              textAlignVertical: 'top',
              textShadowColor: '#000',
            }}
            multiline={true}
            onChangeText={signature => this.getNickName(signature)}
          />
        </View>
      </View>
    );
  }
  getNickName(signature) {
    this.setState({
      signature: signature,
    });
  }
}
