import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import MainHeader from './MainHeader'
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation=useNavigation();

  return (
    <View


    >
      <MainHeader />
      <ScrollView
        style={{
          paddingHorizontal: 12,
          marginTop: 22,
          height:'100%'
        }}
      >





        <TouchableOpacity
          style={{
            paddingVertical: Dimensions.get('screen').height / 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          onPress={()=>{navigation.navigate('profile')}}
          >
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
            }}
          >

            Personal Info
          </Text>
          <FontAwesome
            name={"chevron-right"}
            size={12}
            color='#000'
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            paddingVertical: Dimensions.get('screen').height / 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          onPress={()=>{navigation.navigate('ChangePassword')}}
        >
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
            }}
          >

            Change Password
          </Text>
          <FontAwesome
            name={"chevron-right"}
            size={12}
            color='#000'
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            paddingVertical: Dimensions.get('screen').height / 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          
          onPress={()=>{navigation.navigate('shippingAddresses')}}

        >
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
            }}
          >

            My addresses
          </Text>
          <FontAwesome
            name={"chevron-right"}
            size={12}
            color='#000'
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingVertical: Dimensions.get('screen').height / 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          onPress={()=>{navigation.navigate('MyOrders')}}

        >
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
            }}
          >

            My Orders
          </Text>
          <FontAwesome
            name={"chevron-right"}
            size={12}
            color='#000'
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingVertical: Dimensions.get('screen').height / 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
            }}
          >

            Payment Method
          </Text>
          <FontAwesome
            name={"chevron-right"}
            size={12}
            color='#000'
          />
        </TouchableOpacity>


   


        <TouchableOpacity
          style={{
            paddingVertical: Dimensions.get('screen').height / 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          onPress={()=>{navigation.navigate('Terms')}}

        >
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
            }}
          >

            Terms and conditions
          </Text>
          <FontAwesome
            name={"chevron-right"}
            size={12}
            color='#000'
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingVertical: Dimensions.get('screen').height / 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          onPress={()=>{navigation.navigate('Aboutus')}}
        >
          <Text
            style={{
              color: '#000',
              fontWeight: '600',
            }}
          >

            About us
          </Text>
          <FontAwesome
            name={"chevron-right"}
            size={12}
            color='#000'
          />
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            paddingBottom: Dimensions.get('screen').height / 70,
            paddingTop: Dimensions.get('screen').height / 30,

          }}
        >
          <Text
            style={{
              color: 'red',
              fontWeight: '600',
              alignSelf: 'center'
            }}
          >

            Logout
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            paddingVertical: Dimensions.get('screen').height / 70,
          }}
        >
          <Text
            style={{
              color: 'red',
              fontWeight: '600',
              alignSelf: 'center'
            }}
          >

            Delete Account
          </Text>
        </TouchableOpacity>
      </ScrollView>

    </View>
  )
}

export default SettingsScreen