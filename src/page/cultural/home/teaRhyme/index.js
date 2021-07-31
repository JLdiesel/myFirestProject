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
                // stickyHeaderIndices={[0]}
                >
                    {/* 搜索栏 */}
                    {/* <Nav /> */}
                    {/* 活动图*/}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20) }}>
                        <Image style={{ width: '100%', height: pxToDp(120), borderRadius: pxToDp(10) }} source={require('../../../../images/cha1.jpg')}></Image>
                    </View>
                    {/* 至心茶道 */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20), borderWidth: 1, borderColor: '#ddd', height: pxToDp(205), alignItems: 'center' }}>
                        <View style={{ width: '96%' }}>
                            <View style={{ flexDirection: 'row', marginTop: pxToDp(4) }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>至心茶道</Text>
                                <View style={{ flex: 1 }}></View>
                                <Icon name="arrow-right" size={20} color={'#bbb'} />
                            </View>
                            <ScrollView
                                horizontal={true} // 横向
                                showsHorizontalScrollIndicator={false}
                            // style={{ marginTop: pxToDp(10) }}
                            >
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', height: pxToDp(165), }}>
                                    <View style={{ width: pxToDp(220), justifyContent: 'center', marginRight: pxToDp(10) }}>
                                        <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                            <ImageBackground style={{ width: pxToDp(220), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={require('../../../../images/cha4.jpg')}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                    <Icon name="earphones" size={16} color={'white'} />
                                                    <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>2w</Text>
                                                </View>
                                            </ImageBackground>
                                            <View style={{ margin: pxToDp(5), }} >
                                                <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>静品茶诗</Text>
                                                <Text numberOfLines={1}  >《静品茶诗》是一本由大益茶道院主编、中国书店出版的有声有色的图书，书中精选中国历代茶诗中的66首经典作品，进行介绍于赏析。这些作品既具有丰富的文化内涵，又具有较高的文学性和哟属性，值得广大茶人和一般读者阅读、欣赏和研究。</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: pxToDp(220), justifyContent: 'center', marginRight: pxToDp(10) }}>
                                        <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                            <ImageBackground style={{ width: pxToDp(220), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={require('../../../../images/cha2.jpg')}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                    <Icon name="earphones" size={16} color={'white'} />
                                                    <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>2w</Text>
                                                </View>
                                            </ImageBackground>
                                            <View style={{ margin: pxToDp(5), }} >
                                                <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>茶的古往今来</Text>
                                                <Text numberOfLines={1} >自古以来，茶的世界精彩纷呈。云品说带您走进茶的世界，品味茶，了解茶的历史发展，品味茶的古往今来。</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: pxToDp(220), justifyContent: 'center', marginRight: pxToDp(10) }}>
                                        <TouchableOpacity style={{ backgroundColor: '#eee', borderTopRightRadius: pxToDp(10), borderTopLeftRadius: pxToDp(10) }}>
                                            <ImageBackground style={{ width: pxToDp(220), height: pxToDp(110), alignItems: 'flex-end' }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={require('../../../../images/cha3.jpg')}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(10), backgroundColor: 'rgba(28,28,28,0.5)', width: pxToDp(60), marginTop: pxToDp(6), padding: pxToDp(1) }}>
                                                    <Icon name="earphones" size={16} color={'white'} />
                                                    <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>2w</Text>
                                                </View>
                                            </ImageBackground>
                                            <View style={{ margin: pxToDp(5), }} >
                                                <Text numberOfLines={2} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>青年茶馆</Text>
                                                <Text numberOfLines={1}  >万丈红尘三杯酒，千秋大业一壶茶。好书，像茶一样香，小墨与你慢慢道来。</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    {/* 散文 */}
                    <View>
                        <View style={{ height: pxToDp(100), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>
                            <View style={{ width: '28%', height: pxToDp(100), }}>
                                <Image style={{ width: pxToDp(98), height: pxToDp(98), borderTopLeftRadius: pxToDp(10), borderBottomLeftRadius: pxToDp(10) }} source={require("../../../../images/cha8.jpg")}></Image>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderRadius: pxToDp(10), width: '68%', height: pxToDp(100), borderBottomColor: 'gray', padding: pxToDp(12), marginLeft: pxToDp(-12) }}>
                                <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>小茶约起来</Text>
                                <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>小茶约起来是一个以播客为主的茶事分享小会，在这里可以了解到更多我们在茶这件事情上，踩过的雷、跨过的坑、学到的干货，以及体验到的美好~</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Icon name="control-play" size={12} color={'black'} />
                                    <Text>96.7万</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: pxToDp(100), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>
                            <View style={{ width: '28%', height: pxToDp(100), }}>
                                <Image style={{ width: pxToDp(98), height: pxToDp(98), borderTopLeftRadius: pxToDp(10), borderBottomLeftRadius: pxToDp(10) }} source={require("../../../../images/cha9.jpg")}></Image>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderRadius: pxToDp(10), width: '68%', height: pxToDp(100), borderBottomColor: 'gray', padding: pxToDp(12), marginLeft: pxToDp(-12) }}>
                                <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>茶姐谈养生</Text>
                                <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>收听茶姐，了解更多和茶有关的健康小贴士</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Icon name="control-play" size={12} color={'black'} />
                                    <Text>96.7万</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height: pxToDp(100), flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>
                            <View style={{ width: '28%', height: pxToDp(100), }}>
                                <Image style={{ width: pxToDp(98), height: pxToDp(98), borderTopLeftRadius: pxToDp(10), borderBottomLeftRadius: pxToDp(10) }} source={require("../../../../images/cha10.jpg")}></Image>
                            </View>
                            <View style={{ borderBottomWidth: 1, borderTopWidth: 1, borderRightWidth: 1, borderRadius: pxToDp(10), width: '68%', height: pxToDp(100), borderBottomColor: 'gray', padding: pxToDp(12), marginLeft: pxToDp(-12) }}>
                                <Text style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>诗茶一味</Text>
                                <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>“诗”是心悟，“茶”是物质的灵芽，“一味”就是心与茶、心与心的相通。中国诗茶文化精神概括为“正、清、和、雅”。</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                    <Icon name="control-play" size={12} color={'black'} />
                                    <Text>96.7万</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* 匠人说茶 */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20), height: pxToDp(380), alignItems: 'center' }}>
                        <View style={{ width: '96%' }}>
                            <View style={{ flexDirection: 'row', marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>匠人说茶</Text>
                                <View style={{ flex: 1 }}></View>
                                <TouchableOpacity onPress={() => this.context.navigate("Talk")}  >
                                    <Icon name="arrow-right" size={20} color={'#bbb'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '100%', height: pxToDp(340) }}>
                                <View style={{ height: '60%', }}>
                                    <View style={{ height: '85%' }}>
                                        <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', }} imageStyle={{ borderRadius: pxToDp(20) }} source={require('../../../../images/cha12.jpg')}>
                                            <Image source={require('../../../../images/1.png')} style={{ width: pxToDp(60), height: pxToDp(60), opacity: 0.8 }}></Image>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ height: '15%', }}>
                                        <Text style={{ fontSize: pxToDp(16) }}>
                                            茶味茶舍茶知识分享计划
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ height: '40%', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ width: '48%', height: '100%', }}>
                                        <View style={{ height: '85%' }}>
                                            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', }} imageStyle={{ borderRadius: pxToDp(20) }} source={require('../../../../images/cha6.jpg')}>
                                                <Image source={require('../../../../images/1.png')} style={{ width: pxToDp(60), height: pxToDp(60), opacity: 0.8 }}></Image>
                                            </ImageBackground>
                                        </View>
                                        <View style={{ height: '15%', }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16) }}>
                                                匠人|体现喝茶逼格的正确器物,美到炸裂
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '48%', height: '100%' }}>
                                        <View style={{ height: '85%' }}>
                                            <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', }} imageStyle={{ borderRadius: pxToDp(20) }} source={require('../../../../images/cha7.jpg')}>
                                                <Image source={require('../../../../images/1.png')} style={{ width: pxToDp(60), height: pxToDp(60), opacity: 0.8 }}></Image>
                                            </ImageBackground>
                                        </View>
                                        <View style={{ height: '15%', }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16) }}>
                                                制茶匠人:我的一生只做一件事
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* 每日小贴士 */}
                    <View style={{ borderWidth: 1, margin: pxToDp(8), borderRadius: pxToDp(20), height: pxToDp(215), alignItems: 'center', marginBottom: pxToDp(28) }}>
                        <View style={{ width: '96%' }}>
                            <View style={{ flexDirection: 'row', marginTop: pxToDp(4) }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>每日小贴士</Text>
                                <View style={{ flex: 1 }}></View>
                                {/* <Icon name="arrow-right" size={24} color={'#bbb'} /> */}
                            </View>
                            <View style={{ width: '100%', height: pxToDp(170) }}>
                                <View >
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(5) }}>
                                        <Icon1 name="play-circle-outline" size={24} color={'#aaa'} />
                                        <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(4) }}>
                                            口干口苦牙龈疼，夏季胃火怎么调？
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(5) }}>
                                        <Icon1 name="play-circle-outline" size={24} color={'#aaa'} />
                                        <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(4) }}>
                                            喝浓茶真的可以解酒吗？
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(5) }}>
                                        <Icon1 name="play-circle-outline" size={24} color={'#aaa'} />
                                        <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(4) }}>
                                            你知道吗，经常喝茶能促进健康！
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(5) }}>
                                        <Icon1 name="play-circle-outline" size={24} color={'#aaa'} />
                                        <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(4) }}>
                                            心血管系统不好的人为什么不能喝浓茶？
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: pxToDp(5) }}>
                                        <Icon1 name="play-circle-outline" size={24} color={'#aaa'} />
                                        <Text style={{ fontSize: pxToDp(16), marginLeft: pxToDp(4) }}>
                                            关于茶，这些你一定要知道！
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: pxToDp(10) }}>
                                    <Text style={{ fontSize: pxToDp(16) }}>查看全部</Text>
                                    <Icon1 name="navigate-next" size={18} color={'#bbb'} />
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