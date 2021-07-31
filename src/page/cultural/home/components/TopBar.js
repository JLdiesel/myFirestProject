import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { pxToDp } from "../../../../utils/stylesKits";
class Index extends Component {
  render() {
    // console.log(this.props);
    const { goToPage, tabs, activeTab } = this.props;
    // goToPage 函数 负责跳转页面
    // tabs 标题数组 
    // activeTab 当前激活选中的索引
    return (
      <ImageBackground
        style={{
          height: pxToDp(50), flexDirection: "row", paddingLeft: pxToDp(20), paddingRight: pxToDp(20),
          justifyContent: "space-evenly", alignItems: 'center', backgroundColor: '#50935E'
        }}
      // source={require("../../../../images/b7.png")}
      >
        {tabs.map((v, i) => <TouchableOpacity
          key={i}
          onPress={() => goToPage(i)}
          style={{
            justifyContent: "center",
            borderBottomColor: "gary",
            borderBottomWidth: activeTab === i ? pxToDp(3) : 0
          }}
        >
          <Text
            style={{ color: "#fff", fontSize: activeTab === i ? pxToDp(20) : pxToDp(18), fontWeight: activeTab === i ? 'bold' : 'normal' }}
          >{v}</Text>
        </TouchableOpacity>)}
        {/* <View style={{ height: pxToDp(40), width: pxToDp(40), marginRight:pxToDp(-10) ,justifyContent:'center',alignItems:'center',flex:1}}>
          <Image style={{width:pxToDp(30),height:pxToDp(30)}} source={require('../../../../images/分类(1).png')}></Image>
        </View> */}
      </ImageBackground>
    );
  }
}
export default Index;