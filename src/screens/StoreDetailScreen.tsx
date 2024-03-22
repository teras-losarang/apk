import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, PermissionsAndroid, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DefaultStyle, WINDOW_HEIGHT, WINDOW_WIDTH } from '../constants/DefaultStyle'
import { Colors } from '../constants/Colors'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ActionSheet, { useScrollHandlers } from 'react-native-actions-sheet';
import MapboxGL from "@rnmapbox/maps";

MapboxGL.setAccessToken("pk.eyJ1IjoiaGFraW0yNDEwIiwiYSI6ImNscmVtcnFobDFtM3AyaW52bXJmcWNhM20ifQ.HiPTevE-ww2B1FaQ7iDKew");

const StoreDetailScreen = ({ navigation, route }: any) => {
  const { params } = route

  const [coordinate, setCoordinate] = useState([96.7493993, 4.695135])
  const [number, setNumber] = useState(0)

  const AnimatedHeaderValue = new Animated.Value(0)
  const HeaderMaxHeight = 110
  const HeaderMinHeight = 10

  const AnimateOpacityHeader = AnimatedHeaderValue.interpolate({
    inputRange: [0, HeaderMaxHeight - HeaderMinHeight],
    outputRange: [.8, 1],
    extrapolate: 'extend'
  })

  const AnimateOpacityImage = AnimatedHeaderValue.interpolate({
    inputRange: [0, HeaderMaxHeight - HeaderMinHeight],
    outputRange: [1, 0],
    extrapolate: 'extend'
  })

  const AnimateOpacityHeaderShow = AnimatedHeaderValue.interpolate({
    inputRange: [0, HeaderMaxHeight - HeaderMinHeight],
    outputRange: [0, 1],
    extrapolate: 'extend'
  })

  const handleScroll = (event: any) => {
    Animated.event(
      [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
      { useNativeDriver: false }
    )(event);
  }

  const listProduct = () => {
    let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const itemsPerRow = Math.ceil(array.length / 2);
    const rows = [];
    for (let i = 0; i < itemsPerRow; i++) {
      const rowItems = array.slice(i * 2, (i + 1) * 2);
      rows.push(
        <View key={i} style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: WINDOW_WIDTH
        }}>
          {rowItems.map((item) => (
            <TouchableOpacity onPress={() => actionProductRef.current?.show()} style={[{ gap: 5, marginBottom: 20, paddingBottom: 10, borderWidth: 1, borderColor: Colors.GREY_THIRD, borderRadius: 10 }]} key={item}>
              <Image source={require('../assets/img/menu/food.png')} style={{ width: number < 1 ? WINDOW_WIDTH / 2.4 : '100%', height: WINDOW_WIDTH / 3, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
              <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 10 }}>
                <View style={{ gap: 5 }}>
                  <Text style={[{ color: 'black', fontSize: 12, fontWeight: '500' }]}>Ayam Geprek</Text>
                  <View style={{ flexDirection: 'row', gap: 5 }}>
                    <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 10 }}>Rp</Text>
                    <Text style={{ color: Colors.BLUE_PRIMARY, fontWeight: '600', fontSize: 12 }}>25.000</Text>
                  </View>
                </View>
                <View>
                  {number < 1 ? (
                    <TouchableOpacity style={{ backgroundColor: Colors.BLUE_PRIMARY, padding: 3, borderRadius: 50 }} onPress={() => setNumber(number + 1)}>
                      <MaterialIcons name="add" size={14} color={Colors.WHITE} />
                    </TouchableOpacity>
                  ) : (
                    <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: Colors.BLUE_PRIMARY, borderRadius: 10 }}>
                      <TouchableOpacity style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => setNumber(number - 1)}>
                        <MaterialIcons name="remove" size={14} color={Colors.BLUE_PRIMARY} />
                      </TouchableOpacity>
                      <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 12 }}>{number}</Text>
                      </View>
                      <TouchableOpacity style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }} onPress={() => setNumber(number + 1)}>
                        <MaterialIcons name="add" size={14} color={Colors.BLUE_PRIMARY} />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      );
    }

    return rows
  }

  const listOperationalHour = () => {
    const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
    return (
      <View style={[DefaultStyle.defaultPaddingHorizontal, { paddingBottom: 20 }]}>
        <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16 }}>Jam Operational</Text>
        <View style={{ marginTop: 20 }}>
          {days.map((day, index) => (
            <View key={index}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: Colors.BLACK }}>{day}</Text>
                <Text style={{ color: Colors.BLACK }}>08:00 - 18.00</Text>
              </View>
              <View style={[styles.divider, { marginVertical: 15 }]}></View>
            </View>
          ))}
        </View>
      </View>
    )
  }

  const actionLocationRef = useRef<any>(null);
  const actionProductRef = useRef<any>(null);
  const actionOperationalHourRef = useRef<any>(null);
  const scrollHandlers = useScrollHandlers<ScrollView>(
    'scrollview-1',
    actionOperationalHourRef,
  );

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestLocationPermission()
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  return (
    <View style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Animated.Image source={require('../assets/img/menu/food.png')} style={{ width: '100%', resizeMode: 'contain', opacity: AnimateOpacityImage, height: 250, position: 'absolute' }} />
      <Animated.View style={[DefaultStyle.defaultHeader, { justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: -20, width: '100%', paddingHorizontal: 16, paddingVertical: 10, zIndex: 9, opacity: AnimateOpacityImage }]}>
        <TouchableOpacity style={{ backgroundColor: Colors.GREY, justifyContent: 'center', alignItems: 'center', paddingLeft: 9, paddingVertical: 4, borderRadius: 50, opacity: AnimateOpacityHeader }} onPress={() => navigation.goBack()} >
          <MaterialIcons name="arrow-back-ios" size={20} color={Colors.WHITE} style={{ textAlign: 'center' }} />
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: Colors.GREY, justifyContent: 'center', alignItems: 'center', padding: 6, borderRadius: 50, opacity: AnimateOpacityHeader }} onPress={() => navigation.goBack()}>
          <MaterialIcons name="favorite" size={18} color={Colors.WHITE} />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[DefaultStyle.defaultHeader, { justifyContent: 'space-between', alignItems: 'center', position: 'absolute', top: -20, width: '100%', paddingHorizontal: 16, paddingVertical: 10, zIndex: 9, opacity: AnimateOpacityHeaderShow, backgroundColor: Colors.WHITE, paddingTop: 70, paddingBottom: 15, marginTop: 0 }]}>
        <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={16} color={Colors.BLACK} />
          </TouchableOpacity>
          <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 20 }}>Me Gacoan</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="favorite" size={20} color={Colors.BLACK} />
        </TouchableOpacity>
      </Animated.View>
      {number > 0 ? (
        <TouchableOpacity onPress={() => navigation.navigate('OrderScreen')} style={{ position: 'absolute', bottom: 20, zIndex: 10, paddingHorizontal: 20, width: '100%' }}>
          <View style={[DefaultStyle.defaultBtnPrimary, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 50, paddingHorizontal: 20 }]}>
            <Text style={{ color: Colors.WHITE }}>{number} Pilihan</Text>
            <MaterialIcons name="shopping-cart" size={30} color={Colors.WHITE} />
          </View>
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <ScrollView scrollEventThrottle={16} onScroll={handleScroll} contentContainerStyle={{ position: 'absolute', top: 200, width: "100%", }}>
        <View style={DefaultStyle.defaultPaddingHorizontal}>
          <View style={[DefaultStyle.defaultNeumorphicBox, { gap: 15, padding: 20, width: '100%' }]}>
            <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 20 }}>Me Gacoan</Text>
            <View style={styles.divider}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <MaterialIcons name="star" size={14} color={Colors.ORANGE} />
                <Text style={{ color: Colors.BLACK, fontSize: 13 }}>4.8 (99+ Penilaian)</Text>
              </View>
            </View>
            <View style={styles.divider}></View>
            <TouchableOpacity onPress={() => actionLocationRef.current?.show()} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <MaterialIcons name="location-on" size={14} color={Colors.RED_PRIMARY} />
                <Text style={{ color: Colors.BLACK, fontSize: 13 }}>Lorem ipsum dolor sit amet</Text>
              </View>
              <MaterialIcons name="arrow-forward-ios" size={14} color={Colors.BLACK} />
            </TouchableOpacity>
            <View style={styles.divider}></View>
            <TouchableOpacity onPress={() => actionOperationalHourRef.current?.show()} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <MaterialIcons name="schedule" size={14} color={Colors.BLUE_PRIMARY} />
                <Text style={{ color: Colors.BLACK, fontSize: 13 }}>Jam Operational</Text>
              </View>
              <MaterialIcons name="arrow-forward-ios" size={14} color={Colors.BLACK} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16 }}>Deskripsi</Text>
            <Text style={{ color: Colors.BLACK, fontSize: 12, lineHeight: 18, marginTop: 10, textAlign: 'justify' }}>Sure, I can help you with that. In React Native, zIndex is used to specify the order of elements that overlap. Here's an example of how you can use it</Text>
          </View>
          <View style={[styles.divider, { marginVertical: 20 }]}></View>
          {listProduct()}
        </View>
      </ScrollView>

      <ActionSheet ref={actionOperationalHourRef} gestureEnabled>
        <ScrollView {...scrollHandlers}>
          {
            listOperationalHour()
          }
        </ScrollView>
      </ActionSheet>
      <ActionSheet ref={actionLocationRef}>
        <View style={{ paddingTop: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16, paddingHorizontal: 20 }}>Jam Operational</Text>
            <TouchableOpacity onPress={() => actionLocationRef.current?.setModalVisible(false)}>
              <Text style={{ color: Colors.RED_PRIMARY, fontSize: 13, fontWeight: '600', paddingHorizontal: 20 }}>Tutup</Text>
            </TouchableOpacity>
          </View>
          <View style={{
            backgroundColor: Colors.WHITE,
            width: '100%',
            height: '100%',
            marginTop: 20
          }}>
            <MapboxGL.MapView style={{ flex: 1 }} styleURL='mapbox://styles/hakim2410/cltilg4xq004h01ph4fv72qgv' zoomEnabled={true} rotateEnabled={true}>
              <MapboxGL.UserLocation visible={false} onUpdate={(location) => setCoordinate([location.coords.longitude, location.coords.latitude])} />
              <MapboxGL.Camera defaultSettings={{
                centerCoordinate: coordinate,
                zoomLevel: 17,
                animationMode: 'flyTo',
                animationDuration: 6000
              }} />
              <MapboxGL.PointAnnotation id='market' coordinate={coordinate} />
            </MapboxGL.MapView>
          </View>
        </View>
      </ActionSheet>
      <ActionSheet ref={actionProductRef} gestureEnabled>
        <View style={{ padding: 20 }}>
          <Image source={require('../assets/img/menu/food.png')}
            style={{ width: '100%', height: WINDOW_HEIGHT / 3, resizeMode: 'contain' }} />
          <Text style={{
            color: Colors.BLACK,
            paddingTop: 20,
            fontWeight: '600',
            fontSize: 20
          }}>Me Iblis</Text>
          <Text style={{
            color: Colors.BLUE_PRIMARY,
            paddingTop: 10,
            fontWeight: '600',
            fontSize: 14
          }}>Rp 15.000</Text>
          <TouchableOpacity onPress={() => {
            setNumber(number + 1)
            actionProductRef.current?.setModalVisible(false)
          }} style={[
            DefaultStyle.defaultBtnPrimary, {
              marginTop: 10,
              paddingVertical: 10,
              borderRadius: 10
            }
          ]}>
            <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 16, color: Colors.WHITE }}>Tambah ke Keranjang</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View >
  )
}

const styles = StyleSheet.create({
  divider: { height: 2, width: '100%', backgroundColor: Colors.GREY_THIRD },
  card: { flexDirection: 'row', gap: 20, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  cardContent: { justifyContent: 'space-between', flexDirection: 'row', gap: 20 },
  cardImage: { height: 50, width: 50 },
  cardTitle: { color: Colors.BLACK, fontSize: 16, fontWeight: '500' },
})

export default StoreDetailScreen