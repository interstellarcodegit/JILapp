import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av'
import axios from 'axios';
import { Howl, Howler } from 'howler'
import {
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  Animated,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Text,
  View,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components'
//import {LoginScreen, SignUpScreen} from './auth';            
import {styles }from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';                                               
import {Ionicons, Entypo, AntDesign} from '@expo/vector-icons'

const theme = {
  textColor: 'chartreuse',
  backgroundColor: 'black',
};
const url = 'http://127.0.0.1:9000/apis/auth/login';
const registerUrl = 'http://127.0.0.1:9000/apis/auth/register';
const Userdata = {
  'name': 'Interstellar',
  'email': 'interstellarcg@gmail.com',
  'password': '@interstellarcg'


}


const Auth = {
  username: 'superoot',
  password: 'superuser'
}
const placeholderColor = 'aqua'
const url1 = 'http://127.0.0.1:9000/apis/updates/';

export function addUpdate({ navigation }) {
  const [alertText, setAlertText] = React.useState('')
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [otherdesc, setOtherDesc] = React.useState('')
  const [errortxt, setErrortxt] = React.useState('')
  return (
    <ImageBackground
            source={require('./assets/yellow.jpg')}
           style={{
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center"
            }}
            >
    <View style={styles.defView}>
    <SafeAreaView>
    <Text style={[
    styles.primeText,
    {
      marginBottom:50,
    }
    ]}>
    Add Update
    </Text>
    <TextInput
    style={styles.passInput}
    placeholder='Enter Title'
    placeholderTextColor={placeholderColor}
    onChangeText={(text)=>{
      setTitle(text)
    }}
    />
    <TextInput
    style={styles.passInput}
    placeholder='Enter Description'
    placeholderTextColor={placeholderColor}
    multiline={true}
    onChangeText = {
      (text) => {
        setDescription(text)
      }
    }
      />
   <TextInput
      style={styles.passInput}
      placeholder='Enter Image Link(optional)'
      multiline={true}
      placeholderTextColor={placeholderColor}
      onChangeText = {
        (text) => {
          setOtherDesc(text)
        }
      }
     />
     <TouchableHighlight>
    <Text
    style={styles.submitButton}
    onPress={
      (value) => {
        if (title == '' || description == '' || otherdesc == '') {
          setAlertText('*All fields must be entered');
        }
        else if (title !== '' && description !== '' && otherdesc !== ''){
          setAlertText('');
          axios.get(url1, {
            auth:Auth
          }).then((response) => {
           const updates = response.data;
            updates.map((names) => {
           if (title == names.title) {
                setErrortxt('title exists');
              }
            else {
                axios.post(url1, {
                    'title': title,
                    'description': description,
                    'imageLink': otherdesc
    
                  })
                  .then((response) => {
                    alert(response);
                    
                  })
                  .catch((error) => {
                    alert('there seems to have been an error ')
                  });
              }
            })
          })
          
        }
   }
    }
    
    >Submit Update</Text>
    </TouchableHighlight>
    </SafeAreaView>
    </View>
    </ImageBackground>
  )
}