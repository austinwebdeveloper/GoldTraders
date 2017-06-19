  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import {
  Navigator
} from 'react-native-deprecated-custom-components';
import signIn from './signIn';
import signUp from './signUp';
import styles from './../styles/mainStyles'

export default class Main extends Component {
  constructor(props) {
    super(props)
    Text.defaultProps.allowFontScaling=false;
  }
  signIn(){
    this.props.navigator.push({
      component:signIn
    })
  }
  signUp(){
    this.props.navigator.push({
      component:signUp
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerImage}>
            <Image  source={require('./../Images/titleImg.png')}
              style={{width: windowSize.width, height: windowSize.height/4}} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.subBody}>
            <TouchableOpacity onPress={this.signIn.bind(this)} style={styles.signInButton}>
              <View style={styles.button}>
                <Text style={styles.text}>SIGN IN</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.signUp.bind(this)} style={styles.signInButton}>
              <View style={styles.button}>
                <Text style={styles.text}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Main;
