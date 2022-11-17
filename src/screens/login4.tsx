import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Button,ScrollView,Image,StyleSheet, TextInput} from 'react-native';
import {
    useFonts,
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_800ExtraBold,
    Nunito_900Black,
    Nunito_200ExtraLight_Italic,
    Nunito_300Light_Italic,
    Nunito_400Regular_Italic,
    Nunito_500Medium_Italic,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold_Italic,
    Nunito_800ExtraBold_Italic,
    Nunito_900Black_Italic,
  } from '@expo-google-fonts/nunito';
import commonStyle from '../assets/css/mainStyle';

const Login4 = () => {
    return (
    
    <View style={{flex:1,backgroundColor:"#0276FF"}}>
        <View style={{flex:0.65,backgroundColor:"#0276FF",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Image source={require('../assets/Images/fox.jpg')} style={commonStyle.bd80}/>
            <Text style={[commonStyle.textcommon,commonStyle.fontsize1]}> Verify your</Text>
            <Text style={[commonStyle.textcommon,commonStyle.fontsize1,{marginTop:1}]}>mobile number</Text>
            <Text style={[commonStyle.textcommon,commonStyle.fontSize2]}>Enter the 4 digit code sent to your number</Text>
            </View>
                  <View style={{flex:0.55,backgroundColor:"#EFF5FF",alignItems:'flex-start',flexDirection:'row',borderTopLeftRadius:30,borderTopRightRadius:30}}>
                    <View style={[commonStyle.ls4,commonStyle.ls4common]}>
                        <TextInput keyboardType='numeric'/>
                    </View>
                    <View style={[commonStyle.ls4common,commonStyle.marginlefts]}>
                    <TextInput keyboardType='numeric'/>
                    </View>
                    <View style={[commonStyle.ls4common,commonStyle.marginlefts]}>
                    <TextInput keyboardType='numeric'/>
                    </View>
                    <View style={[commonStyle.ls4common,commonStyle.ls5]}>
                    <TextInput keyboardType='numeric'/>
                    </View>

                </View>

    </View>
    )};


    export default Login4;

const styles=StyleSheet.create({

});