import axios from 'axios';
import { Film, Scene, Character } from '../types/types';

const apiClient = axios.create({
  baseURL: 'http://localhost:8081', // Cambia si es necesario
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funciones para gestionar películas
export const getFilms = () => apiClient.get<Film[]>('/film');
export const getFilmById = (id: number) => apiClient.get<Film>(`/film/${id}`);
export const createFilm = (data: Film) => apiClient.post('/film', data);
export const updateFilm = (id: number, data: Film) => apiClient.put(`/film/${id}`, data);
export const deleteFilm = (id: number) => apiClient.delete(`/film/${id}`);

// Funciones para gestionar escenas
export const getScenes = () => apiClient.get<Scene[]>('/scene');
export const getSceneById = (id: number) => apiClient.get<Scene>(`/scene/${id}`);
export const createScene = (data: Scene) => apiClient.post('/scene', data);
export const updateScene = (id: number, data: Partial<Scene>) => apiClient.put(`/scene/${id}`, data);
export const deleteScene = (id: number) => apiClient.delete(`/scene/${id}`);

// Funciones para gestionar personajes
export const getCharacters = () => apiClient.get<Character[]>('/characters');
export const getCharacterById = (id: number) => apiClient.get<Character>(`/characters/${id}`);
export const createCharacter = (data: Character) => apiClient.post('/characters', data);
export const updateCharacter = (id: number, data: Character) => apiClient.put(`/characters/${id}`, data);
export const deleteCharacter = (id: number) => apiClient.delete(`/characters/${id}`);
