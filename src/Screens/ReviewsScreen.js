import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import CommonHeader from '../Common/CommonHeader'
import products from "../Common/Products.json";
import ReviewContainer from '../Components/ReviewContainer';

const ReviewsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: Dimensions.get('screen').height / 30,
        backgroundColor: '#f7f7fa',
        paddingHorizontal: 22,
        backgroundColor: '#fff'

      }}
    >
      <CommonHeader
        headerState={'Reviews'}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}>
        <ReviewContainer
          name={products[0].reviews[0].name}
          date={products[0].reviews[0].date}
          reviewNumber={products[0].reviews[0].reviewNumber}
          id={products[0].reviews[0].id}
          // bgcolor={products[0].reviews[0].color}
          // size={products[0].reviews[0].size}
          review={products[0].reviews[0].review}
          images={products[0].reviews[0].images}
        />

        <ReviewContainer
          name={products[0].reviews[0].name}
          date={products[0].reviews[0].date}
          reviewNumber={products[0].reviews[0].reviewNumber}
          id={products[0].reviews[0].id}
          // bgcolor={products[0].reviews[0].color}
          // size={products[0].reviews[0].size}
          review={products[0].reviews[0].review}
          images={products[0].reviews[0].images}
        />

        <ReviewContainer
          name={products[0].reviews[0].name}
          date={products[0].reviews[0].date}
          reviewNumber={products[0].reviews[0].reviewNumber}
          id={products[0].reviews[0].id}
          // bgcolor={products[0].reviews[0].color}
          // size={products[0].reviews[0].size}
          review={products[0].reviews[0].review}
          images={products[0].reviews[0].images}
        />

        <ReviewContainer
          name={products[0].reviews[0].name}
          date={products[0].reviews[0].date}
          reviewNumber={products[0].reviews[0].reviewNumber}
          id={products[0].reviews[0].id}
          // bgcolor={products[0].reviews[0].color}
          // size={products[0].reviews[0].size}
          review={products[0].reviews[0].review}
          images={products[0].reviews[0].images}
        />
      </ScrollView>

    </View>
  )
}

export default ReviewsScreen