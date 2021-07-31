import React, { Component } from "react";
import { View, Text, TextInput, Image, StatusBar, FlatList, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from "react-native";
import MyNav from "../../../components/MyNav";
import { pxToDp } from "../../../utils/stylesKits";

const ALL_data = [
    {
        id: "1",
        image: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
    {
        id: "2",
        image: "https://img.alicdn.com/imgextra/i1/6000000007726/O1CN01dlO6Hy26wYhRW3Cgg_!!6000000007726-0-picassoopen.jpg_430x430q90.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
    {
        id: "3",
        image: "https://img.alicdn.com/imgextra/i1/725677994/O1CN01TgLOvS28vIpuJyPWw_!!725677994-0-sm.jpg_430x430q90.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
    {
        id: "4",
        image: "https://img.alicdn.com/imgextra/i2/725677994/O1CN01iFQdj828vIoJoyged_!!725677994-0-sm.jpg_430x430q90.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
    {
        id: "5",
        image: "https://img.alicdn.com/imgextra/i1/2978098497/O1CN01K3uUay2Cdg2sdIG0P_!!2978098497.jpg_60x60q90.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
    {
        id: "6",
        image: "https://img.alicdn.com/imgextra/i1/2209183822884/O1CN01ELVcSH1XAutlko7GQ_!!2209183822884-0-scmitem6000.jpg_60x60q90.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
    {
        id: "7",
        image: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
];

class tealist extends Component {
    render() {
        return (
            <View>
                <MyNav />
                <View style={{ flexDirection: "row", height: pxToDp(90) }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: pxToDp(330), height: pxToDp(50), borderRadius: pxToDp(8), backgroundColor: "#DCDCDC", marginLeft: pxToDp(22), marginTop: pxToDp(20) }}>
                        <Image source={require("../../../images/2.png")} style={{ width: pxToDp(25), height: pxToDp(25), }} />
                        <TextInput placeholder={"搜索茶叶/茶具"} style={{ fontSize: pxToDp(14), marginLeft: pxToDp(5), width: pxToDp(260), }} />
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                    {/* <StatusBar
                        barStyle={'dark-content'}
                        translucent={true}
                    /> */}
                </View>
                <View style={{ backgroundColor: "", marginTop: pxToDp(2), flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text1}>全部</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text1}>新品</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text1}>热卖</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ marginTop: pxToDp(15) ,marginBottom:pxToDp(200)}}>
                        <FlatList
                            data={ALL_data}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={{ flexDirection: "row" }}>
                                    <Image style={{ borderRadius: pxToDp(10), marginLeft: pxToDp(15), marginTop: pxToDp(10), width: pxToDp(130), height: pxToDp(90) }} source={{ uri: item.image }} />
                                    <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(15) }}>
                                        <Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>{item.title}</Text>
                                        <Text style={{ marginTop: pxToDp(5) }}>{item.comment}</Text>
                                        <Text style={{ marginTop: pxToDp(20), fontSize: pxToDp(15), fontWeight: "bold" }}>￥{item.money}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#50935E",
        width: pxToDp(70),
        height: pxToDp(35),
        borderRadius: pxToDp(18),
        justifyContent: "center",
        alignItems: "center",
    },
    text1: {
        fontSize: pxToDp(15),
    }
});
export default tealist;