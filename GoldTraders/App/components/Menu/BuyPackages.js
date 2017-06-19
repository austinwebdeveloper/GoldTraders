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
var Array = [{
  "Name":"Six",
  "Price":"$ 600.00",
  "Bids":"1200",
},{
  "Name":"Fifth",
  "Price":"$ 500.00",
  "Bids":"1000",
},
{
  "Name":"Fourth",
  "Price":"$ 400.00",
  "Bids":"800",
},
{
  "Name":"Secondsecon",
  "Price":"$ 400.00",
  "Bids":"800",
},
]

export default class Main extends Component {
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
   fetch('https://goldtrader.cash/rest/buypackages.php')
        .then((response) => response.json())
        .then((responseJson) => {
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
  pay(){
    alert("pay")
  }
  renderRow(rowData,sectionID) {
    //alert("rowData:"+JSON.stringify(rowData))
    return(
      <View style={{flex:1}}>
        <View style={{height:50,width:windowSize.width}}>
          <View style={{flex:1,flexDirection:'row'}}>
            <View style={{width:windowSize.width/4,height:50}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#989F9F'}}>{rowData.package_name}</Text>
              </View>
            </View>
            <View style={{width:windowSize.width/4,height:50}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#989F9F'}}>{rowData.price}</Text>
              </View>
            </View>
            <View style={{width:windowSize.width/4,height:50}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#989F9F'}}>{rowData.number_of_bids}</Text>
              </View>
            </View>
            <View style={{width:windowSize.width/4,height:50}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:18,color:'#D9AE1F'}} onPress={this.pay.bind(this)}>Pay Now</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{height:1,backgroundColor:'#989F9F'}}></View>
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
        <View style={{flex:1,backgroundColor:'#383838'}}>
          <View style={{height:windowSize.height,width:windowSize.width}}>
            <View style={{height:50,width:windowSize.width}}>
              <View style={{flex:1,flexDirection:'row',backgroundColor:'#F28500'}}>
                <View style={{width:windowSize.width/4,height:50}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,color:'black'}}>Name</Text>
                  </View>
                </View>
                <View style={{width:windowSize.width/4,height:50}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,color:'black'}}>Price</Text>
                  </View>
                </View>
                <View style={{width:windowSize.width/4,height:50}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,color:'black'}}>Bids</Text>
                  </View>
                </View>
                <View style={{width:windowSize.width/4,height:50}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,color:'black'}}>Options</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{height:windowSize.height-50,width:windowSize.width}}>
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
