import { View, Text, Dimensions, ScrollView, TouchableOpacity, FlatList,SafeAreaView,Image } from 'react-native'
import React, { useState } from 'react'
import MainNavbar from '../Common/MainNavbar'

const CategoriesScreen = ({navigation}) => {
    const [categoryState, setCategoryState] = useState(1)

    const catItem = [
        { id: 1, name: 'clothes' },
        { id: 2, name: 'cat2' },
        { id: 3, name: 'cat3' },
        { id: 4, name: 'cat4' },
        { id: 5, name: 'cat5' },
        { id: 6, name: 'cat6' },
        { id: 7, name: 'cat7' },
        { id: 8, name: 'cat8' },

    ]
    const CategoryItems = [
        { id: 1, name: 'Dress', img: require('../assets/Ellipse 12.png') },
        { id: 2, name: 'Jeans', img: require('../assets/Ellipse 12 (1).png') },
        { id: 3, name: 'Pants', img: require('../assets/Ellipse 19.png') },
        { id: 4, name: 'Shoes', img: require('../assets/Ellipse 13.png') },
        { id: 5, name: 'Makeup', img: require('../assets/Ellipse 14.png') },
        { id: 6, name: 'Pyjamas', img: require('../assets/Ellipse 20.png') },
    ]
    const FlatItem = (items) => {
        return (
            <TouchableOpacity
                style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginRight:22,
                    marginVertical:Dimensions.get('window').height/75

                }}
                onPress={() => navigation.navigate('ProductsList', {
                    'name': items.title.name,
                    "id":items.title.id
                })}   
                            >
                <Image source={items.title.img} />
                <Text
                style={{
                    fontWeight:'400',
                    fontSize:14,
                    marginTop:5
                }}
                >{items.title.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View
            style={{


            }}
        >
            <View
                style={{
                    paddingHorizontal: Dimensions.get('screen').width / 30,

                }}
            >

                <MainNavbar />
            </View>

            <View
                style={{
                    flexDirection: 'row'
                }}
            >
                <View
                    style={{
                        width: '30%'
                    }}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
               
                    >
                        {
                            catItem.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => setCategoryState(item.id)}
                                        style={{
                                            backgroundColor: categoryState === item.id ? 'rgba(174, 100, 204, 1)' : 'rgba(245, 245, 245, 1)'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                paddingVertical: Dimensions.get('window').height / 55,
                                                fontSize: 14,
                                                fontWeight: '400',
                                                color: categoryState === item.id ? 'rgba(255, 255, 255, 1)' : 'rgba(3, 3, 3, 1)'

                                            }}
                                        >{item.name}</Text>

                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>

                <View
                           style={{
                            paddingVertical: Dimensions.get('window').height / 100,
                            paddingHorizontal: Dimensions.get('window').height / 75,
                        }}
                >
                <ScrollView
                            showsVerticalScrollIndicator={false}>
                            <SafeAreaView
                                style={{

                                    flex: 1,
                                    marginTop: 0,

                                }}
                            >



                                <FlatList
                                    data={CategoryItems}
                                    numColumns={3}
                                    renderItem={({ item }) => <FlatItem title={item} />}
                                    keyExtractor={item => item.id}
                                />
                            </SafeAreaView>
                        </ScrollView>

                </View>
            </View>
        </View>
    )
}

export default CategoriesScreen