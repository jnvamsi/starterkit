import React from 'react';
import {Text, View, TouchableOpacity,ScrollView} from 'react-native';

const IncreaseComponent = ({number, increaseNumberHandler,user}) => {

  return (
    
    <View 
    
      style={{flex: 1,alignItems: 'center', alignContent: 'center'}}>
        {user.map((item,index)=>{
          return(
            
           <View style={{width:270,height:100,marginTop:30,flexDirection:"row",padding:20,elevation:0,backgroundColor:'coral',borderRadius:30}}>
           
       <View style={{flexDirection:'column',marginLeft:10}}>
         <Text>Id:{item.id}</Text>
         <Text>UserId:{item.userId}</Text>
       </View>
       
     </View>
     )})}
     
    </View>
  );
};
export default IncreaseComponent;
