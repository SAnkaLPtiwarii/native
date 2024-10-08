import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../context/AppContext';
import Toast from '../components/Toast';

const CategoryItem = ({ name, image }) => (
    <TouchableOpacity style={styles.categoryItem}>
        <Image source={image} style={styles.categoryImage} />
        <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
);

const ProductCard = ({ product, showToast }) => {
    const { addToFavorites, removeFromFavorites, addToCart, favorites } = useContext(AppContext);
    const isFavorite = favorites.some(item => item.id === product.id);

    const handleAddToCart = () => {
        addToCart(product);
        showToast(`${product.name} added to cart`);
    };

    const handleToggleFavorite = () => {
        if (isFavorite) {
            removeFromFavorites(product.id);
            showToast(`${product.name} removed from favorites`);
        } else {
            addToFavorites(product);
            showToast(`${product.name} added to favorites`);
        }
    };

    return (
        <View style={styles.productCard}>
            <Image source={product.image} style={styles.productImage} />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={styles.productGradient}
            >
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
            </LinearGradient>
            <TouchableOpacity
                style={styles.favButton}
                onPress={handleToggleFavorite}
            >
                <Ionicons
                    name={isFavorite ? "heart" : "heart-outline"}
                    size={24}
                    color={isFavorite ? "#FF6B6B" : "white"}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.addButton}
                onPress={handleAddToCart}
            >
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default function ExploreScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const categories = [
        { id: '1', name: 'Fruits & Veggies', image: require('../../assets/fruits.png') },
        { id: '2', name: 'Meat & Fish', image: require('../../assets/meat.png') },
        { id: '3', name: 'Dairy & Eggs', image: require('../../assets/dairy.png') },
        { id: '4', name: 'Snacks', image: require('../../assets/snacks.png') },
    ];

    const allProducts = [
        { id: '1', name: 'Fresh Fruits', price: 4.99, image: require('../../assets/fruits.png') },
        { id: '2', name: 'Premium Steak', price: 15.99, image: require('../../assets/meat.png') },
        { id: '3', name: 'Organic Milk', price: 3.99, image: require('../../assets/dairy.png') },
        { id: '4', name: 'Crunchy Snacks', price: 2.99, image: require('../../assets/snacks.png') },
    ];

    useEffect(() => {
        setFilteredProducts(allProducts);
    }, []);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filtered = allProducts.filter(product =>
            product.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const showToast = (message) => {
        setToastMessage(message);
        setToastVisible(true);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <LinearGradient
                    colors={['#4A90E2', '#50E3C2']}
                    style={styles.header}
                >
                    <Text style={styles.headerTitle}>VSell</Text>
                    <View style={styles.searchContainer}>
                        <Ionicons name="search" size={24} color="#888" style={styles.searchIcon} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search products"
                            placeholderTextColor="#888"
                            value={searchQuery}
                            onChangeText={handleSearch}
                        />
                    </View>
                </LinearGradient>

                <Text style={styles.sectionTitle}>Categories</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    renderItem={({ item }) => <CategoryItem name={item.name} image={item.image} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.categoriesContainer}
                />

                <Text style={styles.sectionTitle}>
                    {searchQuery ? 'Search Results' : 'Featured Products'}
                </Text>
                <View style={styles.productsGrid}>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} showToast={showToast} />
                    ))}
                </View>
            </ScrollView>
            <Toast
                visible={toastVisible}
                message={toastMessage}
                onHide={() => setToastVisible(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',

    },
    header: {
        padding: 20,
        paddingTop: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 50,
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 20,
        color: '#333',
    },
    categoriesContainer: {
        paddingHorizontal: 10,
    },
    categoryItem: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    categoryImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    categoryName: {
        marginTop: 8,
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    productsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    productCard: {
        width: '48%',
        height: 200,
        marginBottom: 15,
        borderRadius: 15,
        overflow: 'hidden',
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    productGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '50%',
        justifyContent: 'flex-end',
        padding: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    productPrice: {
        fontSize: 14,
        color: '#50E3C2',
        fontWeight: 'bold',
    },
    favButton: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: '#50E3C2',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});