/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './App/Main';
import { StackNavigator } from 'react-navigation';

export default class GoldTradersStart extends Component {
  static navigationOptions = {
  header: { visible:false },
  };
  render() {
    return (
      <App/>
    );
  }
}
const GoldTraders = StackNavigator({
  Home: { screen: GoldTradersStart }
},{
  headerMode: 'screen'
});
AppRegistry.registerComponent('GoldTraders', () => GoldTraders);
