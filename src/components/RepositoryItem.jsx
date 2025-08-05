import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Avatar + text side by side
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
  fullName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    marginBottom: 4,
  },
  language: {
    fontStyle: 'italic',
    marginBottom: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4
  },
  boldStyle: {
    fontWeight: 'bold'
  }
});

const RepositoryItem = ({ item }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: item.ownerAvatarUrl }}
      style={styles.avatar}
    />
    <View style={styles.content}>
    <Text style={styles.fullName}>{item.fullName}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <Text style={styles.language}>Language: {item.language}</Text>
        <View style={styles.stats}>
            <Text style={styles.boldStyle}>Stars: {item.stargazersCount}</Text>
            <Text style={styles.boldStyle}>Forks: {item.forksCount}</Text>
            <Text style={styles.boldStyle}>Reviews: {item.reviewCount}</Text>
            <Text style={styles.boldStyle}>Rating: {item.ratingAverage}</Text>
        </View>
    </View>
  </View>
);

export default RepositoryItem;
