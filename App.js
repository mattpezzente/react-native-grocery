import React from 'react';
import { Tabs } from './components/router'
import { navigation } from 'react-navigation'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>        
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
