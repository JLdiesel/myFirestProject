import React, {Component} from 'react';
import {View, Text, Animated, ScrollView} from 'react-native';

class test4 extends Component {
  constructor(props) {
    super(props);
    this._top = 500;
    this.state = {
      topValue: new Animated.Value(this._top),
    };
  }

  render() {
    Animated.timing(this.state.fadeAnim, {
      toValue: 100,
      duration: 500,
    }).start(() => {
      this.setState({listScroll: false}); // 开启 or 关闭 ScrollView 滚动
    });
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture:
        this._handleMoveShouldSetPanResponderCapture,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
    });
    _handlePanResponderEnd = (event, gestureState) => {
      // 我们只需要在这里判断 gestureState.dy 的值是否为正负
      if (gestureState.dy < 0) {
        // 执行向上移动画
      }
    };
    this._handleScrollEnd = e => {
      this._switchScrollBottom = e.nativeEvent.contentOffset.y; // 保存最后滚动位置
    };
    // 在申请成功时候保存上次滚动
    _handlePanResponderGrant = (event, gestureState) => {
      this._previousScrollValue = this._switchScrollBottom;
    };
    _handlePanResponderEnd = (event, gestureState) => {
      // 如果上次滚动和这次滚动位置的值一样，证明没有滚动， 已经到达顶部了。
      // 这时候则触发移动至 bottom 的动画
      if (gestureState.dy > 0) {
        if (this._previousScrollValue == this._switchScrollBottom) {
          this._scrollAnimToBotton();
        }
      }
    };

    return (
      <View>
        <ScrollView
          {...this._panResponder.panHandlers} // 绑定手势响应
          style={{position: 'absolute', top: 500, height: '展开后的高度'}}
          onScroll={this._handleScrollEnd} // 每次滚动记录滚动位置
          scrollEventThrottle={16} // 设置 onScroll 触发频率，一般为 16
        >
          <View>
            <Text>1546</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default test4;
