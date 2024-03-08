import React, { useEffect, useRef } from 'react'
import { Animated, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DefaultStyle, WINDOW_WIDTH } from '../constants/DefaultStyle'
import { Colors } from '../constants/Colors'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ActionSheet, { useScrollHandlers } from 'react-native-actions-sheet';

const StoreDetailScreen = ({ navigation, route }: any) => {
  const { params } = route

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
            <TouchableOpacity style={[{ gap: 5, marginBottom: 20, paddingBottom: 10, borderWidth: 1, borderColor: Colors.GREY_THIRD, borderRadius: 10 }]} key={item}>
              <Image source={{ uri: 'https://loremflickr.com/cache/resized/8055_8425421325_b62fa9edff_n_315_165_nofilter.jpg' }} style={{ width: WINDOW_WIDTH / 2.4, height: WINDOW_WIDTH / 3, borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
              <Text style={[{ color: 'black', fontSize: 12, paddingHorizontal: 5, fontWeight: '500' }, { textAlign: 'center' }]}>Ayam Geprek</Text>
              <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 12 }}>Rp</Text>
                <Text style={{ color: Colors.BLUE_PRIMARY, fontWeight: '600' }}>25.000</Text>
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

  const actionSheetRef = useRef<any>(null);
  const scrollHandlers = useScrollHandlers<ScrollView>(
    'scrollview-1',
    actionSheetRef,
  );

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
          <MaterialIcons name="arrow-back-ios" size={16} color={Colors.BLACK} />
          <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 20 }}>Me Gacoan</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="favorite" size={20} color={Colors.BLACK} />
        </TouchableOpacity>
      </Animated.View>
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
              <MaterialIcons name="arrow-forward-ios" size={14} color={Colors.BLACK} />
            </View>
            <View style={styles.divider}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <MaterialIcons name="location-on" size={14} color={Colors.RED_PRIMARY} />
                <Text style={{ color: Colors.BLACK, fontSize: 13 }}>Lorem ipsum dolor sit amet</Text>
              </View>
              <MaterialIcons name="arrow-forward-ios" size={14} color={Colors.BLACK} />
            </View>
            <View style={styles.divider}></View>
            <TouchableOpacity onPress={() => actionSheetRef.current?.show()} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
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

      <ActionSheet ref={actionSheetRef} gestureEnabled>
        <ScrollView {...scrollHandlers}>
          {
            listOperationalHour()
          }
        </ScrollView>
      </ActionSheet>
    </View>
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