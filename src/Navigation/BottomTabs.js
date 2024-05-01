import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import FavoritesNavigator from './FavoritesNavigator';
import CartNavigator from './CartNavigator';
import SearchNavigator from './SearchNavigator';
import ProfileNavigator from './ProfileNavigator';
import { Colors } from "../Constants/Colors"
import {
    MaterialCommunityIcons,
    AntDesign,
    FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CategouriesNavigation from './CategouriesNavigation';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

    const CustomTabBarButton = ({ children, onPress }) => {
        const [isPressed, setIsPressed] = useState(false);
        const navigation = useNavigation();
        const handleSearchPress = () => {
            navigation.navigate("Cart");
            setIsPressed(!isPressed); // Toggle isPressed state
        };

        const handleLongPress = () => {
            setIsPressed(!isPressed);
        };

        return (
            <View style={styles.plusButtonContainer}>
                {/* Display the SearchSubMenu when isPressed is true */}
                {isPressed && <SearchSubMenu onSelect={(type) => console.log(type)} />}
                <TouchableWithoutFeedback
                    onPress={handleSearchPress}
                    onLongPress={handleLongPress}
                >
                    <View
                        style={[
                            styles.searchButton,
                            isPressed ? { backgroundColor: Colors.primary } : null,
                        ]}
                    >
                        <AntDesign name="search1" size={30} color="#fff" />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    };

    return (
        // <Tab.Navigator
        //     initialRouteName="Home"
        //     screenOptions={{
        //         tabBarShowLabel: false,
        //         headerShown: false,
        //         tabBarStyle: {
        //             elevation: 0,
        //             backgroundColor: "#ffffff",
        //             height: 90,

        //             ...styles.shadow,
        //         },
        //     }}


        // >
        //     <Tab.Screen name="home"
        //         component={HomeNavigator}
        //         options={{
        //             tabBarIcon: ({ focused }) => (
        //                 <View style={styles.tabIconContainer}>
        //                     <MaterialCommunityIcons
        //                         name={focused ? "home" : "home"}
        //                         size={25}
        //                         color={focused ? Colors.primary : "#4B5867"}
        //                     />
        //                     <Text
        //                         style={{
        //                             color: focused ? Colors.primary : "#4B5867",
        //                             fontSize: 12,
        //                         }}
        //                     >
        //                         Home
        //                     </Text>
        //                 </View>
        //             ),
        //         }}

        //     />
        //     <Tab.Screen
        //         name="WishList"
        //         component={FavoritesNavigator}
        //         options={{
        //             tabBarIcon: ({ focused }) => (
        //                 <View style={styles.tabIconContainer}>
        //                     <AntDesign
        //                         name={focused ? "heart" : "heart"}
        //                         size={25}
        //                         color={focused ? Colors.primary : "#4B5867"}
        //                     />
        //                     <Text
        //                         style={{
        //                             color: focused ? Colors.primary : "#4B5867",
        //                             fontSize: 12,
        //                         }}
        //                     >
        //                         WishList
        //                     </Text>
        //                 </View>
        //             ),
        //         }}
        //     />
        //     <Tab.Screen
        //         name="Cart"
        //         component={CartNavigator}
        //         options={{
        //             tabBarButton: (props) => <CustomTabBarButton {...props} />,
        //         }}
        //     />
        //     <Tab.Screen
        //         name="search"
        //         component={FavoritesNavigator}
        //         options={{
        //             tabBarIcon: ({ focused }) => (
        //                 <View style={styles.tabIconContainer}>


        //                     <AntDesign name="search1" size={30} color={focused ? Colors.primary : "#4B5867"} />

        //                     <Text
        //                         style={{
        //                             color: focused ? Colors.primary : "#4B5867",
        //                             fontSize: 12,
        //                         }}
        //                     >
        //                         Search
        //                     </Text>
        //                 </View>
        //             ),
        //         }}


        //     />
        //     <Tab.Screen
        //         name="Profile"
        //         component={ProfileNavigator}
        //         options={{
        //             tabBarIcon: ({ focused }) => (
        //                 <View style={styles.tabIconContainer}>
        //                     <FontAwesome
        //                         name={focused ? "gear" : "gear"}
        //                         size={25}
        //                         color={focused ? Colors.primary : "#4B5867"}
        //                     />

        //                     <Text
        //                         style={{
        //                             color: focused ? Colors.primary : "#4B5867",
        //                             fontSize: 12,
        //                         }}
        //                     >
        //                         Settings
        //                     </Text>
        //                 </View>
        //             ),
        //         }}
        //     />
        // </Tab.Navigator>

        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    elevation: 0,
                    backgroundColor: "#ffffff",
                    height: 90,
                },
            }}


        >

            <Tab.Screen
                name="home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <MaterialCommunityIcons
                                name={focused ? "home" : "home"}
                                size={25}
                                color={focused ? Colors.primary : "#4B5867"}
                            />




                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Wishlist"
                component={FavoritesNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <AntDesign
                                name={focused ? "heart" : "heart"}
                                size={25}
                                color={focused ? Colors.primary : "#4B5867"}
                            />


                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                Wishlist
                            </Text>
                        </View>
                    ),
                }}
            />



            <Tab.Screen
                name="cart"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <MaterialCommunityIcons
                                name={focused ? "cart" : "cart"}
                                size={30}
                                color={focused ? Colors.primary : "#4B5867"}
                            />

                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                Cart
                            </Text>

                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="Categories"
                component={CategouriesNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <AntDesign name="search1" size={30} color={focused ? Colors.primary : "#4B5867"} />
                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                Categories
                            </Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="settings"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <FontAwesome
                                name={focused ? "gear" : "gear"}
                                size={25}
                                color={focused ? Colors.primary : "#4B5867"}
                            />
                            <Text
                                style={{
                                    color: focused ? "#9754BB" : "#4B5867",
                                    fontSize: 12,
                                }}
                            >
                                Setting
                            </Text>
                        </View>
                    ),
                }}
            />

        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: 40,
    },
    sidebarContainer: {
        backgroundColor: "#fff",
        width: 200,
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sidebarItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    sidebarItemText: {
        fontSize: 16,
    },
    contentContainer: {
        flex: 1,
    },

    profileMenuContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    menuButton: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 10,
    },

    shadow: {
        shadowColor: "#7F5D50",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    tabIconContainer: {
        alignItems: "center",
        justifyContent: "center",
        top: 10,
        color: "#4B5867", // Default color
    },
    plusButtonContainer: {
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        top: 0,
        bottom: 50,
        left: 0,
        right: 0,
    },
    searchButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#4B5867", // Default color
        alignItems: "center",
        justifyContent: "center",
    },
    sidebarContainer: {
        backgroundColor: "#fff",
        width: 200,
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});


export default BottomTabs