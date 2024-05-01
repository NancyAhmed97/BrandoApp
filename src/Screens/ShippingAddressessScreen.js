import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../Common/CommonHeader'
import {
    AntDesign,
    Entypo,
} from "@expo/vector-icons";
import { Colors } from '../Constants/Colors';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';

const ShippingAddressessScreen = () => {
    const [addressState, setAddressState] = useState(1);
    const navigation = useNavigation()
    return (
        <View
            style={{
                paddingTop: Dimensions.get('screen').height / 20,
                paddingBottom: Dimensions.get('screen').height / 50,

                paddingHorizontal: Dimensions.get('screen').height / 38,
                flex: 1,

            }}
        >
            <CommonHeader
                headerState="shipping Addresses"
            />


            <ScrollView


            >

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 30,
                        alignItems: 'center'
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Entypo name="location-pin" size={24} color="black" />

                        <Text
                            style={{
                                fontWeight: 'bold'
                            }}
                        >

                            Delivery Address

                        </Text>

                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Addresses', {
                                addState: 'addAddress'
                            })
                        }}
                    >
                        <AntDesign name="pluscircleo" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => setAddressState(1)}
                    style={addressState === 1 ? {

                        borderWidth: 3,
                        borderColor: Colors.secondry,
                        backgroundColor: '#fff',
                        padding: 12,
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        marginBottom: 24,
                        marginHorizontal: 8

                    } :
                        {
                            backgroundColor: '#fff',
                            padding: 12,
                            borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            marginBottom: 24,
                            marginHorizontal: 8

                        }}
                >
                    <View
                        style={{


                        }}

                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    marginBottom: 7
                                }}
                            >
                                Address :

                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <TouchableOpacity
                                    onPress={() => { navigation.navigate('Addresses') }}
                                    style={{
                                        marginRight: 7
                                    }}
                                >
                                    <AntDesign name="delete" size={18} color="red" />

                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate('Addresses', {
                                            addState: 'EditeAddress'
                                        })
                                    }}                            >
                                    <AntDesign name="edit" size={20} color="black" />

                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text
                            style={{
                                fontWeight: '400',
                                fontSize: 12
                            }}
                        >
                            216 St Paul's Rd, London N1 2LL, UK
                        </Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={() => setAddressState(2)}
                    style={addressState === 2 ? {

                        borderWidth: 3,
                        borderColor: Colors.secondry,
                        backgroundColor: '#fff',
                        padding: 12,
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        marginBottom: 24,
                        marginHorizontal: 8


                    } :
                        {
                            backgroundColor: '#fff',
                            padding: 12,
                            borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                            marginBottom: 24,
                            marginHorizontal: 8

                        }}
                >
                    <View

                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    marginBottom: 7
                                }}
                            >
                                Address :

                            </Text>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate('Addresses') }}
                            >
                                <AntDesign name="edit" size={18} color="black" />

                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                fontWeight: '400',
                                fontSize: 12
                            }}
                        >
                            216 St Paul's Rd, London N1 2LL, UK
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setAddressState(3)}
                    style={addressState === 3 ? {

                        borderWidth: 3,
                        borderColor: Colors.secondry,
                        backgroundColor: '#fff',
                        padding: 12,
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        marginBottom: 24,
                        marginHorizontal: 8


                    } :
                        {
                            backgroundColor: '#fff',
                            padding: 12,
                            borderRadius: 10,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,

                            elevation: 5,
                            marginBottom: 24,
                            marginHorizontal: 8

                        }}
                >
                    <View

                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    marginBottom: 7
                                }}
                            >
                                Address :

                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Addresses', {
                                        addState: 'editAddress'
                                    })
                                }}
                            >
                                <AntDesign name="edit" size={18} color="black" />

                            </TouchableOpacity>
                        </View>
                        <Text
                            style={{
                                fontWeight: '400',
                                fontSize: 12
                            }}
                        >
                            216 St Paul's Rd, London N1 2LL, UK
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <View>
                <CommonButton
                    title={'Save'}
                    height={50}
                    width={'90%'}
                    fontsize={15}
                    fontweight={"600"}
                    textalign={'center'}
                    margintop={0}
                    marginbottom={0}
                    color={'#fff'}
                    background={'#542689'}
                    borderreduis={4}
                    changeFuncation={() => { navigation.navigate('Paymen') }}
                    price={''}
                    alignSelf="center"
                />
            </View>

        </View>

    )
}

export default ShippingAddressessScreen