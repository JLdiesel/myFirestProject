import React, { Component } from 'react';

import {
    Dimensions, View, Animated, Easing,
} from 'react-native';
import ART from "@react-native-community/art";
const {
 Surface, Shape, Path,
} = ART;

class index extends Component {
    
_getBezierPath= (temp, controlY) => {
    const { waveHeight } = this.props;
    const startX = -4 * temp;
    const startY = waveHeight * (1 - baseRatiio);
    const number = ScreenWidth / temp + 1;

    let speedStr = `M${startX} ${waveHeight} L${startX} 
    ${startY}`;

    for (let i = 0; i <= number; i++) {
        speedStr += `Q${startX + (i * 4 + 1) * temp} ${startY
            - controlY}, ${startX + (i * 4 + 2) * temp} ${startY}`;
        speedStr += `Q${startX + (i * 4 + 3) * temp} ${startY
            + controlY}, ${startX + (i * 4 + 4) * temp} ${startY}`;
    }
    const path = new Path(speedStr);

    // 形成闭合区域
    path.lineTo(startX + (number * 4 + 4) * temp,       
    waveHeight).close();

    return path;
}
_changecontrolY= () => {
    this.interval = setInterval(() => {
        const { controlY, startY, up } = this.state;

        let p = controlY;
        const y = startY;
        let up0 = up;

        if (up) {
            p = controlY + 0.5;
            up0 = p <= 25;
        } else {
            p = controlY - 0.5;
            up0 = p < 20;
        }
        this.setState({
            controlY: p,
            startY: y,
            up: up0,
        });
    }, 100);
}

_startAnimation1 = () => {
    const { baseX1: baseX } = this.state;
    
    baseX.setValue(-4 * tempX1);
    Animated.timing(baseX, {
        toValue: 0, // 目标值
        duration: 5000, // 动画时间
        easing: Easing.linear, // 缓动函数
    }).start(() => {
        this._startAnimation1();
    });
};
   
render() {
    const {
        waveHeight, waveWidth, wave1Color, wave2Color,
     } = this.props;
    const { baseX1: baseX, baseX2, controlY } = this.state;
    const _path1 = this._getBezierPath(tempX1, controlY / 2);
    const _path2 = this._getBezierPath(tempX2, controlY);
    return (
            <View
              style={{
                overflow: 'hidden',
              }}
            >
              <View
                style={{
                  height: waveHeight,
                  width:
                    waveWidth + 4 * tempX1 > tempX2 ? tempX1 : tempX2,
                }}
              >
                <Animated.View
                  style={{
                    height: waveHeight,
                    width: waveWidth + 4 * tempX1,
                    position: 'absolute',
                    left: baseX,
                  }}
                >
                  <Surface
                    height={waveHeight}
                    width={waveWidth + 8 * tempX1}
                  >
                    <Shape d={_path1} fill={wave1Color} />
                  </Surface>
                </Animated.View>
   
                <Animated.View
                  style={[
                    {
                      height: waveHeight,
                      width: waveWidth + 4 * tempX2,
                      position: 'absolute',
                      left: baseX2,
                    },
                  ]}
                >
                  <Surface
                    height={waveHeight}
                    width={waveWidth + 8 * tempX2}
                  >
                    <Shape d={_path2} fill={wave2Color} />
                  </Surface>
                </Animated.View>
              </View>
            </View>
          );
  }
}

export default index;