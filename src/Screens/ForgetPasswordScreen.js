import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CommonInput from '../Common/CommonInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
const ForgetPasswordScreen = () => {
    const navigation = useNavigation()

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: Dimensions.get('screen').width / 11.73,
            paddingTop: Dimensions.get('screen').height / 12.9
        }}>

            <View>
                <Text
                    style={{
                        fontSize: 29,
                        fontWeight: '700',
                        lineHeight: 43,

                    }}
                >Welcome </Text>
                <Text
                    style={{
                        fontSize: 29,
                        fontWeight: '700',
                        lineHeight: 43,

                    }}
                >Back!
                </Text>

            </View>
            <View
                style={{
                    marginTop: 22
                }}
            >
                <CommonInput
                    icon={require("../assets/Mail.png")}
                    label={'Enter your email address'}
                    height={Dimensions.get('screen').height / 14.79}
                    iconHeight={24}
                    iconWidth={24}
                    positionTop={15}
                    positionLeft={12}

                />
                <TouchableOpacity
                    style={{
                        marginTop: 25

                    }}


                >
                    <Text
                        style={{
                            textAlign: 'right',
                            fontSize: 13,
                            fontWeight: '400',
                            textAlign: "center"
                        }}
                    >
                        <Text
                            style={{ color: 'red', marginRight: 10 }}
                        >*</Text>
                        We will send you a message to set or reset your new password                </Text>
                </TouchableOpacity>
                <CommonButton
                    title={'Submit'}
                    height={55}
                    width={'100%'}
                    fontsize={20}
                    fontweight={"600"}
                    textalign={'center'}
                    margintop={75}
                    marginbottom={50}
                    color={'#fff'}
                    background={'#542689'}
                    borderreduis={4}
                    changeFuncation={()=>{navigation.navigate('Login')}}
                />

            </View>
        </View>
    )
}

export default ForgetPasswordScreen