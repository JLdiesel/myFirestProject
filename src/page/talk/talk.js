import React, { Component } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyNav from "../../components/MyNav";
import { pxToDp } from "../../utils/stylesKits";

const TEA_data = [
    {
        id: "1",
        // 作者头像
        avatar: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
        name: "用户名",
        time: "2019/06/25",
        // 视频封面图
        image: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
        title: "文章标题",
        comment: "文章内容简介"
    },
    {
        id: "2",
        avatar: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
        name: "用户名",
        time: "2019/06/25",
        image: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
        title: "文章标题",
        comment: "文章内容简介"
    },
    {
        id: "3",
        avatar: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg",
        name: "用户名",
        time: "2019/06/25",
        image: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jp",
        title: "文章标题",
        comment: "文章内容简介"
    }
];

class talk extends Component {
    render() {
        return (
            <View>
                <ScrollView
                    stickyHeaderIndices={[0]}
                >
                    <MyNav title='匠人说茶' />
                    <FlatList
                        data={TEA_data}
                        renderItem={({ item }) =>
                            <View style={{ justifyContent: "center" }}>
                                {/* 头像栏  开始 */}
                                <View style={{ flexDirection: "row", marginTop: pxToDp(20), justifyContent: "space-between" }}>
                                    <TouchableOpacity style={{ marginLeft: pxToDp(20) }}>
                                        <Image  style={{ width: pxToDp(40), height: pxToDp(40),  justifyContent: "center", alignItems: "center",borderRadius:pxToDp(50) }} source={{ uri: item.avatar }} />
                                    </TouchableOpacity>

                                    <View style={{ flexDirection: "row", alignItems: "center", marginRight: pxToDp(170), }}>
                                        <Text style={{ fontSize: pxToDp(20), fontWeight: "bold" }}>{item.name}</Text>
                                    </View >
                                    <View style={{ justifyContent: "flex-end", marginRight: pxToDp(20) }}>
                                        <Text style={{ textAlign: "right" }}>{item.time}</Text>
                                    </View>
                                </View>
                                {/* 头像栏  结束 */}

                                {/* 大图片  开始 */}
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: pxToDp(15) }}>
                                    <TouchableOpacity>
                                            <ImageBackground  style={{ width: pxToDp(360), height: pxToDp(180),justifyContent:'center',alignItems:'center'}} imageStyle={{borderRadius: pxToDp(10), }}
                                            source={{ uri: item.image }} >
                                                <Image source={require('../../images/1.png')} style={{width:pxToDp(60),height:pxToDp(60)}}></Image>
                                            </ImageBackground>
                                    </TouchableOpacity>
                                </View>
                                {/* 大图片  结束 */}

                                {/* 文章内容  开始 */}
                                <View style={{ marginLeft: pxToDp(20), }}>
                                    <Text style={{ fontSize: pxToDp(18), marginTop: pxToDp(5) }}>{item.title}</Text>
                                    <Text style={{ fontSize: pxToDp(15), }}>{item.comment}</Text>
                                </View>
                                {/* 文章内容  结束 */}
                            </View>
                        }
                        keyExtractor={item => item.id}
                    />
                </ScrollView>

            </View>
        );
    }
}
export default talk;