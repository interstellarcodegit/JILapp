import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as FileSystem from 'expo-file-system';
import {Audio} from 'expo-av'
import axios from 'axios';
import {Howl, Howler  } from 'howler'
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
//intialisation
//const [DarkMode, setDarkMode]= React.useState(false);
import {Ionicons, Entypo, AntDesign} from '@expo/vector-icons'
import { WebView } from "react-native-webview";
import {NavBar ,NavButton, ScrollElement, PlayView, PlayIcon} from "./components"
//import theme from "./components"
const Tab = createBottomTabNavigator();
const stack= createStackNavigator();
const Draw= createDrawerNavigator();
 var theme = {
  textColor: 'chartreuse',
  backgroundColor: 'rgba(0,0,0,0.6)',
  inputColor: 'chartreuse'

}
var defaultColor= 'rgba(0,0,0,0.5)'
const url='http://127.0.0.1:9000/apis/Users/';
const Userdata= {
  'name':'Interstellar',
  'email':'interstellarcg@gmail.com',
  'password':'@interstellarcg'
  
  
}
 
 export function PlayScreen() {
  const [webview , setWebview]= React.useState()
  return(
    <ImageBackground
          source={require('./assets/yellow.jpg')}
         style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
          }}
          >
    <View
    style={styles.LoginContainer}
    >
    <PlayView>
        <WebView source={{ uri: 'https://s3.radio.co/s97f38db97/listen' }} style={{ marginTop: 20 }} />
    </PlayView>
   
      <PlayIcon
       style={{
         elevation:1000
       }}
         onPress = {
           () => {
             webview.injectJavaScript(
               `document.getElementById("audio").play();`
             );
           }}
  
      >        
    <Entypo name="controller-play" size={70} color="cyan" />
    </PlayIcon>
  
    </View>
    </ImageBackground>
    )
}
const url1= 'http://localhost:9000/apis/updates/'
export function HomeScreen({ navigation }) {
  const [usrname, setUsrname]= React.useState('')
  const [error_text, setError_text]= React.useState('')
  const user='Mine';
  return (
    <ImageBackground
        source={require('./assets/nebula.jpg')}
       style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        }}
        >
      <ScrollView
      style = {
        {
          backgroundColor: theme.backgroundColor }}
    >
    <View
    style={
      {
        minHeight:500,
      }
    }
    >
   
    <View style={styles.profileView
    }>
    <Text
    style={
      {
        color:'white'
      }
    }
    >Welcome {user}</Text>
    <Image
    style={styles.profileImg}
    source={require('./assets/splash.png')}
    />
    </View>
    <NavBar/>
    
    <ScrollView
    style={{
      height:450,
    }}
    >
    <ScrollElement/>
    <ScrollElement/>
    <ScrollElement/>
    <ScrollElement/>
    
    </ScrollView>
    
    <View 
    style = {{
      flexDirection:'row',
      paddingTop:50,
      justifyContent:'space-between'
      }}>
       <TouchableOpacity>
       <NavButton
       color={theme.textColor}
       name='try'
       opacity={1}
       height={30}
       onPress={()=>navigation.navigate('Notes')}
       bgColor={defaultColor}
       radius={4}
       />
    </TouchableOpacity>
    <TouchableOpacity>
        <NavButton
        color={theme.textColor}
        
        opacity = { 1 }
        height = { 30 }
        width = { 100 }
        onPress = {
          () => navigation.navigate('Notes') }
        bgColor = {defaultColor}
        radius = { 4 }
        name='Notes'/>
        </TouchableOpacity>
        <TouchableOpacity>
        <NavButton
        onPress={
          (value) => {
          setUsrname('a')
          navigation.navigate('Updates')
            /*axios.get(url1).then((response) => {
              usersInfo = response.data
              usersInfo.map((names) => {
                if (usrname == names.name && Password == names.password) {
          
                  navigation.navigate('Updates');
                  setError_text('');
                }
                else {
                  setError_text('Please enter correct details')
                }
              })
            })*/
          }
        }
        color={theme.textColor}
        opacity = { 1 }
        height = { 30 }
        width = { 70 }
        bgColor ={ defaultColor}
        radius = { 4 }
        name='Updates'
        />
        </TouchableOpacity>
        <TouchableOpacity>
           <NavButton
           color={theme.textColor}
           opacity = { 1 }
           height = { 30 }
           width = { 70 }
           bgColor = {defaultColor}
           radius = { 4 }
            onPress={
             async ()=>{
             const playbackObject = await Audio.Sound.createAsync({ uri: 'https://s3.radio.co/s97f38db97/listen' }, { shouldPlay: true });
               }
            }
            name='Play'/>
        </TouchableOpacity>
        </View>
       </View> 
    </ScrollView>
    
    </ImageBackground>

  );
}


export function ViewImage(props){
   (
    <View>
    <ScrollView>
    <Image 
    source={require('./assets/trye.png')}
    />
    <Text>props.text </Text>
    </ScrollView>
    </View>
    );
}
export function Listen(props) {
  return (
    <View>
    <View>
    <Text
    style={
      styles.primaryText
    }
    >JESUS IS LORD RADIO</Text>
    <Image
    style={styles.profileImg}
    source={require('./assets/splash.png')}
    />
    </View>
    <ScrollView>
    <Image 
    source={require('./assets/trye.png')}
    />
    <View>
    <Text
    onPress={
      ()=>{
        var sound = new Howl(
        {
          src:['https://s3.radio.co/s97f38db97/listen']
        })
          
       sound.play() 
      }
    }
    
    >Play</Text>
    
    </View>
    </ScrollView>
    </View>
  );
}
