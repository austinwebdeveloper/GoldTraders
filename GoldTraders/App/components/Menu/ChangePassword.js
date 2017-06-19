  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackAndroid,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import styles from './../../styles/signStyles';

export default class ChangePassword extends Component {
  constructor(props) {
    super(props)
    Text.defaultProps.allowFontScaling=false;
    this.state = {
      ChangePassword:{OldPassword:'',NewPassword : '',ConfirmPassword:''}
    } 
  }
  componentDidMount() {
    var navigator = this.props.navigator;
    BackAndroid.addEventListener('hardwareBackPress', function() {
        if (navigator && navigator.getCurrentRoutes().length > 1) {
          navigator.pop();
          return true;
        }
        return false;
    });
  }
  save(){
    alert("save")
    }
  reset(){
    alert("reset")
  }
  handleChange(name,e){
      var change = this.state.ChangePassword;
      if(change[name] == ''){
        var string1 = e.replace(/\s/g, '');
       }
       else{
        var string1 = e
      }
      change[name] = string1;
      this.setState({ChangePassword:change});
    }
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={styles.header}>
          <View style={styles.headerImage}>
            <Image  source={require('./../../Images/titleImg.png')}
              style={{width: windowSize.width, height: windowSize.height/4}} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.subBody}>
            <ScrollView ref='scrollView' automaticallyAdjustContentInsets={false}>
              <View>
                <TextInput style={styles.textInput}
                   underlineColorAndroid="#000000"
                   placeholder="Old Password"
                   autoCorrect={false}
                   value={this.state.ChangePassword.OldPassword}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onSubmitEditing={(event)=>{
                              this.refs.SecondInput.focus();
                            }}
                   onChangeText={this.handleChange.bind(this,'OldPassword')}
                   />
              </View>
              <View style={{marginTop:20}}>
              <TextInput style={styles.textInput}
                   underlineColorAndroid="#000000"
                   placeholder="New Password"
                   autoCorrect={false}
                   value={this.state.ChangePassword.NewPassword}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onSubmitEditing={(event)=>{
                              this.refs.ThirdInput.focus();
                            }}
                   onChangeText={this.handleChange.bind(this,'NewPassword')}
                   />
              </View>
              <View style={{marginTop:20}}>
                <TextInput style={styles.textInput}
                   ref='ThirdInput'
                   placeholder="Confirm Password"
                   underlineColorAndroid="#000000"
                   autoCorrect={false}
                   secureTextEntry={true}
                   value={this.state.ChangePassword.ConfirmPassword}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onSubmitEditing={(event)=>{
                      this.signIn();
                    }}
                   onChangeText={this.handleChange.bind(this,'ConfirmPassword')}
                />
              </View>
              <View style={{height:50,width:windowSize.width,marginTop:25}}>
                <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{height:50,width:windowSize.width/2}}>
                    <TouchableOpacity onPress={this.save.bind(this)} style={{flex:1,height:50,width:windowSize.width/2-40,marginLeft:30,marginRight:10,backgroundColor:'#FF7900'}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'white'}}>SAVE</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{height:50,width:windowSize.width/2}}>
                    <TouchableOpacity onPress={this.reset.bind(this)} style={{flex:1,height:50,width:windowSize.width/2-40,marginLeft:10,marginRight:30,backgroundColor:'#DECC0C'}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'white'}}>RESET</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        </View>
        {this.state.Spinner?(
        <View style={{height:windowSize.height,width:windowSize.width,backgroundColor:'transparent'}}>
          <ActivityIndicator
           animating={this.state.isLoading}
           style={{height: 80,marginTop:windowSize.height/2.5,alignSelf: 'center',justifyContent: 'center'}}
           color="#ffb714"
           size="large"
         />
        </View>
      ):(<View></View>)}
      </View>
    );
  }
}


module.exports = ChangePassword;
