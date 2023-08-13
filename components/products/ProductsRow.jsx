import {StyleSheet, Text, View, FlatList} from 'react-native'
import React from 'react';
import styles from "./productsRow.style";
import {SIZES} from '../../constants';
import ProductsView from "./ProductsView";
import useFetch from "../../hook/useFetch";

const ProductsRow = () => {
    const products = [1, 2, 3, 4]
    const {data, isLoading, error} = useFetch();
    return (
        <View style={styles.container}>
            {isLoading ?
                <ActivityIndicator size={SIZES.large}/>
                : error ? (
                    <Text>Something went wrong!</Text>
                    )
                : <FlatList
                    data={products || data}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    renderItem={({item}) => (<ProductsView item={item}/>)}
                    contentContainerStyle={{columnGap: SIZES.medium,}}
                />}

        </View>
    )
}

export default ProductsRow

