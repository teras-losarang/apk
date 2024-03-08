import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DefaultStyle } from '../constants/DefaultStyle'
import { Colors } from '../constants/Colors'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const WhitelistScreen = (navigation: any) => {
  return (
    <View style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'center' }]}>
        <Text style={DefaultStyle.defaultHeaderTitle}>Favorit Saya</Text>
      </View>

      <ScrollView contentContainerStyle={[DefaultStyle.defaultPaddingHorizontal, { paddingBottom: 90, paddingTop: 10, gap: 10 }]}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <View style={[DefaultStyle.defaultNeumorphicBox, styles.card]} key={number}>
            <View style={styles.cardContent}>
              <Image source={require('../assets/img/menu/food.png')} style={styles.cardImage} />
              <View style={{ gap: 10 }}>
                <Text style={styles.cardTitle}>Me Gacoan</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Text style={{ color: Colors.BLACK }}>4.8</Text>
                  <View style={styles.divider}></View>
                  <Text style={{ color: Colors.BLACK }}>3km</Text>
                  <View style={styles.divider}></View>
                  <Text style={{ color: Colors.BLACK }}>3min</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="favorite" size={20} color={Colors.BLUE_PRIMARY} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  divider: { height: 15, width: 1, backgroundColor: Colors.BLACK },
  card: { flexDirection: 'row', gap: 20, justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  cardContent: { justifyContent: 'space-between', flexDirection: 'row', gap: 20 },
  cardImage: { height: 50, width: 50 },
  cardTitle: { color: Colors.BLACK, fontSize: 16, fontWeight: '500' },
})

export default WhitelistScreen