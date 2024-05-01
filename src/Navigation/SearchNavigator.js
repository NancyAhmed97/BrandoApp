import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from '../Screens/SearchScreen';
import SearchResultScreen from '../Screens/SearchResultScreen';
import ProductsListScreen from '../Screens/ProductsListScreen';
import ProductDetails from '../Screens/ProductDetails';

const SearchNavigator = () => {
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
     <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="SearchResult" component={SearchResultScreen} />
        <Stack.Screen name="ProductsList" component={ProductsListScreen} />
          <Stack.Screen name="productDetails" component={ProductDetails} />
       {/* <Stack.Screen name="Terms" component={TermsAndConditionScreen} />
        <Stack.Screen name="shippingAddresses" component={ShippingAddressessScreen} />
        <Stack.Screen name="Addresses" component={AddressesScreen} />
        <Stack.Screen name="MyOrders" component={MyOrdersScreen} />
        <Stack.Screen name="OrderDetais" component={OrderDetailsScreen} />
 */}

        



        </Stack.Navigator>
            </View>
  )
}

export default SearchNavigator