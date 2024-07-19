import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesScreen from './screens/MoviesScreens';
import EditFilmScreen from './screens/EditFilmScreen';
import ScenesScreen from './screens/ScenesScreen';
import EditSceneScreen from './screens/EditSceneScreen';
import CharactersScreen from './screens/CharactersScreen';
import { RootStackParamList } from './types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MoviesList">
        <Stack.Screen name="MoviesList" component={MoviesScreen} />
        <Stack.Screen name="Scenes" component={ScenesScreen} />
        <Stack.Screen name="EditFilm" component={EditFilmScreen} />
        <Stack.Screen name="EditScene" component={EditSceneScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
