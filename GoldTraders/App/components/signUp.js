  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  BackAndroid,
  ToastAndroid,
  ActivityIndicator
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
var Platform = require('Platform');
import styles from './../styles/signStyles';
import signIn from './signIn';
import Dashboard from './Menu/dashBoard';
import {Register} from './../services/api' ;
var y = 0
var x = 0

export default class signUp extends Component {
  constructor(props) {
    super(props)
    Text.defaultProps.allowFontScaling=false;
    this.state = {
      signUp:{FirstName:'',LastName:'',UserName:'',Email:'',Password : '',ConfirmPassword:''},
      Spinner:false,
      isLoading:false
    }
  }
  signIn(){
    this.props.navigator.push({
      component:signIn
    })
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
  
  validateEmail = (email) => {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return re.test(email);
  };

  signUp(){
     if(this.state.signUp.FirstName =='' || this.state.signUp.FirstName == null)
    {
      Alert.alert('GoldTraders','Please enter First Name');
    }else if(this.state.signUp.UserName =='' || this.state.signUp.UserName == null){
      Alert.alert('GoldTraders','Please enter User Name');
    }
    else if(this.state.signUp.Email =='' || this.state.signUp.Email == null){
      Alert.alert('GoldTraders','Please enter Email');
    }
    else if(!this.validateEmail(this.state.signUp.Email))
    {
      Alert.alert('GoldTraders','Please enter valid Email');
    }
    else if(this.state.signUp.Password =='' || this.state.signUp.Password == null){
      Alert.alert('GoldTraders','Please enter Password');
    }else if(this.state.signUp.ConfirmPassword =='' || this.state.signUp.ConfirmPassword == null){
      Alert.alert('GoldTraders','Please enter Confirm Password');
    }
    else if(this.state.signUp.ConfirmPassword != this.state.signUp.Password){
      Alert.alert('GoldTraders','Password is not matched');
    }
    else{
      this.setState({Spinner:true,isLoading:true})
      var string = this.state.signUp
      Register(string).then((responseData)=>{ 
        if(responseData.id != "Error"){
          this.props.navigator.push({
            component:Dashboard,
            passProps:{login:true}
          })
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
  handleChange(name,e){
    var change = this.state.signUp;
    if(change[name] == ''){
      var string1 = e.replace(/\s/g, '');
     }
     else{
      var string1 = e
    }
    change[name] = string1;
    this.setState({signUp:change});
  }
  handleScroll(event: Object) {
   console.log(event.nativeEvent.contentOffset.y);
  }
  inputFocused (refName) {
    if(Platform.OS == 'android'){
      if(refName == 'LastName'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
        
        if(y==0){
          y = y+30
          scrollResponder.scrollTo({y:y})
        }
      }else if(refName == 'UserName'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
         
         if(y<=89){
          y = 89
          scrollResponder.scrollTo({y:y})
         }
      }else if(refName == 'Email'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
         
         if(y<=158){
          y=158
          scrollResponder.scrollTo({y:y})
         }
      }
      else if(refName == 'Password'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
        
         if(y<=195){
           y = 195
          scrollResponder.scrollTo({y:y})
         }
      }else if(refName == 'ConfirmPassword'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
         if(y<=255){
         // alert("y")
          y = 255
          scrollResponder.scrollTo({y:y})
         }
      }
    }
    else{
      if(refName == 'LastName'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
        x=x+30
        if(x==30){
          scrollResponder.scrollTo({y:x})
        }
      }else if(refName == 'UserName'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
         x=x+50
        if(x==80){
          scrollResponder.scrollTo({y:x})
        }
      }else if(refName == 'Email'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
         
         if(y<=158){
          y=158
          scrollResponder.scrollTo({y:y})
         }
      }
      else if(refName == 'Password'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
        
         if(y<=195){
           y = 195
          scrollResponder.scrollTo({y:y})
         }
      }else if(refName == 'ConfirmPassword'){
        let scrollResponder = this.refs.scrollView.getScrollResponder();
         if(y<=255){
         // alert("y")
          y = 255
          scrollResponder.scrollTo({y:y})
         }
      }
    }

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
            <ScrollView ref='scrollView' onScroll={this.handleScroll.bind(this)} automaticallyAdjustContentInsets={false}>
              <View>
                <TextInput style={styles.textInput}
                   placeholder="First Name"
                   underlineColorAndroid="#000000"
                   autoCorrect={false}
                   value={this.state.signUp.FirstName}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onSubmitEditing={(event)=>{
                    this.refs.SecondInput.focus();
                   }}
                   onChangeText={this.handleChange.bind(this,'FirstName')}
                />
              </View>
              <View style={{marginTop:20}}>
                <TextInput style={styles.textInput}
                   ref='SecondInput'
                   placeholder="Last Name"
                   underlineColorAndroid="#000000"
                   autoCorrect={false}
                   value={this.state.signUp.LastName}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onFocus={this.inputFocused.bind(this, 'LastName')}
                   onSubmitEditing={(event)=>{
                    this.refs.ThirdInput.focus();
                   }}
                   onChangeText={this.handleChange.bind(this,'LastName')}
                />
              </View>
              <View style={{marginTop:20}}>
                <TextInput style={styles.textInput}
                   ref='ThirdInput'
                   placeholder="User Name"
                   underlineColorAndroid="#000000"
                   value={this.state.signUp.UserName}
                   autoCorrect={false}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onFocus={this.inputFocused.bind(this, 'UserName')}
                   onSubmitEditing={(event)=>{
                    this.refs.FourthInput.focus();
                   }}
                   onChangeText={this.handleChange.bind(this,'UserName')}
                />
              </View>
              <View style={{marginTop:20}}>
                <TextInput style={styles.textInput}
                   ref='FourthInput'
                   placeholder="Email"
                   underlineColorAndroid="#000000"
                   value={this.state.signUp.Email}
                   autoCorrect={false}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onSubmitEditing={(event)=>{
                    this.refs.FifthInput.focus();
                   }}
                   onFocus={this.inputFocused.bind(this, 'Email')}
                   onChangeText={this.handleChange.bind(this,'Email')}
                />
              </View>
              <View style={{marginTop:20}}>
                <TextInput style={styles.textInput}
                   ref = 'FifthInput'
                   underlineColorAndroid="#000000"
                   secureTextEntry={true}
                   placeholder="Password"
                   value={this.state.signUp.Password}
                   autoCorrect={false}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onSubmitEditing={(event)=>{
                    this.refs.SixthInput.focus();
                   }}
                   onFocus={this.inputFocused.bind(this, 'Password')}
                   onChangeText={this.handleChange.bind(this,'Password')}
                />
              </View>
              <View style={{marginTop:20}}>
                <TextInput style={styles.textInput}
                   ref= 'SixthInput'
                   placeholder="Confirm Password"
                   underlineColorAndroid="#000000"
                   autoCorrect={false}
                   secureTextEntry={true}
                   value={this.state.signUp.ConfirmPassword}
                   returnKeyType='next'
                   placeholderTextColor="#cbd0d8"
                   onSubmitEditing={(event)=>{
                    this.signUp();
                   }}
                   onFocus={this.inputFocused.bind(this, 'ConfirmPassword')}
                   onChangeText={this.handleChange.bind(this,'ConfirmPassword')}
                />
              </View>
              <TouchableOpacity onPress={this.signUp.bind(this)} style={styles.signInButton}>
                <View style={styles.button}>
                  <Text style={styles.text}>SIGN UP</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.footer}>
                <View style={{height:40}}>
                  <Text style={styles.footerText}>Already a member ? <Text onPress={this.signIn.bind(this)} style={styles.footerUnderLineText}>
                    SIGNIN
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

module.exports = signUp;
