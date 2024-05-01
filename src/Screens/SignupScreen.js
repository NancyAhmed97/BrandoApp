import { View, Text, Dimensions, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import CommonInput from '../Common/CommonInput';
import CommonButton from '../Common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
const SignupScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [showCheckPassword, setShowCheckPassword] = useState(true)
    const [terms, setTerms] = useState(true)
    const handdleSubmite=async()=>{
     
        if(!email || !password || !checkPassword){
            Alert.alert('please fill all field')
        }else if(password !== checkPassword){
            Alert.alert('password does not match')
        }else if(!terms){
            Alert.alert('Please accept our terms')
        }else{
                const response = await axios.post(`https://ecommerce-j0hf.onrender.com/signup`,{
                    email:email,
                    password:password,
                    name:name
                });
                console.log(response.data);

                if (response.status === 200) {
                    console.log(response.data);
                }



//             try {
//                 const response = await axios.post(`https://ecommerce-j0hf.onrender.com`,{
//                     email:email,
//                     password:password,
//                     name:name
//                 });
//                 if (response.status === 200) {
// console.log(response.data);
//                 }
        
//               } catch (err) {
//                 Alert.alert(err)
//               }
        }
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
                >
                    Create an account


                </Text>
           

            </View>
            <View
                style={{
                    marginTop: 22
                }}
            >
                <CommonInput
                    icon={require("../assets/User.png")}
                    label={'Email Address'}
                    height={Dimensions.get('screen').height / 14.79}
                    iconHeight={24}
                    iconWidth={24}
                    positionTop={15}
                    positionLeft={12}
                    changeValue={(text) =>setEmail(text)}
                    value={email}
                    secureTextEntry={false}
                    keyboardType ={'email-address'}

                />
                       <CommonInput
                    icon={require("../assets/User.png")}
                    label={'user name'}
                    height={Dimensions.get('screen').height / 14.79}
                    iconHeight={24}
                    iconWidth={24}
                    margintop={25}
                    positionTop={40}
                    positionLeft={12}
                    changeValue={(text) => { setName(text) }}
                    value={name}
                    secureTextEntry={false}
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
                    changeValue={(text) => { setPassword(text) }}
                    value={password}
                    secureTextEntry={true}
                    showPasswordFun={() => setShowPassword(!showPassword)}
                    showPassword={showPassword}

                />

                <CommonInput
                    icon={require("../assets/Group2.png")}
                    label={'check password'}
                    height={Dimensions.get('screen').height / 14.79}
                    iconHeight={22}
                    iconWidth={17}
                    margintop={25}
                    positionTop={42}
                    positionLeft={12}
                    secondIcon={require("../assets/eye.png")}
                    secondIconHeight={20}
                    secondIconWidth={20}
                    changeValue={(text) => { setCheckPassword(text) }}
                    value={checkPassword}
                    secureTextEntry={true}
                    showPasswordFun={() => setShowCheckPassword(!showCheckPassword)}
                    showPassword={showCheckPassword}



                />
                <TouchableOpacity
                    style={{
                        marginTop: 10

                    }}
                >
                    <Text
                        style={{
                            textAlign: 'left',
                            color: "#8144AA",
                            fontSize: 13,
                            fontWeight: '400'
                        }}
                    >
                        Agree terms & conditions                     </Text>
                </TouchableOpacity>
                <CommonButton
                    title={'Create Account'}
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
                    changeFuncation={handdleSubmite}

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
                            I Already Have an Account
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Login')
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
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default SignupScreen