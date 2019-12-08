import React from 'react';
import { Text, View, StyleSheet ,  Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


class feedScreen extends React.Component {

  static navigationOptions= {
    drawerLabel : () => null
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feeds!</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
}

const MyBottomtabs = createBottomTabNavigator({
  Feed: feedScreen,
  Profile: ProfileScreen,
})

const AppContainer = createAppContainer(MyBottomtabs);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
