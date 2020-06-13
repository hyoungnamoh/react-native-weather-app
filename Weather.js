import React from 'react';
import Proptypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Weather = ({temp}) => {
    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Text style={styles.temp}>
                    <MaterialCommunityIcons name="weather-lightning-rainy" size={96} color="black" />
                    {temp}
                </Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </View>
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
    }
});
    
export default Weather;

