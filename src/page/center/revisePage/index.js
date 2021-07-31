/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
} from 'react-native';
import Ohterbanner from '../../../components/Otherbanner/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContext} from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';
import CustomAlertDialog from '../../../components/CustomAlertDialog/index';
import ImagePicker from 'react-native-image-crop-picker';
import {pxToDp} from '../../../utils/stylesKits';
import Nickname from '../nickname/index';
import Signature from '../signature/index';

const typeArr = ['男', '女'];
export default class RevisePage extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      typeName: '男',
      showTypePop: false,
      currentIndex: 0,
      records: [],
      modalVisible: false,
      birthday: '',
      touxiang:''
    };
  }

  _openTypeDialog() {
    this.setState({showTypePop: !this.state.showTypePop});
  }
  _changeModal() {
    this.setState({modalVisible: !this.state.modalVisible});
  }
  //打开相册
  chooeseHeadImg = async () => {
    // 获取到 选中后的图片
    const image = await ImagePicker.openPicker({
      width: pxToDp(300),
      height: pxToDp(400),
      cropping: true,
    });
  };
  //打开相机
  _openCamera() {
    ImagePicker.openCamera({
      width: pxToDp(300),
      height: pxToDp(400),
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  }
  render() {
    console.log(this.props.navigation);
    const dateNow = new Date();
    const currentDate = `${dateNow.getFullYear()}-${
      dateNow.getMonth() + 1
    }-${dateNow.getDate()}`;
    const {birthday} = this.state;
    console.log('name', this.props.route.params);
    return (
      <View>
        <Ohterbanner title="个人信息" back="arrow-back" />
        <View style={s.avatar}>
          <View style={{marginLeft: pxToDp(20)}}>
            <Text style={{fontSize: pxToDp(20)}}>头像</Text>
          </View>
          <View style={{marginRight: pxToDp(20)}}>
            <TouchableOpacity onPress={() => this._changeModal()}>
              <Image
                style={{
                  width: pxToDp(60),
                  height: pxToDp(60),
                  borderRadius: pxToDp(60),
                  backgroundColor: 'gray',
                }}
                source={require('../../../images/head2.jpg')}
              />
            </TouchableOpacity>
            <View>
              {/* Modal组件实现弹窗显示图片选择 */}
              <Modal
                visible={this.state.modalVisible}
                animationType={'fade'}
                transparent={true}
                onRequestClose={() => this.onRequestClose()}>
                <View style={s.alertBackground}>
                  <View style={s.alertBox}>
                    <Text style={s.modalTitle}>请选择</Text>
                    <TouchableHighlight
                      underlayColor={'#F5F5F5'}
                      onPress={this._openCamera}>
                      <Text style={s.modalItem}>打开相机</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={'#F5F5F5'}
                      onPress={this.chooeseHeadImg}>
                      <Text style={s.modalItem}>打开相册</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor={'#F5F5F5'}
                      onPress={() => this._changeModal()}>
                      <Text style={s.modalItem}>取消</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.context.navigate('Nickname')}>
          <View style={s.basic}>
            <View style={{marginLeft: pxToDp(20)}}>
              <View style={{marginTop: pxToDp(20)}}>
                <Text style={{fontSize: pxToDp(16), color: '#aaa'}}>昵称</Text>
                <Text style={{fontSize: pxToDp(20), marginTop: pxToDp(10)}}>
                  {this.props.route.params
                    ? this.props.route.params.nickname
                    : '胡先生'}
                </Text>
              </View>
            </View>
            <View style={{marginRight: pxToDp(20)}}>
              <AntDesign name="right" size={pxToDp(18)} color="#000" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={s.basic}>
          <View style={{marginLeft: pxToDp(20)}}>
            <Text
              style={{
                fontSize: pxToDp(16),
                color: '#aaa',
                marginTop: pxToDp(20),
              }}>
              性别
            </Text>
            <TouchableHighlight
              onPress={() => this._openTypeDialog()}
              style={s.button}
              underlayColor="#a5a5a5">
              <Text style={{fontSize: pxToDp(20), marginTop: pxToDp(-5)}}>
                {this.state.typeName}
              </Text>
            </TouchableHighlight>

            <CustomAlertDialog
              entityList={typeArr}
              callback={i => {
                this.setState({
                  typeName: typeArr[i],
                });
              }}
              show={this.state.showTypePop}
              closeModal={show => {
                this.setState({
                  showTypePop: show,
                });
              }}
            />
          </View>
          <View style={{marginRight: pxToDp(20)}}>
            <AntDesign name="right" size={pxToDp(18)} color="#000" />
          </View>
        </View>
        <TouchableOpacity onPress={() => this.context.navigate('Signature')}>
          <View style={s.basic}>
            <View style={{marginLeft: pxToDp(20), flex: 1}}>
              <View style={{marginTop: pxToDp(20)}}>
                <Text style={{fontSize: pxToDp(16), color: '#aaa'}}>
                  个性签名
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode={'tail'}
                  style={{fontSize: pxToDp(20), marginTop: pxToDp(10)}}>
                  {this.props.route.params
                    ? this.props.route.params.signature
                    : '己所不欲 勿施于人'}
                </Text>
              </View>
            </View>
            <View style={{marginRight: pxToDp(20), width: pxToDp(20)}}>
              <AntDesign name="right" size={pxToDp(18)} color="#000" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={s.basic}>
          <View style={{marginLeft: pxToDp(20)}}>
            <Text
              style={{
                fontSize: pxToDp(16),
                color: '#aaa',
                marginBottom: pxToDp(10),
              }}>
              生日
            </Text>
            <DatePicker
              androidMode="spinner"
              placeholder="设置生日"
              date={birthday}
              minDate="1900-01-01"
              maxDate={currentDate}
              confirmBtnText="确定"
              cancelBtnText="取消"
              customStyles={{
                dateIcon: {
                  display: 'none',
                },
                dateInput: {
                  borderWidth: 0,
                  alignItems: 'flex-start',
                },
                placeholderText: {
                  fontSize: pxToDp(20),
                  color: '#afafaf',
                },
              }}
              onDateChange={birthday => {
                this.setState({birthday});
              }}
            />
          </View>
          <View style={{marginRight: pxToDp(20)}}>
            <AntDesign name="right" size={pxToDp(18)} color="#000" />
          </View>
        </View>
      </View>
    );
  }
}

const s = StyleSheet.create({
  avatar: {
    height: pxToDp(100),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  basic: {
    height: pxToDp(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    marginTop: pxToDp(20),
    marginLeft: pxToDp(5),
  },
  alertBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 如果要遮罩要显示成半透明状态，这里一定要设置，reba中的a控制透明度，取值在 0.0 ～ 1.0 范围内。
  },

  alertBox: {
    width: pxToDp(300),
    height: pxToDp(250),
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    borderRadius: pxToDp(30),
  },
  modalTitle: {
    width: '70%',
    fontSize: pxToDp(25),
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomWidth: 1.1,
    borderBottomColor: '#AFAFAF',
  },
  modalItem: {
    fontSize: pxToDp(18),
    alignSelf: 'center',
  },
});
