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
import styled from 'styled-components'
//import {LoginScreen, SignUpScreen} from './auth';
import {styles }from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, Entypo, AntDesign} from '@expo/vector-icons'
import { WebView } from "react-native-webview";
const Tab = createBottomTabNavigator();
const stack= createStackNavigator();
const Draw= createDrawerNavigator();

export var theme={
  textColor:'chartreuse',
  backgroundColor:'rgba(0,0,0,0.8)',
  inputColor:'chartreuse'
  
}
export function ScrollElement(){
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
        source={require('./assets/shalin.jpeg')}
        />
      <Text style={{
        color:'white'
      }}>A quick and simplified answer is that Lorem Ipsum refers to text that the DTP (Desktop Publishing) industry use as replacement text when the real text is not available. ... Lorem Ipsum is dummy text which has no meaning however looks very similar to real text.</Text>
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
export  function NavButton(props, {navigation}) {
   return(
     <View
     onPress={props.onPress}
     style={
     { 
       backgroundColor:props.bgColor,
       height:props.height-1,
       minWidth:60,
       opacity:props.opacity,
       alignItems:'center',
       borderRadius:props.radius,
       paddingLeft:3,       
     }
     }
     >
     <Text
     style={{
       color:props.color,
       height:props.height-2
       
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
