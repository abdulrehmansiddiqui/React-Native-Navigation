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
        onPress={()=>this.props.navigation.navigate('About')}
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
        <Text style={{fontSize:30}} >About Screen</Text>
        <Button title="Go to home"
        onPress={()=>this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  // Home: {
  //   screen: HomeScreen
  // },
  // About:{
  //   screen: AboutScreen
  // }
  Home: HomeScreen,
  About: AboutScreen
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

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
