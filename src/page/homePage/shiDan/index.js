import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, RefreshControl, ImageBackground, Easing, Animated } from 'react-native';
import Swiper from "react-native-deck-swiper";
import { Carousel } from '../../../components/teaset';
import { pxToDp } from "../../../utils/stylesKits";
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
import { NavigationContext } from "@react-navigation/native";
import LottieView from 'lottie-react-native';
import ShowModel from '../../showModel/index';
import MyNav from '../../../components/MyNav';

// import MUWave from "../../../components/MUWave/index";
class index extends Component {
    state = {
        // 控制 加载中的组件的切换显示
        refreshing: false,
        arr: [
            [
                {
                    id: 1,
                    uriFace: 'https://img.mp.itc.cn/upload/20170419/bad415b399644347abc4e1d326425793',
                    uriBack: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs16.sinaimg.cn%2Fmw690%2F00688vlQzy759KVVTUX6f&refer=http%3A%2F%2Fs16.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629551057&t=70fcff7dd4c737c7460e23d49b8c8247',
                    title: '立春',
                    recommend: '立春时天地阳气生发，与肝相应，人易暴怒、易感忧郁，而一杯暖暖的茉莉花茶，可安定情绪，舒缓神经。因为茉莉花有理气开郁、辟秽和中的功效，可清肝明目、生津止渴、通便利水、祛风解表。',
                    teaname: '茉莉花茶',
                    textline1: '1、茉莉花性寒、味香淡、消胀气，味辛、甘，性温，有理气止痛、温中和胃、消肿解毒、强化免疫系统的功效，并对痢疾、腹痛、结膜炎及疮毒等具有很好的消炎解毒的作用。',
                    textline2: '2、茉莉花有清肝明目、生津止渴、祛痰治痢、通便利水、祛风解表、疗瘘、坚齿、益气力、降血压、强心、防龋防辐射损伤、抗癌、抗衰老之功效，使人延年益寿、身心健康。',
                    textline3: '3、茉莉花有理气安神、润肤香肌之功效，其香气怡人、它对于便秘也有帮助，使排便顺畅，可改善昏睡及焦虑现象，对慢性胃病、经期失调也有功效。肠胃不适，子宫保健，头晕安神，可安定情绪及舒解郁闷。',
                    textline4: '4、茉莉花有抗菌，平喘，抗癌，舒筋活血，驱风散寒，振脾健胃，强心益肝，降低血压，补肾壮精功效，有慢性支气管炎的人宜多饮用。',
                    textline5: '5、喝花茶不仅可以美容养颜，还有治疗一些疾病的功效，茉莉花与粉红玫瑰花搭配冲泡饮用有瘦身的效果，特别有助于排出体内毒素，外用润燥香肌，美发美容。',
                },
            ],
            [
                {
                    id: 2,
                    uriFace: 'https://img.mp.itc.cn/upload/20170419/1bb7d169047a4decbb3a31c85f0b244a',
                    uriBack: 'https://img1.baidu.com/it/u=1925598151,1047311331&fm=26&fmt=auto&gp=0.jpg',
                    title: '雨水',
                    recommend: '雨水时气温回升，降水增多，乍暖还寒，寒湿之邪最易困着脾脏，健脾行气之茶最是适宜。柑皮，具理气降逆、调中开胃、燥湿化痰之功效。与熟普搭配，不仅有舒肝解郁的功效，而且在熟普中有益菌的作用下，柑普还对胃肠道有温和的刺激作用，显示了芳香健胃和驱风下气的作用。',
                    teaname: '柑普',
                    textline1: '1、降脂减肥的功效；普洱茶经发酵后生成新的脂肪分解酶，而陈皮所含物质能够润滑肠道，二者结合能够起到降脂减肥的效果，是众多肥胖者的福音。',
                    textline2: '2、降压、预防动脉硬化；人们在经年累月中，因为生活习惯、生活压力等原因，身体渐渐出现血压高，动脉硬化的症状，虽然有许多的药物可以治疗，但“是药三分毒”。要是有一种方法既能缓解这两种症状又不会有副作用是不是就万幸了呢？而“柑普茶”是恰恰能够带来万幸的饮品，坚持长期饮用柑普茶能够减轻高血压、动脉硬化等症状。',
                    textline3: '3、防癌、抗癌；科学家经过大量的实验对比，发现经常喝茶的人比不喝茶的人癌症发病率低。',
                    textline4: '4、美容、养颜、抗衰老；柑普茶富含维生素C、维生素E、茶多酚、氨基酸和微量元素等具有抗氧化作用的元素，同时调节身体新陈代谢，促进血液循环，缓解身体衰老加速。',
                    textline5: '5、养胃、护胃；用经过时间陈化后的普洱茶和陈皮做成的柑普茶，茶性温和，且茶中所富含的物质能够对胃进行养护。',
                },
            ],
            [
                {
                    id: 3,
                    uriFace: 'https://img.mp.itc.cn/upload/20170419/85c9703b8b4740aab02fbdd5a81ac513',
                    uriBack: 'https://img1.baidu.com/it/u=531588262,504197565&fm=26&fmt=auto&gp=0.jpg',
                    title: '惊蛰',
                    recommend: '惊蛰时节阳气升发，气温明显升高。因暖生燥，应保持心平气和，忌妄动肝火，需清肝明目、镇定降压之茶。白茶本身有着不俗的药用价值，又因白牡丹叶嫩，富含氨基酸，且茶性清凉，退热降火之功效不可小觑。',
                    teaname: '白牡丹',
                    textline1: '1、美容养颜,常喝白牡丹茶有美容养颜的好处，从而能够有效保养肌肤，延缓衰老。那么白牡丹茶叶是典型的女性茶，坚持饮用，美容功效比较显著，特别受都市女性的青睐。各位爱美的女士们，值得试试。',
                    textline2: '2、抗氧化,常喝白牡丹茶有抗氧化的好处，从而能够有效的给身体起到保健作用。因为白牡丹茶富含黄酮成分，黄酮是天然的抗氧化剂，具有很强的抗氧化作用，能有效中和外线和环境污染所生成的活性自由基，喝一杯白牡丹茶叶的保健功效相当于12杯橙汁。',
                    textline3: '3、抗菌消炎，常喝白牡丹茶有抗菌消炎的好处，从而能够有效避免病菌的侵害。那么白牡丹茶具有效杀菌、消炎、抗病毒之保健功效，其杀菌效果比绿茶还要强。据说上等的白牡丹茶杀菌抗病毒能力更强。',
                    textline4: '4、生津解渴，常喝白牡丹茶有生津止渴的好处，对于夏季来说是极好的降火凉茶。因为白牡丹茶含有大量的氨基酸、茶多酚、维生素等，经常喝些白牡丹茶，不仅能生津解渴，祛暑解毒，还有助于提神醒脑，令人心旷神怡，更是夏日的最佳茶饮。',
                    textline5: '5、润肺清热,常喝白牡丹茶有润肺清热的好处，可见其还具有很好的药用价值。那么白牡丹茶是经常被人们当药使用的。在炎热的夏季，常喝白牡丹茶还能有预防中暑、抗辐射。',
                },
            ],
            [
                {
                    id: 4,
                    uriFace: 'https://img.mp.itc.cn/upload/20170419/f0ab03a67f694abc8cf967bc6223aad5',
                    uriBack: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.artron.net%2Fauction%2F2015%2Fart507299%2Fd%2Fart5072991925.jpg&refer=http%3A%2F%2Fimg3.artron.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629592356&t=022253860d13585bb60c6fbc20b8e015',
                    title: '春分',
                    recommend: '依据道法自然的养生传统，人在春分时需保持阴阳平衡，而有年份的普洱生茶，经历时间沉淀，茶叶中的咖啡碱、茶多酚、儿茶素等得到充分转化，致使茶性温和，它消热止渴功效很好，适合大多数人饮用。',
                    teaname: '陈年生普',
                    textline1: '1、暖胃，云南普洱茶茶性温和，暖胃不伤胃，对于一些整天出去应酬抽烟喝酒的人来说，偶尔喝上一杯陈年普洱茶是最合适不过了。那么，陈年普洱茶的功效与作用陈年普洱茶的功效首先在于普洱茶茶性温和,暖胃不伤胃。这点对熟普洱茶尤为明显。',
                    textline2: '2.促进消化，普洱生茶消食理气的功效也不错，适宜的浓度饮用普洱茶，可以促进消化，改善腹胀等现象，同时对于经常使用肉食、油腻 食物的人群，普洱生茶具有一定的缓解油腻作用，同时又有促进肠胃蠕动的功能，饮之有助于消化、通便利尿。',
                    textline3: '3.提高免疫性，饮茶可以增加血液中白血球和淋巴细胞的数量，提高血液免疫性。除此之外，饮茶还可以增加肠道中的有益细菌(如双歧杆菌)数量，减少有害细菌的数量，从而提高肠道免疫。',
                    textline4: '4、深层排毒，陈年普洱茶有消暑、通便、解毒的功效，经常饮用陈年普洱茶能够调节肠胃，令肠胃恢复正常功能，起到深层排毒的功效。',
                    textline5: '5、抗衰老，陈年普洱茶含有丰富的茶多酚，可以帮助肌肤血液循环，起到抗衰老的美容功效。',
                },
            ],
            [
                {
                    id: 5,
                    uriFace: 'https://img.mp.itc.cn/upload/20170419/9e94ce647cc74856abbe446d11f57130',
                    uriBack: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F04058.com%2Fuploads%2Fallimg%2F171107%2F0U91W006-0.jpg&refer=http%3A%2F%2F04058.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629592588&t=7f0f79b60b45cdf18b40ffe24b47b775',
                    title: '清明',
                    recommend: '清明时节，适宜性味清凉的饮食，以便柔肝养肺，增强体质。一杯白毫银针，富含氨基酸，茶汤鲜爽，味温性凉，有健胃提神之效、祛湿退热之功，最是应时佳品。',
                    teaname: '白毫银针',
                    textline1: '1、白毫银针具有防辐射物质，对人体的造血机能有显著的保护作用，能减少辐射对人体的危害。',
                    textline2: '2、白毫银针是安神茶，白毫银针茶清热降火，清心安神，有助于健康良好的睡眠。',
                    textline3: '3、白毫银针是解乏茶，白毫银针茶具有耐泡的特点，白毫银针茶能消除或缓解疲劳。',
                    textline4: '4、白毫银针是女人茶，可以延缓衰老，美容美颜，因此受到了现代时尚人士，特别是都市女性的欢迎。',
                    textline5: '5、白毫银针是伴侣茶，喝酒容易上火，饮用白毫银针茶可降酒后虚火，是社交应酬的好伴侣。',
                },
            ],
            [
                {
                    id: 6,
                    uriFace: 'https://img.mp.itc.cn/upload/20170419/c141456dbd184defbbab0dd163654736',
                    uriBack: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fimgextra%2Fi4%2F479877883%2FT2dhCxXPVXXXXXXXXX-479877883.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629592777&t=6fbbd245e650506e65abfe116a9297bb',
                    title: '谷雨',
                    recommend: '谷雨到来，意味着寒潮天气基本结束，气温回升加快。一杯时令的洞庭碧螺春，有丰富的氨基酸和多种维生素，可以预防衰老，增加抵抗力和增强抗氧化活力，提升体质。',
                    teaname: '洞庭碧螺春',
                    textline1: '1．兴奋作用：茶叶的咖啡碱能兴奋中枢神经系统,帮助人们振奋精神、增进思维、消除疲劳、提高效率。',
                    textline2: '2．利尿作用：茶叶中的咖啡碱和茶碱具有利尿作用，用于治疗水肿、水滞瘤。利用红茶糖水的解毒、利尿作用能治疗急性黄疸型肝炎。',
                    textline3: '3．强心解痉作用：咖啡碱具有强心、解痉、松弛平滑肌的功效，能解除支气管痉挛，促进血液循环,是治疗支气管哮喘、止咳化痰、心肌梗塞的良好辅助药物。',
                    textline4: '4、抑制动脉硬化作用：茶叶中的茶多酚和维生素c都有活血化瘀防止动脉硬化的作用。所以经常饮茶的人当中，高血压和冠心病的发病率较低。',
                    textline5: '5．抗菌、抑菌作用：茶中的茶多酚和鞣酸作用于细菌，能凝固细菌的蛋白质将细菌杀死。可用于治疗肠道疾病，如霍乱、伤寒、痢疾、肠炎等。皮肤生疮、溃烂流脓外伤破了皮，用浓茶冲洗患处，有消炎杀菌作用。口腔发炎、溃烂、咽喉肿痛,用茶叶来治疗，也有一定疗效。',
                },
            ],
        ],
        
    }


    // componentDidMount() {
    //     Animated.timing(this.state.progress, {
    //         toValue: 1,
    //         duration: 5000,
    //         easing: Easing.linear,
    //     }).start();
    // }
    static contextType = NavigationContext;
    // 下拉刷新事件
    onRefresh = async () => {
        this.setState({ refreshing: true });
        //等待返回值
        // await this.getList();
        await 10000;
        this.setState({ refreshing: false });
    }
    render() {
        const { refreshing } = this.state;

        return (
            <View>
                <View style={{ backgroundColor: '#eee', }}>
                    <ScrollView
                        //吸顶
                        stickyHeaderIndices={[0]}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />}
                        contentContainerStyle={{}}
                    >
                        <MyNav title='时令茶单' />
                        {/* 时令茶单 */}
                        <View >
                            <View style={{flexDirection:'row'}}>
                                {/* 二十四节气栏 */}
                                
                                    {this.state.arr.map((item, index) => (
                                        <ShowModel key={index} arr={item} />
                                    ))}
                            </View>
                        </View>

                        
                           

                    </ScrollView>
                </View>
            </View>
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