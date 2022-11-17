import React, {useState, useEffect} from 'react';
import UserComponent from './usersComponent';
import {UserList} from '../../models/userModels';
import {getUserList} from '../../services/userService';
import {ScrollView} from 'react-native';

const UserContainer = () => {
    
    const [userssList, setuserssList] = useState<UserList[]>([]);
    
    
    useEffect(() => {
        productListing();
      }, []);
    

      const productListing = async () => {
    
          const response = await getUserList();
          setuserssList(response.data);
          }
            
          return <ScrollView><UserComponent list={userssList} /></ScrollView>;
};
export default UserContainer;