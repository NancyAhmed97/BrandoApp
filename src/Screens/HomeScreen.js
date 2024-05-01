import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import getAllUser from '../Services/homeService'
// import Brandbar from '../Common/Brandbar'
import MainNavbar from '../Common/MainNavbar'
import Carousel from 'react-native-snap-carousel';
import Products from "../Common/Products.json"
import ProductCart from '../Components/ProductCart';
import { AntDesign } from '@expo/vector-icons';
const HomeScreen = ({ navigation }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [numColumns, setNumColumns] = useState(2);
  const handleDataFromChild = (data) => {
    setShowMenu(data);
  };
  const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
  ];
  const SaleArray = [
    { img: require('../assets/Small banner.png') },
    { img: require('../assets/Small banner.png') },
    { img: require('../assets/Small banner.png') },
  ];
  const renderItem = ({ item }) => (

    <View
    style={{
      marginRight:7,
      width:'49%'
    }}
    >
      <ProductCart
        id={item.id}
        img={item.img}
        name={item.name}
        desc={item.desc}
        price={item.price}
        startingValue={item.startingValue}
        numberOfRating={item.numberOfRating}
        brandName={item.brandName}
        state={'wishList'}
        brandId={item.brandId}
        navigationState={'ProductDetails'}
      />
    </View>
  );
  const bannerRenderItem = ({ item }) => (

    <TouchableOpacity
      style={{
        marginBottom: 30, marginLeft: 0
      }}
      onPress={() => {
        navigation.navigate("ProductList", {
          id: "id"
        })
      }}
    >
      <Image
        source={item.img}
      />
    </TouchableOpacity>
  );

  useEffect(() => {
    getAllUser('anancyahmed97@icloud.com', 'Na123456@')
  }, [])
  const categouries = [
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },
    { id: 1, img: require('../assets/image4.1.png'), name: 'blouse' },


  ]


  return (
    <View
      style={{
        paddingHorizontal: Dimensions.get('screen').width / 30,


      }}
    >
      <MainNavbar />

      <ScrollView
        showsVerticalScrollIndicator={false}


      >
        <Carousel
          data={SaleArray}
          renderItem={bannerRenderItem}
          sliderWidth={400}
          itemWidth={370}
          activeSlideAlignment={'start'}
          loop={true}
          autoplay={true}

        />
            <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 12
            }}
          >
            Our Brands
          </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {categouries.slice(0,4).map((brand, index) => {
            return (

              <TouchableOpacity
                style={{
                  width: Dimensions.get('screen').width / 6,
                  marginRight: 7
                }}

                onPress={() => {
                  navigation.navigate('ProductList', {
                    "id": brand.id,
                    "name": brand.name
                  })
                }}
                key={index}
              >
                <View
                  style={{
                    width: Dimensions.get('screen').width / 6,
                    height: Dimensions.get('screen').height / 11.8,
                  }}
                >
                  <Image source={brand.img}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: "50%"

                    }}
                  />
                </View>
                <Text
                  style={{
                    alignSelf: 'center',
                    marginTop: 3
                  }}
                >{brand.name}</Text>
              </TouchableOpacity>


            )
          })}
          <TouchableOpacity
          style={{
            justifyContent:'center',
            alignItems:'center'
          }}
          onPress={()=>navigation.navigate('Brand')}
          >
            <AntDesign name="arrowright" size={24} color="black" />
            <Text
            style={{
              fontSize:12
            }}
            >View More</Text>
          </TouchableOpacity>
        </ScrollView>

        <View
          style={{
            marginVertical: Dimensions.get('screen').height / 20
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 12
            }}
          >
            Popular Products
          </Text>
     
          <FlatList
            key={`FlatList-${numColumns}`}
            data={Products}
            numColumns={numColumns}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>



        <View
          style={{
            marginBottom: Dimensions.get('screen').height / 7,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 12
            }}
          >
            Sale Products
          </Text>
          <FlatList
            key={`FlatList-${numColumns}`}
            data={Products}
            numColumns={numColumns}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>

  )
}

export default HomeScreen