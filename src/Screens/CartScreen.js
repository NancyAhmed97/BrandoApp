import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import CommonButton from '../Common/CommonButton'
import RNPickerSelect from 'react-native-picker-select';
import Products from "../Common/Products.json"
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { Colors } from '../Constants/Colors';

const CartScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [count, setCount] = useState(0);
  const options = [
    { label: 'Qty 1', value: 'Qty1' },
    { label: 'Qty 2', value: 'Qty2' },
    { label: 'Qty 3', value: 'Qty3' },
  ];
  const placeholder = {
    label: options[0].label,
    value: options[0].value,
  };


  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: Dimensions.get('screen').height / 30,
        backgroundColor: '#f7f7fa',

      }}
    >
      <View
        style={{
          justifyContent: "center",
          marginTop: Dimensions.get('screen').height / 40,
          marginBottom: Dimensions.get('screen').height / 50,
          alignItems: 'center',


        }}
      >
        <Text
          style={{
            color: "#000",
            fontWeight: 'bold'
          }}
        >
          Cart
          <Text
            style={{
              color: "gray"
            }}
          >
            {" "} ({Products.length} items)
          </Text>

        </Text>
      </View>
      <ScrollView
        style={{
          paddingHorizontal: Dimensions.get('screen').width / 15,
        }}

      >

        {Products.map((item, key) => {
          return (
            <TouchableOpacity
              onPress={() => { navigation.navigate('Cart-ProductDetails', { id: item.id }) }}
              key={key}
              style={{
                backgroundColor: '#fff',
                padding: 12,
                borderRadius: 10,
                marginBottom: 22,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,

              }}


            >

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap'
                }}
              >
                <View
                  style={{
                    width: "40%",
                    marginRight: 7
                  }}
                >

                  <Image

                    source={require('../assets/image 15.png')}
                  />
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      left: 10,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: 'white',
                        width: 35,
                        height: 35,
                        borderRadius: '50%',
                        justifyContent: 'center',
                        alignItems: 'center'


                      }}>
                      <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={20}
                        color={'red'}
                        style={{
                          marginLeft: 3
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    width: '57%'
                  }}
                >
                  <View                  >
                    <TouchableOpacity
                      onPress={() => { }}

                    >
                      <Text
                        style={{
                          marginBottom: 7,
                          fontSize: 12,
                          color: Colors.primary
                        }}
                      >
                        {item.brandName}
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold'
                      }}
                    >
                      {item.name}

                    </Text>

                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems:'center'

                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold'
                      }}
                    >
                      {item.price}
                    </Text>
                    <View
                    style={{
                      flexDirection:'row',
                      alignItems:'center'
                    }}
                    >
                      <TouchableOpacity
                      style={{
                        width:30,
                        height:30,
                        borderColor:'rgba(174, 100, 204, 1)',
                        borderWidth:1,
                        borderRadius:'50%',
                        justifyContent:'center',
                        alignItems:'center'
                      }}
                      onPress={()=>{
                        if(count>0){
                          setCount(count-1)
                        }
                      }}

                      >
                        <Text
                        style={{
                          fontSize:14,
                          fontWeight:'bold',
                          color:'rgba(174, 100, 204, 1)'
                        }}
                        >
                          -
                        </Text>
                      </TouchableOpacity>
                      <Text
                  style={{
                    fontSize:18,
                    padding:7,
                    width:30,
                    height:30,
                    textAlign:'center'
                  }}
                      >
                        {count}
                        </Text>
                      <TouchableOpacity
                        style={{
                          width:30,
                          height:30,
                          borderColor:'rgba(174, 100, 204, 1)',
                          borderWidth:1,
                          borderRadius:'50%',
                          justifyContent:'center',
                          alignItems:'center'
                        }}
                        onPress={()=>setCount(count+1)}
                      >
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>

                  </View>

                </View>




              </View>

              {/* <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 18
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: '#7e859b',
                    padding: 5,
                    borderRadius: 5
                  }}
                >

                  <MaterialCommunityIcons
                    name="trash-can-outline"
                    size={15}
                    color={'#7e859b'}
                    style={{
                      marginLeft: 3
                    }}
                  />

                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: '400',
                      color: '#7e859b'
                    }}

                  >
                    Remove
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#7e859b',
                    padding: 5,
                    borderRadius: 5

                  }}
                >
                  <RNPickerSelect
                    placeholder={placeholder}
                    items={options}
                    onValueChange={(value) => setSelectedValue(value)}
                    value={selectedValue}
                    style={{
                      fontSize: 12
                    }}
                  />
                </View>




              </View> */}
            </TouchableOpacity>
          )
        })}
        <View
          style={{
            backgroundColor: '#fff',
            padding: 12,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            marginBottom: 12

          }}

        >
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginBottom: 12
            }}
          >
            <Text>Subtotal

              <Text
                style={{
                  color: "gray"
                }}
              >{' '}(2 items)</Text>
            </Text>
            <Text>
              EGP 300
            </Text>

          </View>


          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingBottom: 12,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              marginBottom: 12

            }}
          >
            <Text>Shipping</Text>
            <Text
              style={{
                color: 'green'
              }}
            >Free</Text>

          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}
          >
            <Text
              style={{
                fontWeight: 'bold'
              }}

            >
              Total
            </Text>
            <Text
              style={{
                fontWeight: 'bold'
              }}

            >
              EGP 300
            </Text>

          </View>

        </View>
      </ScrollView>
      <View>
        <CommonButton
          title={'Check Out'}
          height={50}
          width={'90%'}
          fontsize={15}
          fontweight={"600"}
          textalign={'center'}
          margintop={0}
          marginbottom={0}
          color={'#fff'}
          background={'#542689'}
          borderreduis={4}
          changeFuncation={() => { navigation.navigate('CheckoutScreen1') }}
          price={''}
          alignSelf="center"
        />
      </View>
    </View>
  )
}

export default CartScreen