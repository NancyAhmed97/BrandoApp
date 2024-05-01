import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import {
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
const CommonHeader = ({ headerState }) => {
    const navigation = useNavigation()
    return (
        <View
            style={{
                justifyContent: "space-between",
                flexDirection: 'row',
                marginTop: Dimensions.get('screen').height / 40,
                marginBottom: Dimensions.get('screen').height / 50,
                alignItems: 'center',

            }}
        >


            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <MaterialCommunityIcons
                    name={"arrow-left"}
                    size={25}
                    color='#000'
                />
            </TouchableOpacity>

            <Text
                style={{
                    fontWeight: '600'
                }}
            >

                {headerState}</Text>
            <Text></Text>

        </View>
    )
}

export default CommonHeader