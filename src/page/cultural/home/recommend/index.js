import React, { Component } from 'react';
import { ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native-animatable';
import Nav from '../../../../components/Nav/Nav';
import { Carousel } from '../../../../components/teaset';
import { pxToDp } from '../../../../utils/stylesKits';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { NavigationContext } from "@react-navigation/native";

class index extends Component {

    static contextType = NavigationContext;

    render() {
        return (
            <View>
                <ScrollView
                    stickyHeaderIndices={[0]}
                >
                    {/* 搜索栏 */}
                    <Nav />
                    {/* 轮播图 */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20) }}>
                        <Carousel control style={{ height: pxToDp(200) }}>
                            <Image style={{ width: "100%", height: pxToDp(200), borderRadius: pxToDp(20) }} resizeMode='cover' source={{ uri: 'https://pics6.baidu.com/feed/c9fcc3cec3fdfc03ddae5506d5c67e93a6c226be.jpeg?token=a6d8ca00094b3e299f215c357980d931&s=96D513DE1AA58AC00A066EAD0300800E' }} />
                            <Image style={{ width: "100%", height: pxToDp(200), borderRadius: pxToDp(20) }} resizeMode='cover' source={{ uri: 'https://pics0.baidu.com/feed/8694a4c27d1ed21be2abff78a79724c353da3fca.jpeg?token=b8aa2e1742f73839e443f1f98b67791c&s=F6B114C14472ADC45090C9240300F043' }} />
                            <Image style={{ width: "100%", height: pxToDp(200), borderRadius: pxToDp(20) }} resizeMode='cover' source={{ uri: 'https://pics4.baidu.com/feed/314e251f95cad1c8d2468e577bc79e0ecb3d51c5.jpeg?token=b6490ae2f8a743ca66200f1b95ab8e6f&s=74921ED4909BEFC64C2BD4F30300800B' }} />
                            <Image style={{ width: "100%", height: pxToDp(200), borderRadius: pxToDp(20) }} resizeMode='cover' source={{ uri: 'https://pics0.baidu.com/feed/4e4a20a4462309f7c478732676f7f5f4d6cad6f4.jpeg?token=3923ff9d6d538d705638735232fb8e02&s=58B2BAF14E20C6D85E21EC360300D011' }} />
                        </Carousel>
                    </View>
                    {/* 茶馆招牌 */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20), borderWidth: 1, borderColor: '#ddd', height: pxToDp(190), alignItems: 'center' }}>
                        <View style={{ width: '96%' }}>
                            <View style={{ flexDirection: 'row', marginTop: pxToDp(4) }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>茶馆招牌</Text>
                                <View style={{ flex: 1 }}></View>
                                <Icon name="arrow-right" size={20} color={'#bbb'} />
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', height: pxToDp(150) }}>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.context.navigate("MusicPlayer")} style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={require('../../../../images/tea1.jpg')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>茶·茶鼓书简</Text>
                                            {/* <Text  numberOfLines={1}  >不要以为喝茶都是老人家所做的事情，茶是文化的浓缩，也是文化的集结，古人将文化凝聚在茶中，而后人也能从茶中了解到所有的文化，这是难得学出来的，这是被“熏”出来的！</Text> */}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={require('../../../../images/tea2.png')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>1.2w</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>茶言茶语</Text>
                                            {/* <Text  numberOfLines={1}  >不要以为喝茶都是老人家所做的事情，茶是文化的浓缩，也是文化的集结，古人将文化凝聚在茶中，而后人也能从茶中了解到所有的文化，这是难得学出来的，这是被“熏”出来的！</Text> */}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={require('../../../../images/tea3.png')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>2w</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>西湖茶馆</Text>
                                            {/* <Text  numberOfLines={1}  >不要以为喝茶都是老人家所做的事情，茶是文化的浓缩，也是文化的集结，古人将文化凝聚在茶中，而后人也能从茶中了解到所有的文化，这是难得学出来的，这是被“熏”出来的！</Text> */}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 猜你喜欢 */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20), height: pxToDp(400), alignItems: 'center' }}>
                        <View style={{ width: '96%' }}>
                            <View style={{ flexDirection: 'row', marginTop: pxToDp(4) }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>猜你喜欢</Text>
                                <View style={{ flex: 1 }}></View>
                                <Icon name="arrow-right" size={20} color={'#bbb'} />
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', height: pxToDp(180) }}>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderRadius: pxToDp(10) }} source={require('../../../../images/r6.jpg')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="social-youtube" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>4318</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(8), }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>苦难辉煌-解读中共早期革命史</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fart.people.com.cn%2FNMediaFile%2F2014%2F1226%2FMAIN201412260936000191423185072.jpg&refer=http%3A%2F%2Fart.people.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629769659&t=2e1230d0cd87765b91af051769f12434' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>5642</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(8), }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>回望伟人昔日传奇的成功之路</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderRadius: pxToDp(10) }} source={require('../../../../images/4.jpg')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>953</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(8), }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>红色文物100,讲述百年风雨征程</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', height: pxToDp(180) }}>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fad2e7af239b7daf44d78c6307c313e005e48432c2a830e-E8CM9Z_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629770805&t=f3ffae7bfbb6faf7132ba0d6b600d286' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="social-youtube" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>1.3w</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(8), }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>情绪中怪物 | EMO现场</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F995ce06ed209d154500576bc753136412355a8c11d079-IM755l_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629771089&t=fbeb14f920ae00e5096c97706a17b154' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>6543</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(8), }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>Acoustic | 人生最美是清欢</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F27%2F20181227224104_YxPRN.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629771230&t=37109c2ff1ca5c18fb21c3c7821a146b' }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="social-youtube" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>3347</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(8), }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>旋律说唱 | 沉浸Rapper柔情思绪</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 随机 */}
                    <View style={{marginBottom:pxToDp(20)}}>
                        <View style={{ height: pxToDp(120), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '28%', height: pxToDp(100), }}>
                                <Image style={{ width: pxToDp(100), height: pxToDp(100), borderRadius: pxToDp(10) }} source={require("../../../../images/r9.jpg")}></Image>
                            </View>
                            <View style={{ width: '68%', height: pxToDp(100), borderBottomWidth: 1, borderBottomColor: 'gray', padding: pxToDp(6) }}>
                                <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>自然睡眠｜水系疗愈</Text>
                                <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>与平庸的你,谈谈如何度过不悔的青春</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Icon name="control-play" size={12} color={'black'} />
                                    <Text>96.7万</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: pxToDp(120), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '28%', height: pxToDp(100), }}>
                                <Image style={{ width: pxToDp(100), height: pxToDp(100), borderRadius: pxToDp(10) }} source={require("../../../../images/r10.jpg")}></Image>
                            </View>
                            <View style={{ width: '68%', height: pxToDp(100), borderBottomWidth: 1, borderBottomColor: 'gray', padding: pxToDp(6) }}>
                                <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>有事吗？｜What About Hymn?</Text>
                                <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>与平庸的你,谈谈如何度过不悔的青春</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Icon name="control-play" size={12} color={'black'} />
                                    <Text>96.7万</Text>
                                </View>
                            </View>
                        </View>

                        {/* 大图视频 */}
                        <View style={{ height: pxToDp(220), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '96%', height: '100%', }}>
                                <TouchableOpacity onPress={() => this.context.navigate("VideoPlayer")} >
                                    <ImageBackground style={{ width: '100%', height: pxToDp(220), }} imageStyle={{ borderRadius: pxToDp(10) }} source={require('../../../../images/r14.jpg')}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', height: '76%' }}>
                                            <Image source={require('../../../../images/1.png')} style={{ width: pxToDp(60), height: pxToDp(60) }}></Image>
                                        </View>
                                        <View style={{ backgroundColor: '#D2DFD5', opacity: 0.8, width: '100%', height: '24%', borderRadius: pxToDp(10), }}>
                                            <View style={{ margin: pxToDp(10) }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: pxToDp(16), width: '96%' }}>
                                                        过往-赵海洋
                                                    </Text>
                                                    <TouchableOpacity>
                                                        <Icon1 name="close" size={18} color={'black'} />
                                                    </TouchableOpacity>

                                                </View>

                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Icon name="control-play" size={14} color={'black'} />
                                                    <Text style={{ marginLeft: pxToDp(4) }}>96.7万</Text>
                                                    <View style={{ width: pxToDp(20) }}></View>
                                                    <Icon name="clock" size={14} color={'black'} />
                                                    <Text style={{ marginLeft: pxToDp(4) }}>02:12</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ height: pxToDp(120), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '28%', height: pxToDp(100), }}>
                                <Image style={{ width: pxToDp(100), height: pxToDp(100), borderRadius: pxToDp(10) }} source={require("../../../../images/r11.jpg")}></Image>
                            </View>
                            <View style={{ width: '68%', height: pxToDp(100), borderBottomWidth: 1, borderBottomColor: 'gray', padding: pxToDp(6) }}>
                                <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>清晨的早风</Text>
                                <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>与平庸的你,谈谈如何度过不悔的青春</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Icon name="control-play" size={12} color={'black'} />
                                    <Text>96.7万</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: pxToDp(120), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '28%', height: pxToDp(100), }}>
                                <Image style={{ width: pxToDp(100), height: pxToDp(100), borderRadius: pxToDp(10) }} source={require("../../../../images/r12.jpg")}></Image>
                            </View>
                            <View style={{ width: '68%', height: pxToDp(100), borderBottomWidth: 1, borderBottomColor: 'gray', padding: pxToDp(6) }}>
                                <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>古风古韵</Text>
                                <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>与平庸的你,谈谈如何度过不悔的青春</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Icon name="control-play" size={12} color={'black'} />
                                    <Text>96.7万</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default index;