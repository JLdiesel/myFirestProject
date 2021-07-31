import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from "react-native";
import { BlurView } from "react-native-blur";
import Collapsible from 'react-native-collapsible';
import { pxToDp } from "../../../utils/stylesKits";
import Swiper from 'react-native-swiper'
import AntDesign from 'react-native-vector-icons/AntDesign';

class differentTea extends Component {
    state = {
        activeSections: [],
        collapsed: true,
        collaps: true,
        multipleSelect: false,
        showtitle: true,
        touch1: true,
        touch2: true,
        point: require("../../../images/箭头上.png"),
        pointlater: require("../../../images/箭头下.png")
    };
    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
        const { touch1 } = this.state
        this.setState({ touch1: !touch1 })
    };
    toggleExpand = () => {
        this.setState({ collaps: !this.state.collaps });
        const { touch2 } = this.state
        this.setState({ touch2: !touch2 })
    };

    render() {
        const { point, pointlater, touch1, touch2 } = this.state;
        return (
            <View style={{ backgroundColor: "white" }}>
                <ScrollView>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image style={{ width: pxToDp(300), height: pxToDp(300), }} source={require("../../../images/蒙顶甘露.png")} />
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: pxToDp(25), marginTop: pxToDp(10), fontWeight: "bold" }}>蒙顶甘露</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: pxToDp(5), justifyContent: "center" }}>
                            <Text style={{ fontSize: pxToDp(15), opacity: 0.4 }}>推荐指数:</Text>
                            <Image style={{ width: pxToDp(15), height: pxToDp(15), marginLeft: pxToDp(2) }} source={require("../../../images/五角星实心.png")} />
                            <Image style={{ width: pxToDp(15), height: pxToDp(15), marginLeft: pxToDp(2) }} source={require("../../../images/五角星实心.png")} />
                            <Image style={{ width: pxToDp(15), height: pxToDp(15), marginLeft: pxToDp(2) }} source={require("../../../images/五角星实心.png")} />
                            <Image style={{ width: pxToDp(15), height: pxToDp(15), marginLeft: pxToDp(2) }} source={require("../../../images/五角星实心.png")} />
                            <Image style={{ width: pxToDp(15), height: pxToDp(15), marginLeft: pxToDp(2) }} source={require("../../../images/五角星空心.png")} />

                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: pxToDp(20), width: "100%" }}>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Image source={require("../../../images/dft茶叶.png")} />
                            <Text style={{ marginTop: pxToDp(10), margin: pxToDp(15), fontSize: pxToDp(15) }}>茶叶7.5-8g左右，根据个人口味</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Image source={require("../../../images/dft水滴.png")} />
                            <Text style={{ marginTop: pxToDp(10), margin: pxToDp(15), fontSize: pxToDp(15) }}>桶装水或矿泉水，甘冽山泉并水为佳</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <Image source={require("../../../images/dft茶壶.png")} />
                            <Text style={{ marginTop: pxToDp(10), margin: pxToDp(15), fontSize: pxToDp(15) }}>紫砂茶具或白瓷玉瓷的盖碗茶杯</Text>
                        </View>
                    </View>

                    {/* 1 */}
                    <TouchableOpacity onPress={this.toggleExpanded} style={{ flexDirection: "row", backgroundColor: "#F7F7F7", width: "97.5%", height: pxToDp(40), alignItems: "center", justifyContent: "space-between", marginLeft: pxToDp(5), borderRadius: pxToDp(5) }}>
                        <Text style={{ fontSize: pxToDp(18), marginLeft: pxToDp(15) }}>基本信息:</Text>
                        <View>
                            <Image style={{ width: pxToDp(20), height: pxToDp(20), marginRight: pxToDp(10) }} source={touch1 ? point : pointlater} />
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={this.state.collapsed} align="center">
                        <View style={{ marginTop: pxToDp(10) }}>
                            <View style={{ flexDirection: "row", marginLeft: pxToDp(15), marginTop: pxToDp(10) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15) }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>茶类:</Text> 绿茶，卷曲型绿茶的代表</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: pxToDp(15), marginTop: pxToDp(15) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15) }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>产区:</Text> 四川省名山、雅安两地的蒙山</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: pxToDp(15), marginTop: pxToDp(15) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15) }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>品质特点:</Text> 蒙顶甘露茶形状纤细，汤色黄碧，清澈明亮；使人齿颊留香</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: pxToDp(15), marginTop: pxToDp(15) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15) }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>制茶工艺:</Text> 分蒙顶茶艺“天风十二品”和蒙顶茶技“龙行十八式”两大类，蒙顶山茶艺龙行十八式蒙顶山茶艺龙行十八式分属刚健派与典雅派。</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: pxToDp(15), marginTop: pxToDp(15) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15) }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>采制:</Text> 该茶采摘细嫩，每年春分时节采摘，标准单芽或一芽一叶初展。</Text>
                            </View>
                        </View>
                    </Collapsible>

                    {/* 2 */}
                    <TouchableOpacity onPress={this.toggleExpand} style={{ flexDirection: "row", backgroundColor: "#F7F7F7", width: "97.5%", height: pxToDp(40), alignItems: "center", justifyContent: "space-between", marginLeft: pxToDp(5), borderRadius: pxToDp(5), marginTop: pxToDp(30) }}>
                        <Text style={{ fontSize: pxToDp(18), marginLeft: pxToDp(15) }}>冲泡过程:</Text>
                        <View>
                            <Image style={{ width: pxToDp(20), height: pxToDp(20), marginRight: pxToDp(10) }} source={touch2 ? point : pointlater} />
                        </View>
                    </TouchableOpacity>
                    <Collapsible collapsed={this.state.collaps} align="center">
                        <View style={{ marginTop: pxToDp(10) }}>


                            <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(10) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15), color: "#646464" }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold", color: "black" }}>煮水</Text>  冲泡蒙顶甘露之前我们要做的就是煮水，可以先将水烧沸到100度再关火，关于水质的话，你即可以用自来水也可用桶装水，但也有比较讲究的人会用山泉水。</Text>
                                <View style={{ width: pxToDp(345), height: pxToDp(200) }}>
                                    <Image source={require('../../../images/泡茶1.jpg')} style={{ width: "100%", height: "100%", marginTop: pxToDp(30) }} />
                                </View>
                            </View>


                            <View style={{ flexDirection: "row", marginLeft: pxToDp(15), marginTop: pxToDp(50) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15), color: "#646464" }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold", color: "black" }}>凉汤</Text>  煮沸好的水可不能马上就用来泡茶，要耐心等待它凉一下，凉到80-85度。准备好茶具，用公道杯最好，以免所有的水都凉了不好用。</Text>
                            </View>


                            <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(50) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15), color: "#646464" }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold", color: "black" }}>用沸水</Text>  就可以把煮好的沸水拿出来做冲泡茶叶的准备工作了，即温杯洁具，在盖碗还比较烫的时候投茶，然后盖上杯盖摇香，前后摇动三下即可，揭盖轻秀，一股浓浓的茶香扑鼻而来，醉人心脾。</Text>
                                <View style={{ width: pxToDp(345), height: pxToDp(200) }}>
                                    <Image source={require('../../../images/泡茶3.jpg')} style={{ width: "100%", height: "100%", marginTop: pxToDp(30) }} />
                                </View>
                            </View>


                            <View style={{ flexDirection: "row", marginLeft: pxToDp(15), marginTop: pxToDp(50) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15), color: "#646464" }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold", color: "black" }}>冲水</Text>  在冲泡的这个过程中，这一步是最为关键的。即把刚刚凉好的水，沿盖碗的边沿凸起的环缓缓注入碗中，不要直冲，也不要太急，水到盖碗凸沿即可。</Text>
                            </View>
                            <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(50) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15), color: "#646464" }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold", color: "black" }}>出汤</Text>  在冲泡的这个过程中，我们看以观察下蒙顶甘露茶叶的出汤情况。那么甘露冲泡最好不好盖杯盖，等5-8秒出汤，出汤的时候盖上杯盖，出完立即揭开，以免讲茶叶闷黄。</Text>
                                <View style={{ width: pxToDp(345), height: pxToDp(200) }}>
                                    <Image source={require('../../../images/泡茶2.jpg')} style={{ width: "100%", height: "100%", marginTop: pxToDp(30) }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", marginLeft: pxToDp(15), marginTop: pxToDp(50) }}>
                                <Text style={{ marginRight: pxToDp(15), fontSize: pxToDp(15), color: "#646464" }}><Text style={{ fontSize: pxToDp(15), fontWeight: "bold", color: "black" }}>闻香品茗</Text>  等蒙顶甘露冲泡出茶汤的时候，我们就可以真正开始闻茶香，品茶汤了。那么汤香稍比摇香的时候淡一些，依然是醉人的栗香。三口品，一杯甘露品三口，喝入一口，让茶水在口里转一圈，满满吞下，那一丝丝甘甜，那一丝丝的爽滑，那一缕缕清香，齿间萦绕，人间美事尽在此间！</Text>
                            </View>
                        </View>
                    </Collapsible>
                    <View style={{ width: "100%", height: pxToDp(320) }}>
                        <View style={{ flexDirection: "row", backgroundColor: "#F7F7F7", width: "100%", height: pxToDp(40), alignItems: "center", justifyContent: "space-between", marginTop: pxToDp(30), alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: pxToDp(18), marginLeft: pxToDp(15) }}>热卖推荐</Text>
                        </View>
                        <Swiper showsPagination={false} style={styles.wrapper} loop>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('MoreShop')} style={styles.slide} >
                                <Image resizeMode='cover' style={styles.image} source={require('../../../images/红茶.png')} />
                                <View style={{ marginTop: pxToDp(35), }}>
                                    <Text style={{ fontSize: pxToDp(18), fontWeight: "bold", marginLeft: pxToDp(20) }}>红茶</Text>
                                    <View style={{ width: pxToDp(100), height: pxToDp(1.5), backgroundColor: "black", marginLeft: pxToDp(20) }} />
                                    <Text numberOfLines={2} style={{ width: pxToDp(130), fontSize: pxToDp(15), marginTop: pxToDp(15), marginLeft: pxToDp(15) }}>景德镇陶瓷雕刻生肖主人杯单杯品茗茶</Text>
                                    <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(25),flexDirection:"row" }}>
                                        <Text style={{ fontSize: pxToDp(15) }}>￥158.88</Text>
                                        <AntDesign
                                            name="shoppingcart"
                                            size={pxToDp(20)}
                                            color="#000"
                                            style={{marginLeft:pxToDp(35)}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.slide} >
                                <Image resizeMode='cover' style={styles.image} source={require('../../../images/绿茶.png')} />
                                <View style={{ marginTop: pxToDp(35), }}>
                                    <Text style={{ fontSize: pxToDp(18), fontWeight: "bold", marginLeft: pxToDp(20) }}>绿茶</Text>
                                    <View style={{ width: pxToDp(100), height: pxToDp(1.5), backgroundColor: "black", marginLeft: pxToDp(20) }} />
                                    <Text numberOfLines={2} style={{ width: pxToDp(130), fontSize: pxToDp(15), marginTop: pxToDp(15), marginLeft: pxToDp(15) }}>景德镇陶瓷雕刻生肖主人杯单杯品茗茶</Text>
                                    <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(25),flexDirection:"row" }}>
                                        <Text style={{ fontSize: pxToDp(15) }}>￥158.88</Text>
                                        <AntDesign
                                            name="shoppingcart"
                                            size={pxToDp(20)}
                                            color="#000"
                                            style={{marginLeft:pxToDp(35)}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.slide} >
                                <Image resizeMode='cover' style={styles.image} source={require('../../../images/乌龙.png')} />
                                <View style={{ marginTop: pxToDp(35), }}>
                                    <Text style={{ fontSize: pxToDp(18), fontWeight: "bold", marginLeft: pxToDp(20) }}>乌龙</Text>
                                    <View style={{ width: pxToDp(100), height: pxToDp(1.5), backgroundColor: "black", marginLeft: pxToDp(20) }} />
                                    <Text numberOfLines={2} style={{ width: pxToDp(130), fontSize: pxToDp(15), marginTop: pxToDp(15), marginLeft: pxToDp(15) }}>景德镇陶瓷雕刻生肖主人杯单杯品茗茶</Text>
                                    <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(25),flexDirection:"row" }}>
                                        <Text style={{ fontSize: pxToDp(15) }}>￥158.88</Text>
                                        <AntDesign
                                            name="shoppingcart"
                                            size={pxToDp(20)}
                                            color="#000"
                                            style={{marginLeft:pxToDp(35)}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.slide} >
                                <Image resizeMode='cover' style={styles.image} source={require('../../../images/黑茶.png')} />
                                <View style={{ marginTop: pxToDp(35), }}>
                                    <Text style={{ fontSize: pxToDp(18), fontWeight: "bold", marginLeft: pxToDp(20) }}>黑茶</Text>
                                    <View style={{ width: pxToDp(100), height: pxToDp(1.5), backgroundColor: "black", marginLeft: pxToDp(20) }} />
                                    <Text numberOfLines={2} style={{ width: pxToDp(130), fontSize: pxToDp(15), marginTop: pxToDp(15), marginLeft: pxToDp(15) }}>景德镇陶瓷雕刻生肖主人杯单杯品茗茶</Text>
                                    <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(25),flexDirection:"row" }}>
                                        <Text style={{ fontSize: pxToDp(15) }}>￥158.88</Text>
                                        <AntDesign
                                            name="shoppingcart"
                                            size={pxToDp(20)}
                                            color="#000"
                                            style={{marginLeft:pxToDp(35)}}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </Swiper>
                    </View>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: pxToDp(240),
        marginLeft: pxToDp(27),
        borderRadius: pxToDp(10),
        marginTop: pxToDp(20),

    },
    slide: {
        width: pxToDp(320),
        height: pxToDp(180),
        backgroundColor: 'transparent',
        borderRadius: pxToDp(30),
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 5,
        flexDirection: "row"
    },
    image: {
        left: pxToDp(10),
        marginTop: pxToDp(35),
        width: pxToDp(150),
        height: pxToDp(130),
        borderRadius: pxToDp(20),
        marginLeft: pxToDp(15)
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    bigtext: {
        color: "white",
        fontSize: 20,
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


export default differentTea;