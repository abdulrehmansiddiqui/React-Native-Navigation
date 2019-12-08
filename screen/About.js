import React from 'react';
import { Text, View, StyleSheet ,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class AboutScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: "About",
      drawerIcon: () =>(
         <Ionicons name="md-star" size={32} color="black" />
      )
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>About!</Text>
        </View>
      );
    }
  }