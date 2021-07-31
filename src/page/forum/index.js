import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import TopBar from '../cultural/home/components/TopBar';
// 引入子页面
import Find from './find/index';
import Recom from './recom/index';
import LiveStream from './liveStream/index';
export default () => {
    return <ScrollableTabView
        style={{}}
        initialPage={0}
        renderTabBar={() => <TopBar style={{ backgroundColor: '#fff' }} />}
    >
        <Recom tabLabel='推荐'></Recom>
        <Find tabLabel='发现'></Find>
        <LiveStream tabLabel='直播'></LiveStream>


        {/* <Find tabLabel='发现'></Find> */}

        {/* 暂定一个直播按钮 */}
        {/* <Elegance tabLabel={<View><Text>4545</Text></View>}></Elegance> */}
    </ScrollableTabView>;
}

// export default index;