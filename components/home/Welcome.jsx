import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../constants';
import { Feather } from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeTextFunc(COLORS.black, SIZES.small)}>Find the most</Text>
        <Text style={styles.welcomeTextFunc(COLORS.primary, -12)}>Luxurious Furniture</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder={"What are you looking for?"} />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.offWhite} />
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default Welcome;
