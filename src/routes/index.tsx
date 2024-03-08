import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen, HistoryScreen, HomeScreen, ProfileScreen, StoreDetailScreen, StoreScreen, WhitelistScreen } from '../screens';
import BottomNavigator from '../components/BottomNavigator';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name='Whitelist' component={WhitelistScreen} options={{ headerShown: false }} />
      <Tab.Screen name='Cart' component={CartScreen} options={{ headerShown: false }} />
      <Tab.Screen name='History' component={HistoryScreen} options={{ headerShown: false }} />
      <Tab.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName='MainApp'>
      <Stack.Screen name='MainApp' component={MainApp} options={{ headerShown: false }} />
      <Stack.Screen name='StoreScreen' component={StoreScreen} options={{ headerShown: false }} />
      <Stack.Screen name='StoreDetailScreen' component={StoreDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Routes