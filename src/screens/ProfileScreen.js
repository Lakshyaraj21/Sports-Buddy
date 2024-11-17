// screens/ProfileScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store'; // Secure storage for tokens
import { api } from '../api.js'; // Correcting the import path

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = await SecureStore.getItemAsync('userToken');
      
      if (token) {
        try {
          const response = await api.getUserProfile(token); // Assuming backend has a profile API
          setUser(response.data.user);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.error(error);
        }
      } else {
        setLoading(false);
        // Handle no token (maybe redirect to login)
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text style={styles.title}>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </>
      ) : (
        <Text>No user data found. Please login.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
