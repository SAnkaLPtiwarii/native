import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccountOption = ({ icon, title }) => (
    <TouchableOpacity style={styles.option}>
        <Ionicons name={icon} size={24} color="gray" style={styles.optionIcon} />
        <Text style={styles.optionText}>{title}</Text>
        <Ionicons name="chevron-forward" size={24} color="gray" />
    </TouchableOpacity>
);

const AccountScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Ionicons name="person-circle" size={80} color="gray" />
                    <Text style={styles.name}>sankalp</Text>
                    <Text style={styles.email}>sankalp@example.com</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Account Settings</Text>
                    <AccountOption icon="person" title="Edit Profile" />
                    <AccountOption icon="location" title="Shipping Address" />
                    <AccountOption icon="card" title="Payment Methods" />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Notifications</Text>
                    <AccountOption icon="notifications" title="Push Notifications" />
                    <AccountOption icon="mail" title="Email Notifications" />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>More</Text>
                    <AccountOption icon="help-circle" title="Help Center" />
                    <AccountOption icon="document-text" title="Terms and Policies" />
                </View>

                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    email: {
        fontSize: 16,
        color: 'gray',
        marginTop: 5,
    },
    section: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 15,
        backgroundColor: '#f0f0f0',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    optionIcon: {
        marginRight: 15,
    },
    optionText: {
        flex: 1,
        fontSize: 16,
    },
    logoutButton: {
        margin: 20,
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    logoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AccountScreen;