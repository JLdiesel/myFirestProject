import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { ScrollView, View, Text, Image, Button, StyleSheet, TouchableHighlight,ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { pxToDp } from '../../utils/stylesKits';
import FlipCard from 'react-native-flip-card';
import { Input } from 'react-native-elements/dist/input/Input';
import { TextInput } from 'react-native-gesture-handler';
import RichTextView from '../RichTextView/index';
import ImagePicker from 'react-native-image-crop-picker';
import MyButton from '../MyButton/index';
import MyNav from '../MyNav/index';
import { NavigationContext } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fayan: '',
            arr: [],
            username: '',
            modalVisible: false,
            showTypePop: false,
        };
    }

    tianjia() {
        if (this.state.arr != null && this.state.arr.length >= 9) {
            //这里的判断根据所传图片张数定
            return;
        } else {
            return (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this._openPicker()}>
                    <Image source={require("../../images/addimg.png")} style={{ width: 100, height: 100 }} />
                </TouchableOpacity>
            );
        }
    }
    //打开本地图册
    _openPicker() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            multiple: true,
            maxFiles: 9,
        }).then(image => {
            console.log('imag', image);
            this.setState({
                arr: image,
            });
            //     const {arr} = this.state;
            //    arr.push(image);
            //     this.setState({arr})
            //     console.log('arr',arr[1])
        });

    }
    static contextType = NavigationContext;

    _openTypeDialog() {
        this.setState({ showTypePop: !this.state.showTypePop });
    }
    _changeModal() {
        this.setState({ modalVisible: !this.state.modalVisible });
    }
    //打开相册
    chooeseHeadImg = async () => {
        // 获取到 选中后的图片
        const image = await ImagePicker.openPicker({
            width: pxToDp(300),
            height: pxToDp(400),
            cropping: true,
        });
    };
    //打开相机
    _openCamera() {
        ImagePicker.openCamera({
            width: pxToDp(300),
            height: pxToDp(400),
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

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
                <View style={{ flex: 1, backgroundColor: '#eee', borderRadius: 20, padding: 10 }}>
                    <ScrollView>
                        {/* <MyNav title='个人信息验证' /> */}
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: pxToDp(8) }}>
                            <Text style={{ fontSize: pxToDp(22), fontWeight: 'bold' }}>个人信息验证</Text>
                        </View>
                        <View>
                            <View style={{ marginTop: 4 }}>
                                <View style={{ marginBottom: pxToDp(16) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', height: pxToDp(24) }}>
                                        <Text style={{ color: '#50935E' }}>请您如实准确填写本人信息，否则将认证失败</Text>
                                    </View>
                                    <Input
                                        rightIcon={<Text style={{ color: 'gray' }}>请输入身份证上姓名</Text>}
                                        leftIcon={<Text style={{ fontSize: pxToDp(16) }}>*姓名</Text>}
                                    />
                                    <Input
                                        rightIcon={<Text style={{ color: 'gray' }}>请输入身份证号码</Text>}
                                        leftIcon={<Text style={{ fontSize: pxToDp(16) }}>*身份证</Text>}
                                    />
                                    <TouchableOpacity onPress={() => this._changeModal()} style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: pxToDp(22), fontWeight: 'bold' }}>身份证人像面照片</Text>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Image style={{ width: pxToDp(200), height: pxToDp(150) }} source={require('../../images/s3.png')}></Image>
                                        </View>
                                        <Text style={{ color: 'gray', marginTop: pxToDp(-8), marginBottom: pxToDp(8) }}>请上传身份证人像面照片</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ alignItems: 'center' }}>
                                        <Text style={{ fontSize: pxToDp(22), fontWeight: 'bold' }}>身份证国徽面照片</Text>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Image style={{ width: pxToDp(200), height: pxToDp(150) }} source={require('../../images/s4.png')}></Image>
                                        </View>
                                        <Text style={{ color: 'gray', marginTop: pxToDp(-8), marginBottom: pxToDp(8) }}>请上传身份证国徽面照片</Text>
                                    </TouchableOpacity>
                                    <View>
                                        {/* Modal组件实现弹窗显示图片选择 */}
                                        <Modal
                                            visible={this.state.modalVisible}
                                            animationType={'fade'}
                                            transparent={true}
                                            onRequestClose={() => this.onRequestClose()}>
                                            <View style={s.alertBackground}>
                                                <View style={s.alertBox}>
                                                    <Text style={s.modalTitle}>请选择</Text>
                                                    <TouchableHighlight
                                                        underlayColor={'#F5F5F5'}
                                                        onPress={this._openCamera}>
                                                        <Text style={s.modalItem}>打开相机</Text>
                                                    </TouchableHighlight>
                                                    <TouchableHighlight
                                                        underlayColor={'#F5F5F5'}
                                                        onPress={this.chooeseHeadImg}>
                                                        <Text style={s.modalItem}>打开相册</Text>
                                                    </TouchableHighlight>
                                                    <TouchableHighlight
                                                        underlayColor={'#F5F5F5'}
                                                        onPress={() => this._changeModal()}>
                                                        <Text style={s.modalItem}>取消</Text>
                                                    </TouchableHighlight>
                                                </View>
                                            </View>
                                        </Modal>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', height: pxToDp(80), padding: pxToDp(8) }}>
                                        <Text style={{ color: 'gray' }}>根据相关政策法规要求，开头茶余直播间需要进行实名认证。实名认证不涉及金钱账户，信息严格保密。</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MyButton style={{ width: pxToDp(160), height: pxToDp(40), }} title="发布" onPress={toggleModalProps} >
                            <Text>立即认证</Text>
                        </MyButton>
                    </View>
                </View>
            </Modal>

        );
    }
}

const s = StyleSheet.create({
    avatar: {
      height: pxToDp(100),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#eee',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    basic: {
      height: pxToDp(100),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    button: {
      marginTop: pxToDp(20),
      marginLeft: pxToDp(5),
    },
    alertBackground: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 如果要遮罩要显示成半透明状态，这里一定要设置，reba中的a控制透明度，取值在 0.0 ～ 1.0 范围内。
    },
  
    alertBox: {
      width: pxToDp(300),
      height: pxToDp(250),
      backgroundColor: 'white',
      justifyContent: 'space-evenly',
      borderRadius: pxToDp(30),
    },
    modalTitle: {
      width: '70%',
      fontSize: pxToDp(25),
      alignSelf: 'center',
      textAlign: 'center',
      borderBottomWidth: 1.1,
      borderBottomColor: '#AFAFAF',
    },
    modalItem: {
      fontSize: pxToDp(18),
      alignSelf: 'center',
    },
  });
  

export default index;