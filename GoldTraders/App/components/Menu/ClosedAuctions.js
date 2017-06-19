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
  ScrollView,
  ActivityIndicator
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');
import Swiper from 'react-native-swiper'
import {
  Navigator
} from 'react-native-deprecated-custom-components';
import Detail from './Detail'

export default class closedAuctions extends Component {
  constructor(props) {
    super(props)
    Text.defaultProps.allowFontScaling=false;
    this.state = {
      layer:false,
      isLoading: true,
      dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      category:'Please select any category'

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
 fetch('https://goldtrader.cash/rest/closed.php')
      .then((response) => response.json())
      .then((responseJson) => {
        //alert("responseJson"+JSON.stringify(responseJson))
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
      layer:true,
    })
  }
  detail(){
    //alert('detail')
    this.props.navigator.push({
      component:Detail
    })
  }
  renderRow(rowData,sectionID) {
    //alert("rowData:"+JSON.stringify(rowData))
    return(
      <View style={{flex:1,padding:5}}>
        <View style={{height:25,width:windowSize.width-40,marginLeft:20,marginRight:20,backgroundColor:'#383838'}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{rowData.product_name.toUpperCase()}</Text>
          </View>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          <View style={{height:windowSize.width/2+10,marginLeft:20,width:windowSize.width/2-20}}>
            <TouchableOpacity onPress={this.detail.bind(this)} style={{width:windowSize.width/2-20,height:windowSize.width/2-20}}>
              <View style={{flex:1}}>
                <Image source={{uri: 'https://goldtrader.cash/public/uploaded_files/products/thumb5/'+rowData.product_image}}
                  style={{width:windowSize.width/2-20,height:windowSize.width/2+10,resizeMode:'stretch'}}>
                  {rowData.highestbidder == null ? (
                  <View>
                  </View>):(<View style={{height:50,width:windowSize.width/2-60,marginTop:windowSize.width/4+5,backgroundColor:'red',marginLeft:20,marginRight:20}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>SOLD OUT</Text>
                    </View>
                    </View>)}
                </Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{height:windowSize.width/2+10,marginRight:20,width:windowSize.width/2-20,backgroundColor:'white'}}>
            <View style={{height:windowSize.width/2-20,marginRight:20,width:windowSize.width/2-20,backgroundColor:'white'}}>
              <View style={{flex:1,alignItems:'center'}}>
                <Text style={{fontSize:15,marginTop:5,color:'black',fontWeight:'bold'}}>Current Bid</Text>
                <Text style={{fontSize:15,marginTop:5,color:'#F3CB13',fontWeight:'bold'}}>$ {rowData.current_bid}</Text>
                <Text style={{fontSize:15,marginTop:5,color:'black',fontWeight:'bold'}}>Gold Bonus</Text>
                <Text style={{fontSize:15,marginTop:5,color:'#F3CB13',fontWeight:'bold'}}>$ 300</Text>
                <Text style={{fontSize:15,marginTop:5,color:'black',fontWeight:'bold'}}>Highest Bidder:</Text>
                {rowData.highestbidder == null ? (
                  <Text style={{fontSize:15,marginTop:5,color:'#F3CB13',fontWeight:'bold'}}>No Bids yet</Text>
                  ):(
                  <Text style={{fontSize:15,marginTop:5,color:'#F3CB13',fontWeight:'bold'}}>{rowData.highestbidder}</Text>
                  )}
                <Text style={{fontSize:15,marginTop:5,color:'#FD0000',fontWeight:'bold'}}>Auction Closed</Text>
              </View>
            </View>
            <View style={{height:30,width:windowSize.width/2-20,backgroundColor:'#ffb714'}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{height:30,width:windowSize.width/2-20,backgroundColor:'#ffb714'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                   {rowData.highestbidder == null ? (
                    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Unsold</Text>
                    ):(
                    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>SOLD</Text>
                    )}
                    
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
  cancel(){
    this.setState({
      layer:false
    })
  }
  select(value){
    this.setState({
      layer:false,
      category:value
    })
  }
  render() {
    return (
      <View style={{flex:1,height:windowSize.height,width:windowSize.width}}>
        <View style={{flex:1}}>
          <View style={{height:windowSize.height,width:windowSize.width}}>
            <View style={{height:40,width:windowSize.width}}>
              <View style={{flex:1,backgroundColor:'#ffb714'}}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:20,color:'black'}}>MAIN CLOSED AUCTIONS</Text>
                </View>
              </View>
            </View>
            <View style={{height:windowSize.height-40,width:windowSize.width}}>
              <View style={{flex:1}}>
              <ListView
                ref='listView'
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                automaticallyAdjustContentInsets={false}/>
                <View style={{height:80}}></View>
              </View>
            </View>
          </View>
        </View>
        {this.state.layer ? (
          <View style={{height:windowSize.height,width:windowSize.width,backgroundColor:'#383838',opacity:.95}}>
            <View style={{flex:1,alignItems:'center'}}>
              <View style={{height:windowSize.height-120,marginTop:20,marginBottom:80,width:windowSize.width-60,backgroundColor:'white'}}>
                <View style={{flex:1}}>
                  <ScrollView ref='scrollView' automaticallyAdjustContentInsets={false}>
                    <TouchableOpacity onPress={this.select.bind(this,'Please select any category')} style={{height:25,marginTop:5,width:windowSize.width-60,backgroundColor:'white'}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{font:18,color:'black',fontWeight:'bold'}}>Please select any category</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'blue',opacity:.95}}></View>
                    <TouchableOpacity onPress={this.select.bind(this,'gold')} style={{height:25,marginTop:5,width:windowSize.width-60,backgroundColor:'white'}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{font:18,color:'black'}}>gold</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'blue',opacity:.95}}></View>
                    <TouchableOpacity onPress={this.select.bind(this,'silver')} style={{height:25,marginTop:5,width:windowSize.width-60,backgroundColor:'white'}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{font:18,color:'black'}}>silver</Text>
                      </View>
                    </TouchableOpacity>
                    <View style={{height:1,backgroundColor:'blue',opacity:.95}}></View>
                  </ScrollView>
                </View>
                <TouchableOpacity onPress={this.cancel.bind(this)} style={{height:35,width:windowSize.width-60,backgroundColor:'blue'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20,color:'white'}}>Cancel</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>):(
            <View></View>
            )}
      </View>
    );
  }
}

module.exports = closedAuctions;
