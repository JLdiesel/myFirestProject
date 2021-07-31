import React, { Component } from "react";
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Button, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyNav from "../../../components/MyNav/index";
import { pxToDp } from "../../../utils/stylesKits";
import { NavigationContext } from "@react-navigation/native";


const TEA_data = [
    {
        id: "1",
        image: "https://th.bing.com/th/id/OIP.EwD12p-d4QAZDp9TZgg9iwHaE6?w=270&h=180&c=7&o=5&dpr=1.5&pid=1.7",
        title: "来福茶馆",
        distance: "2.6",
        comment: "茶香悠悠，醉不成思",
    },
    {
        id: "2",
        image: "https://th.bing.com/th/id/OIP.Sydk9-v4nEjiP_0uH7DtZgHaE2?w=278&h=182&c=7&o=5&dpr=1.5&pid=1.7",
        title: "阿华茶馆",
        distance: "1.7",
        comment: "阿华阿华阿虎",
    },
    {
        id: "3",
        image: "https://th.bing.com/th/id/OIP.EwD12p-d4QAZDp9TZgg9iwHaE6?w=270&h=180&c=7&o=5&dpr=1.5&pid=1.7",
        title: "来福茶馆",
        distance: "2.6",
        comment: "茶香悠悠，醉不成思",
    },
    {
        id: "4",
        image: "https://th.bing.com/th/id/OIP.Sydk9-v4nEjiP_0uH7DtZgHaE2?w=278&h=182&c=7&o=5&dpr=1.5&pid=1.7",
        title: "阿华茶馆",
        distance: "1.7",
        comment: "阿华阿华阿虎",
    }
];

class TeaHouse extends Component {
    static contextType = NavigationContext;

    render() {
        return (
            <View>
                <ScrollView
                    stickyHeaderIndices={[0]}
                >
                    <MyNav title='附近茶馆' />
                    <FlatList
                        data={TEA_data}
                        renderItem={({ item }) =>

                            // 视频大图  开始

                            <TouchableOpacity
                                onPress={() => this.context.navigate("NearTeaHouseDetails")}

                                style={{
                                    width: "100%",
                                    height: 200,
                                    marginBottom: pxToDp(5)
                                }} >
                                <ImageBackground
                                    style={{ width: "100%", height: "100%", justifyContent: "center" }}
                                    imageStyle={{}}
                                    source={{ uri: item.image }}>
                                    <View style={{ flex: 3, alignItems: "center", justifyContent: "flex-end" }}>

                                    </View>
                                    {/* 视频标题+内容  开始 */}
                                    <View style={{ flex: 1, marginLeft: 20, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>{item.title}</Text>
                                        <Text style={{ color: "white", fontSize: pxToDp(16), marginRight: pxToDp(8) }}>{item.distance}km</Text>
                                    </View>
                                    <View style={{ flex: 1, marginLeft: 20, flexDirection: "row", justifyContent: "space-between" }}>
                                        <Text style={{ fontSize: 15, color: "white" }}>{item.comment}</Text>
                                        <View style={{ marginRight: pxToDp(10), backgroundColor: "#4FAF30", width: pxToDp(40), height: pxToDp(20), justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ color: "white" }}>免费</Text>
                                        </View>
                                    </View>
                                    {/* 视频内容+标题  结束 */}
                                </ImageBackground>
                            </TouchableOpacity>
                            // 视频大图  结束
                        }
                        keyExtractor={item => item.id}
                    />
                </ScrollView>

            </View>
        );
    }
}
export default TeaHouse;