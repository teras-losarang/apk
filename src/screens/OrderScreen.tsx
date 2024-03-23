import React, { useRef, useState } from 'react'
import { Animated, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Colors } from '../constants/Colors'
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ActionSheet, { useScrollHandlers } from 'react-native-actions-sheet';

const OrderScreen = ({ navigation }: any) => {
  const [number, setNumber] = useState(1)
  const [isPayment, setIsPayment] = useState("")

  const actionChangeAddressRef = useRef<any>(null);
  const actionPaymentMethodRef = useRef<any>(null);
  const scrollHandlers = useScrollHandlers<ScrollView>(
    'scrollview-1',
    actionPaymentMethodRef,
  );

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
            <TouchableOpacity style={[DefaultStyle.defaultBtnOutlinePrimary, { borderRadius: 20 }]} onPress={() => actionChangeAddressRef.current?.show()}>
              <Text style={{ color: Colors.BLUE_PRIMARY }}>Ganti Alamat</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          {[0, 9].map(number => (
            <View key={number}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                  <Image source={require('../assets/img/menu/food.png')} style={{ width: 50, height: 50 }} />
                  <View>
                    <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14 }}>Me Iblis</Text>
                    <Text style={{ color: Colors.BLUE_PRIMARY, fontWeight: '500', fontSize: 12 }}>Rp 15.000</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', borderWidth: 1, borderColor: Colors.BLUE_PRIMARY, borderRadius: 30 }}>
                  <TouchableOpacity style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} onPress={() => setNumber(number - 1)}>
                    <MaterialIcons name="remove" size={14} color={Colors.BLUE_PRIMARY} />
                  </TouchableOpacity>
                  <View style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 12 }}>{number}</Text>
                  </View>
                  <TouchableOpacity style={{ width: 30, height: 30, alignItems: 'center', justifyContent: 'center' }} onPress={() => setNumber(number + 1)}>
                    <MaterialIcons name="add" size={14} color={Colors.BLUE_PRIMARY} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.divider}></View>
            </View>
          ))}
        </View>
        <View style={styles.card}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: Colors.BLACK }}>Catatan :</Text>
              <TextInput placeholder='Mohon tinggalkan catatan...' placeholderTextColor={Colors.GREY} style={{ fontSize: 12, padding: 0, color: Colors.BLACK }} textAlign='right' />
            </View>
            <View style={[styles.divider]}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: Colors.BLACK }}>Total Pesanan (2 Menu) :</Text>
              <Text style={{ color: Colors.BLUE_PRIMARY, fontWeight: '500' }}>Rp 30.000</Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 5 }} onPress={() => actionPaymentMethodRef.current?.show()}>
              <Text style={{ color: Colors.BLACK }}>Pilih metode pembayaran</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <Text style={{ color: Colors.BLACK }}>{isPayment}</Text>
                <MaterialIcons name="arrow-forward-ios" size={16} color={Colors.BLACK} />
              </View>
            </TouchableOpacity>
            <View style={[styles.divider]}></View>
            <View style={{ gap: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Subtotal Pesanan (2 Menu) :</Text>
                <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 12 }}>Rp 30.000</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Biaya Pengiriman :</Text>
                <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 12 }}>Rp 0</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Biaya Layanan :</Text>
                <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 12 }}>Rp 0</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginTop: 20 }}>
                <Text style={{ color: Colors.BLACK, fontSize: 14, fontWeight: '600' }}>Total Biaya :</Text>
                <View style={{ alignItems: 'flex-end', gap: 10 }}>
                  <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 14, fontWeight: '600' }}>Rp 30.000</Text>
                  <Text style={{ color: Colors.BLACK, fontSize: 10 }}>Sudah termasuk pajak.</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <View style={{ backgroundColor: Colors.WHITE, flexDirection: 'row', justifyContent: 'flex-end', gap: 10 }}>
          <View style={{ paddingVertical: 5, alignItems: 'flex-end' }}>
            <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Total Pembayaran</Text>
            <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 14, fontWeight: '600' }}>Rp 30.000</Text>
          </View>
          <TouchableOpacity style={[DefaultStyle.defaultBtnPrimary, { justifyContent: 'center' }]} onPress={() => {
            navigation.navigate("PaymentScreen")
          }} >
            <Text style={{ color: Colors.WHITE, fontSize: 14, fontWeight: '600' }}>Bayar Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ActionSheet ref={actionPaymentMethodRef} gestureEnabled>
        <View style={{ paddingVertical: 20, gap: 20 }}>
          <TouchableOpacity style={styles.cardPayment} onPress={() => {
            setIsPayment('Tunai')
            actionPaymentMethodRef.current?.setModalVisible(false)
          }}>
            <View></View>
            <Text style={styles.textPayment}>Tunai</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardPayment} onPress={() => {
            setIsPayment('GoPay')
            actionPaymentMethodRef.current?.setModalVisible(false)
          }}>
            <View></View>
            <Text style={styles.textPayment}>GoPay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardPayment} onPress={() => {
            setIsPayment('OVO')
            actionPaymentMethodRef.current?.setModalVisible(false)
          }}>
            <View></View>
            <Text style={styles.textPayment}>OVO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardPayment} onPress={() => {
            setIsPayment('DANA')
            actionPaymentMethodRef.current?.setModalVisible(false)
          }}>
            <View></View>
            <Text style={styles.textPayment}>DANA</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardPayment} onPress={() => {
            setIsPayment('ShopeePay')
            actionPaymentMethodRef.current?.setModalVisible(false)
          }}>
            <View></View>
            <Text style={styles.textPayment}>ShopeePay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardPayment} onPress={() => {
            setIsPayment('LinkAja')
            actionPaymentMethodRef.current?.setModalVisible(false)
          }}>
            <View></View>
            <Text style={styles.textPayment}>LinkAja</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
      <ActionSheet ref={actionChangeAddressRef} gestureEnabled>
        <View style={{ padding: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: Colors.BLACK }}>Pilih Lokasi</Text>
            <TouchableOpacity style={[DefaultStyle.defaultBtnOutlineSecondary, { flexDirection: 'row', alignItems: 'center', gap: 5, borderRadius: 50 }]} onPress={() => navigation.navigate('MapScreen')}>
              <MaterialIcons name="map" size={12} color={Colors.BLUE_PRIMARY} />
              <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Pilih Lewat Map</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.divider]}></View>
          <View style={{ gap: 15 }}>
            {[1, 2, 3].map(number => (
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }} onPress={() => actionChangeAddressRef.current?.setModalVisible(false)} key={number}>
                <MaterialIcons name="my-location" size={16} color={Colors.BLUE_PRIMARY} />
                <View>
                  <Text style={{ color: Colors.BLACK, fontWeight: '600' }}>Lokasimu Saat Ini</Text>
                  <Text style={{ color: Colors.BLACK, fontSize: 11 }}>Lorem ipsum dolor sit amet dologue alreamme</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ActionSheet>
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
  cardPayment: {
    paddingHorizontal: 20
  },
  textPayment: {
    color: Colors.BLACK,
    fontWeight: '600'
  }
})

export default OrderScreen