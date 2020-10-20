import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer'
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'


export default class App extends React.Component {
  render() {
   return <AppContainer />;
  }
}




const AppNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
   AppDrawerNavigator:{screen : AppDrawerNavigator}
})

const AppContainer = createAppContainer(AppNavigator);