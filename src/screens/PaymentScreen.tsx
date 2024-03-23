import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Colors } from '../constants/Colors'
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ActionSheet, { useScrollHandlers } from 'react-native-actions-sheet';

const PaymentScreen = ({ navigation }: any) => {
  const initialTime = 24 * 60 * 60; // 24 jam dalam detik
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: any) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const actionPaymentMethodRef = useRef<any>(null);
  const scrollHandlers = useScrollHandlers<ScrollView>(
    'scrollview-1',
    actionPaymentMethodRef,
  );

  return (
    <View style={[DefaultStyle.defaultContainer, { backgroundColor: Colors.GREY_THIRD }]}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: Colors.WHITE, paddingTop: 70, paddingBottom: 15, marginTop: 0, marginBottom: 0 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={16} color={Colors.BLACK} />
        </TouchableOpacity>
        <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 20 }}>Pembayaran</Text>
        <View></View>
      </View>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={styles.card}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: Colors.BLACK }}>Total Pembayaran</Text>
              <Text style={{ color: Colors.BLUE_PRIMARY, fontWeight: '500' }}>Rp. 30.000</Text>
            </View>
            <View style={[styles.divider]}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: Colors.BLACK }}>Bayar Dalam</Text>
              <View>
                <Text style={{ color: Colors.ORANGE, textAlign: 'right' }}>{formatTime(timeLeft)}</Text>
                <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Jatuh Tempo ...</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: Colors.BLACK }}>ShopeePay</Text>
            </View>
            <View style={[styles.divider]}></View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View>
                <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Berikut Nomer Akun ShopeePay</Text>
                <Text style={{ color: Colors.ORANGE }}>202403011000129</Text>
              </View>
              <TouchableOpacity>
                <Text style={{ color: Colors.GREY, fontSize: 12 }}>SALIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: Colors.BLACK }}>Petunjuk Transfer</Text>
              <MaterialIcons name="expand-more" size={20} color={Colors.BLACK} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <View style={{ backgroundColor: Colors.WHITE, flexDirection: 'row', justifyContent: 'flex-end', padding: 10, flex: 1 }}>
          <TouchableOpacity style={[DefaultStyle.defaultBtnPrimary, { justifyContent: 'center', borderRadius: 10, width: '100%', height: 40 }]} onPress={() => {
            navigation.navigate("RouteScreen")
          }} >
            <Text style={{ color: Colors.WHITE, fontSize: 14, fontWeight: '600', textAlign: 'center' }}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default PaymentScreen