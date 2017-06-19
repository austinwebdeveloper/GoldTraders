
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

import Login from './../signIn'

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
    resizeMode:'stretch'
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
  Login(value){
    //alert("Login")
    this.props.navigator.push({
      component:Login,
      passProps:{value:value}
    })
  }
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
    if(this.props.login){
      var height=window.height/3
    }else{
      var height=64
    }
    return (
      <View style={styles.container}>
      {this.props.login ? (
        <View style={{width: window.width,height: height,backgroundColor:'#CF961F'}}>
          <View style={{flex:1,justifyContent:'center',marginLeft:window.width/5}}>
            <TouchableOpacity onPress={() =>this.props.onItemSelected('Edit Profile')} style={{height:window.height/4,width:window.height/4,borderRadius:window.height/8,backgroundColor:'blue'}}>
            <Image style={{height:window.height/4,width:window.height/4,borderRadius:window.height/8}} source={require('./../../Images/images.png')} />
            </TouchableOpacity>
          </View>
        </View>
        ):(
        <View style={{width: window.width,height: height,backgroundColor:'#383838'}}>
        </View>
        )}
        <View style={{width: window.width,height:window.height- height,backgroundColor:'#383838'}}>
          <View style={{flex:1,marginLeft:5}}>
            <ScrollView scrollsToTop={false} style={styles.menu}>
              <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Dashboard')}>
                <Image style={styles.avatar} source={require('./../../Images/profile.png')}/>
                <Text style={styles.name} >Dashboard</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              {this.props.login? (
                <View>
                <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Edit Profile')}>
                  <Image style={styles.avatar} source={require('./../../Images/edit.png')}/>
                  <Text style={styles.name} >Edit Profile</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Bid')}>
                  <Image style={styles.avatar} source={require('./../../Images/auction.png')}/>
                  <Text style={styles.name} >Your Bids: 0 Bonos Bids: 10</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Balance')}>
                  <Image style={styles.avatar} source={require('./../../Images/account.png')}/>
                  <Text style={styles.name} >Account Balance: $20</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                 <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Change Password')}>
                  <Image style={styles.avatar} source={require('./../../Images/changepass.png')}/>
                  <Text style={styles.name} >Change Password</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                 <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('My Messages')}>
                  <Image style={styles.avatar} source={require('./../../Images/message.png')}/>
                  <Text style={styles.name} >My Messages</Text>
                </TouchableOpacity>
                <View style={styles.line}></View>
                 <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('My Watchlist')}>
                  <Image style={styles.avatar} source={require('./../../Images/watchlist.png')}/>
                  <Text style={styles.name} >My Watchlist</Text>
                 </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('My Testimonial')}>
                  <Image style={styles.avatar} source={require('./../../Images/testimonal.png')}/>
                  <Text style={styles.name} >My Testimonial</Text>
                 </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('My Address')}>
                  <Image style={styles.avatar} source={require('./../../Images/address.png')}/>
                  <Text style={styles.name} >My Address</Text>
                 </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('My Transactions')}>
                  <Image style={styles.avatar} source={require('./../../Images/transaction.png')} />
                  <Text style={styles.name} >My Transactions</Text>
                 </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Auctions Won')}>
                  <Image style={styles.avatar} source={require('./../../Images/account.png')}/>
                  <Text style={styles.name} >Auctions Won</Text>
                 </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Concierge Service')}>
                  <Image style={styles.avatar} source={require('./../../Images/concierge.png')}/>
                  <Text style={styles.name} >Concierge Service</Text>
                 </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Referrals')}>
                  <Image style={styles.avatar} source={require('./../../Images/referrals.png')}/>
                  <Text style={styles.name} >Referrals</Text>
                 </TouchableOpacity>
                <View style={styles.line}></View>
                </View>
                ):(
                <View>
                </View>
                )}
              <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Live Auctions')}>
                <Image style={styles.avatar} source={require('./../../Images/act.png')}/>
                <Text style={styles.name} >Live Auctions</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer} onPress={() =>this.props.onItemSelected('Future Auctions')}>
                <Image style={styles.avatar} source={require('./../../Images/iii.png')}/>
                <Text style={styles.name} >Future Auctions</Text>
              </TouchableOpacity>

              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer}  onPress={() =>this.props.onItemSelected('Closed Auctions')}>
                <Image style={styles.avatar} source={require('./../../Images/closed.png')}/>
                <Text style={styles.name} >Closed Auctions</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              <TouchableOpacity style={styles.avatarContainer}  onPress={() =>this.props.onItemSelected('Winners')}>
                <Image style={styles.avatar} source={require('./../../Images/winner.png')}/>
                <Text style={styles.name} >Winners</Text>
              </TouchableOpacity>
              <View style={styles.line}></View>
              {this.props.login? (
              <TouchableOpacity style={styles.avatarContainer}  onPress={() =>this.props.onItemSelected('Buy Packages')}>
                <Image style={styles.avatar} source={require('./../../Images/cart.png')}/>
                <Text style={styles.name} >Buy Packages</Text>
              </TouchableOpacity>):(
               <TouchableOpacity style={styles.avatarContainer}  onPress={this.Login.bind(this,'buyPackages')}>
                <Image style={styles.avatar} source={require('./../../Images/cart.png')}/>
                <Text style={styles.name} >Buy Packages</Text>
              </TouchableOpacity>
              )}
              <View style={styles.line}></View>
              <View>
              {!this.props.login? (
              <TouchableOpacity style={styles.avatarContainer}  onPress={this.Login.bind(this,'login')}>
                <Image style={styles.avatar} source={require('./../../Images/login.png')}/>
                <Text style={styles.name} >Login</Text>
              </TouchableOpacity>
              ):(
              <TouchableOpacity style={styles.avatarContainer}  onPress={this.Logout.bind(this)}>
                <Image style={styles.avatar} source={require('./../../Images/logout.png')}/>
                <Text style={styles.name} >Logout</Text>
              </TouchableOpacity>
              )}
              </View>
              <View style={{height:50,width:window.width}}></View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
};
