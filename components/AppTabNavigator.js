import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainScreen from '../screens/MainScreen';
import ExchangeScreen from '../screens/ExchangeScreen';



export const AppTabNavigator = createBottomTabNavigator({
  MainScreen : {
    screen:MainScreen,
    navigationOptions :{
      tabBarLabel : "Donate Books",
    }
  },
  ExchangeScreen: {
    screen: ExchangeScreen,
    navigationOptions :{
      tabBarLabel : "Book Request",
    }
  }
});