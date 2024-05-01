import { View, Text, Dimensions, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CompoNanbar from '../Common/CompoNanbar'
import PagerView from 'react-native-pager-view';
import products from "../Common/Products.json";
import { Rating } from 'react-native-ratings';
import { Ionicons } from '@expo/vector-icons';
import CommonButton from "../Common/CommonButton"
import SimilarProducts from '../Components/SimilarProducts';
import ReviewContainer from '../Components/ReviewContainer';
import { useNavigation } from '@react-navigation/native'
const ProductDetails = ({ route }) => {
    const [sizeValue, setSizeValue] = useState(null)
    const [favState, setFavState] = useState(false)
    const [isActionTriggered, setActionTriggered] = useState(false);
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
    return (
        <View
            style={{
                marginTop: Dimensions.get('screen').height / 20,
                flex: 1,
                marginBottom: Dimensions.get('screen').height / 23,
            }}
        >

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
                        marginHorizontal: Dimensions.get('screen').width / 20,

                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginBottom: 7,
                            alignItems: 'center'

                        }}
                    >
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
                                    fontSize: 15,
                                    fontWeight: '500'
                                }}
                            >
                                {productDetails[0].brandName}

                            </Text>
                        </TouchableOpacity>

                        <Text
                            style={{
                                marginLeft: 5,
                                color: 'rgba(0, 0, 0, 1)',
                                fontSize: 12,
                                fontWeight: '500'
                            }}
                        >
                            {productDetails[0].name}
                        </Text>
                    </View>

                    <Text>{productDetails[0].desc}</Text>

                    <View
                        style={{ flexDirection: 'row' }}
                    >
                        <Rating
                            ratingCount={6}
                            imageSize={13}
                            readonly={true}
                            startingValue={productDetails[0].startingValue}
                        />
                        <Text
                            style={{
                                marginLeft: 4,
                                color: 'rgba(164, 169, 179, 1)',
                                fontSize: 10,
                                fontWeight: '400'
                            }}
                        >
                            {productDetails[0].numberOfRating}
                        </Text>

                    </View>
                    <Text
                        style={{
                            marginBottom: 7,
                            color: 'rgba(0, 0, 0, 1)',
                            fontSize: 12,
                            fontWeight: '500'
                        }}
                    >
                        {productDetails[0].price}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Text>Size:</Text>
                        <Text>{sizeValue}</Text>
                    </View>
                    <View
                        style={{
                            flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'
                        }}
                    >

                        {productDetails[0].sizes.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        width: Dimensions.get('screen').width / 6,
                                        marginBottom: 7,
                                        padding: 7,
                                        borderWidth: 1,
                                        borderColor: 'rgba(151, 84, 187, 1)',
                                        alignItems: 'center',
                                        justifyContent: "center",
                                        borderRadius: 4,
                                        backgroundColor: sizeValue === item ? "rgba(151, 84, 187, 1)" : "#fff"
                                    }}
                                    onPress={() => {
                                        setSizeValue(item)
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 12,
                                            fontWeight: 600,
                                            color: sizeValue !== item ? "rgba(151, 84, 187, 1)" : "#fff"

                                        }}
                                    >
                                        {item}
                                    </Text>
                                </TouchableOpacity>

                            )
                        })}
                    </View>

                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
                    <Text>jlfkjkfl</Text>
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
                            color: 'rgba(0, 0, 0, 1)',
                            fontSize: 20,
                            fontWeight: '600',
                            marginBottom: 12
                        }}
                    >Reviews</Text>
                    <ReviewContainer
                        name={productDetails[0].reviews[0].name}
                        date={productDetails[0].reviews[0].date}
                        reviewNumber={productDetails[0].reviews[0].reviewNumber}
                        id={productDetails[0].reviews[0].id}
                        color={productDetails[0].reviews[0].color}
                        size={productDetails[0].reviews[0].size}
                        review={productDetails[0].reviews[0].review}
                        images={productDetails[0].reviews[0].images}
                    />
                    <ReviewContainer
                        name={productDetails[0].reviews[0].name}
                        date={productDetails[0].reviews[0].date}
                        reviewNumber={productDetails[0].reviews[0].reviewNumber}
                        id={productDetails[0].reviews[0].id}
                        color={productDetails[0].reviews[0].color}
                        size={productDetails[0].reviews[0].size}
                        review={productDetails[0].reviews[0].review}
                        images={productDetails[0].reviews[0].images}
                    />
                    <ReviewContainer
                        name={productDetails[0].reviews[0].name}
                        date={productDetails[0].reviews[0].date}
                        reviewNumber={productDetails[0].reviews[0].reviewNumber}
                        id={productDetails[0].reviews[0].id}
                        color={productDetails[0].reviews[0].color}
                        size={productDetails[0].reviews[0].size}
                        review={productDetails[0].reviews[0].review}
                        images={productDetails[0].reviews[0].images}
                    />
                    <ReviewContainer
                        name={productDetails[0].reviews[0].name}
                        date={productDetails[0].reviews[0].date}
                        reviewNumber={productDetails[0].reviews[0].reviewNumber}
                        id={productDetails[0].reviews[0].id}
                        color={productDetails[0].reviews[0].color}
                        size={productDetails[0].reviews[0].size}
                        review={productDetails[0].reviews[0].review}
                        images={productDetails[0].reviews[0].images}
                    />
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}
                    >

                        <Text>View More</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color="#000" />

                    </TouchableOpacity>
                </View>
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
