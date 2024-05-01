import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import CommonHeader from '../Common/CommonHeader'
import Products from "../Common/Products.json"
import ProductCart from '../Components/ProductCart'
import SearchInput from '../Common/SearchInput'
import ScreenNavbar from '../Common/ScreenNavbar'
import FilterationContainer from '../Common/FilterationContainer'

const ProductsListScreen = ({ route }) => {
    const { name } = route.params
    return (
        <View
            style={{
                paddingVertical: Dimensions.get('screen').height / 20,
                paddingHorizontal: Dimensions.get('screen').height / 38,
                flex: 1,
            }}
        >
            <CommonHeader
                headerState={name}
            />
            <FilterationContainer/>

            <ScrollView>
                <View
                    style={{
                        flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'
                    }}
                >
                    {Products.map((item, key) => {
                        return (
                            <View
                                style={{
                                    width: '49%'
                                }}
                                key={key}
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
                                    navigationState={'productDetails'}
                                />
                            </View>
                        )
                    })}


                </View>
            </ScrollView>
        </View>
    )
}

export default ProductsListScreen