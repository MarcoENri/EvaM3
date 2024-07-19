import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Character } from '../types/types';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{character.nameActor}</Text>
      <Text style={styles.role}>{character.rol}</Text>
    </View>
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
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
  },
});

export default CharacterCard;
