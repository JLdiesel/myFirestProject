import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { ScrollView, View, Text, Image, Button, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { pxToDp } from '../../utils/stylesKits';
import MyButton from '../MyButton/index';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { NavigationContext } from "@react-navigation/native";

const { height, width } = Dimensions.get('window');

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            products: [
                {
                    id: 1,
                    text: '绿茶',
                    imgUri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11955993823%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630223204&t=263b7a95f5feb11bf062ad62295791e6'
                },
                {
                    id: 2,
                    text: '乌龙茶',
                    imgUri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp3.itc.cn%2Fimages01%2F20200717%2F6c86684d2c6f4beaab494b034918ca4a.jpeg&refer=http%3A%2F%2Fp3.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630223237&t=a2e522b7c07ff62d1c7986146dfe03b3'
                },
                {
                    id: 3,
                    text: '红茶',
                    imgUri: 'https://img1.baidu.com/it/u=2067518190,4052892806&fm=26&fmt=auto&gp=0.jpg'
                }
            ],
            Select: false,
            activeTab: 1
        };

    }
    changeTab = (index) => {

        this.setState({ activeTab: index })
    }
    static contextType = NavigationContext;

    render() {

        const { isModalVisibles, toggleModalProps, arr } = this.props
        const { count, tabs, activeTab } = this.state;

        // console.log(arr);
        return (

            <Modal
                testID={'modal'}
                isVisible={isModalVisibles}
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
                <View style={{ backgroundColor: '#D2DFD5', borderRadius: 20, padding: 10 }}>
                    <ScrollView>
                        <View>
                            <View style={{ padding: pxToDp(8), }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', margin: pxToDp(10) }} >
                                    <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', marginBottom: pxToDp(10) }}>
                                        选一种自己喜欢的茶叶
                                    </Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ width: '100%', height: pxToDp(120), backgroundColor: 'white', borderRadius: pxToDp(16), marginBottom: pxToDp(8), justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                                        {this.state.products.map((item, index) => (
                                            <TouchableOpacity key={item.id} onPress={() => this.changeTab(index)} style={{ backgroundColor: (index === activeTab ? "#3CB371" : "#D2DFD5"),width:'30%',borderRadius:pxToDp(16) ,height:pxToDp(110)}}>
                                                <View style={{ width: '100%', height: pxToDp(100), borderRadius: pxToDp(16) }}>
                                                    <Image style={{ width: '100%', height: pxToDp(85), borderRadius: pxToDp(16), borderColor: 'orange', borderWidth: 3 }} source={{uri:item.imgUri}}></Image>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style={{ fontSize: pxToDp(16) }}>
                                                            {item.text}
                                                        </Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MyButton style={{ width: pxToDp(100), height: pxToDp(40) }} title="确认种植" onPress={toggleModalProps} >
                            <Text style={{ fontSize: pxToDp(16) }}>取消</Text>
                        </MyButton>
                        <MyButton style={{ width: pxToDp(100), height: pxToDp(40) }} title="确认种植" onPress={() => this.context.navigate("TeaHome")} >
                            <Text style={{ fontSize: pxToDp(16) }}>确认播种</Text>
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