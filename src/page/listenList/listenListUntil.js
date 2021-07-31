import React, { useRef, } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, TextInput } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { pxToDp } from '../../utils/stylesKits';
import { NavigationContext } from "@react-navigation/native";

const PLAYER_data = [
    {
        id: "1",
        play: "2654",
        long: "25:52",
        talk: "15",
        time: "2021-04",
        title: "广播剧《红船》第一集",
    },
    {
        id: "2",
        play: "5548",
        long: "30:46",
        talk: "22",
        time: "2021-04",
        title: "广播剧《红船》第二集",
    },
    {
        id: "3",
        play: "3564",
        long: "21:18",
        talk: "3",
        time: "2021-04",
        title: "广播剧《红船》第三集",
    },

];
const TALK_data = [
    {
        id: "1",
        name: "刘晴舟",
        image: require('../../images/l4.jpg'),
        comment: "谢谢主播分享，我正好在人生的关口上听到了你的声音。我已经轻度抑郁了一段时间，已经到了快接近治愈的状态了。听到你的分享，我也有了很多领悟，助我突破关口更近了一步。感恩",
        time: "05-08",
        good: "12",
        talk: "1",
    },
    {
        id: "2",
        name: "1868109uiyc",
        image: require('../../images/l5.jpg'),
        comment: "谢谢主播分享，声音非常好听，书的内容也非常好！感恩您！",
        time: "06-11",
        good: "5",
        talk: "2",
    },
    {
        id: "3",
        name: "刘晴舟",
        image: require('../../images/l6.jpg'),
        comment: "感谢感谢，声音很好听。",
        time: "05-10",
        good: "4",
        talk: "4",
    },

];

export function AlwaysOpen() {
    
    const modalizeRef = useRef(null);
    const renderContent = () => (
        <View style={{ padding: 20, }}>
            {/* 播放区 */}
            <View style={{ width: "100%", flexDirection: "row", height: pxToDp(50), alignItems: "center", justifyContent: "space-between" }}>
                <TouchableOpacity style={{ flexDirection: "row", width: pxToDp(90), height: pxToDp(30), borderRadius: pxToDp(15), backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ width: pxToDp(13), height: pxToDp(13) }} source={require("../../images/播放白.png")} />
                    <Text style={{ color: "white", marginBottom: pxToDp(2) }}> 全部播放</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ left: pxToDp(70) }}>
                    <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require('../../images/下载1.png')} />
                </TouchableOpacity>
                <View>
                    <Text style={{ fontSize: pxToDp(15) }}>共{PLAYER_data.length}集</Text>
                </View>
            </View>
            <FlatList
                showsVerticalScrollIndicator = {false}
                showsHorizontalScrollIndicator = {false}
                data={PLAYER_data}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MusicPlayer')} style={{ flexDirection: "row", marginTop: pxToDp(15), justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{}}>
                            <Text style={{ fontSize: pxToDp(18), color: "#999999" }}>{item.id}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: pxToDp(17) }}>{item.title}</Text>
                            <View style={{ flexDirection: "row", marginTop: pxToDp(8), marginBottom: pxToDp(7) }}>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Image style={{ width: pxToDp(15), height: pxToDp(15) }} source={require('../../images/播放灰.png')} />
                                    <Text style={{ color: "#999999" }}>{item.play}</Text>
                                </View>
                                <View style={{ marginLeft: pxToDp(15), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Image style={{ width: pxToDp(16), height: pxToDp(16) }} source={require('../../images/时长.png')} />
                                    <Text style={{ color: "#999999" }}>{item.long}</Text>
                                </View>
                                <View style={{ marginLeft: pxToDp(15), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                    <Image style={{ width: pxToDp(14), height: pxToDp(14) }} source={require('../../images/评论.png')} />
                                    <Text style={{ color: "#999999" }}> {item.talk}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ marginBottom: pxToDp(5) }}>
                                <Text style={{ marginBottom: pxToDp(5), color: "#999999" }}>{item.time}</Text>
                            </View>
                            <TouchableOpacity style={{ left: pxToDp(25) }}>
                                <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require('../../images/下载1.png')} />
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>

                }
                keyExtractor={item => item.id}
            />

            <View style={{ width: pxToDp(340), height: pxToDp(1), backgroundColor: "black", opacity: 0.2, marginTop: pxToDp(15) }} />

            <View style={{flexDirection:"row",marginTop:pxToDp(20),marginBottom:pxToDp(20),alignItems:"center"}}>
                <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(40)}} source={require('../../images/l7.jpg')} />
                <TextInput placeholder={"说说你的感受吧"} blurOnSubmit={false} style={{marginLeft:pxToDp(10),width:pxToDp(240),fontSize:pxToDp(15),borderColor:"black",borderWidth:pxToDp(1),borderRadius:pxToDp(10),}}  />
                <TouchableOpacity>
                    <Image style={{width:pxToDp(25),height:pxToDp(25),marginLeft:pxToDp(15)}} source={require('../../images/导航灰.png')} />
                </TouchableOpacity>
            </View>

            {/* 评论区 */}
            <View style={{ marginTop: pxToDp(10) }}>
                <Text style={{ fontSize: pxToDp(20) }}>评论</Text>
            </View>
            <FlatList
                data={TALK_data}
                renderItem={({ item }) =>
                    <View>
                        <View style={{ flexDirection: "row", marginTop: pxToDp(10) }}>
                            <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(40), marginTop: pxToDp(10) }} source={item.image} />
                            <View>
                                <View style={{ marginTop: pxToDp(10), marginLeft: pxToDp(10) }}>
                                    <Text style={{ fontSize: pxToDp(15) }}>{item.name}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: pxToDp(10), marginTop: pxToDp(5) }}>
                                    <Image style={{ width: pxToDp(13), height: pxToDp(13) }} source={require('../../images/星星.png')} />
                                    <Image style={{ width: pxToDp(13), height: pxToDp(13) }} source={require('../../images/星星.png')} />
                                    <Image style={{ width: pxToDp(13), height: pxToDp(13) }} source={require('../../images/星星.png')} />
                                    <Image style={{ width: pxToDp(13), height: pxToDp(13) }} source={require('../../images/星星.png')} />
                                    <Image style={{ width: pxToDp(13), height: pxToDp(13) }} source={require('../../images/星星.png')} />
                                </View>
                            </View>
                        </View>
                        <View style={{ marginLeft: pxToDp(50), marginRight: pxToDp(10), marginTop: pxToDp(10) }}>
                            <Text style={{ fontSize: pxToDp(15) }}>{item.comment}</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginLeft: pxToDp(50), marginTop: pxToDp(10), alignItems: "center", justifyContent: "space-between" }}>
                            <Text>{item.time}</Text>
                            <TouchableOpacity style={{ flexDirection: "row", left: pxToDp(75) }}>
                                <Image style={{ width: pxToDp(16), height: pxToDp(16) }} source={require('../../images/点赞.png')} />
                                <Text> {item.good}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: "row" }}>
                                <Image style={{ width: pxToDp(17), height: pxToDp(17) }} source={require('../../images/评论.png')} />
                                <Text> {item.talk}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: pxToDp(50), width: pxToDp(300), height: pxToDp(1), backgroundColor: "black", opacity: 0.1, marginTop: pxToDp(15) }} />
                    </View>
                }
                keyExtractor={item => item.id}
            />

        </View>

    );

    return (
        <Modalize
            ref={modalizeRef}
            modalStyle={s.content__modal}
            alwaysOpen={85}
            handlePosition="inside"
        >
            {renderContent()}
        </Modalize>
    );
};

const s = StyleSheet.create({

    content__modal: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.45,
        shadowRadius: 16,
    },

    content__subheading: {
        marginBottom: 2,

        fontSize: 16,
        fontWeight: '600',
        color: '#ccc',
    },

    content__heading: {
        fontSize: 24,
        fontWeight: '600',
        color: '#333',
    },

    content__description: {
        paddingTop: 10,
        paddingBottom: 10,

        fontSize: 15,
        fontWeight: '200',
        lineHeight: 22,
        color: '#666',
    },
});
