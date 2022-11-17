import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Button,ScrollView,Image} from 'react-native';
const Task1 = () => {
  return (
    <ScrollView>
    <View style={{ alignItems: 'flex-start', alignContent: 'center',backgroundColor:'yellow',justifyContent:'flex-start',marginLeft:0,flexDirection:'column'}}>
        <View style={{backgroundColor:'blue',height:100,width:300,marginLeft:0,flexDirection:'row'}}>
            <View>
            <Image style={{width:200,height:100}} source={require('../assets/Images/pic.jpg')} />
            </View>
               <View>
                 <Image style={{width:180,height:200}} source={require('../assets/Images/pic.jpg')} />
                  </View>
        </View>
        <View style={{backgroundColor:'red',height:100,width:200,}}>
        <Image style={{width:200,height:100}} source={require('../assets/Images/pic.jpg')} />
      
        </View>
        <View style={{backgroundColor:'coral',height:130,width:390,flexDirection:'row'}}>
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        </View>
         <View style={{backgroundColor:'blue',height:200,width:300,flexDirection:'row'}}>
            <View>
            <Image style={{width:200,height:200}} source={require('../assets/Images/pic.jpg')} />
            </View>
               <View style={{flexDirection:'column'}}>
                 <Image style={{width:180,height:100}} source={require('../assets/Images/pic.jpg')} />
                 <Image style={{width:180,height:100}} source={require('../assets/Images/pic.jpg')} />
                  </View>
        </View>
       
        <View style={{backgroundColor:'coral',height:130,width:390,flexDirection:'row'}}>
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        </View>
        <View style={{backgroundColor:'coral',height:130,width:390,flexDirection:'row'}}>
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        </View>
        <View style={{backgroundColor:'coral',height:130,width:390,flexDirection:'row'}}>
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        <Image style={{width:130,height:130}} source={require('../assets/Images/pic.jpg')} />
        </View>
    </View>
    </ScrollView>
  );
};

export default Task1;
