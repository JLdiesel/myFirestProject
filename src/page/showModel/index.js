import React, { Component } from 'react';
import { Image } from 'react-native';

import Model from '../../components/Model/index';
import { TouchableOpacity } from 'react-native';
import { Button, Text, View, StyleSheet, ScrollView,ImageBackground } from 'react-native';
import { pxToDp } from '../../utils/stylesKits';

// import React, { Component } from 'react';

class index extends Component {
    // const [isModalVisible, setModalVisible] = useState(false);
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: false,

        }

    }
    // <Zujian arr={}/>
    // const toggleModal = () => {
    //     setModalVisible(!isModalVisible);
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    render() {

        const { arr } = this.props

        return (
            <View>
                {arr.map(item => (
                    <View key={index} style={{  width: 110, height: 110, justifyContent: 'center' ,marginLeft:pxToDp(10)}}>
                        {/* <Button title="我打开了" onPress={toggleModal} /> */}
                        <TouchableOpacity
                            style={{ justifyContent: 'center', alignItems: 'center' }}
                            onPress={this.toggleModal}
                        >
                            <View>
                                <ImageBackground
                                    style={{ width: 100, height: 100 ,}} source={{ uri: item.uriFace }} imageStyle={{borderRadius:pxToDp(20)}}
                                >
                                    {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 28 }}>
                                            {item.title}
                                        </Text>
                                    </View> */}
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>

                        <Model arr={this.props.arr} isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModal} />

                    </View>
                ))}
            </View>
        );
    }
}

export default index;

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    scrollableModal: {
        height: 300,
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: '#87BBE0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText1: {
        fontSize: 20,
        color: 'white',
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: '#A9DCD3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollableModalText2: {
        fontSize: 20,
        color: 'white',
    },
});
