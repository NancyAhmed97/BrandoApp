import { View, Text, Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import CompoNanbar from '../Common/CompoNanbar'
import PagerView from 'react-native-pager-view';
import products from "../Common/Products.json";
import { Rating } from 'react-native-ratings';
import { Ionicons, Feather } from '@expo/vector-icons';
import CommonButton from "../Common/CommonButton"
import SimilarProducts from '../Components/SimilarProducts';
import ReviewContainer from '../Components/ReviewContainer';
import { useNavigation } from '@react-navigation/native'

const ProductDetails = ({ route }) => {
    const [sizeValue, setSizeValue] = useState(null)
    const [favState, setFavState] = useState(false)
    const [isActionTriggered, setActionTriggered] = useState(false);
    const [deliveryState, setDeliveryState] = useState(1);
    const [colorName, setColorName] = useState('red');
    const [sizeName, setSizeName] = useState('S');
    const [colorState, setColorState] = useState(1);
    const [sizeState, setSizeState] = useState(1);
    const [numColumns, setNumColumns] = useState(5); // Initial number of columns
    const [sizeNumColumns, setSizeNumColumns] = useState(8); // Initial number of columns
    const { id } = route.params;
    const navigation = useNavigation();
    const productDetails = products.filter((item) => item.id == id)
    const addToCart = () => {
        navigation.navigate('Cart')
    }
    const handdleFav = () => {
        setFavState(!favState)
    }
    const handleScroll = (event) => {
        const scrollY = event.nativeEvent.contentOffset.y;
        const specificHeight = 0.01 * Dimensions.get('screen').height; // 40% of the screen height
        if (scrollY >= specificHeight) {
            setActionTriggered(true)
        } else {
            setActionTriggered(false)

        }
    };
    const FlatItem = (items) => {
        return (
            // <Text>{items.title.name}</Text>
            <TouchableOpacity
                style={{
                    marginRight: 12,
                    marginBottom: 12,
                    borderWidth: colorState === items.title.id ? 1 : 0,
                    borderColor: 'rgba(151, 84, 187, 1)',
                    borderRadius: 8
                }}
                onPress={() => {
                    setColorState(items.title.id)
                    setColorName(items.title.name)
                }}
            >
                <Image source={items.title.img} />
            </TouchableOpacity>)
    }
    const SizeFlatItem = (items) => {
        return (
            <TouchableOpacity
                style={{
                    marginRight: 12,
                    marginBottom: 5,
                    borderWidth: sizeState === items.title.id ? 1 : 0,
                    borderColor: 'rgba(151, 84, 187, 1)',
                    borderRadius: 8,
                    padding: 5
                }}
                onPress={() => {
                    setSizeState(items.title.id)
                    setSizeName(items.title.name)
                }}
            >
                <Text>{items.title.name}</Text>
            </TouchableOpacity>
        )
    }
    const colorsItems = [
        { id: 1, name: 'red', img: require('../assets/Rectangle 239.png') },
        { id: 2, name: 'green', img: require('../assets/Rectangle 239.png') },
        { id: 3, name: 'green', img: require('../assets/Rectangle 239.png') },
        { id: 4, name: 'green', img: require('../assets/Rectangle 239.png') },
        { id: 5, name: 'green', img: require('../assets/Rectangle 239.png') },
        { id: 6, name: 'green', img: require('../assets/Rectangle 239.png') },
        { id: 7, name: 'green', img: require('../assets/Rectangle 239.png') },

    ]

    const sizeItems = [
        { id: 1, name: 'S' },
        { id: 2, name: 'M' },
        { id: 3, name: 'XS' },
        { id: 4, name: 'L' },
        { id: 5, name: 'XL' },
        { id: 6, name: 'XXL' },
        { id: 7, name: 'XXXL' },
        { id: 7, name: 'XXXL' },
        { id: 7, name: 'XXXL' },
        { id: 7, name: 'XXXL' },

    ]
    const DeliveryItem = [
        { id: 1, name: 'Standart', days: '5-7 days', price: '$3,00' },
        { id: 2, name: 'Express', days: '1-2 days', price: '$12,00' },
    ]
    console.log(deliveryState);
    return (
        <View
            style={{
                paddingTop: Dimensions.get('screen').height / 20,
                flex: 1,
                marginBottom: Dimensions.get('screen').height / 23,
                backgroundColor: '#fff'
            }}
        >
            <StatusBar

                animated={true}
                backgroundColor="#fff"

            />
            <CompoNanbar />
            <ScrollView
                onScroll={handleScroll}
                scrollEventThrottle={''}

            >
                <PagerView style={styles.container} initialPage={0}>
                    {productDetails[0].imagesArray.map((item, index) => {
                        return (
                            <View style={styles.page} key={index + 1}>
                                <Image source={require('../assets/productImg.png')}

                                />
                            </View>
                        )
                    })}
                </PagerView>

                {/******************* info product ****************************/}
                <View
                    style={{

                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginBottom: 7,
                            alignItems: 'center',
                            paddingHorizontal: Dimensions.get('screen').width / 20,
                            justifyContent: 'space-between'


                        }}
                    >

                        <Text
                            style={{
                                marginLeft: 5,
                                color: 'rgba(0, 0, 0, 1)',
                                fontSize: 20,
                                fontWeight: '700',

                            }}
                        >
                            {productDetails[0].name}
                        </Text>

                        <TouchableOpacity>
                            <Feather name="share-2" size={24} color="black" />

                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 12,
                            paddingHorizontal: Dimensions.get('screen').width / 20,

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                        >BrandName: </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ProductsList', {
                                    "brandId": productDetails[0].brandId,
                                    "name":productDetails[0].brandName
                                })
                            }}
                        >

                            <Text
                                style={{
                                    color: '#9754BB',
                                    fontSize: 16,
                                    fontWeight: '600'
                                }}
                            >
                                {productDetails[0].brandName}

                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 12,
                            paddingHorizontal: Dimensions.get('screen').width / 20,

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                        >Price: </Text>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('branddetails', {
                                    brandId: productDetails[0].brandId
                                })
                            }}
                        >

                            <Text
                                style={{
                                    color: '#9754BB',
                                    fontSize: 16,
                                    fontWeight: '600'
                                }}
                            >
                                {productDetails[0].price}

                            </Text>
                        </TouchableOpacity>
                    </View>



                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 7,
                            paddingHorizontal: Dimensions.get('screen').width / 20,

                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                        >Color : </Text>


                        <Text
                            style={{
                                color: '#9754BB',
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                        >
                            {colorName}
                        </Text>
                    </View>
                    <View
                        style={{
                            marginBottom: 12,
                            paddingHorizontal: Dimensions.get('screen').width / 20,

                        }}
                    >
                        <FlatList
                            key={`FlatList-${numColumns}`}
                            data={colorsItems}
                            numColumns={numColumns}
                            renderItem={({ item }) => <FlatItem title={item} />}
                            keyExtractor={item => item.id}
                        />
                    </View>


                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 7,
                            paddingHorizontal: Dimensions.get('screen').width / 20,
                            borderTopWidth: 7,
                            borderTopColor: 'rgba(244, 244, 244, 1)',
                            paddingVertical: 7,



                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                        >Size : </Text>


                        <Text
                            style={{
                                color: '#9754BB',
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                        >
                            {sizeName}
                        </Text>
                    </View>
                    <View
                        style={{
                            marginBottom: 12,
                            paddingHorizontal: Dimensions.get('screen').width / 20,

                        }}
                    >
                        <FlatList
                            key={`FlatList-${sizeNumColumns}`}
                            data={sizeItems}
                            numColumns={sizeNumColumns}
                            renderItem={({ item }) => <SizeFlatItem title={item} />}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 7,
                            paddingHorizontal: Dimensions.get('screen').width / 20,
                            borderTopWidth: 7,
                            borderTopColor: 'rgba(244, 244, 244, 1)',
                            paddingVertical: 7,



                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                        >Size Guide : </Text>



                    </View>
                    <View
                        style={{
                            marginBottom: 12,

                        }}
                    >
                        <Image source={require('../assets/Rectangle 172.png')}
                            style={{
                                width: '100%'
                            }}
                        />
                    </View>

                    <View
                        style={{
                            paddingVertical: 18,
                            borderTopWidth: 7,
                            borderTopColor: 'rgba(244, 244, 244, 1)',
                            paddingHorizontal: Dimensions.get('screen').width / 20,


                        }}
                    >
                        <Text
                            style={{
                                fontWeight: '700',
                                fontSize: 20,
                                marginBottom: 12
                            }}
                        >Product Details</Text>
                        <Text>{productDetails[0].desc}</Text>
                    </View>


                </View>
                {/*******************Delivery******************************* */}
                <View
                    style={{
                        paddingVertical: 22,
                        borderTopWidth: 7,
                        borderTopColor: 'rgba(244, 244, 244, 1)',
                        paddingHorizontal: Dimensions.get('screen').width / 20,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: '700',
                            fontSize: 20,
                            marginBottom: 12
                        }}
                    >Delivery</Text>
                    {DeliveryItem.map((item) => {
                        return (
                            <TouchableOpacity
                                onPress={() => setDeliveryState(item.id)}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    borderColor: 'rgba(174, 100, 204, 1)',
                                    borderWidth: 1,
                                    marginBottom: 7,
                                    padding: 12,
                                    borderRadius: 10,
                                    backgroundColor: deliveryState === item.id ? 'rgba(174, 100, 204, 1)' : '#ededed'

                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: '500',
                                        color: deliveryState === item.id ? 'white' : '#000'
                                    }}
                                >{item.name}</Text>

                                <Text
                                    style={{
                                        fontSize: 13,
                                        fontWeight: '500',
                                        color: deliveryState === item.id ? 'white' : '#000'

                                    }}
                                >{item.days}</Text>

                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        color: deliveryState === item.id ? 'white' : '#000'

                                    }}
                                >{item.price}</Text>
                            </TouchableOpacity>
                        )
                    })}

                </View>
                {/******************* reviews product ****************************/}

                <View
                    style={{
                        paddingVertical: 22,
                        borderTopWidth: 7,
                        borderTopColor: 'rgba(244, 244, 244, 1)',
                        paddingHorizontal: Dimensions.get('screen').width / 20,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: '700',
                            fontSize: 20
                        }}
                    >Rating & Reviews</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginVertical: 12
                        }}
                    >
                        <Rating
                            ratingCount={6}
                            imageSize={20}
                            readonly={true}
                            startingValue={5}
                        />
                        <Text
                            style={{
                                marginLeft: 12,
                                backgroundColor: 'rgba(174, 100, 204, 1)',
                                color: '#fff',
                                padding: 5,
                                fontWeight: 'bold',
                                fontSize: 12,
                            }}
                        >4/5</Text>
                    </View>
                    <ReviewContainer
                        name={productDetails[0].reviews[0].name}
                        date={productDetails[0].reviews[0].date}
                        reviewNumber={productDetails[0].reviews[0].reviewNumber}
                        id={productDetails[0].reviews[0].id}
                        // bgcolor={productDetails[0].reviews[0].color}
                        // size={productDetails[0].reviews[0].size}
                        review={productDetails[0].reviews[0].review}
                        images={productDetails[0].reviews[0].images}
                    />

                    <ReviewContainer
                        name={productDetails[0].reviews[0].name}
                        date={productDetails[0].reviews[0].date}
                        reviewNumber={productDetails[0].reviews[0].reviewNumber}
                        id={productDetails[0].reviews[0].id}
                        // bgcolor={productDetails[0].reviews[0].color}
                        // size={productDetails[0].reviews[0].size}
                        review={productDetails[0].reviews[0].review}
                        images={productDetails[0].reviews[0].images}
                    />
                    <CommonButton
                        title={'View All Reviews'}
                        height={50}
                        width={'100%'}
                        fontsize={16}
                        fontweight={"400"}
                        textalign={'center'}
                        margintop={0}
                        marginbottom={0}
                        color={'#fff'}
                        background={'#542689'}
                        borderreduis={4}
                        changeFuncation={() => navigation.navigate('Reviews')}
                    />
                </View>
                {/****************************SimilarProducts***********************/}
                <SimilarProducts />
            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: Dimensions.get('screen').width / 20,

                }}
            >
                <View
                    style={{
                        width: Dimensions.get('screen').width / 5.80
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'white',
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            justifyContent: 'center',
                            alignItems: 'center',
                            shadowColor: '#171717',
                            shadowOffset: { width: -2, height: 4 },
                            shadowOpacity: 0.2,
                            shadowRadius: 3,

                        }}
                        onPress={handdleFav}
                    >
                        {favState ?
                            <Ionicons name="heart" size={30} color="#9754BB" />
                            :
                            <Ionicons name="heart-outline" size={30} color="#9754BB" />

                        }
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        width: Dimensions.get('screen').width - Dimensions.get('screen').width / 3.7,
                        alignSelf: 'center'
                    }}
                >
                    <CommonButton
                        title={'ADD TO CART'}
                        height={50}
                        width={'100%'}
                        fontsize={15}
                        fontweight={"600"}
                        textalign={'center'}
                        margintop={0}
                        marginbottom={0}
                        color={'#fff'}
                        background={'#542689'}
                        borderreduis={4}
                        changeFuncation={addToCart}
                        price={isActionTriggered && productDetails[0].price}
                    />
                </View>
            </View>
        </View>
    )
}

export default ProductDetails;
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').width / 1.7,
        marginHorizontal: Dimensions.get('screen').width / 20,

    },

});
