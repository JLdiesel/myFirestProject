/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import Otherbanner from '../../../components/Otherbanner/index';
import {Input} from 'react-native-elements';
import Picker from 'react-native-picker';
import CityJson from '../citys.json';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonS from '../../../components/ButtonS/index';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/stylesKits';
export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      phone: '',
      Zipcode: '',
      Buttonvalue: false,
      city: '',
    };
  }
  static contextType = NavigationContext;
  //选择地区
  showCityPicker = () => {
    //初始化组件
    Picker.init({
      pickerData: CityJson,
      selectedValue: ['北京', '北京'],
      wheelFlex: [1, 1, 0], // 显示省和市
      pickerConfirmBtnText: '确定',
      pickerCancelBtnText: '取消',
      pickerTitleText: '选择城市',
      onPickerConfirm: data => {
        // data =  [浙江，杭州，西湖区]
        this.setState({
          city: data[1],
        });
      },
    });
    //显示组件
    Picker.show();
  };
  render() {
    return (
      <View>
        <Otherbanner title="地址管理" back="arrow-back" />
        <View style={s.top}>
          <View style={{height: pxToDp(45)}}>
            <Input
              placeholder="姓名"
              onChangeText={person => this.setState({person})}
              style={{
                height: pxToDp(45),
              }}
              leftIcon={<Text style={{fontSize: pxToDp(18)}}>收 货 人</Text>}
            />
          </View>
          <View style={{height: pxToDp(45)}}>
            <Input
              placeholder="11位手机号"
              onChangeText={phone => this.setState({phone})}
              style={{
                height: pxToDp(45),
              }}
              leftIcon={<Text style={{fontSize: pxToDp(18)}}>联系电话</Text>}
            />
          </View>
        </View>
        <View style={s.center}>
          <View style={{height: pxToDp(pxToDp(45))}}>
            <TouchableOpacity onPress={this.showCityPicker}>
              <Input
                inputStyle={{color: 'black'}}
                leftIcon={<Text style={{fontSize: pxToDp(18)}}>所在地区：</Text>}
                value={this.state.city}
                disabled={true}
                rightIcon={
                  <Text style={{fontSize: pxToDp(17), color: '#666'}}>
                    {this.state.city ? '' : '请选择所在地区'}
                    {this.state.city ? (
                      ''
                    ) : (
                      <AntDesign name="right" size={pxToDp(17)} color="#666" />
                    )}
                  </Text>
                }
              />
            </TouchableOpacity>
          </View>
          <View>
            <Input
              style={{
                height: pxToDp(100),
                fontSize: pxToDp(17),
                placeholder: '街道门牌信息',
                textAlign: 'left',
                textAlignVertical: 'top',
                borderColor: '#666',
              }}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>
        <View style={{height: pxToDp(45)}}>
          <Input
            placeholder="邮政编码"
            onChangeText={Zipcode => this.setState({Zipcode})}
            style={{
              height: pxToDp(45),
            }}
            leftIcon={<Text style={{fontSize: pxToDp(18)}}>邮政编码</Text>}
          />
        </View>
        <View style={{height: pxToDp(45), marginTop: pxToDp(20)}}>
          <View style={s.bottom}>
            <View style={{justifyContent: 'center', height: pxToDp(45)}}>
              <Text style={{fontSize: pxToDp(17)}}>设为默认地址</Text>
            </View>
            <View>
              <Switch
                style={{marginTop: pxToDp(10), marginRight: pxToDp(10)}}
                //动态改变value
                value={this.state.value}
                //当切换开关室回调此方法
                onValueChange={value => {
                  this.setState({value: value});
                }}
              />
            </View>
          </View>
        </View>
        <ButtonS
          style={{
            marginTop: pxToDp(20),
            width: pxToDp(380),
            height: pxToDp(50),
            borderRadius: pxToDp(50),
            alignSelf: 'center',
          }}
          onPress={() => this.context.navigate('AddressList')}>
          <Text>保存</Text>
        </ButtonS>
      </View>
    );
  }
}
const s = StyleSheet.create({
  top: {
    height: pxToDp(100),
  },
  center: {
    height: pxToDp(160),
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: pxToDp(10),
  },
});
