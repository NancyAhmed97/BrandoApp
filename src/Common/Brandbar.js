import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native'
import CommonButton from "./CommonButton"
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Brandbar = () => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                paddingBottom: 22
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingBottom: 22,
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 19,
                        fontWeight: '600'
                    }}
                >
                    All Brands
                </Text>
                <CommonButton
                    title={'View All'}
                    height={30}
                    width={85}
                    fontsize={12}
                    fontweight={"500"}
                    textalign={'center'}
                    margintop={0}
                    marginbottom={0}
                    color={'#fff'}
                    background={'#542689'}
                    borderreduis={4}
                    changeFuncation={() => { navigation.navigate('brands') }}

                />
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            >
                <View
                    style={{
                        width: Dimensions.get('screen').width / 5.5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('branddetails')
                        }}
                    >
                        <Image
                            source={require('../assets/Ellipse 4.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 7,
                                fontSize: 12,
                                fontWeight: '400'
                            }}
                        >Brand 1</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        width: Dimensions.get('screen').width / 5.5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Ellipse 4.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 7,
                                fontSize: 12,
                                fontWeight: '400'
                            }}
                        >Brand 1</Text>
                    </TouchableOpacity>
                </View>


                <View
                    style={{
                        width: Dimensions.get('screen').width / 5.5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Ellipse 4.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 7,
                                fontSize: 12,
                                fontWeight: '400'
                            }}
                        >Brand 1</Text>
                    </TouchableOpacity>
                </View>



                <View
                    style={{
                        width: Dimensions.get('screen').width / 5.5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Ellipse 4.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 7,
                                fontSize: 12,
                                fontWeight: '400'
                            }}
                        >Brand 1</Text>
                    </TouchableOpacity>
                </View>


                <View
                    style={{
                        width: Dimensions.get('screen').width / 5.5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Ellipse 4.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 7,
                                fontSize: 12,
                                fontWeight: '400'
                            }}
                        >Brand 1</Text>
                    </TouchableOpacity>
                </View>





                <View
                    style={{
                        width: Dimensions.get('screen').width / 5.5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Ellipse 4.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 7,
                                fontSize: 12,
                                fontWeight: '400'
                            }}
                        >Brand 1</Text>
                    </TouchableOpacity>
                </View>



                <View
                    style={{
                        width: Dimensions.get('screen').width / 5.5,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity>
                        <Image
                            source={require('../assets/Ellipse 4.png')}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 7,
                                fontSize: 12,
                                fontWeight: '400'
                            }}
                        >Brand 1</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default Brandbar