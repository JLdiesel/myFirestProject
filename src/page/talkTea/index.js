import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { pxToDp } from '../../utils/stylesKits';
import MyNav from '../../components/MyNav';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
class index extends Component {
    render() {
        return (
            <ScrollView
                stickyHeaderIndices={[0]}
            >
                <View>
                    <MyNav title='文章详情' />
                </View>
                <View >
                    <View>
                        <Image style={{ width: '100%', height: pxToDp(200) }} source={require('../../images/cha12.jpg')}></Image>
                    </View>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>中国茶史——茶的来历，有着一篇就够了</Text>
                        </View>
                        <Text style={{ fontSize: pxToDp(15), margin: pxToDp(4) }}>
                            &emsp;&emsp;我国是世界上最早发现、栽培、利用茶叶的国家。
                        </Text>
                        <Text style={{ fontSize: pxToDp(15), margin: pxToDp(4) }}>
                            &emsp;&emsp; 茶叶在我国对外的文化传播中，被其他国家所吸纳，其中日本的茶道和英国的红茶就是将中国茶叶本土化的最好的代表 。
                        </Text>
                        <View style={{ width: '96%', height: pxToDp(200), marginLeft: pxToDp(8), marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>
                            <Image style={{ width: '100%', height: pxToDp(200), borderRadius: pxToDp(10) }} source={{ uri: 'https://pic4.zhimg.com/80/v2-935c55ff31d619b93843b48c8cfe0197_720w.jpg' }}></Image>
                        </View>
                        <Text style={{ fontSize: pxToDp(15), margin: pxToDp(4) }}>
                            &emsp;&emsp; “中国茶史”的起源，到目前为止仍是众说纷纭，争议未定，大致说来，有先秦说、西汉说、三国说。茶以文化面貌出现，是在两晋北朝，最早喜好饮茶的多是文人雅仕 。
                        </Text>
                        <Text style={{ fontSize: pxToDp(15), margin: pxToDp(4) }}>
                            &emsp;&emsp; 唐代开元以后，中国的"茶道"大行，饮茶之风弥漫朝野，宋承唐代饮茶之风，日益普及。
                        </Text>
                        <View style={{ margin: pxToDp(8) }}>
                            <Text style={{ fontSize: pxToDp(20), fontWeight: 'bold' }}>茶文化从古至今的发展</Text>
                        </View>
                        <View style={{ width: '96%', height: pxToDp(200), marginLeft: pxToDp(8), marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>
                            <Image style={{ width: '100%', height: pxToDp(200), borderRadius: pxToDp(10) }} source={{ uri: 'https://pic2.zhimg.com/80/v2-a53b3c5ee96259f3dab36dc4d36996c9_720w.jpg' }}></Image>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 神农时代：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;传说5000多年前，神农氏发现了茶的解毒作用，此后茶叶的药用和食用性一直为人类所利用。
                            </Text>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 西周、东周：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;3000以前，开始人工栽培茶树，当菜食。
                            </Text>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 秦代：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;2300年以前，开始当茗饮，调煮，羹饮。并作药用。
                            </Text>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 汉代：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;茶以文化面貌出现，是在两晋北朝。若论其起源就要追溯到汉代，清代郝懿行在《证俗文》中指出："茗饮之法，始见于汉末，而已萌芽于前汉。
                            </Text>
                        </View>
                        <View style={{ width: '96%', height: pxToDp(200), marginLeft: pxToDp(8), marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>
                            <Image style={{ width: '100%', height: pxToDp(200), borderRadius: pxToDp(10) }} source={{ uri: 'https://pic1.zhimg.com/80/v2-01a268fb434b90a1a3afa62f90f206d4_720w.jpg' }}></Image>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 唐代：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;1200年以前，受唐代经济、文化的影响;陆羽《茶经》的倡导;僧道生活和茶为教事吸收的影响，气候条件也有利于茶业的发展。
                            </Text>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 宋代：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;1000年以前泡茶技艺的改进;水质的讲究;斗茶获得。
                            </Text>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 元代：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;700年以前，制作散茶，重炒略蒸。
                            </Text>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 明代：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;距今600多年，黄茶、黑茶和花茶的工艺相继形成。
                            </Text>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 清代：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;300年以前，中国茶风靡世界，独步世界茶市，当时出口茶叶的只有中国，工艺以烘青和炒青为主，制作了乌龙茶、红茶、黑茶、花茶、绿茶、白茶。
                            </Text>
                        </View>
                        <View style={{ width: '96%', height: pxToDp(200), marginLeft: pxToDp(8), marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>
                            <Image style={{ width: '100%', height: pxToDp(200), borderRadius: pxToDp(10) }} source={{ uri: 'https://pic1.zhimg.com/80/v2-fae77cb7e1bc6563289af74c1eff6e68_720w.jpg' }}></Image>
                        </View>
                        <View style={{ margin: pxToDp(4) }}>
                            <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>
                                &emsp; 近代：
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;1846-1886年是中国茶叶的兴盛时期（茶园面积不断的扩大，茶叶产量迅速增递，有力的促进了对外贸易发展）。
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;1846-1886-1947年，是中国茶叶生产的衰落时期（政治、经济方面、国际茶叶市场竞争失败）。
                            </Text>
                            <Text style={{ fontSize: pxToDp(15) }}>
                                &emsp;&emsp;1846-1950-1988年，是中国茶叶生产的恢复发展时期，政府的支持和重视，大力恢复旧茶园，建立新茶园，改进新品种，推行科学种茶，茶叶经济走向稳定发展之路。
                            </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: pxToDp(16) }}>
                        <Text style={{ fontSize: pxToDp(18), color: '#ccc' }}>-THE END-</Text>
                    </View>
                    <View style={{ width: '100%', height: pxToDp(12), backgroundColor: '#ccc' }}></View>
                </View>
                <View style={{ width: '96%', marginLeft: pxToDp(8),marginBottom:pxToDp(12) }}>
                    <View style={{ marginTop: pxToDp(20), marginBottom: pxToDp(20) }}>
                        <Text style={{ fontSize: pxToDp(18), fontWeight: 'bold' }}>评论 |</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center',marginTop:pxToDp(16),marginBottom:pxToDp(16) }}>
                        <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(60) }} source={require('../../images/head2.jpg')}></Image>
                        <View style={styles.inputWrap}>
                            <TextInput style={styles.textInput}
                                // defaultValue='浙里看百年'
                                placeholder="来聊聊你的看法吧"
                                placeholderTextColor='#abbed7'
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ width: '14%', borderRadius: pxToDp(60), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ width: pxToDp(40), height: pxToDp(40), borderRadius: pxToDp(60) }} source={require('../../images/head1.jpg')}></Image>
                            </View>
                            <View style={{ width: '86%', height: pxToDp(40), justifyContent: 'space-evenly', paddingLeft: pxToDp(8) }}>
                                <Text style={{ fontSize: pxToDp(14) }}>可畏的男人</Text><Text>7-11</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingLeft: pxToDp(8) }}>
                            <View style={{ width: '18%', borderRadius: pxToDp(50), backgroundColor: '#bbb', justifyContent: 'center', alignItems: 'center' }}></View>
                            <View style={{ width: '82%', justifyContent: 'space-evenly', }}>
                                <Text style={{ fontSize: pxToDp(15) }}>山东话版的林妹妹。有几分林黛玉倒把垂杨柳的风味了</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: pxToDp(16), marginBottom: pxToDp(16) }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon1 name="thumb-up" size={26} color={'gray'} />
                                        <Text>2.1w</Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon1 name="thumb-down" size={26} color={'gray'} />
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon1 name="messenger-outline" size={26} color={'gray'} />
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#ccc', padding: pxToDp(10) }}>
                                    <Text>海十七侠：河南话的李师师，陕西话的貂蝉，山西话的杨玉环</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    inputWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 245,
        height: 48,
        backgroundColor: 'transparent',
        borderColor: '#aaa',
        borderRadius: 20,
        marginLeft: 20,
        // marginTop: 20
    },
    textInput: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 1,
        width: 200,
        height: 48,
        fontSize: 18,
        color: '#3f4b48',
    },
});

export default index;