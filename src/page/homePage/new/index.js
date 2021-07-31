import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { pxToDp } from "../../../utils/stylesKits";
import MyNav from '../../../components/MyNav';

class Index extends Component {
    constructor(props) {
        super(props);
    }
    GetPoet = () => {
        // <PoetIndex />
        console.log(this.props)
        this.props.navigation.navigate("Poet");
    }

    render() {
        // const {navigation}=this.props;
        return (
            <View>
                <View style={{}}>
                    <ScrollView stickyHeaderIndices={[0]}>
                        {/* <MyNav title={'详情'} /> */}
                        {/* 顶部抬头 */}
                        <MyNav title='乡政快讯'/>
                        {/* <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
                            
                            <Image style={{ width: 120, height: 60, }} source={require('../../../images/top.jpg')}></Image>
                            <Text style={{ marginTop: pxToDp(4), marginBottom: pxToDp(4) }}>2021年05月31号</Text>
                        </View> */}
                        <View style={{ backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: '', width: '94%', }}>
                                {/* 标题 */}
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: pxToDp(10), marginTop: pxToDp(10) }}>
                                    <Text style={{ fontSize: 29, fontWeight: '700' }}>因为茶，这两地成为全球性政党峰会分会场！</Text>
                                </View>
                                {/* 来源 */}
                                <View style={{marginBottom:pxToDp(10)}}>
                                    <Text style={{textAlign:'right'}}>来源：《求是》2021年第11期</Text>
                                </View>
                                {/* 内容 */}
                                <View>
                                    <Text style={{fontSize:22,fontWeight:'bold'}}>
                                        学好“四史” 永葆初心、永担使命※
                                    </Text>
                                    <Text style={{fontSize:20,marginTop:pxToDp(15),marginBottom:pxToDp(15)}}>
                                        习近平
                                    </Text>
                                    <Text style={{fontSize:20,fontWeight:'bold',marginBottom:pxToDp(15)}}>
                                        一
                                    </Text>
                                    <Text style={{fontSize:20,marginBottom:pxToDp(15)}}>
                                        &emsp;&emsp;要把社会主义核心价值观贯穿于高校办学育人全过程，弘扬以爱国主义为核心的民族精神和以改革创新为核心的时代精神，坚持用社会主义核心价值观引领知识教育、引领师德建设，加强中华优秀传统文化和革命文化、社会主义先进文化教育，加强党史、国史、改革开放史、社会主义发展史教育，加强国家意识、法治意识、社会责任意识教育和民族团结进步教育、国家安全教育、科学精神教育。
                                    </Text>
                                    <Text style={{fontSize:20,marginBottom:pxToDp(15),textAlign:'right'}}>
                                        &emsp;&emsp;（2016年12月7日在全国高校思想政治工作会议上的讲话）
                                    </Text>
                                    <Text style={{fontSize:20,fontWeight:'bold',marginBottom:pxToDp(15)}}>
                                        二
                                    </Text>
                                    <Text style={{fontSize:20,marginBottom:pxToDp(15)}}>
                                        &emsp;&emsp;上海是我们党的诞生地，党成立后党中央机关长期驻扎上海。我多次瞻仰党的一大会址，每次都有很深的感触。上海要把这些丰富的红色资源作为主题教育的生动教材，引导广大党员、干部深入学习党史、新中国史、改革开放史，让初心薪火相传，把使命永担在肩，切实在实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦进程中奋勇争先、走在前列。
                                    </Text>
                                    <Text style={{fontSize:20,marginBottom:pxToDp(15),textAlign:'right'}}>
                                        &emsp;&emsp;（2019年11月3日在上海考察工作结束时的讲话）
                                    </Text>
                                    <Image style={{width:'100%',height:pxToDp(240)}} source={require('../../../images/n1.jpg')}></Image>
                                    <Text style={{fontSize:16,fontWeight:'200',color:'#8c8c8c',marginBottom:pxToDp(15),}}>
                                        2018年12月18日，庆祝改革开放40周年大会在北京人民大会堂隆重举行。中共中央总书记、国家主席、中央军委主席习近平在大会上发表重要讲话。这是习近平鼓掌向受表彰人员表示祝贺。新华社记者 谢环驰/摄
                                    </Text>
                                    <Text style={{fontSize:20,fontWeight:'bold',marginBottom:pxToDp(15)}}>
                                        三
                                    </Text>
                                    <Text style={{fontSize:20,marginBottom:pxToDp(15)}}>
                                        &emsp;&emsp;理论创新每前进一步，理论武装就要跟进一步。党的历次集中教育活动，都以思想教育打头，着力解决学习不深入、思想不统一、行动跟不上的问题，既绵绵用力又集中发力，推动全党思想上统一、政治上团结、行动上一致。要把学习贯彻党的创新理论作为思想武装的重中之重，同学习马克思主义基本原理贯通起来，同学习党史、新中国史、改革开放史、社会主义发展史结合起来，同新时代我们进行伟大斗争、建设伟大工程、推进伟大事业、实现伟大梦想的丰富实践联系起来，在学懂弄通做实上下苦功夫，在解放思想中统一思想，在深化认识中提高认识，切实增强贯彻落实的思想自觉和行动自觉。
                                    </Text>
                                    <Text style={{fontSize:20,marginBottom:pxToDp(15),textAlign:'right'}}>
                                        &emsp;&emsp;（2020年1月8日在“不忘初心、牢记使命”主题教育总结大会上的讲话）
                                    </Text>
                                    <Image style={{width:'100%',height:pxToDp(240)}} source={require('../../../images/n2.jpg')}></Image>
                                    <Text style={{fontSize:16,fontWeight:'200',color:'#8c8c8c',marginBottom:pxToDp(15),}}>
                                        2019年9月23日，党和国家领导人习近平、李克强、汪洋、王沪宁、赵乐际、韩正、王岐山等在北京展览馆参观“伟大历程 辉煌成就——庆祝中华人民共和国成立70周年大型成就展”。新华社记者 鞠鹏/摄 谢环驰/摄
                                    </Text>
                                    <Text style={{fontSize:20,fontWeight:'bold',marginBottom:pxToDp(15)}}>
                                        四
                                    </Text>
                                    <Text style={{fontSize:20,marginBottom:pxToDp(15)}}>
                                        &emsp;&emsp;心有所信，方能行远。面向未来，走好新时代的长征路，我们更需要坚定理想信念、矢志拼搏奋斗。希望广大党员特别是青年党员认真学习马克思主义理论，结合学习党史、新中国史、改革开放史、社会主义发展史，在学思践悟中坚定理想信念，在奋发有为中践行初心使命，努力为实现“两个一百年”奋斗目标、实现中华民族伟大复兴的中国梦贡献智慧和力量。
                                    </Text>
                                    <Text style={{fontSize:20,marginBottom:pxToDp(15),textAlign:'right'}}>
                                        &emsp;&emsp;（2020年6月27日给复旦大学青年师生党员的回信）
                                    </Text>
                                </View>
                            </View>
                            {/* 内容结束图片 */}
                            {/* <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
                                <Image style={{ width: 380, height: 80, }} source={require('../../../images/top.jpg')}></Image>
                            </View> */}
                            {/* 数据显示 */}
                            <View style={{ justifyContent: 'center', alignItems: 'center',flexDirection:'row' ,marginTop:pxToDp(20),}}>
                                <Text style={{ marginTop: pxToDp(4), marginBottom: pxToDp(4) ,width:pxToDp(110),height:pxToDp(30),justifyContent:'center', alignItems:'center',backgroundColor: '#fff',marginRight:pxToDp(10),borderRadius:pxToDp(10)}}>
                                    <Text style={{color:'gray',fontSize:18,marginRight:pxToDp(10)}}>阅读</Text>
                                    <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>1,764,548</Text>
                                </Text>
                                <Text style={{ marginTop: pxToDp(4), marginBottom: pxToDp(4) ,width:pxToDp(110),borderRadius:pxToDp(10),height:pxToDp(30),justifyContent:'center', backgroundColor: '#fff',}}>
                                    <Text style={{color:'gray',fontSize:18,marginRight:pxToDp(10)}}>点赞</Text>
                                    <Text style={{color:'black',fontWeight:'bold',fontSize:18}}>57,278</Text>
                                    <Image style={{width:pxToDp(20),height:pxToDp(20),}} source={require('../../../images/good.png')}></Image>
                                </Text>
                            </View>
                            {/* 评论 */}
                            <View>
                                
                            </View>
                        </View>
                        {/* 到底啦 */}
                        <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '90%', marginLeft: pxToDp(20), marginTop: pxToDp(28) }}>
                            <Text style={{ textAlign: 'center',fontSize:pxToDp(14) ,color:'gray'}}>-THE END-</Text>
                        </View>
                    </ScrollView>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    inputWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 245,
        height: 50,
        backgroundColor: 'transparent',
        borderColor: 'rgba(171, 190, 215, 0.56)',
        borderRadius: 20,
        marginLeft: 20,
        marginTop: 20
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

export default Index;