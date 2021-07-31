import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import MyButton from '../../../components/MyButton';
import { pxToDp } from '../../../utils/stylesKits';
import { NavigationContext } from "@react-navigation/native";
import ModelCha from '../../../components/ModelCha/index';
import ModelLin from '../../../components/ModelLin/index';
import MyNav from '../../../components/MyNav/index';

class index extends Component {
    static contextType = NavigationContext;
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isModalVisibles: false,
            activeTab: 1,
        }
    }


    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    toggleModals = () => {
        this.setState({ isModalVisibles: !this.state.isModalVisibles });
    }
    render() {
        return (
            <View>
                <MyNav title='一起种茶树' />
                <ImageBackground style={{ width: '100%', height: '100%', }} source={require('../../../images/zhongchashu.png')} >
                    <TouchableOpacity onPress={this.toggleModals} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: pxToDp(110), height: pxToDp(40), backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', borderRadius: pxToDp(32), marginTop: '155%' }}>
                            <Text style={{ fontSize: pxToDp(16) }}>免费领茶树</Text>
                        </View>
                    </TouchableOpacity>
                    <ModelLin isModalVisibles={this.state.isModalVisibles} toggleModalProps={this.toggleModals} />

                    <TouchableOpacity onPress={this.toggleModal} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View>
                            <Text style={{ textDecorationLine: 'underline', fontSize: pxToDp(16), marginTop: pxToDp(8), color: 'white' }}>
                                种树秘籍
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <ModelCha isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModal} />
                </ImageBackground>
            </View>
        );
    }
}

export default index;