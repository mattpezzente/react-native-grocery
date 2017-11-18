import React from 'react';
import { navigation } from 'react-navigation'
import { AsyncStorage, StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Screen1 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({tintColor}) => (<Icon name="account-circle" size={35} color={tintColor}/>),
  };

  constructor(props) {
    super(props)
    this.state = {
      groceryText: '',
      groceries: [],
    }

    this.updateValue = this.updateValue.bind(this)
    this.addGrocery = this.addGrocery.bind(this)
  }

  render() {
    groceries = this.state.groceries.map((grocery, key) => {
      return <Text key={key}>{grocery}</Text>
    })

    return (
      <View style={styles.container}>
        <View style={styles.row}>    
          <Text style={{textAlign: 'center', fontSize: 32, marginBottom: 20}}>Grocery List</Text>
          <Text style={{textAlign: 'center'}}>Grocery Item</Text>
          <TextInput onChangeText={this.updateValue} style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}} value={this.state.groceryText}/>
          <Button style={{textAlign: 'center'}} onPress={this.addGrocery} title="Add grocery"></Button>
        </View>
        <View style={styles.row}>
          {groceries}
        </View>
        <View style={styles.row}>
          <Button title="List" onPress={() => this.props.navigation.navigate('List')}></Button>
        </View>
      </View>
    );
  }

  updateValue(e) {
    this.setState({groceryText: e})
  }

  addGrocery(e) {
    let groceries = this.state.groceries
    groceries.push(this.state.groceryText)

    this.setState({groceryText: ''})
    this.setState({groceries: groceries})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    marginTop: 25,
    marginBottom: 25,
  }
});
