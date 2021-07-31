/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
('use strict');
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContext } from '@react-navigation/native';

export default class HeaderHaveBack extends Component {
  static contextType = NavigationContext;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.back}>
          <TouchableOpacity onPress={this.context.goBack}>
            {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
            <Ionicons name={this.props.back} size={25} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.Searchview}>
          <Input
            placeholder="搜索我的订单"
            maxLength={10}
            style={{top:-2}}
            leftIcon={<View style={{marginBottom:5}}><Ionicons name="search" size={20} color="#000" /></View>}
          />
        </View>

            <View style={styles.shaixuan}>
            <Text style={{fontSize:16,color:'#fff'}}>筛选</Text>
            </View>
        <View style={styles.message}>
          {/* 分享按钮跳转 */}
          {/* <TouchableOpacity onPress={this.context.goBack}> */}
          {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
          <AntDesign name={this.props.message} size={25} color="white" />
          {/* </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 420,
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#50935E',
  },
  back: {
    flexDirection: 'row',
    height: 60,
    width: 40,
    alignItems: 'center',
    marginLeft: 10,
  },
  message: {
    flexDirection: 'row',
    height: 60,
    width: 40,
      alignItems: 'center',
    marginLeft:10,
  },
  Searchview: {
    width: 260,
    borderRadius: 60,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    },
    shaixuan: {
        flexDirection: 'row',
        height: 60,
        width: 40,
        alignItems: 'center',
        marginLeft: 10,
  },
});
