import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Rating } from 'react-native-ratings';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const ProductCart = ({
    id,
    img,
    name,
    desc,
    price,
    startingValue,
    numberOfRating,
    brandName,
    state,
    brandId,
    navigationState

}) => {
    const [favState, setFavState] = useState(true)
    const navigation = useNavigation();
    const handdleFav = () => {
        setFavState(!favState)
    }
    return (
        <TouchableOpacity
            style={{
                marginBottom: 17
            }}
            onPress={() => {
                navigation.navigate(navigationState, {
                    id: id
                })
            }}
        >
            <View
                style={{
                    position: 'relative'
                }}
            >
                <Image
                    source={require('../assets/image 15.png')}
                    style={{
                        width: '100%',
                        height: 200,
                        borderTopRightRadius: 8,
                        borderTopRightRadius: 8
                    }}
                />
                {state === "wishList" &&
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: 7,
                            right: 7,
                            backgroundColor: 'white',
                            width: 35,
                            height: 35,
                            borderRadius: "50%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: '#171717',
                            shadowOffset: { width: -2, height: 4 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,

                        }}
                        onPress={handdleFav}
                    >
                        {favState ?
                            <Ionicons name="heart" size={25} color="#9754BB" />
                            :
                            <Ionicons name="heart-outline" size={25} color="#9754BB" />

                        }
                    </TouchableOpacity>
                }
            </View>
            <View
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    borderBottomEndRadius: 8,
                    borderBottomStartRadius: 8,
                    padding: 18

                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 7,
                        alignItems: 'center'

                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('branddetails', {
                                brandId: brandId
                            })
                        }}
                    >

                        <Text
                            style={{
                                color: '#9754BB',
                                fontSize: 15,
                                fontWeight: '500'
                            }}
                        >
                            {brandName}

                        </Text>
                    </TouchableOpacity>

                    <Text
                        style={{
                            marginLeft: 5,
                            color: 'rgba(0, 0, 0, 1)',
                            fontSize: 12,
                            fontWeight: '500'
                        }}
                    >
                        {name}
                    </Text>
                </View>
                <Text
                    style={{
                        marginBottom: 7,
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 9,
                        fontWeight: '400'
                    }}
                >
                    {desc}
                </Text>
                <Text
                    style={{
                        marginBottom: 7,
                        color: 'rgba(0, 0, 0, 1)',
                        fontSize: 12,
                        fontWeight: '500'
                    }}
                >
                    {price}
                </Text>
                <View
                    style={{ flexDirection: 'row' }}
                >
                    <Rating
                        ratingCount={6}
                        imageSize={13}
                        readonly={true}
                        startingValue={startingValue}
                    />
                    <Text
                        style={{
                            marginLeft: 4,
                            color: 'rgba(164, 169, 179, 1)',
                            fontSize: 10,
                            fontWeight: '400'
                        }}
                    >
                        {numberOfRating}
                    </Text>

                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCart