/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import SwpierItem from '../../../components/swpierItem/index';
import {SwipeListView} from 'react-native-swipe-list-view';
import Otherbanner from '../../../components/Otherbanner/index';
import { NavigationContext } from '@react-navigation/native';
import { pxToDp } from '../../../utils/stylesKits';

class SwiperListItem extends Component {
  state = {
   checkedId:1,
    isClick: true,
    listData:[
      {
        id:1,
        name: '乔布斯',
        phonenumber: '15257129931',
        province: '浙江省',
        city: '宁波市',
        address: '镇海区',
      },
      {
        id:2,
        name: '马云',
        phonenumber: '18657422253',
        province: '浙江省',
        city: '杭州市',
        address: '萧山区',
      },
      {
        id:3,
        name: '巴菲特',
        phonenumber: '13258467745',
        province: 'zhengjiang',
        city: '温州市',
        address: '不晓得温州有啥区了',
      },
      {
        id:4,
        name: '马化腾',
        phonenumber: '19854711164',
        province: '浙江省',
        city: '台州市',
        address: '仙居县',
      },
      {
        id:5,
        name: 'dongwei999',
        phonenumber: '999',
        province: 'zhengjiang',
        city: '温州市',
        address: 'zzzz',
      },
      {
        id:6,
        name: 'dongwei999',
        phonenumber: '999',
        province: 'zhengjiang',
        city: '温州市',
        address: 'zzzz',
      },
      {
        id:7,
        name: 'dongwei888',
        phonenumber: '888',
        province: 'zhengjiang',
        city: '杭州市',
        address: 'zzzzzzzzzzzzzzzzzzzzz',
      },
      {
        id:8,
        name: 'dongwei888',
        phonenumber: '888',
        province: 'zhengjiang',
        city: '杭州市',
        address: 'zzzzzzzzzzzzzzzzzzzzz',
      },
    ],
  };
  
  // _renderItem = ({ item }) => {
  //   return (
  //     <SwpierItem
       
  //       itemID={item.id}
  //       key={item.id}
  //       name={item.name}
  //       phonenumber={item.phonenumber}
       
  //       province={item.province}
  //       city={item.city}
  //       address={item.address}
  //     />
  //   );
  // }; renderItem={this._renderItem}
  changeBtn = (id) => {
      this.setState({ checkedId: id });
    };
  static contextType = NavigationContext;
  render() {
    return (
      <View style={styles.outView}>
        <Otherbanner back="arrow-back" title="收货地址" />
       
          <ScrollView>
          <View style={{paddingBottom:pxToDp(105)}}>
            {this.state.listData.map((item, index) => (
              <SwpierItem 
                onPress={() => this.changeBtn(item.id)}
                isChecked={this.state.checkedId===item.id?true:false}
               
                 key={item.id}
                 name={item.name}
                 phonenumber={item.phonenumber}

                 province={item.province}
                 city={item.city}
                 address={item.address}
               />
            )
              
            )}
            </View>
            </ScrollView>
        
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: '#EE3F4D',
            width: '100%',
            height: pxToDp(50),
            borderBottomLeftRadius: pxToDp(8),
            borderTopRightRadius: pxToDp(8),
          }}>
          <TouchableOpacity
            style={{width: '100%', height: '100%'}}
            onPress={() => this.context.navigate('Address')}>
            <Text
              style={{
                alignSelf: 'center',
                top: pxToDp(15),
                fontSize: pxToDp(18),
                color: '#fcfcfc',
              }}>
              新增收货地址
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  outView: {
    flex: 1,
    width: '100%',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: pxToDp(50),
  },
  leftView: {
    width: pxToDp(75),
    alignItems: 'center',
    backgroundColor: 'green',
    height: pxToDp(50),
    justifyContent: 'center',
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: pxToDp(90),
    height: '100%',
  },
  backRightBtnLeft: {
    backgroundColor: 'skyblue',
    left: pxToDp(275),
    width: pxToDp(60),
  },
});

export default SwiperListItem;
