import { View, Text, Dimensions, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import getAllUser from '../Services/homeService'
// import Brandbar from '../Common/Brandbar'
import MainNavbar from '../Common/MainNavbar'
import Carousel from 'react-native-snap-carousel';
import Products from "../Common/Products.json"
import ProductCart from '../Components/ProductCart';

const HomeScreen = ({ navigation }) => {
  const [showMenu, setShowMenu] = useState(false)

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
    { img: require('../assets/Small banner.png')  },
    { img: require('../assets/Small banner.png')  },
  ];
  const renderItem = ({ item }) => (

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
  );
  const bannerRenderItem = ({ item }) => (

    <TouchableOpacity
  style={{
    marginBottom:30,marginLeft:0
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
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {categouries.map((brand, index) => {
            return (

              <TouchableOpacity
                style={{
                  width: Dimensions.get('screen').width / 5,
                  marginRight: 7
                }}

                onPress={() => {
                  navigation.navigate('BrandDetails', {
                    id: brand.id,
                    name: brand.name
                  })
                }}
                key={index}
              >
                <View
                  style={{
                    width: Dimensions.get('screen').width / 5,
                    height: Dimensions.get('screen').height / 10.8,
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
              marginBottom:12
            }}
          >
            Popular Products
          </Text>
          <Carousel
            data={Products}
            renderItem={renderItem}
            sliderWidth={400}
            itemWidth={170}
            activeSlideAlignment={'start'}
            loop={true}
         
          />
        </View>



        <View
          style={{
            marginBottom:Dimensions.get('screen').height / 7,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom:12
            }}
          >
            Sale Products
          </Text>
          <Carousel
            data={Products}
            renderItem={renderItem}
            sliderWidth={400}
            itemWidth={170}
            activeSlideAlignment={'start'}
            loop={true}
         
          />
        </View>
      </ScrollView>
    </View>

  )
}

export default HomeScreen