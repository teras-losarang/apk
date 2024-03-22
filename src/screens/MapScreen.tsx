import React, { useEffect, useRef, useState } from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import MapboxGL from "@rnmapbox/maps";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from '../constants/Colors';
import { DefaultStyle } from '../constants/DefaultStyle';
import axios from 'axios';
import { API_PATH } from '../constants/Api';

MapboxGL.setAccessToken("pk.eyJ1IjoiaGFraW0yNDEwIiwiYSI6ImNscmVtcnFobDFtM3AyaW52bXJmcWNhM20ifQ.HiPTevE-ww2B1FaQ7iDKew");

const MapScreen = (navigation: any) => {
  const [coordinate, setCoordinate] = useState([112.5959133, -7.4315367])
  const [address, setAddress] = useState(null)
  const [placeName, setPlaceName] = useState(null)
  const [isManual, setIsManual] = useState(false)
  
  const handleSetCoordinate = async (event: any) => {
    let coord = event.geometry.coordinates.join(",");

    setIsManual(true)
    setCoordinate(event.geometry.coordinates)
    
    try {
      const {data} = await axios.get(API_PATH.GEOCODER_MAPS+coord+`.json?access_token=pk.eyJ1IjoiaGFraW0yNDEwIiwiYSI6ImNscmVtcnFobDFtM3AyaW52bXJmcWNhM20ifQ.HiPTevE-ww2B1FaQ7iDKew`)
      
      setAddress(data.features[0].properties.address)
      setPlaceName(data.features[0].place_name)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={{flex: 1}}>
      <View style={{ position: 'absolute', bottom: 0, zIndex: 9, backgroundColor: Colors.WHITE, width: '100%', paddingHorizontal: 20, paddingVertical: 15 }}>
          <Text style={{ color:Colors.BLACK, marginBottom: 10, fontWeight: '600', fontSize: 18 }}>Pilih Lokasi</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 20 }}>
            <MaterialIcons name="my-location" size={25} color={Colors.BLUE_PRIMARY} />
            <View style={{ gap: 5 }}>
              <Text style={{ color:Colors.BLACK, fontWeight: '600', fontSize: 14 }}>Jl. Lurung Tengah</Text>
              <Text style={{ color:Colors.BLACK, fontSize: 12 }}>Jl. Lurung Tengah, Losarang, Indramayu</Text>
            </View>
          </View>
          <TouchableOpacity style={[DefaultStyle.defaultBtnPrimary, {paddingVertical: 10, borderRadius: 50}]}>
            <Text style={{ color:Colors.WHITE, textAlign: 'center', fontWeight: '600' }}>Simpan Lokasi</Text>
          </TouchableOpacity>
      </View>

      <MapboxGL.MapView style={{ flex: 1 }} styleURL='mapbox://styles/hakim2410/cltilg4xq004h01ph4fv72qgv' zoomEnabled={true} rotateEnabled={true} onPress={handleSetCoordinate}>
        {!isManual ? (
          <MapboxGL.UserLocation visible={false} onUpdate={(location) => setCoordinate([location.coords.longitude, location.coords.latitude])} />
        ): (
          <></>
        )}
        <MapboxGL.Camera defaultSettings={{
          centerCoordinate: coordinate,
          zoomLevel: 17,
          animationMode: 'flyTo',
          animationDuration: 6000
        }} />
        <MapboxGL.PointAnnotation id='market' coordinate={coordinate} />
      </MapboxGL.MapView>
    </View>
  )
}

export default MapScreen