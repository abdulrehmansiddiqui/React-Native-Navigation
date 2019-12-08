import React from 'react';
import { Text, View, StyleSheet , TouchableOpacity , Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>Home</Text>
        <Button title="Open Menu"
        onPress={()=>this.props.navigation.toggleDrawer()}
        />
        <Button title="Go to Setting"
        onPress={()=>this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const AppNavigator = createDrawerNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Settings: SettingsScreen,
})

const Menu = createStackNavigator({
  defaulthome:AppNavigator
},{
  defaultNavigationOptions:({navigation})=> {
    return{
      title:"Citiplus",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});