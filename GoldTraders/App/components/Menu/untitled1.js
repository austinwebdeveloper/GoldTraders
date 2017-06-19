
/*View for Menu in side Menu */

import React,{Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  AlertIOS,
  AsyncStorage,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

var window = Dimensions.get('window');
var Platform = require('Platform');

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#383838',
    padding:5,
  },
  container:{
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor:'#f5f5f5',
  },
  avatarContainer: {
    marginBottom:5,
    marginTop: 5,
  },
 statusBar:{
    width: window.width,
    flex: 0.03,
    backgroundColor:'#ffb714'
  },
  navbarContainer:{
    flex:0.0875,
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'#ffb714'
  },
  navbarContainerAndroid:{
    flex:0.0975,
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'#ffb714'
  },
  body:{
    width: window.width,
    backgroundColor: '#383838',
    flex:0.9,
    marginLeft:5
  },
  avatar: {
    width: 30,
    height: 30,
    flex: 1,
  },
  row:{
    flex:1,
    justifyContent:'center',
  },
  profilePic: {
    width: 35,
    height: 35,
    borderRadius: 4,
  },
  profileName:{
    position: 'absolute',
    left: 45,
    top: 10,
    fontSize: 19,
    color:'white'
  },
  profileNameAndroid:{
    position: 'absolute',
    left: 45,
    top: 15,
    fontSize: 19,
    color:'white'
  },
  name: {
    position: 'absolute',
    left: 40,
    fontSize: 20,
    top: 5,
    color:'white'
  },
  line:{
    height:5
  },
   navbar:{
    flex:.1,
    backgroundColor: 'transparent'
  },

});

module.exports = class Menu extends Component {
  constructor(props){
      super(props);
    }
    static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };
  Logout(){
   Alert.alert(
     'GoldTraders',
     'Are you sure you want to logout?',
     [
        {text: 'Yes', onPress: () =>{
          this.props.navigator.popToTop()}},
        {text: 'No', onPress: () =>  console.log('cancel')},

      ]
     )
  }
  render() {
    let android = Platform.OS == 'android'
    return (
      <View style={styles.container}>
        <View style={{width: window.width,height: window.height/3,backgroundColor:'#383838'}}>
        </View>
        <View style={{width: window.width,height:window.height- (window.height/3),backgroundColor:'#383838'}}>
          <View style={{flex:1,marginLeft:5}}>
            <ScrollView scrollsToTop={false} style={styles.menu}>
              <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Dashboard')}>
                <Image style={styles.avatar} source={require('./../../Images/profile.png')}/>
                <Text style={styles.name} >Dashboard</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('editProfile')}>
                <Image style={styles.avatar} source={require('./../../Images/edit.png')}/>
                <Text style={styles.name} >Edit Profile</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Bids')}>
                <Image style={styles.avatar} source={require('./../../Images/auction.png')}/>
                <Text style={styles.name} >Your Bids: 0 Bonos Bids: 10</Text>
              </TouchableOpacity>

              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer}  onPress={() =>this.props.onItemSelected('buyPackages')}>
                <Image style={styles.avatar} source={require('./../../Images/cart.png')}/>
                <Text style={styles.name} >Buy Packages</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer}  onPress={this.Logout.bind(this)}>
                <Image style={styles.avatar} source={require('./../../Images/logout.png')}/>
                <Text style={styles.name} >Logout</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
};
