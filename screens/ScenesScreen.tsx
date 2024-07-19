// src/screens/ScenesScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SceneList from '../components/SceneList';

const ScenesScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Scenes List</Text>
      <SceneList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ScenesScreen;
