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
    height:windowSize.height/3,
    width:windowSize.width
  },
  body:{
    height:windowSize.height-(windowSize.height/3),
    width:windowSize.width,
  },
  headerImage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  subBody:{
    flex:1
  },
  signInButton:{
    justifyContent:'center',
    marginTop:40,
    marginBottom:20
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
  },
  textInput:{
    height:50,
    fontSize:18,
    color:'white',
    marginLeft:30,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#cbd0d8',
    marginRight:30,
    padding:6,
    backgroundColor:'#000000'
  },
  footer:{
    marginTop:10,
    marginLeft:40,
    marginBottom:80
  },
  footerText:{
    fontSize:20,
    color:'white'
  },
  footerUnderLineText:{
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    color:'#ffb714'
  }
});

module.exports=styles;