import React from "react";
import { View, Text} from "react-native"
import {Feather} from "@expo/vector-icons"


const IconText = (props) => {
    const {iconName, iconColor , bodyText, bodyTextStyles} = props
    return(
        <View>
            <Feather name={iconName} size={50} color={iconColor}/>
            <Text style={[bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}


export default IconText