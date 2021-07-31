import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Svg from 'react-native-svg-uri';
import { friend, selectedFriend, group, selectedGroup, message, selectedMessage, my, selectedMy, testSoul } from './images/fonts/iconSvg'
import { pxToDp } from './utils/stylesKits';
//这里导入底部导航栏页面对应的页面路径

//首页
import HomePage from './page/homePage/index';
//商城
import ShopHome from './page/shopHome/index';
//茶馆
import Cultural from './page/cultural/home';
//茶桌
import Forum from './page/forum/index';
//个人中心
// import My from './page/my/home';
import Center from './page/center/index';


class Tabbar extends Component {

    state = {
        //初始选中的页面
        // selectedTab: "HomePage",
        pages: [
            {
                //选中的导航位置
                selected: "HomePage",
                title: "首页",//页面名字
                //未选中时的图标
                renderIcon: () => <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require("./images/首页.png")}></Image>,
                //选中后的图标
                renderSelectedIcon: () => <Image style={{ width: pxToDp(25), height: pxToDp(25) }} source={require("./images/首页.png")}></Image>,
                //点击事件进行跳转
                onPress: () => this.setState({ selectedTab: 'HomePage' }),
                //跳转的页面
                component: <HomePage />
            },
            {
                selected: "ShopHome",
                title: "商城",
                renderIcon: () => <Image style={{ width: pxToDp(20), height: pxToDp(20) }} source={require("./images/商城.png")}></Image>,
                renderSelectedIcon: () => <Image style={{ width: pxToDp(25), height: pxToDp(25) }} source={require("./images/商城.png")}></Image>,
                onPress: () => this.setState({ selectedTab: 'ShopHome' }),
                component: <ShopHome />
            },
            {
                selected: "cultural",
                title: "茶馆",
                renderIcon: () => <View style={{ backgroundColor: '#50935E',opacity:0.8,borderRadius: pxToDp(60), height: pxToDp(50), width: pxToDp(50), justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: pxToDp(40), height: pxToDp(40) }} source={require("./images/茶馆.png")}></Image>                
                </View>,
                // renderSelectedIcon: () => <Svg width="50" height="50" svgXmlData={selectedGroup}></Svg>,
                renderSelectedIcon: () => <View style={{ width: pxToDp(50), height: pxToDp(50), backgroundColor: "#50935E", borderRadius: pxToDp(60) ,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{ width: pxToDp(45), height: pxToDp(45) }} source={require("./images/茶馆.png")}></Image>                
                </View>,

                onPress: () => this.setState({ selectedTab: 'cultural' }),
                component: <Cultural />
            },
            {
                selected: "Forum",
                title: "茶桌",
                renderIcon: () => <Image style={{ width: pxToDp(23), height: pxToDp(23) }} source={require("./images/论坛.png")}></Image>,
                renderSelectedIcon: () => <Image style={{ width: pxToDp(28), height: pxToDp(28) }} source={require("./images/论坛.png")}></Image>,
                onPress: () => this.setState({ selectedTab: 'Forum' }),
                component: <Forum />
            },
            {
                selected: "Center",
                title: "个人中心",
                renderIcon: () => <Image style={{ width: pxToDp(22), height: pxToDp(22) }} source={require("./images/我的.png")}></Image>,
                renderSelectedIcon: () => <Image style={{ width: pxToDp(27), height: pxToDp(27) }} source={require("./images/我的.png")}></Image>,
                onPress: () => this.setState({ selectedTab: 'Center' }),
                component: <Center />
            },
        ]
    }

    constructor(props) {
        super(props);
        // selectedTab: "group",
        let selectedTab = "HomePage";
        if (this.props.route.params && this.props.route.params.pagename) {
            selectedTab = this.props.route.params.pagename;
        }
        this.state.selectedTab = selectedTab;
    }

    render() {
        const { selectedTab, pages } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <TabNavigator>
                    {pages.map((v, i) =>
                        <TabNavigator.Item key={i}
                            selected={selectedTab === v.selected}
                            title={v.title}
                            renderIcon={v.renderIcon}
                            renderSelectedIcon={v.renderSelectedIcon}
                            onPress={v.onPress}
                            titleStyle={{ color: 'white', fontSize: pxToDp(12) }}
                            selectedTitleStyle={{ color: "white", fontSize: pxToDp(13), fontWeight: 'bold' }}
                            tabStyle={{
                                backgroundColor: "#50935E", alignItems: 'center',
                            }}
                        >
                            {v.component}
                        </TabNavigator.Item>)}
                </TabNavigator>
            </View>
        );
    }
}

export default Tabbar