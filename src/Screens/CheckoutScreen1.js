import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CommonButton from '../Common/CommonButton'
import RNPickerSelect from 'react-native-picker-select';
import Products from "../Common/Products.json"
import {
    Feather,
    AntDesign,
    Entypo,
} from "@expo/vector-icons";
import { Colors } from '../Constants/Colors';
import CommonHeader from '../Common/CommonHeader';

const CheckoutScreen1 = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [addressState, setAddressState] = useState(1);

    const options = [
        { label: 'Qty 1', value: 'Qty1' },
        { label: 'Qty 2', value: 'Qty2' },
        { label: 'Qty 3', value: 'Qty3' },
    ];
    const placeholder = {
        label: options[0].label,
        value: options[0].value,
    };



    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'space-between',
                paddingVertical: Dimensions.get('screen').height / 30,
                backgroundColor: '#f7f7fa',
                paddingHorizontal: 22

            }}
        >
            <CommonHeader
                headerState={'Check out'}
            />
            <ScrollView
                style={{
                }}

            >

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 22,
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
                        marginBottom: 12,
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
                            marginBottom: 12,
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
                        marginBottom: 12,
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
                            marginBottom: 12,
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
                        marginBottom: 12,
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
                            marginBottom: 12,
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


                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 22,
                        alignItems: 'center'
                    }}
                >

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Feather name="phone" size={20} color="black" />
                        <Text
                            style={{
                                fontWeight: 'bold',
                                marginHorizontal: 7
                            }}
                        >

                            Phone

                        </Text>

                    </View>




                </View>
                <TouchableOpacity>
                    <View
                        style={{
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
                            marginBottom: 12,
                            marginHorizontal: 8


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
                                01021053778
                            </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Addresses', {
                                        addState: 'phone'
                                    })
                                }}
                            >
                                <AntDesign name="edit" size={18} color="black" />

                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableOpacity>

                <View
                    style={{
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
                        marginVertical: 22,
                        marginHorizontal: 8


                    }}

                >
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginBottom: 12
                        }}
                    >
                        <Text>
                            Subtotal

                            <Text
                                style={{
                                    color: "gray"
                                }}
                            >{' '}(2 items)</Text>
                        </Text>
                        <Text>
                            EGP 300
                        </Text>

                    </View>


                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            paddingBottom: 12,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                            marginBottom: 12

                        }}
                    >
                        <Text>Shipping</Text>
                        <Text
                            style={{
                                color: 'green'
                            }}
                        >Free</Text>

                    </View>
                    <View
                        style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold'
                            }}

                        >
                            Total
                        </Text>
                        <Text
                            style={{
                                fontWeight: 'bold'
                            }}

                        >
                            EGP 300
                        </Text>

                    </View>

                </View>
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

export default CheckoutScreen1