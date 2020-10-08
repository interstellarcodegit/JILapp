import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { 
StyleSheet,
ImageBackground,
Image,
ActivityIndicator,
TouchableOpacity,
ScrollView,
Text, View , TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//intialisation
const bgColor='rgba(0,0,0,0.5)';
export   const styles = StyleSheet.create({
submitbtn:{
width:120,
height:30,
	justifyContent:'space-around',
	padding:'1%',
	paddingLeft:30,
	borderRadius:8,
	color:'chartreuse',
	marginTop:10,
	backgroundColor:'rgba(0,0,0,0.5)',
},
	stylishBtn:{
          height:30,
          backgroundColor:'rgba(0,0,0,0.7)',
          color:'chartreuse',
          borderRadius:5,
	  minWidth:50,
          marginLeft:10,
	  justifyContent:'center',
	  alignItems:'center',
	
	},
	stylishTxt:{
	color:'chartreuse',
	paddingLeft:2,
	},
 defView:{
	 backgroundColor:'rgba(0,0,0,0.7)',
	 flex:1,
	},
 addNote:{
  borderBottomWidth:2,
  borderBottomColor:'aqua',
},
 newsImg:{
  height:150,
  width:150,
  marginLeft:15,
  borderRadius:20,

},
 purpleText:{
  color:'white',
},
 flexColumn:{
  flexDirection:'column',
},
 flexRow:{
  flexDirection:'row',
  justifyContent:'space-between',
},
 scrollText:{
  color:'aqua',
  

},
  primeText:{
    color:'chartreuse',
    fontSize:24,
  },
  submitButton:{
	  borderRadius:6,
	  width:120,                          height:30,                                                      justifyContent:'center',                                        padding:'1%',                                                   paddingLeft:8,                                                  borderRadius:8,
	  color:'chartreuse',
	  marginTop:10,
  	  backgroundColor:'rgba(0,0,0,0.5)',
  },
 shadowInput:{
  shadowColor: "#000",
 shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
},
 newsWrapper:{
},
 newsTopText:{
  fontSize:15,
  color:'#ffff00',
  borderBottomColor:'aqua',
  borderBottomWidth:1,
  width:300,
  alignContent:'center',
  justifyContent:'center',
},
 newsView:{
  backgroundColor:'rgba(0,0,0,0.2)',
  justifyContent:'center',
  alignItems:'center',
  
},
 newsScroll:{
  backgroundColor:'rgba(0,0,0,.2)',
  alignContent:'center',
},
 splashImg:{
  height:64,
  width:64,

},
  
  alertText:{
  color:'red',
},
  profileView:{
   justifyContent:'space-between',
   flexDirection:'row',
},
  profileImg:{
   height:24,
   width:24,
   
},
  LoginContainer:{
	 flex:1,
	 alignItems:'center',
	 justifyContent:'center',
	 backgroundColor:bgColor,


  },
 navBar:{
  height:30,
  width:'100%',
  flexDirection:'row',
 
},
searchIcon:{
  height:30,
  width:30,
},
splashView:{
  
 maxHeight:100,
 
},
  topImg:{
  height:130,
  
},
  passInput:{
	 backgroundColor:'transparent',
         borderBottomColor:'chartreuse',
 	 borderBottomWidth:1,
 	 width: 250,
	 paddingTop:15,

 	 marginBottom:20,
	 color:'#afbaff',
  },
 flexButtons:{
  width:250,
  justifyContent:'space-around',
  flexDirection:'row',
},
 hugeText:{
  fontSize:24,
  color:'chartreuse',
  marginBottom:20,

},
  bgimg:{
    flex:1,
    width:'100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#81EEFF',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

