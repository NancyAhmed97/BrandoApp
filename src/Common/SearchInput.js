import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const SearchInput = ({ text }) => {
    return (
        <View
        style={{
            paddingBottom:22

        }}
        >
            <TextInput
                style={{
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    height: 40,
                    shadowColor: 'rgba(0, 0, 0, 0.04)',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    paddingHorizontal: 50


                }}
                placeholder={text}
            />
            <TouchableOpacity
                style={{
                    position: "absolute",
                    top: 7,
                    left: 10

                }}
            >
                <Image
                    source={require('../assets/searchIcon.png')}
                    style={{
                        width: 25,
                        height: 25,

                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput