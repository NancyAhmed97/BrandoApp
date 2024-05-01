import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../Screens/HomeScreen';
import BrandDetailsScreen from '../Screens/BrandDetailsScreen';
import ProductDetails from '../Screens/ProductDetails';
import ProductList from '../Screens/ProductsListScreen';

const HomeNavigator = () => {
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BrandDetails" component={BrandDetailsScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ProductList" component={ProductList} />



        </Stack.Navigator>
            </View>
  )
}

export default HomeNavigator