import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <Ionicons name="search" size={24} color="gray" style={styles.searchIcon} />
            <TextInput
                style={styles.searchInput}
                placeholder="Search Store"
                placeholderTextColor="gray"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 10,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
});

export default SearchBar;