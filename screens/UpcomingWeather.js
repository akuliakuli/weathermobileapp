import { View, Text, StyleSheet, FlatList, StatusBar,ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import ListItem from '../src/components/ListItem'




const UpcomingWeather = ({weatherData}) => {
    const renderItem = ({item}) => {
        return(
            <ListItem 
                condition={item.weather[0].main}
                dt_txt={item.dt_txt}
                min={item.main.temp_min}
                max={item.main.temp_max}
            />
        )
    }

    const {container, image} = styles
  return (
    <SafeAreaView style={container}>
        <ImageBackground 
            source={require("../assets/clouds.jpg")} 
            style={image}
        >
        <FlatList 
            data={weatherData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
        </ImageBackground> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'navyblue',
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    },
    image:{
        flex:1
    }
})

export default UpcomingWeather