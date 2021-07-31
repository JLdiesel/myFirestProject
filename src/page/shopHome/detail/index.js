import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import MyNav from "../../../components/MyNav";
import { pxToDp } from "../../../utils/stylesKits";
import { NavigationContext } from "@react-navigation/native";
import Lightbox from 'react-native-lightbox';
import Carousel from 'react-native-looped-carousel';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

const renderCarousel = () => (
    <Carousel style={{ width: WINDOW_WIDTH, height: WINDOW_WIDTH }}>
        <Image
            style={{ flex: 1 }}
            resizeMode="contain"
            source={{ uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft160%2F58%2F1925424931%2F131976%2F1bb0ed1d%2F53bf9f04Nd29b0602.jpg%21q70.jpg&refer=http%3A%2F%2Fm.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630129624&t=042215a3f4048fbb1e96a8f8719ba8b0" }}
        />
        <Image
            style={{ flex: 1 }}
            resizeMode="contain"
            source={{ uri: "https://img.alicdn.com/imgextra/i1/725677994/O1CN01f7IcAS28vIgfDeTiI_!!725677994.jpg_430x430q90.jpg" }}
        />
        <Image
            style={{ flex: 1 }}
            resizeMode="contain"
            source={{ uri: "https://img.alicdn.com/imgextra/i3/725677994/O1CN01uUPfp028vIimZ3Gsx_!!725677994.jpg_430x430q90.jpg" }}
        />
        <Image
            style={{ flex: 1 }}
            resizeMode="contain"
            source={{ uri: "https://gd1.alicdn.com/imgextra/i1/2102588713/O1CN01wss1iK2EEbXCqUsYR_!!2102588713.jpg" }}
        />

    </Carousel>
)

class shopdetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            products: [
                {
                    id: 1,
                    text: '小袋装',
                    weight: "150g"
                },
                {
                    id: 2,
                    text: '中袋装',
                    weight: "300g"
                },
                {
                    id: 3,
                    text: '大袋装',
                    weight: "500g"
                }
            ],
            record: [
                "西湖龙井",
                "anji"
            ],
            nowprice: [
                "259.89"
            ],
            beforeprice: [
                "300.00"
            ],
            comment: [
                "喝西湖龙井好喝好好喝西湖龙井好喝好好喝西湖龙井好喝好好喝西湖龙井好喝好好喝西湖龙井好喝好好喝西湖龙井好喝好好喝西湖龙井好喝好好喝西湖龙井好喝好好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝好喝西湖龙井好喝"
            ],
            Select: false,
            activeTab: 1
        };

    }
    onPress = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    onIt = () => {
        this.setState({
            count: this.state.count - 1
        });
    };
    changeTab = (index) => {

        this.setState({ activeTab: index })
    }
    static contextType = NavigationContext;

    render() {
        const { count, tabs, activeTab } = this.state;
        console.log(activeTab);
        return (
            <View>
                {/* 顶部导航 */}
                <MyNav />

                <ScrollView style={{ height: pxToDp(560) }}>
                    {/* 商品图片 */}

                    <View style={{ alignItems: "center", marginTop: pxToDp(20) }}>
                        <Lightbox springConfig={{ tension: 15, friction: 7 }} swipeToDismiss={true} renderContent={renderCarousel}>
                            <Image style={{ width: pxToDp(230), height: pxToDp(200), borderRadius: pxToDp(5), }} source={{ uri: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft160%2F58%2F1925424931%2F131976%2F1bb0ed1d%2F53bf9f04Nd29b0602.jpg%21q70.jpg&refer=http%3A%2F%2Fm.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630129624&t=042215a3f4048fbb1e96a8f8719ba8b0" }} />
                        </Lightbox>

                    </View>


                    {/* 品名 价格 */}
                    <View style={{ alignItems: "center", marginTop: pxToDp(20) }}>
                        <Text style={{ fontSize: pxToDp(22), fontWeight: "bold" }}>{this.state.record[0]}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-end" }}>
                            <Text style={{ fontSize: pxToDp(20), fontWeight: "bold" }}>￥{this.state.nowprice}</Text>
                            <Text style={{ fontSize: pxToDp(12), textDecorationLine: "line-through", marginLeft: pxToDp(10) }}>￥{this.state.beforeprice}</Text>
                        </View>
                    </View>

                    {/* 商品详情 */}

                    <View style={{ marginLeft: pxToDp(15), marginRight: pxToDp(15), marginTop: pxToDp(15) }}>
                        <Text>{this.state.comment}</Text>
                    </View>

                    {/* 购买规格 */}
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        {this.state.products.map((item, index) => (
                            <TouchableOpacity key={item.id} onPress={() => this.changeTab(index)} style={[styles.button, { backgroundColor: (index === activeTab ? "#3CB371" : "#D2DFD5") }]}>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontWeight: index === activeTab ? "bold" : "normal" }}>{item.text}</Text>
                                    <Text>{item.weight}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={{ marginTop: pxToDp(20), }}>
                        <View>
                            <Image style={{ resizeMode: "cover", height: pxToDp(500), marginLeft: pxToDp(20), marginRight: pxToDp(20) }} source={{ uri: "https://img.alicdn.com/imgextra/i4/118266366/O1CN01EiQlr71wtg18ayVd0_!!118266366.jpg" }} />
                        </View>
                        <View>
                            <Image style={{ resizeMode: "cover", height: pxToDp(500), marginLeft: pxToDp(20), marginRight: pxToDp(20) }} source={{ uri: "https://img.alicdn.com/imgextra/i2/118266366/O1CN0175vrF11wtg1Z9Mfgy_!!118266366.jpg" }} />
                        </View>
                        <View>
                            <Image style={{ resizeMode: "cover", height: pxToDp(500), marginLeft: pxToDp(20), marginRight: pxToDp(20) }} source={{ uri: "https://img.alicdn.com/imgextra/i2/118266366/O1CN0175vrF11wtg1Z9Mfgy_!!118266366.jpg" }} />
                        </View>
                        <View>
                            <Image style={{ resizeMode: "cover", height: pxToDp(500), marginLeft: pxToDp(20), marginRight: pxToDp(20) }} source={{ uri: "https://img.alicdn.com/imgextra/i4/118266366/O1CN01lzWVpF1wtg16D8irz_!!118266366.jpg" }} />
                        </View>
                    </View>

                </ScrollView>
                {/* 购买数量 */}
                <View style={{ height: pxToDp(105) }}>
                    <View style={{ margin: pxToDp(13), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text>数量</Text>
                        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#D3D3D3", width: pxToDp(100), height: pxToDp(30), flexDirection: "row", justifyContent: "space-between" ,borderRadius:pxToDp(8)}}>
                            <TouchableOpacity onPress={this.onIt} style={{ marginLeft: pxToDp(10) }}><Text style={{ fontWeight: "bold", fontSize: pxToDp(20) }}>-</Text></TouchableOpacity>
                            <Text style={{ fontSize: pxToDp(15) }}>{count}</Text>
                            <TouchableOpacity onPress={this.onPress} style={{ marginRight: pxToDp(10) }}><Text style={{ fontWeight: "bold", fontSize: pxToDp(20) }}>+</Text></TouchableOpacity>
                        </View>
                    </View>


                    {/* 购买按钮 */}
                    <View style={{ marginBottom: pxToDp(15), flexDirection: "row", justifyContent: "space-evenly" }}>
                        <TouchableOpacity style={{ borderRadius: pxToDp(20), justifyContent: "center", alignItems: "center", width: pxToDp(160), height: pxToDp(40), backgroundColor: "#D3D3D3" }}>
                            <Text>加入购物车</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('orders')} style={{ borderRadius: pxToDp(20), justifyContent: "center", alignItems: "center", width: pxToDp(160), backgroundColor: "orange" }}> */}
                        <TouchableOpacity onPress={() => this.context.navigate("Order")} style={{ borderRadius: pxToDp(20), justifyContent: "center", alignItems: "center", width: pxToDp(160), backgroundColor: "orange" }}>
                            <Text>立即购买</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        );
    }
    decrease() { // 单击减少
        let newValue = this.props.defaultValue - this.props.step;
        if (newValue < this.props.min) {
            newValue = this.props.min;
        }
        this.setState({
            currentNumber: newValue,
        }, () => {
            this.onChange(newValue)
        })
    }

    increase() { // 单击增加
        let newValue = this.props.defaultValue + this.props.step;

        if (newValue > this.props.max) {
            newValue = this.props.max;
        }
        this.setState({
            currentNumber: newValue
        }, () => {
            this.onChange(newValue)
        })
    }


}


const styles = StyleSheet.create({
    button: {

        width: pxToDp(110),
        height: pxToDp(70),
        borderRadius: pxToDp(5),
        marginTop: pxToDp(15),
        borderRadius: pxToDp(5),
        justifyContent: "center",
        alignItems: "center",
    },
    closeButton: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        padding: 8,
        borderRadius: 3,
        textAlign: 'center',
        margin: 10,
        alignSelf: 'flex-end',
    },
});
export default shopdetails;