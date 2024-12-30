import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';

const MenuScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { id: '1', name: 'Espresso', price: '₱100', image: require('../assets/1.png') },
    { id: '2', name: 'Chocolate Milk Tea', price: '₱80', image: require('../assets/2.png') },
    { id: '3', name: 'Cappuccino', price: '₱100', image: require('../assets/3.png') },
    { id: '4', name: 'Boba Milk Tea', price: '₱80', image: require('../assets/4.png') },
    { id: '5', name: 'Macchiato', price: '₱100', image: require('../assets/5.png') },
    { id: '6', name: 'Red Velvet Milk Tea', price: '₱80', image: require('../assets/6.png') },
    { id: '7', name: 'Americano', price: '₱100', image: require('../assets/7.png') },
    { id: '8', name: 'Wintermelon Milk Tea', price: '₱80', image: require('../assets/8.png') },
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={require('../assets/orig_logo.png')} style={styles.logo} />
          <Text style={styles.headerText}>Choose & Enjoy</Text>
        </View>
        {/* Search Box */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search menu items..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Menu List */}
      <FlatList
        data={menuItems.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.itemImage} resizeMode="contain" />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity style={styles.favoriteButton}>
              <Text style={styles.favoriteText}>♡</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/home.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/favourite.png')} style={styles.favouriteIcon} />
          <Text style={styles.footerText}>Favourite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/cart.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={require('../assets/profile.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBE8D3',
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    textAlign: 'center',
    marginRight: 50,
  },
  searchInput: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    elevation: 3,
  },
  listContent: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    flex: 1,
    maxWidth: '48%',
    alignItems: 'center',
    padding: 10,
    elevation: 3,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  favoriteButton: {
    backgroundColor: '#FFD700',
    padding: 5,
    borderRadius: 5,
  },
  favoriteText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  favouriteIcon: {
    width: 40,
    height: 20,
    marginBottom: 5,
  },
  footerText: {
    fontSize: 14,
    color: '#333',
  },
});

export default MenuScreen;
