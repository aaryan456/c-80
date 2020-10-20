import React, { Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';

export default class header extends Component {
    render(){
        return(
          
                <Header 
                    containerStyle={{borderBottomColor:'#191b83', borderBottomWidth:2}}
                    placement="center"
                    backgroundColor = {'white'}
                    leftComponent={<Image
                        style={styles.tinyLogo}
                        
                    />}
                    centerComponent = {{
                        text : 'iBarter App',
                        style : { color: '#ff914d', fontSize: 20}
                    }}
                />
      
        );
    }
}

const styles = StyleSheet.create({
    tinyLogo: {
      width: 40,
      height: 40,
    }
});