import React from 'react'
import { Animated, Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { Colors } from '../constants/Colors'
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const OrderScreen = ({ navigation }: any) => {
  return (
    <View style={[DefaultStyle.defaultContainer, { backgroundColor: Colors.GREY_THIRD }]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: Colors.WHITE, paddingTop: 70, paddingBottom: 15, marginTop: 0, marginBottom: 0 }]}>
        <View style={{ gap: 10, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={16} color={Colors.BLACK} />
          </TouchableOpacity>
          <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 20 }}>Me Gacoan</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ backgroundColor: Colors.WHITE, padding: 20, paddingTop: 0 }}>
          <Text style={{ color: Colors.BLACK }}>Alamat Pengantaran</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: 10 }}>
            <Text style={{ color: Colors.BLACK, fontSize: 18, fontWeight: '600' }}>Losarang, Indramayu</Text>
            <TouchableOpacity style={[DefaultStyle.defaultBtnOutlinePrimary, { borderRadius: 20 }]}>
              <Text style={{ color: Colors.BLUE_PRIMARY }}>Ganti Alamat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ backgroundColor: Colors.WHITE, marginTop: 10, paddingHorizontal: 20, paddingVertical: 10 }}>
          <View>
            <View>
              <Image source={require('../assets/img/menu/food.png')} />
            </View>
            <View></View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default OrderScreen