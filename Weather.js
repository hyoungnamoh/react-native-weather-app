import React from 'react';
import Proptypes from 'prop-types';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ['#4da0b0', '#d39d38'],
        title: 'Haze',
        subtitle: "Just don't go outside",
    },
    Clear: {
        iconName: 'weather-hail',
        gradient: ['#FF7300', '#FEF253'],
    },
    Clouds: {
        iconName: 'weather-hail',
        gradient: ['#D7DECC', '#304352'],
    },
    Thunderstorm: {
        iconName: 'weather-hail',
        gradient: ['#373B44', '#4286F4'],
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
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subTitle}>
                {weatherOptions[condition].subtitle}
                </Text>
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
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
    },
    subTitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start',
    }
});
    
export default Weather;

