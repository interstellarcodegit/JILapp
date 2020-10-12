
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
import {NavBar ,NavButton, ScrollElement, PlayView, PlayIcon, theme} from "./components"



export  function addNotes(props) {
  const [notesArray, setNotesArray]= React.useState([])
  const [showNotes, setShowNotes]= React.useState(true)
  const [showNotestxt, setShowNotestxt]= React.useState('Show')
  const [getNote,setGetNote]= React.useState([])
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
  
    return (
    <ImageBackground
        source={require('./assets/Bible.jpg')}
       style={{
          flex: 1,
          resizeMode: "cover",
          justifyContent: "center"
        }}
        >
    <View
    style={{
      backgroundColor:'rgba(0,0,0,0.5)',
      shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 3,
        },
        shadowOpacity: 1,
        shadowRadius: 50,
      
        elevation: 1200,
    }}
    >
    <TextInput
    style={{
      color:'white'
    }}
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
    <View 
    style={{
      flexDirection:'row',
    }}
    >
    <Text
    style={styles.stylishBtn}
    onPress={
    
    async (value) => {
        const firstNote = JSON.stringify(intialNote);
        
        try {
          const note1 = await AsyncStorage.getItem('note1');
          if (note1===null){
            
          }
          else if (note1 !== null) {
            setGetNote(JSON.parse(note1));
            const initValue = getNote.length
            if (notes !== '' && notes !== ""){
              getNote.push(notes)
              setNoOfNotes(initValue)
              setNotesArray(getNote);
              alert(notesArray)
              var afterNote = JSON.stringify(getNote);
              
            }
            else{
              alert('Note cant be empty');
            }
            try {
              await AsyncStorage.setItem('note1', notesArray)
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
    
    <Text
    style={styles.stylishBtn}
    onPress={
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
  style={styles.stylishBtn}
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
    {showNotestxt}
    </Text>
    </View>
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
           backgroundColor:'rgba(0,0,0,0.9)',
           minHeight:50,
           borderBottomColor:'gray',
           marginTop:2,
           
         }}
         >
          <Text
          style={
            styles.stylishTxt
          }
          >{data}</Text>
          </View>
          </Animated.View>)
        })
  }
    </ScrollView>
    </ImageBackground>
  );
}
