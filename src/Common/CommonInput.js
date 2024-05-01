import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonInput = ({
    icon,
    label,
    height,
    iconHeight,
    iconWidth,
    margintop,
    positionTop,
    positionLeft,
    secondIcon,
    secondIconHeight,
    secondIconWidth,
    changeValue,
    value,
    secureTextEntry,
    showPasswordFun,
    showPassword,
    keyboardType
}) => {
    return (
        <View>
            <TextInput
                placeholder={label}
                style={{
                    borderWidth: 1,
                    borderColor: "#A8A8A9",
                    backgroundColor: "#F3F3F3",
                    borderRadius: 10,
                    height: height,
                    paddingRight: 12,
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#676767',
                    paddingLeft: 40,
                    marginTop: margintop ? margintop : 0
                }}
                onChangeText={changeValue}
                value={value}
                secureTextEntry={showPassword&&showPassword}
                keyboardType={keyboardType&&keyboardType}
            />
            {icon&&
            <Image
                source={icon}
                style={{
                    width: iconWidth,
                    height: iconHeight,
                    position: "absolute",
                    top: positionTop,
                    left: positionLeft
                }}
            />
}
            {secondIcon &&
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top: positionTop,
                        right: positionLeft

                    }}
                    onPress={showPasswordFun}
                >
                    <Image
                        source={secondIcon}
                        style={{
                            width: secondIconWidth,
                            height: secondIconHeight,
                        }}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

export default CommonInput