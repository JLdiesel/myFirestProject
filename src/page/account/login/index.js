import React, { Component } from 'react';
import { View, Text, Image, StatusBar, Alert, Button, StyleSheet, } from 'react-native';
import { pxToDp } from "../../../utils/stylesKits";
//element组件
import { Input } from "react-native-elements";
import validator from "../../../utils/validator";
import request from "../../../utils/request";
import { ACCOUNT_LOGIN } from "../../../utils/pathMap";
import MyButton from "../../../components/MyButton/index";
//验证码框
import { CodeField, Cursor } from 'react-native-confirmation-code-field';
//检查验证码
import { ACCOUNT_VALIDATEVCODE } from "../../../utils/pathMap";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContext } from "@react-navigation/native";


class index extends Component {

    static contextType = NavigationContext;

    state = {
        //手机号
        phoneNumber: "",
        //手机号码是否合法
        phoneValid: true,
        //是否显示登入页面
        showLogin: true,
        // 验证码输入框的值
        vcodeTxt: "",
        // 倒计时按钮的文本
        btnText: "重新获取",
        // 是否在倒计时中
        isCountDowning: false

    }

    //登录框手机号输入
    phoneNumberChangeText = (phoneNumber) => {
        this.setState({ phoneNumber });
    }
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
        const { phoneNumber } = this.state;
        const phoneValid = validator.validatePhone(phoneNumber);
        if (!phoneValid) {
            //没有通过
            this.setState({ phoneValid });
            return;
        }
        const res = await request.post(ACCOUNT_LOGIN, { phone: phoneNumber })
        console.log(res);
        if (res.code == "10000") {
            // 请求成功
            this.setState({ showLogin: false });
            // 开启定时器
            this.countDown();
        } else {

        }
        //想要弹个弹窗出来显示读取到的res.data（二维码的值），默认为888888   
    }
    // 开启获取验证码的定时器
    countDown = () => {
        console.log("开启倒计时");
        if (this.state.isCountDowning) {
            // 如果在倒计时就停止按钮
            return;
        }

        this.setState({ isCountDowning: true });

        let seconds = 5;
        // 重新获取(5s)
        this.setState({ btnText: `重新获取(${seconds}s)` });
        let timeId = setInterval(() => {
            seconds--;
            this.setState({ btnText: `重新获取(${seconds}s)` });
            if (seconds === 0) {
                clearInterval(timeId);
                this.setState({ btnText: "重新获取", isCountDowning: false });
            }
        }, 1000);
    }

    // 点击重新获取按钮
    repGetVcode = () => {
        this.countDown();
    }

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
        const { vcodeTxt, phoneNumber } = this.state;
        if (vcodeTxt.length != 6) {
            Toast.message("验证码不正确", 2000, "center");
            return;
        }

        const res = await request.post(ACCOUNT_VALIDATEVCODE, {
            phone: phoneNumber,
            vcode: vcodeTxt
        });
        if (res.code != "10000") {
            console.log(res);
            return;
        }
        // console.log(res.data);

        if(res.data.isNew){
            //  新用户 UserInfo
            this.props.navigation.navigate("UserInfo");
        }else{
            //  老用户
            this.props.navigation.reset({
                routes:[{name:"Tabbar"}]
            })
        }

        // if(res.data=13291928685){
        //     //  老用户
        //     this.props.navigation.navigate("Tabbar");
        // }else{
        //     //  新用户 UserInfo
        //     this.props.navigation.navigate("UserInfo");
        // }
    }

    //渲染登录页面
    renderLogin = () => {
        const { phoneNumber, phoneValid } = this.state;
        return <View style={{ backgroundColor: "#f0f4f3", padding: pxToDp(25), borderRadius: 45 }}>
            {/*登录 */}
            <View>
                <Text style={{ fontSize: pxToDp(20), color: "#888", fontWeight: "bold", textAlign: "center" }}>本机手机号登录</Text>
                {/*输入框 */}
                <View style={{ marginTop: pxToDp(15) }}>
                    <Input
                        placeholder='请输入手机号'
                        maxLength={11}
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        inputStyle={{ color: "#333" }}
                        onChangeText={this.phoneNumberChangeText}
                        errorMessage={phoneValid ? "" : "手机号码格式不正确"}
                        onSubmitEditing={this.phoneNumberSubmitEditing}
                        leftIcon={{ type: 'font-awesome', name: 'phone', color: "#ccc", size: pxToDp(20) }}//name为图标类型名字
                    />
                </View>
                {/*按钮 */}
                <View>
                    {/* <Button 
                                title="获取验证码"
                                color="blue"
                            /> */}
                    <View style={{ width: "75%", height: pxToDp(40), alignSelf: "center" }}>
                        <MyButton onPress={this.phoneNumberSubmitEditing} style={{ borderRadius: pxToDp(20) }}>获取验证码</MyButton>
                    </View>
                    {/* <TouchableOpacity onPress={() => this.context.navigate("UserInfo")}>
                            <View style={{alignItems:'center',marginTop:pxToDp(20)}}>
                                <Text style={{fontSize:pxToDp(14)}}>新用户?</Text>
                                <Text style={{fontSize:pxToDp(14)}}>点击此处|进行注册</Text>
                            </View>
                    </TouchableOpacity> */}
                </View>
            </View>
        </View>
    }
    //渲染填写验证页面
    renderVcode = () => {
        const { phoneNumber, vcodeTxt, btnText, isCountDowning } = this.state;
        return <View>
            <View><Text style={{ fontSize: pxToDp(25), color: "#eee", fontWeight: "bold" }}>输入6位验证码</Text></View>
            <View style={{ marginTop: pxToDp(10) }}><Text style={{ color: "#eee" }}>已发到:+86 {phoneNumber}</Text></View>
            <View><CodeField
                value={vcodeTxt}
                onChangeText={this.onVcodeChangeText}
                onSubmitEditing={this.onVcodeSubmitEditing}
                cellCount={6}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text key={index} style={[styles.cell, isFocused && styles.focusCell]} >{symbol || (isFocused ? <Cursor /> : null)}</Text>
                )}
            /></View>
            <View style={{ marginTop: pxToDp(10) }}><MyButton disabled={isCountDowning} onPress={this.repGetVcode} style={{ width: "85%", alignSelf: "center", height: pxToDp(40), borderRadius: pxToDp(20) }}>{btnText}</MyButton></View>
        </View>
    }
    // 验证码输入框的值改变事件
    onVcodeChangeText = (vcodeTxt) => {
        this.setState({ vcodeTxt });
    }
    render() {
        const { showLogin } = this.state;
        return (
            <View>
                {/*状态栏 根据背景透明 */}
                {/* <StatusBar backgroundColor="transparent" translucent={true} /> */}
                {/*背景图片 */}
                <Image style={{ width: "100%", height: pxToDp(250) }} source={require("../../../images/back.png")} />

                <View style={{ padding: pxToDp(20) }}>
                    {showLogin ? this.renderLogin() : this.renderVcode()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    CodeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#ccc',
        textAlign: 'center',
        color: '#7d53ea'

    },
    focusCell: {
        borderColor: '#7d53ea',
    },
});

export default index

