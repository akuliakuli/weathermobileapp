import React, { useState , useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {WEATHER_API_KEY} from "@env"
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
import { useGetWeather } from "./hooks/useGetWeather";
import ErrorItem from "./src/components/ErrorItems";

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if(weather && weather.list){
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }
  return(
    <View style={styles.container}>
      {loading ? <ActivityIndicator size={"large"} color={"blue"}/> : <ErrorItem/>}
    </View>
  )

  
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center'
  }
})
export default App;
