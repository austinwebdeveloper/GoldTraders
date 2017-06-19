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
  TouchableOpacity,
  ListView,
  ActivityIndicator
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import Swiper from 'react-native-swiper'
import {
  Navigator
} from 'react-native-deprecated-custom-components';

export default class Main extends Component {
  constructor(props) {
    super(props)
    Text.defaultProps.allowFontScaling=false;
    this.state = {
      layer:false,
      isLoading: true,
      dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    } 
  }
  componentDidMount(){
   /* var array = [{
  "product_name": "auction penny",
  "product_category": "2",
  "product_info": "wertyuiopxrctufyviubino ibibibib",
  "enddate": "2017-06-18 00:00:00",
  "current_price": "34.00",
  "product_cost": "3434.00",
  "starting_current_price": "34.00"
}, {
  "product_name": "Cheking new Acution",
  "product_category": "1",
  "product_info": "Checking the penny auction status",
  "enddate": "2017-06-23 00:00:00",
  "current_price": "12.00",
  "product_cost": "1200.00",
  "starting_current_price": "12.00"
}]
this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(array)
      })*/
 fetch('https://goldtrader.cash/rest/dashboard.php')
      .then((response) => response.json())
      .then((responseJson) => {
        alert("responseJson"+JSON.stringify(responseJson))
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(responseJson)
      })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  category(){
    this.setState({
      layer:true
    })
  }
  renderRow(rowData,sectionID) {
    //alert("rowData:"+JSON.stringify(rowData))
    return(
      <View style={{flex:1,padding:5}}>
        <View style={{height:25,marginLeft:15,marginRight:15,width:windowSize.width-40,backgroundColor:'#383838'}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:15,color:'white'}}>{rowData.product_name.toUpperCase()}</Text>
          </View>
        </View>
        <View style={{height:150,marginLeft:15,marginRight:15,width:windowSize.width-40,backgroundColor:'white'}}>
          <View style={{flex:1}}>
            <Image  source={{uri: 'https://goldtrader.cash/public/uploaded_files/products/thumb5/59354a8e8f8864'}}
              style={{width:windowSize.width-40, height: 150,resizeMode:'stretch'}} />
          </View>
        </View>
        <View style={{height:60,marginLeft:15,marginRight:15,width:windowSize.width-40,backgroundColor:'#383838'}}>
          <View style={{flex:1}}>
            <Image  source={{uri: 'https://goldtrader.cash/public/black/images/gold_value.png'}}
                style={{width:windowSize.width-40, height: 50,marginTop:10,resizeMode:'stretch'}} />
          </View>
        </View>
        <View style={{height:30,marginLeft:15,marginRight:15,width:windowSize.width-40,backgroundColor:'#383838'}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'orange',fontWeight:'bold'}}>${rowData.product_cost}</Text>
          </View>
        </View>
        <View style={{height:150,marginLeft:15,marginRight:15,width:windowSize.width-40,backgroundColor:'white'}}>
          <Image style={{position:'absolute',left:0,width:windowSize.width-40,height:150}} source={{uri: 'https://goldtrader.cash/public/black/images/gold_bonus.png'}}/>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#F3CB13',marginTop:90}}>$ 0</Text>
          </View>
        </View>
        <View style={{flex:1,backgroundColor:'#383838',marginLeft:15,marginRight:15,width:windowSize.width-40}}>
          <Text style={{marginTop:10,fontSize:20,color:'white',fontWeight:'bold',textAlign:'center'}}>Current Bid</Text>
          <Text style={{marginTop:10,fontSize:20,color:'#F3CB13',fontWeight:'bold',textAlign:'center'}}>$ 300</Text>
          <Text style={{marginTop:10,fontSize:20,color:'#F3CB13',fontWeight:'bold',textAlign:'center'}}>Highest Bidder : Admin</Text>
          <Text style={{marginTop:10,fontSize:20,color:'#F3CB13',fontWeight:'bold',textAlign:'center'}}>Time Remaining</Text>
          <Text style={{marginTop:10,fontSize:20,color:'#F3CB13',fontWeight:'bold',textAlign:'center'}}>9:16:42:01</Text>
          <View style={{height:30,marginTop:10,marginLeft:15,marginRight:15,width:windowSize.width-40,marginBottom:30}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <TouchableOpacity style={{height:30,width:100,backgroundColor:'blue'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Bid Now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </View>
    )
  }
  render() {
    return (
      <View style={{flex:1,height:windowSize.height,width:windowSize.width}}>
        <View style={{flex:1}}>
          <View style={{height:windowSize.height/3,width:windowSize.width}}>
            <View style={{flex:1}}>
              <View>
                <Swiper  height={windowSize.height/3} autoplay>
                  <View style={styles.slide1}>
                    <Image  source={require('./../../Images/slide2.jpg')}
                      style={{width: windowSize.width, height: windowSize.height/3,resizeMode:'stretch'}} />
                  </View>
                  <View style={styles.slide2}>
                    <Image  source={require('./../../Images/slide3.png')}
                      style={{width: windowSize.width, height: windowSize.height/3,resizeMode:'stretch'}} />
                  </View>
                  <View style={styles.slide3}>
                    <Image  source={require('./../../Images/slide1.png')}
                      style={{width: windowSize.width, height: windowSize.height/3,resizeMode:'stretch'}} />
                  </View>
                  <View style={styles.slide3}>
                    <Image  source={require('./../../Images/slide4.png')}
                      style={{width: windowSize.width, height: windowSize.height/3,resizeMode:'stretch'}} />
                  </View>
                </Swiper>
              </View>
            </View>
          </View>
          <View style={{height:windowSize.height-(windowSize.height/3),width:windowSize.width}}>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={this.category.bind(this)} style={{height:40,width:windowSize.width,backgroundColor:'#383838'}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{width:windowSize.width-(windowSize.width/4),height:40}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:18,color:'white'}}>Please select any category</Text>
                      </View>
                    </View>
                    <View style={{width:windowSize.width/4,height:40}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image style={{height:30,width:30}} source={require('./../../Images/downArrow.png')}/>
                      </View>
                    </View>
                  </View>
                
              </TouchableOpacity>
              <View style={{height:windowSize.height-((windowSize.height/3)+40),width:windowSize.width}}>
                <View style={{height:40,width:windowSize.width}}>
                  <View style={{flex:1,backgroundColor:'#ffb714'}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <Text style={{fontSize:20,color:'black'}}>LIVE MAIN ONLINE AUCTIONS</Text>
                    </View>
                  </View>
                </View>
                <View style={{height:windowSize.height-((windowSize.height/3)+80),width:windowSize.width}}>
                  <View style={{flex:1}}>
                  <ListView
                    ref='listView'
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}/>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {this.state.layer ? (
          <View style={{height:windowSize.height,width:windowSize.width,backgroundColor:'#383838',opacity:.95}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <View style={{height:windowSize.height-150,marginTop:20,marginBottom:80,width:windowSize.width-60,backgroundColor:'white'}}>
              </View>
            </View>
          </View>):(
            <View></View>
            )}
      </View>
    );
  }
}

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
  },

  slide2: {
    flex: 1,
  },

  slide3: {
    flex: 1,
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  image: {
    width:windowSize.width,
    flex: 1
  }
}

module.exports = Main;
