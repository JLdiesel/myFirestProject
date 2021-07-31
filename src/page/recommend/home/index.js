import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, Modal, Button, ImageBackground } from 'react-native';
import Swiper from "react-native-deck-swiper";
import { pxToDp } from "../../../utils/stylesKits";
import { NavigationContext } from "@react-navigation/native";



class index extends Component {

    state = {
        // 当前被操作的数组的索引
        currentIndex: 0,
        cards: [
            require('../../../images/P1.jpg'),
            require('../../../images/p2.jpg'),
            require('../../../images/p3.jpg'),
            require('../../../images/P1.jpg'),
            require('../../../images/p2.jpg'),
            require('../../../images/p3.jpg'),
            require('../../../images/P1.jpg'),
            require('../../../images/p2.jpg'),
            require('../../../images/p3.jpg'),
            
        ]
    }

    static contextType = NavigationContext;

    render() {
        const { cards, currentIndex } = this.state;

        return (
            <ImageBackground style={{}} source={require('../../../images/fb.png')}>
                <View style={{ height: '100%' }}>
                    <View style={styles.container}>
                        {cards[currentIndex] ? <Swiper
                            cards={cards}
                            renderCard={(card) => {
                                return (
                                    <View style={styles.card}>
                                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={() => this.context.navigate("ReaderIndex")}>
                                            <Image style={{ width: '96%', height: pxToDp(160) ,borderRadius:pxToDp(20)}} source={cards[currentIndex]}></Image>
                                            {/* <Text style={styles.text}>{card}</Text> */}
                                            {/* 小标 */}
                                            <View>
                                                <Text style={{ color: "blue", textAlign: "center", marginTop: pxToDp(15) }}>
                                                    TO READ
                                                </Text>
                                            </View>
                                            {/* 标题名 */}
                                            <View style={{ width: 200, height: 100,justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(15) }}>
                                                <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
                                                    今天的浙江
                                                </Text>
                                                <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>
                                                    不能只重视数据和效率
                                                </Text>
                                            </View>
                                            {/* 主题内容 */}
                                            <View style={{ width: 300, height: 50, justifyContent: 'center', alignItems: 'center',  marginTop: pxToDp(15) }}>
                                                <Text style={{ fontSize: 16, textAlign: 'center' }}>
                                                    相对于宏大的议题与繁荣的狂欢，我更关注微小的个体如何有尊严地生存和发展
                                                </Text>
                                            </View>
                                            {/* 分割线 */}
                                            <View>
                                                <Text style={{ textAlign: 'center', marginTop: pxToDp(5), color: 'orange', fontWeight: 'bold' }}>
                                                    _________________
                                                </Text>
                                            </View>
                                            {/* 作者 */}
                                            <View style={{ width: 200, height: 30,  justifyContent: 'center', alignItems: 'center',  marginTop: pxToDp(10) }}>
                                                <Text style={{ fontSize: 20, textAlign: 'center' }}>
                                                    吴琦
                                                </Text>
                                            </View>
                                            {/* 数据内容 */}
                                            <View style={{ flexDirection: "row", alignSelf: 'center', width: "100%", height: 25,  justifyContent: 'space-around', alignItems: 'center', marginTop: pxToDp(15) }}>
                                                <View>
                                                    <Text style={{ fontSize: 12, }}>
                                                        评论：11
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 12 }}>
                                                        喜欢：42
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text style={{ fontSize: 12 }}>
                                                        阅读数：3.5w
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                )
                            }}
                            // onSwiped={(cardIndex) => {console.log(cardIndex)}}
                            onSwiped={() => { this.setState({ currentIndex: this.state.currentIndex + 1 }) }}
                            onSwipedAll={() => { console.log('onSwipedAll') }}
                            // cardIndex={0}
                            cardIndex={currentIndex}
                            backgroundColor={'transparent'}
                            cardVerticalMargin={45}
                            stackSize={3}>

                        </Swiper> : <></>}
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#F5FCFF",
    },
    card: {
        // flex: 1,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white",
        height: pxToDp(470)
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    }
});

export default index;