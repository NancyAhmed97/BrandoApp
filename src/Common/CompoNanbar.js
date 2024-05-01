import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const CompoNanbar = () => {
    const navigation = useNavigation();

    return (
        <View
            style={{
                marginTop: 12,
                marginBottom:20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: Dimensions.get('screen').width / 20,

            }}
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Ionicons name="chevron-back-outline" size={25} color="rgba(0, 0, 0, 1)" />

            </TouchableOpacity>
            <TouchableOpacity
            style={{
                width:30,
                height:30,
                backgroundColor:'rgba(242, 242, 242, 1)',
                justifyContent:'center',
                alignItems:'center',
                borderRadius:'50%'
            }}
            >

                <Ionicons name="cart-outline" size={20} color="rgba(0, 0, 0, 1)" />

            </TouchableOpacity>
        </View>
    )
}

export default CompoNanbar