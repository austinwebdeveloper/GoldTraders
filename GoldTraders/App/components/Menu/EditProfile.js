
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import styles from './../../styles/signStyles';
var Platform = require('Platform');

export default class App extends React.Component {

  state = {
    avatarSource: null,
    videoSource: null,
    signUp:{FirstName:'',LastName:'',UserName:'',Email:'',Password : '',ConfirmPassword:''},
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });
      }
    });
  }
  handleSubmit(){
    alert("submit")
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
      <View style={styles1.container}>
        <View style={{height:windowSize.height,width:windowSize.width}}>
          <View style={{height:windowSize.height/3+20,width:windowSize.width}}>
            <View style={{height:(windowSize.height/3)-40,width:windowSize.width}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View>
                  <View style={[styles1.avatar, styles1.avatarContainer, {marginBottom: 20}]}>
                  { this.state.avatarSource === null ? <Image style={styles1.avatar} source={require('./../../Images/images.png')} /> :
                    <Image style={styles1.avatar} source={this.state.avatarSource} />
                  }
                  </View>
                </View>
              </View>
            </View>
            <View style={{height:40,width:windowSize.width}}>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{width:windowSize.width/2,height:40}}>
                  <View style={{flex:1}}>
                    <View style={{height:40,width:windowSize.width/2-50,marginLeft:25,marginRight:25,backgroundColor:'#FF7900',borderRadius:5}}>
                      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black'}}>Change</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{width:windowSize.width/2,height:40}}>
                  <View style={{flex:1}}>
                    <View style={{height:40,width:windowSize.width/2-50,marginLeft:25,marginRight:25,backgroundColor:'#DECC0C',borderRadius:5}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black'}}>Upload</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{height:windowSize.height-(windowSize.height/3+20),width:windowSize.width,backgroundColor:'black'}}>
            <View style={{flex:1}}>
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
                <TouchableOpacity onPress={this.handleSubmit.bind(this)} style={styles.signInButton}>
                  <View style={styles.button}>
                    <Text style={styles.text}>Submit</Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  avatarContainer: {
    borderColor: 'white',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
