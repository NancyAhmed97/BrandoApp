// import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
// import React from 'react'
// import MainNavbar from '../Common/MainNavbar'

// const SearchScreen = ({ navigation }) => {
//   const categouries = [
//     { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
//     { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
//     { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
//     { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
//     { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
//     { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
//     { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
//     { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },


//   ]

//   return (
//     <View
//       style={{
//         flex: 1,
//         paddingHorizontal: Dimensions.get('screen').width / 30
//       }}
//     >
//       <MainNavbar />
//       <Text
//         style={{
//           fontSize: 16,
//           fontWeight: '600',
//           color: '#322068',
//           marginBottom: 22

//         }}
//       >
//         Categories
//       </Text>
//       <ScrollView>
//         <View
//           style={{
//             flexWrap: 'wrap',
//             flexDirection: 'row',
//             justifyContent: 'space-between'
//           }}
//         >
//           {categouries.map((cat, indx) => {
//             return (
//               <TouchableOpacity
//                 style={{
//                   width: Dimensions.get('screen').width / 5,
//                   marginBottom: 18,
//                 }}
//                 onPress={() => {
//                   navigation.navigate('ProductsList',{
//                     id:cat.id,
//                     name:cat.name
//                   })
//                 }}
//               >
//                 <View
//                   style={{
//                     width: Dimensions.get('screen').width / 5,
//                     height: Dimensions.get('screen').height / 10.8,
//                   }}
//                 >
//                   <Image source={cat.img}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       borderRadius: '50%'

//                     }}
//                   />
//                 </View>
//                 <Text
//                   style={{
//                     alignSelf: 'center',
//                     marginTop: 3
//                   }}
//                 >{cat.name}</Text>
//               </TouchableOpacity>
//             )
//           })}
//         </View>

//       </ScrollView>
//     </View>
//   )
// }

// export default SearchScreen
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import List from "../Common/List";
import MainNavbar from '../Common/MainNavbar'
import SearchBar from "../Common/SearchBar";
const SearchScreen = () => {
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
    <SafeAreaView style={styles.root}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {clicked ?

        <List
          searchPhrase={searchPhrase}
          data={fakeData}
          setClicked={setClicked}
        />
        :
        <Text>kfjlkfdjfdkl</Text>
      }
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },

});


export default SearchScreen