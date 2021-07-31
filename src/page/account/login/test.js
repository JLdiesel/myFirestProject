import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native-animatable';

class test extends Component {
    constructor(props) {
        super(props)
    }

    renderLogin() {
        <TouchableOpacity  >
            <View style={{
                position: 'absolute',
                zIndex: 999,
                justifyContent: 'center',
                alignItems: 'center',
                top: 10,
                width: 30,
                height: 30,
                elevation: 9999,
                backgroundColor: 'red',
                width: 300,
                height: 300
            }}>
                {/* <Image style={{ height: 200, width: 200 }} source={require('../../../images/top2.png')} /> */}
            </View>
        </TouchableOpacity>
    }

    renderRegister() {
        <TouchableOpacity >
            <View style={{
                position: 'absolute',
                zIndex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                top: 10,
                width: 200,
                height: 200,
                backgroundColor: 'green',

                elevation: 1
            }}>
                {/* <Image style={{ height: 100, width: 100 }} source={require('../../../images/t2.jpg')} /> */}
            </View>
        </TouchableOpacity>
    }

    render() {
        return (
            <View>
                {this.renderLogin()}
                {this.renderRegister()}
            </View>
        );
    }
}

export default test;