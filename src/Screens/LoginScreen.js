import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CommonInput from '../Common/CommonInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation=useNavigation();
    const submitLogin=()=>{
        navigation.navigate('home')
    }
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
                    icon={require("../assets/User.png")}
                    label={'Username or Email'}
                    height={Dimensions.get('screen').height / 14.79}
                    iconHeight={24}
                    iconWidth={24}
                    positionTop={15}
                    positionLeft={12}

                />
                <CommonInput
                    icon={require("../assets/Group2.png")}
                    label={'Password'}
                    height={Dimensions.get('screen').height / 14.79}
                    iconHeight={22}
                    iconWidth={17}
                    margintop={25}
                    positionTop={42}
                    positionLeft={12}
                    secondIcon={require("../assets/eye.png")}
                    secondIconHeight={20}
                    secondIconWidth={20}


                />
                <TouchableOpacity
                    style={{
                        marginTop: 10

                    }}
                    onPress={()=>{
                        navigation.navigate('forgetPassword')
                    }}
                    
                >
                    <Text
                        style={{
                            textAlign: 'right',
                            color: "#8144AA",
                            fontSize: 13,
                            fontWeight: '400'
                        }}
                    >
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <CommonButton
                    title={'Login'}
                    height={55}
                    width={'100%'}
                    fontsize={20}
                    fontweight={"600"}
                    textalign={'center'}
                    margintop={50}
                    marginbottom={50}
                    color={'#fff'}
                    background={'#542689'}
                    borderreduis={4}
                    changeFuncation={submitLogin}
                />
                <View>
                    <Text
                        style={{
                            textAlign: 'center',
                            width: '100%',
                            color: '#575757',
                            fontSize: 13,
                            fontWeight: '500',

                        }}
                    >
                        - OR Continue with -
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 25
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginRight: 12
                            }}
                        >
                            <Image
                                source={require('../assets/Google.png')}

                            />
                        </TouchableOpacity>
                        <TouchableOpacity

                            style={{
                                marginRight: 12
                            }}>
                            <Image
                                source={require('../assets/Facebook.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Facebook (1).png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                marginTop: 25,
                                color: '#575757',
                                fontSize: 15,
                                fontWeight: '400',
                            }}

                        >
                            Create An Account
                        </Text>
                        <TouchableOpacity
onPress={()=>{
    navigation.navigate('Signup')
}}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    marginTop: 25,
                                    color: '#8144AA',
                                    fontSize: 15,
                                    fontWeight: '600',
                                    marginLeft: 7,
                                    textDecorationLine: 'underline'
                                }}

                            >
                                Sign Up
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
}