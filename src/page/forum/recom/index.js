import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, } from "react-native";
import { pxToDp } from '../../../utils/stylesKits';
import Swiper from 'react-native-swiper'
import { ScrollTabView, FlatList } from 'react-native-scroll-head-tab-view';
import ActionButton from 'react-native-action-button';
import { NavigationContext } from "@react-navigation/native";
import ModelFa from '../../../components/ModelFa/index';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            imformation: [
                {
                    id: "1",
                    avatar: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
                    name: "猪倌",
                    time: "14:35",
                    label: "#元宵节#快乐元宵",
                    image1: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
                    image2: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
                    image3: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
                    title: "热门话题",
                    comment: "就离谱，怎么就过元宵节了，我狗都傻了"

                },
                {
                    id: "2",
                    avatar: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
                    name: "杀手不太冷",
                    time: "17:00",
                    label: "#EMO",
                    image1: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F2c735c86c7d8e858854f1df453be2522ee92f9bba0dc8-jceEN1_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630150188&t=891120029b1ad42097f17c930a7ae813",
                    title: "热门话题",
                    comment: "救命，这张插画好好看"
                },
                {
                    id: "3",
                    avatar: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
                    name: "B8bo",
                    time: "17:00",
                    label: "#没头没脑可可爱爱",
                    image1: "https://img1.baidu.com/it/u=610330141,3801718282&fm=26&fmt=auto&gp=0.jpg",
                    title: "热门话题",
                    comment: "就发个自拍吧"
                },

            ],
            activeTab: 1,
        }
    }

    static contextType = NavigationContext;
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    render() {
        const { imformation } = this.state;
        return (

            <View>
                <ActionButton zIndex={99999} position="right" offsetX={20} offsetY={80} size={58} buttonColor="#50935E" style={{ borderRadius: pxToDp(60) }}>
                    <ActionButton.Item buttonColor='#9b59b6' title="发布" onPress={this.toggleModal}>
                        <View style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20 }}><Text></Text></View>
                    </ActionButton.Item>
                    {/* <ActionButton.Item buttonColor='#3498db' title="2" onPress={() => { }}>
                        <View style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20 }}><Text></Text></View>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="3" onPress={() => { }}>
                        <View style={{ width: 40, height: 40, backgroundColor: 'red', borderRadius: 20 }}><Text></Text></View>
                    </ActionButton.Item> */}
                </ActionButton>
                <ModelFa isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModal} />

                <ScrollView
                    stickyHeaderIndices={[0]}
                >
                    <View style={{ flexDirection: "row", backgroundColor: "#50935E", height: pxToDp(55) }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: pxToDp(330), height: pxToDp(38), borderRadius: pxToDp(8), backgroundColor: "white", marginLeft: pxToDp(22), marginTop: pxToDp(8) }}>
                            <Image source={require("../../../images/2.png")} style={{ width: pxToDp(25), height: pxToDp(25), }} />
                            <TextInput placeholder={"搜索"} style={{ fontSize: pxToDp(14), marginLeft: pxToDp(5), width: pxToDp(260), }} />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Swiper showsPagination={false} style={styles.wrapper} autoplay loop>
                            <View style={styles.slide} >
                                <Image resizeMode='stretch' style={styles.image} source={require('../../../images/lun6.jpg')} />
                            </View>
                            <View style={styles.slide} >
                                <Image resizeMode='stretch' style={styles.image} source={require('../../../images/lun7.jpg')} />
                            </View>
                            <View style={styles.slide} >
                                <Image resizeMode='stretch' style={styles.image} source={require('../../../images/lun8.jpg')} />
                            </View>
                        </Swiper>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ height: pxToDp(0), bottom: pxToDp(20) }}>
                            <View style={{ top: pxToDp(30), marginLeft: pxToDp(10) }}>
                                <TouchableOpacity onPress={() => this.context.navigate("Activity")} style={{ justifyContent: "center", alignItems: "center", width: pxToDp(190), height: pxToDp(80), borderRadius: pxToDp(10) }}>
                                    <ImageBackground source={require('../../../images/lun2.jpg')} style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} imageStyle={{ borderRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ justifyContent: "center", alignItems: "center", backgroundColor: "black", width: "100%", height: "100%", borderRadius: pxToDp(10), opacity: 0.6 }}>
                                            <Text style={{ color: "white", fontSize: pxToDp(20) }}>活动精选</Text>
                                        </ImageBackground>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{ top: pxToDp(30), marginLeft: pxToDp(10) }}>
                                <TouchableOpacity onPress={() => this.context.navigate("NearTeaHouose")} style={{ justifyContent: "center", alignItems: "center", width: pxToDp(190), height: pxToDp(80), borderRadius: pxToDp(10) }}>
                                    <ImageBackground source={require('../../../images/lun3.jpg')} style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} imageStyle={{ borderRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ justifyContent: "center", alignItems: "center", backgroundColor: "black", width: "100%", height: "100%", borderRadius: pxToDp(10), opacity: 0.6 }}>
                                            <Text style={{ color: "white", fontSize: pxToDp(20) }}>附近茶馆</Text>
                                        </ImageBackground>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{ top: pxToDp(30), marginLeft: pxToDp(10) }}>
                                <TouchableOpacity onPress={() => this.context.navigate("Tour")} style={{ justifyContent: "center", alignItems: "center", width: pxToDp(190), height: pxToDp(80), borderRadius: pxToDp(10) }}>
                                    <ImageBackground source={require('../../../images/lun4.jpg')} style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} imageStyle={{ borderRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ justifyContent: "center", alignItems: "center", backgroundColor: "black", width: "100%", height: "100%", borderRadius: pxToDp(10), opacity: 0.6 }}>
                                            <Text style={{ color: "white", fontSize: pxToDp(20) }}>红迹旅游</Text>
                                        </ImageBackground>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{ top: pxToDp(30), marginLeft: pxToDp(10) }}>
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(190), height: pxToDp(80), borderRadius: pxToDp(10) }}>
                                    <ImageBackground source={require('../../../images/lun5.jpg')} style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} imageStyle={{ borderRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ justifyContent: "center", alignItems: "center", backgroundColor: "black", width: "100%", height: "100%", borderRadius: pxToDp(10), opacity: 0.6 }}>
                                            <Text style={{ color: "white", fontSize: pxToDp(20) }}>热门话题</Text>
                                        </ImageBackground>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                            <View style={{ top: pxToDp(30), marginLeft: pxToDp(10) }}>
                                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(190), height: pxToDp(80), borderRadius: pxToDp(10) }}>
                                    <ImageBackground source={require('../../../images/lun7.jpg')} style={{ alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }} imageStyle={{ borderRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ justifyContent: "center", alignItems: "center", backgroundColor: "black", width: "100%", height: "100%", borderRadius: pxToDp(10), opacity: 0.6 }}>
                                            <Text style={{ color: "white", fontSize: pxToDp(20) }}>我为党过生日</Text>
                                        </ImageBackground>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>

                    <View style={{ marginTop: pxToDp(-40) }}>
                        {this.state.imformation.map((item, index) => (
                            <TouchableOpacity onPress={()=>this.context.navigate('Comments')} >
                                <View key={item.id} style={{ justifyContent: "center" }}>
                                    {/* 头像栏  开始 */}
                                    <View style={{ flexDirection: "row", marginTop: pxToDp(20), alignItems: 'center' }}>
                                        <TouchableOpacity style={{ marginLeft: pxToDp(15) }}>
                                            <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(50), justifyContent: "center", alignItems: "center" }} source={{ uri: item.avatar }} />
                                        </TouchableOpacity>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ flexDirection: "row", alignItems: "center", marginLeft: pxToDp(20) }}>
                                                <Text style={{ fontSize: pxToDp(17), }}>{item.name}</Text>
                                            </View >
                                            {/* <TouchableOpacity style={{alignItems: "center", justifyContent: "center",  borderColor: "#F38C23", borderWidth: pxToDp(0.9), width: pxToDp(65), height: pxToDp(18), borderRadius: pxToDp(20), marginRight:pxToDp(60) }}>
                                        <Text style={{ color: "#F38C23", fontSize: pxToDp(12) }}>{item.title}</Text>
                                    </TouchableOpacity> */}
                                            <View style={{ marginLeft: pxToDp(20) }}>
                                                <Text style={{ textAlign: "right", color: "black" }}>{item.time}</Text>
                                            </View>
                                        </View>

                                    </View>
                                    {/* 头像栏  结束 */}

                                    {/* 文章标签  开始 */}
                                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: pxToDp(15) }}>
                                        <TouchableOpacity style={{ marginLeft: pxToDp(15) }}>
                                            <Text style={{ fontSize: pxToDp(17), fontWeight: "bold" }}>{item.label}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* 文章标签  结束 */}

                                    {/* 文章内容  开始 */}
                                    <View style={{ marginLeft: pxToDp(15), marginRight: pxToDp(15), marginTop: pxToDp(5) }}>
                                        <TouchableOpacity style={{ marginLeft: pxToDp(15) }}>
                                            <Text numberOfLines={4} style={{ fontSize: pxToDp(15), letterSpacing: pxToDp(1) }}>{item.comment}</Text>
                                        </TouchableOpacity>

                                    </View>
                                    {/* 文章内容  结束 */}
                                    {/* 图 */}
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(16) }}>
                                        <Image style={{ width: pxToDp(300), height: pxToDp(200), borderRadius: pxToDp(16) }} source={{ uri: item.image1 }}></Image>
                                    </View>
                                    {/* 小按钮  开始 */}
                                    <View style={{ flexDirection: "row", }}>

                                    </View>
                                    {/* 小按钮  结束 */}
                                </View>
                            </TouchableOpacity>

                        ))}
                    </View>
                    <View style={{ marginBottom: pxToDp(60) }}></View>
                </ScrollView>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: pxToDp(270),
        backgroundColor: "transparent"
    },
    wrapper: {
        height: pxToDp(270),
    },
    slide: {
        width: pxToDp(375),
        height: pxToDp(155),
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width: "100%",
        flex: 1
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    bigtext: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    teabox: {
        width: pxToDp(80),
        height: pxToDp(75),
        justifyContent: "center",
        borderRadius: pxToDp(10),
        backgroundColor: "#3CB371"
    }
});

export default index;