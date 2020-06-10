import React, { useEffect, useState, Fragment } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';

const App = () => {
  const [isLoading, setIseLoading] = useState(true);

  useEffect(() => {
    getLocation();
  }, [])

  const getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {coords} = await Location.getCurrentPositionAsync();
      setIseLoading(false);
      console.log(coords.latitude, coords.longitude);
    } catch (error) {
      Alert.alert('사용자 권한 에러', error);
    }
    
  }
  return (
    isLoading && <Loading/>
  );
}

export default App;

