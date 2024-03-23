import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Colors } from '../constants/Colors'
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ActionSheet, { useScrollHandlers } from 'react-native-actions-sheet';
import MapboxGL from "@rnmapbox/maps";

const RouteScreen = ({ navigation }: any) => {
  useEffect(() => {
    actionDetailOrder.current?.show()
  }, []);

  const actionDetailOrder = useRef<any>(null);
  const scrollHandlers = useScrollHandlers<ScrollView>(
    'scrollview-1',
    actionDetailOrder,
  );

  return (
    <View style={[DefaultStyle.defaultContainer, { backgroundColor: Colors.GREY_THIRD }]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: -20, width: '100%', paddingHorizontal: 16, paddingVertical: 10, zIndex: 9, paddingTop: 70, paddingBottom: 15, marginTop: 0 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: Colors.WHITE, padding: 10, borderRadius: 50, elevation: 40 }}>
          <MaterialIcons name="arrow-back-ios" size={16} color={Colors.BLACK} style={{ paddingLeft: 5 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: Colors.WHITE, padding: 10, borderRadius: 50, elevation: 40 }}>
          <MaterialIcons name="near-me" size={20} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', bottom: 20, width: '100%', zIndex: 9 }}>
        <TouchableOpacity onPress={() => {
          navigation.navigate("DetailOrderScreen")
          // actionDetailOrder.current?.show()
        }} style={[DefaultStyle.defaultBtnPrimary, { marginHorizontal: 20, paddingHorizontal: 15, paddingVertical: 10, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
          <Text style={{ color: Colors.WHITE, fontSize: 14 }}>Detail Pesanan</Text>
          <Text style={{ color: Colors.WHITE, fontSize: 16, fontWeight: '600' }}>Rp 100.000</Text>
        </TouchableOpacity>
      </View>
      <ActionSheet ref={actionDetailOrder} gestureEnabled containerStyle={{ zIndex: 9 }}>
        <ScrollView style={{ padding: 20 }}>
          <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16 }}>Detail Pesanan</Text>
          <View style={[styles.divider]}></View>
          <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14, marginBottom: 10 }}>Kurir :</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', gap: 15 }}>
              <View>
                <Text style={{ color: Colors.WHITE, backgroundColor: Colors.BLUE_PRIMARY, padding: 10, borderRadius: 50 }}>GA</Text>
              </View>
              <View style={{ gap: 5 }}>
                <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16 }}>Asep Saepullah</Text>
                <Text style={{ color: Colors.BLACK, fontSize: 13 }}>089606265960</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <View>
                <TouchableOpacity style={{ backgroundColor: Colors.GREEN_PRIMARY, padding: 10, borderRadius: 50 }} onPress={() => {
                  navigation.navigate("CallScreen")
                }}>
                  <MaterialIcons name="call" size={16} color={Colors.WHITE} />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={{ backgroundColor: Colors.GREEN_PRIMARY, padding: 10, borderRadius: 50 }} onPress={() => {
                  navigation.navigate("ChatScreen")
                }}>
                  <MaterialIcons name="chat" size={16} color={Colors.WHITE} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[styles.divider]}></View>
          <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14, marginBottom: 10 }}>Alamat  :</Text>
          <View style={{ gap: 15 }}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <MaterialIcons name="restaurant" size={16} color={Colors.RED_PRIMARY} />
              <View>
                <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Lokasi Restoran</Text>
                <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14 }}>Cibereng, Terisi</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <MaterialIcons name="radio-button-checked" size={16} color={Colors.ORANGE} />
              <View>
                <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Lokasi Pembeli</Text>
                <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14 }}>Puntang, Losarang</Text>
              </View>
            </View>
          </View>
          <View style={[styles.divider]}></View>
          <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14, marginBottom: 10 }}>Pesanan  :</Text>
          {[0, 1, 2, 3].map(index => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Me Gacoan</Text>
              <Text style={{ color: Colors.BLACK, fontSize: 12 }}>{index + 1} x Rp 10.000</Text>
            </View>
          ))}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
            <Text style={{ color: Colors.BLACK, fontSize: 12, fontWeight: '600' }}>Total Pesanan</Text>
            <Text style={{ color: Colors.BLACK, fontSize: 12, fontWeight: '600' }}>Rp 100.000</Text>
          </View>
          <View style={[styles.divider]}></View>
          <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14, marginBottom: 10 }}>Metode Pembayaran  :</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: Colors.BLACK, fontSize: 12, fontWeight: '600' }}>ShopeePay</Text>
          </View>
          <View style={[styles.divider]}></View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={[DefaultStyle.defaultBtnOutlinePrimary, { borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }]}>
              <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 14 }}>Ajukan Pengembalian</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[DefaultStyle.defaultBtnPrimary, { borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }]} onPress={() => navigation.navigate('EvaluationScreen')}>
              <Text style={{ color: Colors.WHITE, fontSize: 14 }}>Kasih Penilaian</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ActionSheet>

      <MapboxGL.MapView style={{ flex: 1 }} zoomEnabled={true} rotateEnabled={true}>
        <MapboxGL.Camera defaultSettings={{
          centerCoordinate: [112.5959133, -7.4315367],
          zoomLevel: 10,
          animationMode: 'flyTo',
          animationDuration: 6000
        }} />
        <MapboxGL.PointAnnotation id='market' coordinate={[112.5959133, -7.4315367]} />
        <MapboxGL.PointAnnotation id='market' coordinate={[112.5959133, -7.6315367]} />
      </MapboxGL.MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: { backgroundColor: Colors.WHITE, marginTop: 10, paddingHorizontal: 20, paddingVertical: 10 },
  divider: {
    borderWidth: 1,
    height: 2,
    width: '100%',
    borderColor: Colors.GREY_THIRD,
    marginVertical: 10
  },
})

export default RouteScreen