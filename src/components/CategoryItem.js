import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const CategoryItem = ({ category }) => {
    return (
        <TouchableOpacity style={styles.categoryItem}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryName}>{category.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    categoryItem: {
        width: '48%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    categoryImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    categoryName: {
        textAlign: 'center',
        fontSize: 14,
    },
});

export default CategoryItem;