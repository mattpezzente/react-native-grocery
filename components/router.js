import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'
import Screen1 from '../screens/Screen1'
import Screen2 from '../screens/Screen2'


export const Tabs = StackNavigator({
  Home: { 
    screen: Screen1,
    navigationOptions: {
      title: 'Home',
      icon: ({tintColor}) => <Icon name="list" size={35} color={tintColor}/>
    }
  },
  List: { 
    screen: Screen2,
    navigationOptions: {
      title: 'List',
      icon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
    }
  },

  // Home: {
  //   screen: Screen1,
  //   navigationOptions: {
  //     tabBar: {
  //       label: 'Home',
  //       icon: ({tintColor}) => <Icon name="list" size={35} color={tintColor}/>
  //     }
  //   }
  // },
  // List: {
  //   screen: Screen2,
  //   navigationOptions: {
  //     tabBar: {
  //       label: 'Groceries',
  //       icon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
  //     }
  //   }
  // },
});