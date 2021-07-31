import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { pxToDp } from '../../utils/stylesKits';
import FlipCard from 'react-native-flip-card';
import { NavigationContext } from "@react-navigation/native";
import MyNav from '../../components/MyNav/index';
class index extends Component {
    static contextType = NavigationContext;

    render() {
        return (
            <ScrollView
            stickyHeaderIndices={[0]}
            >
                <MyNav title='红迹路线'/>
                <View style={{ width: '100%', height: pxToDp(2500) }}>
                    <ImageBackground style={{ width: '100%', height: pxToDp(2500), alignItems: 'center' }} source={require('../../images/下载.jpg')}>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ marginTop: pxToDp(280) }}>
                                <Text style={{ fontSize: pxToDp(18), color: 'white', fontWeight: 'bold' }}>“生态湖州”</Text>
                            </View>
                            <View style={{ width: '80%', height: pxToDp(150), marginTop: pxToDp(8), borderRadius: pxToDp(10), flexDirection: 'row', justifyContent: 'space-around' }}>
                                <View style={{ alignItems: 'center', }}>
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
                                        <View style={{ flexDirection: 'row', }}>
                                            <View>
                                                <Image style={{ width: pxToDp(140), height: pxToDp(100), borderRadius: pxToDp(10), marginRight: pxToDp(10), marginLeft: pxToDp(-10) }} source={{ uri: 'https://t10.baidu.com/it/u=1582209066,3239216116&fm=173&app=25&f=JPEG?w=640&h=420&s=B88C21D06672F1D65CA6DA03030050DF' }}></Image>
                                                <TouchableOpacity onPress={() => this.context.navigate("Tabbar")}>
                                                    <View style={{ width: pxToDp(80), alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: '#D2DFD5', justifyContent: 'center', marginLeft: pxToDp(50), marginTop: pxToDp(10), }}>
                                                        <Text style={{ fontSize: pxToDp(16) }}>立即出发</Text>
                                                    </View>
                                                </TouchableOpacity>

                                            </View>
                                            <View style={{ width: pxToDp(175) }}>
                                                <Text style={{ fontSize: pxToDp(16) }}>文化茶旅线路</Text>
                                                <Text>这条线路以安吉白茶、长兴紫笋茶、德清莫干黄芽等产业带为基础，这里是800年大唐贡茶院所在地、茶圣陆羽著经之地、“两山”理论发源地，可以体验莫干山民国风情，看“一片叶子致富一方百姓”。</Text>
                                            </View>

                                        </View>
                                        {/* Back Side */}
                                        <View style={[{ height: pxToDp(160), width: '100%', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }, styles.back]}>
                                            <View style={{ width: '100%', padding: pxToDp(12) }}>
                                                <Text>日程安排：</Text>
                                                <Text>D1长兴:大唐贡茶院—摩崖石刻—安吉溪龙乡黄杜村万亩茶园→安吉鲁家村。</Text>
                                                <Text>D2安吉：“两山”发源地安吉余村—安吉中国白茶祖—美丽乡村安吉蔓塘里。</Text>
                                                <Text>D3安吉:中国宋茗茶博园--吴兴区妙西镇妙山村茶禅博物馆—德清游子问茶院；</Text>
                                                <Text>D4德清:莫干山民国风情街—德清云鹤山房茶书馆。</Text>
                                            </View>
                                        </View>
                                    </FlipCard>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </ScrollView>

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