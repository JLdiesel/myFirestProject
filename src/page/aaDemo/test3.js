import React, { Component } from 'react';
import { View ,StyleSheet} from 'react-native';
import ScottComponent from './test2';
class test3 extends Component {
    render() {
        return (
            <View style={{width:80,height:80,backgroundColor:'red'}}>
                <ScottComponent name={'13'} age={'11'} />
            </View>
        );
      }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },

//     scottStyle: {
//         flex: 1,
//         backgroundColor: '#F5FCFF',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

export default test3;