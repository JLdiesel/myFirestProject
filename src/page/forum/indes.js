
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContext } from "@react-navigation/native";
import { pxToDp } from '../../utils/stylesKits';

class index extends Component {
    static contextType = NavigationContext;

    render() {
        return (
            <View> 
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: pxToDp(40) }}>旅游+论坛</Text>
                </View>
                <TouchableOpacity onPress={() => this.context.navigate("NearTeaHouose")} >
                    <Text style={{ fontSize: pxToDp(30) }}>附近茶馆</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.context.navigate("Tour")} >
                    <Text style={{ fontSize: pxToDp(30) }}>红迹旅游（红色旅游路线）</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.context.navigate("Activity")} >
                    <Text style={{ fontSize: pxToDp(30) }}>系列活动（茶乡红色活动）</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default index;