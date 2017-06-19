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
import signUp from './signUp';
import styles from './../styles/signStyles';
import {Login} from './../services/api' ;
import Dashboard from './Menu/dashBoard';

export default class signIn extends Component {
  constructor(props) {
    super(props)
    Text.defaultProps.allowFontScaling=false;
    this.state = {
      signIn:{UserName:'',Password : ''}
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
  signIn(){
    if(this.state.signIn.UserName =='' || this.state.signIn.UserName == null && this.state.signIn.Password =='' || this.state.signIn.Password == null)
    {
      Alert.alert('GoldTraders','Please enter User Name and Password');
    }else if(this.state.signIn.UserName =='' || this.state.signIn.UserName == null){
      Alert.alert('GoldTraders','Please enter User Name');
    }
    else if(this.state.signIn.Password =='' || this.state.signIn.Password == null){
      Alert.alert('GoldTraders','Please enter Password');
    }else{
      //console.log("data:"+JSON.stringify(this.state.signIn))
      //alert("data:"+JSON.stringify(this.state.signIn))
      this.setState({Spinner:true,isLoading:true})
      var string = this.state.signIn
      Login(string).then((responseData)=>{ 
        if(responseData.id != "Error"){
         // alert("no error")
         if(this.props.value == 'login'){
           this.props.navigator.push({
              component:Dashboard,
              passProps:{login:true}
            })
         }else{
          this.props.navigator.push({
            component:Dashboard,
            passProps:{login:true,selectedItem:'Buy Packages'}
          })
         }
         
        }else{
          Alert.alert('GoldTraders',responseData.message);
          this.setState({Spinner:false,isLoading:false});
        }
        
      }).catch((err)=>{
        var self = this;
         this.setState({Spinner:false,isLoading:false});
      }).done()
    }
    }
  signUp(){
    this.props.navigator.push({
      component:signUp
    })
  }
  handleChange(name,e){
      var change = this.state.signIn;
      if(change[name] == ''){
        var string1 = e.replace(/\s/g, '');
       }
       else{
        var string1 = e
      }
      change[name] = string1;
      this.setState({signIn:change});
    }
  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:1}}>
        <View style={styles.header}>
          <View style={styles.headerImage}>
            <Image  source={require('./../Images/titleImg.png')}
              style={{width: windowSize.width, height: windowSize.height/4}} />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.subBody}>
            <ScrollView ref='scrollView' automaticallyAdjustContentInsets={false}>
              <View>
                <TextInput style={styles.textInput}
                   underlineColorAndroid="#000000"
                   placeholder="User Name"
                   autoCorrect={false}
                   value={this.state.signIn.UserName}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onSubmitEditing={(event)=>{
                              this.refs.SecondInput.focus();
                            }}
                   onChangeText={this.handleChange.bind(this,'UserName')}
                   />
              </View>
              <View style={{marginTop:20}}>
                <TextInput style={styles.textInput}
                   ref='SecondInput'
                   placeholder="Password"
                   underlineColorAndroid="#000000"
                   autoCorrect={false}
                   secureTextEntry={true}
                   value={this.state.signIn.Password}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onSubmitEditing={(event)=>{
                      this.signIn();
                    }}
                   onChangeText={this.handleChange.bind(this,'Password')}
                />
              </View>
              <TouchableOpacity onPress={this.signIn.bind(this)} style={styles.signInButton}>
                <View style={styles.button}>
                  <Text style={styles.text}>SIGN IN</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.footer}>
                <View style={{height:40}}>
                  <Text style={styles.footerText}>Don't have an account? <Text onPress={this.signUp.bind(this)} style={styles.footerUnderLineText}>SIGNUP
                  </Text></Text>
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


module.exports = signIn;
