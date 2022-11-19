import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';
import {
    Dropdown }
    from 'react-native-material-dropdown';
import {View, Text, TouchableOpacity,Button,ScrollView,Image, TextInput,} from 'react-native';
import commonStyle from '../assets/css/mainStyle';
function Apps() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  return (
    <DropDownPicker
    style={{height:4,width:200,marginTop:45,marginLeft:30,borderColor:'white'}}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}
export default Apps