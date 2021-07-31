import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { pxToDp } from "../../../utils/stylesKits";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

const TALK_data = [
    {
        id: "1",
        name: "刘晴舟",
        image: require('../../../images/head1.jpg'),
        comment: "谢谢主播分享，我正好在人生的关口上听到了你的声音。我已经轻度抑郁了一段时间，已经到了快接近治愈的状态了。听到你的分享，我也有了很多领悟，助我突破关口更近了一步。感恩",
        time: "05-08",
        good: "12",
        talk: "1",
    },
    {
        id: "2",
        name: "1868109uiyc",
        image: require('../../../images/head2.jpg'),
        comment: "谢谢主播分享，声音非常好听，书的内容也非常好！感恩您！",
        time: "06-11",
        good: "5",
        talk: "2",
    },
    {
        id: "3",
        name: "刘晴舟",
        image: require('../../../images/head1.jpg'),
        comment: "感谢感谢，声音很好听。",
        time: "05-10",
        good: "4",
        talk: "4",
    },

];

class Comments extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flexDirection: "row", backgroundColor: "white", width: "100%", height: pxToDp(50), alignItems: "center" }}>
                    <View style={{ marginLeft: pxToDp(10) }}>
                        <Icon name="left" size={24} color={'black'} />
                    </View>
                    <View style={{ marginLeft: pxToDp(10) }}>
                        <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(40) }} source={require('../../../images/lun5.jpg')} />
                    </View>
                    <View style={{ marginLeft: pxToDp(10) }}>
                        <Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>真是厉害</Text>
                    </View>
                    <TouchableOpacity style={{ marginLeft: pxToDp(110), borderColor: "red", borderWidth: pxToDp(1), width: pxToDp(55), height: pxToDp(25), justifyContent: "center", alignItems: "center", borderRadius: pxToDp(15) }}>
                        <Text style={{ color: "red" }}>关注</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: pxToDp(20) }}>
                        <Icon1 name="share-alt" size={24} color={'black'} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: "100%", height: pxToDp(400) }}>
                    <Image style={{ width: "100%", height: "100%" }} source={require('../../../images/lun7.jpg')} />
                </View>
                <View>
                    <Text style={{ marginLeft: pxToDp(15), marginTop: pxToDp(15), fontSize: pxToDp(15), fontWeight: "bold" }}>朋友都说我像薛之谦，你们觉得像吗？</Text>
                </View>
                <View style={{ marginTop: pxToDp(10), marginLeft: pxToDp(15), marginRight: pxToDp(15) }}>
                    <Text style={{ fontSize: pxToDp(14), lineHeight: pxToDp(23) }}>经常有第一次见面的人说我像薛之谦，戴口罩的时候也会说像，你们觉得像吗？不喜勿喷哈，第一张是薛之谦本人，后面几张都是我。</Text>
                </View>
                <View style={{ flexDirection: "row", marginLeft: pxToDp(15), marginTop: pxToDp(25) }}>
                    <Text>#潮流薯</Text>
                    <Text>#生活薯</Text>
                    <Text>#薯条小助手</Text>
                </View>

                <TouchableOpacity style={{ marginLeft: pxToDp(15), marginTop: pxToDp(15), width: pxToDp(90), height: pxToDp(25), alignItems: "center", justifyContent: "center", borderRadius: pxToDp(15), borderWidth: pxToDp(1), borderColor: "#6790DB" }}>
                    <Text style={{ color: "#6790DB" }}>长得像明星</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginTop: pxToDp(15), justifyContent: "space-between", marginLeft: pxToDp(15), marginRight: pxToDp(15) }}>
                    <Text>07-20</Text>
                    <TouchableOpacity style={{ flexDirection: "row", borderColor: "black", borderWidth: pxToDp(1), borderRadius: pxToDp(15), width: pxToDp(70), height: pxToDp(25), justifyContent: "center", alignItems: "center" }}>
                        <Icon2 name="heart-dislike-circle" size={20} color={'black'} />
                        <Text style={{ fontSize: pxToDp(12) }}>不喜欢</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: pxToDp(10), width: pxToDp(350), height: pxToDp(1), backgroundColor: "black", marginTop: pxToDp(15) }} />
                <View style={{padding:pxToDp(10)}}>
                    <FlatList
                        data={TALK_data}
                        renderItem={({ item }) =>
                            <View>
                                <View style={{ flexDirection: "row", marginTop: pxToDp(10),alignItems:"center" }}>
                                    <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(40), marginTop: pxToDp(10) }} source={item.image} />
                                    <View>
                                        <View style={{ marginTop: pxToDp(10), marginLeft: pxToDp(10) }}>
                                            <Text style={{ fontSize: pxToDp(15),fontWeight:"bold" }}>{item.name}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ marginLeft: pxToDp(50), marginRight: pxToDp(10), marginTop: pxToDp(10) }}>
                                    <Text style={{ fontSize: pxToDp(15) }}>{item.comment}</Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: pxToDp(50), marginTop: pxToDp(10), alignItems: "center", justifyContent: "space-between" }}>
                                    <Text>{item.time}</Text>
                                    <TouchableOpacity style={{ flexDirection: "row", left: pxToDp(75) }}>
                                        <Image style={{ width: pxToDp(16), height: pxToDp(16) }} source={require('../../../images/点赞.png')} />
                                        <Text> {item.good}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: "row" }}>
                                        <Image style={{ width: pxToDp(17), height: pxToDp(17) }} source={require('../../../images/评论.png')} />
                                        <Text> {item.talk}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: pxToDp(50), width: pxToDp(300), height: pxToDp(1), backgroundColor: "black", opacity: 0.1, marginTop: pxToDp(15) }} />
                            </View>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        );
    }
}
export default Comments;