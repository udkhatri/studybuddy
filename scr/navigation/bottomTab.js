import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/UI/HomeScreen';
import TutorialScreen from '../screens/UI/tutorialScreen'
import ProfileScreen from '../screens/UI/profileScreen'
import UploadScreen from '../screens/UI/UploadScreen'
import ChatScreen from '../screens/UI/chatScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather';
import TikTok from '../Images/dummy-logo.png';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#fff',
        },
        activeTintColor: '#3498db',
        inactiveTintColor: '#999',
        //showLabel: false,
        style:{
          borderTopWidth: 0,
          paddingTop: 3,
          paddingBottom: 4,
          height: 60,          
        }
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'Tutorial'}
        component={TutorialScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="playcircleo" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'Upload'}
        component={UploadScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle-outline" color={color} size={size*2.5} style={{paddingBottom:20}}/>
          ),
          //tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name={'Chat'}
        component={ChatScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
