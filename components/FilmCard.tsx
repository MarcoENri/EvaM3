import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Film } from '../types/types';

interface FilmCardProps {
  film: Film;
  onPress: () => void;
}

const FilmCard: React.FC<FilmCardProps> = ({ film, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: film.poster }} style={styles.image} />
      <Text style={styles.title}>{film.title}</Text>
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
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilmCard;
