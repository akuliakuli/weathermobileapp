import { View, Text, StyleSheet } from 'react-native'
import {Feather} from '@expo/vector-icons'
import React from 'react'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'


const ListItem = (props) => {
    const {dt_txt, min, max, condition} = props

    const {weather, item, temp} = styles
    return(
        <View style={item}>
            <Feather name={weatherType[condition].icon} size={50} color={"white"}/>
            <View style={styles.dateTextWrapper}>
                <Text style={weather}>{moment(dt_txt).format("dddd")}</Text>
                <Text style={weather}>{moment(dt_txt).format("h:mm:ss a")}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:5,
        backgroundColor:'indianred'
    },
    temp:{
        color:'white',
        fontSize:20
    },
    weather:{
        color:'white',
        fontSize:15
    },
    image:{
        flex:1
    },
    dateTextWrapper:{
        flexDirection:'column',

    }
})

export default ListItem