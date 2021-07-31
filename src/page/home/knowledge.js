import React, { Component } from "react";
import { View, Text, ImageBackground, FlatList, TouchableOpacity, ScrollView } from "react-native";
import MyNav from "../../components/MyNav";
import { pxToDp } from "../../utils/stylesKits";
class knowledge extends Component {
    render() {
        return (
            <View style={{marginBottom:pxToDp(80)}}>
                <MyNav title='戏说茶语' />
                <ScrollView>
                    <View style={{ flex: 1 }}>

                        {/* 文章大图  开始 */}
                        <TouchableOpacity style={{
                            width: "90%",
                            height: 150,
                            marginHorizontal: "5%",
                            marginVertical: "3%",
                            borderRadius: 10,
                        }} >
                            <ImageBackground
                                style={{ width: "100%", height: "100%" }}
                                imageStyle={{ borderRadius: 10 }}
                                source={{ uri: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg" }}>
                            </ImageBackground>
                        </TouchableOpacity>
                        {/* 文章大图  结束 */}

                        {/* 文章标题+内容+时间  开始 */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                }}>文章标题</Text>
                                <Text style={{
                                    fontSize: 13,
                                }}>文章内容</Text>
                            </View>
                            <Text style={{
                                fontSize: 14,
                                marginRight: 20
                            }}>2020/06/25</Text>
                        </View>
                        {/* 文章标题+内容+时间  结束 */}

                        {/* 文章二图  开始 */}
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity style={{
                                width: "58%",
                                height: 150,
                                marginHorizontal: "5%",
                                marginVertical: "3%",
                                borderRadius: 10,
                            }} >
                                <ImageBackground
                                    style={{ width: "100%", height: "100%" }}
                                    imageStyle={{ borderRadius: 10 }}
                                    source={{ uri: "https://img1.baidu.com/it/u=1222388271,1994265529&fm=26&fmt=auto&gp=0.jpg" }}>
                                </ImageBackground>
                            </TouchableOpacity>

                            <View style={{ right: 15 }}>
                                <TouchableOpacity style={{
                                    width: 120,
                                    height: 68,
                                    marginHorizontal: "5%",
                                    marginVertical: "3%",
                                    borderRadius: 10,

                                }} >
                                    <ImageBackground
                                        style={{ width: "100%", height: "100%" }}
                                        imageStyle={{ borderRadius: 10 }}
                                        source={{ uri: "https://img1.baidu.com/it/u=1222388271,1994265529&fm=26&fmt=auto&gp=0.jpg" }}>
                                    </ImageBackground>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    width: 120,
                                    height: 68,
                                    marginHorizontal: "5%",
                                    marginVertical: "3%",
                                    borderRadius: 10,

                                }} >
                                    <ImageBackground
                                        style={{ width: "100%", height: "100%" }}
                                        imageStyle={{ borderRadius: 10 }}
                                        source={{ uri: "https://img1.baidu.com/it/u=1222388271,1994265529&fm=26&fmt=auto&gp=0.jpg" }}>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* 文章二图  结束 */}

                        {/* 文章二标题+内容+时间  开始 */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                }}>文章标题</Text>
                                <Text style={{
                                    fontSize: 13,
                                }}>文章内容</Text>
                            </View>
                            <Text style={{
                                fontSize: 14,
                                marginRight: 20
                            }}>2020/06/25</Text>
                        </View>
                        {/* 文章二标题+内容+时间  结束 */}


                        {/* 文章三大图  开始 */}
                        <TouchableOpacity style={{
                            width: "90%",
                            height: 150,
                            marginHorizontal: "5%",
                            marginVertical: "3%",
                            borderRadius: 10,
                        }} >
                            <ImageBackground
                                style={{ width: "100%", height: "100%" }}
                                imageStyle={{ borderRadius: 10 }}
                                source={{ uri: "https://img2.baidu.com/it/u=2481515378,1277746863&fm=26&fmt=auto&gp=0.jpg" }}>
                            </ImageBackground>
                        </TouchableOpacity>
                        {/* 文章三大图  结束 */}

                        {/* 文章三标题+内容+时间  开始 */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                }}>文章标题</Text>
                                <Text style={{
                                    fontSize: 13,
                                }}>文章内容</Text>
                            </View>
                            <Text style={{
                                fontSize: 14,
                                marginRight: 20
                            }}>2020/06/25</Text>
                        </View>
                        {/* 文章三标题+内容+时间  开始 */}

                        {/* 文章大图  开始 */}
                        <TouchableOpacity style={{
                            width: "90%",
                            height: 150,
                            marginHorizontal: "5%",
                            marginVertical: "3%",
                            borderRadius: 10,
                        }} >
                            <ImageBackground
                                style={{ width: "100%", height: "100%" }}
                                imageStyle={{ borderRadius: 10 }}
                                source={{ uri: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg" }}>
                            </ImageBackground>
                        </TouchableOpacity>
                        {/* 文章大图  结束 */}

                        {/* 文章标题+内容+时间  开始 */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                }}>文章标题</Text>
                                <Text style={{
                                    fontSize: 13,
                                }}>文章内容</Text>
                            </View>
                            <Text style={{
                                fontSize: 14,
                                marginRight: 20
                            }}>2020/06/25</Text>
                        </View>
                        {/* 文章标题+内容+时间  结束 */}

                        {/* 文章二图  开始 */}
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <TouchableOpacity style={{
                                width: "58%",
                                height: 150,
                                marginHorizontal: "5%",
                                marginVertical: "3%",
                                borderRadius: 10,
                            }} >
                                <ImageBackground
                                    style={{ width: "100%", height: "100%" }}
                                    imageStyle={{ borderRadius: 10 }}
                                    source={{ uri: "https://img1.baidu.com/it/u=1222388271,1994265529&fm=26&fmt=auto&gp=0.jpg" }}>
                                </ImageBackground>
                            </TouchableOpacity>

                            <View style={{ right: 15 }}>
                                <TouchableOpacity style={{
                                    width: 120,
                                    height: 68,
                                    marginHorizontal: "5%",
                                    marginVertical: "3%",
                                    borderRadius: 10,

                                }} >
                                    <ImageBackground
                                        style={{ width: "100%", height: "100%" }}
                                        imageStyle={{ borderRadius: 10 }}
                                        source={{ uri: "https://img1.baidu.com/it/u=1222388271,1994265529&fm=26&fmt=auto&gp=0.jpg" }}>
                                    </ImageBackground>
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    width: 120,
                                    height: 68,
                                    marginHorizontal: "5%",
                                    marginVertical: "3%",
                                    borderRadius: 10,

                                }} >
                                    <ImageBackground
                                        style={{ width: "100%", height: "100%" }}
                                        imageStyle={{ borderRadius: 10 }}
                                        source={{ uri: "https://img1.baidu.com/it/u=1222388271,1994265529&fm=26&fmt=auto&gp=0.jpg" }}>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* 文章二图  结束 */}

                        {/* 文章二标题+内容+时间  开始 */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                }}>文章标题</Text>
                                <Text style={{
                                    fontSize: 13,
                                }}>文章内容</Text>
                            </View>
                            <Text style={{
                                fontSize: 14,
                                marginRight: 20
                            }}>2020/06/25</Text>
                        </View>
                        {/* 文章二标题+内容+时间  结束 */}


                        {/* 文章三大图  开始 */}
                        <TouchableOpacity style={{
                            width: "90%",
                            height: 150,
                            marginHorizontal: "5%",
                            marginVertical: "3%",
                            borderRadius: 10,
                        }} >
                            <ImageBackground
                                style={{ width: "100%", height: "100%" }}
                                imageStyle={{ borderRadius: 10 }}
                                source={{ uri: "https://img2.baidu.com/it/u=2481515378,1277746863&fm=26&fmt=auto&gp=0.jpg" }}>
                            </ImageBackground>
                        </TouchableOpacity>
                        {/* 文章三大图  结束 */}

                        {/* 文章三标题+内容+时间  开始 */}
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                }}>文章标题</Text>
                                <Text style={{
                                    fontSize: 13,
                                }}>文章内容</Text>
                            </View>
                            <Text style={{
                                fontSize: 14,
                                marginRight: 20
                            }}>2020/06/25</Text>
                        </View>
                        {/* 文章三标题+内容+时间  开始 */}
                    </View>

                </ScrollView>
            </View>
        );
    }
}
export default knowledge;