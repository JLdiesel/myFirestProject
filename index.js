/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { LogBox, } from 'react-native';

// console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
// console.disableYellowBox = true // 关闭全部黄色警告
// LogBox.ignoreLogs(): 用于替换原来YellowBox.ignoreLogs([])的功能
// LogBox.ignoreAllLogs()：用于替换console.disableYellowBox，关闭错误和警告通知

LogBox.ignoreAllLogs(true)//关闭全部黄色警告
LogBox.ignoreLogs([
  'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
  'source.uri should not be an empty string', 'Invalid props.style key',
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
  'Animated.event now requires a second argument for options',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.',
  'Warning: componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.'
])

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
AppRegistry.registerComponent(appName, () => App);
