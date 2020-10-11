import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { 
StyleSheet,
ImageBackground,
Image,
TouchableHighlight,
Button,
SafeAreaView,
ActivityIndicator,
TouchableOpacity,
ScrollView,
Text, View , TextInput} from 'react-native';
import {AntDesign, FontAwesome} from '@expo/vector-icons'
import {styles }from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//intialisation

const Tab = createBottomTabNavigator();
const stack= createStackNavigator();
const Draw= createDrawerNavigator();

const theme={
  textColor:'chartreuse',
  backgroundColor:'black',
};
const url='http://interstellarcg.pythonanywhere.com/apis/auth/login';
const registerUrl='http://interstellarcg.pythonanywhere.com/apis/auth/register';
const Userdata= {
  'name':'Interstellar',
  'email':'interstellarcg@gmail.com',
  'password':'@interstellarcg'
  
  
}
function loading(){
  return(
    <View><Text>
    Loading.....
    
    </Text></View>
    
    );
}
const Auth= {
  username:'superoot',
  password:'superuser'
}
const placeholderColor =  'aqua'

export function LoginScreen({navigation}){
  const [Token, setToken]= React.useState();
  const [Usrname, setUsrname]= React.useState('');
  const [Password , setPassword]= React.useState('')
  const [authUser, setAuthUser]= React.useState('');
  const [showPassword, setShowPassword]= React.useState(true);
  const [errorText, setErrorText]= React.useState('');
  
  return(
    <ImageBackground
          source={require('./assets/Bible.jpg')}
         style={{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
          }}
          >
    <View style={styles.LoginContainer}>
  <Image
  style={styles.splashImg}
  source={require('./assets/splash.png')}
  />
  <Text style={styles.hugeText}> Login</Text>

    <TextInput
    onChangeText={text =>setUsrname(text)}
    value={Usrname}
    placeholder='Enter Username'
    style={styles.passInput}
    placeholderTextColor={placeholderColor}
    />
    <View
    >
    <TextInput
    secureTextEntry={showPassword}
    placeholder='Enter password'
    placeholderTextColor={placeholderColor}
    onChangeText={(text)=>{
      setPassword(text);
    }}
    style={styles.passInput}
    />
    <Text 
    onPress={
      ()=>{
      if (showPassword==true){
        setShowPassword(false);}
      
      else{
        setShowPassword(true);
      }}
    }>👁️</Text>
    </View>
    <View style={styles.flexButtons}>
      <TouchableOpacity>
    <Text
    style={styles.submitbtn}
    onPress={ async (value)=>{
    const sPass= Password;
    const sName=Usrname;
    const sAuth={
      "username":sName,
      "password":sPass
    }
       await axios.post(url,sAuth,{
         headers:{
           'content-type':'application/json'
         }
       }
      ).then((response) => {
          
          setToken(response.data.token)
          if (response.status==200){
            navigation.navigate('Home')
          }
    }).catch((e)=>{
      setErrorText('Please Enter Correct details')
    })
    }}
    >
   <AntDesign name="login" size={12} color="white" /> Login 
    </Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Text style={styles.submitbtn}
    onPress={()=>navigation.navigate('SignUp')}
    >
    <FontAwesome 
        name="sign-in" size={15} color={theme.textColor} />
    SignUp
    </Text>
    </TouchableOpacity>
     </View> 
     <Text
     style={styles.alertText}
     
     >{errorText}</Text>
     <View
     style={{
       borderBottomColor:'#6700ff',
       borderBottomWidth:1,
       height:20,
       width:'100%',
       paddingTop:100
       
     }}
     
     ></View>
  </View>
  </ImageBackground>
    );
}
const iconicButton=(props)=>{
  if (props.type== 'fontawesome'){
    <View>
    <FontAwesome
    
    name={props.iconName}
    size={props.iconSize}
    color={props.iconColor}
    />   
    </View>
  }
  return(
    <View>
    
    </View>
    
    )
}
export function SignUpScreen({navigation}){
  const [variantText, setVariantText]=React.useState('Show');  
const [Usrname, setUsrname] = React.useState('');
const [alertText, setAlertText] = React.useState('');
const [checkText, setCheckText] = React.useState('');
const [email, setEmail] = React.useState('');
const [Password, setPassword] = React.useState('')
const [showPassword, setShowPassword]= React.useState(true);
const [ConfirmPassword, setConfirmPassword]=React.useState('');
return (
   <ImageBackground
      source={require('./assets/Bible.jpg')}
     style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }}
      >
<View style={styles.LoginContainer}>
   
  <Image
  style={styles.splashImg}
  source={require('./assets/splash.png')}
  />
  <Text style={styles.hugeText}> Sign Up</Text>

    <TextInput
    onChangeText={text =>setUsrname(text)}
    value={Usrname}
    placeholder='Enter your name'
    style={styles.passInput}
    placeholderTextColor={placeholderColor}
    
    />
    <TextInput
        onChangeText={text =>setEmail(text)}
        value={email}
        placeholder='Enter your email'
        style={styles.passInput}
        placeholderTextColor={placeholderColor}
        />
    <TextInput
    secureTextEntry={showPassword}
    placeholder='Enter password'
    placeholderTextColor={placeholderColor}
    onChangeText={(text)=>{
      setPassword(text);
    }}
    style={styles.passInput}
    />
     <TextInput
        secureTextEntry={true}
        placeholder='Confirm  password'
        placeholderTextColor={placeholderColor}
        onChangeText={(text)=>{
          setConfirmPassword(text);
        }}
        style={styles.passInput}
        />
        <Text 
         onPress={
           ()=>{
           if (showPassword===true){
             setShowPassword(false);
             setVariantText('Hide');
           }
           else if(showPassword===false){
             setShowPassword(true);
             setVariantText('Show');
           }}
         }>{variantText} password </Text>
    <View style={styles.flexButtons}>
      <TouchableOpacity>
    <Text
    style={styles.submitbtn}
    onPress={(value)=>{
    if (Usrname == '' || Password == '' || ConfirmPassword == '' || email == ''){
      setAlertText( '*All fields must be entered');
    }
    else if (Password !==
      ConfirmPassword) {
      setCheckText('Passwords didnt match');
    }
    else if (Usrname !== '' && Password !== '' && ConfirmPassword !== '' && email !== '') {
      setAlertText('')
          axios.post(registerUrl, {
                 'username': Usrname,
                 'email': email,
                 'password': Password
               })
               .then((response) => {
                alert(response.data.user.token )
               })
               .catch((error) => {
                 alert('seems that username is taken ')
               });
      }
    }}
      >
    SignUp
    </Text>
    </TouchableOpacity>
    <TouchableOpacity>
    <Text 
    style={styles.submitbtn}
    onPress={()=>{
      navigation.navigate('Login');
    }}
    > Login</Text>
    </TouchableOpacity>
     </View> 
           <Text style={styles.alertText}>
      {alertText}   {checkText}
    </Text>
    </View>
  </ImageBackground>
  
);
}
