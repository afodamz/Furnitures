import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react';
import styles from './productsView.style';
import { Ionicons } from "@expo/vector-icons";
import {COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductsView = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {item})}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image 
                    source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTufW5fCESmrpdts2tThDHcoD6ClqU-j2Ca7iFZQnI9&s"}} 
                    style={styles.image}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                    <Text style={styles.description} numberOfLines={1}>{item.description}</Text>
                    <Text style={styles.price}>₦ {item.price}</Text>
                </View>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons name="add-circle" color={COLORS.primary} size={35} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductsView