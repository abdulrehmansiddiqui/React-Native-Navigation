import React from 'react';
import { Text, View, StyleSheet ,  Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screen/Home';
import AboutScreen from './screen/About';
import SettingsScreen from './screen/Setting';
import DashboardScreen from './screen/Dashboard';


const AppNavigator = createDrawerNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Settings: SettingsScreen,
  Dashborad: DashboardScreen,
})
const Menu = createStackNavigator({
  defaulthome:AppNavigator
},{
  defaultNavigationOptions:({navigation})=> {
    const{routeName} = navigation.state.routes[navigation.state.index]
    return{
      headerTitle: routeName,
      headerLeft: <Ionicons name="md-menu" size={32} color="white" style={{marginLeft: 30,}} onPress={()=>navigation.toggleDrawer()}/>,
      headerStyle: {
        backgroundColor: '#BF2026',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
    
  }
});

const AppContainer = createAppContainer(Menu);

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