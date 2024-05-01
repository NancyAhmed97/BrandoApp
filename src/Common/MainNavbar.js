import { View, Text, SafeAreaView, StyleSheet, TextInput, Button, Keyboard, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import List from "../Common/List";
import { Feather, Entypo } from "@expo/vector-icons";
import { Colors } from '../Constants/Colors';

const MainNavbar = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();
    useEffect(() => {
        const getData = async () => {
            const apiResponse = await fetch(
                "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
            );
            const data = await apiResponse.json();
            setFakeData(data);
        };
        getData();
    }, []);
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            {!clicked &&
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop:Dimensions.get('screen').height/19


                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: Colors.primary
                        }}
                    >Brando</Text>
                </View>
            }

            <SafeAreaView style={styles.root}>


                <View style={styles.container}>
                    <View
                        style={
                            clicked
                                ? styles.searchBar__clicked
                                : styles.searchBar__unclicked
                        }
                    >
                        {/* search Icon */}
                        <Feather
                            name="search"
                            size={20}
                            color="black"
                            style={{ marginLeft: 1 }}
                        />
                        {/* Input field */}
                        <TextInput
                            style={styles.input}
                            placeholder="Search"
                            value={searchPhrase}
                            onChangeText={setSearchPhrase}
                            onFocus={() => {
                                setClicked(true);
                            }}
                        />
                        {/* cross Icon, depending on whether the search bar is clicked or not */}
                        {clicked && (
                            <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
                                setSearchPhrase("")
                            }} />
                        )}
                    </View>
                    {/* cancel button, depending on whether the search bar is clicked or not */}
                    {clicked && (
                        <View>
                            <Button
                                title="Cancel"
                                onPress={() => {
                                    Keyboard.dismiss();
                                    setClicked(false);
                                }}
                            ></Button>
                        </View>
                    )}
                </View>
                {clicked &&

                    <List
                        searchPhrase={searchPhrase}
                        data={fakeData}
                        setClicked={setClicked}
                    />
                }
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        justifyContent: "center",
        alignItems: "center",

    },
    container: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "89%",

    },
    searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
    },
    searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },


});

export default MainNavbar