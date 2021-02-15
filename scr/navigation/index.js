import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import React from 'react';
import HomeBottomTabNavigator from './bottomTab';
import loginScreen from '../screens/Authentication/login';
import SignupScreen from '../screens/Authentication/signup';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
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
  );
};

export default RootNavigation;
