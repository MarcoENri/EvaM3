import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Scene } from '../types/types';

interface SceneCardProps {
  scene: Scene;
  onPress: () => void;
}

const SceneCard: React.FC<SceneCardProps> = ({ scene, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.description}>{scene.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SceneCard;
