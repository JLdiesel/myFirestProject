import React, { Component } from "react";
import { View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, StatusBar, SafeAreaView } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel';
// import Swiper from "react-native-swiper"
import { pxToDp } from "../../utils/stylesKits";
import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './components/SliderEntry';
import { ENTRIES1, ENTRIES2 } from './static/entries';
import { scrollInterpolators, animatedStyles } from '../../utils/utils/animations';
import { NavigationContext } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/SimpleLineIcons';



const SLIDER_1_FIRST_ITEM = 1;
const TEA_data = [
    {
        id: "1",
        image: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/829398099/O1CN01kPZeFV29hOL8DeCzo_!!829398099.jpg_430x430q90.jpg",
        title: "龙井茶叶",
        comment: "正宗250g春茶绿茶",
    },
    {
        id: "2",
        image: "https://img.alicdn.com/imgextra/i1/725677994/O1CN01MNulfr28vIq5JdJXi_!!725677994-0-sm.jpg_430x430q90.jpg",
        title: "翠芽雀舌",
        comment: "特级明前绿茶嫩芽春茶茶叶500g",
    },
    {
        id: "3",
        image: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i1/1020360965/O1CN01Dx6qiG1J00rNEE7pi_!!1020360965.jpg_430x430q90.jpg",
        title: "安吉白茶",
        comment: "散装绿茶茶叶高山春茶",
    },
    {
        id: "4",
        image: "https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg",
        title: "标题",
        comment: "视频内容",
    }
];
const SHOP_data = [
    {
        id: "1",
        image: "https://img.alicdn.com/imgextra/i2/2453699690/O1CN01JiR9he2LS4XB4NF2z_!!2453699690.jpg_430x430q90.jpg",
        title: "龙井茶",
        comment: "明前特级嫩芽茶叶",
        money: "198.00",
    },
    {
        id: "2",
        image: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/1020360965/O1CN01CDHhDv1J00tPP0RlD_!!1020360965.jpg_430x430q90.jpg",
        title: "安吉白茶",
        comment: "明前特级250g散装茶叶",
        money: "576.00",
    },
    {
        id: "3",
        image: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2342648261/O1CN01e94IgE2AtaYkjkqtI_!!2342648261.jpg_430x430q90.jpg",
        title: "普洱茶生茶",
        comment: "云南古树春茶200克",
        money: "399.00",
    },
    {
        id: "4",
        image: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/684973154/O1CN01FllBU61ZAZs1903Ja_!!684973154.jpg_430x430q90.jpg",
        title: "红茶",
        comment: "正宗武夷山金骏眉红茶",
        money: "400.00",
    }
];

class shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }
    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }
    mainExample(number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={pxToDp(250)}
                    hasParallaxImages={true}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    inactiveSlideScale={0.85}
                    inactiveSlideOpacity={0.7}
                    // inactiveSlideShift={20}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={true}
                    loopClonesPerSide={2}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                />
                <Pagination
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    inactiveDotColor='#1a1917'
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={this._slider1Ref}
                    tappableDots={!!this._slider1Ref}
                />
            </View>
        );
    }

    static contextType = NavigationContext;
    render() {
        const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        return (
            <View>
                <ScrollView
                    stickyHeaderIndices={[0]}
                >

                    {/* 搜索 */}
                    <View style={{ flexDirection: "row", backgroundColor: "#50935E", height: pxToDp(60) }}>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: pxToDp(330), height: pxToDp(50), borderRadius: pxToDp(8), backgroundColor: "#DCDCDC", marginLeft: pxToDp(22), marginTop: pxToDp(5) }}>
                            <Image source={require("../../images/2.png")} style={{ width: pxToDp(25), height: pxToDp(25), }} />
                            <TextInput placeholder={"搜索茶叶/茶具"} style={{ fontSize: pxToDp(14), marginLeft: pxToDp(5), width: pxToDp(260), }} />
                        </View>
                    </View>

                    {/* 轮播图 */}
                    <View>
                        <View style={{ margin: pxToDp(15), borderRadius: pxToDp(10) }}>
                            <Carousel control style={{ height: pxToDp(155) }}>
                                <Image style={{ width: "100%", height: pxToDp(155), borderRadius: pxToDp(20) }} resizeMode='cover' source={require('../../images/1.jpg')} />
                                <Image style={{ width: "100%", height: pxToDp(155), borderRadius: pxToDp(20) }} resizeMode='cover' source={require('../../images/2.jpg')} />
                                <Image style={{ width: "100%", height: pxToDp(155), borderRadius: pxToDp(20) }} resizeMode='cover' source={require('../../images/3.jpg')} />
                            </Carousel>
                        </View>
                    </View>

                    {/* 茶叶  茶具  茶宠 */}
                    <View style={{ flexDirection: 'row', height: pxToDp(90), borderRadius: pxToDp(20), width: '96%', }}>
                        {/* <View style={{ backgroundColor: '', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', }}> */}
                        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center', width: pxToDp(345), borderRadius: pxToDp(5), marginLeft: pxToDp(15), backgroundColor: "#D2DFD5" }}>
                            <TouchableOpacity onPress={()=>this.context.navigate('TeaList')} >
                                <View style={styles.teabox}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ width: pxToDp(40), height: pxToDp(40), }} source={require('../../images/茶叶.png')}></Image>
                                        <Text style={{ marginTop: pxToDp(5), fontSize: pxToDp(14), fontWeight: "bold", color: "#50935E" }}>茶叶</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.context.navigate("")}>
                                <View style={styles.teabox}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: pxToDp(40), height: pxToDp(40), }} source={require('../../images/茶具.png')}></Image>
                                        <Text style={{ marginTop: pxToDp(5), fontSize: pxToDp(14), fontWeight: "bold", color: "#50935E" }}>茶具</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => ("")}>
                                <View style={styles.teabox}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ width: pxToDp(40), height: pxToDp(40), }} source={require('../../images/茶宠.png')}></Image>
                                        <Text style={{ marginTop: pxToDp(5), fontSize: pxToDp(14), fontWeight: "bold", color: "#50935E" }}>茶宠</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* 定制茶包 */}
                    <TouchableOpacity onPress={() => this.context.navigate('DingZhi')} style={{ marginTop: pxToDp(15), flexDirection: 'row', height: pxToDp(90), borderRadius: pxToDp(20), width: '96%', }}>
                        {/* <View style={{ backgroundColor: '', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', }}> */}
                        <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center', width: pxToDp(345), borderRadius: pxToDp(5), marginLeft: pxToDp(15), backgroundColor: "#D2DFD5" }}>
                            <View>
                                <View style={styles.teabox}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ width: pxToDp(40), height: pxToDp(40), }} source={require('../../images/个性定制.png')}></Image>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.teabox}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: pxToDp(100), marginLeft: pxToDp(-5), marginBottom: pxToDp(5) }}>
                                        <Text style={{ marginTop: pxToDp(5), fontSize: pxToDp(20), fontWeight: "bold", color: "#50935E" }}>定 制 茶 包</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={styles.teabox}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: pxToDp(-10) }}>
                                        <Image style={{ width: pxToDp(30), height: pxToDp(30), }} source={require('../../images/箭头.png')}></Image>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* 新品上市 */}
                    <View style={{ flexDirection: 'row', marginLeft: pxToDp(15), marginTop: pxToDp(20), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>新品上市</Text>
                        <View style={{ flex: 1 }}></View>
                        <TouchableOpacity style={{ marginRight: pxToDp(16) }} onPress={() => this.context.navigate("MoreShop")}>
                            <Icon name="arrow-right" size={20} color={'#bbb'} />
                        </TouchableOpacity>
                    </View>
                    {/* 新品横图 */}
                    {/* <View style={{ flexDirection: "row" }}>
                        <FlatList
                            data={TEA_data}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <ScrollView>
                                    <TouchableOpacity style={{ width: pxToDp(200), height: pxToDp(100), marginLeft: pxToDp(15), marginTop: pxToDp(20), borderRadius: pxToDp(10) }}>
                                        <ImageBackground imageStyle={{ borderRadius: pxToDp(10) }} style={{ justifyContent: "flex-end", width: "100%", height: "100%" }} source={{ uri: item.image }}>

                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: pxToDp(20), marginTop: pxToDp(10) }}>
                                        <Text style={{ fontWeight: "bold", color: "black", fontSize: pxToDp(15) }}>{item.title}</Text>
                                        <Text style={{ fontWeight: "bold", color: "black", fontSize: pxToDp(12) }}>{item.comment}</Text>
                                    </View>
                                </ScrollView>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View> */}

                    <SafeAreaView >
                        <View>
                            {example1}
                        </View>
                    </SafeAreaView>


                    {/* 正在热卖 */}
                    <View style={{ flexDirection: 'row', marginLeft: pxToDp(15), marginTop: pxToDp(20), justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold', }}>正在热卖</Text>
                        <View style={{ flex: 1 }}></View>
                        <TouchableOpacity style={{ marginRight: pxToDp(16) }} onPress={() => this.context.navigate("")}>
                            <Icon name="arrow-right" size={20} color={'#bbb'} />
                        </TouchableOpacity>
                    </View>

                    {/* 热卖商品 */}
                    <View style={{ marginTop: pxToDp(15), marginBottom: pxToDp(25) }}>
                        <FlatList
                            data={SHOP_data}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => this.context.navigate("Detail")} style={{ flexDirection: "row" }}>
                                    <Image style={{ borderRadius: pxToDp(10), marginLeft: pxToDp(15), marginTop: pxToDp(10), width: pxToDp(130), height: pxToDp(90) }} source={{ uri: item.image }} />
                                    <View style={{ marginLeft: pxToDp(15), marginTop: pxToDp(15) }}>
                                        <Text style={{ fontSize: pxToDp(15), fontWeight: "bold" }}>{item.title}</Text>
                                        <Text style={{ marginTop: pxToDp(5) }}>{item.comment}</Text>
                                        <Text style={{ marginTop: pxToDp(20), fontSize: pxToDp(15), fontWeight: "bold" }}>￥{item.money}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                            keyExtractor={item => item.id}
                        />
                    </View>
                </ScrollView>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    teabox: {
        width: pxToDp(80),
        height: pxToDp(75),
        justifyContent: "center",
        borderRadius: pxToDp(10),
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: '#1a1917'
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: pxToDp(10),
        right: pxToDp(55),
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
});

export default shop;