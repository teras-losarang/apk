import React from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DefaultStyle } from '../constants/DefaultStyle'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from '../constants/Colors';

const ProfileScreen = ({ navigation }: any) => {
  return (
    <View style={DefaultStyle.defaultContainer}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <View style={[DefaultStyle.defaultHeader, { justifyContent: 'center' }]}>
        <Text style={DefaultStyle.defaultHeaderTitle}>Profil Saya</Text>
      </View>

      <ScrollView contentContainerStyle={[DefaultStyle.defaultPaddingHorizontal, styles.container]} horizontal={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', gap: 20 }}>
            <View>
              <Text style={{ color: Colors.WHITE, backgroundColor: Colors.BLUE_PRIMARY, padding: 10, borderRadius: 50 }}>GA</Text>
            </View>
            <View style={{ gap: 5 }}>
              <Text style={{ color: Colors.BLACK, fontWeight: '600', fontSize: 16 }}>Asep Saepullah</Text>
              <Text style={{ color: Colors.BLACK, fontSize: 13 }}>asep@mailinator.com</Text>
              <Text style={{ color: Colors.BLACK, fontSize: 13 }}>089606265960</Text>
            </View>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={16} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={styles.divider}></View>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <MaterialIcons name="logout" size={16} color={Colors.BLACK} />
              <Text style={{ color: Colors.BLACK }}>Logout</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color={Colors.BLACK} />
          </TouchableOpacity>
          <View style={styles.divider}></View>
        </View>
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

export default ProfileScreen