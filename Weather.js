import React from 'react';
import Proptypes from 'prop-types';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ['#4da0b0', '#d39d38'],
    },
    Clear: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
    Clouds: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
    Thunderstorm: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
    Rain: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
    Snow: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
    Atomsphere: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
    Mist: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
    Dust: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
    },
}

const Weather = ({temp, condition}) => {
    console.log('condition', condition);
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle='light-content'/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>
                    {temp}
                </Text>
            </View>
            <View style={styles.halfContainer}>
            </View>
        </LinearGradient>
    )
}

Weather.propTypse = {
    temp: Proptypes.number.isRequired,
    condition: Proptypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        'Snow',
        'Athosphere',
        'Clear',
        'Clouds',
        'Dust',
        'Haze',
        'Mist',
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white'
    }
});
    
export default Weather;

