import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import UseFetch from '../../hook/useFetch'
import { COLORS, SIZES } from '../../constants';
import styles from './productsList.style';
import ProductsView from './ProductsView';

const ProductsList = () => {
    const { data, isLoading, error } = UseFetch();

    if (isLoading) {
        reutn(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({ item }) => (<ProductsView item={item} />)}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    )
}

export default ProductsList
