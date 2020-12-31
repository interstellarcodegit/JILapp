import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as FileSystem from "expo-file-system";
import { Audio, Video } from "expo-av";
import axios from "axios";
import { Howl, Howler } from "howler";
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
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components";
//import {LoginScreen, SignUpScreen} from './auth';
import { styles } from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

const theme = {
  textColor: "chartreuse",
  backgroundColor: "black",
};
const url = "http://127.0.0.1:9000/apis/auth/login";
const registerUrl = "http://127.0.0.1:9000/apis/auth/register";
const Userdata = {
  name: "Interstellar",
  email: "interstellarcg@gmail.com",
  password: "@interstellarcg",
};

const Auth = {
  username: "superoot",
  password: "superuser",
};
const placeholderColor = "aqua";
const url1 = "http://127.0.0.1:9000/apis/updates/";

export function addUpdate({ navigation }) {
  const [alertText, setAlertText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [otherdesc, setOtherDesc] = React.useState("");
  const [errortxt, setErrortxt] = React.useState("");
  return (
    <ImageBackground
      source={require("./assets/yellow.jpg")}
      style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      }}
    >
      <View style={styles.defView}>
        <SafeAreaView>
          <Text
            style={[
              styles.primeText,
              {
                marginBottom: 50,
              },
            ]}
          >
            Add Update
          </Text>
          <TextInput
            style={styles.passInput}
            placeholder="Enter Title"
            placeholderTextColor={placeholderColor}
            onChangeText={(text) => {
              setTitle(text);
            }}
          />
          <TextInput
            style={styles.passInput}
            placeholder="Enter Description"
            placeholderTextColor={placeholderColor}
            multiline={true}
            onChangeText={(text) => {
              setDescription(text);
            }}
          />
          <TextInput
            style={styles.passInput}
            placeholder="Enter Image Link(optional)"
            multiline={true}
            placeholderTextColor={placeholderColor}
            onChangeText={(text) => {
              setOtherDesc(text);
            }}
          />
          <TouchableHighlight>
            <Text
              style={styles.submitButton}
              onPress={(value) => {
                if (title == "" || description == "" || otherdesc == "") {
                  setAlertText("*All fields must be entered");
                } else if (
                  title !== "" &&
                  description !== "" &&
                  otherdesc !== ""
                ) {
                  setAlertText("");
                  axios
                    .get(url1, {
                      auth: Auth,
                    })
                    .then((response) => {
                      const updates = response.data;
                      updates.map((names) => {
                        if (title == names.title) {
                          setErrortxt("title exists");
                        } else {
                          axios
                            .post(url1, {
                              title: title,
                              description: description,
                              imageLink: otherdesc,
                            })
                            .then((response) => {
                              alert(response);
                            })
                            .catch((error) => {
                              alert("there seems to have been an error ");
                            });
                        }
                      });
                    });
                }
              }}
            >
              Submit Update
            </Text>
          </TouchableHighlight>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}
const TeachingTitle = "THE KINGLY DIET";
let MessageBody;
export function MessagesOfTHELORD({ navigation }) {
  const [alertText, setAlertText] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [otherdesc, setOtherDesc] = React.useState("");
  const [errortxt, setErrortxt] = React.useState("");
  return (
    <ImageBackground
      source={require("./assets/yellow.jpg")}
      style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      }}
    >
      <View style={styles.defView}>
        <SafeAreaView>
          <Text
            style={[
              styles.primeText,
              {
                marginBottom: 50,
              },
            ]}
          >
            Messages OF THE LORD
          </Text>
          <TextInput
            style={styles.searchTeaching}
            placeholder="Search Teaching"
            placeholderTextColor={placeholderColor}
            onChangeText={(text) => {}}
          />
          <Text style={styles.TeachingTitle}>{TeachingTitle}</Text>
          <Text style={styles.MessageBody}>{MessageBody}</Text>

          <Video
            source={{
              uri:
                "https://www.youtube.com/embed/-Zje1nX37Cc?list=PLvWfOQWblcQSt6qjKvfkNHtTpSuhhhCYX",
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: 300, height: 300 }}
          />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}
MessageBody =
  "The church is sitting on the verge of the eternity, the rapture. These are the days when it really counts to work hard to be able to prepare for that Glorious Day. Today I share with you what THE LORD did. HE lifted me up the the colour of the precious metals in Book of Revelation. Most of them was whitish.THE GLORY comes down. We don’t know what that will mean. It could be the end of the year meeting, new years Eve. It could be another meeting, in Peru, in Netherland. Ivory coast was cancelled because they were not ready, but that day will come again.The kingly diet of the Hebrew boys rejecting, because today’s church has mixed. ate about to be spit out. Those who belong to THE LORD.The holy church will not be so popular, but with the time. I like to bless THE Bless,Suzan Girza, Nigeria, many more, Botswana, Angola, Ivory Coast, US, just stay in there, because this is the most treasured day in the church. Just know that the ways of THE LORD will not be to popular today.Many other ARCHBISHOP. We are still waiting to for the restoration of ARCHBISHOP Maurico. Pastors who are organizing the meeting in the Jose Campos, including those in Palermo, South-Africa, all across the nations, Pastor Anita, in Oman, in Qatar also. They may be give an equalI will be very soon meeting to look at the mission to Singapore, Malaysia, Chile, dr. Ricardo, Finland, Cuba, Spain Madrid, Belgium Brussel, Brasil, France Paris, South-Africa, Australia, Brasil, Argentina, Intia, Portugal, and many other that I maybe I blessed those who are working in the vinyeard of THE LORDI saw the meeting at a river. The Bishops. Big crusade. You saw the big celebration there. This wonderfull lady, total blind opens at Sentralpark in Nairobi, These are the hallmarks.I encourage many nations, so you nations too may be visited.";
