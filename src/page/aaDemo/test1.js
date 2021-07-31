import React, {Component} from 'react';
import {
  TouchableOpacity,
  Button,
  TextInput,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {View, Text, Image} from 'react-native-animatable';
import {pxToDp} from '../../utils/stylesKits';
import ImageFade from '../../components/ImageFade/index';
import SvgUri from 'react-native-svg-uri';
import {male, female} from '../../images/fonts/iconSvg';
import {Input} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import MyButton from '../../components/MyButton';
import Toast from '../../utils/Toast';
import ImagePicker from 'react-native-image-crop-picker';
import {NavigationContext} from '@react-navigation/native';
//验证码框
import {CodeField, Cursor} from 'react-native-confirmation-code-field';
//检查验证码
import {ACCOUNT_VALIDATEVCODE} from '../../utils/pathMap';
import validator from '../../utils/validator';
import request from '../../utils/request';
import {ACCOUNT_LOGIN} from '../../utils/pathMap';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

class test extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      oun: 2,
      // 昵称
      nickname: '',
      password: '',
      code: '',
      // 性别
      gender: '男',
      // 生日
      birthday: '',
      // 城市
      city: '',
      // 头像
      header: '',
      //手机号
      phoneNumber: '',
      //注册手机号
      phoneNumberz: '',
      //手机号码是否合法  登录
      phoneValid: true,
      //手机号码是否合法  注册
      phoneValidz: true,
      //是否显示登入页面
      showLogin: true,
      // 验证码输入框的值
      vcodeTxt: '',
      // 倒计时按钮的文本
      btnText: '获取验证码',
      // 是否在倒计时中
      isCountDowning: false,
      duration: 2000,
      toggledOn: false,
    };
  }

  // 选择性别
  chooeseGender = gender => {
    this.setState({gender});
  };

  // 点击了 设置头像按钮
  chooeseHeadImg = async () => {
    //校验
    const {nickname, birthday} = this.state;

    if (!nickname || !birthday) {
      Toast.sad('昵称或者生日不合法', 2000, 'center');
      return;
    }

    // 获取到 选中后的图片
    const image = await ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    });
  };

  //完成注册前去首页
  GoReaderIndex = async () => {
    // console.log(this.props);
    this.props.navigation.navigate('Tabbar');
  };

  //登录框手机号输入
  phoneNumberChangeText = phoneNumber => {
    this.setState({phoneNumber});
  };
  //手机号点击 完成 触发
  phoneNumberSubmitEditing = async () => {
    /*
            校验手机号合法性
            将手机号发送到后台对应接口->获取验证码 axios
                发送异步请求的时候显示等待框
                请求回来了消失
                自动实现用axios里的拦截器
            将登录页面切换成填写验证码的页面
        */
    //validator.validatorPhone
    const {phoneNumber} = this.state;
    const phoneValid = validator.validatePhone(phoneNumber);
    if (!phoneValid) {
      //没有通过
      this.setState({phoneValid});
      return;
    }
    const res = await request.post(ACCOUNT_LOGIN, {phone: phoneNumber});
    console.log(res);
    if (res.code == '10000') {
      // 请求成功
      this.setState({showLogin: false});
      // 开启定时器
      this.countDown();
    } else {
    }
    //想要弹个弹窗出来显示读取到的res.data（二维码的值），默认为888888
  };
  // 开启获取验证码的定时器
  countDown = () => {
    console.log('开启倒计时');
    if (this.state.isCountDowning) {
      // 如果在倒计时就停止按钮
      return;
    }

    this.setState({isCountDowning: true});

    let seconds = 5;
    // 重新获取(5s)
    this.setState({btnText: `重新获取(${seconds}s)`});
    let timeId = setInterval(() => {
      seconds--;
      this.setState({btnText: `重新获取(${seconds}s)`});
      if (seconds === 0) {
        clearInterval(timeId);
        this.setState({btnText: '重新获取', isCountDowning: false});
      }
    }, 1000);
  };

  // 点击重新获取按钮
  repGetVcode = () => {
    // this.phoneNumberChangeText;
    this.countDown();
  };

  //!!!!没实现，记得补
  // 验证码输入完毕事件
  onVcodeSubmitEditing = async () => {
    /* 
        1 对验证码做校验  长度
        2 将手机号码和验证码 一起发送到后台 
        2.5 
        将用户数据存放到 mobx中
        3 返回值 有 isNew  
        4 新用户 -> 完善个人信息的页面 
        5 老用户 ->  首页
        */
    const {vcodeTxt, phoneNumber} = this.state;
    if (vcodeTxt.length != 6) {
      Toast.message('验证码不正确', 2000, 'center');
      return;
    }

    const res = await request.post(ACCOUNT_VALIDATEVCODE, {
      phone: phoneNumber,
      vcode: vcodeTxt,
    });
    if (res.code != '10000') {
      console.log(res);
      return;
    }
    // console.log(res.data);

    if (res.data.isNew) {
      //  新用户 UserInfo
      this.props.navigation.navigate('Tabbar');
    } else {
      //  老用户
      this.props.navigation.reset({
        routes: [{name: 'Tabbar'}],
      });
    }

    // if(res.data=13291928685){
    //     //  老用户
    //     this.props.navigation.navigate("Tabbar");
    // }else{
    //     //  新用户 UserInfo
    //     this.props.navigation.navigate("UserInfo");
    // }
  };

  //渲染登录页面
  renderLogin = () => {
    const {phoneNumber, phoneValid} = this.state;
    return (
      <View style={{borderRadius: 45}}>
        {/*登录 */}
        <View>
          <Text
            style={{
              fontSize: pxToDp(20),
              color: '#888',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            本机手机号登录
          </Text>
          {/*输入框 */}
          <View style={{marginTop: pxToDp(15)}}>
            <Input
              placeholder="请输入手机号"
              maxLength={11}
              keyboardType="phone-pad"
              value={phoneNumber}
              inputStyle={{color: '#333'}}
              onChangeText={this.phoneNumberChangeText}
              errorMessage={phoneValid ? '' : '手机号码格式不正确'}
              onSubmitEditing={this.phoneNumberSubmitEditing}
              leftIcon={{
                type: 'font-awesome',
                name: 'phone',
                color: '#ccc',
                size: pxToDp(20),
              }} //name为图标类型名字
            />
          </View>
          {/*按钮 */}
          <View>
            <View
              style={{width: '75%', height: pxToDp(40), alignSelf: 'center'}}>
              <MyButton
                onPress={this.phoneNumberSubmitEditing}
                style={{borderRadius: pxToDp(20)}}>
                获取验证码
              </MyButton>
            </View>
            <TouchableOpacity onPress={this.flipOutY}>
              <View style={{alignItems: 'center', marginTop: pxToDp(20)}}>
                <Text style={{fontSize: pxToDp(14)}}>新用户?</Text>
                <Text style={{fontSize: pxToDp(14)}}>点击此处 | 进行注册</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: pxToDp(26),
                }}>
                <Icon1 name="fingerprint" size={60} color={'#ccc'} />
                <Text style={{fontSize: pxToDp(14)}}>指纹登录</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  //渲染填写验证页面
  renderVcode = () => {
    const {phoneNumber, vcodeTxt, btnText, isCountDowning} = this.state;
    return (
      <View>
        <View>
          <Text
            style={{fontSize: pxToDp(25), color: '#aaa', fontWeight: 'bold'}}>
            输入6位验证码
          </Text>
        </View>
        <View style={{marginTop: pxToDp(10), marginBottom: pxToDp(8)}}>
          <Text style={{color: '#aaa'}}>已发到:+86 {phoneNumber}</Text>
        </View>
        <View>
          <CodeField
            value={vcodeTxt}
            onChangeText={this.onVcodeChangeText}
            onSubmitEditing={this.onVcodeSubmitEditing}
            cellCount={6}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={{marginTop: pxToDp(10)}}>
          <MyButton
            disabled={isCountDowning}
            onPress={this.repGetVcode}
            style={{
              width: '85%',
              alignSelf: 'center',
              height: pxToDp(40),
              borderRadius: pxToDp(20),
            }}>
            {btnText}
          </MyButton>
        </View>
      </View>
    );
  };
  // 验证码输入框的值改变事件
  onVcodeChangeText = vcodeTxt => {
    this.setState({vcodeTxt});
  };

  onPress = () => {
    this.setState({
      count: (this.state.count = 9999),
      oun: (this.state.oun = 1),
    });
  };
  onIt = () => {
    this.setState({
      oun: (this.state.oun = 9999),
      count: (this.state.count = 1),
    });
  };
  handleViewRef = ref => (this.view = ref);
  handleTextRef = ref => (this.text = ref);
  handleViewRef1 = ref => (this.view1 = ref);

  // flipOutX = () => this.view.flipOutX(2000).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  flipOutX = () =>
    this.view1.fadeOut(2000).then(endState => this.GoReaderIndex());

  flipOutY = () => this.view.flipOutY(2000).then(endState => this.onIt());
  render() {
    const {
      gender,
      nickname,
      birthday,
      phoneNumberz,
      isCountDowning,
      btnText,
      password,
      code,
      phoneValidz,
    } = this.state;
    const dateNow = new Date();
    const currentDate = `${dateNow.getFullYear()}-${
      dateNow.getMonth() + 1
    }-${dateNow.getDate()}`;

    const {showLogin} = this.state;

    return (
      <ImageBackground
        style={{width: '100%', height: '111%'}}
        source={require('../../images/shouye5.jpg')}>
        <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              animation="fadeInDown"
              delay={1000}
              ref={this.handleViewRef}
              style={{
                position: 'absolute',
                zIndex: this.state.oun,
                // justifyContent: 'center',
                // alignItems: 'center',
                top: pxToDp(110),
                left: pxToDp(17),
                width: pxToDp(340),
                height: pxToDp(490),
                margin: pxToDp(10),
                elevation: this.state.oun,
                backgroundColor: '#50935E',
                borderRadius: pxToDp(20),
                padding: pxToDp(20),
                // opacity: 0.8
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View
                  style={{
                    width: pxToDp(295),
                    height: pxToDp(450),
                    backgroundColor: '#fff',
                    borderRadius: pxToDp(20),
                  }}>
                  <View style={{margin: pxToDp(10), marginTop: pxToDp(120)}}>
                    {showLogin ? this.renderLogin() : this.renderVcode()}
                  </View>
                </View>
              </View>
            </View>

            {/* //注册 */}
            <View
              animation="fadeInUp"
              delay={1000}
              ref={this.handleViewRef1}
              style={{
                position: 'absolute',
                zIndex: this.state.count,
                // justifyContent: 'center',
                // alignItems: 'center',
                top: pxToDp(100),
                left: pxToDp(8),
                width: pxToDp(340),
                height: pxToDp(490),
                // margin: pxToDp(40),
                elevation: this.state.count,
                backgroundColor: '#D2DFD5',
                borderRadius: pxToDp(20),
                padding: pxToDp(20),
                // opacity: 0.8
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <View
                  style={{
                    width: pxToDp(295),
                    height: pxToDp(450),
                    backgroundColor: '#fff',
                    borderRadius: pxToDp(20),
                  }}>
                  <View style={{margin: pxToDp(10)}}>
                    <View>
                      <Text
                        style={{
                          fontSize: pxToDp(20),
                          color: '#666',
                          fontWeight: 'bold',
                        }}>
                        填写资料
                      </Text>
                      <Text
                        style={{
                          fontSize: pxToDp(20),
                          color: '#666',
                          fontWeight: 'bold',
                        }}>
                        开启你的茶余之旅
                      </Text>
                    </View>
                    {/* 昵称 */}
                    <View style={{marginTop: pxToDp(10)}}>
                      <Input
                        value={nickname}
                        placeholder="设置昵称"
                        onChangeText={nickname => this.setState({nickname})}
                        leftIcon={
                          <Icon1 name="person-pin" size={22} color={'#ccc'} />
                        } //name为图标类型名字
                      />
                    </View>
                    {/*手机号 */}
                    <View>
                      <Input
                        placeholder="请输入手机号"
                        maxLength={11}
                        keyboardType="phone-pad"
                        value={phoneNumberz}
                        inputStyle={{color: '#333'}}
                        onChangeText={this.phoneNumberChangeText}
                        errorMessage={phoneValidz ? '' : '手机号码格式不正确'}
                        // onSubmitEditing={this.phoneNumberSubmitEditing}
                        leftIcon={{
                          type: 'font-awesome',
                          name: 'phone',
                          color: '#ccc',
                          size: pxToDp(20),
                        }} //name为图标类型名字
                      />
                    </View>
                    {/* 昵称 */}
                    <View>
                      <Input
                        value={password}
                        placeholder="请输入6-16位密码"
                        leftIcon={
                          <Icon1 name="visibility" size={20} color={'#ccc'} />
                        } //name为图标类型名字
                        onChangeText={password => this.setState({password})}
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Input
                        value={code}
                        placeholder="请输入验证码"
                        onChangeText={code => this.setState({code})}
                        leftIcon={<Icon name="key" size={20} color={'#ccc'} />}
                        rightIcon={
                          <View>
                            {/* <MyButton  > */}
                            <TouchableOpacity onPress={this.repGetVcode}>
                              <View
                                disabled={isCountDowning}
                                style={{
                                  width: pxToDp(80),
                                  alignSelf: 'center',
                                  height: pxToDp(24),
                                  borderRadius: pxToDp(10),
                                  backgroundColor: '#eee',
                                  justifyContent: 'center',
                                  alignItems: 'center',
                                }}>
                                <Text style={{fontSize: pxToDp(12)}}>
                                  {btnText}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            {/* </MyButton> */}
                          </View>
                        }
                      />
                    </View>
                    {/* 生日日期 */}
                    {/* <View>
                                            <DatePicker
                                                androidMode="spinner"
                                                style={{ width: "100%" }}
                                                date={birthday}
                                                mode="date"
                                                placeholder="设置生日"
                                                format="YYYY-MM-DD"
                                                minDate="1900-01-01"
                                                maxDate={currentDate}
                                                confirmBtnText="确定"
                                                cancelBtnText="取消"
                                                customStyles={{
                                                    dateIcon: { display: "none" },
                                                    dateInput: { marginLeft: pxToDp(10), borderWidth: 0, borderBottomWidth: pxToDp(1.1), alignItems: "flex-start", paddingLeft: pxToDp(4) },
                                                    placeholderText: { fontSize: pxToDp(18), color: "#afafaf" }
                                                }}
                                                onDateChange={(birthday) => { this.setState({ birthday }) }}
                                            />
                                        </View> */}
                    {/* 进入首页 */}
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <MyButton
                        onPress={this.flipOutX}
                        style={{
                          height: pxToDp(40),
                          width: pxToDp(100),
                          borderRadius: pxToDp(10),
                          marginTop: pxToDp(10),
                        }}>
                        注册
                      </MyButton>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* {this.renderLogin()}
                {this.renderRegister()} */}
          </View>
        </View>
        <View style={{marginTop: pxToDp(565), width: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {/* <TouchableOpacity onPress={this.onIt}>
                            <ImageBackground style={{ width: pxToDp(120), height: pxToDp(100), justifyContent: 'center', alignItems: 'center' }} source={require('../../images/123.png')}>
                                <Text style={{ fontSize: pxToDp(24), marginLeft: pxToDp(32) }}>登录</Text>
                            </ImageBackground>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onPress}>
                            <ImageBackground style={{ width: pxToDp(120), height: pxToDp(100), justifyContent: 'center', alignItems: 'center' }} source={require('../../images/1234.png')}>
                                <Text style={{ fontSize: pxToDp(24), marginRight: pxToDp(24), }}>注册</Text>
                            </ImageBackground>
                        </TouchableOpacity> */}
          </View>
          <Image
            style={{
              width: '100%',
              height: pxToDp(190),
              position: 'absolute',
              zIndex: 99999,
              elevation: 9999,
            }}
            source={require('../../images/shouye1.png')}></Image>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  CodeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    textAlign: 'center',
    color: '#7d53ea',
  },
  focusCell: {
    borderColor: '#7d53ea',
  },
});

export default test;
