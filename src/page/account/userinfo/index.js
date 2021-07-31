import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { pxToDp } from '../../../utils/stylesKits';
import SvgUri from 'react-native-svg-uri';
import { male, female } from "../../../images/fonts/iconSvg";
import {Input} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import MyButton from "../../../components/MyButton"
import Toast from '../../../utils/Toast';
import ImagePicker from 'react-native-image-crop-picker';


class index extends Component {
    state = {
        // 昵称
        nickname: "",
        // 性别 
        gender: "男",
        // 生日
        birthday: "",
        // 城市
        city: "",
        // 头像
        header: "",
    }

    // 选择性别
    chooeseGender = (gender) => {
        this.setState({ gender });
    }

    // 点击了 设置头像按钮
    chooeseHeadImg = async () => {
        //校验
        const { nickname, birthday  } = this.state;

        if (!nickname || !birthday ) {
          Toast.sad("昵称或者生日不合法", 2000, "center");
          return;
        }

        // 获取到 选中后的图片
        const image = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        });
    }

    GoReaderIndex = async () => {
        // console.log(this.props);
        this.props.navigation.navigate("Tabbar");
    }

    render() {
        const { gender ,nickname,birthday} = this.state;
        const dateNow = new Date();
        const currentDate = `${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}`;
        return (
            <View style={{ backgroundColor: "#fff", flex: 1, padding: pxToDp(20) }}>
                {/*标题 */}
                <View>
                    <Text style={{ fontSize: pxToDp(20), color: "#666", fontWeight: 'bold' }}>
                        填写资料
                    </Text>
                    <Text style={{ fontSize: pxToDp(20), color: "#666", fontWeight: 'bold' }}>
                        开启你的浙江之旅
                    </Text>
                </View>
                {/* 性别 */}
                <View style={{ marginTop: pxToDp(60) }}>
                    <View style={{ justifyContent: "space-around", width: "60%", flexDirection: "row", alignSelf: 'center' }}>
                        <TouchableOpacity
                            onPress={this.chooeseGender.bind(this, "男")}
                            style={{
                                width: pxToDp(60),
                                height: pxToDp(60),
                                borderRadius: pxToDp(30),
                                backgroundColor: gender === "男" ? "red" : "#eee",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <SvgUri svgXmlData={male} width="50" height="50" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={this.chooeseGender.bind(this, "女")}
                            style={{
                                width: pxToDp(60),
                                height: pxToDp(60),
                                borderRadius: pxToDp(30),
                                backgroundColor: gender === "女" ? "red" : "#eee",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>                            
                            <SvgUri svgXmlData={female} width="50" height="50" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 昵称 */}
                <View style={{ marginTop: pxToDp(10) }}>
                    <Input
                    value={nickname}
                    placeholder="设置昵称"
                    onChangeText={(nickname) => this.setState({ nickname })}
                    />
                </View>
                {/* 生日日期 */}
                <View>
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
                            dateIcon: {
                                display: "none"
                            },
                            dateInput: {
                                marginLeft: pxToDp(10),
                                borderWidth: 0,
                                borderBottomWidth: pxToDp(1.1),
                                alignItems: "flex-start",
                                paddingLeft: pxToDp(4)
                            },
                            placeholderText: {
                                fontSize: pxToDp(18),
                                color: "#afafaf"
                            }
                        }}
                        onDateChange={(birthday) => { this.setState({ birthday }) }}
                    />
                </View>
                {/* 头像 */}
                <MyButton
                    onPress={this.chooeseHeadImg}
                    style={{
                        height: pxToDp(40),
                        borderRadius: pxToDp(20),
                        marginTop:pxToDp(40),
                        alignSelf: 'center'
                    }}
                >设置头像
                </MyButton>
                {/* 进入首页 */}
                <View>
                    <MyButton
                        onPress={this.GoReaderIndex}
                        style={{
                            height: pxToDp(80),
                            width:pxToDp(80),
                            borderRadius: pxToDp(90),
                            marginTop:pxToDp(60),
                            marginLeft:pxToDp(125)
                        }}
                    >Go
                    </MyButton>
                </View>
            </View>
        );
    }
}

export default index