import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View,} from 'react-native';
import {getUserList} from '../../services/userService';
import IncreaseComponent from './increaseComponent';
const IncreaseConatiner = () => {
 
  const[user,setUser]=useState(
    [
      {
      "id":"1",
      "userId":"1",
      
      },
      {
        "id":"2",
        "userId":"2"
      },
      {
        "id":"3",
        "userId":"3"
      },
      {
        "id":"4",
      "userId":"4"
        },
        {
          "id":"5",
          "userId":"5"
        },
        {
          "id":"6",
          "userId":"6"
        },
        {
          "id":"7",
          "userId":"7"
          },
          {
            "id":"8",
            "userId":"8"
          },
          {
            "id":"9",
            "userId":"9"
          },
      
      
  ]);
  
  useEffect(() => {
    UserList();
  }, []);

  const UserList = async () => {
    const user = await getUserList();
    console.log(user.data);
  };

  const [number, setNumber] = useState(-1);
  const increaseNumberHandler = () => {
    setNumber(number + 1);
  };

  return (
    <ScrollView>
    <IncreaseComponent
      number={number}
      user={user}
      increaseNumberHandler={increaseNumberHandler}
    /></ScrollView>
  );
};

export default IncreaseConatiner;
