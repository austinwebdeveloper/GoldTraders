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
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

export default class Detail extends Component {
  constructor(props){
    super(props);
  }
  back(){
    this.props.navigator.pop()
  }
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{height:windowSize.height,width:windowSize.width,backgroundColor:'white'}}>
          <View style={{height:20,width:windowSize.width,backgroundColor:'#ffb714'}}></View>
          <View style={{height:44,width:windowSize.width}}>
            <View style={{flex:1,flexDirection:'row',height:44,backgroundColor:'#ffb714'}}>
              <View style={{flex:.2,justifyContent:'center'}}>
                <TouchableOpacity onPress={this.back.bind(this)}>
                  <Image source={require('./../../Images/i1.png')}
                     style={{width:20,height:20,marginLeft:17}}/>
                </TouchableOpacity>
              </View>
              <View style={{flex:0.65,marginRight:windowSize.width/30,justifyContent:'center'}}>
                <Text allowFontScaling={false}     style={{color:'black',fontSize:20,textAlign:'center'}}>
                  PRODUCT DETAIL
                </Text>
              </View>
              <View style={{flex:.15,justifyContent:'center'}}>
              </View>
            </View>
          </View>
          <View style={{height:windowSize.height-64,width:windowSize.width}}>
            <View style={{flex:1}}>
              <ScrollView ref='scrollView' automaticallyAdjustContentInsets={false}>
                <View style={{flex:1,height:windowSize.height/3,width:windowSize.width}}>
                  <Image source={{uri: 'https://goldtrader.cash/public/uploaded_files/products/thumb5/5934fc54ca4154'}}
                  style={{width:windowSize.width-50,height:windowSize.height/3,resizeMode:'stretch',marginLeft:25,marginRight:25,borderWidth:2}} />
                </View>
                <View style={{height:40,width:windowSize.width}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:40,width:windowSize.width-(windowSize.width/3)}}>
                      <View style={{flex:1,justifyContent:'center',marginLeft:40}}>
                        <Text style={{fontSize:20,color:'black'}}>Price</Text>
                      </View>
                    </View>
                    <View style={{height:40,width:windowSize.width/3}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>$ 250</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{height:40,width:windowSize.width}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:40,width:windowSize.width-(windowSize.width/3)}}>
                      <View style={{flex:1,justifyContent:'center',marginLeft:40}}>
                        <Text style={{fontSize:20,color:'black'}}>Gold Bonus</Text>
                      </View>
                    </View>
                    <View style={{height:40,width:windowSize.width/3}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>$ 250</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{height:40,width:windowSize.width}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:40,width:windowSize.width-(windowSize.width/3)}}>
                      <View style={{flex:1,justifyContent:'center',marginLeft:40}}>
                        <Text style={{fontSize:20,color:'black'}}>highest Bidder:</Text>
                      </View>
                    </View>
                    <View style={{height:40,width:windowSize.width/3}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>shiri</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{height:40,marginLeft:25,marginRight:25,width:windowSize.width-50,backgroundColor:'#ffb714'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20,color:'black'}}>BID NOW</Text>
                  </View>
                </View>
                <View style={{height:40,width:windowSize.width}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:40,width:windowSize.width-(windowSize.width/3)}}>
                      <View style={{flex:1,justifyContent:'center',marginLeft:40}}>
                        <Text style={{fontSize:20,color:'black'}}>Save over</Text>
                      </View>
                    </View>
                    <View style={{height:40,width:windowSize.width/3}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>$ 220</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{height:40,width:windowSize.width}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:40,width:windowSize.width-(windowSize.width/3)}}>
                      <View style={{flex:1,justifyContent:'center',marginLeft:40}}>
                        <Text style={{fontSize:20,color:'black'}}>Price Increment by</Text>
                      </View>
                    </View>
                    <View style={{height:40,width:windowSize.width/3}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>$ 0.01</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{height:40,width:windowSize.width}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:40,width:windowSize.width-(windowSize.width/3)}}>
                      <View style={{flex:1,justifyContent:'center',marginLeft:40}}>
                        <Text style={{fontSize:20,color:'black'}}>Retail price</Text>
                      </View>
                    </View>
                    <View style={{height:40,width:windowSize.width/3}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>$ 300.00</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{height:40,width:windowSize.width}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:40,width:windowSize.width-(windowSize.width/3)}}>
                      <View style={{flex:1,justifyContent:'center',marginLeft:40}}>
                        <Text style={{fontSize:20,color:'black'}}>Price Paid</Text>
                      </View>
                    </View>
                    <View style={{height:40,width:windowSize.width/3}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>$ 29.42</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{height:40,width:windowSize.width}}>
                  <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{height:40,width:windowSize.width-(windowSize.width/3)}}>
                      <View style={{flex:1,justifyContent:'center',marginLeft:40}}>
                        <Text style={{fontSize:20,color:'black'}}>Credits</Text>
                      </View>
                    </View>
                    <View style={{height:40,width:windowSize.width/3}}>
                      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>1</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{height:30,width:windowSize.width}}>
                  <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{fontSize:18,marginLeft:25,color:'#ffb714'}}>Product Description</Text>
                  </View>
                </View>
                <View style={{flex:1,marginLeft:25,marginRight:25,marginTop:5}}>
                  <Text style={{fontSize:18,color:'black'}}>Sample product description here will
                  be displayed</Text>
                </View>
                <View style={{height:30,width:windowSize.width}}>
                  <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{fontSize:18,marginLeft:25,color:'#ffb714'}}>Shipping Details</Text>
                  </View>
                </View>
                <View style={{flex:1,marginLeft:25,marginRight:25,marginTop:5}}>
                  <Text style={{fontSize:18,color:'black'}}>Product shipping details here 
                  will be displayed</Text>
                </View>
                <View style={{height:30,width:windowSize.width}}>
                  <View style={{flex:1,justifyContent:'center'}}>
                    <Text style={{fontSize:18,marginLeft:25,color:'#ffb714'}}>Shipping Details</Text>
                  </View>
                </View>
                <View style={{flex:1,marginLeft:25,marginRight:25,marginTop:5}}>
                  <Text style={{fontSize:18,color:'black'}}>Product price details here will be
                   displayed</Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

module.exports = Detail;
