import React, { useState, useCallback } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { ScrollTabView, ScrollView, FlatList } from 'react-native-scroll-head-tab-view';
import { pxToDp } from '../../../utils/stylesKits';

const TEA_data = [
    {
        id: "1",
        image: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
        title: "标题",
        comment: "视频内容",
    },
    {
        id: "2",
        image: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
        title: "标题",
        comment: "视频内容",
    },
    {
        id: "3",
        image: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
        title: "标题",
        comment: "视频内容",
    },
    {
        id: "4",
        image: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
        title: "标题",
        comment: "视频内容",
    }
];
const SHOP_data = [
    {
        id: "1",
        image: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
    {
        id: "2",
        image: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
    {
        id: "3",
        image: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    },
    {
        id: "4",
        image: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
        title: "品名",
        comment: "品类介绍",
        money: "价格",
    }
];

function TabView1(props) {
    const data = new Array(1).fill({});
    const renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2019542020/O1CN01KmNl021QnCitii8Lk_!!2019542020.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>金骏眉红茶茶叶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥1200.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/684973154/O1CN01V4oDtf1ZAZsPyd9Tc_!!684973154.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>正山小种红茶茶叶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥199.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i3/26594842/O1CN01hzRVoV1ldgRGXqBfq_!!2-saturn_solar.png_468x468q75.jpg_.webp" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>正宗浓香型五虎红金俊眉</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥289.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i1/843977681/O1CN01BUDqtd26bwjJT9aW3_!!843977681.jpg_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>浓香蜜香型金俊眉黄</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥506.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i1/1137626378/O1CN01GMmuwb1wzAmxOVJeE_!!1137626378.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>特级浓香型正宗祁门</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥398.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://gd2.alicdn.com/imgextra/i3/110999689/O1CN01W0AUvB2LRc9AhDR9z_!!110999689.jpg_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>正宗特级金骏眉大红袍</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥860.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i1/288922974/O1CN01QNa44v1Xq8X6MmCYb_!!288922974.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>立顿正品红茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥56.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/684973154/O1CN01V4oDtf1ZAZsPyd9Tc_!!684973154.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>正山小种红茶茶叶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥199.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return <FlatList {...props} data={data} renderItem={renderItem} {...props} />;
}
function TabView2(props) {
    const data = new Array(1).fill({});
    const renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i1/267784916/O1CN016nFoKM1mBZfalVXIC_!!267784916.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>天尖黑茶叶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥3000.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/4086086826/O1CN019jYezN20IMBXMuTpo_!!4086086826.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>黑砖千两茶叶组合</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥318.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i1/2679942797/O1CN01OGYvOi1WX4QLXrHB6_!!2679942797.png_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>正宗手筑茯茶黑茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥598.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i2/267784916/O1CN01ZFCmdr1mBZdfXLWPZ_!!267784916.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>收藏家湖南安化黑茶3斤</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥4800.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i2/2254365133/O1CN01h4yRJm1nmxgb8xA0a_!!2254365133.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>正宗手筑天茯茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥599.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3538709036/O1CN01uffw702GcXOClSl3J_!!3538709036.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>陕西黑茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥2318.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/684973154/O1CN019cuwps1ZAZqjE7V46_!!684973154.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>糯米香茶化石十年老茶罐装茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥800.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://gd4.alicdn.com/imgextra/i1/3971969041/O1CN01WrgDZz2GepT9AclMF_!!3971969041.jpg_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>茶和天下套装正品 天尖 金茯 黑砖 荷香</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥8680.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return <FlatList data={data} renderItem={renderItem} {...props} />;
}
function TabView3(props) {
    const data = new Array(1).fill({});
    const renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/118266366/O1CN01p0Kunt1wtfwAEsO6H_!!118266366.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>西湖牌雨前浓香龙井茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥230.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2262500569/O1CN01PgcwrH1G4e32AdVvy_!!2262500569.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>新茶叶毛尖茶浓香型</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥188.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/184783763/O1CN010uOtAp1dfV5RMHwcM_!!184783763.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>雨前龙井茶正宗杭州</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥196.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i3/2788570358/O1CN01DtNBVW1EW0JCkIIx4_!!2788570358.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>明前特级嫩芽茶叶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥298.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i1/2453699690/O1CN01q9xZeW2LS4XO5DNQ9_!!0-item_pic.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>明前贵州茶叶翠芽炒青浓香型</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥268.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i3/647570920/O1CN01TdDUA01IfP36PKlGw_!!647570920.jpg_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>特级毛尖茶春茶浓香型</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥259.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i1/1699762279/O1CN01vxcB5n1ShpBV6u05a_!!1699762279.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>碧螺春新茶叶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥259.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/i4/725677994/O1CN01hejbeu28vIpuPXAlC_!!725677994-0-sm.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>立顿绿茶袋泡茶叶茶包</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥46.90</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return <FlatList {...props} data={data} renderItem={renderItem} {...props} />;
}
function TabView4(props) {
    const data = new Array(1).fill({});
    const renderItem = ({ item, index }) => {
        return (
            <View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2258222690/O1CN01K46uNE1Vk45heoGEb_!!2258222690.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>首日芽福鼎白茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥669.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1020360965/O1CN01Dx6qiG1J00rNEE7pi_!!1020360965.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>正宗安吉白茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥ 376.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2258222690/O1CN012QD0O51Vk45wvAQEW_!!2258222690.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>福鼎白茶茶饼</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥1420.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://gd1.alicdn.com/imgextra/i1/559391374/O1CN01NR612J1M1KsYRJYAX_!!559391374.png_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>明正宗安吉白茶明前特级</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥588.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://gd1.alicdn.com/imgextra/i3/559391374/O1CN01FvVpDf1M1Ks4yNIeT_!!559391374.jpg_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>新茶上市芳羽安吉白茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥336.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/bao/uploaded/i1/78447075/O1CN01NAED4l228Or0Mhosc_!!78447075.jpg_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>特级毛尖茶春茶浓香型</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥336.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flexDirection: "row" }}>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://gd2.alicdn.com/imgextra/i3/2206458788883/O1CN01H9bre42FUSvLmkDS3_!!2206458788883.jpg_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>正宗安吉白茶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥118.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                        <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                            <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/684973154/O1CN01GjLClU1ZAZmkevoAU_!!684973154.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                            <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                                <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>安吉白茶 2021年新茶叶</Text>
                                <Text style={{ fontSize: pxToDp(14), }}>￥359.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    return <FlatList {...props} data={data} renderItem={renderItem} {...props} />;
}
function TabView5(props) {
    const data = new Array(1).fill({});
    const renderItem = ({ item, index }) => {
        return (
            <View>
            <View style={{ padding: 10, flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/2206410262606/O1CN01IJCZGy1V7apoQcliN_!!2206410262606.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>菊花决明子茶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥188.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/i2/2208917279940/O1CN01Plny7l2NIZZ6b91RH_!!2208917279940.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>茉莉花茶特级川派茉莉飘雪</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥128.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/i3/1818164126/O1CN01gv4Gd31gLkpzwmUCP_!!1818164126.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>浓香型茉莉花茶叶毛</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥320.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/i2/2208917279940/O1CN017XxStG2NIZZIQ458v_!!2208917279940.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>特级茉莉花茶茉莉飘雪浓香型</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥368.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/1780895898/O1CN01Jlv6Jp1tRKggYjGOc_!!1780895898.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>养生茶正品花茶茶叶熬夜茶包</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥388.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/683867002/O1CN01sN9GEU21axsDN2g10_!!683867002.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>组合養生茶叶冷泡茶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥100.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/i3/1803004021/O1CN01GjD9gg1fZfFw68Vzg_!!1803004021.jpg_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>五宝玫瑰茶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥88.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/i2/2207974847105/O1CN01DLXQWR22M8iehY3HC_!!0-item_pic.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>泡水喝花茶组合熬夜养生茶恢复</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥40.00-58.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        );
    };
    return <FlatList {...props} data={data} renderItem={renderItem} {...props} />;
}
function TabView6(props) {
    const data = new Array(1).fill({});
    const renderItem = ({ item, index }) => {
        return (
            <View>
            <View style={{ padding: 10, flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/684973154/O1CN011ZAZdyiuVQ9EWdw_!!684973154.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>特级乌龙茶茶叶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥230.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/684973154/TB2VT.hINGYBuNjy0FnXXX5lpXa_!!684973154.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>木炭技法油切黑乌龙茶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥108.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2453837426/O1CN01MLd53g24j9sU9Tns0_!!2453837426.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>正宗特级安溪铁观音茶叶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥1000.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2206611049307/O1CN01WXYBva2Icer9Hd3yd_!!2206611049307.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>武夷山大红袍茶叶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥398.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://gd2.alicdn.com/imgextra/i3/309431272/O1CN01ay8r951LGcUI1I8uG_!!309431272.jpg_400x400.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>高山茶金萱奶香乌龙茶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥288.00 - 546.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/683867002/O1CN01sN9GEU21axsDN2g10_!!683867002.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>组合養生茶叶冷泡茶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥100.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ padding: 10, flexDirection: "row" }}>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/i4/2211975802456/O1CN01518iAs1U0tQOxkH2d_!!2211975802456.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>崎寻金萱乌龙茶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥135.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ margin: pxToDp(5), width: pxToDp(170), height: pxToDp(230), }}>
                    <View style={{ width: pxToDp(170), height: pxToDp(250), backgroundColor: "white", borderRadius: pxToDp(10) }}>
                        <Image source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2033033217/O1CN015WJ8gY1ZdQq1KQfkn_!!2033033217.jpg_430x430q90.jpg" }} style={{ width: "100%", height: pxToDp(150), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }} />
                        <View style={{ height: pxToDp(90), marginTop: pxToDp(5), marginLeft: pxToDp(7), justifyContent: "space-between", marginRight: pxToDp(7) }}>
                            <Text style={{ fontSize: pxToDp(17), marginTop: pxToDp(20) }}>ChaLi茶里 蜜桃乌龙铁观音茶</Text>
                            <Text style={{ fontSize: pxToDp(14), }}>￥49.00-79.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        );
    };
    return <FlatList {...props} data={data} renderItem={renderItem} {...props} />;
}


export default function Example() {
    const [headerHeight, setHeaderHeight] = useState(200);
    const headerOnLayout = useCallback((event) => {
        const { height } = event.nativeEvent.layout;
        setHeaderHeight(height);
    }, []);

    const _renderScrollHeader = useCallback(() => {
        const data = new Array(10).fill({});
        return (
            <View onLayout={headerOnLayout}>
                <View style={{ flexDirection: "row", backgroundColor: "#3CB371", height: pxToDp(90) }}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: pxToDp(330), height: pxToDp(50), borderRadius: pxToDp(8), backgroundColor: "#DCDCDC", marginLeft: pxToDp(22), marginTop: pxToDp(20) }}>
                        <Image source={require("../../../images/2.jpg")} style={{ width: pxToDp(25), height: pxToDp(25), }} />
                        <TextInput placeholder={"搜索茶叶/茶具"} style={{ fontSize: pxToDp(14), marginLeft: pxToDp(5), width: pxToDp(260), }} />
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                </View>
            </View>
        );
    }, []);

    return (
        <View style={styles.container}>
            <ScrollTabView headerHeight={headerHeight} renderScrollHeader={_renderScrollHeader}>
                <TabView1 tabLabel="红茶" />
                <TabView2 tabLabel="黑茶" />
                <TabView3 tabLabel="绿茶" />
                <TabView4 tabLabel="白茶" />
                <TabView5 tabLabel="花茶" />
                <TabView6 tabLabel="乌龙茶" />
            </ScrollTabView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
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