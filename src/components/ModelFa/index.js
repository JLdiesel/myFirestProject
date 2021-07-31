import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { ScrollView, View, Text, Image, Button, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { pxToDp } from '../../utils/stylesKits';
import FlipCard from 'react-native-flip-card';
import { Input } from 'react-native-elements/dist/input/Input';
import { TextInput } from 'react-native-gesture-handler';
import RichTextView from '../RichTextView/index';
import ImagePicker from 'react-native-image-crop-picker';
import MyButton from '../MyButton/index';

const { height, width } = Dimensions.get('window');

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fayan: '',
            arr: [],
            username: '',
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
                        <View>
                            <View style={{ marginTop: 4 }}>
                                <View style={{marginBottom:pxToDp(16)}}>
                                    <RichTextView
                                        inputStyle={styles.inputStyle}
                                        placeholder="记录这一刻，分享每一天..."
                                        minHeight={255} // 最小高度,默认为100
                                        maxLength={255} // 最大长度,默认为100
                                        onChangeText={(inputValue) => {
                                            // let desPrizes = CommonMethod.filteremoji(inputValue, 1)//表情过滤机制
                                            // this.setState({ desPrizes: desPrizes })
                                        }}
                                        showCount={true} // 展示剩余文字, 默认为true
                                    />
                                </View>

                                {
                                    this.state.arr.map((v, k) => {
                                        return (
                                            <View style={styles.Box} key={k}>
                                                <TouchableOpacity>
                                                    <Image style={{ height: (width - 40) / 3, width: (width - 60) / 3 }} source={{ uri: v.path }} />
                                                </TouchableOpacity>

                                            </View>
                                        );
                                    })
                                }
                                {this.tianjia()}
                                {/* <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => this._openPicker()}>
                                    <View style={{ marginTop: pxToDp(8) }}>
                                        <Image style={{ width: pxToDp(100), height: pxToDp(100) }} source={require("../../images/addimg.png")}></Image>
                                    </View>
                                </TouchableOpacity> */}

                            </View>
                        </View>
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <MyButton style={{ width: pxToDp(80), height: pxToDp(40) }} title="发布" onPress={toggleModalProps} >
                            <Text>发布</Text>
                        </MyButton>
                        <MyButton style={{ width: pxToDp(80), height: pxToDp(40) }} title="取消" onPress={toggleModalProps} >
                            <Text>取消</Text>
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