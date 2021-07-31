import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';

import HeadList from './HeadList'
import LeftList from "./LeftList";
import RightList from "./RightList";

const {height} = Dimensions.get('window');

let data = {};
let headData = [];
let leftData = [];
let rightData = [];

export default class MenuList extends Component{

    constructor(props){
        super(props);
        data = props.data;

        //初始化头部数据
        for (let item in data){
            headData.push(item);
        }

        //初始化左侧数据
        let defaultLValue = headData[0];
        for (let item in data[defaultLValue]){
            leftData.push(item);
        }

        //初始化右侧数据
        let defaultRValue = leftData[0];
        rightData = data[defaultLValue][defaultRValue];

        //初始化state
        this.state = {
            shouldChangeTab: false,
            currentTab: defaultLValue,
            leftData : leftData,
            rightData : rightData
        };
    }

    //函数回调，每次选择头部tab后，重新render
    forceUpdateAllUI = (ele) => {
        leftData = [];
        for (let item in data[ele]){
            leftData.push(item);
        }
        let defaultRValue = leftData[0];
        rightData = data[ele][defaultRValue];

        this.setState({
            shouldChangeTab:true,
            currentTab: ele,
            leftData: leftData,
            rightData: rightData
        })
    };

    //函数回调，每次选择左侧列表后，重新render
    forceUpdateRightListUI = (ele) => {
        rightData = data[this.state.currentTab][ele];
        this.setState({
            shouldChangeTab:false,
            rightData: rightData
        })
    };

    render(){
        return (
            <View style={style.container}>
                <View style={style.top}>
                    <HeadList data={headData} update={this.forceUpdateAllUI}/>
                </View>
                <View style={style.bottom}>
                    <LeftList data={this.state.leftData}
                              shouldChangeTab={this.state.shouldChangeTab}
                              update={this.forceUpdateRightListUI}
                    />
                    <RightList data={this.state.rightData}/>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    top: {
        height: 60,
        borderBottomWidth: 1,
        borderColor:'#DFDFDF',
        backgroundColor:'#F5F5F5'
    },
    bottom: {
        height: height-60,
        flexDirection:'row',
        backgroundColor: '#F5FCFF'
    }
});
