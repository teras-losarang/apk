import React from 'react'
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { DefaultStyle } from '../constants/DefaultStyle'
import { Colors } from '../constants/Colors'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const CartScreen = ({ navigation }: any) => {
  return (
    <View style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'center' }]}>
        <Text style={DefaultStyle.defaultHeaderTitle}>Keranjangku</Text>
      </View>

      <ScrollView contentContainerStyle={[DefaultStyle.defaultPaddingHorizontal, { paddingBottom: 90, paddingTop: 10, gap: 10 }]}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <View style={{ gap: 10 }} key={number}>
            <View style={[DefaultStyle.defaultNeumorphicBox, { gap: 15 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16 }}>Me Gacoan</Text>
                  <MaterialIcons name="arrow-forward-ios" size={12} color={Colors.GREY} />
                </View>
                <TouchableOpacity>
                  <Text style={{ color: Colors.GREY, fontSize: 13 }}>Ubah</Text>
                </TouchableOpacity>
              </View>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', gap: 15 }}>
                    <Image source={require('../assets/img/menu/food.png')} style={{ height: 65, width: 65 }} />
                    <View style={{ justifyContent: 'space-between' }}>
                      <Text style={{ color: Colors.BLACK, fontSize: 14, fontWeight: '500' }}>Ayam Teriyaki</Text>
                      <View>
                        <Text style={{ color: Colors.BLACK, fontSize: 12 }}>1x</Text>
                        <Text style={{ fontSize: 13, color: Colors.BLUE_PRIMARY }}>Rp 25.000</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ backgroundColor: Colors.WHITE, justifyContent: 'center', paddingHorizontal: 20 }}>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: Colors.BLACK }}>Total :</Text>
                  <Text style={{ color: Colors.BLUE_PRIMARY, marginLeft: 5 }}>Rp 25.000</Text>
                </View>
                <TouchableOpacity style={DefaultStyle.defaultBtnPrimary} onPress={() => {
                  navigation.navigate('OrderScreen')
                }}>
                  <Text style={{ color: Colors.WHITE }}>Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[DefaultStyle.defaultNeumorphicBox, { gap: 15 }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16 }}>Me Gacoan</Text>
                  <MaterialIcons name="arrow-forward-ios" size={12} color={Colors.GREY} />
                </View>
                <TouchableOpacity>
                  <Text style={{ color: Colors.GREY, fontSize: 13 }}>Ubah</Text>
                </TouchableOpacity>
              </View>
              <View style={{ gap: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', gap: 15 }}>
                    <Image source={require('../assets/img/menu/food.png')} style={{ height: 65, width: 65 }} />
                    <View style={{ justifyContent: 'space-between' }}>
                      <Text style={{ color: Colors.BLACK, fontSize: 14, fontWeight: '500' }}>Ayam Teriyaki</Text>
                      <View>
                        <Text style={{ color: Colors.BLACK, fontSize: 12 }}>1x</Text>
                        <Text style={{ fontSize: 13, color: Colors.BLUE_PRIMARY }}>Rp 25.000</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={{ backgroundColor: Colors.GREY, justifyContent: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ color: Colors.WHITE }}>Hapus</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: "100%", height: 1, backgroundColor: Colors.GREY_THIRD }}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row', gap: 15 }}>
                    <Image source={require('../assets/img/menu/food.png')} style={{ height: 65, width: 65 }} />
                    <View style={{ justifyContent: 'space-between' }}>
                      <Text style={{ color: Colors.BLACK, fontSize: 14, fontWeight: '500' }}>Ayam Teriyaki</Text>
                      <View>
                        <Text style={{ color: Colors.BLACK, fontSize: 12 }}>1x</Text>
                        <Text style={{ fontSize: 13, color: Colors.BLUE_PRIMARY }}>Rp 25.000</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={{ backgroundColor: Colors.GREY, justifyContent: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ color: Colors.WHITE }}>Hapus</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: Colors.BLACK }}>Total :</Text>
                  <Text style={{ color: Colors.BLUE_PRIMARY, marginLeft: 5 }}>Rp 25.000</Text>
                </View>
                <TouchableOpacity style={DefaultStyle.defaultBtnPrimary} onPress={() => {
                  navigation.navigate('OrderScreen')
                }}>
                  <Text style={{ color: Colors.WHITE }}>Checkout</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default CartScreen