import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { EditFilmScreenProps } from '../types/types';
import { Film } from '../types/types';

const EditFilmScreen: React.FC<EditFilmScreenProps> = ({ route, navigation }) => {
  const { film } = route.params;

  const [formData, setFormData] = useState<Film>({
    id: film?.id ?? undefined,
    title: film?.title ?? '',
    director: film?.director ?? '',
    genre: film?.genre ?? '',
    budget: film?.budget ?? 0,
    duration: film?.duration ?? 0,
    releaseDate: film?.releaseDate ?? '',
    box_office: film?.box_office ?? 0,
    poster: film?.poster ?? ''
  });

  useEffect(() => {
    if (film) {
      setFormData(film);
    }
  }, [film]);

  const handleSave = async () => {
    try {
      if (formData.id !== undefined) {
        await axios.put('http://localhost:8081/film/${formData.id}', formData);
        Alert.alert('Success', 'Film updated successfully');
      } else {
        // Create new film
        await axios.post('http://localhost:8081/film', formData);
        Alert.alert('Success', 'Film created successfully');
      }
      navigation.goBack(); // Go back to the previous screen after saving
    } catch (error) {
      Alert.alert('Error', 'There was an error saving the film.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Title:</Text>
      <TextInput
        value={formData.title}
        onChangeText={(text) => setFormData({ ...formData, title: text })}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Director:</Text>
      <TextInput
        value={formData.director}
        onChangeText={(text) => setFormData({ ...formData, director: text })}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Genre:</Text>
      <TextInput
        value={formData.genre}
        onChangeText={(text) => setFormData({ ...formData, genre: text })}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Budget:</Text>
      <TextInput
        keyboardType="numeric"
        value={formData.budget !== undefined ? formData.budget.toString() : '0'}
        onChangeText={(text) => setFormData({ ...formData, budget: isNaN(parseFloat(text)) ? 0 : parseFloat(text) })}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Duration:</Text>
      <TextInput
        keyboardType="numeric"
        value={formData.duration !== undefined ? formData.duration.toString() : '0'}
        onChangeText={(text) => setFormData({ ...formData, duration: isNaN(parseFloat(text)) ? 0 : parseFloat(text) })}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Release Date:</Text>
      <TextInput
        value={formData.releaseDate}
        onChangeText={(text) => setFormData({ ...formData, releaseDate: text })}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Text>Box Office:</Text>
      <TextInput
        keyboardType="numeric"
        value={formData.box_office !== undefined ? formData.box_office.toString() : '0'}
        onChangeText={(text) => setFormData({ ...formData, box_office: isNaN(parseFloat(text)) ? 0 : parseFloat(text) })}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default EditFilmScreen;