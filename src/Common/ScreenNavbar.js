import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const ScreenNavbar = () => {
    const navigation = useNavigation();
    const [notifications, setNotifications] = useState([])
    return (
        <View
            style={{
                marginVertical: 20
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Text></Text>
                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#322068'
                    }}
                >
                    Brando
                </Text>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Notification')
                    }}
                    style={{
                        width:30,
                        height:30,
                        backgroundColor:'#fff',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:'50%'
        
                    }}
                >
                    {notifications.length !== 0 &&
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '50%',
                                minWidth: 18,
                                height: 18,
                                backgroundColor: 'red',


                            }}
                        >
                            <Text
                                style={{
                                    color: "white",

                                }}
                            >
                                1
                            </Text>
                        </View>
                    }
                    <Ionicons name="notifications-outline" size={20} ></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ScreenNavbar