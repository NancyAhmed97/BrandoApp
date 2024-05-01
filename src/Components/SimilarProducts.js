import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import ProductCart from './ProductCart'
import Products from "../Common/Products.json"

const SimilarProducts = () => {
    return (
        <View
            style={{
                paddingVertical: 22,
                borderTopWidth:7,
                borderTopColor:'rgba(244, 244, 244, 1)1',
                paddingHorizontal: Dimensions.get('screen').width / 20,

            }}
        >
            <Text
                style={{
                    color: 'rgba(0, 0, 0, 1)',
                    fontSize: 20,
                    fontWeight: '600',
                    marginBottom:12
                }}
            >Similar To
            
            </Text>
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
        </View>
    )
}

export default SimilarProducts