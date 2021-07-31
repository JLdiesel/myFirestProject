import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { pxToDp } from '../../utils/stylesKits';

const ENTRIES1 = [
    {
        title: '习近平总书记在庆祝中国共产党成立100周年大会上的讲话',
        subtitle: '1',
        illustration: 'http://www.gov.cn/xinwen/2021-07/01/5621846/images/2b0af3c0e3174a49985758044f865813.jpg',
    },
    {
        title: '习近平总书记在庆祝中国共产党成立100周年大会上的讲话',
        subtitle: '2',
        illustration: 'http://www.gov.cn/xinwen/2021-07/01/5621846/images/3ffb48eb0fcc446a9003472f5094f455.jpg',
    },
    {
        title: '习近平总书记在庆祝中国共产党成立100周年大会上的讲话',
        subtitle: '3 ',
        illustration: 'http://www.gov.cn/xinwen/2021-07/01/5621846/images/e4b9dabe002449478b4cb049dc3b2560.jpg',
    },
];
const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = props => {
    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);

    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: item.illustration }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={{ height: pxToDp(40), fontSize: pxToDp(16) }} numberOfLines={1}>
                    {item.title}
                </Text>

            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={goForward}>
                <Text>go to next slide</Text>
            </TouchableOpacity> */}
            <Carousel
                ref={carouselRef}
                sliderWidth={pxToDp(380)}
                sliderHeight={pxToDp(380)}
                itemWidth={pxToDp(300)}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
                // vertical={true}
                activeSlideOffset={0}
                loop={true}
            //自动播放
            // autoplay={true}
            // autoplayDelay={500}
            // autoplayInterval={3000}
            />
        </View>
    );
};

export default MyCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: pxToDp(290),
        height: pxToDp(240),
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
    },
});