import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import MyButton from '../../../components/MyButton';
import { pxToDp } from '../../../utils/stylesKits';
import { NavigationContext } from "@react-navigation/native";
import ModelCha from '../../../components/ModelCha/index';
import ModelLin from '../../../components/ModelLin/index';
import MyNav from '../../../components/MyNav/index';
class index extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1,
        }
    }



    render() {
        return (
            <View>
                <MyNav title='我的茶树' />
                <ImageBackground style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }} source={require('../../../images/chashuyemian1.png')} >
                    <View style={{ width: pxToDp(60), height: pxToDp(80), backgroundColor: 'pink', marginTop: pxToDp(380) }}></View>
                    <Text style={{fontSize:pxToDp(14)}}>这里是茶树！！！</Text>
                    <Text style={{fontSize:pxToDp(14)}}>种子-小芽-小苗-小树-茶树（嫩叶）-茶树（快熟了）-茶树（熟叶）</Text>
                    <Text style={{fontSize:pxToDp(14)}}>听歌、听曲、看文章每个10分钟可浇水1次，每天上限各1次，评论可浇1次，购买东西可浇2次</Text>
                </ImageBackground>
            </View>
        );
    }
}

export default index;