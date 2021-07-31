import { Dimensions } from "react-native";

//   设计稿宽度/元素宽度 =手机屏幕/手机中元素宽度
// =>手机中元素宽度 = 手机屏幕 * 元素宽度/设计稿宽度

//获取手机屏幕宽高
export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;
//图片px转dp    @param {Number} elePx 元素二点宽度或高度  单位 px
export const pxToDp = (elelPx) => screenWidth * elelPx / 375;