import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView ,Dimensions} from "react-native";
import { color } from "react-native-reanimated";
import VideoPlayer from "react-native-video-player"
import Orientation from 'react-native-orientation-locker';
import { Button } from "react-native-elements";
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
class player extends Component {
    constructor(props) {
        super(props);
        this.enterFullScreen = this.enterFullScreen.bind(this);
        this.state = {
            disableFullscreen:true
        }
    }
    enterFullScreen() { //1.改变宽高  2.允许进入全屏模式  3.如何配置屏幕旋转,不需要改变进度条盒子的显示和隐藏
        if (!this.state.disableFullscreen) {
            this.setState({
                videoWidth: screenHeight,
                videoHeight: screenWidth,
                disableFullscreen: false
            })
            // 直接设置方向
            Orientation.lockToLandscape();
        }
        else {

            this.setState({
                videoWidth: screenWidth,
                videoHeight: 226,
                disableFullscreen: true
            })
            Orientation.lockToPortrait();
        }
    }

    componentDidMount() {
        var initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
            console.log('是竖屏');
        } else {
            console.log('如果是横屏，就将其旋转过来');
            Orientation.lockToPortrait();
        }
    }
    render() {


        return (

            <View>
                <View>
                    <VideoPlayer
                        video={{ uri: 'https://vd2.bdstatic.com/mda-mgi1xjhq7rhqnq8s/fhd/cae_h264_nowatermark/1626658384044364070/mda-mgi1xjhq7rhqnq8s.mp4?v_from_s=hkapp-haokan-suzhou&amp;auth_key=1626671134-0-0-f1cfa3bfbfcd4dc07c1313a2f68ead34&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=' }}
                        videoWidth={1600}
                        videoHeight={900}
                        thumbnail={{ uri: 'https://img0.baidu.com/it/u=3667585867,1791438963&fm=26&fmt=auto&gp=0.jpg' }}
                        disableFullscreen={this.setState.disableFullscreen}
                        fullScreenOnLongPress={true}
                        // Fullscreen={true}
                        resizeMode="cover"
                        // 长时间按压放大，需要到真机上试验。
                        // fullScreenOnLongPress={true}
                        pauseOnPress={true}
                        style={{

                        }}
                    />
                    <View>
                        <TouchableOpacity
                            onPress={this.enterFullScreen}
                        >
                            <Text style={{ backgroundColor: '#eee', padding: 5 }}>全屏</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 15, marginRight: 15, marginTop: 10 }}>
                            <View style={{ justifyContent: "flex-end" }}>
                                <Text style={{ fontSize: 23 }}>视频标题</Text>
                            </View>
                            <View style={{ justifyContent: "flex-end" }}>
                                <Text style={{ fontSize: 12 }}>2019/06/25</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                            <Image style={{ borderRadius: 50, width: 40, height: 40, }}
                                source={{ uri: "https://img1.baidu.com/it/u=2409026093,3112973757&fm=26&fmt=auto&gp=0.jpg" }} />
                            <View style={{ right: 80 }}>
                                <Text style={{ fontSize: 18, }}>用户名</Text>
                                <Text style={{ fontSize: 12, }}>粉丝数量</Text>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <TouchableOpacity style={{
                                    backgroundColor: "red",
                                    width: 80,
                                    height: 30,
                                    borderRadius: 15,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>+</Text>
                                    <Text style={{ fontSize: 17, color: "white" }}>关注</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: 15, marginLeft: 20, marginRight: 15 }}>
                            <Text>视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容视频内容</Text>
                        </View>
                        <View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default player;