import { View, Text, Dimensions, Image, TouchableOpacity, StyleSheet, Button, Modal, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
const FilterationContainer = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const menuItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleMenuItemPress = (item) => {
    // Handle menu item press
    console.log(item);
    // You can perform any action here, such as navigating to a different screen or updating state
    toggleMenu();
  };


  return (

    <View
      style={{
        marginVertical: Dimensions.get('screen').height / 40,
        backgroundColor: '#fff',
        flexWrap: 'wrap',
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',

      }}
    >
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 12,
          borderRightColor: '#ededed',
          borderRightWidth: 2

        }}
        onPress={toggleMenu}
      >
        <Text>Sort By</Text>
        <Image source={require('../assets/Vector.png')}
          style={{
            marginRight: 7
          }}
        />
        <View style={{}}>
          <Modal
            transparent={true}
            visible={isMenuVisible}
            animationType="slide"
            onRequestClose={toggleMenu}>
            <View style={styles.modalContainer}>
              <View style={styles.menu}>
                <FlatList
                  data={menuItems}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleMenuItemPress(item)}>
                      <Text style={styles.menuItem}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
                <TouchableOpacity onPress={toggleMenu}>
                  <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>


      </TouchableOpacity>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12

          }}
          onPress={toggleMenu}
        >
          <Text>Size</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />

          <View style={{}}>
            <Modal
              transparent={true}
              visible={isMenuVisible}
              animationType="slide"
              onRequestClose={toggleMenu}>
              <View style={styles.modalContainer}>
                <View style={styles.menu}>
                  <FlatList
                    data={menuItems}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleMenuItemPress(item)}>
                        <Text style={styles.menuItem}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                  <TouchableOpacity onPress={toggleMenu}>
                    <Text style={styles.cancelButton}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>


        </TouchableOpacity>


        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12

          }}
          onPress={toggleMenu}
        >
          <Text>Colors</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />

          <View style={{}}>
            <Modal
              transparent={true}
              visible={isMenuVisible}
              animationType="slide"
              onRequestClose={toggleMenu}>
              <View style={styles.modalContainer}>
                <View style={styles.menu}>
                  <FlatList
                    data={menuItems}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleMenuItemPress(item)}>
                        <Text style={styles.menuItem}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                  <TouchableOpacity onPress={toggleMenu}>
                    <Text style={styles.cancelButton}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>


        </TouchableOpacity>





        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 12

          }}
          onPress={toggleMenu}
        >
          <Text>Brands</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />

          <View style={{}}>
            <Modal
              transparent={true}
              visible={isMenuVisible}
              animationType="slide"
              onRequestClose={toggleMenu}>
              <View style={styles.modalContainer}>
                <View style={styles.menu}>
                  <FlatList
                    data={menuItems}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleMenuItemPress(item)}>
                        <Text style={styles.menuItem}>{item}</Text>
                      </TouchableOpacity>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                  <TouchableOpacity onPress={toggleMenu}>
                    <Text style={styles.cancelButton}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>


        </TouchableOpacity>




      </ScrollView>
      {/* <TouchableOpacity
                 style={{
                    flexDirection:'row',
                    alignItems:'center'
                }}
            >
                   <Image source={require('../assets/baseline-filter_list-24px.png')}
                style={{
                    marginRight:7
                }}
                />
                <Text>Filter</Text>

            </TouchableOpacity>
            <TouchableOpacity
            style={{
                flexDirection:'row',
                alignItems:'center'
            }}
            onPress={toggleMenu}
            >
                <Image source={require('../assets/Vector.png')}
                style={{
                    marginRight:7
                }}
                />
                <Text>Sort By</Text>
                <View style={{}}>
      <Modal
        transparent={true}
        visible={isMenuVisible}
        animationType="slide"
        onRequestClose={toggleMenu}>
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            <FlatList
              data={menuItems}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleMenuItemPress(item)}>
                  <Text style={styles.menuItem}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity onPress={toggleMenu}>
              <Text style={styles.cancelButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>


            </TouchableOpacity> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cancelButton: {
    fontSize: 18,
    paddingVertical: 15,
    textAlign: 'center',
    color: 'blue',
    marginTop: 10,
  },
});


export default FilterationContainer