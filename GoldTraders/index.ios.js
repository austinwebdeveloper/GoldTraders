/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
  
} from 'react-native';
import {
  Navigator
} from 'react-native-deprecated-custom-components';
import App from './App/components/Menu/dashBoard';

export default class GoldTraders extends Component {
 
  render() {
    return (
      <View style={{flex:1}}>
        <Navigator
         initialRoute={{
           title:'mainView',
           component:App
         }}
         configureScene={(route) => ({
            ...Navigator.SceneConfigs.HorizontalSwipeJump,
            gestures: false
          })}
         renderScene={(route, navigator) =>{
           return <route.component navigator={navigator} {...route.passProps} />;
         }}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('GoldTraders', () => GoldTraders);
