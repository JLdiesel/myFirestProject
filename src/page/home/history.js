import React, { Component } from "react";
import { View, Text, ImageBackground, FlatList, TouchableOpacity, Button, Image } from "react-native";
import MyNav from "../../components/MyNav";
import { pxToDp } from "../../utils/stylesKits";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { NavigationContext } from "@react-navigation/native";
const TEA_data = [
    {
        id: "1",
        title: '茶界旧闻，浙江其实曾是红茶大省！',
        subtitle: '浙江，是茶叶大省。说的再准确些，是绿茶大省。论内销，有杭州的西湖龙井。论外销，有绍兴的平水珠茶。反倒是提起浙江红茶，几乎没有人知道。可其实，浙江也是产红茶的省份。而且不是近几年追时髦，而是有着悠久的传统。',
        illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181118%2Fbe86390530eb4ec8ad855c313f468250.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629800627&t=413c97815f0b669b51d433da46dbd659'
    },
    {
        id: "2",
        title: '中国茶史——茶的来历，有这一篇就够了',
        subtitle: '“中国茶史”的起源，到目前为止仍是众说纷纭，争议未定，大致说来，有先秦说、西汉说、三国说。茶以文化面貌出现，是在两晋北朝，最早喜好饮茶的多是文人雅仕。',
        illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimages.wofang.com%2Fnews%2F2017-11%2F20171114121241_36371.jpg&refer=http%3A%2F%2Fimages.wofang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629800820&t=144b95d567c89491b92000c250728a14'
    },
    {
        id: "3",
        title: '中华茶文化“知”和“行”',
        subtitle: '明代著名思想家王阳明提出“知行合一”的观点，“知”不仅代表“知道”、“知识”，而且是出于内心的“良知”，“格物致知”，通过对事物的学习、研究，达到对事物的敬畏与尊崇。“这样学习掌握的知识不但不会束之高阁，而且能在实践中不断深化丰富，对茶文化的认识也是一样。”孙忠焕说。 ',
        illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2018%2F07%2F11%2FFjwnOwdhHONdiWPHoIaPQYvscc8m.jpg%21730x0.jpg&refer=http%3A%2F%2Fimg.yzcdn.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629800673&t=fd0c8b17e4d30f44394ed0a2dda77caa'
    },
    {
        id: "4",
        title: '以茶史会友 “莲城雾峰”亮相中国国际茶叶博览会',
        subtitle: '高山云雾出好茶。莲都境内植被丰富，云雾缭绕，是中国绿茶一类适生区。得天独厚的生态自然环境孕育了“莲城雾峰”开采早、内质佳的独特品质，被誉为“江浙第一早茶”。',
        illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180424%2F9fe06629543e4ec6a85ea7bb664b3c29.jpg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629800877&t=45d829fc6e1de8bbf8b2676f963975ea'
    },
    {
        id: "5",
        title: '驻足尘世间 品一品你手中的茶历史有多远',
        subtitle: '茶，源自于中国，很早就有神农氏尝百草得茶而解的传说。自唐代陆羽所著《茶经》开始，东亚大地上的古老文明就开始有了关于茶的论著，当时的人们都是“知茶论茶”，也是自此书问世以来，中国的茶文化才就此形成。',
        illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F11933922129%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629800719&t=dfb02c48788bccee052e25f91d641e8e'
    },
    {
        id: "6",
        title: '“茶语者”诉说茶史茶人茶事',
        subtitle: '王旭烽是著名茶文化学者，央视热播大型茶文化纪录片《茶，一片树叶的故事》的总撰稿，其描写茶人生活的长篇系列小说“茶人三部曲”之《南方有嘉木》、《不夜之侯》获第五届茅盾文学奖。',
        illustration: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F10365486277%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629800792&t=c89fe6d211db29475a4d8c35163bc154'
    },
];
class history extends Component {
    static contextType = NavigationContext;

    render() {
        return (
            <View style={{marginBottom:pxToDp(60)}}>
                <MyNav title='话说茶史' />
                <FlatList
                    data={TEA_data}
                    renderItem={({ item }) =>
                        // 视频大图  开始
                        <View style={{ height: pxToDp(220), flexDirection: 'row', justifyContent: 'center', alignItems: 'center',margin:pxToDp(10),elevation:10, shadowColor: 'black',  shadowOffset: { width: 0, height: 0 },   shadowOpacity: 1,   shadowRadius: 10,   }}>
                            <View style={{ width: '96%', height: '100%', }}>
                                <TouchableOpacity onPress={() => this.context.navigate("TalkTea")} >
                                    <ImageBackground style={{ width: '100%', height: pxToDp(220), }} imageStyle={{ borderRadius: pxToDp(10) }} source={{ uri: item.illustration }}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', height: '64%' }}>
                                        </View>
                                        <View style={{ backgroundColor: '#D2DFD5', opacity: 0.8, width: '100%', height: '36%', borderRadius: pxToDp(10), }}>
                                            <View style={{ margin: pxToDp(10) }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text numberOfLines={1} style={{ fontSize: pxToDp(16), width: '96%',marginBottom:pxToDp(6) }}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text numberOfLines={2} style={{ marginLeft: pxToDp(4) }}>{item.subtitle}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />

            </View>
        );
    }
}
export default history;