import React from 'react-native';
var {
  StyleSheet
} = React;
import Dimensions from 'Dimensions';
var windowSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    height:windowSize.height,
    width:windowSize.width
  },
  header:{
    height:windowSize.height/2,
    width:windowSize.width
  },
  body:{
    height:windowSize.height-(windowSize.height/2),
    width:windowSize.width,
  },
  headerImage:{
    flex:1,
   // justifyContent:'center',
   marginTop:windowSize.height/4,
    alignItems:'center'
  },
  subBody:{
    flex:1
  },
  signInButton:{
    justifyContent:'center',
    marginTop:30
  },
  button:{
    width:windowSize.width-50,
    marginLeft:25,
    marginRight:25,
    height:60,
    backgroundColor:'#ffb714',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    color:'white',
    fontWeight:'bold'
  }
});

module.exports=styles;
