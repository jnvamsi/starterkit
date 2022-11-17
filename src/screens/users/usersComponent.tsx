import React from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {UserList} from '../../models/userModels';

const UserComponent = ({list}) => {

    return (
      
      <View 
      
        style={{flex: 1,alignItems: 'center', alignContent: 'center'}}>
          {list.map((item,index)=>{
            return(
             <View style={{width:270,height:280,marginTop:30,flexDirection:"row",padding:20,elevation:0,backgroundColor:'pink',borderRadius:30}}>
             
         <View style={{flexDirection:'column',marginLeft:10}}>
           <Text>FullName:{item.name.firstname+" "+item.name.lastname}</Text>
           <Text>Id:{item.id}</Text>
           <Text>Email:{item.email}</Text>
           <Text>Username:{item.username}</Text>
           <Text>FirstName:{item.name.firstname}</Text>
           <Text>LastName:{item.name.lastname}</Text>
           <Text>City:{item.address.city}</Text>
           <Text>Street:{item.address.street}</Text>
           <Text>Lat:{item.address.geolocation.lat}</Text>
           <Text>Long:{item.address.geolocation.long}</Text>
           <Text>Zipcode:{item.address.zipcode}</Text>
           <Text>Phone:{item.phone}</Text>
           <Text>Number:{item.address.number}</Text>

         </View>
         
       </View>
       )})}
       
      </View>
    );
  };
  export default UserComponent;
  