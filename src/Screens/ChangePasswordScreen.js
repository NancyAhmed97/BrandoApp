import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../Common/CommonHeader'
import CommonButton from '../Common/CommonButton'
import ProfileHeader from '../Common/ProfileHeader'

const ChangePasswordScreen = () => {
    const [currentPassword, setCurrentPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    return (
        <View
            style={{
                paddingVertical: Dimensions.get('screen').height / 20,
                paddingHorizontal: Dimensions.get('screen').height / 38,
                flex: 1,
            }}
        >
            <CommonHeader
                headerState="Change Password"
            />
            <View
                style={{
                    marginTop: Dimensions.get('screen').height / 10
                }}
            >
                <View
                    style={{
                        paddingHorizontal: Dimensions.get('screen').width / 20,
                        paddingVertical: Dimensions.get('screen').width / 35,
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        shadowColor: '#171717',
                        shadowOffset: { width: -2, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 3,

                    }}
                >
                    <View
                        style={{
                            paddingVertical: 10,
                            marginBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1
                        }}
                    >
                        <Text
                            style={{
                                marginBottom: 7
                            }}
                        >
                            current Password

                        </Text>
                        <ProfileHeader
                            icon={''}
                            label={'Enter your email address'}
                            height={Dimensions.get('screen').height / 30}
                            iconHeight={24}
                            iconWidth={24}
                            positionTop={''}
                            positionLeft={''}
                            changeValue={(text) => setCurrentPassword(text)}
                            value={currentPassword}
                            secureTextEntry={false}
                            keyboardType={''}


                        />
                    </View>

                    <View
                        style={{
                            paddingVertical: 10,
                            marginBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1
                        }}
                    >
                        <Text
                            style={{
                                marginBottom: 7
                            }}
                        >
                            New Password
                        </Text>
                        <ProfileHeader
                            icon={require("../assets/User.png")}
                            label={' New Password'}
                            height={Dimensions.get('screen').height / 30}
                            iconHeight={24}
                            iconWidth={24}
                            positionTop={15}
                            positionLeft={12}
                            changeValue={(text) => setNewPassword(text)}
                            value={newPassword}
                            secureTextEntry={false}
                            keyboardType={''}

                        />
                    </View>
                    <View
                        style={{
                            paddingVertical: 10,
                            marginBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1


                        }}
                    >
                        <Text
                            style={{
                                marginBottom: 7
                            }}
                        >
                            Confirm Password
                        </Text>
                        <ProfileHeader
                            icon={require("../assets/User.png")}
                            label={'Phone Number'}
                            height={Dimensions.get('screen').height / 30}
                            iconHeight={24}
                            iconWidth={24}
                            positionTop={15}
                            positionLeft={12}
                            changeValue={(text) => setConfirmPassword(text)}
                            value={confirmPassword}
                            secureTextEntry={false}
                            keyboardType={''}

                        />
                    </View>
                </View>
                <CommonButton
                    title={'save'}
                    height={55}
                    width={'100%'}
                    fontsize={20}
                    fontweight={"600"}
                    textalign={'center'}
                    margintop={25}
                    marginbottom={50}
                    color={'#fff'}
                    background={'#542689'}
                    borderreduis={4}
                    changeFuncation={() => { navigation.navigate('Login') }}
                />
            </View>
        </View>
    )
}

export default ChangePasswordScreen