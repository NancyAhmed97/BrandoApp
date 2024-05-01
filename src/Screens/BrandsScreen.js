import { View, Text, Dimensions, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../Common/CommonHeader'

const BrandsScreen = ({navigation}) => {
    const brandsItems = [
        { id: 1, name: 'brand1', img: require('../assets/Ellipse 12.png') },
        { id: 1, name: 'brand2', img: require('../assets/Ellipse 12.png') },
        { id: 1, name: 'brand3', img: require('../assets/Ellipse 12.png') },
        { id: 1, name: 'brand4', img: require('../assets/Ellipse 12.png') },
        { id: 1, name: 'brand5', img: require('../assets/Ellipse 12.png') },
        { id: 1, name: 'brand6', img: require('../assets/Ellipse 12.png') },
        { id: 1, name: 'brand7', img: require('../assets/Ellipse 12.png') },
        { id: 1, name: 'brand8', img: require('../assets/Ellipse 12.png') },
    ];
    const renderItem = ({ item }) => {
        console.log(item);
        return (
            <TouchableOpacity
                style={{
                    width: "49%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 12,
                    backgroundColor: '#fff',
                    marginRight: 7,
                    padding: 22,
                    borderRadius: 12
                }}
                onPress={()=>navigation.navigate('ProductsList',{
                    "name":item.name,
                    "id":item.id
                })}
            >
                <View
                    style={{
                        width: 75,
                        height: 75
                    }}
                >
                    <Image source={item.img} />
                    <Text
                        style={{
                            marginTop: 7,
                            alignSelf: 'center'

                        }}
                    >{item.name}</Text>

                </View>
            </TouchableOpacity>
        )
    }
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
                headerState={'Our Brands'}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <FlatList
                    key={`FlatList-${2}`}
                    data={brandsItems}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
        </View>
    )
}

export default BrandsScreen