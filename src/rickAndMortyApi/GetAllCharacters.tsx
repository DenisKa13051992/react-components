import { AllCharacters } from '../interfaces';

const GetAllCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const allCharacters: AllCharacters = await response.json();
  return allCharacters;
};

export default GetAllCharacters;
