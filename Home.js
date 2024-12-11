import { View,Text,Button,StyleSheet } from "react-native";
import React, {}from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
    <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <text><h1> Where are you?</h1>
    <h3>Blan blan blan blan blan blan Blan
    blan blan blan blan blan blan blan</h3>
    </text>
    <Button
    title="Go Next"
    mode='contained'
    onPress={() => navigation.navigate('Map',{
        paramkey: name 
    })}
    />

    </View>
    )
}

  