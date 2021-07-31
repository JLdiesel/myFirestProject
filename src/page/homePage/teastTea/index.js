import React, { Component } from 'react';
import {
    Switch,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { pxToDp } from '../../../utils/stylesKits';

class TeastTea extends Component {
    state = {
        activeSections: [],
        collapsed: true,
        collaps: true,
        colla: true,
        col: true,
        five: true,
        fi: true,
        backcolor: "red",
        multipleSelect: false,
        showtitle: true,
        touch1: true,
        touch2: true,
        touch3: true,
        touch4: true,
        touch5: true,
        touch6: true,
        point: require("../../../images/箭头上.png"),
        pointlater: require("../../../images/箭头下.png")
    };
    toggleExpanded = () => {
        this.setState({ collapsed: !this.state.collapsed });
        const { touch1 } = this.state
        this.setState({ touch1: !touch1 })
    };
    toggleExpand = () => {
        this.setState({ collaps: !this.state.collaps });
        const { touch2 } = this.state
        this.setState({ touch2: !touch2 })
    };
    toggleExpa = () => {
        this.setState({ colla: !this.state.colla });
        const { touch3 } = this.state
        this.setState({ touch3: !touch3 })
    };
    toggleEx = () => {
        this.setState({ col: !this.state.col });
        const { touch4 } = this.state
        this.setState({ touch4: !touch4 })
    };
    toggle = () => {
        this.setState({ five: !this.state.five });
        const { touch5 } = this.state
        this.setState({ touch5: !touch5 })
    };
    togg = () => {
        this.setState({ fi: !this.state.fi });
        const { touch6 } = this.state
        this.setState({ touch6: !touch6 })
    };
    renderSearch = () => {
        return <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", width: pxToDp(300), height: pxToDp(38), borderRadius: pxToDp(8), backgroundColor: "white", marginLeft: pxToDp(22), marginTop: pxToDp(8) }}>
            <TextInput placeholder={"搜索茶叶"} style={{ fontSize: pxToDp(14), marginLeft: pxToDp(5), width: pxToDp(260), }} />
        </View>
    }

    renderTitle = () => {
        return <View style={{ height: "100%", width: pxToDp(330), alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: pxToDp(20), fontWeight: "bold", marginLeft: pxToDp(40), color: "white" }}>茶叶</Text>
        </View>
    }

    renderChange = () => {
        const { showtitle } = this.state
        this.setState({ showtitle: !showtitle })
    }

    render() {
        const { showtitle, backcolor, point, pointlater, touch1, touch2, touch3, touch4, touch5, touch6 } = this.state;
        return (
            <View>
                <View style={{ flexDirection: "row", backgroundColor: "#50935E", height: pxToDp(55), justifyContent: "space-between" }}>
                    {showtitle ? this.renderTitle() : this.renderSearch()}
                    <TouchableOpacity onPress={() => { this.renderChange() }}>
                        <Image source={require("../../../images/搜索白.png")} style={{ width: pxToDp(25), height: pxToDp(25), top: pxToDp(15), marginRight: pxToDp(15) }} />
                    </TouchableOpacity>
                </View>


                <ScrollView>
                    <View>
                        <Image source={require("../../../images/lun2.jpg")} style={{ width: "100%", height: pxToDp(210) }} />
                    </View>

                    {/* 1 */}
                    <TouchableOpacity onPress={this.toggleExpanded}>
                        <View style={styles.header}>
                            <Image style={styles.image} source={require("../../../images/绿茶.png")} />
                            <View>
                                <Text style={styles.headerText}>绿茶</Text>
                                <Text style={{ marginLeft: pxToDp(15), opacity: 0.4 }}>属不发酵茶</Text>
                            </View>
                            <View>
                                <Image style={{ width: pxToDp(20), height: pxToDp(20), marginLeft: pxToDp(160) }} source={touch1 ? point : pointlater} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: pxToDp(340), height: pxToDp(1), marginLeft: pxToDp(15), backgroundColor: "black", opacity: 0.2 }}></View>
                    <Collapsible collapsed={this.state.collapsed} align="center">
                        <View style={styles.content}>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>全部</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>龙井</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>雀舌</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>恩施玉露</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }} onPress={() => this.props.navigation.navigate('DifferentTea')}><Text>蒙顶甘露</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>黄山毛峰</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>都匀毛尖</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>安吉白茶</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>信阳毛尖</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Collapsible>

                    {/* 2 */}
                    <TouchableOpacity onPress={this.toggleExpand}>
                        <View style={styles.header}>
                            <Image style={styles.image} source={require("../../../images/乌龙.png")} />
                            <View>
                                <Text style={styles.headerText}>乌龙</Text>
                                <Text style={{ marginLeft: pxToDp(15), opacity: 0.4 }}>又名青茶，属半发酵茶</Text>
                            </View>
                            <View>
                                <Image style={{ width: pxToDp(20), height: pxToDp(20), marginLeft: pxToDp(92) }} source={touch2 ? point : pointlater} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: pxToDp(340), height: pxToDp(1), marginLeft: pxToDp(15), backgroundColor: "black", opacity: 0.2 }}></View>
                    <Collapsible collapsed={this.state.collaps} align="center">
                        <View style={styles.content}>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>水仙</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>肉桂</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>单丛</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>岩茶小品种</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>安溪铁观音</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text style={{ height: pxToDp(40) }}>武夷山大红袍</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Collapsible>


                    {/* 3 */}
                    <TouchableOpacity onPress={this.toggleExpa}>
                        <View style={styles.header}>
                            <Image style={styles.image} source={require("../../../images/红茶.png")} />
                            <View>
                                <Text style={styles.headerText}>红茶</Text>
                                <Text style={{ marginLeft: pxToDp(15), opacity: 0.4 }}>属全发酵茶</Text>
                            </View>
                            <View>
                                <Image style={{ width: pxToDp(20), height: pxToDp(20), marginLeft: pxToDp(160) }} source={touch3 ? point : pointlater} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: pxToDp(340), height: pxToDp(1), marginLeft: pxToDp(15), backgroundColor: "black", opacity: 0.2 }}></View>
                    <Collapsible collapsed={this.state.colla} align="center">
                        <View style={styles.content}>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>川红工夫</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>国外红茶</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>政和工夫</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>英德红茶</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>正山小种</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>祁门红茶</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>金骏眉</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>滇红</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>    </Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Collapsible>


                    {/* 4 */}
                    <TouchableOpacity onPress={this.toggleEx}>
                        <View style={styles.header}>
                            <Image style={styles.image} source={require("../../../images/黑茶.png")} />
                            <View>
                                <Text style={styles.headerText}>黑茶</Text>
                                <Text style={{ marginLeft: pxToDp(15), opacity: 0.4 }}>属后发酵茶</Text>
                            </View>
                            <View>
                                <Image style={{ width: pxToDp(20), height: pxToDp(20), marginLeft: pxToDp(160) }} source={touch4 ? point : pointlater} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: pxToDp(340), height: pxToDp(1), marginLeft: pxToDp(15), backgroundColor: "black", opacity: 0.2 }}></View>
                    <Collapsible collapsed={this.state.col} align="center">
                        <View style={styles.content}>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>藏青</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>老青砖</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>六堡茶</Text></TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>湖南黑茶</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>四川黑茶</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>       </Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Collapsible>


                    {/* 5 */}
                    <TouchableOpacity onPress={this.toggle}>
                        <View style={styles.header}>
                            <Image style={styles.image} source={require("../../../images/普洱.png")} />
                            <View>
                                <Text style={styles.headerText}>普洱</Text>
                                <Text style={{ marginLeft: pxToDp(15), opacity: 0.4 }}>可清饮，可混饮，经久耐泡</Text>
                            </View>
                            <View>
                                <Image style={{ width: pxToDp(20), height: pxToDp(20), marginLeft: pxToDp(65) }} source={touch5 ? point : pointlater} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: pxToDp(340), height: pxToDp(1), marginLeft: pxToDp(15), backgroundColor: "black", opacity: 0.2 }}></View>
                    <Collapsible collapsed={this.state.five} align="center">
                        <View style={styles.content}>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>柑普</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>熟茶</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>生茶</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Collapsible>


                    {/* 6 */}
                    <TouchableOpacity onPress={this.togg}>
                        <View style={styles.header}>
                            <Image style={styles.image} source={require("../../../images/白茶.png")} />
                            <View>
                                <Text style={styles.headerText}>白茶</Text>
                                <Text style={{ marginLeft: pxToDp(15), opacity: 0.4 }}>属微发酵茶</Text>
                            </View>
                            <View>
                                <Image style={{ width: pxToDp(20), height: pxToDp(20), marginLeft: pxToDp(160) }} source={touch6 ? point : pointlater} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: pxToDp(340), height: pxToDp(1), marginLeft: pxToDp(15), backgroundColor: "black", opacity: 0.2 }}></View>
                    <Collapsible collapsed={this.state.fi} align="center">
                        <View style={styles.content}>
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: pxToDp(15) }}>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>寿眉贡眉</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>白牡丹</Text></TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: pxToDp(80), height: pxToDp(30), borderRadius: pxToDp(15) }}><Text>白毫银针</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Collapsible>
                    <View style={{ width: "100%", height: pxToDp(80) }}></View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: pxToDp(60),
        height: pxToDp(60),
        borderRadius: pxToDp(40),
        marginLeft: pxToDp(20)
    },
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',

    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 20,
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: pxToDp(80),
    },
    headerText: {
        marginLeft: pxToDp(15),
        fontWeight: "bold",
        fontSize: pxToDp(18),
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
    },
    active: {
        backgroundColor: 'rgba(255,255,255,1)',
    },
    inactive: {
        backgroundColor: 'rgba(245,252,255,1)',
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});
export default TeastTea;