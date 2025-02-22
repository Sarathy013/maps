import React,{useState,useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet,Text, View,Dimensions, Button } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [mapRegion, setMapRegion] =useState({
  latitude:	13.067439,
  longitude:	80.237617,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.04221,
  });
  const userLocation = async()=>{
    let{status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
      setErrorMsg('permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.04221,
    });
    console.log(location.coords.latitude.location.coords.longitude);
    }
    
     useEffect(()=>{
      userLocation();
     },[]);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        region={mapRegion}
      >
      <Marker coordinate={mapRegion} title='Marker'/>
      </MapView>
      <Button title='Get Location' onPress={userLocation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

