import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IncreaseNumber from '../../screens/IncreaseNumber';
import LoginContainer from '../../screens/login/loginContainer';
import HomeContainer from '../../screens/home/homeContainer';
import IncreaseContainer from '../../screens/increase/increaseContainer';
import UserContainer from '../../screens/users/usersContainer';
import Task1 from '../../screens/task1';
import Splash from '../../screens/splashscreen';
import Spla from '../../screens/test';
import Login3 from '../../screens/login3';
import Login4 from '../../screens/login4';
import Crab from '../../screens/crab';
import Apps from '../../screens/drop';
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Increase: undefined;
  Users:undefined;
  Task:undefined;
  Screen1:undefined;
  Login33:undefined;
  Login44:undefined;
  Crabs:undefined;
  Drop:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigationStack = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>('Login');

  useEffect(() => {
    async function getLoginStatus() {
      let loginCred = await AsyncStorage.getItem('Login_cred');
      try {
        if (loginCred) {
          setInitialRoute('Home');
        } else {
          setInitialRoute('Login');
        }
      } catch {
        setInitialRoute('Login');
      }
      SplashScreen.hide();
    }
    getLoginStatus();
  }, []);
  return (
    // !!initialRoute && (
    <Stack.Navigator
      initialRouteName={initialRoute as 'Login' | 'Home'}
      screenOptions={{
        animation: 'slide_from_right',
        animationTypeForReplace: 'push',
        gestureEnabled: true,
        headerShown: false,
        headerShadowVisible: false,
      }}>
       {/* <Stack.Screen name="Login" component={LoginContainer} />  */}
      {/* <Stack.Screen name="Home" component={HomeContainer} />  */}
      {/* <Stack.Screen name="Increase" component={IncreaseNumber} />  */}
      {/* <Stack.Screen name="Users" component={UserContainer} />  */}
      {/* <Stack.Screen name="Task" component={Task1} /> */}
       {/* <Stack.Screen name="Screen1" component={Splash} />  */}
       {/* <Stack.Screen name="Login33" component={Login3} />  */}
      {/* <Stack.Screen name="Login44" component={Login4} />  */}
      <Stack.Screen name="Crabs" component={Crab} /> 
      {/* <Stack.Screen name="Drop" component={Apps} />  */}
    </Stack.Navigator>
    // )
  );
};

export default RootNavigationStack;
