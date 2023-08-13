import React, { useState } from "react";
import {View, Text , StyleSheet, Pressable,FlatList} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import {Feather} from '@expo/vector-icons'
import RowText from "../src/components/RowText";
import { weatherType } from "../src/utilities/weatherType";


const CurrentWeather = ({weatherData}) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLow,
    highLowContainer,
    bodyWrapper,
    description,
    message
  } = styles
  const { main : {temp, feels_like, temp_max, temp_min }, weather } = weatherData 
  
  const weatherCondition = weather[0].main
  
  return(
    <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor }]}>
        <View style={container}>
          <Feather name ={weatherType[weatherCondition].icon} size={100} color={'white'}/>
          <Text style={tempStyles}>{temp}</Text>
          <Text style={feels}>{`Feels like ${feels_like}Ü`}</Text>
          <RowText 
            messageOne={`High : ${temp_max}`} 
            messageTwo={`Low : ${temp_min}`}
            messageOneStyles={highLow}
            containerStyles={highLowContainer}
            messageTwoStyles={highLow}
          />
        </View>
        <RowText 
          messageOne={weather[0].description}
          messageTwo={weatherType[weatherCondition].message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
    </SafeAreaView>
 
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  wrapper: {
    backgroundColor:"yellowgreen",
    flex: 1
  },
  tempStyles:{
    color : 'black',
    fontSize: 48
  },
  feels:{
    fontSize:30,
    color:'black'
  },
  highLow:{
    color:'black',
    fontSize:20
  },
  highLowContainer:{
    flexDirection:'row'
  },
  bodyWrapper:{
    alignItems:'center',
    justifyContent:'flex-end',
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})

export default CurrentWeather