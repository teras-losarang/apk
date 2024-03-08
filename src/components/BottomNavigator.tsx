import React from 'react'
import { StyleSheet, View } from 'react-native'
import TabItem from './TabItem'
import { Colors } from '../constants/Colors';

const BottomNavigator = ({ state, descriptors, navigation }: any) => {
  const focusOptions = descriptors[state.routes[state.index].key].options;
  if (focusOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label = options.tabBarLabel !== undefined ? options.taBarLabel : options.title !== undefined ? options.title : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <TabItem key={index} label={label} isFocused={isFocused} onPress={onPress} onLongPress={onLongPress} />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    borderColor: '#fafafa',
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -10
    },
    shadowColor: Colors.BLACK,
    elevation: 10
  }
})

export default BottomNavigator