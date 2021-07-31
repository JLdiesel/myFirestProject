import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import { pxToDp } from "../../utils/stylesKits";
import IconFont from "../IconFont";
import { NavigationContext } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
class Index extends Component {
  static contextType = NavigationContext;
  render() {
    // goBack
    return (
      <View>
        {/* <StatusBar
          backgroundColor="transparent"
          translucent={true}
        /> */}
        <ImageBackground 
        // source={require("../../images/b7.png")}
          style={{
            height: pxToDp(44), paddingTop: pxToDp(12), flexDirection: 'row',
            paddingLeft: pxToDp(10), paddingRight: pxToDp(10),
            alignItems: "center", justifyContent: 'space-between',backgroundColor:'#50935E'
          }}
        >
          <TouchableOpacity
            onPress={this.context.goBack}
            style={{ width: pxToDp(80), flexDirection: "row", alignItems: 'center' }}>
            {/* <IconFont style={{ color: "#fff" }} name="iconfanhui" /> */}
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center',marginBottom:pxToDp(8) }}>
              <Icon1 style={{marginTop:pxToDp(-2)}} name="navigate-before" size={28} color={'white'} />
              <Text style={{ color: "#fff", fontSize: pxToDp(16) }} >返回</Text>
            </View>
          </TouchableOpacity>

          <Text style={{ color: "#fff", fontSize: pxToDp(20), fontWeight: "bold" ,marginBottom:pxToDp(8)}}>{this.props.title}</Text>

          <Text
            onPress={this.props.onRightPress || function () { }}
            style={{ width: pxToDp(80), color: "#fff", textAlign: "right" }}>{this.props.rightText}</Text>

        </ImageBackground>
      </View>
    );
  }
}
export default Index;