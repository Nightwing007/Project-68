import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from "react-navigation-tabs";
import FaceBook from "./Screen/fb";
import Instagram from "./Screen/in";

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}


const TabNavigator = createBottomTabNavigator({ 
fb: { screen: FaceBook }, 
in: { screen: Instagram } 
}); 

const AppContainer = createAppContainer(TabNavigator);