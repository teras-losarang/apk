import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from '../constants/Colors';

const HistoryScreen = (navigation: any) => {
  return (
    <View style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'center' }]}>
        <Text style={DefaultStyle.defaultHeaderTitle}>Riwayat Pesanan</Text>
      </View>

      <ScrollView contentContainerStyle={[DefaultStyle.defaultPaddingHorizontal, styles.container]} horizontal={false}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <View style={[DefaultStyle.defaultNeumorphicBox, styles.card]} key={number}>
            <View style={styles.cardInvoice}>
              <Text style={{ color: Colors.GREY, fontSize: 14 }}>129092029190291819</Text>
              <Text style={{ color: Colors.GREY, fontSize: 12 }}>6 Mar 2024</Text>
            </View>
            <TouchableOpacity style={styles.cardStore}>
              <Text style={styles.cardTitle}>Me Gacoan</Text>
              <MaterialIcons name="arrow-forward-ios" size={12} color={Colors.GREY} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <ScrollView horizontal={true} contentContainerStyle={{ gap: 15 }}>
                <TouchableOpacity style={{ gap: 5 }}>
                  <Image source={require('../assets/img/menu/food.png')} style={{ height: 50, width: 50 }} />
                  <Text style={{ color: Colors.BLACK, fontSize: 13 }}>Mie Setan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ gap: 5 }}>
                  <Image source={require('../assets/img/menu/food.png')} style={{ height: 50, width: 50 }} />
                  <Text style={{ color: Colors.BLACK, fontSize: 13 }}>Mie Setan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ gap: 5 }}>
                  <Image source={require('../assets/img/menu/food.png')} style={{ height: 50, width: 50 }} />
                  <Text style={{ color: Colors.BLACK, fontSize: 13 }}>Mie Setan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ gap: 5 }}>
                  <Image source={require('../assets/img/menu/food.png')} style={{ height: 50, width: 50 }} />
                  <Text style={{ color: Colors.BLACK, fontSize: 13 }}>Mie Setan</Text>
                </TouchableOpacity>
              </ScrollView>
              <TouchableOpacity style={{ justifyContent: 'center', paddingHorizontal: 20, gap: 10 }}>
                <Text style={{ color: Colors.BLACK }}>Rp 50.000</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 10 }}>
                  <Text style={{ color: Colors.BLACK, fontSize: 12 }}>4 Menu</Text>
                  <MaterialIcons name="arrow-forward-ios" size={12} color={Colors.GREY} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
            <View style={styles.cardFooter}>
              <Text style={{ color: Colors.BLACK }}>Selesai</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <TouchableOpacity style={DefaultStyle.defaultBtnOutlinePrimary}>
                  <Text style={{ color: Colors.BLUE_PRIMARY }}>Beri Penilaian</Text>
                </TouchableOpacity>
                <TouchableOpacity style={DefaultStyle.defaultBtnPrimary}>
                  <Text style={{ color: Colors.WHITE }}>Pesan Lagi</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { paddingBottom: 90, paddingTop: 10, gap: 10 },
  card: { paddingHorizontal: 10, paddingVertical: 15, gap: 10 },
  cardInvoice: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  cardStore: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 10 },
  cardTitle: { color: Colors.BLACK, fontSize: 16, fontWeight: '600' },
  cardFooter: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  divider: { width: '100%', height: 2, backgroundColor: Colors.GREY_THIRD, marginVertical: 10 },
})

export default HistoryScreen