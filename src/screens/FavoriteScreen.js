import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';

const FavoriteItem = ({ item, onRemove, onAddToCart }) => (
    <View style={styles.favoriteItem}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
            <Ionicons name="add-circle" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
            <Ionicons name="close-circle" size={24} color="red" />
        </TouchableOpacity>
    </View>
);

const FavoriteScreen = () => {
    const { favorites, removeFromFavorites, addToCart } = useContext(AppContext);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Your Favorites</Text>
            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <FavoriteItem
                        item={item}
                        onRemove={() => removeFromFavorites(item.id)}
                        onAddToCart={() => addToCart(item)}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    favoriteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    itemImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 14,
        color: 'green',
        marginTop: 5,
    },
    addButton: {
        padding: 5,
    },
    removeButton: {
        padding: 5,
    },
});

export default FavoriteScreen;