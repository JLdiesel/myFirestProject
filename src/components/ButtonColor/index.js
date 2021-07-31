/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {pxToDp} from '../../utils/stylesKits';
class Index extends Component {
  static defaultProps = {
    style: {},
    textStyle: {},
    //锁定按钮
    disabled: false,
  };
  render() {
  console.log(this.props.colors);
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.props.onPress}
        style={{
          width: '100%',
          height: '100%',
          ...this.props.style,
          overflow: 'hidden',
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={this.props.colors}
          style={styles.linearGradient}>
          <Text style={{...styles.buttonText, ...this.props.textStyle}}>
            {this.props.children}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

// Later on in your styles..
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: pxToDp(15),
    paddingRight: pxToDp(15),
    borderRadius: pxToDp(5),
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: pxToDp(18),
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default Index;
