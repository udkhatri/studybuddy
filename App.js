import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { DefaultTheme,DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './scr/navigation/index';
const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    background: '#fff',
  },
  
};
export default function App() {
  return (
    <PaperProvider  theme={theme}>
    <Navigation />
  </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);