import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import HomeBottomTabNavigator from './bottomTab';
import loginScreen from '../screens/Authentication/login';
import SignupScreen from '../screens/Authentication/signup';
import OnBoarding from '../screens/UI/onBoarding';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const RootNavigation = () => {
  const [isFirstLaunch, setisFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setisFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Login" component={loginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
          title: 'Post',
          // headerTransparent: true
        }}
        name="Login"
        component={loginScreen}
      />
      <Stack.Screen
        options={{
          headerTransparent: true,
        }}
        name="Signup"
        component={SignupScreen}
      />
      <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
  }
};

export default RootNavigation;
