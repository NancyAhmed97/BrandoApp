import { View, Text, TextInput } from 'react-native'
import React from 'react'

const ProfileHeader = ({
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
                    backgroundColor: "#fff",
                    height: height,
                    paddingRight: 12,
                    fontSize: 12,
                    fontWeight: '500',
                    color: '#676767',
                    paddingLeft: 10,
                    paddingVertical:27,
                    marginTop: margintop ? margintop : 0
                }}
                onChangeText={changeValue}
                value={value}
                secureTextEntry={showPassword&&showPassword}
                keyboardType={keyboardType&&keyboardType}
            />   
             </View>
  )
}

export default ProfileHeader