// src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; // Adjust this URL based on your backend server

// Function to handle user login
const login = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data; // Returns user data if login is successful
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Function to handle user signup
const signup = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data; // Returns success message on successful signup
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
};

// Function to fetch list of events
const getEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data; // Returns a list of events
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

// Function to fetch messages between two users (chat)
const getMessages = async (userId, chatPartnerId) => {
  try {
    const response = await axios.get(`${BASE_URL}/messages/${userId}/${chatPartnerId}`);
    return response.data; // Returns messages between the two users
  } catch (error) {
    console.error('Error fetching messages:', error);
    throw error;
  }
};

// Function to send a message
const sendMessage = async (userId, chatPartnerId, message) => {
  try {
    const response = await axios.post(`${BASE_URL}/messages/${userId}/${chatPartnerId}`, { message });
    return response.data; // Returns the sent message
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Function to fetch user profile data
const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header for authenticated routes
      },
    });
    return response.data; // Returns user profile data
  } catch (error) {
    console.error('Error fetching profile:', error);
    throw error;
  }
};

// Export all API functions
export const api = {
  login,
  signup,
  getEvents,
  getMessages,
  sendMessage,
  getUserProfile,
};
