import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity,RefreshControl } from 'react-native';
import { pxToDp } from "../../../utils/stylesKits";
import { NavigationContext } from "@react-navigation/native";
import MyButton from "../../../components/MyButton";

class index extends Component {
    state = {
        // 控制 加载中的组件的切换显示
        refreshing: false
      }
    static contextType = NavigationContext;
    //下拉刷新事件
    onRefresh = async () => {
        this.setState({ refreshing: true });
        //等待返回值
        // await this.getList();
        await 30000;
        this.setState({ refreshing: false });
    }
    render() {
        const { refreshing } = this.state;

        return (
            <ScrollView
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />}
            contentContainerStyle={{}}
            >
                <View style={{ backgroundColor: '#5d5b49', height: '100%' }}>
                    {/* 头部 */}
                    <View style={{ backgroundColor: '#eee', flexDirection: 'row', height: pxToDp(100), borderRadius: pxToDp(20), width: '96%', marginLeft: pxToDp(8),marginTop:pxToDp(20), }}>
                        <View style={{ backgroundColor: '', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '60%', }}>
                            {/* 头像 */}
                            <View style={{ backgroundColor: '' }}>
                                <Image style={{ width: pxToDp(80), height: pxToDp(80), borderRadius: pxToDp(60) }} source={require('../../../images/touxiang.jpg')}></Image>
                            </View>
                            {/* 昵称 */}
                            <View style={{ backgroundColor: '', height: pxToDp(60), marginLeft: pxToDp(10) }}>
                                <Text style={{ fontSize: 20 }}>猪倌不养猪</Text>
                                <Text style={{ fontSize: 14, marginTop: pxToDp(5) }}>ID:201905021637</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '40%', }}>
                            {/* 按钮 */}
                            <View>
                                <MyButton onPress={() => this.context.navigate("Profile")} style={{ width: pxToDp(100), height: pxToDp(30) }}>
                                    <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require('../../../images/bianji.png')}></Image>
                                    <Text style={{ fontSize: pxToDp(12), color: 'black' }}>编辑资料</Text>
                                </MyButton>
                            </View>
                        </View>
                    </View>

                    {/* 信息栏 */}
                    <View style={{ backgroundColor: '#eee', flexDirection: 'row', height: pxToDp(100), borderRadius: pxToDp(20), width: '96%', marginLeft: pxToDp(8), marginTop: pxToDp(15) }}>
                        <View style={{ backgroundColor: '', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', }}>
                            {/* 头像 */}
                            <TouchableOpacity onPress={() => this.context.navigate("")}>
                                <View style={{ backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: pxToDp(50), height: pxToDp(50), borderRadius: pxToDp(60), }} source={require('../../../images/shoucang.png')}></Image>
                                    <Text style={{ fontSize: pxToDp(14) }}>我的收藏</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.context.navigate("")}>
                                <View style={{ backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: pxToDp(50), height: pxToDp(50), borderRadius: pxToDp(60) }} source={require('../../../images/zuji.png')}></Image>
                                    <Text style={{ fontSize: pxToDp(14) }}>历史足迹</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.context.navigate("")}>
                                <View style={{ backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: pxToDp(50), height: pxToDp(50), borderRadius: pxToDp(60) }} source={require('../../../images/lianxikefu.png')}></Image>
                                    <Text style={{ fontSize: pxToDp(14) }}>联系客服</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.context.navigate("")}>
                                <View style={{ backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: pxToDp(50), height: pxToDp(50), borderRadius: pxToDp(60) }} source={require('../../../images/wodedingdan.png')}></Image>
                                    <Text style={{ fontSize: pxToDp(14) }}>我的订单</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.context.navigate("")}>
                                <View style={{ backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ width: pxToDp(50), height: pxToDp(50), borderRadius: pxToDp(60) }} source={require('../../../images/gouwuche.png')}></Image>
                                    <Text style={{ fontSize: pxToDp(14) }}>购物车</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 内容 */}
                    <View style={{ backgroundColor: '#eee', borderRadius: pxToDp(20), width: '96%', marginLeft: pxToDp(8), marginTop: pxToDp(15) }}>
                        <View style={{ height: pxToDp(30), backgroundColor: '', marginTop: pxToDp(10) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', marginLeft: pxToDp(4) }}>成长福利</Text>
                        </View>
                        <View style={{ width: '96%', height: pxToDp(80), flexDirection: 'row', marginLeft: pxToDp(8) }}>
                            {/* 我的积分 */}
                            <View style={{ width: '50%', backgroundColor: '', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ borderRadius: pxToDp(90), backgroundColor: 'pink', width: pxToDp(60), height: pxToDp(60), }}>
                                    <Image style={{ width: pxToDp(60), height: pxToDp(60), resizeMode: 'stretch' }} source={require('../../../images/liwu.png')}></Image>
                                </View>
                                <View style={{}}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: pxToDp(16) }}>我的积分&gt;</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>50</Text>
                                        <Text style={{ fontSize: pxToDp(16) }}>积分</Text>
                                    </View>
                                </View>
                            </View>
                            {/* 累计观看 */}
                            <View style={{ width: '50%', backgroundColor: '', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ borderRadius: pxToDp(90), backgroundColor: 'pink', width: pxToDp(60), height: pxToDp(60), }}>
                                    <Image style={{ width: pxToDp(60), height: pxToDp(60), resizeMode: 'stretch' }} source={require('../../../images/shu.png')}></Image>
                                </View>
                                <View style={{}}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: pxToDp(16) }}>累计观看&gt;</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>12</Text>
                                        <Text style={{ fontSize: pxToDp(16) }}>小时</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* 每日任务 */}
                        <View>
                            <View style={{ marginTop: pxToDp(10), borderBottomWidth: 2, borderBottomColor: 'gray', marginBottom: pxToDp(8), flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '75%' }}>
                                    <View style={{ flexDirection: 'row', width: '96%', marginLeft: pxToDp(8), marginBottom: pxToDp(4) }}>
                                        <Image style={{ width: pxToDp(25), height: pxToDp(25) }} source={require('../../../images/jifen.png')}></Image>
                                        <Text style={{ fontSize: pxToDp(16) }}>连续签到七天领VIP</Text>
                                    </View>
                                    <View style={{ width: '96%', marginLeft: pxToDp(12) }}>
                                        <Text>已连续签到1天</Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 2, borderColor: 'orange', backgroundColor: '', borderRadius: pxToDp(20), width: pxToDp(60), height: pxToDp(25), }}>
                                    <Text style={{ textAlign: 'center', color: 'orange' }}>去签到</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: pxToDp(10), borderBottomWidth: 2, borderBottomColor: 'gray', marginBottom: pxToDp(8), flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '75%' }}>
                                    <View style={{ flexDirection: 'row', width: '96%', marginLeft: pxToDp(8), marginBottom: pxToDp(4) }}>
                                        <Image style={{ width: pxToDp(25), height: pxToDp(25) }} source={require('../../../images/jifen.png')}></Image>
                                        <Text style={{ fontSize: pxToDp(16) }}>观看30分钟领30积分</Text>
                                    </View>
                                    <View style={{ width: '96%', marginLeft: pxToDp(12) }}>
                                        <Text>已观看24分钟</Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 2, borderColor: 'orange', backgroundColor: '', borderRadius: pxToDp(20), width: pxToDp(60), height: pxToDp(25), }}>
                                    <Text style={{ textAlign: 'center', color: 'orange' }}>去完成</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: pxToDp(10), borderBottomWidth: 2, borderBottomColor: 'gray', marginBottom: pxToDp(8), flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '75%' }}>
                                    <View style={{ flexDirection: 'row', width: '96%', marginLeft: pxToDp(8), marginBottom: pxToDp(4) }}>
                                        <Image style={{ width: pxToDp(25), height: pxToDp(25) }} source={require('../../../images/jifen.png')}></Image>
                                        <Text style={{ fontSize: pxToDp(16) }}>分享节目</Text>
                                    </View>
                                    <View style={{ width: '96%', marginLeft: pxToDp(12) }}>
                                        <Text>领30积分</Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 2, borderColor: 'orange', backgroundColor: '', borderRadius: pxToDp(20), width: pxToDp(60), height: pxToDp(25), }}>
                                    <Text style={{ textAlign: 'center', color: 'orange' }}>去分享</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: pxToDp(10), borderBottomWidth: 2, borderBottomColor: 'gray', marginBottom: pxToDp(8), flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '75%' }}>
                                    <View style={{ flexDirection: 'row', width: '96%', marginLeft: pxToDp(8), marginBottom: pxToDp(4) }}>
                                        <Image style={{ width: pxToDp(25), height: pxToDp(25) }} source={require('../../../images/jifen.png')}></Image>
                                        <Text style={{ fontSize: pxToDp(16) }}>阅读文章任务</Text>
                                        <Text>1</Text>
                                        <Text>/</Text>
                                        <Text>5</Text>
                                    </View>
                                    <View style={{ width: '96%', marginLeft: pxToDp(12) }}>
                                        <Text>每阅读一篇文章,领20积分</Text>
                                    </View>
                                </View>
                                <View style={{ borderWidth: 2, borderColor: 'orange', backgroundColor: '', borderRadius: pxToDp(20), width: pxToDp(60), height: pxToDp(25), }}>
                                    <Text style={{ textAlign: 'center', color: 'orange' }}>去完成</Text>
                                </View>
                            </View>

                        </View>
                    </View>
                    {/* 退出账号 */}
                    <View style={{ backgroundColor: '', flexDirection: 'row', borderRadius: pxToDp(20), width: '96%', marginLeft: pxToDp(8), marginTop: pxToDp(15), justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: pxToDp(100), height: pxToDp(100) }}>
                            <MyButton onPress={() => this.context.navigate("ShowLogin")} style={{ borderRadius: pxToDp(90) }}>
                                <Text style={{ fontSize: 26 }}>退出账号</Text>
                            </MyButton>
                        </View>
                    </View>
                    {/* 加载完毕 */}
                    <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '90%', marginLeft: pxToDp(20), marginTop: pxToDp(28) }}>
                        <Text style={{ textAlign: 'center' }}>加载完毕</Text>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    inputWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 245,
        height: 50,
        backgroundColor: 'transparent',
        borderColor: 'rgba(171, 190, 215, 0.56)',
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 20
    },
    icon: {
        width: 16,
        height: 16,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon1: {
        width: 35,
        height: 30,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
    },
    textInput: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 1,
        width: 200,
        height: 45,
        fontSize: 18,
        color: '#3f4b48',
    },
});


export default index;