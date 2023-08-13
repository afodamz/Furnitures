import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants';
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import styles from './search.style';
import axios from 'axios';
import {SearchTile} from '../components';

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchresults, setSearchResults] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("");
      setSearchResults(response.data)
      setIsLoading(false)
    } catch (e) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            // onPressIn={() => {}}
            onChange={setSearchKey}
            placeholder={"What are you looking for?"} />
        </View>
        <TouchableOpacity onPress={fetchData} style={styles.searchBtn}>
          <Feather name="search" size={SIZES.xLarge} color={COLORS.offWhite} />
        </TouchableOpacity>
      </View>
      {searchresults.length === 0 ?
        // <View >
        <View style={{ flex: 1 }}>
          <Image source={require('../assets/images/no-dat.avif')}
            style={styles.searchImage} />
        </View>
        : <FlatList
          data={searchresults}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (<SearchTile item={item}/>)}
          style={{marginBottom: 12}}
           />}
    </SafeAreaView>
  )
}

export default Search;