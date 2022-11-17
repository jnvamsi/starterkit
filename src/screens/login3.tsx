import React, {useState} from 'react';

import {View, Text, TouchableOpacity,Button,ScrollView,Image, TextInput,} from 'react-native';
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
 

const login3 = () => {
    return (
    <View style={commonStyle.aview1}>
        <View style={commonStyle.aview2}>
            <Image source={require('../assets/Images/fox.jpg')} style={commonStyle.aimage1}/>
            <Text style={commonStyle.text4}> Login or Register</Text>
            <Text style={commonStyle.text5}>Sign up using your mobile number</Text>
            <Text style={commonStyle.text5}>and OTP verification</Text>
            </View>
                  <View style={commonStyle.aview3}>
                    <View>   
                    <TouchableOpacity  
                          style={commonStyle.to1} >
                        <Text style={commonStyle.atext1}> India(+91)</Text> 
                        <View>
                        <Image source={require('../assets/Images/Vector.png')} style={commonStyle.aimage} />
                        </View> 
                    </TouchableOpacity> 
                    </View>
                    <View >
                    <TouchableOpacity style={commonStyle.to2}>
                        <TextInput style={commonStyle.ti1}
                        placeholder='Enter your Phone Number'
                        keyboardType="numeric"
                          />
                    </TouchableOpacity>
                    </View>

                    <View >
                    <TouchableOpacity style={commonStyle.to3}>
                        <Text style={commonStyle.text6}>
                         SEND OTP</Text>
                    </TouchableOpacity>
                    </View>

                </View>

    </View>
    )};


    export default login3;

