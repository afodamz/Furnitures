import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react';
import styles from './productDetails.style';
import {Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import { COLORS, SIZES } from '../constants';

const ProductDetails = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {item} = route.params;
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count===0 ? 0 : count-1)
    }
    return (
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }}>
                    <Ionicons name="heart" size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
            <Image
                style={styles.image}
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufW5fCESmrpdts2tThDHcoD6ClqU-j2Ca7iFZQnI9&s" }} />
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>Silk Chair</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>₦ 2453</Text>
                    </View>
                </View>
                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {[1, 2, 3, 4, 5].map((val, index) => 
                            <Ionicons
                                key={index}
                                name='star' size={24} color={"gold"}
                            />
                        )}
                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>
                    <View style={styles.rating}>
                        <TouchableOpacity onPress={() => increment()}>
                            <SimpleLineIcons name="plus" size={20} />
                        </TouchableOpacity>
                        <Text style={styles.ratingText}>    {count}   </Text>
                        <TouchableOpacity onPress={() => decrement()}>
                            <SimpleLineIcons name="minus" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>Description</Text>
                    <Text style={styles.descriptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
                <View style={styles.locationWrapper}>
                    <View style={styles.location}>
                        <View style={{flexDirection: "row",}}>
                            <Ionicons name={"location-outline"} size={20} />
                            <Text>Lagos</Text>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <MaterialCommunityIcons name={"truck-delivery-outline"} size={20}/>
                            <Text >  Free Delivery   </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style={styles.addCart}>
                        <Fontisto name={"shopping-bag"} size={24} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProductDetails