import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

const ReviewContainer = ({
    name,
    date,
    reviewNumber,
    id,
    bgcolor,
    size,
    review,
    images,

}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('reviews')}
            style={{
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(244, 244, 244, 1)',
                paddingBottom: 12,
                marginBottom: 12
            }}

        >
            <View
                style={{

                }}
            >

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems:'center'
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                marginRight: 7,
                                fontSize:16,
                                fontWeight:'500'

                            }}
                        >
                            {name}
                        </Text>
            
                    </View>
                    
                    <View>
                        <Text>{date}</Text>
                    </View>
                </View>
                
                <View
                    style={{
                        flexDirection: 'row',
                        marginVertical: 7

                    }}
                >
                    {
                        bgcolor &&
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Text>color:</Text>
                            <View
                                style={{
                                    backgroundColor: { bgcolor },
                                    width: 15,
                                    height: 15,
                                    borderRadius: '50%',
                                    marginLeft: 3
                                }}
                            ></View>

                        </View>
                    }
                    {
                        size &&
                        <View
                            style={{
                                flexDirection: 'row',
                                marginLeft: 7,
                                alignItems: 'center'
                            }}
                        >
                            <Text>Size:</Text>
                            <Text>{size}</Text>

                        </View>
                    }

                </View>
                <Rating
                            ratingCount={6}
                            imageSize={13}
                            readonly={true}
                            startingValue={reviewNumber}
                            style={{
                                alignSelf:'flex-start'
                            }}
                        />
                <View
                    style={{
                        marginVertical: 14
                    }}
                >
                    <Text>
                        {review}
                    </Text>
                    {/* <View
                style={{
                    flexWrap:'wrap',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginVertical:7
                }}
                >
                    <Image source={require('../assets/Mask group.png')}style={{width:Dimensions.get('screen').width/4,marginBottom:7}} />
                    <Image source={require('../assets/Mask group.png')}style={{width:Dimensions.get('screen').width/4,marginBottom:7}} />
                    <Image source={require('../assets/Mask group.png')}style={{width:Dimensions.get('screen').width/4,marginBottom:7}} />
                    <Image source={require('../assets/Mask group.png')}style={{width:Dimensions.get('screen').width/4,marginBottom:7}} />
                    <Image source={require('../assets/Mask group.png')}style={{width:Dimensions.get('screen').width/4,marginBottom:7}} />
                    <Image source={require('../assets/Mask group.png')}style={{width:Dimensions.get('screen').width/4,marginBottom:7}} />

                </View> */}
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default ReviewContainer