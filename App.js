import React, { useEffect, useState, Fragment } from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '9bd6a913e664c38cf72305fa0d228e90';

const App = () => {
  const [isLoading, setIseLoading] = useState(true);
  const [temp, setTemp] = useState('');


  useEffect(() => {
    getLocation();
  }, [])

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);  
    setIseLoading(false);
    setTemp(data.main.temp);
  }
  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords} = await Location.getCurrentPositionAsync();
      getWeather(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert('사용자 권한 에러', error);
    }
  }
  return (
    isLoading ? <Loading/> : <Weather temp={Math.round(temp)}/>
  );
}

export default App;

