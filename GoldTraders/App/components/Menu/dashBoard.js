import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  AsyncStorage,
  Image,
  ActivityIndicator,
  Alert,
  NetInfo,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

var SideMenu = require('react-native-side-menu')
var windowSize = Dimensions.get('window');
var Platform = require('Platform');
import Main from './Main';
import LiveAuctions from './LiveAuctions';
import FutureAuctions from './FutureAuctions';
import Winners from './Winners';
import BuyPackages from './BuyPackages';
import moment from 'moment';
import ClosedAuctions from './ClosedAuctions';
import EditProfile from './EditProfile';
import Bids from './Bids';
import Balance from './Balance';
import ChangePassword from './ChangePassword';
import MyMessages from './MyMessages';
import MyWatchlist from './MyWatchlist';
import MyTestimonial from './MyTestimonial';
import MyAddress from './MyAddress';
import MyTransactions from './MyTransactions';
import AuctionsWon from './AuctionsWon';
import ConciergeService from './ConciergeService';
import Referrals from './Referrals';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
       spinner:false,
       isLoading:true,
       selectedItem:'Dashboard',
       login:false
    };
  }

  componentDidMount(){
   // alert("mount:"+this.props.login)
    if(this.props.login == undefined){
      this.setState({login:false})
    }
    if(this.props.selectedItem != undefined){
      this.setState({selectedItem:this.props.selectedItem})
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }
  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  };
  render(){
   let android = Platform.OS == 'android'
    var Menu = require('./menu');
    return (
      <SideMenu
        menu={<Menu navigator={this.props.navigator} login={this.props.login} onItemSelected={this.onMenuItemSelected}/>}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <View style={styles.container}>
          <View style={styles.navbar}>
          {Platform.OS == 'ios' ?(
            <View style={styles.statusBar}>
            </View>
            ):<View></View>}
            <View style={[styles.navbarContainer, android && styles.navbarContainerAndroid]}>
              <View style={styles.navbarIcon}>
                <TouchableOpacity onPress={() => this.toggle()}>
                  <Image
                   style={styles.menu2}
                   source={require('./../../Images/menu.png')} />
                </TouchableOpacity>
              </View>
              <View style={styles.navbarText}>
                {this.state.selectedItem == 'Dashboard' ? (
                  <Text style={styles.title}>Gold Traders</Text>
                  ):
                  this.state.selectedItem == 'Edit Profile' ? (
                  <Text style={styles.title}>Edit Profile</Text>
                  ):
                  this.state.selectedItem == 'Bid' ? (
                  <Text style={styles.title}> Your Bids</Text>
                  ):
                  this.state.selectedItem == 'Balance' ? (
                  <Text style={styles.title}>Account Balance</Text>
                  ):
                  this.state.selectedItem == 'Future Auctions' ? (
                  <Text style={styles.title}>Future Auctions</Text>
                  ):
                  this.state.selectedItem == 'Closed Auctions' ? (
                  <Text style={styles.title}>Closed Auctions</Text>
                  ):
                  this.state.selectedItem == 'Winners' ? (
                  <Text style={styles.title}>Winners</Text>
                  ):
                  this.state.selectedItem == 'Change Password' ? (
                  <Text style={styles.title}>Change Password</Text>
                  ):
                  this.state.selectedItem == 'My Messages' ? (
                  <Text style={styles.title}>My Messages</Text>
                  ):
                  this.state.selectedItem == 'My Watchlist' ? (
                  <Text style={styles.title}>My Watchlist</Text>
                  ):
                  this.state.selectedItem == 'My Testimonial' ? (
                  <Text style={styles.title}>My Testimonial</Text>
                  ):
                  this.state.selectedItem == 'My Address' ? (
                  <Text style={styles.title}>My Address</Text>
                  ):
                  this.state.selectedItem == 'My Transactions' ? (
                  <Text style={styles.title}>My Transactions</Text>
                  ):
                  this.state.selectedItem == 'Auctions Won' ? (
                  <Text style={styles.title}>Auctions Won</Text>
                  ):
                  this.state.selectedItem == 'Concierge Service' ? (
                  <Text style={styles.title}>Concierge Service</Text>
                  ):
                  this.state.selectedItem == 'Referrals' ? (
                  <Text style={styles.title}>Referrals</Text>
                  ):
                  <Text style={styles.title}>Buy Packages</Text>}
              </View>
                <View style={styles.navbarButton}>
                </View>
              </View>
            </View>
          <View style={styles.line}></View>
            <View style={styles.subContainer}>
            {this.state.selectedItem == 'Dashboard' ? (
              <Main navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Edit Profile' ? (
              <EditProfile navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Buy Packages' ? (
              <BuyPackages navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Bid' ? (
              <Bids navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Balance' ? (
              <Balance navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Live Auctions' ? (
                <LiveAuctions navigator={this.props.navigator}/>
             ):
              this.state.selectedItem == 'Future Auctions' ? (
              <FutureAuctions navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Closed Auctions' ? (
              <ClosedAuctions navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Winners' ? (
              <Winners navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Change Password' ? (
              <ChangePassword navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'My Messages' ? (
              <MyMessages navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'My Watchlist' ? (
              <MyWatchlist navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'My Testimonial' ? (
              <MyTestimonial navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'My Address' ? (
              <MyAddress navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'My Transactions' ? (
              <MyTransactions navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Auctions Won' ? (
              <AuctionsWon navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Referrals' ? (
              <Referrals navigator={this.props.navigator}/>
              ):
              this.state.selectedItem == 'Concierge Service' ? (
              <ConciergeService navigator={this.props.navigator}/>
              ):(
              <Main navigator={this.props.navigator}/>
              )
                }
          </View>
        </View>
      </SideMenu>
    );
  }

}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  navbar:{
    flex:.1,
    backgroundColor: 'transparent'
  },
  statusBar:{
    width: window.width,
    flex: 0.033,
    backgroundColor:'#ffb714'
  },
  navbarContainer:{
    flex:0.0875,
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'#ffb714'
  },
  navbarContainerAndroid:{
    flex:1,
    justifyContent:'center',
    flexDirection:'row',
    backgroundColor:'#ffb714'
  },
  navbarIcon:{
    flex:0.25,
    justifyContent:'center',
    alignSelf:'center'
  },
  navbarButton:{
    flex:.25,
    justifyContent:'center',
    alignSelf:'center'
  },
  title:{
    fontSize: 20,
    textAlign:'center',
    color: '#000000'
  },
  title1:{
    fontSize: 14,
    marginRight:5,
    textAlign:'center',
    color: 'white'
  },
  navbarText:{
    flex:.5,
    justifyContent:'center',
    alignSelf:'center',
  },
  subContainer:{
    flex:.9,
  },
  profileContainer:{
    flex: 1,
    backgroundColor:'#f5f5f5',
  },
  menu2:{
    width:30,
    height:30,
    marginLeft:15
  },
   menu1:{
    width:30,
    height:30,
  },
  button: {
     height: 45,
     width:windowSize.width,
      flexDirection: 'row',
      backgroundColor: '#4d68a1',
      borderColor: '#4d68a1',
      borderWidth: 5,
      borderRadius: 5,
      marginRight:40,
      marginLeft:40,
      justifyContent:'center',
      alignSelf:'center',
  },
  mainContainer:{
    flex:1,
    backgroundColor:'#dcdee0',
    width:windowSize.width,
    height:windowSize.height
  },
  mainHeader:{
    flex:.05,
    width:windowSize.width,
    height:windowSize.height
  },
  subMainContainer:{
    flex:1,
  },
  menu:{
    flex:1,
    width: windowSize.width,
    height: windowSize.height,
  },
  row:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#f0f1f2',
    paddingBottom:5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  line:{
    flex:0.0015,
    backgroundColor:'#4d68a1'
  },

  profilePic:{
    width: windowSize.width,
    height: windowSize.height/4,
  },

  headline: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight:'bold',
     color: 'white'
  },
   subBody:{
    flex: 1

  },

  centersubBody:{
    flex: 0.8,
    alignSelf:'center'
  },
  rightsubBody: {
    flex: 0.2,
    justifyContent:'flex-end',
    alignSelf:'center'
  },
 image:{
  marginLeft:10,
  width:40,
  height:40,
  borderWidth:2,
  borderColor:'#c7c7cd',
  borderRadius:40/2
},
  List:{
    flex:0.8,
  },
  body:{
    flex:1,
    backgroundColor:'#f5f5f5'
  },
    body1:{
    backgroundColor:'#4d68a1',
    justifyContent:'center',
    alignSelf:'center'
  },
  separator: {
    height: 0.8,
    backgroundColor: '#9c9c9c'
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
    image:{
    width:100,
    height:100,
    borderRadius:100/2
  },
    button:{
      height: 45,
      flexDirection: 'row',
      backgroundColor: '#4d68a1',
      borderColor: '#4d68a1',
      borderWidth: 5,
      borderRadius: 5,
      marginRight:40,
      marginLeft:40,
      marginTop: 20,
      marginBottom:5,
      justifyContent:'center',
      alignSelf:'stretch',
  },
   buttonText:{
      fontSize: 18,
      textAlign:'center',
      marginTop:5,
      marginBottom:5,
      color:'white',
      textAlignVertical:'center'
  },
  text:{
     marginLeft:20,
     marginTop:18,
     fontSize: 15,
     textAlign: 'left',
     color:'#282828'
  },


});

module.exports = Dashboard;
