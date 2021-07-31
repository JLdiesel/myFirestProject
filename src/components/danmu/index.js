/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * BarrageItem里修改文本显示情况  加头像！！！
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground ,Image} from 'react-native';
import BarrageMoveView from './components/BarrageMoveView';
import BarrageInputView from './components/BarrageInputView';
import UI from './UI';
import { pxToDp } from '../../utils/stylesKits';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.id = 0;
        this.data = [
            '中国共产党是中国工人阶级的先锋队',
            '中国共产党是我们国家的第一执政党,是共产党带领我们过上了好的生活',
            '自己一直信仰中共产党，而这个信仰就像一个目标，人生就是为着目标而不断努力的',
            '只有坚守入党初心,才能勇担历史使命',
            '不忘初心，方得始终',
            '只有在共产党的领导下，中国革命才会胜利',
            '在现在，只有在共产党的领导下，才能凝聚中国人民的力量，办成大事',
            '是因为只有党，才能引导我们走向正确的发展道路、创造更快、更好、更先进的文明',
            '加入中国共产党,意味着人生翻开了崭新的一页',
            '我之所以要加入中国共产党, 是因为中国共产党是有着光荣历史的党',
        ]
    }

    componentDidMount() {
        this.addBarrageWithInterval();
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
        this.interval1 && clearInterval(this.interval1);
    }

    addBarrageWithInterval = () => {
        this.interval = setInterval(() => {
            this.id = this.id + 1;
            // if (this.id > 500) {
            //   clearInterval(this.interval);
            //   this.interval1 = setInterval(() => {
            //     this.id = this.id + 1;
            //     const text = this.getText();
            //     const newData = [{ title: text, id: this.id }];
            //     this.setState({ data: newData });
            //   }, 3000);
            // }
            const text = this.getText();
            const newData = [{ title: text, id: this.id }];
            this.setState({ data: newData });
        }, 100);
    }

    onButtonPress = (text) => {
        this.id = this.id + 1;
        const newData = [{ title: text, id: this.id }];
        this.setState({ data: newData });
    }

    getText = () => {
        const number = this.getRundomNumber(this.data.length - 1);
        return this.data[number];
    }

    getRundomNumber = (max) => {
        return Math.floor(Math.random() * (max + 1));
    }

    render() {
        // console.debug('APP');
        return (
            <View style={styles.container}>
                <ImageBackground style={{ width: "100%", height: pxToDp(260), }} imageStyle={{borderRadius:pxToDp(10)}} source={{uri:'https://img0.baidu.com/it/u=2136887040,1107862539&fm=26&fmt=auto&gp=0.jpg'}}>
                    <View style={styles.barrageView}>
                        <BarrageMoveView newMessages={this.state.data} numberOfLines={10} speed={1} />
                    </View>
                    <BarrageInputView onButtonPress={this.onButtonPress} />
                </ImageBackground>
                <View style={{ flex: 1 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: UI.IS_IPHONE_X ? 34 : 24,
        backgroundColor: '#F5FCFF',
        paddingBottom: UI.IS_IPHONE_X ? 44 : 0,
        borderRadius:pxToDp(10)
    },
    barrageView: {
        flex: 1,
        marginTop: 20,
        // height: UI.size.screenHeight / 2,
        // borderWidth: 1,
    },
});
