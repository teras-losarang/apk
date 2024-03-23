import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from '../constants/Colors';

const CallScreen = ({ navigation }: any) => {
  return (
    <View style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={{ flex: 1, backgroundColor: Colors.GREY_THIRD }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: Colors.BLACK, fontSize: 18, fontWeight: '600', textAlign: 'center' }}>Asep Saepullah</Text>
            <Text style={{ color: Colors.BLACK, fontSize: 13, textAlign: 'center' }}>089606265960</Text>
          </View>
          <Image source={require('../assets/img/menu/food.png')} style={{ height: 150, width: 150 }} />
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 50, alignSelf: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: Colors.RED_PRIMARY, padding: 15, borderRadius: 50 }} onPress={() => navigation.goBack()}>
          <MaterialIcons name="call-end" size={25} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
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

export default CallScreen