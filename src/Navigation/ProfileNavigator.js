import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SettingsSreen from "../Screens/SettingsScreen"
import ProfileScreen from "../Screens/ProfileScreen"
import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
import AboutusScreen from '../Screens/AboutusScreen';
import TermsAndConditionScreen from '../Screens/TermsAndConditionScreen';
import ShippingAddressessScreen from '../Screens/ShippingAddressessScreen';
import AddressesScreen from '../Screens/AddressesScreen';
import MyOrdersScreen from '../Screens/MyOrdersScreen';
import OrderDetailsScreen from '../Screens/OrderDetailsScreen';
const ProfileNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <View
      style={{ flex: 1 }}
    >


      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Set the background color here and remove header
        }}

      >
        <Stack.Screen name="Settings" component={SettingsSreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Aboutus" component={AboutusScreen} />
        <Stack.Screen name="Terms" component={TermsAndConditionScreen} />
        <Stack.Screen name="shippingAddresses" component={ShippingAddressessScreen} />
        <Stack.Screen name="Addresses" component={AddressesScreen} />
        <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
        <Stack.Screen name="OrderDetais" component={OrderDetailsScreen} />






      </Stack.Navigator>
    </View>
  )
}

export default ProfileNavigator