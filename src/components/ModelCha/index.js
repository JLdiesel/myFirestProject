import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { ScrollView, View, Text, Image, Button, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { pxToDp } from '../../utils/stylesKits';
import MyButton from '../MyButton/index';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window');

class index extends Component {


    render() {

        const { isModalVisible, toggleModalProps, arr } = this.props
        // console.log(arr);
        return (

            <Modal
                testID={'modal'}
                isVisible={isModalVisible}
                // isVisible={this.isVisible()}
                backdropColor="#B4B3DB"
                backdropOpacity={0.8}
                onBackdropPress={toggleModalProps}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}
                scrollOffsetMax={400 - 300} // content height - ScrollView height
                propagateSwipe={true}//是否可滑动
            >
                <View style={{ backgroundColor: '#eee', borderRadius: 20, padding: 10 }}>
                    <ScrollView>
                        <View>
                            <View style={{ padding:pxToDp(8)}}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', margin: pxToDp(10) }} >
                                    <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>种树秘籍</Text>
                                </View>
                                <View style={{ marginBottom: pxToDp(8) }}>
                                    <Text style={{ fontSize: pxToDp(16) }}>自植树节起，来茶余可免费领取茶树</Text>
                                </View>
                                <View style={{ marginBottom: pxToDp(8) }}>
                                    <Text style={{ fontSize: pxToDp(16) }}>选择喜欢的茶树种类并进行播种、培育</Text>
                                </View>
                                <View style={{ marginBottom: pxToDp(8) }}>
                                    <Text style={{ fontSize: pxToDp(16) }}>耐心等待茶树萌发、成长、开花、最终结实采摘</Text>
                                </View>
                                <View style={{ marginBottom: pxToDp(8) }}>
                                    <Text style={{ fontSize: pxToDp(16) }}>完成茶树的茶叶采摘，即可免费获得种植茶树的包邮茶礼1-5盒</Text>
                                </View>
                                <View style={{ marginBottom: pxToDp(8) }}>
                                    <Text style={{ fontSize: pxToDp(16) }}>常来茶余浇水/购物/使用，都可以获取次数助力茶树成长哦！</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MyButton style={{ width: pxToDp(40), height: pxToDp(40) }} title="发布" onPress={toggleModalProps} >
                            <Icon1 name="close" size={20} color={'black'} />
                        </MyButton>
                    </View>
                </View>
            </Modal>

        );
    }
}
const styles = StyleSheet.create({
    inputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 245,
        height: 50,
        backgroundColor: 'transparent',
        borderColor: 'rgba(171, 190, 215, 0.56)',
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 20,
    },
    icon: {
        width: 16,
        height: 16,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon1: {
        width: 35,
        height: 30,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 100,
        backgroundColor: 'pink'
    },
    textInput: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 1,
        width: 200,
        height: 45,
        fontSize: 18,
        color: '#3f4b48',
    },
    Box: {
        marginRight: 10,
        marginBottom: 10,
        marginTop: pxToDp(16)
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    box1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tx: {
        height: 100,
        width,
    },
    txt: {
        width: 300,
        height: 200,
        backgroundColor: 'white',
        borderWidth: 3,
    },
    btn: {
        backgroundColor: 'green',
    },
});

export default index;