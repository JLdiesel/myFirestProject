/* eslint-disable semi */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Alert,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import ButtonColor from '../../../components/ButtonColor/index';
import Entypo from 'react-native-vector-icons/Entypo';
import { pxToDp } from '../../../utils/stylesKits';
import { NavigationContext } from "@react-navigation/native";

export default class ActivityKid extends Component {
    constructor() {
        super();
        this.state = {
            Application: '报名',
            colors: ['#80b4a7', '#27836c'],
        };
    }
    static contextType = NavigationContext;

    render() {
        return (
            <View style={{ flex: 1, paddingBottom: pxToDp(40) }}>
                <View>
                    <ScrollView>
                        <ImageBackground style={{ height: pxToDp(180), backgroundColor: 'gray', }}
                            source={require('../../../images/ActivityBG.jpg')}>
                            <View style={{ top: pxToDp(30), left: pxToDp(10) }}>
                                <TouchableOpacity onPress={this.context.goBack}>
                                    <Ionicons name="arrow-back-outline" size={pxToDp(30)} color="white" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ top: 0, left: pxToDp(380) }}>
                                <SimpleLineIcons name="options-vertical" size={pxToDp(25)} color="white" />
                            </View>
                        </ImageBackground>
                        {/* 大盒子 */}
                        <View style={s.introduce}>
                            <View>
                                <View>
                                    <Text style={{ fontSize: pxToDp(25), margin: pxToDp(20) }}>
                                        茶，不是附庸风雅
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View>
                                        {/* 地理位置 */}
                                        <View style={s.positon}>
                                            <Ionicons name="time-outline" size={pxToDp(18)} color="#b3b3b3" />
                                            <Text style={{ fontSize: pxToDp(pxToDp(13)), marginLeft: pxToDp(5), color: '#b3b3b3', }}>
                                                2019/04/12
                                            </Text>
                                        </View>
                                        <View style={s.positon}>
                                            <Ionicons name="location-sharp" size={pxToDp(18)} color="#b3b3b3" />
                                            <Text style={{ fontSize: pxToDp(pxToDp(13)), marginLeft: pxToDp(5), color: '#b3b3b3', }}>
                                                南京市雨花台区雨花客厅108号
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ justifyContent: 'center', width: pxToDp(115), alignItems: 'flex-end', }}>
                                        <TouchableOpacity onPress={() => console.log(2)}>
                                            <View style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(40), backgroundColor: '#50935E', flexDirection: 'row', }}>
                                                <Entypo name="paper-plane" size={pxToDp(20)} color="#fff" style={{ flex: 1, alignSelf: 'center', marginLeft: pxToDp(8), }} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            {/* 报名人数板块 */}
                            <View style={s.number}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: pxToDp(25), color: '#000', marginLeft: pxToDp(10), marginTop: pxToDp(15), }}>
                                        12/24
                                    </Text>
                                    <Text style={{ fontSize: pxToDp(15), color: '#666', marginLeft: pxToDp(12), }}>
                                        报名人数
                                    </Text>
                                </View>
                                <View style={s.box}>
                                    <Image style={s.picture}
                                        source={require('../../../images/Tx1.jpg')}
                                    />
                                    <Image
                                        style={s.picture}
                                        source={require('../../../images/Tx2.jpg')}
                                    />
                                    <Image
                                        style={s.picture}
                                        source={require('../../../images/Tx3.jpg')}
                                    />
                                    {/* 更多 */}
                                    <View style={s.more}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Feather name="more-horizontal" size={pxToDp(30)} color="#fff" />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            {/* 活动介绍 */}
                            <View style={s.jieshao}>
                                <View style={{ padding: pxToDp(10) }}>
                                    <Text style={{ fontSize: pxToDp(18) }}>活动介绍</Text>
                                    <Text style={{ fontSize: pxToDp(14) }}>
                                        喝茶没那么玄乎，它很接地气，归根结底是一种可以给人带来轻松和健康的饮料。乃是百姓开门七件事的“柴米油盐酱醋茶”之一而已。它的使命就是被喝掉。
                                        {'\n'}
                                        只是随着人类文明的进步，盛世茶兴，于今欲有茶为国饮之势，喝茶方式一变再变。有令人赏心悦目驰神的冲泡技艺之美，有一人得幽，二人得趣。三人成品的品茗之佳境，凡此种种。于外看到的是美。
                                    </Text>
                                </View>
                            </View>
                            <View style={s.jieshao}>
                                <View style={{ padding: pxToDp(10) }}>
                                    <Text style={{ fontSize: pxToDp(18) }}>活动介绍</Text>
                                    <Text style={{ fontSize: pxToDp(14) }}>
                                        喝茶没那么玄乎，它很接地气，归根结底是一种可以给人带来轻松和健康的饮料。乃是百姓开门七件事的“柴米油盐酱醋茶”之一而已。它的使命就是被喝掉。
                                        {'\n'}
                                        只是随着人类文明的进步，盛世茶兴，于今欲有茶为国饮之势，喝茶方式一变再变。有令人赏心悦目驰神的冲泡技艺之美，有一人得幽，二人得趣。三人成品的品茗之佳境，凡此种种。于外看到的是美。
                                    </Text>
                                </View>
                            </View>
                            <View style={s.jieshao}>
                                <View style={{ padding: pxToDp(10) }}>
                                    <Text style={{ fontSize: pxToDp(18) }}>活动介绍</Text>
                                    <Text style={{ fontSize: pxToDp(14) }}>
                                        喝茶没那么玄乎，它很接地气，归根结底是一种可以给人带来轻松和健康的饮料。乃是百姓开门七件事的“柴米油盐酱醋茶”之一而已。它的使命就是被喝掉。
                                        {'\n'}
                                        只是随着人类文明的进步，盛世茶兴，于今欲有茶为国饮之势，喝茶方式一变再变。有令人赏心悦目驰神的冲泡技艺之美，有一人得幽，二人得趣。三人成品的品茗之佳境，凡此种种。于外看到的是美。
                                    </Text>
                                </View>
                            </View>
                            <View style={{marginBottom:pxToDp(10)}}></View>
                        </View>
                    </ScrollView>
                </View>
                {/* 自定义组件Button报名按钮 */}
                <ButtonColor
                    onPress={() => {
                        this.setState({ colors: ['#666', '#666'], Application: '已报名' });
                    }}
                    colors={this.state.colors}
                    style={{ width: pxToDp(360), height: pxToDp(40), borderRadius: pxToDp(50), alignSelf: 'center', position: 'absolute', bottom: 0, }}>
                    <Text>{this.state.Application}</Text>
                </ButtonColor>
            </View>
        );
    }
}
const s = StyleSheet.create({
    introduce: {
        borderTopLeftRadius: pxToDp(20),
        borderTopRightRadius: pxToDp(20),
        marginTop: pxToDp(-20),
        backgroundColor: '#fff',
    },
    positon: {
        flexDirection: 'row',
        marginLeft: pxToDp(20),
        marginTop: pxToDp(5),
    },
    number: {
        width: pxToDp(345),
        height: pxToDp(100),
        backgroundColor: '#eee',
        margin: pxToDp(15),
        flexDirection: 'row',
        borderRadius: pxToDp(15),
    },
    box: {
        flex: 3,
        backgroundColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: pxToDp(15),
    },
    picture: {
        width: pxToDp(45),
        height: pxToDp(45),
        borderRadius: pxToDp(45),
        backgroundColor: '#eee',
        alignSelf: 'center',
        margin: pxToDp(8),
    },
    more: {
        width: pxToDp(45),
        height: pxToDp(45),
        borderRadius: pxToDp(45),
        backgroundColor: '#50935E',
        alignSelf: 'center',
        margin: pxToDp(8),
        justifyContent: 'center',
    },
    jieshao: {
        height: pxToDp(200),
        marginLeft: pxToDp(15),
        marginRight: pxToDp(15),
    },
});
