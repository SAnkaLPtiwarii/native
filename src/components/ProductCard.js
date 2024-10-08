import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductCard = ({ name, price, image }) => (
    <View style={styles.productCard}>
        <Image source={image} style={styles.productImage} />
        <TouchableOpacity style={styles.favButton}>
            <Ionicons name="heart-outline" size={24} color="#FF6B6B" />
        </TouchableOpacity>
        <View style={styles.productInfo}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        width: '48%',
    },
    image: {
        width: '100%',
        height: 120,
        resizeMode: 'cover',
        borderRadius: 8,
        marginBottom: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 14,
        color: 'green',
    },
    productCard: {
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginBottom: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productImage: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    favButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productInfo: {
        padding: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    productPrice: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: 'bold',
        marginTop: 5,
    },
    addButton: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default ProductCard;