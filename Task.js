import React from "react";
import {View,Text,StyleSheet, TouchableOpacity} from 'react-native';

const Task = (props) => {
    return (
        <View style ={styles.item}>
            <View style={styles.left_item}>
              <View style={styles.square}></View> 
              <Text style={styles.item_text}>{props.text}</Text> 
            </View>
            <View style={styles.circular}></View>
        </View>
    )
} 
const styles=StyleSheet.create({
    item:{
        backgroundColor:'#4CA771',
        padding: 15,
        borderRadius: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom: 20,

    },
    left_item:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap: 'wrap',

    },
    square:{
        width: 25,
        height: 26,
        backgroundColor:'#013237',
        opacity:1.0,
        borderRadius: 5,
        marginRight: 15,
    },
    item_text:{
        maxHeight: '80%'
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: '#345EA8',
        borderWidth: 2,
        borderRadius: 5,
    },


});
export default Task;