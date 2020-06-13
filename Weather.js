import React from 'react';
import Proptypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';


const Weather = ({temp}) => {
    return (
        <View style={styles.container}>
            <Text>
                {temp}
            </Text>
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
    }
});
    
export default Weather;

