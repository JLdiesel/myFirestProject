import React, {Component} from 'react';
import {View, Text} from 'react-native-animatable';
import PropTypes from 'prop-types';
/**
 * // 数组类型
PropTypes.array

// 布尔类型
PropTypes.bool

// 函数类型
PropTypes.func

// 数值类型
PropTypes.number

// 对象类型
PropTypes.object

// 字符串类型
PropTypes.string

// 规定prop为必传字段
PropTypes.(类型).isRequired

// prop为任意类型
PropTypes.any.isRequired
 */
class test2 extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
  };

  static defaultProps = {
    name: 'scottDefault',
    age: 12,
  };

  render() {
    return (
      <View style={{height: 80, height: 80, backgroundColor: 'white'}}>
        <Text>组件名字:{this.props.name}</Text>
        <Text>组件年龄:{this.props.age}</Text>
      </View>
    );
  }
}

export default test2;
