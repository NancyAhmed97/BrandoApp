import { View, Text, Dimensions, Image, TouchableOpacity ,StyleSheet,Button, Modal, FlatList} from 'react-native'
import React, { useState } from 'react'

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
                justifyContent: 'space-around'
            }}
        >
            <TouchableOpacity
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


            </TouchableOpacity>
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