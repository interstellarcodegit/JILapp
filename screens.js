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
const Tab = createBottomTabNavigator();
const stack= createStackNavigator();
const Draw= createDrawerNavigator();

const theme={
  textColor:'chartreuse',
  backgroundColor:'black',
  inputColor:'chartreuse'
  
};
var defaultColor= '#0083FF'
const url='http://127.0.0.1:9000/apis/Users/';
const Userdata= {
  'name':'Interstellar',
  'email':'interstellarcg@gmail.com',
  'password':'@interstellarcg'
  
  
}
function ScrollElement(){
  return(
    <View style={styles.flexColumn , styles.newsWrapper,
      {
        marginLeft:3,
      }
    }>
        <Image
        style={styles.newsImg}
        source={require('./assets/shalin.jpeg')}
        
        />
        <View style={styles.flexRow}>
        <Text style={styles.purpleText}>Winie Bett</Text>
        <TouchableOpacity>
        <Text style={styles.scrollText}>
        More
        </Text>
        
        </TouchableOpacity>
        </View>
        </View>
    
    )}
 const PlayView= styled.View`
 height:300px;
 background:blue;
 box-shadow:3px 5px 5px black;
 
 `;
 const PlayIcon= styled.View`
 height:100px;
 width:60px;
 
 `;
 function NavButton(props, {navigation}) {
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
export function PlayScreen() {
  const [webview , setWebview]= React.useState()
  return(
    <View>
    <PlayView>
        <WebView source={{ uri: 'https://s3.radio.co/s97f38db97/listen' }} style={{ marginTop: 20 }} />
    </PlayView>
     <LinearGradient
      colors={['#0b4aa3', '#0078fa', '#00bfb5']}
      style={{
      padding: 15,
      height:100,
      width:'100%',
      alignItems: 'center', 
      borderRadius: 1 }}>
      <PlayIcon
       
         onPress = {
           () => {
             webview.injectJavaScript(
               `document.getElementById("audio").play();`
             );
           }}
  
      >        
    <Entypo name="controller-play" size={70} color="cyan" />
    </PlayIcon>
    </LinearGradient>
    </View>
    )
}
const url1= 'http://localhost:9000/apis/updates/'
export function HomeScreen({ navigation }) {
  const [usrname, setUsrname]= React.useState('')
  const [error_text, setError_text]= React.useState('')
  const user='Mine';
  return (
    <SafeAreaView>
    <ScrollView
    style = {
        {
          backgroundColor: theme.backgroundColor }}
    >
    <View style={styles.container}>
   <LinearGradient
         colors={['#000034', '#000030', '#000']}
         style={{
         width:'100%',
         flex:1,
         }}> 
    <View style={styles.profileView
    }>
    <Text>Welcome {user}</Text>
    <Image
    style={styles.profileImg}
    source={require('./assets/splash.png')}
    />
    </View>
    <View style={styles.navBar}>
    <TextInput style={styles.passInput} secureTextEntry={true}
    caretHidden={false}
    />
      <Image
      style={styles.searchIcon}
      source={require('./assets/search.png')}
      />
    </View>
     <View style={styles.splashView}>
        
        <Image style={styles.topImg}
        source={require('./assets/cool.jpg')}/>
        </View>
    <View style={styles.newsView}>
    <Text style={styles.newsTopText}>Breaking News🔥</Text>
    <ScrollView
    style={styles.newsScroll}
    horizontal={true}
    >
    <View style={styles.flexColumn , styles.newsWrapper}>
    <Image
    style={styles.newsImg}
    source={require('./assets/shalin.jpeg')}
    />
    <View style={styles.flexRow}>
    <Text style={styles.purpleText}>Winie Bett</Text>
    <TouchableOpacity>
    <Text style={styles.scrollText}>
    More
    </Text>
    </TouchableOpacity>
    </View>
    </View>
    <ScrollElement/>
    <ScrollElement/>
    <ScrollElement/>
    </ScrollView>
    </View>
    <View
    style={{
      justifyContent:"space-around",
      flexDirection:'row',
    }}
    >
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
        name='Add updates'
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
        </LinearGradient>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}


export  function addNotes(props) {
  const [notesArray, setNotesArray]= React.useState([])
  const [showNotes, setShowNotes]= React.useState(true)
  const [showNotestxt, setShowNotestxt]= React.useState('Show')
  
  const [noOfNotes, setNoOfNotes]=React.useState();
  const [notes, setNotes]=React.useState('');
  const notelist=[];
  const intialNote = notelist.push(notes)
  
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000
    }).start();
  };
  
  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000
    }).start();
  };
  React.useRef(
    fadeIn()
    )
    return (
    
    <View
  
    >
    <SafeAreaView>
    <View
    style={{
      backgroundColor:'#2559ee',
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.91,
        shadowRadius: 5,
      
        elevation: 12,
    }}
    >
    
    <TextInput
    style={styles.shadowInput}
    multiline = { true }
    value= {notes}
    clearTextOnFocus={true}
    onChangeText={text => setNotes(text)}
    
    caretHidden = { false }
    autoCorrect = { true }
    placeholderTextColor = 'blue'
    style={styles.addNote}
    placeholder='Write your notes here'
    />
    <Text
    style={{
    fontSize:15,
    color:'green',
    }}
    onPress={
    
    async (value) => {
        const firstNote = JSON.stringify(intialNote);
        
        try {
          const note1 = await AsyncStorage.getItem('note1')
          if (note1 !== null) {
            var getNote = JSON.parse(note1)
            const initValue = getNote.length
            getNote.push(notes)
            setNoOfNotes(initValue)
            setNotesArray(getNote);
            alert(notesArray)
            var afterNote = JSON.stringify(getNote);
            try {
              await AsyncStorage.setItem('note1', afterNote)
            } catch (e) {
              alert(e);
            }
          }
          else {
            try {
              await AsyncStorage.setItem('note1', firstNote)
            } catch (e) {
              alert(e);
            }
          }
        } catch (e) {
          alert(e);
        }}
    }>+ Add</Text>
    <Text>notes: {noOfNotes}</Text>
    <Text onPress={
      async () => {
        try {
          const note1 = await AsyncStorage.getItem('note1')
          if (note1 !== null) {
            setNotesArray(JSON.parse(note1))
          }
        } catch (e) {
          alert(e);
        }
      }
    }>Update</Text>
    
        <Text 
    style={{
      fontSize:15,
      color:'chartreuse',
    }}  
    onPress={
      async()=>{
        try {
          const note1 = await AsyncStorage.getItem('note1')
          const intialArrayRefetch=JSON.parse(note1);
          setNotesArray(intialArrayRefetch);
           
        }
        catch (e) {
          alert(e)
        }
        
        if (showNotes==false){
        setShowNotes(true);
        setShowNotestxt("Show");
        setNotesArray([])
        fadeOut()
        }
        else{
          setShowNotes(false)
          setShowNotestxt('Hide')
          fadeIn()
          
        }
      }
    }
    >
    {showNotestxt}Notes
    </Text>
    <Text
    onPress={
      fadeIn
    }
    
    >start</Text>
    <Text
        onPress={
          fadeOut
        }
        
        >stop</Text>
    </View>
    <ScrollView>
  {
      notesArray.map((data)=>{
         return( 
         
         <Animated.View
         style={
           {
             opacity: fadeAnim,
           }
         }>
         <View
         style={{
           backgroundColor:'#0054ff',
           minHeight:50,
           borderBottomColor:'gray',
           marginTop:2,
           
         }}
         >
          <Text>{data}</Text>
          </View>
          </Animated.View>)
        })
   
  /* else{
     return(<Text
     onPress={()=>{
     
      setShowNotes(true)
       
     } 
     }
     style={
       {
         color:'chartreuse',
         height:40,
         width:40,
         backgroundColor:'green'
       }
     }
     >
     
     
     </Text>)
   }*/
  }
    </ScrollView>
    {/*
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.77,
      shadowRadius: 1.49,
    
      elevation: 12,
    
    */}
    <Text
    style={{
      shadowColor:'green',
      height:50,
      width:70,
      shadowOffset: {
          width: 0,
          height: 2,
      }
      
    }}
    >
    Hello shaddo
    </Text>
      </SafeAreaView>
    </View>
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
        }
        
        )
          
       sound.play() 
      }
    }
    
    >Play</Text>
    
    </View>
    </ScrollView>
    </View>
  );
}
