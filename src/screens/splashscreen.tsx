import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Button,ScrollView,Image,ImageBackground,StyleSheet} from 'react-native';
import commonStyle from '../assets/css/mainStyle';
const Splash = () => {
  return (
    
<ImageBackground source={require('../assets/Images/Frame.png')} style={{flex:1,opacity:0.99}} resizeMode="cover">
    <View style={commonStyle.view1}>
        <View style={commonStyle.view2}>
             <Text style={commonStyle.text1}>Suvy</Text>
        </View>
    </View>
    <View style={commonStyle.view3}>
      <View>
        <Image style={commonStyle.image1} source={require('../assets/Images/rectangle.png')}/>
        <Text style={commonStyle.text2}>LOG IN TO GET STARTED</Text>
       </View>
       <View>
        <Text style={commonStyle.text3}> CONTINE WITHOUT LOGGING IN</Text>
       </View>
    </View>
</ImageBackground>
  )};

  export default Splash;

  

