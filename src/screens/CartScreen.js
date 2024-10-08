import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../context/AppContext';

const CartItem = ({ item }) => (
    <View style={styles.cartItem}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.removeButton}>
            <Ionicons name="close-circle" size={24} color="red" />
        </TouchableOpacity>
    </View>
);

const CartScreen = () => {
    const { cartItems, removeFromCart } = useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Your Cart</Text>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => (
                    <CartItem
                        item={item}
                        onRemove={() => removeFromCart(item.id)}
                    />
                )}
                keyExtractor={item => item.id}
            />
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total:</Text>
                <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
                <Ionicons name="cart" size={24} color="white" />
                <Text style={styles.checkoutText}>Proceed to Checkout</Text>
            </TouchableOpacity>
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
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    itemName: {
        flex: 2,
        fontSize: 16,
    },
    itemQuantity: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
    },
    itemPrice: {
        flex: 1,
        fontSize: 16,
        textAlign: 'right',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
    },
    checkoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 8,
        marginTop: 20,
    },
    checkoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    removeButton: {
        padding: 5,
    },
});

export default CartScreen;