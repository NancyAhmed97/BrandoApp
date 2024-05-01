import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from '../Screens/HomeScreen';
import ProductDetails from '../Screens/ProductDetails';
import ProductList from '../Screens/ProductsListScreen';
import ReviewsScreen from '../Screens/ReviewsScreen';
import CartScreen from '../Screens/CartScreen';
import ProductsListScreen from '../Screens/ProductsListScreen';
import BrandsScreen from '../Screens/BrandsScreen';

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
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ProductList" component={ProductList} />
        <Stack.Screen name="Reviews" component={ReviewsScreen} />
        <Stack.Screen name="ProductsList" component={ProductsListScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Brand" component={BrandsScreen} />



        </Stack.Navigator>
            </View>
  )
}

export default HomeNavigator