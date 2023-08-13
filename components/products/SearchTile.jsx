import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './searchTile.style';

const SearchTile = ({item}) => {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => {}}>
                <View style={styles.image}>
                    <Image source={{uri: item.imgUrl}} style={styles.productImg}/>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.supplier}>{item.supplier}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SearchTile
