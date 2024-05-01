import { View, Text, Dimensions, ScrollView, TouchableOpacity, Pressable, Image, Modal, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import CommonHeader from '../Common/CommonHeader'
import CommonButton from '../Common/CommonButton'
import Products from "../Common/Products.json"
import { Colors } from '../Constants/Colors'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RNPickerSelect from 'react-native-picker-select';
import { Rating } from 'react-native-ratings';

const orderDetailsScreen = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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
        paddingTop: Dimensions.get('screen').height / 20,
        paddingBottom: Dimensions.get('screen').height / 50,
        paddingHorizontal: Dimensions.get('screen').height / 38,
        flex: 1,
        justifyContent: 'space-between'

      }}
    >
      <View>
        <CommonHeader
          headerState="Order Details"
        />

        <View
          style={{
            marginVertical: 22
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text
              style=
              {{
                fontSize: 16,
                fontWeight: '600'
              }}
            >
              Order №1947034
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#9B9B9B'
              }}
            >
              05-12-2019
            </Text>
          </View>


          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500'

              }}
            >
              {Products.length} items
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#2AA952',
                fontWeight: '500'
              }}
            >
              Delivered
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>

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
                </View>
                <View
                  style={{
                    justifyContent: 'space-between'
                  }}
                >
                  <View>
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
                  <View>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 'bold'
                      }}
                    >
                      {item.price}
                    </Text>

                  </View>

                </View>




              </View>

              <View
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




              </View>
            </TouchableOpacity>
          )
        })}


        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500'
            }}
          >
            Order information
          </Text>
          <View

            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginBottom: 12,
              marginTop: 22

            }}
          >

            <Text
              style={{
                width: Dimensions.get('screen').width / 3,
                color: "#9B9B9B",
                fontSize: 14
              }}
            >
              Shipping Address:
            </Text>
            <Text
              style={{
                width: Dimensions.get('screen').width - Dimensions.get('screen').width / 2.2,
                color: "#222222",
                fontWeight: '500',
                fontSize: 14
              }}
            >
              3 Newbridge Court ,Chino Hills,
              CA 91709, United States
            </Text>
          </View>
          <View

            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginBottom: 12,
              marginTop: 18

            }}
          >

            <Text
              style={{
                width: Dimensions.get('screen').width / 3,
                color: "#9B9B9B",
                fontSize: 14
              }}
            >
              Payment method:
            </Text>
            <Text
              style={{
                width: Dimensions.get('screen').width - Dimensions.get('screen').width / 2.2,
                color: "#222222",
                fontWeight: '500',
                fontSize: 14
              }}
            >
              **** **** **** 3947
            </Text>
          </View>


          <View

            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginBottom: 12,
              marginTop: 18

            }}
          >

            <Text
              style={{
                width: Dimensions.get('screen').width / 3,
                color: "#9B9B9B",
                fontSize: 14
              }}
            >
              Delivery method:
            </Text>
            <Text
              style={{
                width: Dimensions.get('screen').width - Dimensions.get('screen').width / 2.2,
                color: "#222222",
                fontWeight: '500',
                fontSize: 14
              }}
            >
              FedEx, 3 days, 15$
            </Text>
          </View>



          <View

            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginBottom: 12,
              marginTop: 18

            }}
          >

            <Text
              style={{
                width: Dimensions.get('screen').width / 3,
                color: "#9B9B9B",
                fontSize: 14
              }}
            >
              Discount:
            </Text>
            <Text
              style={{
                width: Dimensions.get('screen').width - Dimensions.get('screen').width / 2.2,
                color: "#222222",
                fontWeight: '500',
                fontSize: 14
              }}
            >
              10%, Personal promo code
            </Text>
          </View>

          <View

            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginBottom: 12,
              marginTop: 18

            }}
          >

            <Text
              style={{
                width: Dimensions.get('screen').width / 3,
                color: "#9B9B9B",
                fontSize: 14
              }}
            >
              Total Amount:
            </Text>
            <Text
              style={{
                width: Dimensions.get('screen').width - Dimensions.get('screen').width / 2.2,
                color: "#222222",
                fontWeight: '500',
                fontSize: 14
              }}
            >
              133$
            </Text>
          </View>
        </View>




      </ScrollView>


      <View>
        <CommonButton
          title={'Review the Product'}
          height={50}
          width={'100%'}
          fontsize={14}
          fontweight={"500"}
          textalign={'center'}
          margintop={0}
          marginbottom={0}
          color={'#fff'}
          background={'#542689'}
          borderreduis={4}
          changeFuncation={() => setModalVisible(true)}

        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style={styles.modalText}>Please Rate  this product</Text>
            <Rating
                            ratingCount={6}
                            imageSize={30}
                            readonly={false}
                            startingValue={0}
                            style={{
                              marginVertical:12
                            }}
                        />
              <Text style={styles.modalText}>Please  review this product</Text>
              <TextInput
                style={{
                  backgroundColor: '#ededed',
                  width: Dimensions.get('screen').height / 3,
                  height: Dimensions.get('screen').height / 10,
                  borderRadius: 13,
                  marginBottom:22

                }}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

      </View>
    </View>
  )
}

export default orderDetailsScreen
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
