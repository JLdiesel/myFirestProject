/* eslint-disable prettier/prettier */
('use strict');
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

        <View style={styles.textview}>
          {/* 标题名 */}
          <Text style={styles.textstyle}>{this.props.title}</Text>
        </View>

        <View style={styles.share}>
          {/* 分享按钮跳转 */}
          {/* <TouchableOpacity onPress={this.context.goBack}> */}
          {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
          <Ionicons name={this.props.share} size={25} color="white" />
          {/* </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  share: {
    flexDirection: 'row',
    height: 60,
    width: 40,
    alignItems: 'center',
    marginRight: 10,
  },
  textview: {
    flex: 1,
    alignItems: 'center',
  },
  textstyle: {
    fontSize: 22,
    color: '#fff',
  },
});
