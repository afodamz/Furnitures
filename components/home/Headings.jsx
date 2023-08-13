import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './headings.style';
import { COLORS, SIZES } from "../../constants";
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Headings = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingTitle} >New Arrivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("ProductsList")}>
            <Ionicons size={24} color={COLORS.primary} name="ios-grid"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings;
