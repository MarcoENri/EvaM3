import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { View, Text, TextInput, Button } from 'react-native';
import { Scene } from '../types/types'; // Ajusta la ruta según tu estructura de carpetas

const EditSceneScreen: React.FC = () => {
  const route = useRoute();
  const { sceneId } = route.params as { sceneId: number };
  const [scene, setScene] = useState<Scene | null>(null);

  useEffect(() => {
    const fetchScene = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/scene/${sceneId}`);
        setScene(response.data);
      } catch (error) {
        console.error('Error fetching scene:', error);
      }
    };
    fetchScene();
  }, [sceneId]);

  if (!scene) {
    return <Text>Loading...</Text>;
  }

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:8081/scene/${sceneId}`, scene);
      alert('Scene updated successfully');
    } catch (error) {
      console.error('Error updating scene:', error);
    }
  };

  return (
    <View>
      <Text>Description:</Text>
      <TextInput
        value={scene.description}
        onChangeText={(text) => setScene({ ...scene, description: text })}
      />
      <Text>Location:</Text>
      <TextInput
        value={scene.location}
        onChangeText={(text) => setScene({ ...scene, location: text })}
      />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
};

export default EditSceneScreen;
