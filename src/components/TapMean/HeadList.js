import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default class HeadList extends Component{

    render(){

        let headData = this.props.data;
        let update = this.props.update;
        const count = headData.length;

        return (
            <View style={style.flex}>
                {
                    headData.map( function(item,i){
                        return (
                            <View style={[style.center,{flex:1/count}]} key={i}>
                                <TouchableOpacity onPress={ () => {update(headData[i])}}>
                                    <Text style={style.head_text}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const style = StyleSheet.create({
    flex: {
        flex: 1,
        flexDirection: 'row'
    },
    head_text: {
        color: '#7B7B7B',
        fontSize: 20
    },
    center: {
        justifyContent: "center",
        alignItems: "center"
    }
});