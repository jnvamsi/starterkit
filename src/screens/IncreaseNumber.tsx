import React, {useState} from 'react';
import {View, Text, TouchableOpacity,Button,ScrollView} from 'react-native';
const IncreaseNumber = () => {


  const task1 = () => {
    alert('Button A was pressed');
  };

  const task2 = () => {
    alert('Button B was pressed');
  };

  return (
    <ScrollView>
    
    <View style={{flex: 1, alignItems: 'center', alignContent: 'center'}}>
      <TouchableOpacity
        onPress={() =>alert('Card was pressed')}
        style={{
          marginTop: 10,
          padding:20,
          width: 300,
          height: 250,
          backgroundColor: 'green',
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderRadius: 8,
        }}>
      
        <Button onPress={task1}   title='Button A'></Button>
        <Text>      </Text>
        <Button onPress={task2}  title='Button B'></Button>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() =>alert('Card was pressed')}
        style={{
          marginTop: 10,
          padding:20,
          width: 300,
          height: 250,
          backgroundColor: 'green',
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderRadius: 8,
        }}>
      
        <Button onPress={task1}   title='Button A'></Button>
        <Text>      </Text>
        <Button onPress={task2}  title='Button B'></Button>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() =>alert('Card was pressed')}
        style={{
          marginTop: 10,
          padding:20,
          width: 300,
          height: 250,
          backgroundColor: 'green',
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderRadius: 8,
        }}>
      
        <Button onPress={task1}   title='Button A'></Button>
        <Text>      </Text>
        <Button onPress={task2}  title='Button B'></Button>
        </TouchableOpacity>


        <TouchableOpacity
        onPress={() =>alert('Card was pressed')}
        style={{
          marginTop: 10,
          padding:20,
          width: 300,
          height: 250,
          backgroundColor: 'green',
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderRadius: 8,
        }}>
      
        <Button onPress={task1}   title='Button A'></Button>
        <Text>      </Text>
        <Button onPress={task2}  title='Button B'></Button>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() =>alert('Card was pressed')}
        style={{
          marginTop: 10,
          padding:20,
          width: 300,
          height: 250,
          backgroundColor: 'green',
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderRadius: 8,
        }}>
      
        <Button onPress={task1}   title='Button A'></Button>
        <Text>      </Text>
        <Button onPress={task2}  title='Button B'></Button>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={() =>alert('Card was pressed')}
        style={{
          marginTop: 10,
          padding:20,
          width: 300,
          height: 250,
          backgroundColor: 'green',
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderRadius: 8,
        }}>
      
        <Button onPress={task1}   title='Button A'></Button>
        <Text>      </Text>
        <Button onPress={task2}  title='Button B'></Button>
        </TouchableOpacity>


        <TouchableOpacity
        onPress={() =>alert('Card was pressed')}
        style={{
          marginTop: 10,
          padding:20,
          width: 300,
          height: 250,
          backgroundColor: 'green',
          alignItems: 'flex-start',
          justifyContent: 'center',
          borderRadius: 8,
        }}>
      
        <Button onPress={task1}   title='Button A'></Button>
        <Text>      </Text>
        <Button onPress={task2}  title='Button B'></Button>
        </TouchableOpacity>
        
      
    </View>
    </ScrollView>
  );
};

export default IncreaseNumber;
