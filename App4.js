import React from 'react';
import { Text, View, StyleSheet ,  Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screen/Home';
import AboutScreen from './screen/About';
import SettingsScreen from './screen/Setting';

const Mytabs = createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Settings: SettingsScreen,
})

const AppContainer = createAppContainer(Mytabs);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });