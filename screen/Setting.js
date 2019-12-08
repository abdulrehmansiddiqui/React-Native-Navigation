import React from 'react';
import { Text, View, StyleSheet ,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class SettingScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: "Setting",
      drawerIcon: () =>(
         <Ionicons name="md-cog" size={32} color="black" />
      )
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Setting Screen!</Text>
        </View>
      );
    }
  }