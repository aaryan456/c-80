import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import header from '../components/Header'

export default class SettingScreen extends Component{
    render(){
      return(
        <View style={styles.container}>
            <header/>
          <Text>Setting screen</Text>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center'
  }
})