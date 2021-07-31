/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Otherbanner from '../../../components/Otherbanner/index';
import ImagePicker from 'react-native-image-crop-picker';
import { pxToDp } from '../../../utils/stylesKits';
import {Input} from 'react-native-elements';
var ScreenWidth = Dimensions.get('window').width;
const {height, width} = Dimensions.get('window');
export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isCheck: false,
      isCleck2: false,
      isCleck3: false,
    };
  }
  tianjia() {
    if (this.state.arr != null && this.state.arr.length >= 4) {
      //这里的判断根据所传图片张数定
      return;
    } else {
      return (
        <TouchableOpacity activeOpacity={1} onPress={() => this._openPicker()}>
          <Image
            source={require('../../../images/addimg.png')}
            style={{width: pxToDp(90), height: pxToDp(90)}}
          />
        </TouchableOpacity>
      );
    }
  }
  //打开本地图册
  _openPicker() {
    ImagePicker.openPicker({
      cropping: true,
      multiple: true,
      maxFiles: 4,
    }).then(image => {
      this.setState({
        arr: image,
      });
      //     const {arr} = this.state;
      //    arr.push(image);
      //     this.setState({arr})
      //     console.log('arr',arr[1])
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Otherbanner title="意见反馈" back="arrow-back" />
        <ScrollView>
          <View>
            <Text style={{fontSize: pxToDp(20), margin: pxToDp(10)}}>反馈类型</Text>
          </View>
          <View style={styles.smallbox}>
            <View style={styles.smallkidbox}>
              <TouchableOpacity
                style={{backgroundColor: this.state.isCheck ? 'blue' : 'gray'}}
                onPress={() => {
                  this.setState({isCheck: !this.state.isCheck});
                }}>
                <Text style={styles.smallboxtext}>产品建议</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.smallkidbox}>
              <TouchableOpacity
                style={{backgroundColor: this.state.isCheck2 ? 'blue' : 'gray'}}
                onPress={() => {
                  this.setState({isCheck2: !this.state.isCheck2});
                }}>
                <Text style={styles.smallboxtext}>功能故障</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.smallkidbox}>
              <TouchableOpacity
                style={{backgroundColor: this.state.isCheck3 ? 'blue' : 'gray'}}
                onPress={() => {
                  this.setState({isCheck3: !this.state.isCheck3});
                }}>
                <Text style={styles.smallboxtext}>其他问题</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Input
              style={{
                height: pxToDp(180),
                width: pxToDp(412),
                textAlign: 'left',
                textAlignVertical: 'top',
              }}
              placeholder="记录这一刻，分享每一天..."
              minHeight={6} // 最小高度,默认为100
              maxLength={255} // 最大长度,默认为100
              onChangeText={inputValue => {
                // let desPrizes = CommonMethod.filteremoji(inputValue, 1)//表情过滤机制
                // this.setState({ desPrizes: desPrizes })
              }}
              showCount={true} // 展示剩余文字, 默认为true
            />
            <View style={{flexDirection: 'row'}}>
              {this.tianjia()}
              {this.state.arr.map((v, k) => {
                return (
                  <View style={styles.Box} key={k}>
                    <TouchableOpacity>
                      <Image
                        style={{
                          height: pxToDp(90),
                          width: pxToDp(90),
                        }}
                        source={{uri: v.path}}
                      />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
            <View style={{height: pxToDp(100), marginTop: pxToDp(20)}}>
              <Text style={{fontSize: pxToDp(16), color: '#eee', margin: pxToDp(10)}}>
                联系方式
              </Text>
              <Input
                style={{height: pxToDp(50), fontSize: pxToDp(15)}}
                placeholder="请输入手机号便于联系（非必填）"
                placeholderTextColor="gray"
              />
            </View>
          </View>
        </ScrollView>
        <View style={{flex: 1}}></View>
        <View
          style={{
            position: 'absolute',
            top: pxToDp(653),
            backgroundColor: '#fd2a53',
            width: '100%',
            height: pxToDp(50),
          }}>
          <TouchableOpacity
            style={{width: '100%', height: '100%'}}
            //  onPress={() => this.context.navigate('XXX')}
          >
            <Text
              style={{
                alignSelf: 'center',
                top: pxToDp(15),
                fontSize: pxToDp(18),
                color: '#fff',
              }}>
              提交反馈
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  smallbox: {
    height: pxToDp(50),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  smallkidbox: {
    backgroundColor: '#bbb',
    width: pxToDp(120),
    justifyContent: 'center',
  },
  smallboxtext: {
    fontSize: pxToDp(16),
    height: pxToDp(50),
    textAlign: 'center',
    lineHeight: pxToDp(50),
  },
  Box: {
    marginRight: pxToDp(10),
    marginBottom: pxToDp(10),
    marginTop: pxToDp(16),
  },
});
