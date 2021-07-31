import React, { Component, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import MyNav from "../../components/MyNav/index"
import { pxToDp } from "../../utils/stylesKits";
import {AlwaysOpen} from "./listenListUntil"

class musicList extends Component {
    static defaultProps = {
        style: {},
        textStyle: {},
        cisabled: false
    }
    render() {
        return (
            <ScrollView stickyHeaderIndices={[0]} style={{ backgroundColor: "#7A575B", width: "100%" }}>
                <MyNav />
                <View style={{ flexDirection: "row" }}>
                    <Image style={{ marginLeft: pxToDp(15), marginTop: pxToDp(15), width: pxToDp(110), height: pxToDp(110), borderRadius: pxToDp(5) }} source={require('../../images/l4.jpg')} />
                    <View>
                        <View>
                            <Text style={{ color: "white", fontWeight: "bold", fontSize: pxToDp(20), marginTop: pxToDp(10), marginLeft: pxToDp(25) }}>广播剧《红船》</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: pxToDp(10), justifyContent: "flex-start", width: pxToDp(200), marginLeft: pxToDp(20) }}>
                            <TouchableOpacity style={{ borderRadius: pxToDp(5), justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", height: pxToDp(22), width: pxToDp(55), flexDirection: "row" }}>
                                <Text style={{ color: "white", fontWeight: "bold", marginLeft: pxToDp(5) }}>人文</Text>
                                <Image style={{ width: pxToDp(18), height: pxToDp(18) }} source={require("../../images/箭头白.png")} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderRadius: pxToDp(5), marginLeft: pxToDp(5), justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", height: pxToDp(22), width: pxToDp(85), flexDirection: "row" }}>
                                <Text style={{ color: "white", fontWeight: "bold", marginLeft: pxToDp(5) }}>纪实故事</Text>
                                <Image style={{ width: pxToDp(18), height: pxToDp(18) }} source={require("../../images/箭头白.png")} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: pxToDp(210), height: pxToDp(0.5), backgroundColor: "white", marginLeft: pxToDp(20), marginTop: pxToDp(15) }} />
                        <View style={{ marginTop: pxToDp(15), marginLeft: pxToDp(20), flexDirection: "row", alignItems: "center" }}>
                            <Image style={{ width: pxToDp(30), height: pxToDp(30), borderRadius: pxToDp(20) }} source={require('../../images/l6.jpg')} />
                            <Text style={{ marginLeft: pxToDp(10), color: "white" }}>浙江之声</Text>
                        </View>

                    </View>
                </View>
                <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", marginTop: pxToDp(20) }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: pxToDp(20), fontWeight: "bold", color: "white" }}>暂无</Text>
                        <Text style={{ color: "white", opacity: 0.5 }}>评分</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: pxToDp(20), fontWeight: "bold", color: "white" }}>3855</Text>
                        <Text style={{ color: "white", opacity: 0.5 }}>播放量</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: pxToDp(20), fontWeight: "bold", color: "white" }}>546</Text>
                        <Text style={{ color: "white", opacity: 0.5 }}>订阅量</Text>
                    </View>
                    <TouchableOpacity style={{ left: pxToDp(15), borderRadius: pxToDp(20), backgroundColor: "white", width: pxToDp(80), height: pxToDp(35), justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ fontSize: pxToDp(16), fontWeight: "bold", }}>+ 订阅</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: pxToDp(20), marginLeft: pxToDp(15), marginRight: pxToDp(15) }}>
                    <Text style={{ fontSize: pxToDp(16), color: "white", }}>广播剧《红船》</Text>
                    <Text style={{ fontSize: pxToDp(16), color: "white", lineHeight: pxToDp(30) }}>一艘小船诞生一个大党。三集广播剧《红船》，是首部以广播剧形式呈现中国共产党建党历程的文艺作品，生动反映了以毛泽东、李大钊等同志为代表的一批有识之士，在复杂的社会政治形势下，以拯救人民于水火、实现民族复兴为己任，创建中国共产党的历史壮举，展现了涵盖“开天辟地、敢为人先的首创精神，坚定理想、百折不挠的奋斗精神，立党为公、忠诚为民的奉献精神"在内的红船精神。该剧背景宏大，人物形象丰满，结构紧凑，制作精良，体现了较高的政治水平和艺术水准。
                    </Text>
                </View>
                <View style={{ width: pxToDp(343), height: pxToDp(0.5), backgroundColor: "white", marginLeft: pxToDp(15), marginTop: pxToDp(30) }} />
                <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(20) }}>
                    <Text style={{ fontSize: pxToDp(18), fontWeight: "bold", color: "white" }}>主播介绍</Text>
                </View>
                <View style={{ justifyContent: "space-between", flexDirection: "row", width: "100%", height: pxToDp(80) }}>
                    <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(20), marginLeft: pxToDp(20), marginTop: pxToDp(15) }} source={require('../../images/l6.jpg')} />
                    <View style={{ right: pxToDp(45), marginTop: pxToDp(12) }}>
                        <Text style={{ color: "white", fontSize: pxToDp(15) }}>浙江之声</Text>
                        <Text style={{ marginTop: pxToDp(5), color: "white", opacity: 0.5 }}>已被10.5万人关注</Text>
                    </View>
                    <TouchableOpacity style={{ marginTop: pxToDp(17), left: pxToDp(30), borderRadius: pxToDp(15), justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.3)", width: pxToDp(65), height: pxToDp(30) }}>
                        <Text style={{ color: "white" }}>+ 关注</Text>
                    </TouchableOpacity>
                    <View>
                        <Text></Text>
                    </View>
                </View>
                <View style={{ width: "100%", height: pxToDp(100) }}></View>
                <AlwaysOpen />
            </ScrollView>
        );
    }
}


const s = StyleSheet.create({
    content: {
        padding: 20,
    },

    content__modal: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.45,
        shadowRadius: 16,
    },

    content__subheading: {
        marginBottom: 2,

        fontSize: 16,
        fontWeight: '600',
        color: '#ccc',
    },

    content__heading: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
    },

    content__description: {
        paddingTop: 10,
        paddingBottom: 10,

        fontSize: 15,
        fontWeight: '200',
        lineHeight: 22,
        color: '#666',
    },
});

export default musicList;