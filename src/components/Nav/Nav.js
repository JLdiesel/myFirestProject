/**
 * 搜索框
 */
import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, StyleSheet } from "react-native";
// import { Input } from "react-native-elements/dist/input/Input";
import { pxToDp } from "../../utils/stylesKits";
class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#eee'}}>
                <View style={{ flexDirection: 'row', backgroundColor: '#D2DFD5', width: '96%' ,borderRadius:pxToDp(20)}}>
                    <View style={styles.inputWrap}>
                        <Icon name="search" size={26} color={'#eee'} />
                        <TextInput style={styles.textInput}
                            // defaultValue='浙里看百年'
                            placeholder="搜索"
                            placeholderTextColor='#abbed7'
                        />
                    </View>
                </View>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    inputWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width: 245,
        height: 48,
        backgroundColor: 'transparent',
        borderColor: 'rgba(171, 190, 215, 0.56)',
        borderRadius: 20,
        marginLeft: 20,
        // marginTop: 20
    },
    textInput: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 1,
        width: 200,
        height: 48,
        fontSize: 18,
        color: '#3f4b48',
    },
});

export default Nav;