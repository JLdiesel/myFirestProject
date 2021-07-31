import React, { Component } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from "react-native";
import { pxToDp } from "../../../utils/stylesKits";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { NavigationContext } from "@react-navigation/native";

class orderdetails extends Component {
    static defaultProps = {
        style: {},
        textStyle: {},
        cisabled: false
    }
    static contextType = NavigationContext;

    render() {
        return (
            <View>
                <ImageBackground style={{ backgroundColor: "#50935E", width: "100%", height: pxToDp(150) }}>
                    <View style={{ alignItems: "flex-end", flexDirection: "row", justifyContent: "space-between", marginLeft: pxToDp(20), marginRight: pxToDp(10), marginTop: pxToDp(15), }}>
                        <Text style={{ fontSize: pxToDp(16), fontWeight: "bold" }}>卖家已发货</Text>
                        {/* <Text>支付剩余23时27分</Text> */}
                        <TouchableOpacity onPress={()=>this.context.navigate("Tabbar")}>
                        <Icon1 name="home" size={24} color={'#bbb'} />

                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: pxToDp(20), marginTop: pxToDp(3) }}>
                        <Text style={{ fontSize: pxToDp(12) }}>应付金额 :￥12.00</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: "row", marginLeft: pxToDp(20), marginTop: pxToDp(18) }}>
                        <ImageBackground style={{ justifyContent: "center", alignItems: "center", width: pxToDp(30), height: pxToDp(30), borderRadius: pxToDp(60), backgroundColor: "white" }}>
                            <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/快递.png")} />
                        </ImageBackground>
                        <View style={{ marginLeft: pxToDp(8) }}>
                            <Text style={{ fontWeight: "bold" }}>
                                由【广东深圳福田转运中心】发往【上海宝山...
                            </Text>
                            <Text style={{ marginTop: pxToDp(5), fontSize: pxToDp(12) }}>2019/06/25 03:36:09</Text>
                        </View>
                        <Image source={require('../../../images/箭头白.png')} style={{width:pxToDp(22),height:pxToDp(22),marginTop:pxToDp(4),left:pxToDp(5)}} />
                    </TouchableOpacity>
                </ImageBackground>
                <View style={{ marginLeft: pxToDp(10), marginRight: pxToDp(10), justifyContent: "center", backgroundColor: "white", height: pxToDp(90), bottom: pxToDp(20), borderRadius: pxToDp(10) }}>
                    <View style={{ flexDirection: "row", marginLeft: pxToDp(20), marginBottom: pxToDp(2) }}>
                        <Text style={{ fontSize: pxToDp(16), fontWeight: "bold" }}>真是厉害</Text>
                        <Text style={{ marginLeft: pxToDp(20), fontSize: pxToDp(15), fontWeight: "bold" }}>156****5137</Text>
                    </View>
                    <View style={{ marginLeft: pxToDp(20), marginTop: pxToDp(2) }}>
                        <Text>浙江省 杭州市 拱墅区 浙江树人大学</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{ height: pxToDp(140), flexDirection: "row", backgroundColor: "white", marginLeft: pxToDp(10), marginRight: pxToDp(10), bottom: pxToDp(10), borderRadius: pxToDp(10) }}>
                        <View style={{ justifyContent: "center", marginLeft: pxToDp(15) }}>
                            <Image style={{ width: pxToDp(110), height: pxToDp(110) }} source={{ uri: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2019542020/O1CN01KmNl021QnCitii8Lk_!!2019542020.jpg_430x430q90.jpg" }} />
                        </View>
                        <View style={{ marginLeft: pxToDp(8), marginTop: pxToDp(18), justifyContent: "space-between" }}>
                            <View style={{}}>
                                <Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>金骏眉红茶茶叶</Text>
                            </View>
                            <View style={{ marginBottom: pxToDp(30), width: pxToDp(220), flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ width: pxToDp(150) }}>
                                    <Text style={{ fontSize: pxToDp(12) }}>【品质优选】 金骏眉250g</Text>
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
                </View>
                <View style={{ height:pxToDp(150),backgroundColor: "white", marginLeft: pxToDp(10), marginRight: pxToDp(10), borderRadius: pxToDp(10) }}>
                    <View style={{marginLeft:pxToDp(15),marginTop:pxToDp(15)}}>
                        <View style={{ flexDirection: "row",}}>
                            <Text>订单编号:</Text>
                            <Text style={{marginLeft:pxToDp(5)}}>109878783472</Text>
                            <TouchableOpacity style={{marginLeft:pxToDp(140)}}>
                                <Text style={{color:"red"}}>复制</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row",marginTop:pxToDp(10) }}>
                            <Text>下单时间:</Text>
                            <Text style={{marginLeft:pxToDp(5)}}>2019-06-25 13:10:42</Text>
                        </View>
                        <View style={{ flexDirection: "row",marginTop:pxToDp(10)  }}>
                            <Text>支付方式:</Text>
                            <Text style={{marginLeft:pxToDp(5)}}>微信支付</Text>
                        </View>
                    </View>
                    <View style={{width:pxToDp(355),height:pxToDp(1),backgroundColor:"#e6e6e6",marginTop:pxToDp(15)}} />
                    <View style={{flexDirection:"row",marginTop:pxToDp(10),justifyContent:"space-between",marginLeft:pxToDp(45),marginRight:pxToDp(45)}}>
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <Image style={{ width: pxToDp(25), height: pxToDp(25) }} source={require("../../../images/客服.png")} />
                            <Text>我的客服</Text>
                        </TouchableOpacity>
                        <View style={{height:pxToDp(45),width:pxToDp(1),backgroundColor:"#e6e6e6",bottom:pxToDp(10)}} />
                        <TouchableOpacity style={{flexDirection:"row"}}>
                            <Image style={{ width: pxToDp(25), height: pxToDp(25) }} source={require("../../../images/电话.png")} />
                            <Text>拨打电话</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ backgroundColor: "white", height: pxToDp(120),marginTop:pxToDp(10) }}>
                    <View style={{ marginTop:pxToDp(10),flexDirection: "row", marginLeft: pxToDp(15), alignItems: "flex-end",justifyContent:"space-between" }}>
                        <Text style={{ fontSize: pxToDp(14) }}>商品金额</Text>
                        <Text style={{ fontSize: pxToDp(14), marginRight:pxToDp(10), fontWeight: "bold", color: "red" }}>￥1200.00</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginLeft: pxToDp(15), alignItems: "flex-end",justifyContent:"space-between",marginTop:pxToDp(5) }}>
                        <Text style={{ fontSize: pxToDp(14) }}>运费</Text>
                        <Text style={{ fontSize: pxToDp(14), marginRight:pxToDp(10),fontWeight: "bold", color: "red" }}>￥0.00</Text>
                    </View>
                    <View style={{ flexDirection: "row",marginTop:pxToDp(10),justifyContent:"flex-end",alignItems:"center" }}>
                        <TouchableOpacity style={{ left:pxToDp(10),justifyContent:"center",alignItems:"center",borderRadius: pxToDp(25), marginRight: pxToDp(20), width: pxToDp(80), height: pxToDp(30),}}><Text>查看物流</Text></TouchableOpacity>
                        <TouchableOpacity cisabled={this.props.disabled} onPress={this.props.onPress} style={{ borderRadius: pxToDp(25), marginRight: pxToDp(20), width: pxToDp(130), height: pxToDp(40), ...this.props.style, overflow: "hidden" }}>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#55B3F0', '#537ED7']} style={styles.linearGradient}>
                                <Text style={{ ...styles.buttonText, ...this.props.textStyle }}>确认收货</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
export default orderdetails;