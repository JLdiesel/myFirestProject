import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';
import { pxToDp } from '../../../utils/stylesKits';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image() {
        const { data: { illustration }, money, comment, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
                source={{ uri: illustration }}
                containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
                style={styles.image}
                parallaxFactor={0.35}
                showSpinner={true}
                spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
                {...parallaxProps}
            />
        ) : (
            <Image
                source={{ uri: illustration }}
                style={styles.image}
            />
        );
    }

    render() {
        const { data: { title, subtitle, comment }, even } = this.props;

        const uppercaseTitle = title ? (
            <View style={{ flex: 1, justifyContent: "flex-start", marginTop: pxToDp(10),marginLeft:pxToDp(8) }}>
                <View style={{ alignItems: "center",marginRight:pxToDp(6) }}>
                    <Text style={{  fontSize: pxToDp(15), fontWeight: "bold" }}>
                        {title.toUpperCase()}
                    </Text>
                </View>
                <View style={{marginTop:pxToDp(5),width:"100%",height:pxToDp(100)}}>
                    <Text>
                        {comment.toUpperCase()}
                    </Text>
                </View>
            </View>
        ) : false;

        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.slideInnerContainer}
                onPress={() => { alert(`You've clicked '${title}'`); }}
            >
                <View style={styles.imageContainer}>
                    {this.image}
                </View>
                <View style={styles.textContainer}>
                    {uppercaseTitle}
                </View>
            </TouchableOpacity>
        );
    }
}
