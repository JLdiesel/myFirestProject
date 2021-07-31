import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import TopBar from './components/TopBar';
// 引入子页面
import Recommend from './recommend/index';
import TeaRhyme from './teaRhyme/index';
import Crostalk from './crostalk/index';
import Elegance from './elegance/index';

export default () => {
    return <ScrollableTabView
      style={{}}
      initialPage={0}
      renderTabBar={() => <TopBar style={{backgroundColor:'#fff'}} />}
    >
      <Recommend tabLabel='推荐'></Recommend>
      <TeaRhyme tabLabel='茶香古韵'></TeaRhyme>
      <Crostalk tabLabel='相声曲艺'></Crostalk>
      <Elegance tabLabel='百年风华'></Elegance>
      {/* 暂定一个直播按钮 */}
      {/* <Elegance tabLabel={<View><Text>4545</Text></View>}></Elegance> */}
    </ScrollableTabView>;
  }

// export default index;