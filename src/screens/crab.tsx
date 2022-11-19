import React, {useState} from 'react';
import {
    Dropdown }
    from 'react-native-material-dropdown';
import {View, Text, TouchableOpacity,Button,ScrollView,Image, TextInput,} from 'react-native';
import commonStyle from '../assets/css/mainStyle';
import DropDownPicker from 'react-native-dropdown-picker';





const Crab = () => {

    const [open, setOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [items, setItems] = useState([
          {label:'App Glitch', value: 'apple'},
          {label: 'Not Loading', value: 'banana'}
        ]);

        
    return(
     <View style={commonStyle.style1}>
        <View style={commonStyle.style2}>
            <Text style={commonStyle.style3}>Help</Text>
        </View>
        <View style={commonStyle.style4}>

        <Image source={require('../assets/Images/crab.png')} style={{marginTop:40}} />
        <Text style={[commonStyle.crabtext,commonStyle.padding1]}>We are here to</Text>
        <Text style={commonStyle.crabtext}> help you!</Text>
        <TouchableOpacity style={commonStyle.to2}>
                        <TextInput style={commonStyle.ti1}
                        placeholder='Enter contact email address'
                        keyboardType="numeric"
         />
                    </TouchableOpacity>

                    {/* <TouchableOpacity  
                          style={[commonStyle.to1,{marginTop:20}]} >
                        <Text style={commonStyle.atext1}>App Glitch</Text> 
                        <View>
                        <Image source={require('../assets/Images/Vector.png')} style={commonStyle.aimage} />
                        </View> 
                    </TouchableOpacity>  */}
                 <View style={commonStyle.style5}>
                    <DropDownPicker
                 style={commonStyle.style6}
                
                labelStyle={[commonStyle.textstyles]}

                  textStyle={commonStyle.textstyles1}

                  
                 open={open}
                 value={value}
                   items={items}
                  setOpen={setOpen}
                 setValue={setValue}
                  setItems={setItems}
                   />
                  </View>
                    <View
                    style={commonStyle.reate}>
                        <TextInput style={commonStyle.crabtext2} placeholder='Enter your concerns here!'
                        keyboardType='default'/>
                   </View>

                   <TouchableOpacity style={commonStyle.to3}>
                        <Text style={commonStyle.text6}>
                         SUBMIT HELP REQUEST</Text>
                    </TouchableOpacity>
        </View>


     </View>
    )};



export default Crab;
