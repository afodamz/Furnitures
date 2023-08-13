import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';
import styles from "./carousel.style";
import { COLORS, SIZES } from '../../constants';

const Carousel = () => {
    const slides = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufW5fCESmrpdts2tThDHcoD6ClqU-j2Ca7iFZQnI9&s",
        "https://uploads-ssl.webflow.com/62afd2935ee9586249c84cdb/62cf7cfbbf4cb17a3e5598b5_BJofpgdA.jpeg",
        "https://img.freepik.com/free-photo/mid-century-modern-living-room-interior-design-with-monstera-tree_53876-129805.jpg?w=2000",
    ];
    return (
        <View style={styles.carouselContainer}>
            <SliderBox
                autoplay={true}
                circleLoop={true}
                images={slides}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{ borderRadius: 15, width: "92%", marginTop: 15 }}
            />
        </View>
    )
}

export default Carousel;