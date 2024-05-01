import { View, Text } from 'react-native'
import React from 'react'
import CartScreen from '../Screens/CartScreen'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetails from '../Screens/ProductDetails';
import PaymentScreen1 from '../Screens/PaymentScreen1';
import CheckoutScreen1 from '../Screens/CheckoutScreen1';
import AddressesScreen from '../Screens/AddressesScreen';

const CartNavigator = () => {
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
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Cart-ProductDetails" component={ProductDetails} />
        <Stack.Screen name="CheckoutScreen1" component={CheckoutScreen1} />
        <Stack.Screen name="Addresses" component={AddressesScreen} />
        <Stack.Screen name="Paymen" component={PaymentScreen1} />




      </Stack.Navigator>
    </View>
  )
}

export default CartNavigator