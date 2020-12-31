import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as FileSystem from 'expo-file-system';
import {Audio} from 'expo-av'
import axios from 'axios';
import { 
StyleSheet,
ImageBackground,
Image,
Button,
Animated,
SafeAreaView,
ActivityIndicator,
TouchableOpacity,
ScrollView,
Text, View , TextInput} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import styled from 'styled-components/native'
//import {LoginScreen, SignUpScreen} from './auth';
import {styles }from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, Entypo,Foundation, AntDesign, FontAwesome} from '@expo/vector-icons'
import { WebView } from "react-native-webview";
const Tab = createBottomTabNavigator();
const stack= createStackNavigator();
const Draw= createDrawerNavigator();

export var theme={
  textColor:'rgb(219, 37, 255)',
  backgroundColor:'rgba(0,0,0,0.8)',
  inputColor:'rgb(219, 37, 255)'
  
}
export function ScrollElement(props){
  const [image, setImage]= React.useState(props.imgSrc);
  var  imgsource = 'https://pbs.twimg.com/media/EqQefotUwAEKpV9?format=jpg&name=medium';
  return(
    <View style={
      {
        flexDirection:'column',
        marginTop:3,
        backgroundColor:'rgba(0,0,0,0.7)',
        
      }
    }>
    <View style={{
      flexDirection:'row',
    }}>
        <Image
        style={styles.newsImg}
        source={{uri:props.imgSrc}}
        />
      <Text style={{
        marginTop: 25,
        padding:5,
        color:'rgb(221, 168, 231)'
      }}>Baby Shalin was brought to a three-day Christian Revival Meeting held in Kenya's
       Kakamega County from 31st August to 2nd September 2012, presided over by The Man of God, 
       Prophet Dr Owuor. She was in a pitiful state.  
       #TheSweetStoryOfJesus </Text>
      </View>
        <View style={{
          flexDirection:'row',
          paddingLeft:10,
          justifyContent:'space-around'
          
        }}>
        <View style={styles.stylishBtn}><Text style={styles.stylishTxt}>Winnie Bett</Text></View>
        <TouchableOpacity>
        <View style={styles.stylishBtn}>
        <Text style={styles.stylishTxt}>More</Text>
        </View>
        
        </TouchableOpacity>
        </View>
        </View>
    
    )}
export  const PlayView= styled.View`
 height:300px;
 background:blue;
 box-shadow:3px 5px 5px black;
 
 `;
export const PlayIcon= styled.View`
 height:100px;
 width:60px;
 `;
// function SelectIcon(props){
//   if (props.iconType=='Entypo'){
//     return(
//       <Entypo name={props.iconname} size={props.height-5} color="rgb(201, 153, 255)" />
//     )
//   }
//   if (props.iconType=='Foundation'){
//     return(
//       <Foundation name={props.iconname} size={props.height-5} color="rgb(201, 153, 255)" />
//     )
//   }
//   if (props.iconType=='FontAwesome'){
//     return(
//       <FontAwesome name={props.iconname} size={props.height-5} color="rgb(201, 153, 255)" />
//     )
//   }
// }
export  function NavButton(props, {navigation}) {
   return(
     <View
     onPress={props.onPress}
     style={
     { 
      flexDirection:'row',
       width:65,
       opacity:props.opacity,
       alignItems:'center',
       alignContent:'center',
       borderRadius:props.radius,
       paddingLeft:3,

     }
     }
     >

    {/* <SelectIcon iconType={props.iconType} iconname={props.iconname}/> */}
   
     <Text
     style={{
       
       fontSize:props.height/2,
       color:props.color,
       height:props.height-2,
       marginTop:7
       
     }}
     onPress={props.onPress}
     >
     {props.name}
     </Text>
     </View>
     
     
     );
    }




export function NavBar (){
	return(

	<View style={styles.navBar}>
    <TextInput style={styles.passInput} secureTextEntry={true}
    caretHidden={false}
    />
      <Image
      style={styles.searchIcon}
      source={require('./assets/search.png')}
      />
    </View>);
}
