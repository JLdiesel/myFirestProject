import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//登陆
// import Login from "./page/account/login/test";
//注册
// import UserInfo from "./page/account/userinfo";
//底部导航栏 导航
import Tabbar from "./tabbar";
//大师说茶
import Talk from "./page/talk/talk";
//音频播放器
import MusicPlayer from "./page/musicPlayer/musicPlayer";
//中华茶史
import History from "./page/home/history";
//茶具知识
import TeaSet from "./page/home/knowledge";
//课程简介
import TeaKnow from "./page/home/introduce";
//视频播放  (老版)
// import Player from "./page/player/player";
//视频播放器
import VideoPlayer from "./page/videoplayer/index";
//茶乡党政 咨询
import HomeNew from "./page/homePage/new/index"
//登陆注册
import Demo from "./page/aaDemo/test1";
//茶的商品页面  有bug  不要乱动
// import TeaShop from "./page/shopHome/teaShop/index";
//商品详情页
import Detail from "./page/shopHome/detail/index";
//商品确定订单
import Order from "./page/shopHome/order/index";
//茶列表
import TeaList from "./page/shopHome/teaList/index";
//话说茶史
import TalkTea from "./page/talkTea/index";
//个人资料编辑页面
import RevisePage from "./page/center/revisePage/index";
//修改昵称
import Nickname from "./page/center/nickname/index";
//修改个签
import Signature from "./page/center/signature/index";
//收货地址
import AddressList from "./page/center/addressList/index";
//新增收货地址
import Address from "./page/center/address/index";
//旅游路线界面
import Tour from "./page/tour/index";
//活动页面
import Activity from "./page/forum/activity/index";
//活动参与报名页面
import ActivityKid from './page/forum/activityKid/index';
//时令茶单详情页
import ShiDan from "./page/homePage/shiDan/index";
//查看订单页面
import OrderDetails from './page/shopHome/orderDetails';
//附近茶馆
import NearTeaHouose from './page/forum/nearTeaHouse/index';
//附近茶馆详情页
import NearTeaHouseDetails from './page/forum/nearTeaHouseDetails/index';
//更多商品
import MoreShop from './page/shopHome/moreShop/index';
//更多党史广播剧
import MoreElegance from './page/cultural/home/elegance/moreElegance/index';
//不同茶的信息
import DifferentTea from './page/homePage/differentTea/index';
//品茶
import TeastTea from './page/homePage/teastTea/index';
//扫一扫
import Sao from './page/saoYi/index';
//假直播
import Zhi from './page/zhiBo/index';
//定制茶包
import DingZhi from './page/shopHome/dingZhi/index';
//全部订单页
import OrderList from './page/center/orderList/index';
//种植茶树首页
import Plant from './page/homePage/plant/index';
//种茶树页面
import TeaHome from './page/homePage/teaHome/index';
//茶馆各详情页
import ListenList from './page/listenList/index';
//论坛内容详情页
import Comments from './page/forum/comments/index';
//反馈输入框
import FeedBack from './page/center/feedBack/index';
//帮助与反馈
import Help from './page/center/help/index';

//创建页面栈
const Stack = createStackNavigator();

function Nav() {
  return (
    //存放页面
    <NavigationContainer>
      {/*headerMode="none"隐藏顶部大标题*/}
      <Stack.Navigator headerMode='none' initialRouteName="Demo">
        {/* 登陆注册 */}
        <Stack.Screen name="Demo" component={Demo} />
        {/* 导航 *5  其中Cultural里还有4个   一共8个*/}
        <Stack.Screen name="Tabbar" component={Tabbar} />
        <Stack.Screen name="Talk" component={Talk} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="TeaSet" component={TeaSet} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="HomeNew" component={HomeNew} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="TalkTea" component={TalkTea} />
        <Stack.Screen name="RevisePage" component={RevisePage} />
        <Stack.Screen name="Nickname" component={Nickname} />
        <Stack.Screen name="Signature" component={Signature} />
        <Stack.Screen name="AddressList" component={AddressList} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Tour" component={Tour} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="ActivityKid" component={ActivityKid} />
        <Stack.Screen name="NearTeaHouose" component={NearTeaHouose} />
        <Stack.Screen name="NearTeaHouseDetails" component={NearTeaHouseDetails} />
        <Stack.Screen name="MoreShop" component={MoreShop} />
        <Stack.Screen name="MoreElegance" component={MoreElegance} />
        <Stack.Screen name="DifferentTea" component={DifferentTea} />
        <Stack.Screen name="TeastTea" component={TeastTea} />
        <Stack.Screen name="TeaList" component={TeaList} />
        <Stack.Screen name="Sao" component={Sao} />
        <Stack.Screen name="Zhi" component={Zhi} />
        <Stack.Screen name="DingZhi" component={DingZhi} />
        <Stack.Screen name="OrderList" component={OrderList} />
        <Stack.Screen name="Plant" component={Plant} />
        <Stack.Screen name="TeaHome" component={TeaHome} />
        <Stack.Screen name="ListenList" component={ListenList} />
        <Stack.Screen name="Comments" component={Comments} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
        <Stack.Screen name="Help" component={Help} />


        {/* ？？？？？ */}
        <Stack.Screen name="TeaKnow" component={TeaKnow} />
        {/* 还没完善 */}
        <Stack.Screen name="ShiDan" component={ShiDan} />
       
        {/* <Stack.Screen name="TeaShop" component={TeaShop} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="UserInfo" component={UserInfo} /> */}
        {/* <Stack.Screen name="Player" component={Player} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;