import React, { Component } from 'react';
import { View ,Text} from 'react-native';
import WaterFall from '../../waterfall/index';
class index extends Component {
    render() {
        return (
            <View style={{width:'100%',height:'100%'}}>
                <WaterFall />
            </View>
        );
    }
}

export default index;