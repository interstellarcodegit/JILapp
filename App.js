import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Audio } from 'expo-av';

import { StyleSheet,
ImageBackground,
Image
,ActivityIndicator,
TouchableOpacity, Text,Button,
View , TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  { addNotes,PlayScreen, HomeScreen} from './screens';
import {LoginScreen, addUpdate, SignUpScreen} from './auth'
import {styles} from './styles';
import {Ionicons, Entypo} from '@expo/vector-icons'
//variables

const Tab = createBottomTabNavigator();
const stack= createStackNavigator();
const Draw= createDrawerNavigator();
var headerbgColor= '#0c1e52';

//views
function DrawView(){
  return (
    
    <Draw.Navigator
    
    >
    <Draw.Screen name="Feeds" component={ViewScreen} /> 
    <Draw.Screen name = "Messages"
    component={ HomeScreen }
    />
    </Draw.Navigator>
    
    
    );
}
function Feeder() {
  return (
    <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Home') {
                  iconName = 'home'
                } else if (route.name === 'Listen') {
                  iconName ='radio';
                }
    
                // You can return any component that you like here!
                return <Entypo name={iconName} size={size} color={color} />;
    },
    })
    }
    tabBarOptions = {
        {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }
      } >
      <Tab.Screen name="Home" component={HomeScreen} /> 
      <Tab.Screen name = "Listen"
    component = {PlayScreen }
    /> 
    </Tab.Navigator>
  );
}
function ViewScreen({navigation}) {
  return (
    <View>
    <Text>Play screen</Text>
    <Button title='play'  />
    </View>


  );
}

export default function App({navigation}) {
  return (
   <NavigationContainer>
   <stack.Navigator
   
   >
  
   <stack.Screen
   options = {
     {
       title: 'Login',
       headerStyle: {
         backgroundColor:headerbgColor,
       },
       headerTintColor: 'aqua',
       headerTitleStyle: {
   
       },
     }
   }   name='Login' component={LoginScreen}/>
   <stack.Screen
   options = {
     {
       title: 'Sign Up',
       headerStyle: {
         backgroundColor: headerbgColor,
       },
       headerTintColor: 'aqua',
       headerTitleStyle: {
   
       },
     }
   }
   name='SignUp' component={SignUpScreen}/>


<stack.Screen 
options = {
  {
    title: 'Home',
    headerStyle: {
      backgroundColor: headerbgColor,
    },
    headerTintColor: 'aqua',
    headerTitleStyle: {

    },
  }
}
name='Home' component={Feeder}/>
    <stack.Screen 
    options = {
      {
        title: 'Feed',
        headerStyle: {
          backgroundColor: headerbgColor,
        },
        headerTintColor: 'aqua',
        headerTitleStyle: {
        },
      }
    }
    name='Notes' component={addNotes}/>
    <stack.Screen
    options = {
      {
        title: 'updates',
        headerStyle: {
          backgroundColor: headerbgColor,
        },
        headerTintColor: 'aqua',
        headerTitleStyle: {

        },
      }
    }

    name='Updates' component={addUpdate}/>
    <stack.Screen name='Feed' component={Feeder}/>
      <stack.Screen name='View' component={ViewScreen}/>
   </stack.Navigator>
   </NavigationContainer>
  );
}



