import React, { Component } from "react";
import { View, Text, Image, ImageBackground, FlatList, TouchableOpacity,ScrollView} from "react-native";
import { pxToDp } from "../../utils/stylesKits";
class introduce extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "white", flex: 1 }}>
             
                <View style={{ flex: 1 }}>
                    {/* 上方视频  开始 */}
                    <View style={{}}>
                        <ImageBackground style={{ width: "100%", height: "100%", }}
                            source={{ uri: "https://tse1-mm.cn.bing.net/th/id/R-C.65398d6ad86129f9628c0ad80da4040c?rik=C3qNS9mZOQk%2b5A&riu=http%3a%2f%2fwww.shijuepi.com%2fuploads%2fallimg%2f200918%2f1-20091Q10420.jpg&ehk=QBNuJIbVP1qo%2bwUD3YzXcvL4H5iHivOHXUnzzRw%2bWfU%3d&risl=&pid=ImgRaw" }}>
                            <View style={{ flex: 1, flexDirection: "row",  justifyContent: "flex-start" }}>
                                <TouchableOpacity onPress={this.context.goBack} style={{ width: pxToDp(80), flexDirection: "row", alignItems: 'center', justifyContent: "center" }}>
                                    <Text style={{ color: "#fff", fontSize: pxToDp(16) }} >&#60;返回</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 2, flexDirection: "row", justifyContent: "center" }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Player')}>
                                    <Image style={{ width: 40, height: 40 }} source={require('../../images/1.png')} />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    {/* 上方视频  结束 */}
                    <View style={{
                        height: "10%",
                        marginTop: -10,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15,
                        backgroundColor: "white",
                    }}></View>
                </View>
                <View style={{ flex: 3 }}>
                <ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 10 }}>
                        {/* 文章标题  开始 */}
                        <View>
                            <Text style={{ fontSize: 20, }}>文章标题</Text>
                            {/* 文章标题  结束 */}

                            {/* 视频时长  开始 */}
                            <Text style={{ fontSize: 12, }}>总时长: 110分钟</Text>
                            {/* 视频时长  结束 */}
                        </View>
                        <View style={{ marginTop: 10 }}>
                            {/* 发布日期  开始 */}
                            <Text style={{ fontSize: 12, }}>2019/06/25</Text>
                            {/* 发布日期  结束 */}
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 40, marginLeft: 20, justifyContent: "space-between", marginRight: 20 }}>

                        <TouchableOpacity style={{ flexDirection: "row" }}>
                            <View style={{}}>
                                {/* 用户头像  开始 */}
                                <Image style={{
                                    borderRadius: 50,
                                    width: 40,
                                    height: 40,

                                }}
                                    source={{ uri: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg" }} />
                                {/* 用户头像  结束 */}
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 18, }}>用户名</Text>
                                <Text style={{ fontSize: 12, }}>用户头衔</Text>
                            </View>
                        </TouchableOpacity>

                        {/* 关注按钮  开始 */}
                        <TouchableOpacity style={{
                            width: 80,
                            height: 40,
                            borderRadius: 50,
                            backgroundColor: "#FF4040",
                            justifyContent: "center",
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                fontSize: 15
                            }}>关注</Text>
                        </TouchableOpacity>
                        {/* 关注按钮  结束 */}
                    </View>

                    {/* 课程简介+内容  开始 */}
                    <View style={{ marginTop: 40 }}>
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 15

                        }}>课程简介</Text>
                        <Text style={{
                            marginLeft: 15,
                            marginRight: 15,
                            marginTop: 10
                        }}>课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容课程内容</Text>
                    </View>
                    {/* 课程简介+内容  结束 */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginTop: 10, marginBottom: 10, marginLeft: 15, marginRight: 15 }}>
                        <Text style={{ fontSize: 20 }}>全部评论</Text>
                        <Text>热门正序</Text>
                    </View>
                    <View style={{ backgroundColor: 'white', }}>
                        <View style={{ height: 0, borderTopWidth: 0.5, borderColor: "black", opacity: 0.7, marginLeft: 15, marginRight: 15 }} />
                    </View>
                    <View style={{ flexDirection:"row", marginTop:20 }}>
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <Image style={{borderRadius: 50,width: 40,height: 40,}}source={{ uri: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg" }}/>
                            <View>
                                <Text>用户名</Text>
                                <Text>评论时间</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image />
                            <Text>点赞数量</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </View>
                
            </View>
        );
    }
}
export default introduce;