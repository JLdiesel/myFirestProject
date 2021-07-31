import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Image,
	TouchableOpacity,
} from 'react-native';
// import FastImage from 'react-native-fast-image';
import Masonry from 'react-native-masonry';
import { pxToDp } from '../../utils/stylesKits';
// import Slider from '@react-native-community/slider';

// list of images
let data = [
	{
		data: {
			caption: '生活细碎万物成诗，今晚的月亮分你一半',
			user: {
				name: '不拱大白菜'
			},
		},
		uri: 'https://t7.baidu.com/it/u=1485780900,1171834527&fm=193&f=GIF',
		// onPress: (data) => goTo(data.id),
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' ,borderBottomLeftRadius:pxToDp(16),borderBottomRightRadius:pxToDp(16)}}>
					<TouchableOpacity>
						<View style={{ flexDirection: 'row', alignItems: 'center' }}>
							<Image
								source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
								style={styles.userPic} />
							<Text style={styles.userName}>{data.user.name}</Text>
						</View>
						<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
					</TouchableOpacity>
				</View>
			)
		},
		// renderHeader: (data) => {
		// 	return (
		// 		<View key='brick-footer' style={styles.headerTop}>
		// 			{/* 用户名+用户头像 */}

		// 		</View>
		// 	)
		// }
	},
	{
		data: {
			caption: '你看他笑得多开心',
			user: {
				name: '大黑'
			},
		},
		uri: 'https://t7.baidu.com/it/u=128764686,1887614532&fm=193&f=GIF',
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' ,borderBottomLeftRadius:pxToDp(16),borderBottomRightRadius:pxToDp(16)}}>
 					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
							style={styles.userPic} />
						<Text style={styles.userName}>{data.user.name}</Text>
					</View>
					<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
				</View>
			)
		},
	},
    {
		data: {
			caption: 'md好想去拍照，憋坏了要',
			user: {
				name: '阿巴阿巴'
			},
		},
		uri: 'https://t7.baidu.com/it/u=1415984692,3889465312&fm=193&f=GIF',
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' ,borderBottomLeftRadius:pxToDp(16),borderBottomRightRadius:pxToDp(16)}}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
							style={styles.userPic} />
						<Text style={styles.userName}>{data.user.name}</Text>
					</View>
					<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
				</View>
			)
		},
	},
    {
		data: {
			caption: '不拍照打球也行啊',
			user: {
				name: '叮叮车'
			},
		},
		uri: 'https://t7.baidu.com/it/u=3631608752,3069876728&fm=193&f=GIF',
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' ,borderBottomLeftRadius:pxToDp(16),borderBottomRightRadius:pxToDp(16)}}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
							style={styles.userPic} />
						<Text style={styles.userName}>{data.user.name}</Text>
					</View>
					<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
				</View>
			)
		},
	},
    {
		data: {
			caption: '拍照yyds',
			user: {
				name: '哈呼呼'
			},
		},
		uri: 'https://t7.baidu.com/it/u=2734247514,822566911&fm=193&f=GIF',
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' ,borderBottomLeftRadius:pxToDp(16),borderBottomRightRadius:pxToDp(16)}}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
							style={styles.userPic} />
						<Text style={styles.userName}>{data.user.name}</Text>
					</View>
					<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
				</View>
			)
		},
	},
    {
		data: {
			caption: '都好看的一批',
			user: {
				name: '猪倌不养猪'
			},
		},
		uri: 'https://t7.baidu.com/it/u=2021154196,2394303855&fm=193&f=GIF',
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' ,borderBottomLeftRadius:pxToDp(16),borderBottomRightRadius:pxToDp(16)}}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
							style={styles.userPic} />
						<Text style={styles.userName}>{data.user.name}</Text>
					</View>
					<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
				</View>
			)
		},
	},
    {
		data: {
			caption: '夜景真的很容易让人静下心来',
			user: {
				name: '卑微打工人'
			},
		},
		uri: 'https://t7.baidu.com/it/u=3911840071,2534614245&fm=193&f=GIF',
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' ,borderBottomLeftRadius:pxToDp(16),borderBottomRightRadius:pxToDp(16)}}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
							style={styles.userPic} />
						<Text style={styles.userName}>{data.user.name}</Text>
					</View>
					<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
				</View>
			)
		},
	},
    {
		data: {
			caption: '说走就走的旅行',
			user: {
				name: '威尼斯'
			},
		},
		uri: 'https://t7.baidu.com/it/u=1408047811,472391663&fm=193&f=GIF',
		renderFooter: (data) => {
			return (
				<View key='brick-header' style={{ backgroundColor: 'white', padding: 5, paddingRight: 9, paddingLeft: 9, borderTopWidth: 1, borderTopColor: 'gary' ,borderBottomLeftRadius:pxToDp(16),borderBottomRightRadius:pxToDp(16)}}>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Image
							source={{ uri: 'https://t7.baidu.com/it/u=810585695,3039658333&fm=193&f=GIF' }}
							style={styles.userPic} />
						<Text style={styles.userName}>{data.user.name}</Text>
					</View>
					<Text style={{ lineHeight: 20, fontSize: 14 }}>{data.caption}</Text>
				</View>
			)
		},
	},
];

const createBrick = uri => ({ uri });

const data1 = [
	'https://t7.baidu.com/it/u=2338252153,649362902&fm=193&f=GIF',
	'https://t7.baidu.com/it/u=1922394591,3720337942&fm=193&f=GIF',
	'https://t7.baidu.com/it/u=2373005152,2504562567&fm=193&f=GIF',
].map(createBrick);

const data2 = [
	'https://t7.baidu.com/it/u=2923241779,2573640847&fm=193&f=GIF',
	'https://t7.baidu.com/it/u=890938330,494135193&fm=193&f=GIF',
	'https://t7.baidu.com/it/u=153134176,2818220628&fm=193&f=GIF',
].map(createBrick);

const data3 = [
	'https://t7.baidu.com/it/u=1652624770,1452801921&fm=193&f=GIF',
	'https://t7.baidu.com/it/u=2501110440,16462349&fm=193&f=GIF',
	'https://t7.baidu.com/it/u=1117806358,2517440368&fm=193&f=GIF'
].map(createBrick);

const appendData = [data1, data2, data3];

export default class example extends Component {
	constructor() {
		super();

		this.state = {
			columns: 2,
			padding: 5,
			data,
			dataIndex: 0
		};
	}

	_addData = () => {
		if (this.state.dataIndex < 3) {
			this.setState(state => {
				const addData = appendData[this.state.dataIndex];
				const appendedData = [...state.data, ...addData];

				return {
					data: appendedData,
					dataIndex: state.dataIndex + 1
				};
			});
		}
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
				{/* <View style={[styles.center, styles.header]}>
					<Text style={{ fontWeight: '800', fontSize: 20 }}>市集</Text>
				</View> */}
				<View style={{ flex: 1, flexGrow: 10, padding: this.state.padding, }}>
					<Masonry
						bricks={this.state.data}
						columns={this.state.columns}
						onEndReached={this._addData}
						priority='balance'
						//缝隙
						spacing={3}
						imageContainerStyle={{ borderTopLeftRadius: pxToDp(16), borderTopRightRadius: pxToDp(16), borderBottomWidth: 3, borderBottomColor: 'red' }}
					// customImageComponent={FastImage}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		flex: 1,
		flexBasis: '10%'
	},
	header: {
		flexGrow: 1
	},
	buttonGroup: {
		flexGrow: 1
	},
	slider: {
		flexGrow: 1
	},
	button: {
		backgroundColor: '#dbdcdb',
		padding: 10,
		marginRight: 4,
		borderRadius: 4,
		borderBottomColor: '#7b7b7b',
		borderBottomWidth: 5
	},
	buttonText: {
		color: '#404040'
	},
	center: {
		marginTop: 30,
		// marginBottom: 20,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center'
	},
	headerTop: {
		flexDirection: 'row',
		padding: 5,
		alignItems: 'center',
		backgroundColor: 'white'
	},
	userPic: {
		height: 20,
		width: 20,
		borderRadius: 10,
		marginRight: 10
	},
	userName: {
		fontSize: 20
	}
});