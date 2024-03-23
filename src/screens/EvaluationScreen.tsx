import React, { useState } from 'react'
import { Button, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from '../constants/Colors';

const EvaluationScreen = ({ navigation }: any) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === '') {
      return;
    }
    setMessages(prevMessages => [...prevMessages, { id: Math.random().toString(), text: message }]);
    setMessage('');
  };

  return (
    <View style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'space-between', alignItems: 'center', width: '100%', backgroundColor: Colors.WHITE, paddingTop: 70, paddingBottom: 15, marginTop: 0, marginBottom: 0 }]}>
        <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 20 }}>Kasih Penilaian</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <View style={[styles.divider]}></View>
        <View style={{ alignItems: 'center', paddingVertical: 20, gap: 10 }}>
          <Text style={{ color: Colors.BLACK, fontWeight: '600' }}>Rating 1 - 5</Text>
          <View style={{ flexDirection: 'row' }}>
            <MaterialIcons name="star" size={30} color={Colors.GREY_THIRD} />
            <MaterialIcons name="star" size={30} color={Colors.GREY_THIRD} />
            <MaterialIcons name="star" size={30} color={Colors.GREY_THIRD} />
            <MaterialIcons name="star" size={30} color={Colors.GREY_THIRD} />
            <MaterialIcons name="star" size={30} color={Colors.GREY_THIRD} />
          </View>
        </View>
        <View style={[styles.divider]}></View>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <View>
            <Text style={{ color: Colors.WHITE, backgroundColor: Colors.BLUE_PRIMARY, padding: 10, borderRadius: 50 }}>GA</Text>
          </View>
          <View style={{ gap: 5 }}>
            <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16 }}>Asep Saepullah</Text>
            <Text style={{ color: Colors.BLACK, fontSize: 13 }}>089606265960</Text>
          </View>
        </View>
        <View style={[styles.divider]}></View>
        <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14, marginBottom: 10 }}>Alamat  :</Text>
        <View style={{ gap: 15 }}>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <MaterialIcons name="restaurant" size={16} color={Colors.RED_PRIMARY} />
            <View>
              <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Lokasi Restoran</Text>
              <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14 }}>Cibereng, Terisi</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <MaterialIcons name="radio-button-checked" size={16} color={Colors.ORANGE} />
            <View>
              <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Lokasi Pembeli</Text>
              <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14 }}>Puntang, Losarang</Text>
            </View>
          </View>
        </View>
        <View style={[styles.divider]}></View>
        <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14, marginBottom: 10 }}>Pesanan  :</Text>
        {[0, 1, 2, 3].map(index => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: Colors.BLACK, fontSize: 12 }}>Me Gacoan</Text>
            <Text style={{ color: Colors.BLACK, fontSize: 12 }}>{index + 1} x Rp 10.000</Text>
          </View>
        ))}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 }}>
          <Text style={{ color: Colors.BLACK, fontSize: 12, fontWeight: '600' }}>Total Pesanan</Text>
          <Text style={{ color: Colors.BLACK, fontSize: 12, fontWeight: '600' }}>Rp 100.000</Text>
        </View>
        <View style={[styles.divider]}></View>
        <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 14, marginBottom: 10 }}>Metode Pembayaran  :</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: Colors.BLACK, fontSize: 12, fontWeight: '600' }}>ShopeePay</Text>
        </View>
        <View style={[styles.divider]}></View>
        <TouchableOpacity style={[DefaultStyle.defaultBtnPrimary, { justifyContent: 'center', borderRadius: 10, width: '100%', height: 40 }]} onPress={() => {
          navigation.navigate("MainApp")
        }} >
          <Text style={{ color: Colors.WHITE, fontSize: 14, fontWeight: '600', textAlign: 'center' }}>Simpan</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    height: 2,
    width: '100%',
    borderColor: Colors.GREY_THIRD,
    marginVertical: 10
  },
});

export default EvaluationScreen