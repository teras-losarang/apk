import React, { useEffect, useRef, useState } from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { DefaultStyle, WINDOW_WIDTH } from '../constants/DefaultStyle'
import { Colors } from '../constants/Colors'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Carousel from 'react-native-reanimated-carousel';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }: any) => {
  const [columns, setColumns] = useState(3);
  const menus = [
    { id: 1, image: require('../assets/img/menu/food.png'), title: 'Makanan' },
    { id: 2, image: require('../assets/img/menu/drink.png'), title: 'Minuman' },
    { id: 3, image: require('../assets/img/menu/snack.png'), title: 'Jajanan' },
    { id: 4, image: require('../assets/img/menu/map.png'), title: 'Terdekat' },
    { id: 5, image: require('../assets/img/menu/favorite.png'), title: 'Terlaris' },
    { id: 6, image: require('../assets/img/menu/menu.png'), title: 'Lihat Semua' },
  ]

  const renderMenuItems = () => {
    const itemsPerRow = Math.ceil(menus.length / columns);
    const rows = [];
    for (let i = 0; i < itemsPerRow; i++) {
      const rowItems = menus.slice(i * columns, (i + 1) * columns);
      rows.push(
        <View key={i} style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginVertical: 10,
        }}>
          {rowItems.map((item) => (
            <TouchableOpacity key={item.id} style={[styles.menu]} onPress={() => navigation.navigate("StoreScreen", { title: item.title })}>
              <Image source={item.image} style={styles.menuImage} />
              <Text style={{ color: Colors.GREY, fontSize: 12, marginTop: 10 }}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return rows;
  };

  useEffect(() => {
    const screenWidth = WINDOW_WIDTH;
    const itemWidth = 100;
    const availableWidth = screenWidth - 20;

    const newColumns = Math.floor(availableWidth / itemWidth);
    setColumns(newColumns > 0 ? newColumns : 1);
  }, []);

  return (
    <GestureHandlerRootView style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={{ marginTop: 45, marginBottom: -50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
          <MaterialIcons name="location-pin" size={14} color={Colors.BLACK} />
          <Text style={{ color: Colors.BLACK, fontWeight: '500', fontSize: 13 }}>Losarang, Indramayu</Text>
        </View>
        <MaterialIcons name="notifications" size={16} color={Colors.BLACK} />
      </View>
      <View style={DefaultStyle.defaultHeader}>
        <View style={[DefaultStyle.defaultInputContainer, { borderColor: Colors.WHITE, backgroundColor: Colors.GREY_SECONDARY, flexDirection: 'row', alignItems: 'center' }]}>
          <MaterialIcons name="search" size={24} color={Colors.BLUE_PRIMARY} />
          <TextInput placeholder='Pencarian...' placeholderTextColor={Colors.GREY} style={[DefaultStyle.defaultInputContent, { flex: 1, marginLeft: 10 }]} />
        </View>
      </View>

      <ScrollView horizontal={false}>
        <Carousel
          loop
          width={WINDOW_WIDTH}
          height={WINDOW_WIDTH / 2.5}
          autoPlay
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={1000}
          renderItem={({ index }) => (
            <Image source={{ uri: 'https://loremflickr.com/cache/resized/8055_8425421325_b62fa9edff_n_315_165_nofilter.jpg' }} style={{ height: '100%', width: '100%' }} />
          )}
        />

        <View style={[DefaultStyle.defaultPaddingHorizontal, { marginTop: 20, flex: 1 }]}>
          <ScrollView contentContainerStyle={{ flexDirection: 'column' }}>
            {renderMenuItems()}
          </ScrollView>
        </View>
        <View style={styles.divider}></View>

        <View style={[DefaultStyle.defaultPaddingHorizontal, { marginTop: 10 }]}>
          <View style={[styles.headerContainer, { flex: 1, }]}>
            <Text style={styles.headerFontTitle}>Flash Sale</Text>
            <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.navigate("StoreScreen", { title: 'Flash Sale' })}>
              <Text style={styles.headerFontAll}>Lihat Semua</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color={Colors.GREY} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true}>
            {[0, 1, 2, 3, 4, 5, 6].map(number => (
              <TouchableOpacity style={styles.headerContent} key={number}>
                <Image source={{ uri: 'https://loremflickr.com/cache/resized/8055_8425421325_b62fa9edff_n_315_165_nofilter.jpg' }} style={{ width: 110, height: 110 }} />
                <Text style={[styles.headerContentTitle, { textAlign: 'center' }]}>Ayam Geprek</Text>
                <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 12 }}>Rp</Text>
                  <Text style={{ color: Colors.BLUE_PRIMARY, fontWeight: '600' }}>25.000</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.divider}></View>

        <View style={[DefaultStyle.defaultPaddingHorizontal, { marginTop: 10 }]}>
          <View style={[styles.headerContainer, { flex: 1, }]}>
            <Text style={styles.headerFontTitle}>Diskon Terus</Text>
            <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.navigate("StoreScreen", { title: 'Diskon Terus' })}>
              <Text style={styles.headerFontAll}>Lihat Semua</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color={Colors.GREY} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true}>
            {[0, 1, 2, 3, 4, 5, 6].map(number => (
              <TouchableOpacity style={styles.headerContent} key={number} onPress={() => navigation.navigate('StoreDetailScreen')}>
                <Image source={{ uri: 'https://loremflickr.com/cache/resized/8055_8425421325_b62fa9edff_n_315_165_nofilter.jpg' }} style={{ width: 110, height: 110 }} />
                <Text style={styles.headerContentTitle}>Me Gacoan Enak Banget Loh</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.divider}></View>

        <View style={[DefaultStyle.defaultPaddingHorizontal, { marginTop: 10 }]}>
          <View style={[styles.headerContainer, { flex: 1, }]}>
            <Text style={styles.headerFontTitle}>Terakhir Dipesan</Text>
            <TouchableOpacity style={styles.headerContainer} onPress={() => navigation.navigate("StoreScreen", { title: 'Terakhir Dipesan' })}>
              <Text style={styles.headerFontAll}>Lihat Semua</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color={Colors.GREY} />
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true}>
            {[0, 1, 2, 3, 4, 5, 6].map(number => (
              <TouchableOpacity style={styles.headerContent} key={number} onPress={() => navigation.navigate('StoreDetailScreen')}>
                <Image source={{ uri: 'https://loremflickr.com/cache/resized/8055_8425421325_b62fa9edff_n_315_165_nofilter.jpg' }} style={{ width: 110, height: 110 }} />
                <Text style={styles.headerContentTitle}>Me Gacoan Enak Banget Loh</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={DefaultStyle.defaultBottomHeight}></View>
      </ScrollView>
    </GestureHandlerRootView >
  )
}

const styles = StyleSheet.create({
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.GREY_THIRD,
    borderRadius: 20,
    width: 90,
    height: 90,
  },
  menuImage: { height: 40, width: 40 },
  divider: { backgroundColor: Colors.GREY_SECONDARY, width: '100%', height: 5, marginTop: 20 },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  headerFontTitle: { color: Colors.BLUE_PRIMARY, fontSize: 14, fontWeight: '700' },
  headerFontAll: { color: Colors.GREY, fontSize: 12, marginRight: 5 },
  headerContent: { gap: 5, marginTop: 10, paddingBottom: 5, maxWidth: 110, marginRight: 10 },
  headerContentTitle: { color: 'black', fontSize: 12, paddingHorizontal: 5, fontWeight: '500' },
})

export default HomeScreen