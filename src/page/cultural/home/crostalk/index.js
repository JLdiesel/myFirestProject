import React, { Component } from 'react';
import { ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native-animatable';
import Nav from '../../../../components/Nav/Nav';
import { Carousel } from '../../../../components/teaset';
import { pxToDp } from '../../../../utils/stylesKits';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ImageFade from '../../../../components/ImageFade/index'
import Icon1 from 'react-native-vector-icons/MaterialIcons';

class index extends Component {
    render() {
        return (
            <View>
                <ScrollView
                // stickyHeaderIndices={[0]}
                >
                    {/* 搜索栏 */}
                    {/* <Nav /> */}
                    {/* 轮播图 */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20) }}>
                        <ImageFade
                            ref="ImageFade"
                            duration={800}
                            delay={3000}
                            style={{ width: "100%", height: pxToDp(200) }}>
                            <Image style={{ width: "100%", height: pxToDp(200), borderRadius: pxToDp(20) }} source={require("../../../../images/xi1.png")} />
                            <Image style={{ width: "100%", height: pxToDp(200), borderRadius: pxToDp(20) }} source={require("../../../../images/xi2.jpg")} />
                        </ImageFade>
                    </View>
                    {/* 热门必听 */}
                    <View style={{ margin: pxToDp(8), borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), borderColor: '#ddd', height: pxToDp(200), alignItems: 'center' }}>
                        <View style={{ width: '96%' }}>
                            <View style={{ flexDirection: 'row', marginBottom: pxToDp(8) }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>热门必听</Text>
                                <View style={{ flex: 1 }}></View>
                                <Icon name="arrow-right" size={20} color={'#bbb'} />
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', height: pxToDp(150), marginTop: pxToDp(8) }}>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={require('../../../../images/xi7.jpg')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>郭德纲：大话刘罗锅 | 高清完整版</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={require('../../../../images/xi8.jpg')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>白云黑土小品集</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={require('../../../../images/xi9.jpg')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>侯长喜相声 | 高清版</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 越剧 */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20), borderWidth: 1, borderColor: '#ddd', height: pxToDp(315), alignItems: 'center' }}>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <ImageBackground style={{ width: '100%', height: pxToDp(150), justifyContent: 'space-evenly' }} imageStyle={{ borderTopRightRadius: pxToDp(20), borderTopLeftRadius: pxToDp(20) }} source={require('../../../../images/xi3.jpg')}>
                                    <Text style={{ fontSize: pxToDp(20), color: 'white' }}>浙江越剧</Text>
                                    <View style={{ flexDirection: 'row', marginTop: pxToDp(10) }}>
                                        <Text style={{ fontSize: pxToDp(16), color: 'white' }}>查看更多</Text>
                                        <Icon1 name="navigate-next" size={18} color={'white'} />
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', height: pxToDp(150), marginTop: pxToDp(8) }}>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(60), borderTopLeftRadius: pxToDp(60), borderBottomLeftRadius: pxToDp(20), borderBottomRightRadius: pxToDp(20) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), justifyContent: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(60), borderTopRightRadius: pxToDp(60) }} source={require('../../../../images/xi5.jpg')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: '100%', marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>《梁祝》</Text>
                                            {/* <Text  numberOfLines={1}  >不要以为喝茶都是老人家所做的事情，茶是文化的浓缩，也是文化的集结，古人将文化凝聚在茶中，而后人也能从茶中了解到所有的文化，这是难得学出来的，这是被“熏”出来的！</Text> */}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(60), borderTopLeftRadius: pxToDp(60), borderBottomLeftRadius: pxToDp(20), borderBottomRightRadius: pxToDp(20) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), justifyContent: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(60), borderTopRightRadius: pxToDp(60) }} source={require('../../../../images/xi4.jpg')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: '100%', marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>《西厢记》</Text>
                                            {/* <Text  numberOfLines={1}  >不要以为喝茶都是老人家所做的事情，茶是文化的浓缩，也是文化的集结，古人将文化凝聚在茶中，而后人也能从茶中了解到所有的文化，这是难得学出来的，这是被“熏”出来的！</Text> */}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: pxToDp(110), justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(60), borderTopLeftRadius: pxToDp(60), borderBottomLeftRadius: pxToDp(20), borderBottomRightRadius: pxToDp(20) }}>
                                        <ImageBackground style={{ width: pxToDp(110), height: pxToDp(110), justifyContent: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(60), borderTopRightRadius: pxToDp(60) }} source={require('../../../../images/xi6.jpg')}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: '100%', marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                <Icon name="earphones" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                            <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>《黛玉葬花》</Text>
                                            {/* <Text  numberOfLines={1}  >不要以为喝茶都是老人家所做的事情，茶是文化的浓缩，也是文化的集结，古人将文化凝聚在茶中，而后人也能从茶中了解到所有的文化，这是难得学出来的，这是被“熏”出来的！</Text> */}
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 为你推荐 */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20), borderColor: '#ddd', alignItems: 'center', }}>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', marginBottom: pxToDp(10) }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>为你推荐</Text>
                                <View style={{ flex: 1 }}></View>
                                <Icon name="arrow-right" size={20} color={'#bbb'} />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: pxToDp(10) }}>
                                <View style={{ backgroundColor: '#eee', width: '48%', height: pxToDp(220), borderRadius: pxToDp(20) }}>
                                    <ImageBackground style={{ width: '100%', height: pxToDp(160), justifyContent: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(20), borderTopRightRadius: pxToDp(20) }} source={require('../../../../images/xi10.jpg')}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: '100%', marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                            <Icon name="earphones" size={16} color={'white'} />
                                            <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                        <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>笑海相声：学魔术（叶明珠|铁锤）</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#eee', width: '48%', height: pxToDp(220), borderRadius: pxToDp(20) }}>
                                    <ImageBackground style={{ width: '100%', height: pxToDp(160), justifyContent: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(20), borderTopRightRadius: pxToDp(20) }} source={require('../../../../images/xi11.jpg')}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: '100%', marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                            <Icon name="earphones" size={16} color={'white'} />
                                            <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                        <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>《梁山伯与祝英台》唱段全集（1953年电影版原声）</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: pxToDp(10) }}>
                                <View style={{ backgroundColor: '#eee', width: '48%', height: pxToDp(220), borderRadius: pxToDp(20) }}>
                                    <ImageBackground style={{ width: '100%', height: pxToDp(160), justifyContent: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(20), borderTopRightRadius: pxToDp(20) }} source={require('../../../../images/xi13.jpg')}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: '100%', marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                            <Icon name="earphones" size={16} color={'white'} />
                                            <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                        <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>《盘妻索妻》王君安李敏</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#eee', width: '48%', height: pxToDp(220), borderRadius: pxToDp(20) }}>
                                    <ImageBackground style={{ width: '100%', height: pxToDp(160), justifyContent: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(20), borderTopRightRadius: pxToDp(20) }} source={require('../../../../images/xi12.jpg')}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: '100%', marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                            <Icon name="earphones" size={16} color={'white'} />
                                            <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                        <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>笑海相声：踏雪寻梅（张叶挺|石三|周鋆|李俊杰）</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: pxToDp(10) }}>
                                <View style={{ backgroundColor: '#eee', width: '48%', height: pxToDp(220), borderRadius: pxToDp(20) }}>
                                    <ImageBackground style={{ width: '100%', height: pxToDp(160), justifyContent: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(20), borderTopRightRadius: pxToDp(20) }} source={require('../../../../images/xi14.jpg')}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: '100%', marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                            <Icon name="earphones" size={16} color={'white'} />
                                            <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ margin: pxToDp(5), alignItems: 'center', }} >
                                        <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>黄金搭档|欢欢喜喜听相声</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#eee', width: '48%', height: pxToDp(220), borderRadius: pxToDp(20) }}>
                                    <ImageBackground style={{ width: '100%', height: pxToDp(160), justifyContent: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(20), borderTopRightRadius: pxToDp(20) }} source={require('../../../../images/xi16.jpg')}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: '100%', marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                            <Icon name="earphones" size={16} color={'white'} />
                                            <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                        </View>
                                    </ImageBackground>
                                    <View style={{ margin: pxToDp(5), alignItems: 'center' }} >
                                        <Text numberOfLines={2} style={{ fontSize: pxToDp(16), }}>《西厢记》方亚芬钱惠丽张咏梅</Text>
                                    </View>
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