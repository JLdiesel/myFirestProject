import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import MyNav from "../../../components/MyNav/index";
import { pxToDp } from "../../../utils/stylesKits";
import LinearGradient from 'react-native-linear-gradient';
import RBSheet from "react-native-raw-bottom-sheet";
import { NavigationContext } from "@react-navigation/native";

class orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            paidway: [
                {
                    id: 1,
                    image: require("../../../images/微信支付.png"),
                    text: "微信支付"
                },
                {
                    id: 2,
                    image: require("../../../images/支付宝.png"),
                    text: "支付宝支付",
                },
                {
                    id: 3,
                    image: require("../../../images/银行卡支付.png"),
                    text: "银行卡支付",
                },
            ],
            activeTab: 1,
            way: ""
        }
    }
    static defaultProps = {
        style: {},
        textStyle: {},
        cisabled: false
    }
    changeTab = (index) => {
        this.setState({ activeTab: index })
        if (index == 0) {
            this.setState({ way: "微信支付" });
        }
        else if (index == 1) {
            this.setState({ way: "支付宝支付" });
        }
        else {
            this.setState({ way: "银行卡支付" });
        }
    }
   
    static contextType = NavigationContext;

    render() {
        const { count, tabs, activeTab, way } = this.state;
        return (
            <View >
                <MyNav />
                <ScrollView style={{ height: pxToDp(595) }}>
                    <View style={{ borderRadius: pxToDp(10), margin: pxToDp(5), height: pxToDp(50), justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
                        <Text style={{ fontSize: pxToDp(16) }}>订单状态: 待确认</Text>
                    </View>

                    <TouchableOpacity  onPress={() => this.context.navigate("AddressList")} style={{ marginTop: pxToDp(5), borderRadius: pxToDp(10), margin: pxToDp(5), backgroundColor: "white" }}>
                        <View style={{ marginTop: pxToDp(20), marginLeft: pxToDp(20), flexDirection: "row", }}>
                            <Text style={{ fontSize: pxToDp(16) }}>王小花</Text>
                            <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(40) }}>156****5137</Text>
                            <Image style={{ width: pxToDp(20), height: pxToDp(20), marginLeft: pxToDp(130), marginTop: pxToDp(15) }} source={require("../../../images/箭头.png")} />
                        </View>
                        <View style={{ marginLeft: pxToDp(20), marginBottom: pxToDp(10) }}>
                            <Text style={{ fontSize: pxToDp(14) }}>浙江省 杭州市 拱墅区 浙江树人大学</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: pxToDp(140), flexDirection: "row", backgroundColor: "white", margin: pxToDp(5), borderRadius: pxToDp(10) }}>
                        <View style={{ justifyContent: "center", marginLeft: pxToDp(15) }}>
                            <Image style={{ width: pxToDp(110), height: pxToDp(110) }} source={{ uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft160%2F58%2F1925424931%2F131976%2F1bb0ed1d%2F53bf9f04Nd29b0602.jpg%21q70.jpg&refer=http%3A%2F%2Fm.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630129624&t=042215a3f4048fbb1e96a8f8719ba8b0" }} />
                        </View>
                        <View style={{ marginLeft: pxToDp(8), marginTop: pxToDp(18), justifyContent: "space-between" }}>
                            <View style={{}}>
                                <Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>雨前龙井绿茶茶叶</Text>
                            </View>
                            <View style={{ marginBottom: pxToDp(30), width: pxToDp(220), flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ width: pxToDp(150) }}>
                                    <Text style={{ fontSize: pxToDp(12) }}>【品质优选】 龙井250g</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: pxToDp(12) }}>X1</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: pxToDp(15) }}>
                                <Text style={{ fontSize: pxToDp(18), color: "red", fontWeight: "bold" }}>1200.00</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ backgroundColor: "white", margin: pxToDp(5), borderRadius: pxToDp(10) }}>
                        <View style={{ alignItems: 'flex-end', marginRight: pxToDp(10), justifyContent: "space-between", flexDirection: "row", marginLeft: pxToDp(20), marginTop: pxToDp(10) }}>
                            <Text style={{ opacity: 0.6 }}>商品价格</Text>
                            <Text style={{ opacity: 0.6 }}>￥1200.00</Text>
                        </View>
                        <View style={{ alignItems: 'flex-end', marginRight: pxToDp(10), justifyContent: "space-between", flexDirection: "row", marginTop: pxToDp(10), marginBottom: pxToDp(15), marginLeft: pxToDp(20) }}>
                            <Text style={{ fontSize: pxToDp(18) }}>合计</Text>
                            <Text style={{ fontSize: pxToDp(18), color: "red", fontWeight: "bold" }}>￥1200.00</Text>
                        </View>
                    </View>
                    <View>






                        <TouchableOpacity onPress={() => this.Scrollable.open()} style={{ justifyContent: 'space-between', alignItems: "center", height: pxToDp(40), margin: pxToDp(10), flexDirection: "row", backgroundColor: "white", margin: pxToDp(5), borderRadius: pxToDp(10) }}>
                            <Text style={{ marginLeft: pxToDp(15) }}>支付方式:</Text>
                            <Text style={{ marginLeft: pxToDp(200) }}>{this.state.way}</Text>
                            <Image style={{ width: pxToDp(15), height: pxToDp(15), marginRight: pxToDp(10) }} source={require("../../../images/箭头.png")} />
                        </TouchableOpacity>

                    </View>

                </ScrollView >

                <View style={{ alignItems: "center", justifyContent: "space-between", flexDirection: "row", backgroundColor: "white", height: pxToDp(70) }}>
                    <View style={{ flexDirection: "row", marginLeft: pxToDp(15), alignItems: "flex-end" }}>
                        <Text style={{ fontSize: pxToDp(13) }}>合计金额</Text>
                        <Text style={{ fontSize: pxToDp(18), marginLeft: pxToDp(5), fontWeight: "bold", color: "red" }}>￥1200.00</Text>
                    </View>
                    <View>
                        <TouchableOpacity cisabled={this.props.disabled} onPress={()=>{this.context.navigate("OrderDetails")}} style={{ borderRadius: pxToDp(25), marginRight: pxToDp(20), width: pxToDp(130), height: pxToDp(40), ...this.props.style, overflow: "hidden" }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#55B3F0', '#537ED7']} style={styles.linearGradient}>
                                <Text style={{ ...styles.buttonText, ...this.props.textStyle }}>提交订单</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 支付方式弹窗 */}
                <RBSheet ref={ref => { this.Scrollable = ref; }} height={200} closeOnDragDowncustomStyles={{ container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 } }}>
                    <View>
                        <Text style={{ marginLeft: pxToDp(25), fontSize: pxToDp(16), marginTop: pxToDp(10) }}>支付方式</Text>
                        {this.state.paidway.map((item, index) => (
                            <TouchableOpacity key={item.id} onPress={() => this.changeTab(index)} style={{ alignItems: 'center', flexDirection: "row", marginTop: pxToDp(15), marginLeft: pxToDp(20) }}>
                                <Image style={{ width: pxToDp(30), height: pxToDp(30) }} source={item.image} />
                                <Text style={{ marginLeft: pxToDp(10) }}>{item.text}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </RBSheet>

            </View >
        );
    }
}


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: pxToDp(15),
        paddingRight: pxToDp(15),
        borderRadius: pxToDp(5),
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: pxToDp(15),
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});
export default orders;