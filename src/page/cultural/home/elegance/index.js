import React, { Component } from 'react';
import { ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native-animatable';
import Nav from '../../../../components/Nav/Nav';
import { Carousel } from '../../../../components/teaset';
import { pxToDp } from '../../../../utils/stylesKits';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ImageFade from '../../../../components/ImageFade/index'
import Icon1 from 'react-native-vector-icons/Ionicons';
import SnapCarousel from '../../../../components/SnapCarousel/index';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Danmu from '../../../../components/danmu/index';
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
                    {/* 轮播图 */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20) }}>
                        <Carousel control style={{ height: pxToDp(200) }}>
                            <Image style={{ width: "100%", height: pxToDp(180), borderRadius: pxToDp(20) }} resizeMode='cover' source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0328%252Fc7b641a0p00qqol8g002uc000hs00a0g.png%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629733847&t=95f3f3780eb3e238f40f418f5467001f' }} />
                            <Image style={{ width: "100%", height: pxToDp(180), borderRadius: pxToDp(20) }} resizeMode='cover' source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx1.sinaimg.cn%2Flarge%2F007YAdaely1gryzq33ryvj31hc0u07wh.jpg&refer=http%3A%2F%2Fwx1.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629734128&t=339b35a43af6ad15c49c5a8521c6d74f' }} />
                            <Image style={{ width: "100%", height: pxToDp(180), borderRadius: pxToDp(20) }} resizeMode='cover' source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0630%252Ff58038e3j00qvirdj003bd200u000f0g00gb0085.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629734309&t=8a9e4c78230969ae7977ab4acdbc6bd0' }} />
                        </Carousel>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(-16) }}>
                        <View style={{ width: '48%', height: pxToDp(80), justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                            <ImageBackground style={{ width: '98%', height: pxToDp(80), justifyContent: 'center', alignItems: 'flex-start' }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: 'https://p2.img.cctvpic.com/photoworkspace/contentimg/2019/04/17/2019041711580063404.jpg' }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', color: 'white', marginLeft: pxToDp(6) }}>建党之初</Text>
                                <Text style={{ fontSize: pxToDp(14), color: 'white', marginLeft: pxToDp(6) }}>建党那个时候的事</Text>
                            </ImageBackground>
                        </View>
                        <View style={{ width: '48%', height: pxToDp(80), backgroundColor: '#d11c15', borderRadius: pxToDp(10), justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', color: 'white' }}>二战全史</Text>
                                <Text style={{ fontSize: pxToDp(14), color: 'white' }}>破解战争谜团</Text>
                            </View>
                            <Image style={{ width: pxToDp(70), height: pxToDp(70), borderRadius: pxToDp(10) }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F0616%252F13de824fj00qur9or0017c000hs009wc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629735017&t=e0bd4086a215cd5ebb6222229fc89f3d' }}></Image>
                        </View>
                    </View>

                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20) }}>
                        <View style={{ margin: pxToDp(8) }}>
                            <Text style={{ fontSize: pxToDp(20), fontWeight: '800' }}>习近平总书记建党百年重要讲话</Text>
                        </View>
                        <SnapCarousel />
                    </View>

                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(10), height: pxToDp(210), backgroundColor: '#eee' }}>
                        <ImageBackground style={{ width: '100%', height: pxToDp(140), }} imageStyle={{ borderTopLeftRadius: pxToDp(10), borderTopRightRadius: pxToDp(10) }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew12.photophoto.cn%2F20180607%2Fjinsehuabiaotiananmendangjianbannerbeijingsucai-29871058_1.jpg&refer=http%3A%2F%2Fpicnew12.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629766320&t=40876df704a81722876e5180948befc5' }}>
                            <View style={{ margin: pxToDp(10) }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: pxToDp(8) }}>
                                    <TouchableOpacity onPress={() => this.context.navigate('MoreElegance')} style={{ alignItems: 'center', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>优秀广播剧展播</Text>
                                        <Icon1 name="md-chevron-forward-circle-outline" size={24} color={'black'} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontSize: pxToDp(16) }}>听剧学党史</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: pxToDp(10) }}>
                                    <View style={{ width: '30%', height: pxToDp(140), borderRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: '100%', height: pxToDp(100), flexDirection: 'row', alignItems: 'flex-end', }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: 'data:image/webp;base64,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' }}>
                                            <View style={{ margin: pxToDp(4), flexDirection: 'row', justifyContent: 'center' }}>
                                                <Icon2 name="play-arrow" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16) }}>《血染黔山换春来》</Text>
                                        </View>
                                    </View>
                                    {/* <View style={{ width: '30%', height: pxToDp(140), borderRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: '100%', height: pxToDp(100), flexDirection: 'row', alignItems: 'flex-end', }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp8.itc.cn%2Fq_70%2Fimages03%2F20210328%2F42632d4baf6c41b999da60df9d375de0.jpeg&refer=http%3A%2F%2Fp8.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629769206&t=a5c38b337a41a35226d732fc6ba9e2f3' }}>
                                            <View style={{ margin: pxToDp(4), flexDirection: 'row', justifyContent: 'center' }}>
                                                <Icon2 name="play-arrow" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                            <Text style={{ fontSize: pxToDp(16) }}>《丰碑》</Text>
                                        </View>
                                    </View> */}
                                    <View style={{ width: '30%', height: pxToDp(140), borderRadius: pxToDp(10) }}>
                                        <ImageBackground style={{ width: '100%', height: pxToDp(100), flexDirection: 'row', alignItems: 'flex-end', }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: 'data:image/webp;base64,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' }}>
                                            <View style={{ margin: pxToDp(4), flexDirection: 'row', justifyContent: 'center' }}>
                                                <Icon2 name="play-arrow" size={16} color={'white'} />
                                                <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                            </View>
                                        </ImageBackground>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16) }}>《到延安去》</Text>
                                        </View>
                                    </View>

                                    <View style={{ width: '30%', height: pxToDp(140), borderRadius: pxToDp(10) }}>
                                        <TouchableOpacity onPress={() => this.context.navigate('ListenList')}>
                                            <ImageBackground style={{ width: '100%', height: pxToDp(100), flexDirection: 'row', alignItems: 'flex-end', }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181222%2Fe5558c7b7af54f01a85767fed5c1f8e5.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629769145&t=e01d02eea014830a8ed158d876cc2809' }}>
                                                <View style={{ margin: pxToDp(4), flexDirection: 'row', justifyContent: 'center' }}>
                                                    <Icon2 name="play-arrow" size={16} color={'white'} />
                                                    <Text style={{ color: 'white', marginLeft: pxToDp(4) }}>7589</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>

                                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                            <Text numberOfLines={1} style={{ fontSize: pxToDp(16) }}>《红船》</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20), height: pxToDp(110), }}>
                        <Carousel control style={{ height: pxToDp(110) }}>
                            <View style={{ width: "100%", height: pxToDp(100), borderRadius: pxToDp(20), backgroundColor: '#eee', justifyContent: 'space-around', alignItems: 'center' }} >
                                <View style={{ flexDirection: 'row', }}>
                                    <Image style={{ width: '38%', height: pxToDp(92), borderRadius: pxToDp(20) }} source={require("../../../../images/4.jpg")}></Image>
                                    <View style={{ width: '58%', height: pxToDp(92), padding: pxToDp(8) }}>
                                        <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>《红色文物100讲》</Text>
                                        <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5) }}>《红色文物100》由国家广播电视总局、国家文物局联合出品，节目以革命文物为载体，以视听化表达来讲述党的故事、革命的故事、英雄的故事，让革命文物 “活起来”。</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                            <Icon name="control-play" size={12} color={'black'} />
                                            <Text>96.7万</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "100%", height: pxToDp(100), borderRadius: pxToDp(20), backgroundColor: '#eee', justifyContent: 'space-around', alignItems: 'center' }} >
                                <View style={{ flexDirection: 'row', }}>
                                    <Image style={{ width: '38%', height: pxToDp(92), borderRadius: pxToDp(20) }} source={require("../../../../images/dang6.jpg")}></Image>
                                    <View style={{ width: '58%', height: pxToDp(92), padding: pxToDp(8) }}>
                                        <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>百家讲坛 建军大业</Text>
                                        <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5), }}>【百家讲坛】江英解读《建军大业》</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                            <Icon name="control-play" size={12} color={'black'} />
                                            <Text>96.7万</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "100%", height: pxToDp(100), borderRadius: pxToDp(20), backgroundColor: '#eee', justifyContent: 'space-around', alignItems: 'center' }} >
                                <View style={{ flexDirection: 'row', }}>
                                    <Image style={{ width: '38%', height: pxToDp(92), borderRadius: pxToDp(20) }} source={require("../../../../images/dang7.jpg")}></Image>
                                    <View style={{ width: '58%', height: pxToDp(92), padding: pxToDp(8) }}>
                                        <Text numberOfLines={1} style={{ fontSize: pxToDp(16), fontWeight: 'bold' }}>不忘历史丨话说红军长征</Text>
                                        <Text numberOfLines={1} style={{ marginTop: pxToDp(5), marginBottom: pxToDp(5), }}>这是2016年主题出版重点出版物《话说红军长征——纪念红军长征胜利八十周年》红军长征亲征者的真实回忆，二万五千里征程的原始记录</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                                            <Icon name="control-play" size={12} color={'black'} />
                                            <Text>96.7万</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Carousel>
                    </View>

                    {/* <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20), height: pxToDp(200), backgroundColor: 'pink', flexDirection: 'row' }}>
                        <View style={{ width: '55%', height: pxToDp(140), backgroundColor: 'blue' }}>

                        </View>
                        <View style={{ width: '45%', height: pxToDp(140), backgroundColor: 'green' }}>
                            <View style={{ width: '100%', height: '50%', backgroundColor: 'pink' }}>

                            </View>
                            <View style={{ width: '100%', height: '50%', backgroundColor: 'red' }}>

                            </View>
                        </View>
                    </View> */}
                    <View style={{ margin: pxToDp(8), borderRadius: pxToDp(20), height: pxToDp(350), }}>
                        <View style={{ width: '100%', height: pxToDp(350) }}>
                            <View style={{ flexDirection: 'row', margin: pxToDp(4), }}>
                                <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold', }}>我为什么加入中国共产党</Text>
                                <View style={{ flex: 1 }}></View>
                                <Icon name="arrow-right" size={20} color={'#bbb'} />
                            </View>
                            <Danmu />
                        </View>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default index;