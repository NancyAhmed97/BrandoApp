import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import ProductCart from '../Components/ProductCart'
import SearchInput from '../Common/SearchInput'
import ScreenNavbar from '../Common/ScreenNavbar'
import Products from "../Common/Products.json"
const WishlistScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: Dimensions.get('screen').height / 20,
        marginHorizontal: Dimensions.get('screen').width / 20
      }}
    >
      {/* <ScreenNavbar
      /> */}
<Text
style={{
  marginVertical: 20,
  fontWeight:'bold',
  fontSize:28

}}
>Wishlist</Text>
      <ScrollView>
        <View
          style={{
            flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between'
          }}
        >
          {Products.map((item,key)=>{
            return(
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
              navigationState={'wishlist-ProductDetails'}
              />
            </View>
            )
          })}
    
      
        </View>
      </ScrollView>
    </View>
  )
}

export default WishlistScreen