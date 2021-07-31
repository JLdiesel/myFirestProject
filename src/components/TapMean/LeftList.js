import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';

const {width} = Dimensions.get('window');

export default class LeftList extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectIndex:0
        };
    }

    updateState(index,update,leftData){

        //触发回调函数
        update(leftData[index]);

        //重新渲染cell颜色
        this.setState({
            selectIndex:index
        })
    };

    // componentWillReceiveProps(nextProps): void {
    //     if (nextProps.shouldChangeTab) {
    //         //重新渲染cell颜色
    //         this.setState({
    //             selectIndex:0
    //         })
    //     }
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.shouldChangeTab) {
            //重新渲染cell颜色
            this.setState({
                selectIndex:0
            })
        }
    }

    render(){

        let leftData = this.props.data;
        let update = this.props.update;
        let {selectIndex} = this.state;

        return (
            <ScrollView style={style.container}>
                {
                    leftData.map( (item,i) => {
                        return (
                            <View key={i} style={[style.list_cell,style.center, selectIndex === i ?
                                style.selectBgColor : style.normalBgColor]}>

                                <TouchableOpacity onPress = { this.updateState.bind(this,i,update,leftData) } >

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
        backgroundColor:'#F2F2F2'
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
    },
    selectBgColor: {
        backgroundColor:'#FFFFFF'
    },
    normalBgColor: {
        backgroundColor:'#F2F2F2'
    }
});