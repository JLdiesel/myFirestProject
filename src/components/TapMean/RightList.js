import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');

export default class RightList extends Component{

    render(){

        let rightData = this.props.data;

        return (
            <ScrollView style={style.container}>
                {
                    rightData.map( function(item,i){
                        return (
                            <View key={i} style={[style.list_cell,style.center]}>
                                <TouchableOpacity>
                                    <Text style={[style.list_text,style.list_margin]}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        width: width/2,
        backgroundColor:'#FFFFFF'
    },
    list_text: {
        color: '#7B7B7B',
        fontSize: 18
    },
    list_margin: {
        marginLeft: 20
    },
    list_cell: {
        height: 60
    },
    center: {
        justifyContent: "center"
    }
});