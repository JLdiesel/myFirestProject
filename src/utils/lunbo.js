import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
let screenwidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
}
  render() {
    return (
      <>
        <View style={{height: 400}}>
          <Swiper
            style={styles.wrapper}
            //左右箭头
            showsButtons={true}
            autoplay={true}
            //轮播间隔
            autoplayTimeout={2}
            //下方原点
            // showsPagination={false}
            paginationStyle={{bottom: 10}}
            dot={
              <View
                style={{
                  //未选中的圆点样式
                  backgroundColor: 'rgba(0,0,0,.2)',
                  width: 18,
                  height: 18,
                  marginLeft: 20,
                  borderRadius: 50,
                }}
              />
            }
            activeDot={
              <View
                style={{
                  backgroundColor: 'yellow',
                  width: 18,
                  height: 18,
                  marginLeft: 20,
                  borderRadius: 50,
                }}
              />
            }
            dotColor="red"
            activeDotColor="yellow">
            <View style={styles.slide1}>
              <Text style={styles.text} />
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text} />
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text} />
            </View>
          </Swiper>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
