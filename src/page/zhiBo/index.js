/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
    SafeAreaView,
    ScrollView
} from 'react-native';

import { RNCamera, TakePictureResponse } from 'react-native-camera';
import ModelZhiBo from '../../components/ModelZhiBo/index';
import VideoRecorder from 'react-native-beautiful-video-recorder';
import { NavigationContext } from "@react-navigation/native";

class index extends Component {
    static contextType = NavigationContext;

    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
    //设置当前摄像头为后置摄像头
    state = { cameraType: RNCamera.Constants.Type.back };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    //扫描二维码
    _onBarCodeRead(e) {
        //data: string;
        //rawData?: string;
        //type: keyof BarCodeType;
        //bounds:
        //For iOS use `{ origin: Point<string>, size: Size<string> }`
        //For Android use `{ width: number, height: number, origin: Array<Point<string>> }`
        console.log(e)
    }

    //切换摄像头方向     undefined is not an object (evaluating 'state.cameraType')
    _switchCamera() {
        this.setState({
            cameraType: (this.state.cameraType === RNCamera.Constants.Type.back) ?
                RNCamera.Constants.Type.front : RNCamera.Constants.Type.back
        })
        // this.setState({
        //     cameraType: (this.state.cameraType === RNCamera.Constants.Type.front) ?
        //         RNCamera.Constants.Type.back : RNCamera.Constants.Type.front
        // })
        // let state = this.state;
        // state.cameraType = (state.cameraType === RNCamera.Constants.Type.back) ?
        //     RNCamera.Constants.Type.front : RNCamera.Constants.Type.back;
        // this.setState(state);
    }

    //拍摄照片
    _takePicture() {
        this.refs.camera.takePictureAsync().then((response) => {
            console.log("response.uri:" + response.uri)
        }).catch((error => {
            console.log("error:" + error)
        }))
    }
    start = () => {
        // 15 seconds
        this.videoRecorder.open({ maxLength: 15 }, (data) => {
            console.log('captured data', data);
        });
    }

    render() {
        // const videoRecorder = useRef(null)
        // function startRecorder() {
        //     if (videoRecorder && videoRecorder.current) {
        //         videoRecorder.current.open({ maxLength: 15 }, (data) => {
        //             console.log('captured data', data);
        //         })
        //     }
        // }
        return (
            <RNCamera
                ref="camera"
                style={styles.container}
                onBarCodeRead={this._onBarCodeRead.bind(this)}
                type={this.state.cameraType}
            >
                <TouchableOpacity onPress={this.toggleModal}>
                    <View>
                        <Text style={styles.switch}>开播</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.start}>
                    <Text style={styles.switch}>录制视频</Text>
                </TouchableOpacity>
                <VideoRecorder ref={(ref) => { this.videoRecorder = ref; }} compressQuality={'medium'} />
                {/* <TouchableOpacity onPress={startRecorder} style={styles.btnCapture}>
                    <Text style={styles.sectionTitle}>录制视频</Text>
                </TouchableOpacity> */}
                {/* <VideoRecorder ref={videoRecorder} compressQuality={'medium'} /> */}


                <ModelZhiBo isModalVisible={this.state.isModalVisible} toggleModalProps={this.toggleModal} />

                <TouchableHighlight onPress={this._switchCamera.bind(this)}>
                    <Text style={styles.switch}>转换摄像头</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this._takePicture.bind(this)}>
                    <Text style={styles.picture}>拍照</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.context.goBack}>
                    <Text style={styles.picture}>返回</Text>
                </TouchableHighlight>
            </RNCamera>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    switch: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 30,
        color: 'red'
    },
    picture: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 30,
        color: 'red'
    }
});
export default index;

