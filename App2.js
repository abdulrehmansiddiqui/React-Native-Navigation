import React from "react";
import { View, Text, StyleSheet ,Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Citi Plus'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="About"
        onPress={()=>this.props.navigation.navigate('About',{id:'123445'})}
        />
      </View>
    );
  }
}
///////////////////////////////////////////////////////////
class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.navigation.getParam('id')}</Text>
        <Text style={{fontSize:30}} >About Screen</Text>
        <Button title="Service"
        onPress={()=>this.props.navigation.navigate('Service',{id:'321'})}
        />
        <Button title="Go to home"
        onPress={()=>this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
///////////////////////////////////////////////////////////
class ServiceScreen extends React.Component {
  static navigationOptions = {
    title: 'Serives'
  };
  render() {
    return (
      <View style={styles.container}>
      <Text>{this.props.navigation.getParam('id')}</Text>
        <Text style={{fontSize:30}} >Service Screen</Text>
        <Button title="Go to home"
        onPress={()=>this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen,
  Service: ServiceScreen
},
{
  initialRouteName: 'Home',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#BF2026',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
);

const AppContainer = createAppContainer(AppNavigator);

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
