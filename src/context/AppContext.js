import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addToFavorites = (product) => {
        setFavorites(prev => [...prev, product]);
    };

    const removeFromFavorites = (productId) => {
        setFavorites(prev => prev.filter(item => item.id !== productId));
    };

    const addToCart = (product) => {
        setCartItems(prev => [...prev, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item => item.id !== productId));
    };

    return (
        <AppContext.Provider value={{
            favorites,
            cartItems,
            addToFavorites,
            removeFromFavorites,
            addToCart,
            removeFromCart
        }}>
            {children}
        </AppContext.Provider>
    );
};