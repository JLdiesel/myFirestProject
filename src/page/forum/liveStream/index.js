import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { pxToDp } from '../../../utils/stylesKits';
import LottieView from 'lottie-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ModelZhiBo from '../../../components/ModelZhiBo/index';
import ActionButton from 'react-native-action-button';
import { NavigationContext } from "@react-navigation/native";

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    bacUriL: 'https://anchorpost.msstatic.com/cdnimage/anchorpost/1033/27/a678d87465509b7483726f82dfba20_2168_1627155664.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                    nameL: '糖可爱',
                    titleL: '恭喜镇长超皇恭喜真爷超皇！ 大象np',
                    numL: '2.5万',
                    bacUriR: 'https://anchorpost.msstatic.com/cdnimage/anchorpost/1032/dc/d7e5883b0e124c0c0834e960090c95_5883_1606125262.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                    nameR: '郭德纲于谦相声24小时',
                    titleR: '【无唱段】郭德纲于谦相声德云晚安音频轮播',
                    numR: '7546',
                },
                {
                    bacUriL: 'https://anchorpost.msstatic.com/cdnimage/anchorpost/1092/69/e0134fded69a4987de9e9a0c4105ae_4079_1623414027.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                    nameL: '天皓',
                    titleL: '夏日炎炎，有我超甜~',
                    numL: '2.5万',
                    bacUriR: 'https://anchorpost.msstatic.com/cdnimage/anchorpost/1073/95/f9fcda91af25103e3148ac9a3123fd_1663_1623131283.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                    nameR: '温小晚',
                    titleR: '轻语 无法抗拒的声音',
                    numR: '7546',
                },
                {
                    bacUriL: 'https://anchorpost.msstatic.com/cdnimage/anchorpost/1033/27/a678d87465509b7483726f82dfba20_2168_1627155664.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                    nameL: '糖可爱',
                    titleL: '恭喜镇长超皇恭喜真爷超皇！ 大象np',
                    numL: '2.5万',
                    bacUriR: 'https://anchorpost.msstatic.com/cdnimage/anchorpost/1032/dc/d7e5883b0e124c0c0834e960090c95_5883_1606125262.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                    nameR: '郭德纲于谦相声24小时',
                    titleR: '【无唱段】郭德纲于谦相声德云晚安音频轮播',
                    numR: '7546',
                },
                {
                    bacUriL: 'https://anchorpost.msstatic.com/cdnimage/anchorpost/1092/69/e0134fded69a4987de9e9a0c4105ae_4079_1623414027.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                    nameL: '天皓',
                    titleL: '夏日炎炎，有我超甜~',
                    numL: '2.5万',
                    bacUriR: 'https://anchorpost.msstatic.com/cdnimage/anchorpost/1073/95/f9fcda91af25103e3148ac9a3123fd_1663_1623131283.jpg?imageview/4/0/w/338/h/190/blur/1/format/webp',
                    nameR: '温小晚',
                    titleR: '轻语 无法抗拒的声音',
                    numR: '7546',
                },

            ]
        }
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    static contextType = NavigationContext;

    render() {
        return (
            <View>
                <ActionButton zIndex={99999} position="right" offsetX={20} offsetY={80} size={58} buttonColor="#50935E" style={{ borderRadius: pxToDp(60) }}>
                    <ActionButton.Item buttonColor='#9b59b6' title="发起直播" onPress={() => this.context.navigate('Zhi')}>
                        <View style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20 }}><Text></Text></View>
                    </ActionButton.Item>
                    {/* <ActionButton.Item buttonColor='#3498db' title="2" onPress={() => { }}>
                        <View style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20 }}><Text></Text></View>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="3" onPress={() => { }}>
                        <View style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20 }}><Text></Text></View>
                    </ActionButton.Item> */}
                </ActionButton>
                {/* <ModelZhiBo isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModal} /> */}
                <ScrollView>
                    {this.state.arr.map((v, i) =>
                        <View style={{ width: '96%', marginLeft: pxToDp(8), height: pxToDp(200), marginTop: pxToDp(8), flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                            <View style={{ width: '48%', height: pxToDp(200), }}>
                                <View>
                                    <ImageBackground resizeMode='cover' style={{ width: '100%', height: pxToDp(160), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }} imageStyle={{ borderRadius: pxToDp(16) }} source={{ uri: v.bacUriL }}>
                                        <View style={{ marginBottom: pxToDp(10), width: '35%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text numberOfLines={1} style={{ color: 'white', fontSize: pxToDp(12), fontWeight: 'bold' }}>{v.nameL}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '65%', }}>
                                            <LottieView style={{ width: pxToDp(70), marginLeft: pxToDp(16) }} source={require('../../../lottie/705-linear-line.json')} autoPlay loop />
                                            <Text style={{ color: 'white', fontSize: pxToDp(12), fontWeight: 'bold', marginRight: pxToDp(8) }}>{v.numL}</Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', height: pxToDp(40) }}>
                                        <Text numberOfLines={1} style={{ fontSize: pxToDp(14) }}>
                                            {v.titleL}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: '48%', height: pxToDp(200), }}>
                                <View>
                                    <ImageBackground resizeMode='cover' style={{ width: '100%', height: pxToDp(160), flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }} imageStyle={{ borderRadius: pxToDp(16) }} source={{ uri: v.bacUriR }}>
                                        <View style={{ marginBottom: pxToDp(10), width: '35%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text numberOfLines={1} style={{ color: 'white', fontSize: pxToDp(12), fontWeight: 'bold' }}>{v.nameR}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '65%', }}>
                                            <LottieView style={{ width: pxToDp(70), marginLeft: pxToDp(16) }} source={require('../../../lottie/705-linear-line.json')} autoPlay loop />
                                            <Text style={{ color: 'white', fontSize: pxToDp(12), fontWeight: 'bold', marginRight: pxToDp(8) }}>{v.numR}</Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', height: pxToDp(40) }}>
                                        <Text numberOfLines={1} style={{ fontSize: pxToDp(14) }}>
                                            {v.titleR}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                </ScrollView>


            </View>
        );
    }
}

export default index;