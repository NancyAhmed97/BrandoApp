// import React, { Component } from 'react'
// import { Dimensions, StyleSheet, Text, View } from 'react-native'

// export class SplashScreen extends Component {
//   render() {
//     return (
//       <View style={styles.contanier}>
//         <Text style={styles.splashText}> brando </Text>
//       </View>
//     )
//   }
// }

// export default SplashScreen;
// const styles = StyleSheet.create({
//     contanier:{
//         backgroundColor:"#542689",
//         height:Dimensions.get('window').height,
//         justifyContent:"center",
//         alignItems:'center'

//     },
//     splashText:{
//         color:"#C574DD",

//     }
//   });


import { View, Text, StyleSheet, Dimensions, Animated, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const checkLogin = async () => {
            const timer = setTimeout(() => {
                navigation.replace('Main');
            }, 4000);
            return () => clearTimeout(timer);


            // try {

            // 	const token = await AsyncStorage.getItem("login");
            // 	if (token) {
            // 		const timer = setTimeout(() => {
            // 			navigation.replace('MainHome');
            // 		}, 3000);
            // 		return () => clearTimeout(timer);

            // 	} else {
            // 		const timer = setTimeout(() => {
            // 			navigation.replace('SplashTwo');
            // 		}, 3000);
            // 		return () => clearTimeout(timer);

            // 	}
            // } catch (err) {
            // 	Alert.alert(err)
            // }
        };
        checkLogin();


    }, [])
    const FadeInView = props => {
        const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

        useEffect(() => {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true,
            }).start();
        }, [fadeAnim]);

        return (
            <Animated.View // Special animatable View
                style={{
                    ...props.style,
                    opacity: fadeAnim, // Bind opacity to animated value
                }}>
                {props.children}
            </Animated.View>
        );
    };

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#322068"
            }}>
            <FadeInView
                style={{
                    backgroundColor: 'powderblue',
                }}>
                <Image source={require('../assets/logo.png')} />
            </FadeInView>
        </View>

    )
}

export default SplashScreen;
const styles = StyleSheet.create({
    contanier: {
        backgroundColor: "#542689",
        height: Dimensions.get('window').height,
        justifyContent: "center",
        alignItems: 'center'

    },
    splashText: {
        color: "#C574DD",

    }
});

