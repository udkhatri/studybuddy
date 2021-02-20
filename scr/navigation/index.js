import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import React from 'react';
import HomeBottomTabNavigator from './bottomTab';
import loginScreen from '../screens/Authentication/login';
import SignupScreen from '../screens/Authentication/signup';
import OnBoarding from '../screens/UI/onBoarding';
import BookCategories from '../screens/UI/BookCategories';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeBottomTabNavigator} />

        <Stack.Screen
          options={{
            headerShown: false,
            title: 'Post',
            // headerTransparent: true
          }}
          name="OnBoarding"
          component={OnBoarding}
        />
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
        <Stack.Screen
          options={{
            headerTitle: '',
            headerTransparent: true,
            headerShown: true,
          }}
          name="BookCategories"
          component={BookCategories}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
