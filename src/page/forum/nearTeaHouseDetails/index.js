import React, { Component } from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from "react-native";
import { pxToDp } from "../../../utils/stylesKits"
import Swiper from 'react-native-swiper'
import { white } from "chalk";
import { NavigationContext } from "@react-navigation/native";


class TeaHousedetails extends Component {
    static contextType = NavigationContext;

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Swiper dotColor={"white"} activeDotColor={"#EFB336"} showsPagination={true} style={styles.wrapper} loop>
                    <View style={styles.slide} >
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri: "https://th.bing.com/th/id/OIP.jGUcCsL07tTsraMh9UriywHaLH?w=124&h=187&c=7&o=5&dpr=1.5&pid=1.7" }}>
                            <View style={{ marginTop: pxToDp(50), justifyContent: "center", backgroundColor: "black", opacity: 0.7, width: "100%", height: "100%" }}>
                                <View>
                                    <Text style={{ color: "white", fontSize: pxToDp(25), fontWeight: "bold", marginLeft: pxToDp(30) }}>梦里水香茶馆</Text>
                                </View>

                                <View style={{ alignItems: "center", flexDirection: "row", marginTop: pxToDp(30), marginLeft: pxToDp(15), }}>
                                    <Image style={{ width: pxToDp(40), height: pxToDp(40) }} source={require("../../../images/wifi.png")} />
                                    <Text style={{ color: "white", fontSize: pxToDp(18), marginLeft: pxToDp(10) }}>免费WiFi</Text>
                                    <Image style={{ marginLeft: pxToDp(20), width: pxToDp(40), height: pxToDp(40) }} source={require("../../../images/停车.png")} />
                                    <Text style={{ color: "white", fontSize: pxToDp(18), marginLeft: pxToDp(10) }}>免费停车</Text>
                                </View>

                                <View style={{ marginLeft: pxToDp(20), marginRight: pxToDp(20) }}>
                                    <Text style={{ color: "white", marginTop: pxToDp(20) }}>四根清净，以茶为媒，梦里水香茶馆分享您的喜怒哀乐，为每位品茶人提供了思想交流和传冲延续的空间。</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: pxToDp(20), alignItems: "center" }}>
                                    <Image style={{ marginLeft: pxToDp(20), width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/定位.png")} />
                                    <Text style={{ color: "white", marginLeft: pxToDp(10) }}>茶馆地址</Text>
                                    <TouchableOpacity onPress={() => this.context.navigate("Tabbar")}>
                                        <Image style={{ marginLeft: pxToDp(200), width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/导航.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: pxToDp(20), marginTop: pxToDp(20), flexDirection: "row", alignItems: "center" }}>
                                    <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/电话白.png")} />
                                    <Text style={{ color: "white", marginLeft: pxToDp(10) }}>020-156489499-566</Text>
                                </View>
                                <View style={{ top: pxToDp(80), justifyContent: "flex-end", alignItems: "center" }}>
                                    <TouchableOpacity onPress={() => this.context.navigate("Tabbar")} style={{ width: "80%", height: pxToDp(50), justifyContent: "center", alignItems: "center", borderColor: "#EFB336", borderRadius: pxToDp(10), borderWidth: pxToDp(2) }}>
                                        <Text style={{ fontSize: pxToDp(19), color: "#EFB336" }}>免费喝茶</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.slide}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri: "https://th.bing.com/th/id/OIP.jGUcCsL07tTsraMh9UriywHaLH?w=124&h=187&c=7&o=5&dpr=1.5&pid=1.7" }}>
                            <View style={{ marginTop: pxToDp(50), justifyContent: "center", backgroundColor: "black", opacity: 0.7, width: "100%", height: "100%" }}>
                                <View>
                                    <Text style={{ color: "white", fontSize: pxToDp(25), fontWeight: "bold", marginLeft: pxToDp(30) }}>梦里水香茶馆</Text>
                                </View>

                                <View style={{ alignItems: "center", flexDirection: "row", marginTop: pxToDp(30), marginLeft: pxToDp(15), }}>
                                    <Image style={{ width: pxToDp(40), height: pxToDp(40) }} source={require("../../../images/wifi.png")} />
                                    <Text style={{ color: "white", fontSize: pxToDp(18), marginLeft: pxToDp(10) }}>免费WiFi</Text>
                                    <Image style={{ marginLeft: pxToDp(20), width: pxToDp(40), height: pxToDp(40) }} source={require("../../../images/停车.png")} />
                                    <Text style={{ color: "white", fontSize: pxToDp(18), marginLeft: pxToDp(10) }}>免费停车</Text>
                                </View>

                                <View style={{ marginLeft: pxToDp(20), marginRight: pxToDp(20) }}>
                                    <Text style={{ color: "white", marginTop: pxToDp(20) }}>四根清净，以茶为媒，梦里水香茶馆分享您的喜怒哀乐，为每位品茶人提供了思想交流和传冲延续的空间。</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: pxToDp(20), alignItems: "center" }}>
                                    <Image style={{ marginLeft: pxToDp(20), width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/定位.png")} />
                                    <Text style={{ color: "white", marginLeft: pxToDp(10) }}>茶馆地址</Text>
                                    <TouchableOpacity>
                                        <Image style={{ marginLeft: pxToDp(200), width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/导航.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: pxToDp(20), marginTop: pxToDp(20), flexDirection: "row", alignItems: "center" }}>
                                    <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/电话白.png")} />
                                    <Text style={{ color: "white", marginLeft: pxToDp(10) }}>020-156489499-566</Text>
                                </View>
                                <View style={{ top: pxToDp(80), justifyContent: "flex-end", alignItems: "center" }}>
                                    <TouchableOpacity style={{ width: "80%", height: pxToDp(50), justifyContent: "center", alignItems: "center", borderColor: "#EFB336", borderRadius: pxToDp(10), borderWidth: pxToDp(2) }}>
                                        <Text style={{ fontSize: pxToDp(19), color: "#EFB336" }}>免费喝茶</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.slide} >
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri: "https://th.bing.com/th/id/OIP.jGUcCsL07tTsraMh9UriywHaLH?w=124&h=187&c=7&o=5&dpr=1.5&pid=1.7" }}>
                            <View style={{ marginTop: pxToDp(50), justifyContent: "center", backgroundColor: "black", opacity: 0.7, width: "100%", height: "100%" }}>
                                <View>
                                    <Text style={{ color: "white", fontSize: pxToDp(25), fontWeight: "bold", marginLeft: pxToDp(30) }}>梦里水香茶馆</Text>
                                </View>

                                <View style={{ alignItems: "center", flexDirection: "row", marginTop: pxToDp(30), marginLeft: pxToDp(15), }}>
                                    <Image style={{ width: pxToDp(40), height: pxToDp(40) }} source={require("../../../images/wifi.png")} />
                                    <Text style={{ color: "white", fontSize: pxToDp(18), marginLeft: pxToDp(10) }}>免费WiFi</Text>
                                    <Image style={{ marginLeft: pxToDp(20), width: pxToDp(40), height: pxToDp(40) }} source={require("../../../images/停车.png")} />
                                    <Text style={{ color: "white", fontSize: pxToDp(18), marginLeft: pxToDp(10) }}>免费停车</Text>
                                </View>

                                <View style={{ marginLeft: pxToDp(20), marginRight: pxToDp(20) }}>
                                    <Text style={{ color: "white", marginTop: pxToDp(20) }}>四根清净，以茶为媒，梦里水香茶馆分享您的喜怒哀乐，为每位品茶人提供了思想交流和传冲延续的空间。</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: pxToDp(20), alignItems: "center" }}>
                                    <Image style={{ marginLeft: pxToDp(20), width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/定位.png")} />
                                    <Text style={{ color: "white", marginLeft: pxToDp(10) }}>茶馆地址</Text>
                                    <TouchableOpacity>
                                        <Image style={{ marginLeft: pxToDp(200), width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/导航.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: pxToDp(20), marginTop: pxToDp(20), flexDirection: "row", alignItems: "center" }}>
                                    <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/电话白.png")} />
                                    <Text style={{ color: "white", marginLeft: pxToDp(10) }}>020-156489499-566</Text>
                                </View>
                                <View style={{ top: pxToDp(80), justifyContent: "flex-end", alignItems: "center" }}>
                                    <TouchableOpacity style={{ width: "80%", height: pxToDp(50), justifyContent: "center", alignItems: "center", borderColor: "#EFB336", borderRadius: pxToDp(10), borderWidth: pxToDp(2) }}>
                                        <Text style={{ fontSize: pxToDp(19), color: "#EFB336" }}>免费喝茶</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.slide}>
                        <ImageBackground style={{ width: "100%", height: "100%" }} source={{ uri: "https://th.bing.com/th/id/OIP.jGUcCsL07tTsraMh9UriywHaLH?w=124&h=187&c=7&o=5&dpr=1.5&pid=1.7" }}>
                            <View style={{ marginTop: pxToDp(50), justifyContent: "center", backgroundColor: "black", opacity: 0.7, width: "100%", height: "100%" }}>
                                <View>
                                    <Text style={{ color: "white", fontSize: pxToDp(25), fontWeight: "bold", marginLeft: pxToDp(30) }}>梦里水香茶馆</Text>
                                </View>

                                <View style={{ alignItems: "center", flexDirection: "row", marginTop: pxToDp(30), marginLeft: pxToDp(15), }}>
                                    <Image style={{ width: pxToDp(40), height: pxToDp(40) }} source={require("../../../images/wifi.png")} />
                                    <Text style={{ color: "white", fontSize: pxToDp(18), marginLeft: pxToDp(10) }}>免费WiFi</Text>
                                    <Image style={{ marginLeft: pxToDp(20), width: pxToDp(40), height: pxToDp(40) }} source={require("../../../images/停车.png")} />
                                    <Text style={{ color: "white", fontSize: pxToDp(18), marginLeft: pxToDp(10) }}>免费停车</Text>
                                </View>

                                <View style={{ marginLeft: pxToDp(20), marginRight: pxToDp(20) }}>
                                    <Text style={{ color: "white", marginTop: pxToDp(20) }}>四根清净，以茶为媒，梦里水香茶馆分享您的喜怒哀乐，为每位品茶人提供了思想交流和传冲延续的空间。</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: pxToDp(20), alignItems: "center" }}>
                                    <Image style={{ marginLeft: pxToDp(20), width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/定位.png")} />
                                    <Text style={{ color: "white", marginLeft: pxToDp(10) }}>茶馆地址</Text>
                                    <TouchableOpacity>
                                        <Image style={{ marginLeft: pxToDp(200), width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/导航.png")} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: pxToDp(20), marginTop: pxToDp(20), flexDirection: "row", alignItems: "center" }}>
                                    <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require("../../../images/电话白.png")} />
                                    <Text style={{ color: "white", marginLeft: pxToDp(10) }}>020-156489499-566</Text>
                                </View>
                                <View style={{ top: pxToDp(80), justifyContent: "flex-end", alignItems: "center" }}>
                                    <TouchableOpacity style={{ width: "80%", height: pxToDp(50), justifyContent: "center", alignItems: "center", borderColor: "#EFB336", borderRadius: pxToDp(10), borderWidth: pxToDp(2) }}>
                                        <Text style={{ fontSize: pxToDp(19), color: "#EFB336" }}>免费喝茶</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </Swiper>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: "100%",
    },
    slide: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
});
export default TeaHousedetails;