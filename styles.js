import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  TextInput,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//intialisation
const newColor = " rgb(192, 124, 255)";
const inputColor = "rgb(219, 157, 255)";
const bgColor = "rgba(17, 1, 32,0.9)";
const DarkPurple = " rgba(8, 0, 17, 0.796);";
export const styles = StyleSheet.create({
  submitbtn: {
    width: 120,
    height: 30,
    justifyContent: "space-around",
    padding: "1%",
    paddingLeft: 30,
    borderRadius: 8,
    color: newColor,
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  stylishBtn: {
    height: 30,
    backgroundColor: "rgba(0,0,0,0.7)",
    color: "rgb(166, 71, 255)",
    borderRadius: 5,
    minWidth: 50,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  stylishTxt: {
    color: newColor,
    paddingLeft: 2,
  },
  defView: {
    backgroundColor: DarkPurple,
    flex: 1,
  },
  addNote: {
    borderBottomWidth: 2,
    borderBottomColor: "aqua",
  },
  newsImg: {
    height: 150,
    width: 150,
    marginLeft: 15,
    borderRadius: 20,
  },
  purpleText: {
    color: "white",
  },
  flexColumn: {
    flexDirection: "column",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollText: {
    color: "aqua",
  },
  primeText: {
    color: "rgb(166, 71, 255)",
    fontSize: 24,
  },
  MessageBody: {
    color: "rgb(197, 253, 255)",
    fontSize: 15,
  },
  TeachingTitle: {
    color: "rgb(57, 248, 255)",
    fontSize: 24,
    borderBottomColor: "rgb(57, 248, 255)",
    borderBottomWidth: 2,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  submitButton: {
    borderRadius: 6,
    width: 120,
    height: 30,
    justifyContent: "center",
    padding: "1%",
    paddingLeft: 8,
    borderRadius: 8,
    color: "rgb(166, 71, 255)",
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  shadowInput: {
    elevation: 1000,
    color: "rgb(166, 71, 255)",
  },
  newsWrapper: {},
  newsTopText: {
    fontSize: 15,
    color: "#ffff00",
    borderBottomColor: "aqua",
    borderBottomWidth: 1,
    width: 300,
    alignContent: "center",
    justifyContent: "center",
  },
  newsView: {
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  newsScroll: {
    backgroundColor: "rgba(0,0,0,.2)",
    alignContent: "center",
  },
  splashImg: {
    height: 64,
    width: 64,
  },

  alertText: {
    color: "red",
  },
  profileView: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  profileImg: {
    height: 24,
    width: 24,
  },
  LoginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bgColor,
  },
  updateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: DarkPurple,
  },
  navBar: {
    height: 30,
    width: "100%",
    flexDirection: "row",
  },
  searchIcon: {
    height: 30,
    width: 30,
  },
  splashView: {
    maxHeight: 100,
  },
  topImg: {
    height: 130,
  },
  passInput: {
    backgroundColor: "rgb(17, 1, 32)",
    borderBottomColor: newColor,
    borderBottomWidth: 1,
    width: 250,
    paddingTop: 15,

    marginBottom: 20,
    color: inputColor,
  },
  searchTeaching: {
    backgroundColor: "rgb(17, 1, 32)",

    width: 250,

    marginBottom: 20,
    color: inputColor,
  },
  flexButtons: {
    width: 250,
    justifyContent: "space-around",
    flexDirection: "row",
  },
  hugeText: {
    fontSize: 24,
    color: "aqua",
    marginBottom: 20,
  },
  bgimg: {
    flex: 1,
    width: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "#81EEFF",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
