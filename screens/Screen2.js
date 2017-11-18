import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Screen2 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'List',
    tabBarIcon: ({tintColor}) => (<Icon name="account-circle" size={35} color={tintColor}/>),
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Home" onPress={() => this.props.navigation.navigate('Home')}></Button>
      </View>
    );
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