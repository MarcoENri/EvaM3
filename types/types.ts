// src/types/types.ts
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// types/types.ts
export type RootStackParamList = {
  Home: undefined;
  MoviesList: undefined;
  Scenes: undefined;
  EditFilm: { film: Film; index: number };
  EditScene: { scene: Scene };
  Characters: { sceneId: number }; // Definición correcta
};


// Define the types for each screen's props
export type MoviesScreenProps = NativeStackScreenProps<RootStackParamList, 'MoviesList'>;
export type ScenesScreenProps = NativeStackScreenProps<RootStackParamList, 'Scenes'>;
export type EditFilmScreenProps = NativeStackScreenProps<RootStackParamList, 'EditFilm'>;
export type EditSceneScreenProps = NativeStackScreenProps<RootStackParamList, 'EditScene'>;
export type CharactersScreenProps = NativeStackScreenProps<RootStackParamList, 'Characters'>;

// Define the types for entities
export interface Character {
  id: number;
  description: string;
  cost: number;
  nameActor: string;
  rol: string;
  importance: number;
  scene: number;
}

export interface Scene {
  id: number;
  description: string;
  minutes: number;
  location: string;
  setting: string;
  filmId: number;
}

export interface Film {
  id?: number;
  title: string;
  director: string;
  genre: string;
  budget: number;
  duration: number;
  releaseDate: string;
  box_office: number; // Asegúrate de que este campo está definido
  poster?: string;
}

export interface SceneView {
  sceneId: number;
  sceneDescription: string;
  minutes: number;
  location: string;
  setting: string;
  filmId: number;
  filmTitle?: string;
}
