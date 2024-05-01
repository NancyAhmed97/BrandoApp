import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeNavbar from '../Common/HomeNavbar'
import Brandbar from '../Common/Brandbar'
import SearchInput from '../Common/SearchInput'
import { useNavigation } from '@react-navigation/native'

const BrandsScreen = () => {
  const navigation=useNavigation();

  const images = [
    require('../assets/Group 33833.png'),
    require('../assets/Group 33834.png'),
    require('../assets/Group 33826.png'),
    require('../assets/Group 33830.png'),
    require('../assets/Group 33828.png'),
    require('../assets/Group 33829.png'),
    require('../assets/Group 33831.png'),


  ]
  return (
    <View
      style={{
        backgroundColor: '#FDFDFD',
        flex: 1,
        paddingHorizontal: 22
      }}
    >
      <HomeNavbar
        text={"All Brands"}
      />
      <View>

        <SearchInput
          text={"Search any Product.."}
        />
      </View>
<View
style={{
  marginVertical:12,
  flexDirection:'row',
  justifyContent:'space-between'
}}
>
  <Text
   style={{
    fontSize: 18,
    fontWeight: '700',
    color: '#322068'
  }}
  >
    All Brands
    </Text>
    <View
    style={{
      flexDirection:'row',
    }}
    >
<TouchableOpacity

>
  <View
  style={{
    flexDirection:'row',
    marginRight:10,
    backgroundColor:'white'
  
  }}
  >
  <Text>Sort</Text>
  <Image
  source={require('../assets/Vector.png')}
  />
  </View>
</TouchableOpacity>
<TouchableOpacity>
<View
  style={{
    flexDirection:'row',
    marginRight:10,
    backgroundColor:'white'
  
  }}
  >
  <Text>Filter</Text>
  <Image
  source={require('../assets/Component 1.png')}
  />
  </View>
</TouchableOpacity>
    </View>
</View>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between'
          }}
        >
          {images.map((img, index) => {
            return (
              <TouchableOpacity
                style={{
                  width: "49%",
                  marginBottom: 12
                }}
                onPress={()=>{
                  navigation.navigate('branddetails',{
                    id:"id",
                    name:"name"
                  })
                }}
              >

                <Image source={img} />
              </TouchableOpacity>
            )
          })}
        </View>
        <View>
        </View>
      </ScrollView>
    </View>
  )
}

export default BrandsScreen