import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { getFilms, deleteFilm } from '../services/apiClient';
import { Film } from '../types/types';

const MoviesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await getFilms();
        setFilms(response.data);
      } catch (err) {
        setError('Error fetching films');
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  const handleDelete = async (id: number) => {
    console.log(`Deleting film with id: ${id}`);
    try {
      await deleteFilm(id);
      setFilms(films.filter(film => film.id !== id));
    } catch (err) {
      Alert.alert('Error', 'Error deleting film');
      console.error('Error details:', err);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={films}
        keyExtractor={(item) => item.id?.toString() || ''}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.details}>Director: {item.director}</Text>
            <Text style={styles.details}>Genre: {item.genre}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scenes', { film: item })}>
                <Text style={styles.buttonText}>View Scenes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditFilm', { film: item, index: films.indexOf(item) })}>
                <Text style={styles.buttonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => {
                Alert.alert(
                  'Delete Film',
                  'Are you sure you want to delete this film?',
                  [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'OK', onPress: () => handleDelete(item.id!) },
                  ]
                );
              }}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('EditFilm', { film: null, index: -1 })}>
        <Text style={styles.addButtonText}>Add New Film</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#FF4C4C',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MoviesScreen;
