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
import moment from 'moment';
var windowSize = Dimensions.get('window');
import Swiper from 'react-native-swiper'
import {
  Navigator
} from 'react-native-deprecated-custom-components';
import Detail from './Detail'

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
  /*displayTimer(duration) {
    var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        alert("time:"+hours + ":" + minutes + ":" + seconds + "." + milliseconds)
        return hours + ":" + minutes + ":" + seconds + "." + milliseconds
  }*/
 /* parseMillisecondsIntoReadableTime(milliseconds){
    var days = milliseconds / 86400000;
   // alert("days:"+days)
  //Get hours from milliseconds
  var hours = milliseconds / (1000*60*60);
  var absoluteHours = Math.floor(hours);
  var h = absoluteHours > 9 ? absoluteHours : '0' + absoluteHours;

  //Get remainder from hours and convert to minutes
  var minutes = (hours - absoluteHours) * 60;
  var absoluteMinutes = Math.floor(minutes);
  var m = absoluteMinutes > 9 ? absoluteMinutes : '0' +  absoluteMinutes;

  //Get remainder from minutes and convert to seconds
  var seconds = (minutes - absoluteMinutes) * 60;
  var absoluteSeconds = Math.floor(seconds);
  var s = absoluteSeconds > 9 ? absoluteSeconds : '0' + absoluteSeconds;

  //alert("time:"+h + ':' + m + ':' + s)
  return  Math.floor(days)+':'+h + ':' + m + ':' + s;
}*/
async getMovies(){
  fetch('https://goldtrader.cash/rest/dashboard.php')
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
  componentDidMount(){
    this.timer = setInterval(()=> this.getMovies(), 500)
     /*setInterval(function(){
      this.fetch()
        }, 1000)*/
     /*fetch('https://goldtrader.cash/rest/dashboard.php')
      .then((response) => response.json())
      .then((responseJson) => {
       // alert("responseJson"+JSON.stringify(responseJson))
        /*var d1 = new Date();
        var d2 = responseJson[0].enddate

        var d3 = new Date(d2-d1);
        alert("d3:"+d3);*/

        /*this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows(responseJson)
      })
      })
      .catch((error) => {
        console.error(error);
      });*/
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
    var d = new Date();
    var d1 = moment(d1).format("YYYY-MM-DD hh:mm:ss")
    const now = moment(d1);
    const exp = moment(rowData.enddate);
    const diffDuration = moment.duration(exp.diff(now));
   //setInterval(function(){ alert("Hello"); }, 1000)
    var time = diffDuration.days()+':'+diffDuration.hours()+':'+diffDuration.minutes()+':'+diffDuration.seconds()
     setInterval(function(){
     var time = diffDuration.days()+':'+diffDuration.hours()+':'+diffDuration.minutes()+':'+diffDuration.seconds()
     }, 1000)
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
                  style={{width:windowSize.width/2-20,height:windowSize.width/2-20,resizeMode:'stretch'}} />
              </View>
            </TouchableOpacity>
            <View style={{height:30,width:windowSize.width/2-20,backgroundColor:'#383838'}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:15,color:'orange',fontWeight:'bold'}}>${ rowData.product_cost}</Text>
              </View>
            </View>
          </View>
          <View style={{height:windowSize.width/2+10,marginRight:20,width:windowSize.width/2-20,backgroundColor:'white'}}>
            <View style={{height:windowSize.width/2-20,marginRight:20,width:windowSize.width/2-20,backgroundColor:'white'}}>
              <View style={{flex:1,alignItems:'center'}}>
                <Text style={{fontSize:15,marginTop:5,color:'black',fontWeight:'bold'}}>Current Bid</Text>
                <Text style={{fontSize:15,marginTop:5,color:'#F3CB13',fontWeight:'bold'}}>$ 300</Text>
                <Text style={{fontSize:15,marginTop:5,color:'black',fontWeight:'bold'}}>Highest Bidder</Text>
                <Text style={{fontSize:15,marginTop:5,color:'#F3CB13',fontWeight:'bold'}}>Admin</Text>
                <Text style={{fontSize:15,marginTop:5,color:'black',fontWeight:'bold'}}>Time Remaining</Text>
                <Text style={{fontSize:15,marginTop:5,color:'#F3CB13',fontWeight:'bold'}}>{time}</Text>
              </View>
            </View>
            <View style={{height:30,width:windowSize.width/2-20,backgroundColor:'#ffb714'}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity style={{height:30,width:windowSize.width/2-20,backgroundColor:'#ffb714'}}>
                  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Bid Now</Text>
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
                        <Text style={{fontSize:18,color:'white'}}>{this.state.category}</Text>
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
                    renderRow={this.renderRow.bind(this)}
                    automaticallyAdjustContentInsets={false}/>
                    <View style={{height:80}}></View>
                  </View>
                </View>
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
