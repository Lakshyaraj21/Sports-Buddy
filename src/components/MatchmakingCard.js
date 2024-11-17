import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MatchmakingCard({ sport, players }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{sport}</Text>
      <Text>{players} players available</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MatchmakingCard;
