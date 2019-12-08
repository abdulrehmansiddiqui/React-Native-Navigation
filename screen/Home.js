import React from 'react';
import { Text, View, StyleSheet ,  Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: "Home",
        drawerIcon: () =>(
           <Ionicons name="md-home" size={32} color="black" />
        )
      } 
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  
          <Text>Home screen</Text>
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