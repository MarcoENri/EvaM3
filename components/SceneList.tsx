// src/components/SceneList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, FlatList } from 'react-native';

interface Scene {
  id: number;
  description: string;
  minutes: number;
  location: string;
  setting: string;
  filmTitle: string;
}

const SceneList: React.FC = () => {
  const [scenes, setScenes] = useState<Scene[]>([]); 

  useEffect(() => {
    const fetchScenes = async () => {
      try {
        const response = await axios.get<Scene[]>('http://localhost:8081/scene'); 
        setScenes(response.data); 
      } catch (error) {
        console.error('Error fetching scenes', error);
      }
    };

    fetchScenes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={scenes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.description}</Text>
            <Text>{item.minutes} minutes</Text>
            <Text>Location: {item.location}</Text>
            <Text>Setting: {item.setting}</Text>
            <Text>Film: {item.filmTitle}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SceneList;
