import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import WishlistScreen from '../Screens/WishlistScreen';
import ProductDetails from '../Screens/ProductDetails';

const FavoritesNavigator = () => {
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
        <Stack.Screen name="wishlist" component={WishlistScreen} />
        <Stack.Screen name="wishlist-ProductDetails" component={ProductDetails} />


      </Stack.Navigator>
    </View>
  )
}

export default FavoritesNavigator