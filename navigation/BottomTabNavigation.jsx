import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Search, Profile} from '../screens';
import {Ionicons} from "@expo/vector-icons";
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        bottom: 0,
        right: 0,
        elevation: 0,
        height: 70,
    }
}
const BottomTabNavigation = () => {

    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons 
                    name={focused ? "home" : "home-outline"} size={24}
                    color={focused ? COLORS.primary : COLORS.gray2} />
                }
            }}name="Home" component={Home}/>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons 
                    name={"search-sharp"} size={24}
                    color={focused ? COLORS.primary : COLORS.gray2} />
                }
            }}name="Search" component={Search}/>
            <Tab.Screen options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons 
                    name={focused ? "person" : "person-outline" } size={24}
                    color={focused ? COLORS.primary : COLORS.gray2} />
                }
            }} name="Profile" component={Profile}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})