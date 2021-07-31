import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { ScrollView, View, Text, Image, Button, StyleSheet, ImageBackground } from 'react-native';
import { pxToDp } from '../../utils/stylesKits';
import FlipCard from 'react-native-flip-card';

class index extends Component {

    constructor(props) {
        super(props)


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
                        {arr.map(item => (
                            <View key={item.id}>
                                {/* <Image style={{ width: 50, height: 50 }} source={{ uri: item.imgurl }}></Image>
                                        <View>
                                            <Text>
                                                {item.text}
                                            </Text>
                                        </View> */}
                                <View>
                                    <FlipCard
                                        style={styles.card}
                                        friction={6}
                                        perspective={1000}
                                        flipHorizontal={true}
                                        flipVertical={false}
                                        flip={false}
                                        clickable={true}
                                        onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
                                    >
                                        {/* Face Side */}
                                        <View style={[styles.face]}>
                                            {/* <ImageBackground style={{ height: pxToDp(140), width: '100%', justifyContent: 'center', alignItems: 'center' }} imageStyle={{ borderRadius: pxToDp(20) }} source={{ uri: "https://img.mp.itc.cn/upload/20170419/bad415b399644347abc4e1d326425793" }} > */}
                                            <ImageBackground style={{ height: pxToDp(140), width: '100%', justifyContent: 'center', alignItems: 'center' }} imageStyle={{ borderRadius: pxToDp(20) }} source={{ uri: item.uriFace }} >

                                                {/* <Text style={{fontSize:pxToDp(32)}}>立夏</Text> */}
                                            </ImageBackground>
                                        </View>
                                        {/* Back Side */}
                                        <View style={[{ backgroundColor: '#D2DFD5', height: pxToDp(140), width: '100%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, styles.back]}>
                                            {/* <Text style={{}}></Text> */}
                                            {/* <Image style={{width:'100%',height:'100%'}} source={{uri:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs16.sinaimg.cn%2Fmw690%2F00688vlQzy759KVVTUX6f&refer=http%3A%2F%2Fs16.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629551057&t=70fcff7dd4c737c7460e23d49b8c8247'}}></Image> */}
                                            <Image style={{ width: '100%', height: '100%' ,borderRadius:pxToDp(20)}} source={{ uri: item.uriBack }}></Image>
                                            {/* <Button title='查看更多' onPress={() => this.context.navigate("Talk")}></Button> */}
                                        </View>
                                    </FlipCard>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(8) }}>
                                        <Text style={{ fontSize: pxToDp(28), fontWeight: 'bold' }}>{item.title}</Text>
                                        <View style={{ marginTop: pxToDp(8) }}>
                                            <Text style={{ fontSize: pxToDp(16) }}>宜饮：{item.teaname}</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: pxToDp(8) }}>
                                        <Text style={{ fontSize: pxToDp(16) }}>
                                            &emsp;&emsp;{item.recommend}
                                        </Text>
                                    </View>
                                    <View style={{ marginTop: pxToDp(8) }}>
                                        <Text style={{ fontSize: pxToDp(16) }}>
                                            {item.teaname}的功效与作用:
                                        </Text>
                                        <Text style={{ fontSize: pxToDp(16) }}>
                                            &emsp;&emsp;{item.textline1}
                                        </Text>
                                        <Text style={{ fontSize: pxToDp(16) }}>
                                            &emsp;&emsp; {item.textline2}
                                        </Text>
                                        <Text style={{ fontSize: pxToDp(16) }}>
                                            &emsp;&emsp;{item.textline3}
                                        </Text>
                                        <Text style={{ fontSize: pxToDp(16) }}>
                                            &emsp;&emsp;{item.textline4}
                                        </Text>
                                        <Text style={{ fontSize: pxToDp(16) }}>
                                            &emsp;&emsp;{item.textline5}
                                        </Text>
                                    </View>
                                </View>
                                {/* [{imgurl:'',text:''}] */}
                            </View>
                        ))}

                    </ScrollView>
                    <Button title="返回" onPress={toggleModalProps} />
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
});

export default index;