/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Kidbanner from '../../../components/KidBanner/index';
import { pxToDp } from '../../../utils/stylesKits';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NavigationContext } from '@react-navigation/native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListData: [
        {
          id: '1',
          illustration:
            'https://tse1-mm.cn.bing.net/th/id/R-C.f3c64e0310334dbab2e19805bcbcc886?rik=lcBtOU7PFc8Dcg&riu=http%3a%2f%2fuimg.ugoshop.com%2fimages%2f201407%2fgoods_img%2f1291_P_1406589550573.jpg&ehk=Ga4OiIUvbruSFe7m4Aq30siSjbdSivTgq2%2bTC8nLpeM%3d&risl=&pid=ImgRaw',
          commodity: '茶具套装',
          detail:
            '银壶烧水壶纯银999手工茶具家用 云南牡丹煮茶壶大容量足银泡茶壶',
          Price: '208.99',
        },
        {
          id: '2',
          illustration:
            'https://tse1-mm.cn.bing.net/th/id/R-C.19bed948e6aea5d1456066c3b5d3cf40?rik=ep14yaogudkcGQ&riu=http%3a%2f%2fwww.xiaodelan.com%2fimages%2fTB1rAThHFXXXXasXVXXXXXXXXXX_!!0-item_pic.jpg&ehk=4QDsHNzu0Rwf2URt77gS4yvynpFhswcmBSR1U6qUo8Q%3d&risl=&pid=ImgRaw',
          commodity: '品茗杯',
          detail:
            '景德镇陶瓷雕刻生肖主人杯单杯品茗茶杯功夫茶具个人礼品杯小茶碗 ',
          Price: '158.88',
        },
        {
          id: '3',
          illustration:
            'https://tse1-mm.cn.bing.net/th/id/R-C.572fa43dc7bade863bca1643e092a77c?rik=5sypFBDlJqNFgQ&riu=http%3a%2f%2fchamagood.cn%2fimages%2fupload%2fImage%2f%E6%B1%89%E5%90%88%E7%9B%96%E7%A2%9720200505163506.jpg&ehk=qJ%2f7cf4YZDyCFUEn2UzVaDlxj9iRvS8A5xP8J26WroM%3d&risl=&pid=ImgRaw',
          commodity: '盖碗',
          detail: '羊脂玉德化白瓷陶瓷功夫茶具套装家用泡茶杯办公室会客厅盖碗',
          Price: '78.88',
        },
        {
          id: '4',
          illustration:
            'https://file.zgmscmpm.com/store/upload/20200903/6373473339370019538585521.jpg',
          commodity: '紫砂壶',
          detail:
            '紫康宜兴紫砂壶全纯手工如意西施壶名家正宗紫泥大泡茶壶紫砂套装 ',
          Price: '499.99',
        },
        {
          id: '5',
          illustration:
            'https://tse2-mm.cn.bing.net/th/id/OIP-C.liLK39B64l_UDRd-YRyD-QHaE8?w=296&h=197&c=7&o=5&dpr=1.25&pid=1.7',
          commodity: '公道杯',
          detail:
            '一品仟堂白瓷公道杯大号陶瓷家用简约功夫茶具茶分茶器公道壶公杯',
          Price: '32.00',
        },
      ],
    };
  }
  static contextType = NavigationContext;
  render() {
    return (
      <View>
        <ScrollView stickyHeaderIndices={[0]}>
          <Kidbanner back="arrow-back" title="商品详情" />
          <FlatList
            data={this.state.ListData}
            renderItem={({ item }) => (
              <View style={s.KidBox}>
                <Image
                  style={s.KidBoxImage}
                  source={{ uri: item.illustration }}
                />
                <View style={s.KidBoxText}>
                  <Text
                    style={{
                      fontSize: pxToDp(18),
                      borderBottomWidth: pxToDp(1.1),
                      marginRight: pxToDp(55),
                      marginLeft: pxToDp(15),
                    }}>
                    {item.commodity}
                  </Text>
                  <Text
                    numberOfLines={2}
                    style={{ marginLeft: pxToDp(15), marginRight: pxToDp(20) }}>
                    {item.detail}
                  </Text>
                  <View
                    style={{
                      height: pxToDp(40),
                      flexDirection: 'row',
                      marginLeft: pxToDp(15),
                      justifyContent: 'space-between',
                    }}>
                    <View style={{ flexDirection: 'row', marginTop: pxToDp(15) }}>
                      <Text
                        style={{
                          fontSize: pxToDp(12),
                          color: '#666',
                          alignSelf: 'flex-end',
                        }}>
                        ￥
                      </Text>
                      <Text style={{ fontSize: pxToDp(20), color: '#666' }}>
                        {item.Price}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'flex-end',
                        marginRight: pxToDp(10),
                      }}>
                      <TouchableOpacity onPress={() => this.props.navigation.navigate('Order')}>
                        <AntDesign
                          name="shoppingcart"
                          size={pxToDp(25)}
                          color="#000"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    );
  }
}
const s = StyleSheet.create({
  KidBox: {
    height: pxToDp(150),
    marginTop: pxToDp(15),
    marginLeft: pxToDp(15),
    marginRight: pxToDp(15),
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: pxToDp(15),
    elevation: 10, //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black', //  阴影颜色
    shadowOffset: { width: 0, height: 0 }, // 阴影偏移
    shadowOpacity: 1, // 阴影不透明度
    shadowRadius: 10, //  圆角
  },
  KidBoxText: {
    width: pxToDp(170),
    justifyContent: 'space-around',
  },
  KidBoxImage: {
    width: pxToDp(142),
    height: pxToDp(120),
    marginLeft: pxToDp(20),
    marginTop: pxToDp(15),
    borderRadius: pxToDp(10),
  },
});
