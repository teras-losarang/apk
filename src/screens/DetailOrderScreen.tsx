import React, { useState } from 'react'
import { Button, FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from '../constants/Colors';

const DetailOrderScreen = ({ navigation }: any) => {
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
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'flex-start', alignItems: 'center', width: '100%', backgroundColor: Colors.WHITE, paddingTop: 70, paddingBottom: 15, marginTop: 0, marginBottom: 0, gap: 10 }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={14} color={Colors.BLACK} />
        </TouchableOpacity>
        <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 20 }}>Detail Pesanan</Text>
      </View>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
        <View style={[styles.divider]}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <View>
              <Text style={{ color: Colors.WHITE, backgroundColor: Colors.BLUE_PRIMARY, padding: 10, borderRadius: 50 }}>GA</Text>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16 }}>Asep Saepullah</Text>
              <Text style={{ color: Colors.BLACK, fontSize: 13 }}>089606265960</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <View>
              <TouchableOpacity style={{ backgroundColor: Colors.GREEN_PRIMARY, padding: 10, borderRadius: 50 }} onPress={() => {
                navigation.navigate("CallScreen")
              }}>
                <MaterialIcons name="call" size={16} color={Colors.WHITE} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={{ backgroundColor: Colors.GREEN_PRIMARY, padding: 10, borderRadius: 50 }} onPress={() => {
                navigation.navigate("ChatScreen")
              }}>
                <MaterialIcons name="chat" size={16} color={Colors.WHITE} />
              </TouchableOpacity>
            </View>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={[DefaultStyle.defaultBtnOutlinePrimary, { borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }]}>
            <Text style={{ color: Colors.BLUE_PRIMARY, fontSize: 14 }}>Ajukan Pengembalian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[DefaultStyle.defaultBtnPrimary, { borderRadius: 10, paddingHorizontal: 20, paddingVertical: 10 }]} onPress={() => navigation.navigate('EvaluationScreen')}>
            <Text style={{ color: Colors.WHITE, fontSize: 14 }}>Kasih Penilaian</Text>
          </TouchableOpacity>
        </View>
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

export default DetailOrderScreen