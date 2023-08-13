import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style';
import { Ionicons, Fontisto } from "@expo/vector-icons";
import {Welcome, Carousel, Headings, ProductsRow} from '../components'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.appBarText}>Omnibiz</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartnNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24}></Fontisto>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductsRow />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

// const styles = StyleSheet.create({})