import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Button,ScrollView,Image,ImageBackground,StyleSheet} from 'react-native';
const Spla = () => {
  return (
    <ImageBackground source={require('../assets/Images/pic.jpg')} resizeMode='cover' style={{flex:1,opacity:0.5}}>
       <View style={{flex:0.5,backgroundColor:'blue'}}>
        </View>
    </ImageBackground>)};


export default Spla;