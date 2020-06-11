import React, { useEffect, useState, Fragment } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '9bd6a913e664c38cf72305fa0d228e90';

const App = () => {
  const [isLoading, setIseLoading] = useState(true);

  useEffect(() => {
    getLocation();
  }, [])

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=-${longitude}&appid=${API_KEY}`);
    console.log(data);
  }
  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords} = await Location.getCurrentPositionAsync();
      // setIseLoading(false);
      getWeather(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert('사용자 권한 에러', error);
    }
    
  }
  return (
    isLoading && <Loading/>
  );
}

export default App;

