import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = ({
    height,
    width,
    fontsize,
    fontweight,
    textalign,
    margintop,
    marginbottom,
    title,
    color,
    background,
    borderreduis,
    changeFuncation,
    price,
    alignSelf



}) => {
    return (

        <TouchableOpacity
            style={{
                height: height,
                width: width,
                marginTop: margintop,
                marginBottom: marginbottom,
                backgroundColor: background,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: borderreduis,
                alignSelf: alignSelf,
            }}
            onPress={changeFuncation}
        >
            <Text
                style={{
                    fontSize: fontsize,
                    fontWeight: fontweight,
                    textAlign: textalign,
                    color: color
                }}
            >
                {title}
            </Text>
            {price &&
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: 500,
                        textAlign: textalign,
                        color: color,
                        marginTop: 3
                    }}
                >
                    {price}
                </Text>
            }
        </TouchableOpacity>

    )
}

export default CommonButton