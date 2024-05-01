import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../Common/CommonHeader'
import {
    AntDesign,
    Entypo,
} from "@expo/vector-icons";
import { Colors } from '../Constants/Colors';
import { useNavigation } from '@react-navigation/native';

const MyOrdersScreen = () => {
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
                headerState="My Orders"
            />
            <ScrollView>



                <TouchableOpacity
                    onPress={() => navigation.navigate('OrderDetais',{
                        id:"id"
                    })}
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
                                justifyContent: 'space-between',
                                marginBottom: 18
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    marginBottom: 7
                                }}
                            >
                                Order №1947034
                            </Text>


                            <Text
                                style={{
                                    color: '#9B9B9B',
                                    fontSize: 12
                                }}
                            >05-12-2019</Text>
                        </View>


                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 18
                            }}
                        >
                            <Text
                                style={{
                                    marginBottom: 7,
                                    fontSize: 12,
                                    color: '#9B9B9B'
                                }}
                            >
                                Quantity:<Text
                                    style={{
                                        color: "#000",
                                        fontWeight: 'bold'
                                    }}
                                >{" "}3</Text>
                            </Text>


                            <Text
                                style={{
                                    marginBottom: 7,
                                    fontSize: 12,
                                    color: '#9B9B9B'
                                }}
                            >
                                total Amount:
                                <Text
                                    style={{
                                        color: "#000",
                                        fontWeight: 'bold',
                                        fontSize:12
                                    }}
                                >{" "}EGP 300</Text>
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontWeight: '400',
                                fontSize: 12,
                                fontWeight:'bold',
                                color:'green',
                                alignSelf:'flex-end'
                            }}
                        >
                            Delivered
                        </Text>
                    </View>
                </TouchableOpacity>



                <TouchableOpacity
                    onPress={() => navigation.navigate('OrderDetais',{
                        id:"id"
                    })}
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
                                justifyContent: 'space-between',
                                marginBottom: 18
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    marginBottom: 7
                                }}
                            >
                                Order №1947034
                            </Text>


                            <Text
                                style={{
                                    color: '#9B9B9B',
                                    fontSize: 12
                                }}
                            >05-12-2019</Text>
                        </View>


                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 18
                            }}
                        >
                            <Text
                                style={{
                                    marginBottom: 7,
                                    fontSize: 12,
                                    color: '#9B9B9B'
                                }}
                            >
                                Quantity:<Text
                                    style={{
                                        color: "#000",
                                        fontWeight: 'bold'
                                    }}
                                >{" "}3</Text>
                            </Text>


                            <Text
                                style={{
                                    marginBottom: 7,
                                    fontSize: 12,
                                    color: '#9B9B9B'
                                }}
                            >
                                total Amount:
                                <Text
                                    style={{
                                        color: "#000",
                                        fontWeight: 'bold',
                                        fontSize:12
                                    }}
                                >{" "}EGP 300</Text>
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontWeight: '400',
                                fontSize: 12,
                                fontWeight:'bold',
                                color:'green',
                                alignSelf:'flex-end'
                            }}
                        >
                            Delivered
                        </Text>
                    </View>
                </TouchableOpacity>




                
                <TouchableOpacity
                    onPress={() => navigation.navigate('OrderDetais',{
                        id:"id"
                    })}
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
                                justifyContent: 'space-between',
                                marginBottom: 18
                            }}
                        >
                            <Text
                                style={{
                                    fontWeight: 'bold',
                                    marginBottom: 7
                                }}
                            >
                                Order №1947034
                            </Text>


                            <Text
                                style={{
                                    color: '#9B9B9B',
                                    fontSize: 12
                                }}
                            >05-12-2019</Text>
                        </View>


                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 18
                            }}
                        >
                            <Text
                                style={{
                                    marginBottom: 7,
                                    fontSize: 12,
                                    color: '#9B9B9B'
                                }}
                            >
                                Quantity:<Text
                                    style={{
                                        color: "#000",
                                        fontWeight: 'bold'
                                    }}
                                >{" "}3</Text>
                            </Text>


                            <Text
                                style={{
                                    marginBottom: 7,
                                    fontSize: 12,
                                    color: '#9B9B9B'
                                }}
                            >
                                total Amount:
                                <Text
                                    style={{
                                        color: "#000",
                                        fontWeight: 'bold',
                                        fontSize:12
                                    }}
                                >{" "}EGP 300</Text>
                            </Text>
                        </View>
                        <Text
                            style={{
                                fontWeight: '400',
                                fontSize: 12,
                                fontWeight:'bold',
                                color:'green',
                                alignSelf:'flex-end'
                            }}
                        >
                            Delivered
                        </Text>
                    </View>
                </TouchableOpacity>
       
            </ScrollView>


        </View>
    )
}

export default MyOrdersScreen