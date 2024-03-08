import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from '../constants/Colors';

const TabItem = ({ isFocused, onPress, onLongPress, label }: any) => {
  function Icon() {
    if (label === "Home") {
      return isFocused ? <MaterialIcons name="home" size={20} color={Colors.BLUE_PRIMARY} /> : <MaterialIcons name="home" size={20} color={Colors.GREY} />
    }
    if (label === "Whitelist") {
      return isFocused ? <MaterialIcons name="favorite" size={20} color={Colors.BLUE_PRIMARY} /> : <MaterialIcons name="favorite" size={20} color={Colors.GREY} />
    }
    if (label === "Cart") {
      return isFocused ? <MaterialIcons name="shopping-cart" size={20} color={Colors.WHITE} /> : <MaterialIcons name="shopping-cart" size={20} color={Colors.WHITE} />
    }
    if (label === "History") {
      return isFocused ? <MaterialIcons name="history" size={20} color={Colors.BLUE_PRIMARY} /> : <MaterialIcons name="history" size={20} color={Colors.GREY} />
    }
    if (label === "Profile") {
      return isFocused ? <MaterialIcons name="person" size={20} color={Colors.BLUE_PRIMARY} /> : <MaterialIcons name="person" size={20} color={Colors.GREY} />
    }
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={label == 'Cart' ? styles.containerCart : styles.container}>
        <Icon />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 52
  },
  containerCart: {
    backgroundColor: Colors.BLUE_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderRadius: 60,
    borderColor: Colors.WHITE,
    borderWidth: 4,
    marginTop: -40,
  },
  textBar: (isFocused) => ({
    fontSize: 10,
    fontWeight: '700',
    color: isFocused ? Colors.BLUE_PRIMARY : Colors.GREY,
    marginTop: 5
  })
})

export default TabItem